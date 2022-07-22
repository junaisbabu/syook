import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Dishes from '../components/dishes/Dishes'
import Login from '../components/login/Login'
import Result from '../components/result/Result'
import Tabs from '../components/tabs/Tabs'

function AppRoutes() {
  return (
    <Routes>
    <Route path='/login' element={<Login />} />
    <Route path='/main' element={<Tabs />} />
    <Route path='/dishes' element={<Dishes />} />
    <Route path='/result' element={<Result />} />
    </Routes>
  )
}

export default AppRoutes