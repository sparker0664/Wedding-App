import "@mantine/core/styles.css";

import { Button, createTheme, MantineProvider } from "@mantine/core";
import "./App.css";
import Router from "./Router";

const floralWeddingTheme = createTheme({
    fontFamily: "Open Sans, sans-serif", // Body text
    headings: {
        fontFamily: "Playfair Display, serif", // Headers
    },
    colors: {
        blushPink: [
            "#FFF5F7", // Lightest
            "#FDECEE",
            "#FBD3D8",
            "#F8BBC3",
            "#F5A2AD",
            "#F18997",
            "#ED6F81",
            "#D85968",
            "#B04456",
            "#882F43", // Darkest
        ],
        lavender: [
            "#F8F5FC", // Lightest
            "#EFE9F8",
            "#E1D3F1",
            "#D3BDEB",
            "#C4A7E4",
            "#B591DC",
            "#A47ACD",
            "#8C64B6",
            "#704F91",
            "#563A6C", // Darkest
        ],
        mintGreen: [
            "#F5FCF7", // Lightest
            "#E8F7EB",
            "#D3EED6",
            "#BFE6C1",
            "#AADDAC",
            "#94D297",
            "#7EC682",
            "#68AC6D",
            "#518956",
            "#3A6640", // Darkest
        ],
        buttercream: [
            "#FFFEFA", // Lightest
            "#FFFDF4",
            "#FFF9E8",
            "#FFF5DD",
            "#FFF1D1",
            "#FFEDC6",
            "#F9E0B3",
            "#D8C393",
            "#B7A673",
            "#958954", // Darkest
        ],
        gold: [
            "#FFF9E5", // Lightest
            "#FFF3CC",
            "#FFE099",
            "#FFCD66",
            "#FFBA33",
            "#E6A02D",
            "#CC8728",
            "#A86A21",
            "#854E1A",
            "#623214", // Darkest
        ],
        softCoral: [
            "#FFF5F3", // Lightest
            "#FFEBE6",
            "#FFD5CC",
            "#FFBFB3",
            "#FFA999",
            "#FF937F",
            "#FF7D66",
            "#D96552",
            "#A84E3F",
            "#76372C", // Darkest
        ],
        charcoalGray: [
            "#F8F8F8", // Lightest
            "#E6E6E6",
            "#C8C8C8",
            "#A9A9A9",
            "#8B8B8B",
            "#6D6D6D",
            "#525252",
            "#3D3D3D",
            "#292929",
            "#141414", // Darkest
        ],
    },
    primaryColor: "blushPink",
});

function App() {
    return (
        <MantineProvider theme={floralWeddingTheme}>
            <Router />
        </MantineProvider>
    );
}

export default App;
