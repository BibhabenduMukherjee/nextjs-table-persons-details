"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Table from '@/components/Table'
import { useEffect, useState } from 'react'
import axios from 'axios'

type Con = {
  country : string
}
type User  = {
  id : string,
  firstname:string,
  lastname : string,
  phone : string,
  email : string,
  image : string 
  gender : string
  website? : string
  address : Con
}


export default function Home() {
 
  const [count , setCount] = useState<string>("10")
  const [user , setUser] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  useEffect(()=>{
    async function fetchUser(){
        setIsLoading(true)
        const {data} = await axios.get(`https://fakerapi.it/api/v1/persons?_quantity=${Number(count)}`)
        setUser(data.data)
        setIsLoading(false)
      //  debugger
    }
    fetchUser();
  },[count])
  return (
    <main className="flex flex-col items-center ">
     <div className="flex">
     <h2 className="text-center mt-[20px] text-4xl font-bold">
      Persol details
      </h2>
      <div className="mt-[24px] ml-[80px] border ">
        <select onChange={(e)=>{setCount(e.target.value);}} name="" id="" className="w-[90px] rounded-md bg-slate-700  cursor-pointer text-white h-full p-1">
          <option  value = "10">10</option>
          <option value="30">30</option>
          <option value="50">50</option>
        </select>
      </div>
     </div>
     
    
      {isLoading ? <>
      <div
      className='w-[700px]  text-red-500 text-center text-3xl mt-[30px] '
      >
        Loading..
      </div>
      </> : <>
      <Table users = {user} />
      </>}
   
    </main>
  )
}
