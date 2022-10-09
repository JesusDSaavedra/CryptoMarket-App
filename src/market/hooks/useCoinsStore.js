import { useDispatch, useSelector } from "react-redux"
import { changeCurrency, changeMode, changePage } from "../store";

export const useCoinsStore = () => {

    const dispatch = useDispatch();

    const { isMode, isCurrency, page } = useSelector( state => state.ui );

    const onChangeMode = (mode) => {
        dispatch( changeMode(mode) )
    }
    const onChangeCurrency = ( currency ) => {
        dispatch( changeCurrency( currency ) )
    }
    const onChangePage = ( page ) => {
        dispatch( changePage( page ) )
    }

    return {
        // Properties
        isMode,
        isCurrency,
        page,

        // Metodos
        onChangeMode,
        onChangeCurrency,
        onChangePage
    }
}