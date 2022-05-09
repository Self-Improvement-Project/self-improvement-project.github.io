import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";


export enum ROUTES {
	HOME = "/",
}

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path={ROUTES.HOME} element={<HomePage/>}/>
		</Routes>
	</BrowserRouter>
);

export default App;
