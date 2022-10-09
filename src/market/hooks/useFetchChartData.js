import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getChartData } from "../helpers/getChartData";
import { useCoinsStore } from "./useCoinsStore";
import { useInfoCoinStore } from "./useInfoCoinStore";

export const useFetchChartData = () => {

    const { isChartTime } = useInfoCoinStore();
    const { isCurrency } = useCoinsStore()
    const { id: idCoin } = useParams()
    
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    const getData = async( id, currency, chartTime ) => {
        const datas = await getChartData( id, currency, chartTime );
        const newData = datas.map(data => {
            const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
            const date = new Date(data[0]);
            const newDate = new Intl.DateTimeFormat('en-GB', options ).format(date);
            return [ newDate, data[1].toFixed(2)]
        })
        setData(newData);
        setIsLoading(false);
    }

    useEffect(() => {
        getData( idCoin, isCurrency, isChartTime );
    },[ isChartTime, isCurrency, idCoin ])

    return {
        data,
        isLoading
    }
}