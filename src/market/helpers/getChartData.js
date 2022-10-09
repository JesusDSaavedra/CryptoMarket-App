

export const getChartData = async( id, currency, time ) => {
    
    const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${time}`;
    const resp = await fetch( url )

    const { prices } = await resp.json();

    return prices;

}