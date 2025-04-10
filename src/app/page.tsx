import Card from './ui/card'
import { cardDta } from './lib/data'
import Doptown from './ui/doptonw'
import SearchBar from './ui/search';



export default function Home() {

  return (
    <>
      <div className="h-[90vh] p-8 pb-20 sm:p-20">

      <div className="flex justify-between items-center p-4">
          <img
          src="https://www.vectorkhazana.com/assets/images/products/The_North_Face_svg.png"
          alt="Logo"
          className="h-20 w-auto"
          />
        <div>
          <SearchBar />
        </div>
        </div>

        <Doptown></Doptown>

        <div>
          <Card cards={cardDta}></Card>

        </div>

        <div>
          <footer className='py-10 flex justify-center items-center'>
            Hecho por Manuel Montas
          </footer>
        </div>
          
      </div>
    </>
  );
}
