import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useCoinsStore } from '../../hooks';



export const FirstData = ({info}) => {

    const { isMode, isCurrency } = useCoinsStore();


    return (
        <>
            <small className='badge bg-dark text-light p-2 rounded-3 '>
            {
            `Rank #${info.rank}`
            }
            </small>
            <div className='my-3'>
                <img 
                    className='pb-2 img-fluid'
                    src={info.img}
                    width={'35px'}
                />
                <h3 className={`d-inline fw-bold ms-2 ${(isMode ? 'text-white' : 'text-black')}`}>
                    {
                        info.name
                    }
                    <small className={`text-uppercase badge ${(isMode ? 'bg-dark text-muted' : 'bg-light text-black-50')} p-2 rounded-3 fs-6 ms-2`}>
                    {
                        info.symbol
                    }
                    </small>
                </h3>
            </div>
            <div className='my-3'>
                <h2 className={`d-inline text-uppercase fw-bold ${(isMode ? 'text-light' : 'text-black')}`}>
                    {
                    `${ isCurrency === 'eur' ? '€' : isCurrency === 'usd' ? '$' : `${isCurrency} `}${new Intl.NumberFormat('en-EN', { maximumSignificantDigits: 20 }).format(info.price)}`
                    }
                </h2>
                <small className={`fs-4 ps-3 ${(info.porcentage24h > 0 ? 'text-success' : 'text-danger')}`}>
                    <FontAwesomeIcon 
                        icon={
                                ( info.porcentage24h > 0 ) ? faCaretUp : faCaretDown
                            } 
                        className='pe-2' 
                    />
                    {
                        ( info.porcentage24h === undefined ) ?
                        ''
                        :
                        `${new Intl.NumberFormat('en-EN').format(info.porcentage24h.toFixed(1))}%`
                    }
                </small>
            </div>
        </>
        
    )
}
