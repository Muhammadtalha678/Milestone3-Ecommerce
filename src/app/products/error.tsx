'use client'
import React, { useEffect } from 'react'

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
  }) => {
  
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  return (
     <div>
      <h2>{error.message}</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}

export default Error