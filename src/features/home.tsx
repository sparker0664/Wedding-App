import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "../vite.svg";
import classes from "./home.module.css";

export default function Home() {
    const [count, setCount] = useState(0);
    return (
        <>
            <div>
                <a
                    href="https://vite.dev"
                    target="_blank"
                >
                    <img
                        src={viteLogo}
                        className={classes.logo}
                        alt="Vite logo"
                    />
                </a>
                <a
                    href="https://react.dev"
                    target="_blank"
                >
                    <img
                        src={reactLogo}
                        className={classes.logo}
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className={classes.card}>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className={classes.readTheDocs}>
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}
