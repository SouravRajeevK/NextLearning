'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

function Login() {

  const {data:session} = useSession()
  console.log('user details=',session)

  return (
    <div className="justify-center flex">
      {session ? <button onClick={()=>signOut()} className='p-4 font-bold'>Logout</button> : <button onClick={()=>signIn()} className='p-4 font-bold'>Login</button>}
        {/* <button className='p-4 font-bold'>Login</button> */}
      {session && 
        <div>
          <h1>Welcome {session?.user?.name}</h1>
          <h4>your mail id is {session?.user?.email}</h4>
        </div>
      }  
    </div>
  )
}

export default Login