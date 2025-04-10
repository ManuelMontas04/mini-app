import Card from './ui/card'
import { cardDta } from './lib/data'


export default function Home() {
  return (
    <>
      <div className="h-[90vh] p-8 pb-20 sm:p-20">
          <Card cards={cardDta}></Card>
      </div>
    </>
  );
}
