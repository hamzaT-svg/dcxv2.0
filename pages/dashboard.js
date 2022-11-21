import Image from "next/image";
import { PublicLayout } from "../components";

const Dashboard = () => {
  return (
    <PublicLayout>
      <div className="flex md:flex-row space-x-4 flex-col w-full relative">
        <div className="max-w-5xl">
          <Cards />
          <Stats />
          <Trending />
        </div>
        <div className="w-full md:w-96 space-y-4">
          <Trade />
          <QuickTransfer />
          <RecentTransactions />
        </div>
      </div>
    </PublicLayout>
  );
};

export default Dashboard;

const Cards = () => {
  return (
    <div className="flex items-center space-x-4 lg:space-x-6 overflow-x-auto no-scroll-bar ">
      <div className="rounded-md flex flex-col justify-between bg-[#0075FF] h-44 min-w-[320px] p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-[#FFFFFF] w-8 h-8 flex items-center justify-center rounded-full">
              <Image
                src={"/assets/icons/wallet.svg"}
                alt={"wallet"}
                width={16}
                height={16}
              />
            </div>
            <h3 className="font-semibold text-sm text-[#FFFFFF]">Balance</h3>
          </div>
          <Image
            src={"/assets/icons/balance-graph.svg"}
            alt={"Balance-graph"}
            width={40}
            height={40}
          />
        </div>
        <div>
          <h1 className="font-semibold text-lg text-[#FFFFFF]">$40,000.063</h1>
          <div className="flex items-center space-x-1">
            <Image
              src={"/assets/icons/balance.svg"}
              alt={"balance"}
              width={16}
              height={16}
            />
            <p className="text-[#53D258] font-semibold text-sm">+35,74%</p>
          </div>
        </div>
      </div>
      <div className="rounded-md flex flex-col justify-between bg-[#FFFFFF] h-44 min-w-[320px] p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-[#D0DBFF] w-8 h-8 flex items-center justify-center rounded-full">
              <Image
                src={"/assets/icons/deposites.svg"}
                alt={"deposites"}
                width={16}
                height={16}
              />
            </div>
            <h3 className="font-semibold text-sm text-[#000000]">Deposits</h3>
          </div>
          <Image
            src={"/assets/icons/deposite-graph.svg"}
            alt={"deposite-graph"}
            width={40}
            height={40}
          />
        </div>
        <div>
          <h1 className="font-semibold text-lg text-[#000000]">-$103,000</h1>
          <div className="flex items-center space-x-1">
            <Image
              src={"/assets/icons/deposite.svg"}
              alt={"deposite"}
              width={16}
              height={16}
            />
            <p className="text-[#E25C5C] font-semibold text-sm">+10,74%</p>
          </div>
        </div>
      </div>
      <div className="rounded-md flex flex-col justify-between bg-[#FFFFFF] h-44 min-w-[320px] p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-[#D0DBFF] w-8 h-8 flex items-center justify-center rounded-full">
              <Image
                src={"/assets/icons/withdraw.svg"}
                alt={"withdraw"}
                width={16}
                height={16}
              />
            </div>
            <h3 className="font-semibold text-sm text-[#000000]">Withdraws</h3>
          </div>
          <Image
            src={"/assets/icons/balance-graph.svg"}
            alt={"balance-graph"}
            width={40}
            height={40}
          />
        </div>
        <div>
          <h1 className="font-semibold text-lg text-[#000000]">-$103,000</h1>
          <div className="flex items-center space-x-1">
            <Image
              src={"/assets/icons/balance.svg"}
              alt={"balance"}
              width={16}
              height={16}
            />
            <p className="text-[#53D258] font-semibold text-sm">+10,74%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Stats = () => {
  return <div>Stats</div>;
};

const Trending = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-md p-4 space-y-6">
      <div className="flex font-semibold text-base items-center justify-between">
        <h1>Trending Market</h1>
        <h1 className="text-[#0075FF]">View more markets</h1>
      </div>

      <div className="space-y-4">
        <div className="flex items-center text-[#A9A9A9] font-normal border-b border-[#E3E3E3] py-1">
          <h1 className="flex-1 text-left">Token</h1>
          <h1 className="flex-1">Symbol</h1>
          <h1 className="flex-1">Last Price</h1>
          <h1 className="flex-1">24H Change</h1>
          <h1 className="flex-1 text-right">Market Cap</h1>
        </div>
        <div className="space-y-3">
          <div className="flex items-center ">
            <div className="flex-1  flex items-center space-x-2">
              <Image
                src={"/assets/icons/bnb.svg"}
                alt="bnb"
                width={24}
                height={24}
              />
              <h2 className="font-semibold">BNB</h2>
            </div>
            <div className="flex-1">
              <h3>BNB</h3>
            </div>
            <div className="flex-1">
              <h3>$41.263,00</h3>
            </div>
            <div className="flex-1 flex items-center space-x-1">
              <Image
                src={"/assets/icons/balance.svg"}
                alt="balance"
                width={15}
                height={15}
              />
              <h3 className="text-[#53D258] font-medium">+35,74%</h3>
            </div>
            <div className="flex-1 text-right">$784,393M</div>
          </div>
          <div className="flex items-center ">
            <div className="flex-1 flex items-center space-x-2">
              <Image
                src={"/assets/icons/bitcoin.svg"}
                alt="bitcoin"
                width={24}
                height={24}
              />
              <h2 className="font-semibold">Bitcoin</h2>
            </div>
            <div className="flex-1">
              <h3>BTC</h3>
            </div>
            <div className="flex-1">
              <h3>$41.263,00</h3>
            </div>
            <div className="flex-1 flex items-center space-x-1">
              <Image
                src={"/assets/icons/balance.svg"}
                alt="balance"
                width={15}
                height={15}
              />
              <h3 className="text-[#53D258] font-medium">+35,74%</h3>
            </div>
            <div className="flex-1 text-right">$784,393M</div>
          </div>

          <div className="flex items-center ">
            <div className="flex-1 flex items-center space-x-2">
              <Image
                src={"/assets/icons/ethereum.svg"}
                alt="ethereum"
                width={24}
                height={24}
              />
              <h2 className="font-semibold">Ethereum</h2>
            </div>
            <div className="flex-1">
              <h3>ETH</h3>
            </div>
            <div className="flex-1">
              <h3>$41.263,00</h3>
            </div>
            <div className="flex-1 flex items-center space-x-1">
              <Image
                src={"/assets/icons/balance.svg"}
                alt="balance"
                width={15}
                height={15}
              />
              <h3 className="text-[#53D258] font-medium">+35,74%</h3>
            </div>
            <div className="flex-1 text-right">$784,393M</div>
          </div>

          <div className="flex items-center ">
            <div className="flex-1 flex items-center space-x-2">
              <Image
                src={"/assets/icons/tera.svg"}
                alt="tera"
                width={24}
                height={24}
              />
              <h2 className="font-semibold">Terra</h2>
            </div>
            <div className="flex-1">
              <h3>LUNA</h3>
            </div>
            <div className="flex-1">
              <h3>$41.263,00</h3>
            </div>
            <div className="flex-1 flex items-center space-x-1">
              <Image
                src={"/assets/icons/balance.svg"}
                alt="balance"
                width={15}
                height={15}
              />
              <h3 className="text-[#53D258] font-medium">+35,74%</h3>
            </div>
            <div className="flex-1 text-right">$784,393M</div>
          </div>

          <div className="flex items-center ">
            <div className="flex-1 flex items-center space-x-2">
              <Image
                src={"/assets/icons/ada.svg"}
                alt="ada"
                width={24}
                height={24}
              />
              <h2 className="font-semibold">Cardano</h2>
            </div>
            <div className="flex-1">
              <h3>ADA</h3>
            </div>
            <div className="flex-1">
              <h3>$41.263,00</h3>
            </div>
            <div className="flex-1 flex items-center space-x-1">
              <Image
                src={"/assets/icons/balance.svg"}
                alt="balance"
                width={15}
                height={15}
              />
              <h3 className="text-[#53D258] font-medium">+35,74%</h3>
            </div>
            <div className="flex-1 text-right">$784,393M</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Trade = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-md p-4 space-y-2">
      <div className="flex items-center">
        <h1 className="font-semibold text-center text-base cursor-pointer flex-1 text-[#0075FF]">
          Buy
        </h1>
        <div className="bg-[#E3E3E3] h-10 w-px"></div>
        <h1 className="font-semibold text-center text-base cursor-pointer flex-1 text-[#A9A9A9]">
          Sell
        </h1>
      </div>
      <div>
        <p className="text-[#A9A9A9] text-center text-sm">Ethereum Price</p>
        <h3 className="text-center text-lg font-semibold">$3.110,31</h3>
      </div>

      <div className=" relative">
        <div className="border-2 border-[#CACACA] p-3 font-semibold rounded-md flex items-center justify-between text-sm">
          <input
            value={"0.1824"}
            onChange={() => {}}
            className="outline-none"
          />
          <div className="flex items-center space-x-1">
            <Image
              src={"/assets/icons/usdc.svg"}
              alt={"usdc"}
              width={24}
              height={24}
            />
            <h3 className="text-[#626262]">USDC</h3>
            <Image
              src={"/assets/icons/down.svg"}
              alt={"down"}
              width={8}
              height={4}
            />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 mt-0 -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] flex items-center justify-center w-8 h-8 rounded-full border border-[#CACACA]">
          <Image
            src={"/assets/icons/convert.svg"}
            alt={"convert"}
            width={16}
            height={16}
          />
        </div>
        <div className="border-2 mt-3 border-[#0075FF] p-3 font-semibold rounded-md flex items-center justify-between text-sm">
          <input
            value={"0.1824"}
            onChange={() => {}}
            className="outline-none"
          />
          <div className="flex items-center space-x-1">
            <Image
              src={"/assets/icons/eth.svg"}
              alt={"eth"}
              width={24}
              height={24}
            />
            <h3 className="text-[#626262]">ETH</h3>
            <Image
              src={"/assets/icons/down.svg"}
              alt={"down"}
              width={8}
              height={4}
            />
          </div>
        </div>
      </div>

      <div className="px-2 text-[#70758B] space-y-1">
        <div className="flex  items-center justify-between text-xs font-medium">
          <h3>Terms</h3>
          <h3>-</h3>
        </div>
        <div className="flex  items-center justify-between text-xs font-medium">
          <h3>Start Date</h3>
          <h3>-</h3>
        </div>
        <div className="flex  items-center justify-between text-xs font-medium">
          <h3>Finish Date</h3>
          <h3>-</h3>
        </div>
        <div className="flex  items-center justify-between text-xs font-medium">
          <h3>Min. Investment</h3>
          <h3>-</h3>
        </div>
      </div>

      <button className="text-[#FFFFFF] bg-[#0075FF] w-full rounded-md font-semibold text-base py-2">
        Trade Now
      </button>
    </div>
  );
};

const QuickTransfer = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-md p-4 space-y-2">
      <h1 className="font-semibold">Quick Transfer</h1>
      <div className="border-2 border-[#CACACA] p-3 font-semibold rounded-md flex items-center justify-between text-sm">
        <input value={"0.1824"} onChange={() => {}} className="outline-none" />
        <div className="flex items-center space-x-1">
          <Image
            src={"/assets/icons/usdc.svg"}
            alt={"usdc"}
            width={24}
            height={24}
          />
          <h3 className="text-[#626262]">USDC</h3>
          <Image
            src={"/assets/icons/down.svg"}
            alt={"down"}
            width={8}
            height={4}
          />
        </div>
      </div>
      <h3 className="text-[#A9A9A9]">Amount</h3>
      <div>
        <input
          className="border-2 border-[#CACACA] outline-none p-3 font-semibold text-sm rounded-md w-full"
          value={"$100.0"}
          onChange={() => {}}
        />
      </div>
    </div>
  );
};

const RecentTransactions = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-md p-4 space-y-2">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold">Recent Transactions</h1>
        <h3 className="text-[#0075FF] font-medium text-sm">See all</h3>
      </div>
      <div className="space-y-4">
        <div className="space-y-3">
          <h2 className="font-semibold text-sm text-[#707588]">Sep 25, 2020</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="border rounded-full border-[#E1E1E1] p-2 w-8 h-8 flex items-center justify-center">
                  <Image
                    src={"/assets/icons/receive.svg"}
                    alt={"receive"}
                    width={16}
                    height={12}
                  />
                </div>
                <div className="text-[#444444]">
                  <h4 className="text-base  font-semibold">Received</h4>
                  <p className="text-xs">From: t1ZxLWL...vMPHwxs</p>
                </div>
              </div>
              <h3 className="text-[#008800] font-semibold text-sm">
                +0.409 BTC
              </h3>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="border rounded-full border-[#E1E1E1] p-2 w-8 h-8 flex items-center justify-center">
                  <Image
                    src={"/assets/icons/send.svg"}
                    alt={"send"}
                    width={16}
                    height={12}
                  />
                </div>
                <div className="text-[#444444]">
                  <h4 className="text-base font-semibold">Transfer out</h4>
                  <p className="text-xs">To: t1ZxLWL...vMPHwxs</p>
                </div>
              </div>
              <h3 className="text-[#FF6B69] font-semibold text-sm">
                +0.409 BTC
              </h3>
            </div>
          </div>
          <div className="w-full h-px bg-[#F2F2F6]"></div>
        </div>
        <div className="space-y-3">
          <h2 className="font-semibold text-sm text-[#707588]">Sep 24, 2020</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="border rounded-full border-[#E1E1E1] p-2 w-8 h-8 flex items-center justify-center">
                  <Image
                    src={"/assets/icons/receive.svg"}
                    alt={"receive"}
                    width={16}
                    height={12}
                  />
                </div>
                <div className="text-[#444444]">
                  <h4 className="text-base  font-semibold">Received</h4>
                  <p className="text-xs">From: t1ZxLWL...vMPHwxs</p>
                </div>
              </div>
              <h3 className="text-[#008800] font-semibold text-sm">
                +0.409 BTC
              </h3>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="border rounded-full border-[#E1E1E1] p-2 w-8 h-8 flex items-center justify-center">
                  <Image
                    src={"/assets/icons/send.svg"}
                    alt={"send"}
                    width={16}
                    height={12}
                  />
                </div>
                <div className="text-[#444444]">
                  <h4 className="text-base font-semibold">Transfer out</h4>
                  <p className="text-xs">To: t1ZxLWL...vMPHwxs</p>
                </div>
              </div>
              <h3 className="text-[#FF6B69] font-semibold text-sm">
                +0.409 BTC
              </h3>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="border rounded-full border-[#E1E1E1] p-2 w-8 h-8 flex items-center justify-center">
                  <Image
                    src={"/assets/icons/receive.svg"}
                    alt={"receive"}
                    width={16}
                    height={12}
                  />
                </div>
                <div className="text-[#444444]">
                  <h4 className="text-base  font-semibold">Received</h4>
                  <p className="text-xs">From: t1ZxLWL...vMPHwxs</p>
                </div>
              </div>
              <h3 className="text-[#008800] font-semibold text-sm">
                +0.409 BTC
              </h3>
            </div>
          </div>
          <div className="w-full h-px bg-[#F2F2F6]"></div>
        </div>
      </div>
    </div>
  );
};
