

export const getInfoCoin = async( id, currecy = 'usd', currecyConverter ) => {

    const url = `https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true&community_data=true&developer_data=&sparkline=false`;
    const resp = await fetch( url )

    const data = await resp.json();


    return {
        id: data.id,
        rank: data.market_data.market_cap_rank,
        img: data.image.small,
        name: data.name,
        symbol: data.symbol,
        price: data.market_data.current_price[currecy],
        priceConverter: data.market_data.current_price[currecyConverter],
        marketCap: data.market_data.market_cap[currecy],
        tradingVol: data.market_data.total_volume[currecy],
        circulatingSupply: data.market_data.circulating_supply,
        fullyDilutedValuation: data.market_data.fully_diluted_valuation[currecy],
        totalSupply: data.market_data.total_supply,
        maxSupply: data.market_data.max_supply,
        porcentage1h: data.market_data.price_change_percentage_1h_in_currency[currecy],
        porcentage24h: data.market_data.price_change_percentage_24h_in_currency[currecy],
        porcentage7d: data.market_data.price_change_percentage_7d_in_currency[currecy],
        porcentage14d: data.market_data.price_change_percentage_14d_in_currency[currecy],
        porcentage30d: data.market_data.price_change_percentage_30d_in_currency[currecy],
        porcentage1y: data.market_data.price_change_percentage_1y_in_currency[currecy],
        description: data.description.en,
        currentPrice: data.market_data.current_price,
        low24h: data.market_data.low_24h[currecy],
        high24h: data.market_data.high_24h[currecy],
        volumen: data.market_data.total_volume[currecy],
        allTimeHigh: data.market_data.ath[currecy],
        allTimeHighPorcentage: data.market_data.ath_change_percentage[currecy],
        allTimeHighDate: data.market_data.ath_date[currecy],
        allTimeLow: data.market_data.atl[currecy],
        allTimeLowPorcentage: data.market_data.atl_change_percentage[currecy],
        allTimeLowDate: data.market_data.atl_date[currecy],
}

}