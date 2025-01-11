import Link from 'next/link'
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center   h-screen">
      <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl lg:mx-64 md:mx-32 sm:mx-16 mx-8 font-bold">
        Milestone 3 E-commerce site featuring products, product details, and a shopping cart.
        <span className='bg-slate-300 '>Navigate to product page to see functionality...</span>
      </h1>
      <Link href="/products" className='mt-10 bg-indigo-400 p-2 rounded-md text-white'>
        Products
      </Link>
    </div>
  );
}
