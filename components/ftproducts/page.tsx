import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedProducts() {
  return (
    <section className="py-10 w-[80%] mx-auto mb-12">
      <div className="container mx-auto">
        <div className='flex wrap justify-between'>
            <div>
                <h2 className="text-2xl font-bold mb-6">FEATURED PRODUCTS</h2>
            </div>
            <div>
                <Link href="/" className='font-bold border-b-2 border-black py-3 hover:text-[#029FAE] hover:border-[#029FAE]'>
                    View All
                </Link>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="text-center">
            <Image
              src="/assets/images/home/chair7.png"
              alt="Library Stool Chair"
              width={300}
              height={300}
            />
            <div className='flex justify-between align-middle my-auto py-0'>
                <div className='my-auto'>
                    <h3 className="text-md font-normal mt-4 text-[#272343]">Library Stool Chair</h3>
                </div>
                <div className='mt-4'>
                    <p className=" font-bold text-black my-auto">$99</p>
                </div>
            </div>
          </div>

          <div className="text-center">
            <Image
              src="/assets/images/home/chair8.png"
              alt="Library Stool Chair"
              width={300}
              height={300}
            />
            <div className='flex justify-between align-middle my-auto py-0'>
                <div className='my-auto'>
                    <h3 className="text-md font-normal mt-4 text-[#272343]">Library Stool Chair</h3>
                </div>
                <div className='mt-4'>
                    <p className=" font-bold text-black my-auto">$99</p>
                </div>
            </div>
          </div>

          <div className="text-center">
            <Image
              src="/assets/images/home/chair12.png"
              alt="Library Stool Chair"
              width={300}
              height={300}
            />
            <div className='flex justify-between align-middle my-auto py-0'>
                <div className='my-auto'>
                    <h3 className="text-md font-normal mt-4 text-[#272343]">Library Stool Chair</h3>
                </div>
                <div className='mt-4'>
                    <p className=" font-bold text-black my-auto">$99</p>
                </div>
            </div>
          </div>

          <div className="text-center">
            <Image
              src="/assets/images/home/chair11.png"
              alt="Library Stool Chair"
              width={300}
              height={300}
            />
            <div className='flex justify-between align-middle my-auto py-0'>
                <div className='my-auto'>
                    <h3 className="text-md font-normal mt-4 text-[#272343]">Library Stool Chair</h3>
                </div>
                <div className='mt-4'>
                    <p className=" font-bold text-black my-auto">$99</p>
                </div>
            </div>
          </div>

          <div className="text-center">
            <Image
              src="/assets/images/home/chair9.png"
              alt="Library Stool Chair"
              width={300}
              height={300}
            />
            <div className='flex justify-between align-middle my-auto py-0'>
                <div className='my-auto'>
                    <h3 className="text-md font-normal mt-4 text-[#272343]">Library Stool Chair</h3>
                </div>
                <div className='mt-4'>
                    <p className=" font-bold text-black my-auto">$99</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
