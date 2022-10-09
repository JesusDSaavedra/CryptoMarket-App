import { useState } from "react";
import { useCoinsStore, useInfoCoinStore } from "../../hooks"
import { ModalConverter } from "./ModalConverter";


export const Aside = ({info}) => {

    const { isCurrencyConverter }  = useInfoCoinStore();
    const { isMode, isCurrency } = useCoinsStore();

    const [valueCoinInput, setValueCoinInput] = useState()
    const [valueCurrencyInput, setValueCurrencInput] = useState()

    const time = (date) => {
        let newDate = date.split('T')
        return newDate[0]
    }

    // console.log(valueCurrencyInput);

    const valueCoin = valueCoinInput * info.priceConverter;
    const valueCurrency = valueCurrencyInput / info.priceConverter;



  return (
    <aside className="col-md-4 px-4">
        <div className="row">
            <div className="col-md-12">
                <div className={`card mb-2 ${(isMode ? 'text-bg-dark border border-secondary border-1' : 'border-1')}`}
                     style={ isMode ? {background: '#212529'} : {background: '#f3f4f6'}}
                >
                    <div className="card-body">
                        <div className="input-group">
                            <span className={`input-group-text ps-3 fw-bold ${(isMode ? 'text-bg-dark border border-secondary' : 'text-bg-light border')} text-uppercase`} style={{width: '80px'}}>
                            {
                                info.symbol
                            }
                            </span>
                            <input 
                                type="number" 
                                value={ ( valueCoinInput || valueCurrency ) === 0 ? '' : valueCoinInput || valueCurrency } 
                                onChange={ e => setValueCoinInput(Number(e.target.value)) } 
                                className={`form-control ${(isMode ? 'text-bg-dark border border-secondary' : 'text-bg-light border')} `} 
                                aria-label="Username" 
                                aria-describedby="basic-addon1"
                            />
                        </div>
                        <div className="input-group flex-nowrap mt-2">
                            <button type="button" className={`input-group-text ps-3 fw-bold ${(isMode ? 'text-bg-dark border border-secondary' : 'text-bg-light border')} text-uppercase`} style={{width: '80px'}} data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                <span className='text-uppercase'>
                                    {
                                        `${isCurrencyConverter}`
                                    }
                                </span>
                            </button>
                            <ModalConverter info={info}/>
                            <input 
                                type="number" 
                                value={  (valueCoin || valueCurrencyInput) === 0 ? '' : valueCoin || valueCurrencyInput } 
                                onChange={ e => setValueCurrencInput(Number(e.target.value)) } 
                                className={`form-control ${(isMode ? 'text-bg-dark border border-secondary' : 'text-bg-light border')} `} 
                                aria-label="Username" 
                                aria-describedby="basic-addon1"
                            />
                        </div>
                        <div className="mt-2">
                            <small className="text-uppercase text-muted fw-semibold">
                                {`1 ${info.symbol} = ${new Intl.NumberFormat('en-EN', { maximumSignificantDigits: 20 }).format(info.priceConverter)} ${ isCurrencyConverter === 'eur' ? '€' : isCurrencyConverter === 'usd' ? '$' : `${isCurrencyConverter}`}`}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className={`card p-2 ${(isMode ? 'text-bg-dark border border-secondary border-1' : 'border-1')}`}
                     style={ isMode ? {background: '#212529'} : {background: '#f3f4f6'}}
                >
                    <div className="card-body ">
                        <ul className="list-group list-group-flush">
                            <h5>
                                <small className=' text-uppercase'>
                                {
                                    `${info.symbol} `
                                }
                                </small>
                                Price Today
                            </h5>
                            <p className="fw-semibold ">
                                {
                                    `${info.name} Price Today`
                                }
                            </p>
                            <li className="py-2 d-flex justify-content-between align-items-center bg-transparent border-bottom">
                                <small className={`fw-semibold  ${(isMode ? 'text-white-50' : 'text-muted')}`}>
                                    {
                                        `${info.name} Price`
                                    }
                                </small>
                                <small className={`badge text-uppercase ${(isMode ? 'text-white' : 'text-black')}`}>
                                    {
                                        `${ isCurrency === 'eur' ? '€' : isCurrency === 'usd' ? '$' : `${isCurrency} `}${new Intl.NumberFormat('en-EN', { maximumSignificantDigits: 20 }).format(info.price)}`
                                    }
                                </small>
                            </li>
                            <li className="py-2 d-flex justify-content-between align-items-center bg-transparent border-bottom">
                                <small className={`fw-semibold ${(isMode ? 'text-white-50' : 'text-muted')}`}>
                                    24h Low / 24h High
                                </small>
                                <small className={`text-uppercase badge ${(isMode ? 'text-white' : 'text-black')}`}>
                                    <span>
                                        {
                                            `${ isCurrency === 'eur' ? '€' : isCurrency === 'usd' ? '$' : `${isCurrency} `}${new Intl.NumberFormat('en-EN', { maximumSignificantDigits: 20 }).format(info.low24h)} / `
                                        }
                                    </span>
                                    <span>
                                        {
                                            ` ${ isCurrency === 'eur' ? '€' : isCurrency === 'usd' ? '$' : `${isCurrency} `}${new Intl.NumberFormat('en-EN', { maximumSignificantDigits: 20 }).format(info.high24h)}`
                                        }
                                    </span>
                                </small>
                            </li>
                            <li className="py-2 d-flex justify-content-between align-items-center bg-transparent border-bottom">
                                <small className={`fw-semibold ${(isMode ? 'text-white-50' : 'text-muted')}`}>
                                    Market Cap Rank
                                </small>
                                <small className={`badge ${(isMode ? 'text-white' : 'text-black')}`}>
                                {
                                    `#${info.rank}`
                                }
                                </small>
                            </li>
                            <li className="py-2 d-flex justify-content-between align-items-center bg-transparent border-bottom">
                                <small className={`fw-semibold ${(isMode ? 'text-white-50' : 'text-muted')}`}>
                                    Market Cap
                                </small>
                                <small className={`badge text-uppercase ${(isMode ? 'text-white' : 'text-black')}`}>
                                    {
                                        `${ isCurrency === 'eur' ? '€' : isCurrency === 'usd' ? '$' : `${isCurrency} `}${new Intl.NumberFormat('en-EN').format(info.marketCap)}`
                                    }
                                </small>
                            </li>
                            <li className="py-2 d-flex justify-content-between align-items-center bg-transparent border-bottom">
                                <small className={`fw-semibold ${(isMode ? 'text-white-50' : 'text-muted')}`}>
                                    Volume / Market Cap
                                </small>
                                <small className={`badge ${(isMode ? 'text-white' : 'text-black')}`}>
                                {
                                    (info.volumen / info.marketCap).toFixed(4)
                                }
                                </small>
                            </li>
                            <li className="py-2 d-flex justify-content-between align-items-center bg-transparent border-bottom">
                                <small className={`fw-semibold ${(isMode ? 'text-white-50' : 'text-muted')}`}>
                                All-Time High
                                </small>
                                <div className={`w-100 justify-content-between text-end ${(isMode ? 'text-bg-dark' : 'text-bg-light')}`}>
                                    <p className="mb-1 ">
                                        <small className={`badge text-uppercase ${(isMode ? 'text-white' : 'text-black')}`}>
                                            {
                                                `${ isCurrency === 'eur' ? '€' : isCurrency === 'usd' ? '$' : `${isCurrency} `}${new Intl.NumberFormat('en-EN', { maximumSignificantDigits: 20 }).format(info.allTimeHigh)}`
                                            }
                                        </small>
                                        <span className={`badge ${(info.allTimeHighPorcentage > 0 ? 'text-success' : 'text-danger')}`}>
                                            {
                                                `${new Intl.NumberFormat('en-EN').format(info.allTimeHighPorcentage.toFixed(1))}%`
                                            }
                                        </span>
                                    </p>
                                    <small  className={`badge ${(isMode ? 'text-white' : 'text-black')}`} >
                                        {
                                        `${time(info.allTimeHighDate)}`
                                        }
                                    </small>
                                </div>
                            </li>
                            <li className="py-2 d-flex justify-content-between align-items-center bg-transparent border-bottom">
                                <small className={`fw-semibold ${(isMode ? 'text-white-50' : 'text-muted')}`}>
                                    All-Time Low	
                                </small>
                                <div className={`w-100 justify-content-between text-end ${(isMode ? 'text-bg-dark' : 'text-bg-light')}`}>
                                    <p className="mb-1 ">
                                        <small className={`badge text-uppercase ${(isMode ? '' : 'text-black')}`}>
                                            {
                                                `${ isCurrency === 'eur' ? '€' : isCurrency === 'usd' ? '$' : `${isCurrency} `}${new Intl.NumberFormat('en-EN', { maximumSignificantDigits: 20 }).format(info.allTimeLow)}`
                                            }
                                        </small>
                                        <span className={`badge ${(info.allTimeLowPorcentage > 0 ? 'text-success' : 'text-danger')}`}>
                                            {
                                                `${new Intl.NumberFormat('en-EN').format(info.allTimeLowPorcentage.toFixed(1))}%`
                                            }
                                        </span>
                                    </p>
                                    <small  className={`badge ${(isMode ? '' : 'text-black')}`} >
                                        {

                                        `${time(info.allTimeLowDate)}`
                                        }
                                    </small>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </aside>
  )
}
