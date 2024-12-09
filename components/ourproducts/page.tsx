export default function OurProducts2() {
  const products = [
    { id: 1, label: 'New', imgSrc: '/assets/images/home/chair1.png', title: 'Library Stool Chair', price: '$20', originalPrice: null },
    { id: 2, label: 'Sale', imgSrc: '/assets/images/home/chair2.png', title: 'Library Stool Chair', price: '$20', originalPrice: '$30' },
    { id: 3, label: null, imgSrc: '/assets/images/home/chair3.png', title: 'Library Stool Chair', price: '$20', originalPrice: null },
    { id: 4, label: null, imgSrc: '/assets/images/home/chair4.png', title: 'Library Stool Chair', price: '$20', originalPrice: null },
    { id: 5, label: 'New', imgSrc: '/assets/images/home/chair5.png', title: 'Luxury Chair', price: '$25', originalPrice: null },
    { id: 6, label: 'Sale', imgSrc: '/assets/images/home/chair6.png', title: 'Comfy Armchair', price: '$30', originalPrice: '$40' },
    { id: 7, label: null, imgSrc: '/assets/images/home/chair7.png', title: 'Elegant Chair', price: '$22', originalPrice: null },
    { id: 8, label: null, imgSrc: '/assets/images/home/chair8.png', title: 'Modern Stool', price: '$18', originalPrice: null },
  ];

  return (
    <div className="py-8 px-4 mt-10 sm:px-8 lg:px-16 w-[85%] mx-auto">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="relative bg-white rounded-lg shadow-sm">
            {product.label && (
              <span
                className={`absolute top-3 left-3 px-3 py-1 text-sm font-medium text-white rounded ${
                  product.label === 'New' ? 'bg-green-500' : 'bg-orange-500'
                }`}
              >
                {product.label}
              </span>
            )}
            <img
              src={product.imgSrc}
              alt={product.title}
              className="w-[300px] h-[280px] object-cover rounded-lg"
            />
            <div className="p-4">
              <div className="items-center mt-2">
                <div className="flex align-middle justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700">{product.title}</h3>
                    <div className="flex align-middle">
                      <div>
                        <p className="text-lg font-bold text-gray-900">{product.price}</p>
                      </div>
                      <div className="my-auto">
                        {product.originalPrice && (
                          <p className="text-sm line-through text-gray-500 ml-2">{product.originalPrice}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="my-auto font-1 rounded-lg bg-[#029FAE] py-2 px-3 text-white">
                    <i className="bi bi-cart-dash"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
