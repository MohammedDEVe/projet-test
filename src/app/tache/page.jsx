'use client'
 import axios from "axios"
 import { useEffect, useState } from "react"
 import Link from "next/link";

export default function Tache() {
// camelCase
// PascalCase

const [listeTaches,setListeTaches]=useState([])
  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/api/taches")
    .then((res)=>{setListeTaches(res.data)})
   },[])
   console.log(listeTaches)
   
   const handleDelete = async (id) => {
    try {
      
      await axios.delete(`http://127.0.0.1:8000/api/taches/${id}`);
      const newlist=listeTaches.filter((tache)=>tache.id!=id)
      setListeTaches(newlist)

      console.log('Suppression effectuée !');
    } catch (error) {
      console.error('Erreur lors de la suppression de la tâche :', error);
    }
  };
   
  return (
    <div>
    <div>
    
       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
       <Link href="/create" class="block p-2 hover:bg-gray-700 flex items-center">        
                <span>Ajouter</span>
        </Link>
          
        </button>
    </div>
    <div className="mt-14">
    <table className="max-w-full border border-gray-300">
      <thead className="bg-black text-white">
        <tr>
          <th className="border border-solid border-gray-700 p-4">ID</th>
          <th className="border border-solid border-gray-700 p-4">Nom de tâche</th>
          <th className="border border-solid border-gray-700 p-4">Description</th>
          <th className="border border-solid border-gray-700 p-4">Actions</th>
        </tr>
      </thead>
      <tbody>
      {listeTaches ? listeTaches.map((tache)=>{
        return(
          <tr>
            <td className="border border-solid border-gray-950">{tache.id}</td>
            <td className="border border-solid border-gray-700">{tache.description}</td>
            <td className="border border-solid border-gray-800">{tache.nomt}</td>
            <td className="border border-solid border-gray-800 p-4">
              <button className="mr-2 bg-blue-500 text-white px-4 py-2 rounded">
              <Link href={"/show/"+tache.id}>        
                <span>Show</span>
            </Link>
            </button>
              <button className="mr-2 bg-yellow-500 text-white px-4 py-2 rounded">
              <Link href={"/Update/"+tache.id} >        
                <span>Modifier</span>
              </Link>
              </button>
              <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={async () => window.confirm("Êtes-vous sûr de vouloir supprimer ?") && await handleDelete(tache.id)}
    >Supprimer</button>
            </td>
          </tr>
        )
      }):"loading"}
        {/* {  listeTaches.map(tache=>(
     
          <tr >
            <td className="border border-solid border-gray-300 p-4">tache.id</td>
            <td className="border border-solid border-gray-300 p-4">tache.nom</td>
            <td className="border  border-solid border-gray-300 p-4">description</td>
            <td className="border border-solid border-gray-300 p-4">
              <button className="mr-2 bg-blue-500 text-white px-4 py-2 rounded">Show</button>
              <button className="mr-2 bg-yellow-500 text-white px-4 py-2 rounded">Modifier</button>
              <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => window.confirm("Êtes-vous sûr de vouloir supprimer ?") && console.log("Suppression effectuée !")}
    >Supprimer</button>
            </td>
          </tr> */}
        
      </tbody>
      </table>
    </div>
    </div>
  )
}
