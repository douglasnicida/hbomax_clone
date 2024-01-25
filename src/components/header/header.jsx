

export default function Header() {
    return (
        <div className="flex w-full h-[53px] px-[16px] py-[8px] justify-between items-center fixed top-0 bg-bgHeader z-50">
            <div className="">
                <a href="">
                    <img className="h-[17px] md:h-[27px]" src='https://www.hbomax.com/img/hbo-max-h-w-l.svg' alt='HBOMAX Logo' />
                </a>
            </div>

            <div>
                <ul className="flex justify-center items-center list-none font-bold uppercase">
                    <li className="mr-[15px] md:mr-[30px] cursor-pointer text-white text-[10px] md:text-[14px]">Entrar</li>
                    <li className="px-[10px] md:px-[20px] py-[4px] md:py-[8px] cursor-pointer text-white text-[10px] md:text-[14px] bg-saturatedPurple border-[2px] border-solid border-transparent rounded-[20px] overflow-hidden transition-all duration-[0.5s] ease-in-out hover:bg-white hover:text-stdGray">
                        Assine agora
                    </li>
                </ul>
            </div>
        </div>
    );
}