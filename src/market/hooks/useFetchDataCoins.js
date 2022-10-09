import { useEffect, useState } from "react";
import { getDataCoins } from "../helpers/getDataCoins";
import { useCoinsStore } from "./useCoinsStore";

export const useFetchDataCoins = () => {
    
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { isCurrency, page} = useCoinsStore()

    const getCoins = async( page, currency ) => {
        const newCoins = await getDataCoins( page, currency );
        setCoins(newCoins);
        setIsLoading(false);
    }

    useEffect(() => {
        getCoins( page, isCurrency );
    },[ isCurrency, page ])

    return { 
        coins,
        isLoading
    }
}