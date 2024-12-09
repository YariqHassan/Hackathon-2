export default function stats(){
    return (
        <div className="flex justify-around w-[80%] bg-[#F4F4F4] pt-[100px] pb-[100px] mx-auto mb-0 align-middle">
          <div className="flex flex-wrap justify-between gap-3 align-middle">
            <div className="text-[50px]">
              <i className="bi bi-trophy"></i>
            </div>
            <div>
              <div className="my-auto">
                <h3 className="text-[20px]">High Quality</h3>
              </div>
              <div>
                <p className="text-[15px]">Crafted From Top Materials</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-3 align-middle">
            <div className="text-[50px]">
              <i className="bi bi-award"></i>
            </div>
            <div className="my-auto">
              <div>
                <h3 className="text-[20px]">Warranty Protection</h3>
              </div>
              <div>
                <p className="text-[15px]">Over 2 Years</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-3 align-middle">
            <div className="text-[50px]">
              <i className="bi bi-headset"></i>
            </div>
            <div className="my-auto">
              <div>
                <h3 className="text-[20px]">24 / 7 Support</h3>
              </div>
              <div>
                <p className="text-[15px]">Dedicated Support</p>
              </div>
            </div>
          </div>
        </div>
    );
}