import ProductList from '@/components/ProductList';
const Products = async () => {

    
    try {
        const response = await fetch("https://dummyjson.com/products",
    {cache:'no-cache'})
    if (!response.ok) {
       throw new Error('Failed to fetch products');
    }
        const products = await response.json()
        return (
        <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
            <ProductList products={products.products} />
        
      </div>
        </section>
        
      )
    } catch (error) {
        throw error
    }
    
       
   
}

export default Products
