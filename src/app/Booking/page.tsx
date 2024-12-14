"use client"

import React from 'react'
import FlightDetails from './components/FlightsDetails'
import Header from './components/Header'
import FindFlight from '../components/FindFlight'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Header />
      <FindFlight />
      <FlightDetails />
    </div>
  )
}

export default page