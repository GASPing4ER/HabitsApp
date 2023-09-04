import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import "../styles/LoginForm.css"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login, error, isLoading } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
        <form className = "login-form" onSubmit={handleSubmit}>
            <h3 className="habit-form__title">Log in</h3>
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
                <label className="habit-form__field-label">Password:</label>
                <input
                    className="habit-form__field-input" 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password}
                />
            </div>
            <button disabled={isLoading} className="habit-form__submit-button">Log in</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Login