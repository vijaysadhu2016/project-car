import ListingCard from "@/components/common/ListingCard";
// import Carousel from "@/components/common/Carousel";
import SImag from '../public/images/s.webp'
import Slavia2Imag from '../public/images/salvia3.webp'
import Slavia3Imag from '../public/images/slavia2.jpg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="flex place-items-center">
      </div>
      {/*<Carousel />*/}
      <div className={'flex flex-col'}>
        {[SImag, Slavia2Imag, Slavia3Imag, SImag, Slavia2Imag, Slavia3Imag, SImag, Slavia2Imag, Slavia3Imag,].map((res: any, index: number) =>
          <ListingCard key={index} img={res}/>
        )}
      </div>
    </main>
  )
}
