export default function About1(){
    return (
        <div className="w-[80%] flex flex-wrap justify-center gap-2 mt-20 mx-auto">
            <div className="bg-[#007580] text-white h-[478px] w-[47%] p-16">
                <h1 className="text-[28px] mb-4 font-[700]">About Us - Comforty</h1>
                <p className="text-4">At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.</p>
                <button className="bg-white mt-[30%] bg-opacity-15 py-[16px] px-[32px] font-[400] text-4">View Collections</button>
            </div>
            <div className="h-[476px] w-[619px] bg-black overflow-hidden">
                <img src="/assets/images/home/ChairAbout.png" alt="Chair" className="w-full" />
            </div>
        </div>
    );
}