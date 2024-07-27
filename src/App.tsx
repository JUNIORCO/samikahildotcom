import { Outlet } from "react-router-dom";
import AppContainer from "./components/AppContainer";

function App() {
	return (
		<AppContainer>
			<Outlet />
		</AppContainer>
	);
}

export default App;
