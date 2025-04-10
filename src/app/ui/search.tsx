import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
  return (
    <div className="flex items-center bg-gray-100 rounded-md p-2 shadow-sm max-w-md mx-auto">
      <input
        type="text"
        placeholder="Buscar..."
        className="flex-grow p-2 bg-transparent outline-none text-gray-700 placeholder-gray-400"
      />
      <AiOutlineSearch
        className="text-blue-500 cursor-pointer hover:text-blue-600"
        size={24} // Tamaño del ícono en píxeles
      />
    </div>
  );
};

