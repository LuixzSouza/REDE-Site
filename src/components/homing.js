'use client'

import Image from "next/image";
import { ContainerGrid } from "./container";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation} from "swiper/modules"

const NextSlide = [
    {
        Image: "/IconTalk.svg",
        Text: "a maquininha rede",
    },
    {
        Image: "/IconTalk.svg",
        Text: "antecipe suas vendas",
    },
    {
        Image: "/IconTalk.svg",
        Text: "link de pagamento",
    },
    {
        Image: "/IconTalk.svg",
        Text: "crie seu catálogo virtual",
    },
]

const GroupHome = [
    {
        span: "SEJA REDE",
        Title: "está precisando impulsionar suas vendas?",
        text: "Receba com diversas bandeiras e ofereça ao seu cliente as melhores soluções de pagamento.",
        btn1: "conheça nossas maquininhas",
        bg: "bg-Slide1",
        Image: "/machineSlide1.png",
        with: "flex",
    },
    {
        span: "DINHEIRO NA MÃO",
        Title: "antecipe suas vendas e receba em até 1 dia útil",
        text: "Antecipe a qualquer momento, de qualquer lugar com o app e portal da Rede. Consulte as condições.",
        btn1: "Antecipe agora",
        bg: "bg-Slide2",
        Image: "/machineSlide2.png",
        with: "hidden",
    },
    {
        span: "LINK DE PAGAMENTO",
        Title: "venda online de forma prática e segura",
        text: "Venda de qualquer lugar de forma simples e prática, tudo 100% online.",
        btn1: "Crie o seu link agora",
        bg: "bg-Slide3",
        Image: "/machineSlide3.png",
        with: "hidden",
    },
]

export function HomeRede() {
    const itemsToShow = 4; // Defina a quantidade de itens que deseja exibir

    return (
        <div className="relative">
            <Swiper
                className="relative z-10"
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {GroupHome.map((itens, index) => (
                    <SwiperSlide key={index}>
                        <div className={`w-full h-HeigthHome flex items-center ${itens.bg} bg-no-repeat bg-cover bg-bottom`}>
                            <ContainerGrid className="flex items-center">
                                <div className="max-w-screen-sm flex flex-col">
                                    <span className="text-yellow-200 mb-8">{itens.span}</span>
                                    <h1 className="text-white text-7xl font-bold">{itens.Title}</h1>
                                    <p className="text-white text-lg font-medium my-8">{itens.text}</p>
                                    <div className="flex gap-8">
                                        <button className="bg-white px-6 py-4 text-orange-500 font-bold rounded-md">
                                            {itens.btn1}
                                        </button>
                                        <a href="/#" className="flex items-center gap-2">
                                            <Image src={"./IconTalk.svg"} alt="Icone conversa" width={18} height={17} />
                                            <p className="text-white font-bold text-base">Fale conosco</p>
                                        </a>
                                    </div>
                                </div>
                                <div className={`relative flex justify-start`}>
                                    <Image src={itens.Image} alt={itens.span} width={403} height={433} />
                                    <div className={`absolute -right-12 bottom-48 max-w-[115px] flex-col gap-6 text-center ${itens.with}`}>
                                        <div className="flex flex-col items-center bg-white rounded-md p-4">
                                            <Image src={"./IconWifi.svg"} alt="Icone conversa" width={18} height={18} />
                                            <p className="text-BlueNext font-bold text-sm">conexão Wi-fi e chip</p>
                                        </div>
                                        <div>
                                            <p className="text-left text-white font-normal text-sm">peça a sua maquininha Rede</p>
                                        </div>
                                    </div>
                                </div>
                            </ContainerGrid>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="absolute z-20 top-0 right-0 w-72 h-full flex flex-col items-center justify-center bg-BlueNext">
                {NextSlide.slice(0, itemsToShow).map((item, index) => (
                    <div key={index} className="w-full flex items-center cursor-pointer gap-4 px-6 py-7 border-t border-b border-white/10 group hover:bg-white transition-colors">
                        <Image className="group-hover:text-BlueNext" src={item.Image} alt={item.Text} width={20} height={20} />
                        <p className="text-white text-base font-bold group-hover:text-BlueNext">{item.Text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
