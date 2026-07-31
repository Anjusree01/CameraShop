import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/reg.css";

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const validation = () => {

        const nameRegex = /^[A-Za-z ]{3,30}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

        if (!nameRegex.test(name)) {
            alert("Enter a valid Name");
            return false;
        }

        if (!emailRegex.test(email)) {
            alert("Enter a valid Email");
            return false;
        }

        if (!passwordRegex.test(password)) {
            alert("Password must contain uppercase, lowercase, number and special character.");
            return false;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return false;
        }

        return true;
    };

    const registerUser = async (e) => {

        e.preventDefault();

        if (!validation()) return;

        try {

            const response = await fetch(
                `http://localhost:5001/users?email=${email}`
            );

            const users = await response.json();

            if (users.length > 0) {
                alert("Email already exists");
                return;
            }

            const newUser = {
                name,
                email,
                password
            };

            await fetch("http://localhost:5001/users", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(newUser)

            });

            alert("Registration Successful");

            navigate("/login");

        }
        catch (error) {

            console.log(error);
            alert("Something went wrong");

        }

    };

    return (

        <div className="container">

            <h2>Registration Form</h2>

            <form
                className="register-form"
                onSubmit={registerUser}
            >

                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

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

                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button type="submit">Register</button>

                <p className="login-text">
                  Already have an account?
                  <Link to="/login" className="login-link">
                  Login
                  </Link>
                </p>
            </form>

        </div>

    );

};

export default Register;