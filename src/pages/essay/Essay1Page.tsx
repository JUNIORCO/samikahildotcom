import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Section from "../../components/Section";
import ROUTES from "../../routes";

function Essay1Page() {
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
			<Section title="Title of Essay 1" dividerClassName="w-32">
				<p>
					Despite its title this isn't meant to be the best essay. My goal here
					is to figure out what the best essay would be like. It would be
					well-written, but you can write well about any topic. What made it
					special would be what it was about. Obviously some topics would be
					better than others. It probably wouldn't be about this year's lipstick
					colors. But it wouldn't be vaporous talk about elevated themes either.
					A good essay has to be surprising. It has to tell people something
					they don't already know. The best essay would be on the most important
					topic you could tell people something surprising about. That may sound
					obvious, but it has some unexpected consequences. One is that science
					enters the picture like an elephant stepping into a rowboat. For
					example, Darwin first described the idea of natural selection in an
					essay written in 1844. Talk about an important topic you could tell
					people something surprising about. If that's the test of a great
					essay, this was surely the best one written in 1844. And indeed, the
					best possible essay at any given time would usually be one describing
					the most important scientific or technological discovery it was
					possible to make. [1] Another unexpected consequence: I imagined when
					I started writing this that the best essay would be fairly timeless —
					that the best essay you could write in 1844 would be much the same as
					the best one you could write now. But in fact the opposite seems to be
					true. It might be true that the best painting would be timeless in
					this sense. But it wouldn't be impressive to write an essay
					introducing natural selection now. The best essay now would be one
					describing a great discovery we didn't yet know about.
				</p>
			</Section>
		</React.Fragment>
	);
}

export default Essay1Page;
