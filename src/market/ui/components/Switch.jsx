import { useEffect, useState } from 'react'
import { useCoinsStore } from '../../hooks'
import './Switch.css'

export const Switch = () => {

  const { onChangeMode, isMode } = useCoinsStore();

  return (
    <label className="switch">
        <input 
          type="checkbox" 
          onClick={
            e => { 
              onChangeMode(!isMode) 
              localStorage.setItem( 'mode', !isMode )
            }
          }
          checked={(isMode)}
        />
        <span className="slider"></span>
    </label>
  )
}
