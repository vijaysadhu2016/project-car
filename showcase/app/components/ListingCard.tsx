import Image from 'next/image'
import EnginGif from '../../public/gif/engine.gif'
import FuelGif from '../../public/gif/eco-fuel.gif'
import RpmGif from '../../public/gif/rpm.gif'
import MileageGif from '../../public/gif/mileage.gif'

const ListingCard = (props: any) => {
  const {img} = props
  return (
    <div
      className="overflow-hidden my-3 mr-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#" className={'relative'}>

        <Image src={img} alt={"car"}/>
        {/*<img className="rounded-t-lg" src={SImag} alt=""/>*/}
      </a>
      <div className="p-4 pt-2">
        <div className={"flex justify-between"}>
          <h5 className=" text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Slavia By <span className={'text-indigo-400'}>Skoda</span>
          </h5>
          <p className={"text-gray-400 text-base"}>Rs. 10.15L</p>
        </div>
        <div className={"flex justify-between"}>
          <div className={'flex flex-col items-center'}>
            <div className={'h-[40px] flex items-center'}>
              <Image height={40} src={EnginGif} alt={"car"}/>
            </div>
            <p className={"text-gray-400 text-base"}>999cc</p>
          </div>
          <div className={'flex flex-col items-center'}>
            <div className={'h-[40px] flex items-center'}>
              <Image height={35} src={FuelGif} alt={"car"}/>
            </div>
            <p className={"text-gray-400 text-base"}>Petrol</p>
          </div>
          <div className={'flex flex-col items-center'}>
            <div className={'h-[40px] flex items-center'}>
              <Image height={36} src={MileageGif} alt={"car"}/>
            </div>
            <p className={"text-gray-400 text-base"}>18kmpl</p>
          </div>
          <div className={'flex flex-col items-center'}>
            <div className={'h-[40px] flex items-center'}>
              <Image height={40} src={RpmGif} alt={"car"}/>
            </div>
            <div className={"text-gray-400 text-xs mt-[-7px]"}>
              <p>
                81.8bhp@
              </p>
              <p>
                6000rpm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ListingCard
