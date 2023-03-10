import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"

const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext)
}

export const UserProvider = ({children}) => {
    const navigate = useNavigate()

    const [user, setUser] = useState(null)
    const [teams, setTeams] = useState([])
    const [clients, setClients] = useState([])
    const [loading, setLoading] = useState(false)


    // fetch user data on every login
    useEffect(() => {
        setLoading(true)
        const fetchUserData = async () => {
            const savedUser = localStorage.getItem('hackathonUser')
            const user = JSON.parse(savedUser)    
            setUser(user?.data)
            fetchTeamList(user?.data.token)
            fetchClientList(user?.data.token)
            setLoading(false)
        }
        fetchUserData()
    }, [])



  const fetchTeamList = async (token) => {
    const url = 'http://localhost:3001/teams';
    const headers = {
      'Authorization': token,
    };
  
    try {
      const response = await fetch(url, {
        headers: headers,
      });
      const result = await response.json();
      setTeams(result.data)
      console.log(teams[0].dueDate.toDate());
    } catch (error) {
      toast.error(error);
    }
  }

  const fetchClientList = async (token) => {
    const url = 'http://localhost:3001/clients';
    const headers = {
      'Authorization': token,
    };
  
    try {
      const response = await fetch(url, {
        headers: headers,
      });
      const result = await response.json();
      setClients(result.data)
      console.log(result)
    } catch (error) {
      toast.error(error);
    }
  }



    // logout function
    const signOut = () => {
        setUser(null)
        localStorage.removeItem('hackathonUser')
        toast.info('Logged Out Successfully...')
        return navigate('/signin')
    }


    const value = {
        user,
        setUser,
        loading, 
        setLoading, 
        navigate,
        signOut,
        teams,
        clients
    }





  return (
    <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
  )
}
