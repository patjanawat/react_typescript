import { useContext } from "react"
import { UserContext } from "./UserContext"

export const User = () => { 
    const userContext = useContext(UserContext)

    const handleLogin = () => {
        if (userContext) {
            userContext.setUser({
                name: "John",
                email: "Joh@example.com"
            })
        }
    }

    const handleLogout = () => { 
        if (userContext) {
            userContext.setUser(null)
        }
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>Username: {userContext?.user?.name} </div>
            <div>Email: {userContext?.user?.email}</div>
        </div>
    )
}