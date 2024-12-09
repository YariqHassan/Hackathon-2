import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-20 pb-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 w-[80%]">
        <div>
            <div className='flex gap-2 align-middle'>
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
          <p className="text-gray-600 mt-4">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. 
            Cras egestas purus.
          </p>
          <div className="flex items-center space-x-4 mt-4 gap-4 text-lg">
            <a href="#" className="text-gray-500 hover:text-teal-500">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-teal-500">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-teal-500">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-teal-500">
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>

        <div className="ml-[70px]">
          <h3 className="font-semibold text-lg text-[#9A9CAA] mb-4">Category</h3>
          <ul className="space-y-2">
            {["Sofa", "Armchair", "Wing Chair", "Desk Chair", "Wooden Chair", "Park Bench"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-teal-500 transition"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="ml-[-30px]">
          <h3 className="font-semibold text-lg text-[#9A9CAA] mb-4">Support</h3>
          <ul className="space-y-2">
            {["Help & Support", "Terms & Conditions", "Privacy Policy", "Help"].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-gray-600 hover:text-teal-500 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="ml-[-60px]">
          <h3 className="font-semibold text-lg text-[#9A9CAA] mb-4">Newsletter</h3>
          <form>
            <div className="flex gap-2">
                <div>
                    <input
                    type="email"
                    placeholder="Your email"
                    className="w-[285px] px-4 py-2 border border-gray-300 rounded-md mb-4"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-[127px] bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition"
                        >
                        Subscribe
                    </button>
                </div>
            </div>
          </form>
          <p className="text-[#272343] text-sm mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique erat enim.
          </p>
        </div>
      </div>

      <div className="border-t flex justify-between w-[80%] mx-auto border-gray-300 mt-10 pt-6 text-center text-gray-500 text-sm">
        <div>
            <p>
                © 2021 - Bloggy - Designed & Developed by <a href="https://www.yariqhassan.com/" target="_blank"><span className="text-teal-500">Yariq Hassan</span></a>
            </p>
        </div>
        <div className="flex justify-center items-center space-x-4 mt-2">
          <img
            src="/assets/images/home/payments.png"
            alt="Paypal"
            className="h-5"
          />
        </div>
      </div>
    </footer>
  );
};
