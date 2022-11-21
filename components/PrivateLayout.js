import Image from "next/image";

const PrivateLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row md:h-screen">
      <div className="w-full md:w-96 flex min-h-screen overflow-auto ">
        <div className="flex flex-col items-center w-full justify-center px-6 sm:px-20 md:px-6 space-y-4">
          <div className="flex flex-col justify-center items-center space-y-1">
            <Image
              src={"/assets/icons/logo.svg"}
              alt="logo"
              width={140}
              height={140}
            />
            <h1 className="font-bold text-4xl">
              DCX.<span className="text-[#1162FF]">DO</span>
            </h1>
          </div>
          <div className="w-full">{children}</div>
        </div>
      </div>
      <div className="hidden flex-1 gradient-bg md:flex flex-col items-center justify-between px-8 lg:px-20 py-8">
        <h1 className="font-bold text-center text-4xl lg:text-6xl">
          DCX <span className="text-[#1162FF]">Simplies and Secure</span>{" "}
          <br className="hidden lg:block" />
          Exchange in Town
        </h1>
        <div className="w-full max-w-[799px] h-80 relative">
          <Image src={"/assets/images/map.png"} alt="map" layout="fill" />
        </div>
        <div className="flex items-center justify-center w-full flex-wrap text-center">
          <div className="flex flex-col justify-center items-center flex-shrink-0 m-5 lg:m-6 text-[#ffffff] space-y-2">
            <h1 className="font-semibold text-3xl lg:text-5xl">1,526,000+</h1>
            <p className="font-medium text-sm">Active Users</p>
          </div>

          <div className="flex flex-col justify-center items-center flex-shrink-0 m-5 lg:m-6 text-[#ffffff] space-y-2">
            <h1 className="font-semibold text-3xl lg:text-5xl">900,000M+</h1>
            <p className="font-medium text-sm">Total Trade</p>
          </div>

          <div className="flex flex-col justify-center items-center flex-shrink-0 m-5 lg:m-6 text-[#ffffff] space-y-2">
            <h1 className="font-semibold text-3xl lg:text-5xl">6M+</h1>
            <p className="font-medium text-sm">Stake Amount</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateLayout;
