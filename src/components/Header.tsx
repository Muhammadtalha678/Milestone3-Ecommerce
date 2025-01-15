'use client'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { CartContext } from '@/context/CartContext'
import { useRouter } from 'next/navigation'

const Header = () => {
  const userId = JSON.parse(localStorage.getItem('userId')!)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const cartContext = useContext(CartContext)
  const { cart } = cartContext

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        {/* Logo Section */}
        <Link
          className="flex title-font font-medium items-center text-gray-900"
          href={'/'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            style={{ stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '2' }}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Ecommerce</span>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Cart Button */}
          <button
            type="button"
            onClick={() => router.push('/cart')}
            className="md:inline-flex items-center px-3 py-2.5 text-sm font-medium text-center text-black bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            Cart
            <span
              className="inline-flex items-center justify-center w-5 h-5 ml-2 text-xs font-semibold bg-white rounded-full"
            >
              {cart.length}
            </span>
          </button>

          {/* Hamburger Menu */}
          <button
            className="text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:items-center space-x-5 mt-4 md:mt-0 w-full md:w-auto md:block`}
        >
          <Link href={'/products'} className="block text-gray-900 hover:text-gray-600">
            Products
          </Link>
          {
            userId &&
          <Link href={'/order-details'} className="block text-gray-900 hover:text-gray-600">
            Orders
          </Link>
          }
        </nav>

        {/* Cart Button for Desktop */}
        <button
          type="button"
          onClick={() => router.push('/cart')}
          className="hidden md:inline-flex items-center px-3 py-2.5 text-sm font-medium text-center text-black bg-gray-100 rounded-lg hover:bg-gray-200"
        >
          Cart
          <span
            className="inline-flex items-center justify-center w-5 h-5 ml-2 text-xs font-semibold bg-white rounded-full"
          >
            {cart.length}
          </span>
        </button>
      </div>
    </header>
  )
}

export default Header
