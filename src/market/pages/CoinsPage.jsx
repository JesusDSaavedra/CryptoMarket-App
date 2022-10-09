import React from 'react'
import { TableMarket } from '../components/CoinsPage/TableMarket'
import { getDataCoins } from '../helpers/getDataCoins'
import { useFetchDataCoins } from '../hooks/useFetchDataCoins'

export const CoinsPage = () => {

    const { coins, isLoading } = useFetchDataCoins()

  return (
    <div className='p-4'>
      <TableMarket coins={coins && coins} isLoading={isLoading}/>
    </div>
  )
}
