import React from 'react'
import Home from './Page/Home';
import About from './Page/About';
import Service from './Page/Service';
import Contact from './Page/Contact';
import Layout from './Page/Layout';
import Error from './Page/Error';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
      
      </>


      
      

    </div>
  )
}
