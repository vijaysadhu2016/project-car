import Image from "next/image";
import LargeLogo from "../../../public/images/logos/largeLogo.svg";
import MenuIcon from "@/app/components/MenuIcon";
// import Divider from "@/components/common/Divider";

const Header = () => {
  return (
    <header className="bg-[#fff] h-[50px] md:h-[70px] flex justify-between items-center cp">
      <section about={"logo"} className={'flex items-center'}>
        <div>
          <MenuIcon/>
        </div>
        <Image src={LargeLogo} alt={'carvee'} className="ml-5 h-[24px] w-[138px] bg=[#000]"/>
      </section>

    </header>
  )
}
export default Header