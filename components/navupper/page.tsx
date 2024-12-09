import Image from 'next/image';
import Link from 'next/link';

export default function NavUpper(){
    return (
        <div className="bg-[#F0F2F3] w-full pb-5 pt-5 flex-wrap flex items-center justify-around"  style={{fontFamily:'Inter'}}>
            <div className='flex justify-center gap-2 align-middle'>
                <div>
                    <Image
                        src="/assets/images/Logo.png"
                        alt="Example"
                        width={40}
                        height={40}
                    />
                </div>
                <div className='py-1 font-medium text-[26px]'>
                    Comforty
                </div>
            </div>
            <div>
                <Link href="/cart">
                    <div className='bg-[#FFFFFF] rounded-lg gap-3 flex justify-center align-middle py-[11px] px-4'>
                        <div className='text-2xl'>
                            <i className="bi bi-cart-dash"></i>
                        </div>
                        <div className='text-lg font-medium align-middle'>
                            Cart
                        </div>
                        <div className='rounded-full bg-[#007580] px-3 py-1 text-white'>2</div>
                    </div>
                </Link>
            </div>
        </div>
    )
  }