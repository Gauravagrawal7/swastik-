"use client"
 
import { useState } from "react"
import { Menu, Phone, Bell, MoreVertical } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 py-3 bg-[#115E59] shadow">

      
    
      <div className="flex items-center space-x-2 text-white">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-transparent focus:outline-none focus:ring-0 border-none shadow-none"
        >
          <Menu size={25} color="white" />
        </button>

        <h1 style={{ color: 'white' }} className="text-2xl font-bold">SWASTIK CLINIC</h1>
      </div>

      <div className="flex items-center space-x-4">
        <button className="bg-white text-black font-medium px-3 py-1 rounded-lg">
          Install app
        </button>
        <Phone size={24} color="white" />
         <Bell size={24} color="white" />
        <MoreVertical size={24} color="white" />
      </div>
      
    </nav>
  )
}
