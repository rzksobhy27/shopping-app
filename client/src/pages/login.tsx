import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.scss";

const Login: React.FC<{}> = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const check_log_status = async () => {
            let res: any = await fetch("/api/isloggedin")
            res = await res.json()
            res = JSON.parse(res)

            if (res["login_status"]) {
                window.location.href = "/home"
            }
        }

        check_log_status()
    })

    async function on_click(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.preventDefault()

        const res = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })

        if (res.redirected) {
            window.location.href = res.url
        }
    }

    // prettier-ignore
    return (
        <div className="Login">
            <input type="text"
                value={username}
                placeholder="username..."
                onChange={(e) => {
                    e.preventDefault();
                    setUsername(e.target.value);
                }}
            />
            <input type="password"
                value={password}
                placeholder="password..."
                onChange={(e) => {
                    e.preventDefault();
                    setPassword(e.target.value);
                }}
            />
            <div className="button" onClick={on_click}>Log in</div>
            <p>don't have an account? <Link to="/register">register</Link></p>
        </div>
    );
};

export default Login;
