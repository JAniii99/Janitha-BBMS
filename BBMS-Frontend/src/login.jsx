import React from 'react'

const login = () => {
  return (
    <div className="p-0 m-0 font-sans bg-black w-80">
      <form > 
        <h1 className="text-center">Login</h1>
        <div class="inputbox" className="p-0 m-10 bg-orange-600" >
          <input type="text" name="name" placeholder='User Name' className="w-" required />
        </div>
        <div class="inputbox">
          <input type="password" name="name" placeholder='Password' required/>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        

      </form>
    </div>
  )
}

export default login