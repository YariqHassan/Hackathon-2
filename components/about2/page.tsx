export default function About2(){
    return(
        <div className="mb-20">
            <h3 className="text-[32px] text-center font-[600] m-20">What Makes Our Brand Different</h3>
            <div className="flex flex-wrap justify-center gap-[30px] align-middle text-[#007580]">
                <div className="bg-[#F9F9F9] p-[48px] text-left">
                    <i className="bi bi-truck"></i>
                    <h3 className="text-[20px] font-[500] mb-4 mt-4">Next day as standard</h3>
                    <p className="w-[213px] text-[16px]">Order before 3pm and get your order the next day as standard</p>
                </div>
                <div className="bg-[#F9F9F9] p-[48px] text-left">
                    <i className="bi bi-check-circle"></i>
                    <h3 className="text-[20px] font-[500] mb-4 mt-4">Made by true artisans</h3>
                    <p className="w-[213px] text-[16px]">Handmade crafted goods made with real passion and craftmanship</p>
                </div>
                <div className="bg-[#F9F9F9] p-[48px] text-left">
                    <i className="bi bi-credit-card"></i>
                    <h3 className="text-[20px] font-[500] mb-4 mt-4">Unbeatable prices</h3>
                    <p className="w-[213px] text-[16px]">For our materials and quality you won’t find better prices anywhere</p>
                </div>
                <div className="bg-[#F9F9F9] p-[48px] text-left">
                    <i className="bi bi-recycle"></i>
                    <h3 className="text-[20px] font-[500] mb-4 mt-4">Recycling packaging</h3>
                    <p className="w-[213px] text-[16px]">We use 100% recycled to ensure our footprint is more manageable</p>
                </div>
            </div>
        </div>
    );
}