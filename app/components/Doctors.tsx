"use client"

import Image from "next/image"

export default function Doctors() {
  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg md:text-xl font-bold text-gray-800">Doctors</h2>
        <button className="text-sm text-green-700">View all</button>
      </div>

<div className="flex flex-wrap justify-center gap-x-8 gap-y-4">

        <div className="p-4 rounded-lg shadow bg-white flex flex-col items-center w-[300px]">
          <Image
            src="/images/vc.jpg"
            alt="Dr Vijay Garg"
            width={120}
            height={120}
            className="rounded-full w-24 h-24 object-cover"
          />
          <h3 className="text-lg font-semibold mt-3">Dr. Vijay Garg</h3>
          <h5 className="text-sm mt-1">MBBS, MD</h5>
          <p className="text-sm text-gray-500 mt-1">Medicine</p>
          <h5 className="text-sm mt-2 mb-3">★★★★★</h5>
          <button
  className="mt-3 w-full bg-[#115E59] py-1 rounded"
  style={{ color: "white" }}
>
  Book Appointment
</button>
        </div>

        <div className="p-4 rounded-lg shadow bg-white flex flex-col items-center w-[300px]">
          <Image
            src="/images/nc.jpg"
            alt="Dr Nidhi Garg"
            width={120}
            height={120}
            className="rounded-full w-24 h-24 object-cover"
          />
          <h3 className="text-lg font-semibold mt-3">Dr. Nidhi Garg</h3>
          <h5 className="text-sm mt-1">MBBS, DCH (Gold Medalist)</h5>
          <p className="text-sm text-gray-500 mt-1">Pediatrician</p>
          <h5 className="text-sm mt-2 mb-3">★★★★★</h5>
       <button
  className="mt-3 w-full bg-[#115E59] py-1 rounded"
  style={{ color: "white" }}
>
  Book Appointment
</button>
        </div>
      </div>
    </div>
  )
}
