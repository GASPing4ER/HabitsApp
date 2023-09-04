import { useAuthContext } from "./useAuthContext"
import { useHabitsContext } from "./useHabitsContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: dispatchHabits } = useHabitsContext()

    const logout = () => {
        // remove user from storage
        localStorage.removeItem("user")

        // dispatch logout action
        dispatch({type: "LOGOUT"})
        dispatchHabits({ type: 'SET_HABITS', payload: [] })
    }

    return { logout }
}