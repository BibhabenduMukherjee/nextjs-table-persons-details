"use client"
import { FC, Suspense, useState } from "react";
import {ArrowDownIcon, ArrowUpIcon} from "@heroicons/react/24/solid"
import { faker } from '@faker-js/faker';
import Image from "next/image";
type Con ={
    country : string
}

const randImg = () =>{
    return faker.image.avatar()
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


interface PageProps {
    users : User[]
}

const Table:FC<PageProps> = ({users} : PageProps) => {
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
   console.log(users);
   const handleSort = (field: keyof User) => {
    if (sortOrder === "asc") {
      setSortOrder("desc");
      users.sort((a: User, b: User) =>
       //@ts-ignore
        a[field] && b[field] ? ( a[field] > b[field] ? -1 : 1) : 0
      );
    } else {
      setSortOrder("asc");
      users.sort((a: User, b: User) =>
        //@ts-ignore
        a[field] && b[field] ? (a[field] > b[field] ? 1 : -1) : 0
      );
    }
  };
    return (
        <div className="flex flex-col">
        <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-hidden border rounded-lg">
                    {users.length > 0 ? <>
       <table className="w-[640px] divide-y divide-gray-200">

                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    onClick={()=>{handleSort("id")}}
                                    className=" cursor-pointer flex justify-center items-center px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    <div className="flex justify-center items-center mt-1">
                                    ID
                                    <div>
                                    {sortOrder === "asc" ? <><ArrowDownIcon className="w-[10x] h-[10px] text-neutral-800 ml-1 " /></> : <>
                                    <ArrowUpIcon className="w-[10x] h-[10px] text-neutral-800 ml-1 "  /></>}
                                    </div>
                                    </div>
                                   
                                </th>
                                <th
                                 onClick={()=>{handleSort("firstname")}}
                                    scope="col"
                                    className=" cursor-pointer px-6 py-3  text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    <div className="flex justify-center items-center">
                                    FirstName
                                    <div>
                                    {sortOrder === "asc" ? <><ArrowDownIcon className="w-[10x] h-[10px] text-neutral-800 ml-1 " /></> : <>
                                    <ArrowUpIcon className="w-[10x] h-[10px] text-neutral-800 ml-1 "  /></>}
                                    </div>
                                    </div>
                                   
                                   
                                </th>
                                <th
                                 onClick={()=>{handleSort("lastname")}}
                                    scope="col"
                                    className=" cursor-pointer px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                     <div className="flex justify-center items-center ">
                                    LastName
                                    <div>
                                    {sortOrder === "asc" ? <><ArrowDownIcon className="w-[10x] h-[10px] text-neutral-800 ml-1 " /></> : <>
                                    <ArrowUpIcon className="w-[10x] h-[10px] text-neutral-800 ml-1 "  /></>}
                                    </div>
                                    </div>
                                </th>
                                <th
                                    scope="col"
                                    className=" cursor-pointer px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Gender
                                </th>
                               
                                <th
                                 onClick={()=>{handleSort("email")}}
                                    scope="col"
                                    className=" cursor-pointer px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                      <div className="flex justify-center items-center ">
                                    Email
                                    <div>
                                    {sortOrder === "asc" ? <><ArrowDownIcon className="w-[10x] h-[10px] text-neutral-800 ml-1 " /></> : <>
                                    <ArrowUpIcon className="w-[10x] h-[10px] text-neutral-800 ml-1 "  /></>}
                                    </div>
                                    </div>
                                </th>

                                <th
                                 
                                    scope="col"
                                    className=" cursor-pointer px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                      <div className="flex justify-center items-center ">
                                   Image
                                   
                                    </div>
                                </th>
                               
                                <th
                                     onClick={()=>{handleSort("address")}}
                                    scope="col"
                                    className=" cursor-pointer px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                     <div className="flex justify-center items-center ">
                                    Address
                                    <div>
                                    {sortOrder === "asc" ? <><ArrowDownIcon className="w-[10x] h-[10px] text-neutral-800 ml-1 " /></> : <>
                                    <ArrowUpIcon className="w-[10x] h-[10px] text-neutral-800 ml-1 "  /></>}
                                    </div>
                                    </div>
                                </th>
                               
                                <th
                                    scope="col"
                                    className=" cursor-pointer px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                   Phone
                                </th>
                               
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">

                            {users.map((user:User)=>(
                                <tr key = {user.id}>
                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                    {user.id}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {user.firstname}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                   {user.lastname}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {user.gender}
                                </td>
                               
                                <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                                    <a
                                    
                                        className="text-red-500 hover:text-red-700"
                                        href="mailto: jhon@gmail.com"
                                    >
                                        {user.email}
                                    </a>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                <div className="max-w-[40px]">
             <Suspense fallback={<div>Loading...</div>}>
        <Image src={randImg()} width={30} height= {30} priority className=" object-contain rounded-full" alt="image"/>
      </Suspense>
    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                   {user.address?.country}
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                   
                                        {user.phone}
                                   
                                </td>
                                </tr>
                            ))}

                            <tr>
                                
                            </tr>
                           
                        </tbody>


                    </table>
                    </> : ""}
                  
                </div>
            </div>
        </div>
    </div>
    )
}
export default Table