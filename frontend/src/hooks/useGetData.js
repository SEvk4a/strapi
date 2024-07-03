import {useEffect, useState} from "react";

export const useGetData = (url) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`http://localhost:7000/api/${url}`);
            const {data} = await response.json();

            setData(data)
        }

        getData()
    }, [])

    return {data}
}

