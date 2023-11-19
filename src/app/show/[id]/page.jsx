'use client'
 import axios from "axios"
 import { useEffect, useState } from "react"
 import Link from "next/link";

export default function ShowInfo({params}) {
// camelCase
// PascalCase

const [nom,setNom]=useState('')
const [description,setDescription]=useState('')
const [listeTaches,setListeTaches]=useState([])
const [tache,setTache]=useState()

  useEffect(()=>{
    const res =  axios.get(`http://127.0.0.1:8000/api/taches/${params.id}`)
    .then((res)=>{
      setListeTaches(res.data)
      setNom(res.data.nomt)
      setDescription(res.data.description)
    })
   },[])
   console.log(listeTaches)
   
  return (
   
        <div>
        {description}
        {nom}
          
        </div>
  )
}
