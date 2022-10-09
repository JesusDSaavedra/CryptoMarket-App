


export const getChartDataOHLC = async( id, currency, time ) => {
    
    const url = `https://api.coingecko.com/api/v3/coins/${id}/ohlc?vs_currency=${currency}&days=${time}`;
    const resp = await fetch( url )
    const data = await resp.json()
    

    return data;

}