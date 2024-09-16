import Image from "next/image";
import { ContainerGrid } from "./container";


export function Header() {
    return(
        <div className="w-full h-20 flex items-center">
            <ContainerGrid>
                <div className="flex flex-row items-center justify-between">
                    <ul className="flex items-center gap-8">
                        <li className="flex items-center gap-2">
                            <Image src={"./logo.svg"} alt="Logo" width={82} height={27}/>
                        </li>
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
                    <div className="flex w-full max-w-lg justify-between">
                        <a href="/#" className="flex items-center gap-2">
                            <Image src={"./IconAcessiv.svg"} alt="Icone-Acessivel" width={18} height={18} />
                            <p>acessibilidade</p>
                        </a>
                        <div className="flex gap-4">
                            <button className="py-3 px-6 border-solid border-2 rounded-lg border-orange-500 text-orange-500">
                                acessar
                            </button>
                            <button className="py-3 px-6 border-solid border-2 rounded-lg bg-orange-500 text-white">
                                abra sua conta
                            </button>
                        </div>
                    </div>
                </div>
            </ContainerGrid>        
        </div>
    )
}