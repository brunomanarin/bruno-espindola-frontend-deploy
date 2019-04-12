import React from 'react'
import '../Assets/css/Pages/errorHandler.css'

function ErrorHandler() {
  return (
    <div className="errorHandlerContainer">
      <h2>Error!</h2>
      <h3>The page could not be loaded...</h3>
      <p>Check your internet connection and try again!</p>
    </div>
  )
}

export default ErrorHandler
