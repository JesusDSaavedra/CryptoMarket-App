import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { useCoinsStore, useFetchDataCoins } from '../../hooks'

export const ModalSearch = () => {

  const { coins } = useFetchDataCoins();
  const { isMode } = useCoinsStore();

  const [search, setSearch] = useState('')
  

  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className={`modal-content ${ isMode ? 'text-bg-dark' : 'text-bg-light'}  mt-5`}>
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Coins</h1>
            <button type="button" className={`btn-close ${isMode ? 'btn-close-white' : ''}`} data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <input 
                type="text" 
                placeholder='Search a coin' 
                className={`form-control ${ isMode ? 'bg-dark text-light' : 'bg-light text-dark'} mb-2 `}
                onChange={ e => setSearch(e.target.value) }
              />
              <table className={`table ${ isMode ? 'table-dark' : 'table-light'} table-hover table-sm`}>
                  <tbody className='table-group-divider'>
                    {filteredCoins.map( coin => (
                      <tr>
                        <td className='align-middle text-start'>
                            <img src={coin && coin.img} alt={coin && coin.name} style={{width:'25px'}} className='img-fluid me-4'/>
                            <small >
                                <NavLink 
                                    to={`coins/${coin.id}`}
                                    className={`${ isMode ? 'link-light' : 'link-dark'} text-decoration-none `}
                                >
                                  {
                                      coin && coin.name
                                  }
                                </NavLink>
                            </small>
                            <small  className="ms-3 text-uppercase ">
                                <NavLink 
                                    to={`coins/${coin.id}`}
                                    className='text-decoration-none link-secondary'
                                >
                                  {
                                      coin && coin.symbol
                                  }
                                </NavLink>
                            </small>
                        </td>
                        <td className='text-decoration-none link-secondary'>
                            {
                              `#${coin && coin.rank}`
                            }
                        </td>
                    </tr>
                    ))}
                  </tbody>
                </table>
          </div>
          <div className="modal-footer">
          </div>
        </div>
      </div>
    </div>
    
  )
}
