import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./features/home";
import Root from "./root";
import Layout from "./components/layout";

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
                        element={<Home />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
