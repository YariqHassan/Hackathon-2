import Image from 'next/image';

export default function BrandsRow() {
  const logos = [
    { src: "/assets/images/home/brand1.png", alt: "Brand Logo 1" },
    { src: "/assets/images/home/brand2.png", alt: "Brand Logo 2" },
    { src: "/assets/images/home/brand3.png", alt: "Brand Logo 3" },
    { src: "/assets/images/home/brand4.png", alt: "Brand Logo 4" },
    { src: "/assets/images/home/brand5.png", alt: "Brand Logo 5" },
    { src: "/assets/images/home/brand6.png", alt: "Brand Logo 6" },
    { src: "/assets/images/home/brand7.png", alt: "Brand Logo 7" },
  ];

  return (
    <section className="flex justify-center py-8 bg-white mt-8">
      <div className="flex gap-[68px] items-center max-w-6xl">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={100}
            height={50}
            className="hover:grayscale-0 transition-all duration-300"
          />
        ))}
      </div>
    </section>
  );
};
