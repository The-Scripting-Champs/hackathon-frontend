import React, { useState } from 'react'
export const Signin = () => {


  const [data, setData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e:Event | any) => {
    e.preventDefault()
    const { name, value} = e.target
    setData((prevData:any) => ({
      ...prevData, 
      [name]:value
    }
      ))

  }

  return (
    <div id='signin'>
      <h2>Login</h2>
        <form>
          <input 
          type="email" 
          name="email" 
          placeholder='E-mail Address'
          value={data.email}
          />
          <input 
          type="password" 
          name="password" 
          placeholder='Password'
          value={data.password}
          />
          <input type="submit" value="Sign in" />
      </form>
    </div>
  )
}