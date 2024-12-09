import Image from 'next/image';

export default function ProductDetails () {
    return (
        <section className="flex flex-col lg:flex-row justify-between p-8 w-[75%] mx-auto mt-10">
            <div className="w-full max-w-md">
                <Image
                    src="/assets/images/home/chair2.png"
                    alt="Library Stool Chair"
                    width={675}
                    height={675}
                    className="rounded-md object-cover"
                />
            </div>

            <div className="w-full max-w-lg text-center lg:text-left">
                <h2 className="text-2xl font-bold mb-4">Library Stool Chair</h2>
                <div className='p-2 bg-[#029FAE] rounded-[100px] pl-3 pr-3 w-fit'>
                    <p className="text-[18px] font-[600] text-white">$20.00 USD</p>
                </div>
                <p className="text-gray-600 mb-6 mt-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing.
                </p>
                <button className="px-6 py-2 bg-[#029FAE] text-white rounded-md hover:bg-blue-700">
                    <i className='bi bi-cart-dash text-[22px] mr-2'></i> Add To Cart
                </button>
            </div>
        </section>
    );
};


