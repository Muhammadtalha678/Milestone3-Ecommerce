import ProductList from '@/components/ProductList';
import { client } from '@/sanity/lib/client';
const Products = async () => {
  
    
  try {
    
    const sanity = await client.fetch(
      `*[_type == "product" && "electronics" in tags ]{
        _id,name,price,discountPercentage,tags,
        "image":[image.asset->url]
      }`
    )
    const fetchSale = await client.fetch("*[_type == 'sales']")
    console.log("fetchSale",fetchSale);
    console.log(sanity);
    
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
