export default function Card({img1, img2}){
    return(
        <div className={`rounded-[8px] h-[510px] w-[340px] bg-cover ${img1} ${img2} transition-all duration-[500ms] easy-in-out`}></div>
    )
} 