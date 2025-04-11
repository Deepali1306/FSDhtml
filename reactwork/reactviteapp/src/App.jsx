import React, { useState } from 'react'
import Student from './Student'
import StateHandling from './StateHandling'
import ImageManipulation from './ImageManipulation'
import UseEffectWork from './UseEffectWork'
import Login from './Login'
import Registration from './Registration'
import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import MainLayout from './MainLayout'
import Dashboard from './Dashboard'
function App() {
  const[rdata,setrdata]=useState();


  return (
    <div>
      <div>{JSON.stringify(rdata)}</div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<MainLayout />} >  
     <Route path='/login' element={<Login logindata={rdata} />} />
     <Route path='/reg' element={<Registration regdata={setrdata}/>} />
     </Route>
     <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>

      </BrowserRouter>
   
 
  {/* <Login logindata={rdata} /> */}
  
  {/* <Registration regdata={setrdata} /> */}
  
  


    </div>
  )
}

export default App