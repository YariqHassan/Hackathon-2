import Image from 'next/image';

export default function NewsletterSection() {
    return (
        <section className="text-center pt-[70px] pb-[70px] bg-[#F0F2F3] mb-[70px] mt-[70px] w-full">
            <div className='w-[80%]  mx-auto'>
                <h2 className="text-2xl font-semibold mb-6">
                    Or Subscribe To The Newsletter
                </h2>

                <div className="flex justify-center items-center mb-10">
                    <input
                        type="email"
                        placeholder="Email Address..."
                        className="w-full bg-transparent max-w-md px-4 py-2 border-b-2 mr-8 border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="px-6 py-2 bg-transparent text-black border-b-2 border-black">
                        SUBMIT
                    </button>
                </div>

                <h3 className="text-lg font-medium mb-6">
                    Follow Products And Discounts On Instagram
                </h3>

                <div className="flex justify-center gap-4 flex-wrap">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 overflow-hidden rounded-md">
                        <Image
                            src="/assets/images/home/chair1.png"
                            alt="Product 1"
                            width={200}
                            height={200}
                            className="object-cover"
                        />
                    </div>
                    <div className="w-24 h-24 sm:w-32 sm:h-32 overflow-hidden rounded-md">
                        <Image
                            src="/assets/images/home/chair2.png"
                            alt="Product 2"
                            width={200}
                            height={200}
                            className="object-cover"
                        />
                    </div>
                    <div className="w-24 h-24 sm:w-32 sm:h-32 overflow-hidden rounded-md">
                        <Image
                            src="/assets/images/home/chair3.png"
                            alt="Product 3"
                            width={200}
                            height={200}
                            className="object-cover"
                        />
                    </div>
                    <div className="w-24 h-24 sm:w-32 sm:h-32 overflow-hidden rounded-md">
                        <Image
                            src="/assets/images/home/chair4.png"
                            alt="Product 4"
                            width={200}
                            height={200}
                            className="object-cover"
                        />
                    </div>
                    <div className="w-24 h-24 sm:w-32 sm:h-32 overflow-hidden rounded-md">
                        <Image
                            src="/assets/images/home/chair5.png"
                            alt="Product 5"
                            width={200}
                            height={200}
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};


