import Image from 'next/image';

export default function ExploreStyles() {
  return (
    <div className="py-10 w-[80%] ml-[12%] mt-20">
      <div className="flex flex-col md:flex-row items-center gap-6 px-4 md:px-10">
        <div className="relative">
          <Image
            src="/assets/images/home/NSbig.png"
            alt="Orange Chair"
            width={600}
            height={600}
            className="w-full h-auto object-cover rounded-lg"
          />
          <div className="absolute left-[-40%] top-1/2 -translate-y-1/2 rotate-90 text-center text-black font-semibold text-lg tracking-wide">
            EXPLORE NEW AND POPULAR STYLES
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/assets/images/home/NS1.png"
            alt="White Chair"
            width={300}
            height={300}
            className="w-full h-auto object-cover rounded-lg"
          />
          <Image
            src="/assets/images/home/NS2.png"
            alt="Another White Chair"
            width={300}
            height={300}
            className="w-full h-auto object-cover rounded-lg"
          />
          <Image
            src="/assets/images/home/NS3.png"
            alt="Grey Chair"
            width={300}
            height={300}
            className="w-full h-auto object-cover rounded-lg"
          />
          <Image
            src="/assets/images/home/NS4.png"
            alt="Another White Chair"
            width={300}
            height={300}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
