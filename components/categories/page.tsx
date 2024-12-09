import Image from 'next/image';

export default function TopCategories() {
  return (
    <div className="py-10 w-[80%] mx-auto">
      <h2 className="text-2xl ml-8 font-semibold mb-6">Top Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-10">
        <div className="relative rounded-[14px] overflow-hidden shadow-md hover:shadow-lg transition">
          <Image
            src="/assets/images/home/TC1.png"
            alt="Wing Chair"
            width={400}
            height={400}
            className="w-full h-auto object-cover"
          />
          <div className="absolute h-[20%] mt-[80%] inset-0 bg-black bg-opacity-75 flex flex-col justify-end p-4 text-white">
            <h3 className="text-lg font-bold">Wing Chair</h3>
            <p className="text-sm">3,584 Products</p>
          </div>
        </div>

        <div className="relative rounded-[14px] overflow-hidden shadow-md hover:shadow-lg transition">
          <Image
            src="/assets/images/home/TC2.png"
            alt="Wooden Chair"
            width={400}
            height={400}
            className="w-full h-auto object-cover"
          />
          <div className="absolute h-[20%] mt-[80%] inset-0 bg-black bg-opacity-75 flex flex-col justify-end p-4 text-white">
            <h3 className="text-lg font-bold">Wooden Chair</h3>
            <p className="text-sm">157 Products</p>
          </div>
        </div>

        <div className="relative rounded-[14px] overflow-hidden shadow-md hover:shadow-lg transition">
          <Image
            src="/assets/images/home/TC3.png"
            alt="Desk Chair"
            width={400}
            height={400}
            className="w-full h-auto object-cover"
          />
          <div className="absolute h-[20%] mt-[80%] inset-0 bg-black bg-opacity-75 flex flex-col justify-end p-4 text-white">
            <h3 className="text-lg font-bold">Desk Chair</h3>
            <p className="text-sm">154 Products</p>
          </div>
        </div>
      </div>
    </div>
  );
}
