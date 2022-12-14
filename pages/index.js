import { PrivateLayout } from "../components";

export default function Signin() {
  return (
    <PrivateLayout>
      <div className="space-y-2 w-full">
        <h1 className="text-center font-semibold text-xl text-[#1162FF]">
          Sign In
        </h1>
        <form className="w-full space-y-3">
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
          <p className="text-sm opacity-50 cursor-pointer ">Forget Password?</p>
          <button className="bg-[#1162FF] w-full text-[#ffffff] rounded-md py-2">
            Sign In
          </button>
        </form>
        <p className="text-center">
          Dont have an account?{" "}
          <span className="text-[#1162FF] underline cursor-pointer ">
            Sign up
          </span>
        </p>
      </div>
    </PrivateLayout>
  );
}
