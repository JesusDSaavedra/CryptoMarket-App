import { useCoinsStore } from '../../hooks';
import { useInfoCoinStore } from '../../hooks/useInfoCoinStore';

export const ModalConverter = ({info}) => {

    const { isMode } = useCoinsStore();
    const { onChangeCurrencyConverter, isCurrencyConverter }  = useInfoCoinStore();

  return (
    <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className={`modal-content ${ isMode ? 'text-bg-dark' : 'text-bg-light'}  mt-5`}>
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Conversion currencies</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <h6>Suggested Currencies</h6>
                <div className="list-group">
                    <button 
                        type="button" 
                        className={`list-group-item list-group-item-action ${ isMode ? 'text-bg-dark' : 'text-bg-light'}`}
                        onClick={ e => onChangeCurrencyConverter('usd') }
                    >
                        <span className='me-2'>USD</span>
                        <small className='text-muted'>US Dollar</small>
                    </button>
                    <button 
                        type="button" 
                        className={`list-group-item list-group-item-action ${ isMode ? 'text-bg-dark' : 'text-bg-light'}`}
                        onClick={ e => onChangeCurrencyConverter('idr') }
                    >
                    <span className='me-2'>IDR</span>
                    <small className='text-muted'>Indonesian Rupiah</small>
                    </button>
                    <button 
                        type="button" 
                        className={`list-group-item list-group-item-action ${ isMode ? 'text-bg-dark' : 'text-bg-light'}`}
                        onClick={ e => onChangeCurrencyConverter('twd') }
                    >
                    <span className='me-2'>TWD</span>
                    <small className='text-muted'>New Taiwan Dollar</small>
                    </button>
                    <button 
                        type="button" 
                        className={`list-group-item list-group-item-action ${ isMode ? 'text-bg-dark' : 'text-bg-light'}`}
                        onClick={ e => onChangeCurrencyConverter('eur') }
                    >
                    <span className='me-2'>EUR</span>
                    <small className='text-muted'>Euro</small>
                    </button>
                    <button 
                        type="button" 
                        className={`list-group-item list-group-item-action ${ isMode ? 'text-bg-dark' : 'text-bg-light'}`}
                        onClick={ e => onChangeCurrencyConverter('krw') }
                    >
                    <span className='me-2'>KRW</span>
                    <small className='text-muted'>South Korean Won</small>
                    </button>
                    <button 
                        type="button" 
                        className={`list-group-item list-group-item-action ${ isMode ? 'text-bg-dark' : 'text-bg-light'}`}
                        onClick={ e => onChangeCurrencyConverter('jpy') }
                    >
                    <span className='me-2'>JPY</span>
                    <small className='text-muted'>Japanese Yen</small>
                    </button>
                    <button 
                        type="button" 
                        className={`list-group-item list-group-item-action ${ isMode ? 'text-bg-dark' : 'text-bg-light'}`}
                        onClick={ e => onChangeCurrencyConverter('rub') }
                    >
                    <span className='me-2'>RUB</span>
                    <small className='text-muted'>Russian Ruble</small>
                    </button>
                    <button 
                        type="button" 
                        className={`list-group-item list-group-item-action ${ isMode ? 'text-bg-dark' : 'text-bg-light'}`}
                        onClick={ e => onChangeCurrencyConverter('cny') }
                    >
                    <span className='me-2'>CNY</span>
                    <small className='text-muted'>Chinese Yuan</small>
                    </button>
                </div>
                <hr/>
                <h6>Cryptocurrencies</h6>
                <div className="list-group">
                    <button 
                        type="button" 
                        className={`list-group-item list-group-item-action ${ isMode ? 'text-bg-dark' : 'text-bg-light'}`}
                        onClick={ e => onChangeCurrencyConverter('btc') }
                    >
                    <span className='me-2'>BTC</span>
                    <small className='text-muted'>Bitcoin</small>
                    </button>
                    <button 
                        type="button" 
                        className={`list-group-item list-group-item-action ${ isMode ? 'text-bg-dark' : 'text-bg-light'}`}
                        onClick={ e => onChangeCurrencyConverter('eth') }
                    >
                    <span className='me-2'>ETH</span>
                    <small className='text-muted'>Ethereum</small>
                    </button>
                    <button 
                        type="button" 
                        className={`list-group-item list-group-item-action ${ isMode ? 'text-bg-dark' : 'text-bg-light'}`}
                        onClick={ e => onChangeCurrencyConverter('ltc') }
                    >
                    <span className='me-2'>LTC</span>
                    <small className='text-muted'>Litecoin</small>
                    </button>
                    <button 
                        type="button" 
                        className={`list-group-item list-group-item-action ${ isMode ? 'text-bg-dark' : 'text-bg-light'}`}
                        onClick={ e => onChangeCurrencyConverter('bch') }
                    >
                    <span className='me-2'>BCH</span>
                    <small className='text-muted'>Bitcoin Cash</small>
                    </button>
                    <button 
                        type="button" 
                        className={`list-group-item list-group-item-action ${ isMode ? 'text-bg-dark' : 'text-bg-light'}`}
                        onClick={ e => onChangeCurrencyConverter('bnb') }
                    >
                    <span className='me-2'>BNB</span>
                    <small className='text-muted'>Binance Coin</small>
                    </button>
                    <button 
                        type="button" 
                        className={`list-group-item list-group-item-action ${ isMode ? 'text-bg-dark' : 'text-bg-light'}`}
                        onClick={ e => onChangeCurrencyConverter('eos') }
                    >
                    <span className='me-2'>EOS</span>
                    <small className='text-muted'>EOS</small>
                    </button>
                    <button 
                        type="button" 
                        className={`list-group-item list-group-item-action ${ isMode ? 'text-bg-dark' : 'text-bg-light'}`}
                        onClick={ e => onChangeCurrencyConverter('xrp') }
                    >
                    <span className='me-2'>XRP</span>
                    <small className='text-muted'>XRP</small>
                    </button>
                    <button 
                        type="button" 
                        className={`list-group-item list-group-item-action ${ isMode ? 'text-bg-dark' : 'text-bg-light'}`}
                        onClick={ e => onChangeCurrencyConverter('xlm') }
                    >
                    <span className='me-2'>XLM</span>
                    <small className='text-muted'>Lumens</small>
                    </button>
                    <button 
                        type="button" 
                        className={`list-group-item list-group-item-action ${ isMode ? 'text-bg-dark' : 'text-bg-light'}`}
                        onClick={ e => onChangeCurrencyConverter('link') }
                    >
                    <span className='me-2'>LINK</span>
                    <small className='text-muted'>Chainlink</small>
                    </button>
                    <button 
                        type="button" 
                        className={`list-group-item list-group-item-action ${ isMode ? 'text-bg-dark' : 'text-bg-light'}`}
                        onClick={ e => onChangeCurrencyConverter('dot') }
                    >
                    <span className='me-2'>DOT</span>
                    <small className='text-muted'>Polkadot</small>
                    </button>
                    <button 
                        type="button" 
                        className={`list-group-item list-group-item-action ${ isMode ? 'text-bg-dark' : 'text-bg-light'}`}
                        onClick={ e => onChangeCurrencyConverter('yfi') }
                    >
                    <span className='me-2'>YFI</span>
                    <small className='text-muted'>Yearn.finance</small>
                    </button>
                </div>
                <hr/>
                <h6>Bitcoin Units</h6>
                <div className="list-group">
                    <button 
                        type="button" 
                        className={`list-group-item list-group-item-action ${ isMode ? 'text-bg-dark' : 'text-bg-light'}`}
                        onClick={ e => onChangeCurrencyConverter('bits') }
                    >
                    <span className='me-2'>BITS</span>
                    <small className='text-muted'>Bits</small>
                    </button>
                    <button 
                        type="button" 
                        className={`list-group-item list-group-item-action ${ isMode ? 'text-bg-dark' : 'text-bg-light'}`}
                        onClick={ e => onChangeCurrencyConverter('sats') }
                    >
                    <span className='me-2'>SATS</span>
                    <small className='text-muted'>Satoshi</small>
                    </button>
                </div>
                <hr/>
                <h6>Fiat Currencies</h6>
                    
                <hr/>
                <h6>Commodities</h6>
                <div className="list-group">
                    <button 
                        type="button" 
                        className={`list-group-item list-group-item-action ${ isMode ? 'text-bg-dark' : 'text-bg-light'}`}
                        onClick={ e => onChangeCurrencyConverter('xag') }
                    >
                    <span className='me-2'>XAG</span>
                    <small className='text-muted'>Silver - Troy Ounce</small>
                    </button>
                    <button 
                        type="button" 
                        className={`list-group-item list-group-item-action ${ isMode ? 'text-bg-dark' : 'text-bg-light'}`}
                        onClick={ e => onChangeCurrencyConverter('xau') }
                    >
                    <span className='me-2'>XAU</span>
                    <small className='text-muted'>Gold - Troy Ounce</small>
                    </button>
                </div>
                </div>
                <div className="modal-footer">
                </div>
            </div>
        </div>
    </div>
  )
}
