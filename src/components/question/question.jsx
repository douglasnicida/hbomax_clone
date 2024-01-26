import { useState } from "react";


function QuestionBox(props){
    const [display, setDisplay] = useState("hidden");

    function switchDisplay(){
        setDisplay(
            (display === "hidden") ? "flex" : "hidden"
        )
    }

    return(
        <div className="border-b-[1px] border-solid border-white/30 w-full cursor-pointer min-h-[50px] mb-3" onClick={switchDisplay}>
            <div className="flex justify-between">
                <h2 className="text-lightPurple opacity-70 h-24 text-[24px] py-4">{props.question}</h2>
                <div className="mr-5 cursor-pointer flex justify-center my-8">
                    <div className="bg-white w-[20px] h-[2px] absolute transition-all duration-300 easy-in-out"></div>
                    <div className="bg-white w-[20px] h-[2px] absolute rotate-90 transition-all duration-300 easy-in-out"></div>
                </div>
            </div>

            <div className={`mb-4 ${display} h-auto transition-all transition-300 easy-in-out`}>
                <span className="text-white text-[24px]">{props.answer}</span>
            </div>

            
        </div>
    )
}

export default function Question() {
    return (
        <div className="w-full h-[120vh] flex flex-col bg-darkBlue">
            <h2 className="text-[33px] text-center mt-10 text-white">Alguma pergunta? A gente tem a resposta.</h2>

            <div className="mt-32 px-60">
                <QuestionBox question="O que é HBO Max?" answer={asw1}/>
                <QuestionBox question="A HBO Max tem teste grátis?" answer={asw2}/>
                <QuestionBox question="Tem algum custo extra para assistir HBO Max do meu celular ou Tablet?" answer={asw3}/>
                <QuestionBox question="Quanto custa o serviço da HBO Max?" answer={asw4}/>
                <QuestionBox question="Em quais dispositivos posso assistir a filmes e séries da HBO Max?" answer={asw5Images}/>
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