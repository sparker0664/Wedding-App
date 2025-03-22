import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./features/home";
import Root from "./root";
import Layout from "./components/layout";
import ChurchPage from "./features/church";
import ReceptionPage from "./features/reception";

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
                <Route element={<Layout />}>
                    <Route
                      path="reception"
                      element={<ReceptionPage />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
