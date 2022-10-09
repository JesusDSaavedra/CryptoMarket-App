import { useCoinsStore } from "../../hooks"
import { Loader } from "../Loader"
import { RowCoin } from "./rowCoin"

export const TableMarket = ({coins, isLoading}) => {

  const { isMode, page, onChangePage } = useCoinsStore();
  

  return (
    <div className={`table-responsive container-xl rounded-2 ${ isMode ? 'bg-dark' : 'bg-light'}`}>
      <>
        {
            ( isLoading ) ? 
                <Loader />
            : 

            <table className={`table ${ isMode ? 'table-dark' : 'table-light'} table-hover table-sm`}>
              <thead>
                <tr>
                  <td className="fw-bolder">
                    #
                  </td>
                  <td className="fw-bolder">
                    Coin
                  </td>
                  <td className="text-end fw-bolder">
                    Price
                  </td>
                  <td className="text-center fw-bolder">
                    1h
                  </td>
                  <td className="text-center fw-bolder">
                    24h
                  </td>
                  <td className="text-center fw-bolder">
                    7d
                  </td>
                  <td className="text-end fw-bolder">
                    24h Volumen
                  </td>
                  <td className="text-end fw-bolder">
                    MktCap
                  </td>
                  <td className="text-center fw-bolder">
                    Last 7 Days
                  </td>
                </tr>
              </thead>
              <tbody className='table-group-divider'>
                {coins && coins.map( coin => (
                  <RowCoin coin={coin && coin } key={coin.rank}/>
                ))}
              </tbody>
            </table>
            
        }
        
        
    </>
      
      <div className="">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${ page === '1' ? 'disabled' : ''}`}>
              <a className="page-link" onClick={ e => onChangePage( parseInt(page) - 1 > 1 ? '1' : (parseInt(page) - 1).toString() )}>
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" onClick={ e => onChangePage('1') }>
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" onClick={ e => onChangePage('2') }>
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" onClick={ e => onChangePage('3') }>
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" onClick={ e => onChangePage('4') }>
                4
              </a>
            </li>
            {/* <li className="page-item">
              <a className="page-link" href="#" onClick={ e => onChangePage('5') }>
                5
              </a>
            </li> */}
            <li className={`page-item ${ page === '4' ? 'disabled' : ''}`}>
              <a className="page-link" href="#" onClick={ e => onChangePage( parseInt(page) + 1 > 4 ? '4' : (parseInt(page) + 1).toString() )}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

  )
}