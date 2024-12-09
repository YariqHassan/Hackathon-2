export default function About3(){
    return(
        <div className="mb-20 w-[100%]">
            <h3 className="text-[32px] text-left font-[600] mx-[150px] mb-10">What Makes Our Brand Different</h3>
            <div className="flex flex-wrap justify-center gap-4 align-middle">
                <div className="bg-[#F9F9F9] text-left">
                    <img src="/assets/images/home/sofa.png" alt="Sofa" className="w-[630px]" />
                </div>
                <div className="bg-[#F9F9F9] text-left flex gap-4 flex-wrap">
                    <div>
                        <img src="/assets/images/home/sofa2.png" alt="" className="w-[305px]" />    
                    </div>
                    <div>
                        <img src="/assets/images/home/sofa3.png" alt="" className="w-[305px]" />    
                    </div>
                </div>
            </div>
        </div>
    );
}