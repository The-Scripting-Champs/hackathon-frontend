import React, { useState, useEffect} from 'react'
import { FullscreenLoader } from '../helpers/FullscreenLoader';
import { Nav } from './Nav'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2500);
  }, [])


  if(loading){
    return <FullscreenLoader />
  }

  return (
    <div id='home'>
        <h1>The Scripting Champs x AgenciFlow</h1>
    </div>
  )
}
