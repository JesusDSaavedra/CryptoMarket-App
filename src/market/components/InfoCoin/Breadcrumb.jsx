import { NavLink } from "react-router-dom"


export const Breadcrumb = ({info}) => {
  return (
    <div className='mx-1 mt-3'>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <NavLink 
                        to="/coins"
                    >
                        <small className='fw-semibold'>
                        Coins
                        </small>
                    </NavLink>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    <small className='fw-semibold'>
                        {
                            info.name
                        }
                    </small>
                </li>
            </ol>
        </nav>
    </div>
  )
}
