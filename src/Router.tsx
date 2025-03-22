import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./features/home";
import Root from "./root";
import Layout from "./components/layout";
import ChurchPage from "./features/church";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Root />}
                />

                <Route element={<Layout />}>
                    <Route
                        path="home"
                        element={<HomePage />}
                    />
                </Route>
                <Route element={<Layout />}>
                    <Route
                      path="church"
                      element={<ChurchPage />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
