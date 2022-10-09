export const getDataCoins = async( page='1', money='usd' ) => {

    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${money}&order=market_cap_desc&per_page=100&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d`;
    const resp = await fetch( url )

    const data = await resp.json();

    const getMarketData = data.map(coin => ({
        rank: coin.market_cap_rank,
        id: coin.id,
        img: coin.image,
        name: coin.name,
        symbol: coin.symbol,
        price: coin.current_price,
        change_porcentage_1h: coin.price_change_percentage_1h_in_currency,
        change_porcentage_24h: coin.price_change_percentage_24h_in_currency,
        change_porcentage_7d: coin.price_change_percentage_7d_in_currency,
        total_volume: coin.total_volume,
        market_cap:  coin.market_cap,
        sparkline_in_7d: coin.sparkline_in_7d.price
    }));

    return getMarketData;

}