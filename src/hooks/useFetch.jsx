import { useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useFetch(() => {
    const getData = async () => {
        setIsPending(true)
        try {
            const req = await fetch(url)

            if (!req.ok) {
                throw new Error(req.statusText)
            }
            const data = await req.json()
            
            setData(data)
            setError(null)
            setIsPending(false)
            
        } catch (error) {
            setError(error.message)
            console.log(error.message)
            setIsPending(false)
        }
    }
    getData()
  }, [url])

  return { data, isPending, error };
}
