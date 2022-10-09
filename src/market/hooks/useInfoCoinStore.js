import { useDispatch, useSelector } from "react-redux"
import { chart, chartTime, currencyConverter} from "../store";

export const useInfoCoinStore = () => {

    const dispatch = useDispatch();

    const { isChartTime, isChart, isCurrencyConverter } = useSelector( state => state.info );

    const onChangeChartTime = ( time ) => {
        dispatch( chartTime( time ) )
    }
    const onChangeChart = ( type ) => {
        dispatch( chart( type ) )
    }
    const onChangeCurrencyConverter = ( currency ) => {
        dispatch( currencyConverter( currency ) )
    }

    return {
        // Properties
        isChartTime, 
        isChart, 
        isCurrencyConverter,

        // Metodos
        onChangeChartTime,
        onChangeChart,
        onChangeCurrencyConverter,

    }
}