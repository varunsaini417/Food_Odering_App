import React from 'react'
import { resData } from '../utils/mockData'
import Header from './Header'
import RestaurantCard from './RestaurantCard'

const Body = () => {
  return (
    <>
        <Header/>
        <RestaurantCard resData={resData}/>
    </>
  )
}

export default Body