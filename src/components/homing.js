'use client'

import { useState } from "react";
import Image from "next/image";
import { ContainerGrid } from "./container";

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
];

const GroupHome = [
    {
        span: "SEJA REDE",
        Title: "está precisando impulsionar suas vendas?",
        text: "Receba com diversas bandeiras e ofereça ao seu cliente as melhores soluções de pagamento.",
        btn1: "conheça nossas maquininhas",
        bg: "bg-Slide1",
        menuBg: "bg-BlueMarineNext", // Cor do menu lateral
        Image: "/machineSlide1.png",
        with: "flex",
    },
    {
        span: "DINHEIRO NA MÃO",
        Title: "antecipe suas vendas e receba em até 1 dia útil",
        text: "Antecipe a qualquer momento, de qualquer lugar com o app e portal da Rede. Consulte as condições.",
        btn1: "Antecipe agora",
        bg: "bg-Slide2",
        menuBg: "bg-OrangeNext", // Cor do menu lateral
        Image: "/machineSlide2.png",
        with: "hidden",
    },
    {
        span: "LINK DE PAGAMENTO",
        Title: "venda online de forma prática e segura",
        text: "Venda de qualquer lugar de forma simples e prática, tudo 100% online.",
        btn1: "Crie o seu link agora",
        bg: "bg-Slide3",
        menuBg: "bg-BlueNext", // Cor do menu lateral
        Image: "/machineSlide3.png",
        with: "hidden",
    },
];

export function HomeRede() {
    const [activeSlide, setActiveSlide] = useState(0); // Controla o slide ativo
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para o menu

    const handleSlideChange = (index) => {
        // Verifica se o índice é válido antes de atualizar
        if (index >= 0 && index < GroupHome.length) {
            setActiveSlide(index);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Alterna o estado do menu
    };

    return (
        <div className="relative">
            {/* Renderiza o slide ativo */}
            <div className={`w-full h-full flex items-center ${GroupHome[activeSlide].bg} bg-no-repeat bg-cover bg-bottom @desktop:h-HeigthHome`}>
                <ContainerGrid className="flex flex-col items-center gap-12 pt-20 @desktop:flex-row @desktop:py-0 @desktop:gap-0">
                    <div className="w-full flex items-center justify-center flex-col text-center @desktop:items-start @desktop:justify-start @desktop:text-left @desktop:max-w-screen-sm">
                        <span className="text-yellow-200 mb-8">{GroupHome[activeSlide].span}</span>
                        <h1 className="text-white text-4xl font-bold @desktop:text-7xl">{GroupHome[activeSlide].Title}</h1>
                        <p className="text-white text-base font-medium my-8 @desktop:text-lg">{GroupHome[activeSlide].text}</p>
                        <div className="flex flex-col items-center justify-center gap-8 @tablet:flex-row ">
                            <button className="bg-white px-6 py-4 text-orange-500 font-bold rounded-md">
                                {GroupHome[activeSlide].btn1}
                            </button>
                            <a href="/#" className="flex items-center gap-2">
                                <Image src={"./IconTalk.svg"} alt="Icone conversa" width={18} height={17} />
                                <p className="text-white font-bold text-base">Fale conosco</p>
                            </a>
                        </div>
                    </div>
                    <div className={`relative flex justify-end`}>
                        <Image src={GroupHome[activeSlide].Image} alt={GroupHome[activeSlide].span} width={403} height={433} />
                        {GroupHome[activeSlide].with === "flex" && (
                            <div className={`absolute -right-12 bottom-48 max-w-[115px] flex-col gap-6 text-center flex`}>
                                <div className="flex flex-col items-center bg-white rounded-md p-4">
                                    <Image src={"./IconWifi.svg"} alt="Icone conversa" width={18} height={18} />
                                    <p className="text-BlueNext font-bold text-sm">conexão Wi-fi e chip</p>
                                </div>
                                <div>
                                    <p className="text-left text-white font-normal text-sm">peça a sua maquininha Rede</p>
                                </div>
                            </div>
                        )}
                    </div>
                </ContainerGrid>
            </div>

            {/* Lista de itens para alternar slides */}
            <div
                className={`absolute z-20 top-0 w-72 h-full flex flex-col items-center justify-center @desktop:right-0 transition-transform duration-300 ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full @desktop:translate-x-0"
                } ${GroupHome[activeSlide].menuBg}`}
            >
                <div className="relative w-full">
                    {NextSlide.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleSlideChange(index)} // Chama a função de validação
                            className={`w-full flex items-center cursor-pointer gap-4 px-6 py-7 border-t border-b border-white/10 group transition-colors ${
                                activeSlide === index
                                    ? "bg-white text-BlueNext"
                                    : "text-white hover:bg-white hover:text-BlueNext"
                            }`}
                        >
                            <Image
                                className={`group-hover:invert ${
                                    activeSlide === index ? "filter invert" : ""
                                }`}
                                src={item.Image}
                                alt={item.Text}
                                width={20}
                                height={20}
                            />
                            <p className="text-base font-bold">{item.Text}</p>
                        </div>
                    ))}
                    <div
                        className={`absolute top-2/4 -right-6 flex items-center justify-center h-12 w-12 rounded-full border border-white @desktop:hidden cursor-pointer ${
                            GroupHome[activeSlide].menuBg
                        }`}
                        onClick={toggleMenu} // Alterna o menu ao clicar
                    >
                        <p className="text-white" >{isMenuOpen ? "×" : "-"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

