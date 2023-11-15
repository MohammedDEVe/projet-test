import Link from "next/link";

export default function navbar() {
  return (
   
     <nav class="bg-gray-800 text-white w-64 min-h-screen p-4">
    <div>
      <ul class="space-y-2">
        <li class="opcion-con-desplegable">
          
         
          
          <ul class="desplegable ml-4 hidden">
          
            <li>
              
            </li>
          </ul>
        </li>
        <li class="opcion-con-desplegable">
          <div class="flex items-center justify-between p-2 hover:bg-gray-700">
            <div class="flex items-center">
              <i class="fas fa-money-bill-wave mr-2"></i>
              <Link href="/about" class="block p-2 hover:bg-gray-700 flex items-center">
                <i class="fas fa-chevron-right mr-2 text-xs"></i>
                <span>About</span>
              </Link>
              
            </div>
            <i class="fas fa-chevron-down text-xs"></i>
          </div>
         
        </li>
        <li class="opcion-con-desplegable">
          <div class="flex items-center justify-between p-2 hover:bg-gray-700">
            <div class="flex items-center">
              <i class="fas fa-chart-bar mr-2"></i>
              <Link href="/tache" class="block p-2 hover:bg-gray-700 flex items-center">
                <i class="fas fa-chevron-right mr-2 text-xs"></i>
                <span>Tache</span>
              </Link>
              
            </div>
            <i class="fas fa-chevron-down text-xs"></i>
          </div>
          <ul class="desplegable ml-4 hidden">
            <li>
              <Link href="/home" class="block p-2 hover:bg-gray-700 flex items-center">
                <i class="fas fa-chevron-right mr-2 text-xs"></i>
                Presupuestos
              </Link>
            </li>
           
          </ul>
        </li>
        <li class="opcion-con-desplegable">
          <div class="flex items-center justify-between p-2 hover:bg-gray-700">
            <div class="flex items-center">
             
            <Link href="/category" class="block p-2 hover:bg-gray-700 flex items-center">
                <i class="fas fa-chevron-right mr-2 text-xs"></i>
                <span>category</span>
              </Link> <i class="fas fa-file-alt mr-2"></i>
              
            </div>
            <i class="fas fa-chevron-down text-xs"></i>
          </div>
        </li>
        <li class="opcion-con-desplegable">
          <div class="flex items-center justify-between p-2 hover:bg-gray-700">
            <div class="flex items-center">
             
            <Link href="/" class="block p-2 hover:bg-gray-700 flex items-center">
                <i class="fas fa-chevron-right mr-2 text-xs"></i>
                <span>home</span>
              </Link> <i class="fas fa-file-alt mr-2"></i>
              
            </div>
            <i class="fas fa-chevron-down text-xs"></i>
          </div>
        </li>
      </ul>
    </div>
  </nav>
  )
}
