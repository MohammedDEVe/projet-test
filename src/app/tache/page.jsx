export default function Tache() {
  return (
    <div className="mt-14">
    <table className="max-w-full border border-gray-300">
      <thead className="bg-black text-white">
        <tr>
          <th className="border border-solid border-gray-300 p-4">ID</th>
          <th className="border border-solid border-gray-300 p-4">Nom de tâche</th>
          <th className="border border-solid border-gray-300 p-4">Description</th>
          <th className="border border-solid border-gray-300 p-4">Actions</th>
        </tr>
      </thead>
      <tbody>
     
          <tr >
            <td className="border border-solid border-gray-300 p-4">id</td>
            <td className="border border-solid border-gray-300 p-4">nom</td>
            <td className="border  border-solid border-gray-300 p-4">description</td>
            <td className="border border-solid border-gray-300 p-4">
              <button className="mr-2 bg-blue-500 text-white px-4 py-2 rounded">Show</button>
              <button className="mr-2 bg-yellow-500 text-white px-4 py-2 rounded">Modifier</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded">Supprimer</button>
            </td>
          </tr>
        
      </tbody>
      </table>
    </div>
  )
}
