import { AppRouter } from './market/router/AppRouter';

import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import { useCoinsStore } from './market/hooks';
import { useEffect } from 'react';


function App() {

  const { onChangeMode } = useCoinsStore()


  const modeLocalStorage = () => {
    
    const mode = localStorage.getItem('mode');
    onChangeMode(mode === 'true');
    
  }

  useEffect(() => {
    modeLocalStorage()
  }, [])


  
  
  
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App
