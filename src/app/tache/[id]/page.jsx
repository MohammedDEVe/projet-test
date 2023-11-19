"use client"
import axios from "axios";
import { useEffect,useState } from "react";
export default function ModifyTache({params}) {       
       
  const [listeTaches,setListeTaches]=useState([])
  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/api/taches/${params.id}`)
    .then((res)=>{setListeTaches(res.data)})
   },[])
   console.log(listeTaches)
    }