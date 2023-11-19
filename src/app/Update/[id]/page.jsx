'use client'
 import axios from "axios"
 import { useEffect, useState } from "react"

 export default function ModifyTache({params}) {   

  const [nom,setNom]=useState('')
  const [description,setDescription]=useState('')
  const[isLoading,setIsLoading]=useState(false)
  const [tache,setTache]=useState()

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/taches/${params.id}`);
      console.log("API Response:", response.data);
      setNom(response.data.nomt)
      setDescription(response.data.description)
    } catch (e) {
      console.log(e);
    }
  };

  console.log(params) 

  const handleSubmit = async (e) =>{
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/taches/${params.id}`, { nomt: nom, description: description})
      console.log("Update Response:", response.data);
    }
  catch(e){
    console.log(e)
  };
  setIsLoading(false)
}

    
    
  // useEffect(()=>{
  //   axios.get(`http://127.0.0.1:8000/api/taches/${params.id}`)
  //   .then((res)=>{setTache(res.data)})
  //  },[])
  useEffect(() => {
    console.log("Current params.id:", params.id);
    fetchData();
  }, [params.id]);


    return (
      <div className="max mt-8 p-4 border rounded">
        <form   onSubmit={handleSubmit} className="w-1/2"  method="POST">
          
          <div className="mb-4">
            <label  className="block text-sm font-medium text-gray-600">
              Nom de Tache :
            </label>
            <input type="text" value={nom} onChange={e=>setNom(e.target.value)}  name="textInput" className="mt-1 p-2 border rounded w-full" require placeholder="veuillez Saisir nom du tache" />
          </div>
          <div className="mb-4">
            <label  className="block text-sm font-medium text-gray-600">
              Description :
            </label>
            <input type="text" value={description} onChange={e=>setDescription(e.target.value)} id="textInput" name="textInput" className="mt-1 p-2 border rounded w-full" require placeholder="Veuillez décrit votre tache" />
          </div>
        {isLoading? <p>loading</p> :  <button
            type="submit"
            className={`bg-blue-500 text-white p-2 rounded ${ isLoading && 'opacity-60'} hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800`}
            disabled={isLoading}
          >
            Modifier
          </button>}
        </form>
      </div>
    ) };


  