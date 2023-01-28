import { useEffect, useState } from "react"
import axios from "axios"

const api = axios.create({
    baseURL: "https://mks-challenge-api-frontend.herokuapp.com"
})

export function useFetch<T = unknown>(url: string) {
    
    const [data, setData] = useState<T | null>(null);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        api.get(url)
            .then(response => {
                setData(response.data.products)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => {
                setIsFetching(false)
            })
    }, [])

    return { data, isFetching, error }
}