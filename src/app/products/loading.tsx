export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
       <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 -m-4">
            {
                        Array(8).fill(null).map((_, index) => (
                    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden w-full">
  {/* <!-- Product Image --> */}
  <div className="bg-gray-200 h-48 w-full animate-pulse"></div>
  
  {/* <!-- Product Details --> */}
  <div className="p-4">
    {/* <!-- Product Name --> */}
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
    {/* <!-- Product Price --> */}
    <div className="h-4 bg-gray-200 rounded w-1/4 mb-4 animate-pulse"></div>
    {/* <!-- Button --> */}
    <div className="h-10 bg-gray-300 rounded w-full animate-pulse"></div>
  </div>
      </div>
                ))               
            }
          
        </div>
      </div>
    </section>


    )
}