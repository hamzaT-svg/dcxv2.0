import { PrivateLayout } from "../components";

const Signup = () => {
  return (
    <PrivateLayout>
      <div className="space-y-2 w-full">
        <h1 className="text-center font-semibold text-xl text-[#1162FF]">
          Sign Up
        </h1>
        <form className="w-full space-y-3">
          <div className="space-y-1">
            <label>First Name</label>
            <input
              className="rounded-md px-2 py-2 outline-none w-full bg-[#f5f5f5]"
              placeholder="Enter your First Name"
              type="text"
            />
          </div>
          <div className="space-y-1">
            <label>Last Name</label>
            <input
              className="rounded-md px-2 py-2 outline-none w-full bg-[#f5f5f5]"
              placeholder="Enter your Last Name"
              type="text"
            />
          </div>
          <div className="space-y-1">
            <label>Email</label>
            <input
              className="rounded-md px-2 py-2 outline-none w-full bg-[#f5f5f5]"
              placeholder="Enter your Email"
              type="email"
            />
          </div>
          <div className="space-y-1">
            <label>Password</label>
            <input
              className="rounded-md px-2 py-2 outline-none w-full bg-[#f5f5f5]"
              placeholder="Enter your Email"
              type="password"
            />
          </div>
          <button className="bg-[#1162FF] w-full text-[#ffffff] rounded-md py-2">
            Sign Up
          </button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <span className="text-[#1162FF] underline cursor-pointer ">
            Log in
          </span>
        </p>
      </div>
    </PrivateLayout>
  );
};

export default Signup;
