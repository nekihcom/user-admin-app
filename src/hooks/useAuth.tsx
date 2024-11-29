import axios from "axios";
import { useCallback, useState } from "react"
import { User } from "../types/api/user";
import { useHistory } from "react-router-dom";

export const useAuth = () => {
    const history = useHistory();

    const [loading, setLoading] = useState(false);
    const login = useCallback((id: string) => {
        setLoading(true);
        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(async res => {
                if (res.data) {
                    history.push("/home");
                } else {
                    // error
                    alert("User not found.")
                }
            }).catch(() => alert("cannot login"))
            .finally(() => setLoading(false));
    }, []);

    return {login, loading}
}