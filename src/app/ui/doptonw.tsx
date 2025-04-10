
/* import {Formatcard} from '../lib/definition'
import { cardDta } from "../lib/data"; */

/* const [selectedCategory, setSelectedCategory] = useState("Todos");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category); 
  };  */

export default function Doptown() {

  return (
    <div className="flex gap-4 mb-4">
      <button

        className= "p-2 rounded-md"
      >
        Todos
      </button>
      <button
        className="p-2 rounded-md"
      >
        Hombres
      </button>
      <button
        className="p-2 rounded-md"
      >
        Mujeres
      </button>
    </div>
  );
}
