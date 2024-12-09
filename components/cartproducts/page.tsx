import React from "react";

export default function CartSection() {
  return (
    <div className="w-[80%] mx-auto p-6 mt-20 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-[[400]]">Bag</h2>

          <div className="flex items-start space-x-4 justify-between border-b pb-4">
            <img
              src="/assets/images/home/chair3.png"
              alt="Library Stool Chair"
              className="w-[150px] h-[150px] object-cover rounded-md"
            />
            <div className="flex-1">
              <h3 className="text-lg font-[400]">Library Stool Chair</h3>
              <p className="text-sm text-gray-500 mt-8">Ashen Slate/Cobalt Bliss</p>
              <div className="flex justify-between w-[30%] text-[#757575] mb-8">
                <div>
                  <p className="text-sm">Size: L</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Quantity: 1</p>
                </div>
              </div>
              <i className="bi bi-heart text-2xl mr-4"></i>
              <i className="bi bi-trash text-2xl"></i>
            </div>
            <p className="text-lg font-[400]">MRP: $99</p>
          </div>

          <div className="flex items-start space-x-4 border-b pb-4">
            <img
              src="/assets/images/home/chair5.png"
              alt="Library Stool Chair"
              className="w-[150px] h-[150px] object-cover rounded-md"
            />
            <div className="flex-1">
              <h3 className="text-lg font-[400]">Library Stool Chair</h3>
              <p className="text-sm text-gray-500 mt-8">Ashen Slate/Cobalt Bliss</p>
              <div className="flex justify-between w-[30%] text-[#757575] mb-8">
                <div>
                  <p className="text-sm">Size: L</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Quantity: 1</p>
                </div>
              </div>
              <i className="bi bi-heart text-2xl mr-4"></i>
              <i className="bi bi-trash text-2xl"></i>
            </div>
            <p className="text-lg font-[400]">MRP: $99</p>
          </div>
        </div>

        <div className="bg-transparent p-6 ml-7">
          <h2 className="text-xl font-[500] mb-4">Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <p>Subtotal</p>
              <p>$198.00</p>
            </div>
            <div className="flex justify-between text-sm">
              <p>Estimated Delivery & Handling</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between text-lg pt-6">
              <p>Total</p>
              <p>$198.00</p>
            </div>
          </div>
          <button className="w-full mt-6 bg-[#029FAE] text-white py-3 rounded-full text-center hover:text-[#029FAE] hover:bg-transparent hover:border-2 hover:border-[#029FAE]">
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

