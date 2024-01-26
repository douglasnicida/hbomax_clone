import { useState } from "react";


function QuestionBox(props){
    const [show, setShow] = useState(false);

    function switchDisplay(){
        setShow(!show)
    }

    const answer5 = (
        <div className="flex flex-col md:flex-row md:justify-around gap-y-8 px-8">

            <div className="flex flex-col justify-center items-center mt-4 md:mt-0">
                <img className="h-[80px] md:h-[110px]" src={props.answer[0]} alt="" />
                <h2 className="text-center mt-3">Smart TVs</h2>
                <div className="my-5 bg-saturatedPurple h-[3px] w-[80px]"></div>
                <ul className="text-[16px] text-center">
                    <li>Samsung</li>
                    <li>LG</li>
                    <li>Roku</li>
                    <li>Android TV</li>
                    <li>Apple TV</li>
                    <li>ChromeCast</li>
                </ul>
            </div>

            <div className="flex flex-col items-center">
                <img className="h-[80px] md:h-[110px]" src={props.answer[1]} alt="" />
                <h2 className="text-center mt-3">Computadores</h2>
                <div className="my-5 bg-saturatedPurple h-[3px] w-[80px]"></div>
                <ul className="text-[16px] text-center">
                    <li>Windows PC</li>
                    <li>Mac OS</li>
                    <li>Chrome OS</li>
                </ul>
            </div>

            <div className="flex flex-col items-center">
                <img className="h-[80px] md:h-[110px]" src={props.answer[2]} alt="" />
                <h2 className="text-center mt-3">Video-games</h2>
                <div className="my-5 bg-saturatedPurple h-[3px] w-[80px]"></div>
                <ul className="text-[16px] text-center">
                    <li>PS5</li>
                    <li>PS4</li>
                    <li>Xbox One</li>
                    <li>Xbox Series XIS</li>
                </ul>
            </div>

            <div className="flex flex-col items-center">
                <img className="h-[80px] md:h-[110px]" src={props.answer[3]} alt="" />
                <h2 className="text-center mt-3">Smartphones e Tablets</h2>
                <div className="my-5 bg-saturatedPurple h-[3px] w-[80px]"></div>
                <ul className="text-[16px] text-center">
                    <li>Android Phone & Tablet</li>
                    <li>iPhone & iPad</li>
                </ul>
            </div>
        </div>
    )

    return(
        <div className="border-b-[1px] border-solid border-white/30 w-full cursor-pointer min-h-[50px] mb-3 transition-all duration-300 ease-in-out" onClick={switchDisplay}>
            <div className="flex justify-between">
                <h2 className="text-lightPurple opacity-70 h-auto md:h-24 text-[20px] md:text-[24px] md:py-4 w-[85%] md:w-full">{props.question}</h2>
                <div className="mr-5 cursor-pointer flex justify-center my-4 md:my-8">
                    <div className={`bg-white w-[20px] h-[2px] absolute transition-all duration-300 ease-in-out ${(show === true) ? "rotate-180" : ""}`}></div>
                    <div className={`bg-white w-[20px] h-[2px] absolute transition-all duration-300 ease-in-out ${(show === true) ? "rotate-180" : "rotate-90"}`}></div>
                </div>
            </div>

            <div className={`mb-4 ${(show === true && !props.asw5) ? "active" : ""} ${(show === true && props.asw5) ? "activeQ5" : ""} transition-all duration-300 ease-in-out question text-white text-[16px] md:text-[24px] overflow-hidden`}>
                {(props.asw5) ? answer5 : props.answer}
            </div>

            
        </div>
    )
}

export default function Question() {
    return (
        <div className="w-full h-auto flex flex-col bg-darkBlue questionBox">
            <h2 className="text-[33px] text-center mt-10 text-white">Alguma pergunta? A gente tem a resposta.</h2>

            <div className="mt-32 px-10 md:px-60 transition-all duration-300 ease-in-out">
                <QuestionBox question="O que é HBO Max?" answer={asw1}/>
                <QuestionBox question="A HBO Max tem teste grátis?" answer={asw2}/>
                <QuestionBox question="Tem algum custo extra para assistir HBO Max do meu celular ou Tablet?" answer={asw3}/>
                <QuestionBox question="Quanto custa o serviço da HBO Max?" answer={asw4}/>
                <QuestionBox question="Em quais dispositivos posso assistir a filmes e séries da HBO Max?" answer={asw5Images} asw5={true}/>
                <QuestionBox question="A HBO Max tem controle para menores?" answer={asw6}/>
            </div>


        </div>
    )
}

const asw1 = "HBO Max é a nova plataforma de streaming que reúne todo o conteúdo da HBO, além de filmes campeões em bilheteria, séries incríveis para maratonar e Max Originals exclusivos.";
const asw2 = "A HBO Max, juntamente com a maioria dos provedores da HBO Max, não oferecem mais um teste gratuito para novos assinantes. Se uma assinatura ou oferta promocional incluir uma avaliação gratuita, você verá uma menção à avaliação gratuita ao se inscrever.";
const asw3 = "Com o plano multitelas, você pode aproveitar todo o catálogo em todas as suas telas, incluindo smartphone e tablet."
const asw4 = "A HBO Max está disponível em vários provedores e os preços variam de acordo com o país e com o plano escolhido. Para obter informações sobre preços, visite HBOMax.com.";
const asw6 = "Sim, você pode criar um perfil infantil para cada um de seus filhos, acionando a opção Controles dos pais, que limita o conteúdo que pode ser visualizado.";

const asw5Images = ["https://hbomax-images.warnermediacdn.com/2021-02/fwk-device-bw-tv.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=266",
"https://hbomax-images.warnermediacdn.com/2021-02/fwk-device-bw-computer.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=266",
"https://hbomax-images.warnermediacdn.com/2021-02/fwk-device-bw-game-console.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=266",
"https://hbomax-images.warnermediacdn.com/2021-02/fwk-device-bw-tablet.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=266"]