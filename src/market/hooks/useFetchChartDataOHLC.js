import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getChartDataOHLC } from "../helpers/getChartDataOHCL";
import { useCoinsStore } from "./useCoinsStore";
import { useInfoCoinStore } from "./useInfoCoinStore";


export const useFetchChartDataOHLC = () => {
    
    const { isChartTime } = useInfoCoinStore();
    const { isCurrency } = useCoinsStore();
    const { id: idCoin } = useParams();

    const [dataOHLC, setDataOHLC] = useState([]);
    const [isLoadingOHLC, setIsLoadingOHLC] = useState(true);





    const getDataOHLC = async( id, currency, time ) => {
        const datas = await getChartDataOHLC( id, currency, time );
        const newDataOHLC = datas.map(data => {
            const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
            const date = new Date(data[0]);
            const newDate = new Intl.DateTimeFormat('en-GB', options ).format(date);
            return [ newDate, data[1], data[2], data[3], data[4] ];
        })
        setDataOHLC(newDataOHLC);
        setIsLoadingOHLC(false);
    }

    useEffect(() => {
        getDataOHLC( idCoin, isCurrency, isChartTime );
    },[ isChartTime, isCurrency, idCoin ]);

    return { 
        dataOHLC,
        isLoadingOHLC
    }
}