import { PrivateLayout } from "../components";

const Forgetpassword = () => {
  return (
    <PrivateLayout>
      <div className="space-y-2 w-full">
        <h1 className="text-center font-semibold text-xl text-[#1162FF]">Forget Password</h1>
        <form className="w-full space-y-3">
          <div className="space-y-1">
            <label>Email</label>
            <input
              className="rounded-md px-2 py-2 outline-none w-full bg-[#f5f5f5]"
              placeholder="Enter your Email"
              type="email"
            />
          </div>
          <button className="bg-[#1162FF] w-full text-[#ffffff] rounded-md py-2">
            Submit
          </button>
        </form>

        <button className="border border-[#1162FF] w-full text-[#1162FF] rounded-md py-2">
          Cancel
        </button>
      </div>
    </PrivateLayout>
  );
};

export default Forgetpassword;
