import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto flex items-center justify-between">
      <div>
        <p className="text-lg font-semibold">Your Company</p>
        <p className="text-sm">123 Main Street, City, Country</p>
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-indigo-500">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-500">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-500">Services</a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-500">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footer