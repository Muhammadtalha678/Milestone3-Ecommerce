'use client'
import { FormEvent, useState } from "react";
import {checkOutUser} from '@/actions/checkOut.action'
import { useRouter } from "next/navigation";

const PopupForm = ({ onclose }: { onclose: (popupOpen: boolean) => void }) => {
  const [error,setError] = useState("")
  const [success,setSuccess] = useState("")
  const [loading,setLoading] = useState(false)
  
  const router = useRouter()
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formEvent = new FormData(e.currentTarget)
    try {
      setLoading(true)
      const result = await checkOutUser(formEvent)
      console.log(result);
      
      if (!(result?.success)) {
        setError(result?.message)
        return
      }
      
      setSuccess(result?.message)
      console.log(result.data);
      
      localStorage.setItem('userId',JSON.stringify(result?.data._id))
      router.push('/order-details')
      // onclose(true)
    } catch (error: unknown) {
      
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unexpected error occurred.');
      }
      
    } 
    finally {
      setLoading(false)

    }
    // console.log("Form Data Submitted:",{name,email,address,country,city});
  };

  return (
   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <h2 className="text-xl font-bold mb-4">Fill the Form To Proceed</h2>
            <form onSubmit={handleSubmit}>
                {error && (
            <div className="mb-4 mx-auto text-red-500 flex justify-between items-center">
              {error}
              <button
                type="button"
                onClick={() => setError('')}
                className="text-red-500 hover:underline ml-2"
              >
                ✖
              </button>
            </div>
          )}
                {success && (
            <div className="mb-4 mx-auto text-green-500 flex justify-between items-center">
              {success}
              <button
                type="button"
                onClick={() => setSuccess('')}
                className="text-green-500 hover:underline ml-2"
              >
                ✖
              </button>
            </div>
          )}
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                  
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                  
                />
              </div>

              <div className="mb-4">
                <label htmlFor="address" className="block text-gray-700">
                  Address:
                </label>
                <textarea
                  id="address"
                  name="address"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                  rows={3}
                  
                ></textarea>
              </div>

              <div className="mb-4">
                <label htmlFor="country" className="block text-gray-700">
                  Country:
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={"Pakistan"}
                  className="w-full px-3 py-2 border rounded bg-gray-100 cursor-not-allowed"
                  readOnly
                />
              </div>

              <div className="mb-4">
                <label htmlFor="city" className="block text-gray-700">
                  City:
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={"Karachi"}
                  className="w-full px-3 py-2 border rounded bg-gray-100 cursor-not-allowed"
                  readOnly
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={()=>{onclose(false)}}
                  className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
                {loading ?
                
                  (<button disabled type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                  <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                  </svg>
                  Loading...
                  </button>
                  )

                : (<button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Submit
                </button>)}
              </div>
            </form>
          </div>
        </div>
  );
};

export default PopupForm;
