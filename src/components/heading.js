import Image from "next/image";
import { ContainerGrid } from "./container";


export function Header() {
    return(
        <div className="w-full h-20 flex items-center">
            <ContainerGrid>
                <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex items-center pr-4" >
                        <Image src={"./logo.svg"} alt="Logo" width={82} height={27}/>
                    </div>
                    <ul className="hidden items-center gap-8 @desktop:flex">
                        <li className="flex items-center gap-2">
                            <p>nossos produtos</p>
                            <Image src={"/ArrowDow.svg"} alt="Logo" width={8} height={4}/>
                        </li>
                        <li className="flex items-center gap-2">
                            <p>benefícios</p>
                            <Image src={"/ArrowDow.svg"} alt="Logo" width={8} height={4}/>
                        </li>
                        <li className="flex items-center gap-2">
                            <p>conteúdo</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <a>ajuda</a>
                        </li>
                    </ul>   
                    <div className="flex w-full justify-end @desktop:max-w-lg @desktop:justify-between">
                        <a href="/#" className="items-center gap-2 hidden @desktop:flex">
                            <Image src={"./IconAcessiv.svg"} alt="Icone-Acessivel" width={18} height={18} />
                            <p>acessibilidade</p>
                        </a>
                        <div className="flex gap-4">
                            <button className="py-3 px-6 border-solid border-2 rounded-lg border-orange-500 text-orange-500 hover:border-white hover:text-white hover:bg-orange-500">
                                acessar
                            </button>
                            <button className="py-3 px-6 border-solid border-2 rounded-lg bg-orange-500 text-white hover:bg-white hover:text-orange-500 hover:border-orange-500">
                                abra sua conta
                            </button>
                        </div>
                    </div>
                </div>
            </ContainerGrid>        
        </div>
    )
}