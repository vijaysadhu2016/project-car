import ListingCard from "@/app/components/ListingCard"
import SImag from '../../public/images/slavia2.jpg'
import Slavia2Imag from '../../public/images/slavia2.jpg'
import Slavia3Imag from '../../public/images/slavia2.jpg'
import SearchInput from "@/app/components/SearchInput";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex cp w-[100%]">
      <SearchInput />
      </div>
      <div className="flex place-items-center">
        {/*<Banner/>*/}
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

export default Home
