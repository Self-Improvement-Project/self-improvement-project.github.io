import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "./molecules";
import { ArticlePage, ArticlesListPage, HomePage } from "./pages";


export enum ROUTES {
	HOME = "/",
	ARTICLES = "/articles",
	ARTICLES_CATCH_ALL = "/articles/*",
	DEFAULT = "*",
}

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path={ROUTES.HOME} element={<HomePage/>}/>
			<Route path={ROUTES.ARTICLES} element={<ArticlesListPage/>}/>
			<Route path={ROUTES.ARTICLES_CATCH_ALL} element={<ArticlePage/>}/>
			<Route path={ROUTES.DEFAULT} element={<Navigate to={ROUTES.HOME}/>}/>
		</Routes>
		<Footer/>
	</BrowserRouter>
);

export default App;
