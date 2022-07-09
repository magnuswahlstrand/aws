import {useState} from "react";
import "./App.css";

const api_url = process.env.REACT_APP_API_URL ?? ""

export default function App() {
    const [count, setCount] = useState("");

    function onClick() {
        fetch(api_url, {
            method: "POST",
        })
            .then((response) => response.text())
            .then(function (res) {
                setCount(res)
            });
    }

    return (
        <div className="App">
            {count && <p>You clicked me {count} times.</p>}
            <button onClick={onClick}>Click Me!</button>
        </div>
    );
}
