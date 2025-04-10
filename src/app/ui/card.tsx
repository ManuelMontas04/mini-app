import {Formatcard} from '../lib/definition'


export default function Card ({ cards, }: {cards: Formatcard []}){
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="border rounded-lg shadow-lg overflow-hidden bg-white"
          >
            <img
              src={card.image_url}
              alt={card.title}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
              <span className="text-sm text-gray-500 italic">
                Categoría: {card.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    )
}

