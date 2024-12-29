import Image from "next/image";
import { ContainerGrid } from "./container";
import Link from "next/link";

const infosSolut = [
    {
        Image: "/IconInfo1.svg",
        Title: "maquininha adicional",
        parag: "Fale com nosso time para te ajudar",
        destaq: "hidden",
    },
    {
        Image: "/IconInfo2.svg",
        Title: "gerencie o seu negócio",
        parag: "Fale com nosso time para te ajudar",
        destaq: "hidden",
    },
    {
        Image: "/IconInfo3.svg", 
        Title: "antecipe seus negócios",
        parag: "Fale com nosso time para te ajudar",
        destaq: "flex",
    },
    {
        Image: "/IconInfo4.svg",
        Title: "pagamento por aproximação",
        parag: "Fale com nosso time para te ajudar",
        destaq: "hidden",
    },
]

export function SectionSolution() {
    return(
        <div className="relative w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-gray-200/30 z-10 @desktop:w-[1152px] @desktop:h-[502px]"></div>
            <ContainerGrid className={"relative flex flex-col justify-between pt-32 z-20 gap-16 @desktop:flex-row pb-12 @desktop:gap-4 @desktop:pb-0"}>
                <div className=" w-full @desktop:max-w-[800px]">
                    <div className="flex flex-col w-full justify-between gap-6 text-center @desktop:flex-row @desktop:gap-0 @desktop:text-left">
                        <h3 className="text-4xl text-black font-bold w-full @desktop:max-w-[520px]" >nossa soluções pensadas para o seu negócio</h3>
                        <p className="text-base text-gray-600 font-medium w-full @desktop:max-w-64">Solicite sua Maquininha de Cartão Cielo com frete grátis para todo o Brasil e venda mais ✌ ️</p>
                    </div>
                    <ul className="grid grid-cols-2 gap-[1px] grid-rows-2 shadow-xl rounded-md mt-20 bg-[#d3d2d167]">
                        {infosSolut.map((info, index)=> (
                            <li key={index} className="relative p-10 bg-white">
                                <span className={`absolute right-4 top-4 ${info.destaq} bg-black/5 rounded-full font-bold text-BlueNext  px-4 py-2 text-center flex justify-center`}>destaque</span>
                                <Image className="mb-3" src={info.Image} alt={info.Title} width={34} height={34}/>
                                <h4 className="text-lg text-black font-bold mb-1">{info.Title}</h4>
                                <p className="text-base text-black/40">{info.parag}</p>
                                <Link href={'/#'} className="text-lg text-orange-500 font-bold ">saiba mais</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center flex-col relative @desktop:items-start">
                    <Image className="relative z-10" src={"/ImageSolut.png"} alt="Section Solução" width={385} height={486}/>
                    <Image className="absolute z-20 top-32 left-0 @desktop:-left-9" src={"/DetailSolut.png"} alt="Section Solução" width={385} height={486}/>
                    <div className="flex justify-center gap-3 mt-8">
                        <Image src={"/WhatsApp.svg"} alt="Section Solução" width={18} height={18}/>
                        <p className="text-black/40 font-bold">fale conosco no whatsapp</p>
                    </div>
                </div>
            </ContainerGrid>
        </div>
    )
}