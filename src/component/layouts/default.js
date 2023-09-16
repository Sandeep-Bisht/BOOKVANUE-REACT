import React from 'react'
import { Header } from '../ui/header'
import { Footer } from '../ui/footer'

export const Default = ({children}) => {
  return (<>
            <Header/>
            {children}
            <Footer/>
          </>)
}