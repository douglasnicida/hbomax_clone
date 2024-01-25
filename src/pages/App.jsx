import Card from "../components/card/card";
import Slideshow from "./Slideshow";

export default function App(){
  return (
    
    <>
      <div className="flex flex-col-reverse">
         <div className="md:bg-gradient-to-r from-black to-transparent from-40% h-[40vh] md:h-[80vh] w-full md:absolute z-20 top-0 left-0 md:mt-[53px] flex md:justify-center flex-col md:px-20">

               <div className="w-full md:w-[35%] h-[40vh] md:ml-24 flex flex-col md:items-center bg-black md:bg-transparent">
                  <h2 className="text-white text-2xl text-center hidden md:flex"> Na HBO Max, você tem tudo. <br/> E muito mais!</h2>
                  <div className="flex mt-10 justify-center">

                     <div className="flex flex-col w-[150px] md:w-[300px] bg-transparent h-[200px] p-[20px] gap-2 md:gap-5 items-center">
                        <h2 className="text-lightGray text-xl md:text-2xl text-center">Pagamento Mensal</h2>
                        <h2 className="text-white md:text-2xl font-bold">R$34,90/mês</h2>
                     </div>

                     <div className="flex flex-col w-[150px] md:w-[300px] bg-gradient-to-b from-myPurple to-transparent from-[-100px] to-[170px] h-[200px] p-[20px] gap-2 md:gap-5 items-center">
                        <h2 className="text-lightGray text-xl md:text-2xl text-center">Pagamento Anual</h2>
                        <h2 className="text-white md:text-2xl font-bold">R$239,90/ano*</h2>
                        <span className="bg-saturatedPurple py-[1px] pr-6 pl-1 text-white text-[10px] md:text-sm md:ml-10 font-bold">Economize R$178,90</span>
                     </div>
                     
                  </div>

                  <div className="w-full flex justify-center">
                     <button className="px-[20px] py-[8px] w-[60%] cursor-pointer text-white text-[20px] font-bold bg-saturatedPurple border-[2px] border-solid border-transparent rounded-full overflow-hidden transition-all duration-[0.5s] ease-in-out hover:bg-white hover:text-stdGray">
                           Assine agora
                     </button>
                  </div>
               </div>
         </div>
         <div className="h-[60vh] md:h-[80vh] bg-maverick w-full bg-no-repeat bg-cover mt-[53px] flex" />

      </div>

      <div className="mt-[13px] flex z-10 flex-col h-[135vh] md:h-[90vh]">
        <div className="h-[145vh] md:h-[90vh] text-white mt-2 md:justify-center items-center flex flex-col z-50">
              <h2 className="text-[25px] md:text-[33px] text-center">Escolha seu plano Multitelas</h2>

                <span className="underline md:border-none mt-7">O que está incluso?</span>
              <div className="group hidden md:flex flex-col justify-center items-center">
                <ul className="grid grid-rows-2 grid-cols-3 gap-x-10 w-[70%] mt-5 mx-auto">
                   <li className="flex items-center"> 
                      <div className="bg-myPurple h-[8px] w-[8px] rounded-full mr-3" />
                      Aproveite em todos os seus dispositivos.
                   </li>

                   <li className="flex items-center"> 
                      <div className="bg-myPurple h-[8px] w-[8px] rounded-full mr-3" />
                      Chromecast e Airplay disponíveis.
                   </li>

                   <li className="flex items-center"> 
                      <div className="bg-myPurple h-[8px] w-[8px] rounded-full mr-3" />
                      Assista em até 3 telas ao mesmo tempo.
                   </li>

                   <li className="flex items-center"> 
                      <div className="bg-myPurple h-[8px] w-[8px] rounded-full mr-3" />
                      Tenha conteúdo em alta definição, com qualidade 4K.
                   </li>

                   <li className="flex items-center"> 
                      <div className="bg-myPurple h-[8px] w-[8px] rounded-full mr-3" />
                      Baixe suas séries e filmes favoritos, assista onde e quando quiser.
                   </li>

                   <li className="flex items-center"> 
                      <div className="bg-myPurple h-[8px] w-[8px] rounded-full mr-3" />
                      Crie até 5 perfis diferentes.
                   </li>
                </ul>
              </div>

            <div className="flex flex-col md:flex-row md:justify-around items-center w-full h-[150vh] md:h-[40vh] mt-14 md:px-[100px] gap-y-14 md:gap-0">
            
               <div className="flex flex-col w-[300px] md:w-[400px] bg-gradient-to-b from-myPurple to-bottomCard from-[-500px] to-[270px] h-[200px]p-[20px] gap-5 items-center rounded-[20px] h-auto">
                  <h2 className="text-white text-3xl md:text-4xl font-bold mt-5">3 meses</h2>
                  <h2 className="text-white text-4xl md:text-5xl font-bold">R$74,90/ano*</h2>
                  <h2 className="text-white md:text-lg font-bold">Igual a R$ 24,97 por mês</h2>
                  <button className="mt-3 mb-7 uppercase px-[20px] py-[12px] w-[90%] cursor-pointer text-white text-[13px] md:text-[16px] font-bold bg-gradient-to-r from-myPurple to-saturatedPurple rounded-full overflow-hidden transition-all duration-[0.5s] ease-in-out hover:bg-white hover:text-stdGray">
                     Escolha o plano trimestral
                  </button>
               </div>
               
               <div className="flex flex-col w-[300px] md:w-[400px] bg-gradient-to-b from-myPurple to-bottomCard from-[-500px] to-[270px] h-[200px] p-[20px] gap-5 items-center rounded-[20px] h-auto
               border-2 border-saturatedPurple">
                  <div className="flex justify-center items-center -mt-9 bg-gradient-to-r from-saturatedPurple to-lightPurple w-[250px] h-[30px] rounded-full absolute">
                     <span className="text-white font-[18px] font-bold uppercase">Economize 5 meses</span>
                  </div>

                  <h2 className="text-white text-3xl md:text-4xl font-bold mt-5">12 meses</h2>
                  <h2 className="text-white text-4xl md:text-5xl font-bold">R$74,90/ano*</h2>
                  <h2 className="text-white md:text-lg font-bold">Igual a R$ 24,97 por mês</h2>
                  <button className="mt-3 mb-7 uppercase px-[20px] py-[12px] w-[90%] cursor-pointer text-white text-[13px] md:text-[16px] font-bold bg-gradient-to-r from-myPurple to-saturatedPurple rounded-full overflow-hidden transition-all duration-[0.5s] ease-in-out hover:bg-white hover:text-stdGray">
                     Escolha o plano anual
                  </button>
               </div>

               <div className="flex flex-col w-[300px] md:w-[400px] bg-gradient-to-b from-myPurple to-bottomCard from-[-500px] to-[270px] h-[200px]p-[20px] gap-5 items-center rounded-[20px] h-auto">
                  <h2 className="text-white text-3xl md:text-4xl font-bold mt-5">1 mês</h2>
                  <h2 className="text-white text-4xl md:text-5xl font-bold">R$34,90/ano*</h2>
                  <button className="mt-3 mb-7 uppercase px-[20px] py-[12px] w-[90%] cursor-pointer text-white text-[13px] md:text-[16px] font-bold bg-gradient-to-r from-myPurple to-saturatedPurple rounded-full overflow-hidden transition-all duration-[0.5s] ease-in-out hover:bg-white hover:text-stdGray">
                     Escolha o plano mensal
                  </button>
               </div>

            </div>

            <span className="md:mt-10 h-auto text-white mx-auto w-[53%] text-center text-[13px]">
               *Necessário pagamento antecipado. Economia baseada no preço do plano multitelas anual comparado ao preço do plano multitelas mensal durante 12 meses, excluindo impostos. Termos se aplicam.
            </span>              
        </div>

        <div className="bg-bgMovies bg-cover w-full absolute z-1"></div>

      </div>
      
      {/* divisao 3 */}
      <div className="mt-[13px] flex z-10 flex-col w-full">
        <div className="h-[90vh] text-white mt-2 bg-gradient-to-b from-darkBlue via-saturatedPurple to-darkBlue hidden md:block">
            <h2 className="text-[33px] text-center mt-10">Estreias que vão se transformar nos seus novos favoritos.</h2>
            
            {/* slideshow container */}
            <Slideshow />
            
            
        </div>
      </div>

      {/* divisao 4 */}
      <div className="mt-32 md:mt-[13px] flex z-10 flex-col">
        <div className="h-[170vh] md:h-[130vh] text-white mt-2 bg-darkBlue w-full">
            <div className="text-center">
               <h2 className="text-[33px] text-center mt-10">Uma experiência simples e completa</h2>
               <span className="md:mt-10 h-auto text-white text-[13px]">
                  A compatibilidade varia de acordo com o plano.
               </span>
            </div>
            
            <div className="flex items-center justify-center w-full px-5 md:px-0">
               <img className="mt-14 h-[25vh] md:h-[70vh]" src={champions} alt="Telas com imagens ilustrativas da HBO MAX" />
            </div>
            
            <ul className="grid grid-rows-4 md:grid-rows-1 md:grid-cols-4 grid-cols-1 gap-y-10 md:gap-x-10 w-full mt-14 md:mt-24 mx-auto px-24">
               <li className="before:w-[80px] before:h-[2px] before:mb-3 before:bg-lightPurple before:block before:mx-auto text-center">
                  <h2 className="text-[22px]">Crie até 5 perfis e receba recomendações personalizadas para cada um</h2>
               </li>

               <li className="before:w-[80px] before:h-[2px] before:mb-3 before:bg-lightPurple before:block before:mx-auto text-center">
                  <h2 className="text-[22px]">Baixe qualquer conteúdo disponível para assistir offline</h2>
               </li>

               <li className="before:w-[80px] before:h-[2px] before:mb-3 before:bg-lightPurple before:block before:mx-auto text-center">
                  <h2 className="text-[22px]">Defina o conteúdo que as crianças podem assistir de acordo com cada faixa etária</h2>
               </li>

               <li className="before:w-[80px] before:h-[2px] before:mb-3 before:bg-lightPurple before:block before:mx-auto text-center">
                  <h2 className="text-[22px]">Adicione seus títulos favoritos para assistir quando quiser</h2>
               </li>
            </ul>
        </div>
      </div>

      {/* divisao 5 */}
      <div className="md:my-10 bg-darkBlue w-[80%] h-auto grid grid-rows-3 md:grid-rows-1 grid-cols-1 md:grid-cols-3 place-items-center md:gap-x-20 mx-auto">
         <img src={ben10} alt="" className="w-[350px]"/>
         <h2 className="text-[33px] text-center mt-10 text-white">A HBO Max traz diversão para a família toda</h2>
         <img src={looney} alt="" className="w-[350px]"/>
      </div>

      {/* divisao 6 */}
      <div className="mt-[13px] md:flex z-10 flex-col mb-14">
        <div className="h-auto text-white mt-2 bg-darkBlue w-full">
            <h2 className="text-[33px] text-center mt-10">Descubra novos universos</h2>
            <ul className="grid grid-rows-6 md:grid-rows-1 md:grid-cols-3 grid-cols-1 gap-y-10 w-full mt-14 md:mt-24 place-items-center md:w-[1140px] mx-auto">
               <li>
                  <Card img1="bg-box11" img2="hover:bg-box12"/>
               </li>

               <li>
                  <Card img1="bg-box21" img2="hover:bg-box22"/>
               </li>

               <li>
                  <Card img1="bg-box31" img2="hover:bg-box32"/>
               </li>

               <li>
                  <Card img1="bg-box41" img2="hover:bg-box42"/>
               </li>

               <li>
                  <Card img1="bg-box51" img2="hover:bg-box52"/>
               </li>

               <li>
                  <Card img1="bg-box61" img2="hover:bg-box62"/>
               </li>
            </ul>
            
         </div>
      </div>

      {/* divisao perguntas frequentes */}
      
    </>
  )
}

const champions = "https://hbomax-images.warnermediacdn.com/2021-08/br_devices_trophy.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=1007"
const ben10 = "https://hbomax-images.warnermediacdn.com/2021-05/ben10.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=486"
const looney = "https://hbomax-images.warnermediacdn.com/2021-05/fam_and_kids-looney_toons-img.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=556"