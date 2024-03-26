import { useEffect, useState } from "react";
import { getBookFromLocalStorage } from "../Utility/LocalStorage";

const useLocalStorage = () => {
    const [localData, setLocalData] = useState([]);
    console.log(localData);
    useEffect(() => {
        setLocalData(getBookFromLocalStorage())
    }, [])
    return { localData };
};

export default useLocalStorage;