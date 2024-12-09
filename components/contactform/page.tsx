export default function ContactForm() {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-2xl font-bold text-center mt-[100px]">Get In Touch With Us</h2>
        <p className="text-center text-gray-600 mt-2">
          For More Information About Our Products & Services, Please Feel Free To Drop Us
          An Email. Our Staff Always Is There To Help You Out. Do Not Hesitate!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-[100px]  mb-[100px]">
          <div className="space-y-4">
            <div className="flex gap-4 ml-[-30px] mb-[-20px]">
              <div>
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div>
                <p className="font-[500]">Address</p>
              </div>
            </div>
            <p className="w-[200px]">236 5th Avenue, New York NY 10000, United States</p>
            <div className="flex gap-4 ml-[-30px]">
              <div>
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div>
                <p className="font-[500]">Phone</p>
              </div>
            </div>
            <p className="w-[200px]">328 5th Avenue, New York NY 10000, United States</p>
            <div className="flex gap-4 ml-[-30px] mb-[-20px]">
              <div>
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div>
                <p className="font-[500]">Working Time</p>
              </div>
            </div>
            <p className="w-[200px]">328 5th Avenue, New York NY 10000, United States</p>
          </div>
  
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-4 font-[500]" htmlFor="name">Your name</label>
              <input
                type="text"
                id="name"
                placeholder="abc"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-4 font-[500]" htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                placeholder="abc@def.com"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-4 font-[500]" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="This is optional"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-4 font-[500]" htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Hi! I would ask about"
                className="w-full border border-gray-300 rounded-md p-2  mb-4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-[50%] bg-[#029FAE] text-white py-2 rounded-md hover:bg-transparent hover:text-[#029FAE] border-2 hover:border-[#029FAE]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
  