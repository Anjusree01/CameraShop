import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const loginUser = async (e) => {

        e.preventDefault();

        try {

            const response = await fetch(
                `http://localhost:5001/users?email=${email}&password=${password}`
            );

            const user = await response.json();

            if (user.length > 0) {

                localStorage.setItem(
                    "user",
                    JSON.stringify(user[0])
                );

                alert("Login Successful");

                navigate("/");

            }
            else {

                alert("Invalid Email or Password");

            }

        }
        catch (error) {

            console.log(error);

            alert("Something went wrong");

        }

    };

    return (

        <div className="container">

            <h2>Login Form</h2>

            <form
                className="login-form"
                onSubmit={loginUser}
            >

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button>
                    Login
                </button>
                <p className="register-text">
    Don't have an account?
    <Link to="/register" className="register-link">
        Register
    </Link>
</p>

            </form>

        </div>

    );

};

export default Login;