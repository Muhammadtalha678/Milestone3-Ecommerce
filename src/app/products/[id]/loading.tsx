import React from 'react'

const Loading = () => {
  return (
   <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap items-center justify-center">
      {/* Skeleton for Thumbnail */}
      <div className="lg:w-1/2 w-full flex justify-center">
        <div className="w-full max-w-sm h-64 bg-gray-300 animate-pulse rounded"></div>
      </div>
      {/* Skeleton for Details */}
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest mb-2">
          <div className="bg-gray-300 w-24 h-4 animate-pulse rounded"></div>
        </h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
          <div className="bg-gray-300 w-64 h-6 animate-pulse rounded"></div>
        </h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            {/* Skeleton for Rating Stars */}
            <div className="flex space-x-2">
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index+1}
                    className="w-4 h-4 bg-gray-300 rounded animate-pulse"
                  ></div>
                ))}
            </div>
            <div className="bg-gray-300 w-16 h-4 ml-3 animate-pulse rounded"></div>
          </span>
        </div>
        {/* Skeleton for Description */}
        <div className="leading-relaxed">
          <p className="bg-gray-300 w-full h-12 animate-pulse rounded"></p>
        </div>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
        <div className="flex">
          {/* Skeleton for Price */}
          <span className="title-font font-medium text-2xl text-gray-900">
            <div className="bg-gray-300 w-20 h-6 animate-pulse rounded"></div>
          </span>
          {/* Skeleton for Button */}
          <div className="flex ml-auto bg-gray-300 py-2 px-6 animate-pulse rounded"></div>
        </div>
      </div>
    </div>
  </div>
</section>


  )
}

export default Loading
