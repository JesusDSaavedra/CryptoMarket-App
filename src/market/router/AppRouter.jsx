import { Navigate, Route, Routes } from "react-router-dom"
import { useCoinsStore, useFetchInfoCoin } from "../hooks"
import { CoinsPage, InfoCoinPage } from "../pages"
import { NavBar } from "../ui/components/NavBar";


export const AppRouter = () => {
    
    
  const { info } = useFetchInfoCoin();
  const { isMode } = useCoinsStore();
  

  return (
    <div style={ isMode ? {background: '#0d1117' } : {background: '#cccccc' }}>
        <NavBar info={info}/>
        <Routes>
            <Route path="coins" element={<CoinsPage/>}/>
            <Route path="coins/info" element={<InfoCoinPage/>}/>
            <Route path="coins/:id" element={<InfoCoinPage/>}/>

            <Route path="/*" element={<Navigate to="/coins" />}/>
        </Routes>
    </div>
  )
}
