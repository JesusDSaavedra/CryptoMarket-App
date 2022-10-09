import { NavLink } from 'react-router-dom'
import { ModalCurrency } from '../../components/ModalCurrency'
import { useCoinsStore } from '../../hooks'
import reactLogo from './assets/react.svg'
import { ModalSearch } from './ModalSearch'

import './NavBar.css'
import { Switch } from './Switch'


export const NavBar = ({info}) => {

  const { isMode, isCurrency } = useCoinsStore()

  return (
    <nav className={`navbar navbar-expand-lg ${isMode ? 'bg-dark navbar-dark' : 'bg-light'}`}>
        <div className="container-fluid">
            <NavLink 
                to="/coins"
            >
              <img src={reactLogo} className="logo react mx-2" alt="React logo" />
            </NavLink>
            <NavLink 
                to="/coins"
                className="navbar-brand"
            >
              CryptoMarket
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
            </ul>
            <form className="d-flex" role="search">
                <div className="form-check form-switch mx-2 pt-1">
                  <Switch />
                </div>
                <button type="button" className={`btn ${isMode ? 'btn-outline-light' : 'btn-outline-secondary'} me-2`} data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <span className='text-uppercase'>
                    {
                      isCurrency
                    }
                  </span>
                </button>
                <ModalCurrency info={info}/>
                <input className={`form-control ${ isMode ? 'bg-dark text-light' : 'bg-light text-dark'} me-2 `} type="search" placeholder="Search a coin" aria-label="Search" data-bs-toggle="modal" data-bs-target="#exampleModalToggle"/>
                <ModalSearch />
            </form>
            </div>
        </div>
      </nav>
  )
}
