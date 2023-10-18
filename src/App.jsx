import React from 'react'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<Signup />} />

      </Routes>
    </BrowserRouter>
  )
}

