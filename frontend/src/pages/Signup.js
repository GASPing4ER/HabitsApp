import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import "../styles/LoginForm.css"

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [username, setUsername] = useState("")
    const { signup, error, isLoading } = useSignup()

    const passwordsMatch = password === confirmPassword;

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, username, password)
    }

    return (
        <form className = "login-form" onSubmit={handleSubmit}>
            <h3 className="habit-form__title">Sign up</h3>
            <div>
                <label className="habit-form__field-label">Email:</label>
                <input
                    className="habit-form__field-input" 
                    type="email"
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email}
                />
            </div>
            <div>
                <label className="habit-form__field-label">Username:</label>
                <input
                    className="habit-form__field-input"
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
            </div>
            <div>
                <label className="habit-form__field-label">Password:</label>
                <input
                    className="habit-form__field-input" 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password}
                />
            </div>
            <div>
                <label className="habit-form__field-label">Confirm Password:</label>
                <input
                    className="habit-form__field-input"
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                />
            </div>
            <button disabled={isLoading || !passwordsMatch} className="habit-form__submit-button">Sign up</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Signup