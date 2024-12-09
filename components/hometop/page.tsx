import Image from 'next/image';

export default function HomeTop(){
  return (
    <section className="flex items-center justify-between w-[75%] flex-wrap rounded-bl-[48px] mx-auto px-8 py-12 bg-[#F0F2F3]">
      <div className="max-w-[60%]">
        <p className="text-sm text-[#272343] uppercase">Welcome to Chairy</p>
        <h1 className="mt-2 text-[60px] leading-[66px] font-bold text-gray-900">
          Best Furniture Collection For Your Interior.
        </h1>
        <button className="px-6 pt-[14px] pb-[14px] mt-6 text-white text-[16px] bg-[#029FAE] rounded-lg hover:bg-teal-600">
          Shop Now <i className='bi bi-arrow-right'></i>
        </button>
      </div>

      <div className="flex-shrink-0 pr-10 w-[40%]">
        <Image
          src="/assets/images/home/ChairHomeTop.png"
          alt="Chair"
          width={380}
          height={380}
          className="rounded-md"
        />
      </div>
    </section>
  );
};

