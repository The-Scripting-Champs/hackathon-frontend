import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useUser } from '../contexts/UserContext'

export const Signin = () => {
  const { user, setUser, navigate } = useUser()
  const [data, setData] = useState({
    email: "",
    password: "",
  })
  const [loading, setLoading] = useState<boolean>(false)

  const handleChange = (e:Event | any) => {
    e.preventDefault()
    const { name, value} = e.target
    setData((prevData:any) => ({
      ...prevData, 
      [name]:value
    }
    ))
    console.log(data)
  }


  const handleSignIn = async (e: Event | any) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('http://localhost:3001/users/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        toast.success(data.message);
        const user = localStorage.setItem('hackathonUser', JSON.stringify(data))
        setUser(user)
        return navigate('/dashboard')
      } else {
        const { error } = await response.json();
        throw new Error(error);
      }
    }catch (error:any) {
      toast.error(error.message);
    }finally{
      setLoading(false)
    }
  };

  return (
    <div id='signin'>
      <h2>Login</h2>
        <form onSubmit={handleSignIn}>
          <input 
          type="email" 
          name="email" 
          placeholder='E-mail Address'
          value={data.email}
          onChange={handleChange}
          />
          <input 
          type="password" 
          name="password" 
          placeholder='Password'
          value={data.password}
          onChange={handleChange}
          />
          <button type='submit'>Sign in</button> 
      </form>
    </div>
  )
}