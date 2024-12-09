import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';

export default function TopHeader(){
  return (
      <div className="top-header bg-[#272343]	h-12 w-full flex flex-wrap items-center justify-around">
          <div className="header-text text-white">
            <i className='bi bi-check2'></i> Free Shipping Over All Orders Over $50
          </div>
          <div className='flex gap-6 justify-center text-white'>
            <div>
              Eng <i className="bi bi-chevron-down"></i>
            </div>
            <Link href="/faqs">
              <div>
                Faqs
              </div>
            </Link>
            <div>
              <i className="bi bi-info-circle text-gray-300"></i> Need Help
            </div>
          </div>
      </div>
  )
}