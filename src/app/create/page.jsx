"use client"
import axios from "axios";
import { useEffect,useState } from "react";
export default function CreateTache() {       
       
       const [nom,setNom]=useState('')
       const [description,setDescription]=useState('')
       const[isLoading,setIsLoading]=useState(false)

       const handleSubmit = async (e) =>{
        e.preventDefault()
        setIsLoading(true)
        try {
          const response = await axios.post("http://127.0.0.1:8000/api/taches", { nomt: nom, description: description})
        console.log(response.data)
      }
      catch(e){
        console.log(e)
      };
      setIsLoading(false)
    }
       
  return (
    <div className="max mt-8 p-4 border rounded">
      <form  onSubmit={handleSubmit} className="w-1/2"  method="POST">
        
        <div className="mb-4">
          <label  className="block text-sm font-medium text-gray-600">
            Nom de Tache :
          </label>
          <input
             type="text"
             onChange={(e)=>setNom(e.target.value)}
             name="nom"
             className="mt-1 p-2 border rounded w-50" 
             require placeholder="veuillez Saisir nom du tache" />
        </div>
        <div className="mb-4">
          <label  className="block text-sm font-medium text-gray-600">
            Description :
          </label>
          <input 
          type="text" 
          onChange={(e)=>setDescription(e.target.value)}
          name="description"
          className="mt-1 p-2 border rounded w-50" require placeholder="Veuillez décrit votre tache" />
        </div>
        <button
          type="submit"
          
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          disabled={isLoading}
        >
          {isLoading && <span>Adding...</span>}
          {!isLoading && <span>Add Tache</span>}
        </button>
      </form>
    </div>
  );
};

