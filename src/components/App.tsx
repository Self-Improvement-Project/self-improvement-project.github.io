import { HomePage } from "./pages";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


export enum ROUTES {
    HOME = '/',
}

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
        </Routes>
    </BrowserRouter>
  );

export default App;
