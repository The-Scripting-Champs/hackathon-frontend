import React from 'react'
import { MoonLoader } from 'react-spinners'
import HashLoader from 'react-spinners/HashLoader'

export const FullscreenLoader = () => {
  return (
    <div id='loader'>
        <h1>
            <HashLoader />
        </h1>
    </div>
  )
}
