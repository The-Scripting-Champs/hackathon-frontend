import React, { useState} from 'react'
export const Signup = () => {

  const [data, setData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    accountType: ""
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
    <div id='signup'>
       <h1>Sign up:</h1>
    <form>
      <input 
        type="text" 
        name="fullName" 
        placeholder='Full Name'
        value={data.fullName}
        onChange={handleChange}
      />
      <input 
        type="email" 
        name="email" 
        placeholder='E-mail Address'
        value={data.email}
        onChange={handleChange}
      />
      <input 
        type="text" 
        name="username" 
        placeholder='Username'
        value={data.username}
        onChange={handleChange}
      />
      <input 
        type="password" 
        name="password" 
        placeholder='Password'
        value={data.username}
        onChange={handleChange}
      />
      <select title="sign-type" name="accountType" onChange={handleChange}>
        <option value="member">Member</option>
        <option value="organization">Organization</option>
      </select>
      <input type="submit" value="Sign up"/>
    </form>
    </div>
  )
}