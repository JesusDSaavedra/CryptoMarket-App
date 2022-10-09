import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfinity } from '@fortawesome/free-solid-svg-icons'
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons'
import { useCoinsStore } from '../../hooks'


export const SecondData = ({info}) => {

    const { isMode, isCurrency } = useCoinsStore();

    return (
        <div className='row mt-4'>
            <div className="col-md-6">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent border-bottom">
                        <small className={`fw-semibold ${(isMode ? 'text-white-50' : 'text-muted')}`}>
                            Market Cap
                            <span className="d-inline-block" 
                            tabIndex="0" 
                            data-bs-toggle="popover" 
                            data-bs-trigger="hover focus" 
                            data-bs-title="Market Cap = Current Price x Circulating Supply"
                            data-bs-content='Refers to the total market value of a cryptocurrency’s circulating supply. It is similar to the stock market’s measurement of multiplying price per share by shares readily available in the market (not held & locked by insiders, governments'>
                                <FontAwesomeIcon icon={ faCircleQuestion } className='ps-2' />
                            </span>
                        </small>
                        <small className={`text-uppercase fw-semibold ${(isMode ? 'text-white' : 'text-black')}`}>
                            {
                                `${ isCurrency === 'eur' ? '€' : isCurrency === 'usd' ? '$' : `${isCurrency} `}${new Intl.NumberFormat('en-EN').format(info.marketCap)}`
                            }
                        </small>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent border-bottom">
                        <small className={`fw-semibold ${(isMode ? 'text-white-50' : 'text-muted')}`}>
                            24 Hour Trading Vol
                            <span className="d-inline-block" 
                            tabIndex="0" 
                            data-bs-toggle="popover" 
                            data-bs-trigger="hover focus" 
                            data-bs-content='A measure of a cryptocurrency trading volume across all tracked platforms in the last 24 hours. This is tracked on a rolling 24-hour basis with no open/closing times.'>
                                <FontAwesomeIcon icon={ faCircleQuestion } className='ps-2' />
                            </span>
                        </small>
                        <small className={`text-uppercase fw-semibold ${(isMode ? 'text-white' : 'text-black')}`}>
                            {
                                `${ isCurrency === 'eur' ? '€' : isCurrency === 'usd' ? '$' : `${isCurrency} `}${new Intl.NumberFormat('en-EN').format(info.tradingVol)}`
                            }
                        </small>
                    </li>
                    {
                        info.markfullyDilutedValuationetCap === undefined 
                        ?   <></>
                        :   <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent border-bottom">
                                <small className={`fw-semibold ${(isMode ? 'text-white-50' : 'text-muted')}`}>
                                    Fully Diluted Valuation
                                    <span className="d-inline-block" 
                                    tabIndex="0" 
                                    data-bs-toggle="popover" 
                                    data-bs-trigger="hover focus" 
                                    data-bs-title="FDV = Current Price x Max Supply"
                                    data-bs-content='The market capitalization (valuation) if the max supply of a coin is in circulation. Note that it can take 3, 5, 10 or more years before the FDV can be reached, depending on how the emission schedule is designed'>
                                    <FontAwesomeIcon icon={ faCircleQuestion } className='ps-2' />
                                    </span>
                                </small>
                                <small className={`fw-semibold ${(isMode ? 'text-white' : 'text-black')}`}>
                                    {
                                        `${new Intl.NumberFormat('en-EN').format(info.markfullyDilutedValuationetCap)}`
                                    }
                                </small>
                            </li>
                        
                    }
                </ul>
            </div>
            <div className="col-md-6">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent border-bottom">
                        <small className={`fw-semibold  ${(isMode ? 'text-white-50' : 'text-muted')}`}>
                            Circulating Supply
                            <span className="d-inline-block" 
                                tabIndex="0" 
                                data-bs-toggle="popover" 
                                data-bs-trigger="hover focus" 
                                data-bs-content='The amount of coins that are circulating in the market and are tradeable by the public. It is comparable to looking at shares readily available in the market (not held & locked by insiders, governments).'>
                                <FontAwesomeIcon icon={ faCircleQuestion } className='ps-2' />
                            </span>
                        </small>
                        <small className={`fw-semibold ${(isMode ? 'text-white' : 'text-black')}`}>
                            {
                                `${new Intl.NumberFormat('en-EN').format(info.circulatingSupply.toFixed(0))}`
                            }
                        </small>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent border-bottom">
                        <small className={`fw-semibold ${(isMode ? 'text-white-50' : 'text-muted')}`}>
                            Total Supply
                            <span className="d-inline-block" 
                            tabIndex="0" 
                            data-bs-toggle="popover" 
                            data-bs-trigger="hover focus" 
                            data-bs-title="Total Supply = Onchain supply - burned tokens"
                            data-bs-content='The amount of coins that have already been created, minus any coins that have been burned (removed from circulation). It is comparable to outstanding shares in the stock market.'>
                            <FontAwesomeIcon icon={ faCircleQuestion } className='ps-2' />
                            </span>
                        </small>
                        <small className={`fw-semibold ${(isMode ? 'text-white' : 'text-black')}`}>
                            {
                                `${new Intl.NumberFormat('en-EN').format(info.totalSupply.toFixed(0))}`
                            }
                        </small>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent border-bottom">
                        <small className={`fw-semibold ${(isMode ? 'text-white-50' : 'text-muted')}`}>
                            Max Supply
                            <span className="d-inline-block" 
                            tabIndex="0" 
                            data-bs-toggle="popover" 
                            data-bs-trigger="hover focus" 
                            data-bs-title="Max Supply = Theoretical maximum as coded"
                            data-bs-content='The maximum number of coins coded to exist in the lifetime of the cryptocurrency. It is comparable to the maximum number of issuable shares in the stock market.'>
                            <FontAwesomeIcon icon={ faCircleQuestion } className='ps-2' />
                            </span>
                        </small>
                        <small className={`fw-semibold ${(isMode ? 'text-white' : 'text-black')}`}>
                        {
                            info.maxSupply === null 
                            ?  <FontAwesomeIcon icon={ faInfinity } />
                            : `${new Intl.NumberFormat('en-EN').format(info.maxSupply)}`
                            
                        }
                        </small>
                    </li> 
                </ul>
            </div>
        </div>
    )
}
