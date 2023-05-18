import React from 'react'

import { Header } from './components/Header/index.jsx'
import { ProductsList } from './components/Products/index.jsx'

import 'boxicons'

export function App() {
  return (
    <div className='App'>
      <Header />
      <ProductsList />
    </div>
  )
}
