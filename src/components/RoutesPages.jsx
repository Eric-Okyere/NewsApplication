import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import {UserContextProvider} from "../UserContext"

import HomePage from '../Pages/Home/HomePage'




export default function RoutesPages  ()  {
  return (
    // <UserContextProvider>
   <Routes>
   
   <Route index path='/'   element={<HomePage />}>
 


 
   </Route>
   
   </Routes>
  //  </UserContextProvider>
  )
}

