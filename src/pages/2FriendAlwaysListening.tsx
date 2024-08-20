import { MathJax } from "better-react-mathjax";
import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Divider from "../components/Divider";
import Quote from "../components/Quote";
import Section from "../components/Section";
import Subtitle from "../components/Subtitle";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "../components/Table";
import Title from "../components/Title";
import useDocumentMeta from "../hooks/useDocumentMeta";
import ROUTES from "../routes";

function FriendAlwaysListening() {
  const title = "Friend's “Always Listening” Feature is Sketchy";
  useDocumentMeta(
    title,
    "It could cost as much as $20 per user per year to power always listening for Friend.",
  );

  return (
    <React.Fragment>
      <Breadcrumb
        links={[
          {
            label: "Home",
            to: ROUTES.root,
          },
          {
            label: "Essays",
            to: ROUTES.essays,
          },
        ]}
      />
      <Section title={title} subtitle="August 21, 2024" dividerClassName="mb-8">
        <Title>Preface</Title>
        <p>
          This is not an attack on Friend or the team behind Friend. This is a
          technical dive, with the purpose of understanding the economics and
          engineering behind the always listening feature of Friend.
        </p>
        <Divider />
        <p>
          Friend says that their device is always listening. From the website:
        </p>
        <br />
        <Quote content="When connected via bluetooth, your friend is always listening and forming their own internal thoughts." />
        <p>
          I've worked with transcribing speech into text before, and know first
          hand that it isn't cheap to do. My first instinct was “damn, must be a
          strong team to figure out a cheap way to do this at scale”.
        </p>
        <br />
        <p>
          Then I saw the team and became suspicious. We'll be investigating what
          it means for Friend to always be listening from an engineering and
          financial perspective.
        </p>
        <br />
        <Title>Assumptions</Title>
        <p>
          Assume Friend sells 10,000 devices in this initial batch. Each device
          is transcribing 4 hours of audio a day. I believe this is a fair
          assumption for the initial customer profile of a Friend buyer, as I
          think they are incapable of engaging in more hours beyond than that.
        </p>
        <br />
        <p>
          So, we'll assume <span className="font-bold">10,000 devices</span>,
          each transcribing <span className="font-bold">4 hours a day</span>, or{" "}
          <span className="font-bold">2.4 million minutes a day</span>.
        </p>
        <br />
        <Title>Approaches</Title>
        <p>Let's go through 6 ways to build always listening.</p>
        <br />
        <Subtitle>1. On-Device Transcription</Subtitle>
        <p>
          Transcription can be done on-device by using a tiny model and only
          utilizing the CPU. However, given the size of the device and it's
          price point ($99), one can be sure that there isn't a powerful CPU on
          board. Therefore, it is highly unlikely that the device can perform
          always-on transcription efficiently without draining the battery,
          maintaining a low word error rate, or processing the audio fast
          enough.
        </p>
        <br />
        <Subtitle>2. Cloud Services</Subtitle>
        <p>
          Friend could be using a 3rd party cloud service for speech to text
          like AWS, GCP, Azure, OpenAI, Deepgram, or AssemblyAI. At the time of
          writing, the cheapest seems to be Deepgram, which is priced at $0.0036
          per minute of audio.
        </p>
        <br />
        <p>
          Let's make this fun and also assume that Friend cuts a fantastic
          enterprise deal with Deepgram that brings that cost down by half to
          $0.0018 per minute. At that price, to transcribe 2.4 million minutes
          per day would cost $4,320 per day, or close to{" "}
          <span className="font-bold">$1.6M per year</span>. Obviously this
          cannot work.
        </p>
        <br />
        <Subtitle>3. Self Hosted Whisper</Subtitle>
        <p>
          Let's try running Whisper, a popular speech to text model, on our own
          infra. There are several open-source variations of Whisper, like
          Faster-Whisper, WhisperX, and Whisper Jax that are faster and more
          efficient than the original implementation.
        </p>
        <br />
        <p>
          Here is my benchmark of <span className="font-bold">WhisperX</span>{" "}
          transcribing a <span className="font-bold">20 minute audio file</span>{" "}
          on a <span className="font-bold">single A100 40GB</span>:
        </p>
        <br />
        <Table>
          <TableHeader>
            <TableHeaderCell />
            <TableHeaderCell>Run 1</TableHeaderCell>
            <TableHeaderCell>Run 2</TableHeaderCell>
            <TableHeaderCell>Run 3</TableHeaderCell>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell isInitialColumn>Model</TableCell>
              <TableCell>large-v2</TableCell>
              <TableCell>tiny.en</TableCell>
              <TableCell>tiny.en</TableCell>
            </TableRow>
            <TableRow altBackground>
              <TableCell isInitialColumn>Batch Size</TableCell>
              <TableCell>16</TableCell>
              <TableCell>16</TableCell>
              <TableCell>1</TableCell>
            </TableRow>
            <TableRow bottomBorder>
              <TableCell isInitialColumn>Precision</TableCell>
              <TableCell>float16</TableCell>
              <TableCell>int8</TableCell>
              <TableCell>int8</TableCell>
            </TableRow>
            <TableRow altBackground>
              <TableCell isInitialColumn>Time</TableCell>
              <TableCell>15s</TableCell>
              <TableCell>5s</TableCell>
              <TableCell>10s</TableCell>
            </TableRow>
            <TableRow>
              <TableCell isInitialColumn>Peak GPU Utilization</TableCell>
              <TableCell>100%</TableCell>
              <TableCell>84%</TableCell>
              <TableCell>84%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <br />
        <p>
          The peak GPU utilization is high, which means that each GPU can only
          handle a single user's transcription at a time. At the time of
          writing, there doesn't seem to be a way to allow a single GPU to
          handle multiple transcriptions from different audio files at the same
          time.
        </p>
        <br />
        <p>
          I also wouldn't use smaller models because Friend is expected to be
          used everywhere you go, even in loud places where the large models
          work way better.
        </p>
        <br />
        <p>
          The question then is: how many GPUs would be required to run the
          large-v2 model, given 10,000 users each speaking for 4 hours a day,
          with the audio recorded in 20 minute chunks?
        </p>
        <br />
        <p>
          From Run 1, a single GPU can process 20-minute transcriptions per hour{" "}
          <MathJax inline>{"\\(\\frac{3,600}{15} = 240\\)"}</MathJax> 20 minute
          chunks per hour.
        </p>
        <br />
        <p>
          10,000 users each transcribing 4 hours of audio a day is equal to{" "}
          <MathJax inline>
            {"\\(\\frac{10,000 \\times 4}{24} \\approx 1,666\\)"}
          </MathJax>{" "}
          hours of audio needed to be transcribed per hour.
        </p>
        <br />
        <p>
          In terms of chunks, that's{" "}
          <MathJax inline>{"\\(1,666 \\times 3 = 5,000\\)"}</MathJax> 20-minute
          chunks that need to be transcribed per hour.
        </p>
        <br />
        <p>
          Therefore the number of GPUs needed{" "}
          <MathJax inline>{"\\(= \\frac{5,000}{240} = 21\\)"}</MathJax> GPUs
          running all the time.
        </p>
        <br />
        <p>
          The cheapest A100 I could find is $1.69 per hour from RunPod. 21 GPUs
          at $1.69 per hour per GPU would cost almost $1,000 per day or{" "}
          <span className="font-bold">$365,000</span> per year. Or, per user,
          that's{" "}
          <span className="font-bold">$36.5 per user in a single year</span>.
        </p>
        <br />
        <p>
          If the small model from Run 2 were used, it would cost 1/3rd the
          price; roughly $121,000 per year or ~$12 per user in a single year.
          But the accuracy takes a big hit, and it could degrade the user
          experience (“I'm having falafel” could turn into “I'm having a
          waffle”).
        </p>
        <br />
        <Subtitle>4. Self Hosted CPUs</Subtitle>
        <p>
          You could run Whisper.cpp or Faster-Whisper on regular servers without
          the need for a GPU. Although that sounds cheaper in theory, the issue
          is it takes much, much longer to transcribe the audio, and like GPUs,
          only one transcription can run at a time. That eliminates the effects
          of any cost savings, as you'd need significantly more servers to
          handle the same workload, which drives up the cost in almost the same
          way as using GPUs.
        </p>
        <br />
        <p>
          I ran the large model locally on my MacBook M3 Pro and it took almost
          5 minutes (300 seconds) to transcribe 20 minutes.
        </p>
        <br />
        <p>
          So a single instance can process{" "}
          <MathJax inline>{"\\(\\frac{3,600}{300} = 12\\)"}</MathJax> 20-minute
          transcriptions per hour.
        </p>
        <br />
        <p>
          With the same calculations as section 3, then the number of GPUs
          needed is{" "}
          <MathJax inline>{"\\(= \\frac{5,000}{12} \\approx 417\\)"}</MathJax>
          {"."}
        </p>
        <br />
        <p>
          Whisper.cpp's docs say that the big model requires roughly 4 GB of
          memory. The EC2 compute-optimized instance types are in the C-class,
          and the cheapest one with 8 GB of memory has an hourly rate of just
          over $0.1 on a 1 year compute savings plan.
        </p>
        <br />
        <p>
          Let's make it fun and assume that this instance performs at the same
          level as my Mac Pro. That would still cost{" "}
          <span className="font-bold">$365,000 per year</span>, which is still
          not the case and.
        </p>
        <br />
        <Subtitle>5. Transcribe on iPhone</Subtitle>
        <p>
          I noticed, when writing this essay, an important detail that I missed
          when I first started with these experiments.
        </p>
        <br />
        <p>The quote from Friend's website says something important:</p>
        <br />
        <Quote
          content={
            <>
              <span className="bg-yellow-200 dark:bg-yellow-600 font-semibold">
                When connected via bluetooth
              </span>
              {", "}
              friend is always listening and forming their own internal
              thoughts.
            </>
          }
        />
        <p>
          Does the always listening feature require a bluetooth connection to
          the iPhone? If so, that could mean that the audio is recorded on
          device and then periodically sent to the phone for transcription. This
          seems plausible, as Apple provides a Speech API for iOS (link) (link).
        </p>
        <br />
        <p>
          The Speech API allows you to run on-device transcriptions from
          pre-recorded audio files. However, according to Apple, it is not as
          accurate as a transcription that would run on a server, and can be a
          battery hog. I could be wrong about this, but I believe it is intended
          for single speaker transcripts in quite environments, which is unlike
          how the Friend is expected to be used.
        </p>
        <br />
        <p>
          If this is the approach Friend ends up using, I predict the first
          batch of customers to receive the device to complain about battery
          drains from the Friend app.
        </p>
        <br />
        <p>
          Another approach would be to transcribe on the iPhone using
          Whisper.cpp. However, from the repo (link), it looks like it takes 1
          second to transcribe 4 seconds of audio on an iPhone 13. Too slow to
        </p>
        <br />
        <Subtitle>6. "Periodic Listening"</Subtitle>
        <p>
          Most of the problems I mentioned above would be solved if Friend only
          transcribes the past 5 minutes of audio from when you tapped on it. Or
          if it transcribes randomly throughout the day. But transcribing
          everything that's recorded is not just expensive but also inconvenient
          if it comes at the cost of a battery being drained.
        </p>
        <br />
        <Title>Closing Thoughts</Title>
        <p>
          Despite finding holes in every approach, I still believe the Friend
          will always be listening as marketed. I don't doubt what they're
          saying, and wish them the best of luck.
        </p>
        <br />
        <p>Checkout link btw for a no bullshit product.</p>
      </Section>
    </React.Fragment>
  );
}

export default FriendAlwaysListening;
