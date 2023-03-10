import React, { useState} from 'react'
import { toast } from 'react-toastify'
import { useUser } from '../contexts/UserContext'


export const Signup = () => {
  const { navigate } = useUser()

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    signUpType: ""
  })

  const handleChange = (e:Event | any) => {
    e.preventDefault()
    const { name, value} = e.target
    setFormData((prevData:any) => ({
      ...prevData, 
      [name]:value
    }
    ))
  }

  const handleSignUp = async (e: Event | any) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:3001/users/signup', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const data = await response.json();
        toast.success(data.message);
        navigate('/signin')
      }else {
        const { error } = await response.json();
        throw new Error(error);
      } 
    }catch (error:any) {
      toast.error(error.message);
    }
  };

  return (
    <div id='signup'>
       <h1>Sign up:</h1>
    <form onSubmit={handleSignUp}>
      <input 
        type="text" 
        name="fullName" 
        placeholder='Full Name'
        value={formData.fullName}
        onChange={handleChange}
      />
      <input 
        type="email" 
        name="email" 
        placeholder='E-mail Address'
        value={formData.email}
        onChange={handleChange}
      />
      <input 
        type="password" 
        name="password" 
        placeholder='Password'
        value={formData.password}
        onChange={handleChange}
      />
      <select title="sign-type" name="signUpType" onChange={handleChange}>
        <option value="">Signup Type</option>
        <option value="Member">Member</option>
        <option value="Organization">Organization</option>
      </select>
      <input type="submit" value="Sign up"/>
    </form>
    </div>
  )
}