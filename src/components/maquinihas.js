import Image from "next/image";
import { ContainerGrid } from "./container";

const Maquininha = [
    {
        MVendido: "flex",
        TxtVendido: "mais vendido",
        Image: "/machine1.png",
        Title: "maquininha de cartão",
        Tipo: "Rede Wi-Fi",
        Tip1: "conexão wi-fi e chip",
        Tip2: "livre de fios",
        Tip3: "com bobina",
    },
    {
        MVendido: "hidden",
        Image: "/machine1.png",
        Title: "maquininha de cartão",
        Tipo: "Rede sem fio",
        Tip1: "conexão rede sem fio",
        Tip2: "livre de fios",
        Tip3: "com bobina",
    },
    {
        MVendido: "hidden",
        Image: "/machine2.png",
        Title: "maquininha de cartão",
        Tipo: "Rede com fio",
        Tip1: "conexão via linha telefônica",
        Tip2: "mais velocidade",
        Tip3: "com bobina",
    },
    {
        MVendido: "flex",
        TxtVendido: "lançamento",
        Image: "/machine3.png",
        Title: "maquininha de cartão",
        Tipo: "Rede smart",
        Tip1: "pagamento por QR code",
        Tip2: "pagamento por aproximação",
        Tip3: "maquina de recarga celular",
    },
]

export function SectionMachines() {
    return(
        <ContainerGrid className="pt-28 flex flex-col items-center justify-center pb-28 @desktop:pt-40">
            <h2 className="text-4xl text-black font-bold text-center w-full max-w-[530px]">Conheça as soluções de maquinihas de cartão da rede</h2>
            <div className="w-full flex flex-col">
                <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center group hover:border-BlueNext border-b-2 border-black/40 p-9">
                        <p className="text-lg text-black/40 font-bold group-hover:text-BlueNext   ">maquininha de cartão</p>
                    </div>
                    <div className="flex items-center justify-center group hover:border-BlueNext border-b-2 border-black/40 p-9">
                        <p className="text-lg text-black/40 font-bold group-hover:text-BlueNext ">integrada no sistema TEF</p>
                    </div>
                </div>
                <div className="w-full grid grid-cols-2 grid-rows-2 gap-4 items-start justify-start mt-20 @desktop:grid-cols-4 @desktop:grid-rows-1">
                    {Maquininha.map((item, index)=> (
                        <div key={index} className="flex flex-col items-start justify-start w-full h-full">
                            <div className="relative flex items-center justify-center bg-slate-300/40 w-full">
                                <p className={`absolute ${item.MVendido} z-10 top-4 right-4 bg-white p-3 text-BlueNext text-xs font-bold rounded-lg`}>{item.TxtVendido}</p>
                                <Image className="relative" src={item.Image} alt={item.Title} width={280} height={328}/>
                            </div>
                            <div className="flex flex-col gap-3 border-b border-black/40 py-4 w-full">
                                <h4 className="text-xl text-black/90 font-bold">{item.Title}<br/><span className="text-BlueNext">{item.Tipo}</span></h4>
                                <div className="flex items-center gap-3">
                                    <Image src={"/IconWifeGray.svg"} alt={"Icone-Wife"} width={18} height={18}/>
                                    <p className="text-black/40 font-medium">{item.Tip1}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Image src={"/IconBroken.svg"} alt={"Icone-Wife"} width={18} height={18}/>
                                    <p className="text-black/40 font-medium">{item.Tip2}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Image src={"/IconePayments.svg"} alt={"Icone-Wife"} width={18} height={18}/>
                                    <p className="text-black/40 font-medium">{item.Tip3}</p>
                                </div>
                            </div>
                            <button className="flex items-center gap-2 mt-4">
                                <p className="text-sm text-orange-500 font-bold">saiba mais</p>
                                <Image src={"/ArrowDow.svg"} alt={item.Title} width={10} height={9}/>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </ContainerGrid>
    )
}