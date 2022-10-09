import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInfoCoin } from "../helpers/getInfoCoin";
import { useCoinsStore } from "./useCoinsStore";
import { useInfoCoinStore } from "./useInfoCoinStore";

export const useFetchInfoCoin = () => {
    
    const { isCurrency } = useCoinsStore()
    const { isCurrencyConverter }  = useInfoCoinStore();
    const { id: idCoin } = useParams();

    
    const [info, setInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getInfo = async( id, currency ) => {
        const newInfo = await getInfoCoin( id, currency, isCurrencyConverter );
        setInfo(newInfo);
        setIsLoading(false);
    }

    useEffect(() => {
        getInfo(idCoin, isCurrency, isCurrencyConverter);
    },[ isCurrency, idCoin, isCurrencyConverter ])

    return {
        info: info,
        isLoading
    }
}