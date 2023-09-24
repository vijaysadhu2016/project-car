import Image from "next/image";
import LargeLogo from "../../../public/images/logos/largeLogo.svg";
import MenuIcon from "@/components/common/MenuIcon";

export default function Header() {
  return (
    <header className="bg-[#fff] h-[50px] md:h-[70px] flex justify-between items-center">
      <section about={"logo"}>
        <MenuIcon />
        <Image src={LargeLogo} alt={'carvee'} className="h-[24px] md:h-[28px] w-[106px] md:w-[120] bg=[#000]"/>
      </section>
    </header>
  )
}
