
import { useState, useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';

const data = {
    data1: {
        id: 1,
        title: "Homem-Aranha: Através do Aranhaverso",
        desc: "Homem-Aranha é jogado no multiverso. Lá, encontra uma numerosa equipe encarregada de proteger sua própria existência.",
        img: "bg-spidermanMovie",
        cast: {
            cast1:{
                name: "Shameik Moore",
                character: "Miles Morales",
                img: "bg-miles"
            },
            cast2: {
                name: "Hailee Steinfeld",
                character: "Gwen Stacy",
                img: "bg-gwen"
            },
            cast3: {
                name: "Jack Quaid",
                character: "Peter Parker",
                img: "bg-peter"
            }
        },
        color: "border-spiderRed"
    },

    data2: {
        id: 2,
        title: "Demon Slayer: To the Hashira Training",
        desc: "O treinamento para se tornar um Hashira – um membro de alto escalão do Demon Slayer Corps – é intenso e exigente.",
        img: "bg-demonslayerMovie",
        cast: {
            cast1:{
                name: "Natsuki Hanae",
                character: "Tanjiro Kamado",
                img: "bg-tanjiro"
            },
            cast2: {
                name: "Akari Kitō",
                character: "Nezuko Kamado",
                img: "bg-nezuko"
            },
            cast3: {
                name: "Yoshitsugu Matsuoka",
                character: "Inosuke Hashibira",
                img: "bg-inosuke"
            }
        },
        color: "demonslayerGreen"
    }
}

function Cast(props) {
    return (
        <div className="flex flex-col items-center">
            <div className={`rounded-full border-2 ${props.movieColor} w-20 h-20 ${props.castImg} bg-cover`}></div>
            <h1 className="mt-2 uppercase font-bold">{props.castName}</h1>
            <h1 className="text-black font-bold uppercase">{props.castCharacter}</h1>
        </div> 
    )
}


export default function Slideshow() {
    
    // const carousel = useRef(null);

    // const [count, setCount] = useState(1);
    
    const movies = []

    Object.entries(data).forEach((element) => {movies.push(element[1])})
    // movies.push(data.data1)
    // const max = movies.length;

    // function handleLeftClick(e) {
    //     e.preventDefault();

        

    //     if(count !== 1){
    //         carousel.current.scrollLeft -= carousel.current.offsetWidth;
    //         setCount(count - 1)
    //     }
    // }

    // function handleRightClick(e) {
    //     e.preventDefault();

    //     if(count < max){
    //         carousel.current.scrollLeft += carousel.current.offsetWidth;
    //         setCount(count + 1)
    //     }
    // }

    const i = (index) => (<span className="cursor-pointer text-center text-2xl px-2 indicator leading-7">{index + 1}</span>);

    const slideProperties = {
        prevArrow: <IoIosArrowBack className="text-4xl cursor-pointer ml-10"/>,
        nextArrow: <IoIosArrowForward className="text-4xl cursor-pointer mr-10"/>,
        indicators: i,
        autoplay: false,
        infinite: false,
    }

    return (
        <>
                <div className=" h-[45vh] mt-12 w-full mb-10 transitial-all duration-300 ease-in-out overflow-hidden">    
                    <Slide {...slideProperties}>
                        {
                            movies.map((item) => {
                                return(
                                    <div className="flex items-center justify-center bg-cover" key={item.id}>
                                        <div className="flex gap-10 mx-auto">
                                            <div className="w-[500px]">
                                                <h2 className="text-[27px] font-bold tracking-widest leading-8">{item.title}</h2>
                                                <h4 className="tracking-wider text-[15px] mt-3">{item.desc}</h4>

                                                <div className="flex justify-around items-center w-full h-auto mt-6">

                                                    <Cast movieColor={item.color} castName={item.cast.cast1.name} castCharacter={item.cast.cast1.character} castImg={item.cast.cast1.img}/>
                                                    <Cast movieColor={item.color} castName={item.cast.cast2.name} castCharacter={item.cast.cast2.character} castImg={item.cast.cast2.img}/>
                                                    <Cast movieColor={item.color} castName={item.cast.cast3.name} castCharacter={item.cast.cast3.character} castImg={item.cast.cast3.img}/>

                                                </div>
                                            </div>
                                    
                                    
                                            <div className="w-auto h-auto">
                                                <div className={`${item.img} bg-cover w-[500px] h-[300px]`}></div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        

                        
                    </Slide>
                </div>

            <div className="flex flex-col justify-center items-center">
                {/* <div className="flex mb-14 items-center gap-4">
                    <IoIosArrowBack className="text-2xl cursor-pointer" onClick={handleLeftClick}/>
                    <span className="text-2xl"> {count} <span className="opacity-[70%]">/ {max}</span></span>
                    <IoIosArrowForward className="text-2xl cursor-pointer" onClick={handleRightClick}/>
                </div> */}
                <button className="uppercase font-bold w-[180px] px-[20px] py-[8px] cursor-pointer text-white text-[14px] bg-saturatedPurple border-[2px] border-solid border-transparent rounded-[20px] overflow-hidden transition-all duration-[0.5s] ease-in-out hover:bg-white hover:text-stdGray">
                Assine agora
                </button>
            </div>
        </>
    )
}