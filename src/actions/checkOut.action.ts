'use server'

export const checkOutUser = async(formData:FormData) => {
    const name = formData.get('name')
    const email = formData.get('email')
    const address = formData.get('address')
    const city = formData.get('city')
    const country = formData.get('country')
    try {
        const response = await fetch("/api/user",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({name,email,address,city,country})
            }
        )
        
        const result = await response.json()
        // console.log(result);
        
        if (result.error) return { success: false, message: result.message }
        return { success: true, message: result.message, data: result.data}
        
    }   catch (error) {
        return {success:false,message:"Something went wrong" + error}
    }
}
