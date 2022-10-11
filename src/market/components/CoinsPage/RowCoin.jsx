import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { useCoinsStore } from '../../hooks';

import { SparkLine7d } from './SparkLine7d';



export const RowCoin = ({ coin }) => {

    const { isMode, isCurrency } = useCoinsStore()

  
    return (
        <tr >
            <td className='align-middle text-start'>
                {coin && coin.rank}
            </td>
            <td className='align-middle text-start'>
                <img src={coin && coin.img} alt={coin && coin.name} style={{width:'25px'}} className='img-fluid me-4'/>
                <small >
                    <NavLink 
                        to={`${coin.id}`}
                        className={`${ isMode ? 'link-light' : 'link-dark'} text-decoration-none `}
                    >
                    {
                        coin && coin.name
                    }
                    </NavLink>
                </small>
                <small  className="ms-3 text-uppercase ">
                <NavLink 
                        to={`${coin.id}`}
                        className='text-decoration-none link-secondary'
                    >
                    {
                        coin && coin.symbol
                    }
                    </NavLink>
                </small>
            </td>
            <td className='align-middle text-end '>
                <small className='text-uppercase'>
                    {
                        `${ isCurrency === 'eur' ? '€' : isCurrency === 'usd' ? '$' : `${isCurrency} `}${new Intl.NumberFormat('en-EN', { maximumSignificantDigits: 20 }).format(coin && coin.price)}`
                    }
                </small>
            </td>
            <td className={`align-middle text-center ${coin && coin.change_porcentage_1h > 0 ? 'text-success' : 'text-danger'}`}>
                <small className={` ${(coin && coin.change_porcentage_1h > 0 ? 'text-success' : 'text-danger')}`}>
                    <FontAwesomeIcon 
                        icon={
                                ( coin && coin.change_porcentage_1h > 0 ) ? faCaretUp : faCaretDown
                            } 
                        className='pe-1' 
                    />
                    {
                        ( coin && coin.change_porcentage_1h === null ) ?
                        ''
                        :
                        `${new Intl.NumberFormat('en-EN').format(coin && coin.change_porcentage_1h.toFixed(2))}%`
                    }
                </small>
            </td>
            <td className={`align-middle text-center ${coin && coin.change_porcentage_24h > 0 ? 'text-success' : 'text-danger'}`}>
                <small className={` ${(coin && coin.porcentage24h > 0 ? 'text-success' : 'text-danger')}`}>
                    <FontAwesomeIcon 
                        icon={
                                ( coin && coin.change_porcentage_24h > 0 ) ? faCaretUp : faCaretDown
                            } 
                        className='pe-1' 
                    />
                    {
                        ( coin && coin.change_porcentage_24h === null ) ?
                        ''
                        :
                        `${new Intl.NumberFormat('en-EN').format(coin && coin.change_porcentage_24h.toFixed(2))}%`
                    }
                </small>
            </td>
            <td className={`align-middle text-center ${coin && coin.change_porcentage_7d > 0 ? 'text-success' : 'text-danger'}`}>
                <small className={` ${(coin && coin.change_porcentage_7d > 0 ? 'text-success' : 'text-danger')}`}>
                    <FontAwesomeIcon 
                        icon={
                                ( coin && coin.change_porcentage_7d > 0 ) ? faCaretUp : faCaretDown
                            } 
                        className='pe-1' 
                    />
                    {
                        ( coin && coin.change_porcentage_7d === null ) ?
                        ''
                        :
                        `${new Intl.NumberFormat('en-EN').format(coin && coin.change_porcentage_7d.toFixed(2))}%`
                    }
                </small>
            </td>
            <td className='align-middle text-end '>
                <small>
                    {
                        `${new Intl.NumberFormat('en-EN', { maximumSignificantDigits: 20 }).format(coin && coin.total_volume)}`
                    }
                </small>
            </td>
            <td className='align-middle text-end '>
                <small>
                    {
                        `${new Intl.NumberFormat('en-EN', { maximumSignificantDigits: 20 }).format(coin && coin.market_cap)}`
                    }
                </small>
            </td>
            <td  className={`${coin && coin.change_porcentage_7d > 0 ? 'text-success' : 'text-danger'}`}>
                <SparkLine7d coin={coin}/>
            </td>
        </tr>
    )
}
