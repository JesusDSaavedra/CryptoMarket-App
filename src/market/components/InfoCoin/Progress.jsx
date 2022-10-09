import { useCoinsStore } from "../../hooks";


export const Progress = ({info}) => {

    const { isMode, isCurrency } = useCoinsStore();

    const porcentage = () => {
        const total = info.high24h - info.low24h;
        const actual = info.price - info.low24h;
        const progress = (100 * actual) / total;
        return progress.toFixed(0)
    };

    return (
        <div className="row">
            <div className="col-md-9">
                <div className='my-3'>
                    <div className="progress bg-secondary bg-opacity-50" style={{height: '8px'}}>
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-info bg-opacity-50" 
                            role="progressbar" 
                            aria-label="Animated striped example" 
                            aria-valuenow={`${porcentage()}`}
                            aria-valuemin="0" 
                            aria-valuemax="100" 
                            style={{width: `${porcentage()}%`}}>
                        </div>
                    </div>
                    <div className="position-relative pt-1">
                        <div className="position-absolute top-0 start-0">
                            <small  className={`text-uppercase fw-bold ${( isMode ? 'text-white' : 'text-dark')}`}>
                                {
                                    `${ isCurrency === 'eur' ? '€' : isCurrency === 'usd' ? '$' : `${isCurrency} `}${new Intl.NumberFormat('en-EN', { maximumSignificantDigits: 20 }).format(info.low24h)}`
                                }
                            </small>
                        </div>
                        <div className="position-absolute top-0 start-50 translate-middle-x">
                            <small className={`fw-bold ${( isMode ? 'text-white' : 'text-dark')}`}>
                                24H Range
                            </small>
                        </div>
                        <div className="position-absolute top-0 end-0">
                            <small className={`text-uppercase fw-bold ${( isMode ? 'text-white' : 'text-dark')}`}>
                                {
                                    `${ isCurrency === 'eur' ? '€' : isCurrency === 'usd' ? '$' : `${isCurrency} `}${new Intl.NumberFormat('en-EN', { maximumSignificantDigits: 20 }).format(info.high24h)}`
                                }
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
