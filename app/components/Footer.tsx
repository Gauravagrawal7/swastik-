"use client";
import { FaHome, FaCalendarCheck } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-lg z-50 h-500">
      <div className="flex justify-around items-center h-full max-w-md mx-auto">
        <button className="flex flex-row items-center justify-center text-gray-800 hover:text-green-700 w-full gap-2">
          <FaHome className="text-lg" />
          <span className="text-sm">Home</span>
        </button>

        <button className="flex flex-row items-center justify-center text-gray-800 hover:text-green-700 w-full gap-2">
          <FaCalendarCheck className="text-lg" />
          <span className="text-sm">My Appointments</span>
        </button>
      </div>
     </div>
  );
}
