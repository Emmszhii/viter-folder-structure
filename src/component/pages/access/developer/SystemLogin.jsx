import React from "react";
import Logo from "../../../svg/logo";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SpinnerButton from "../../../partials/spinners/SpinnerButton";
import { Link } from "react-router-dom";
import ModalValidate from "../../../partials/modals/ModalValidate";

const SystemLogin = () => {
  const [isPasswordShow, setIsPasswordShow] = React.useState(false);
  const [isValid, setIsValid] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsValid(true);
    }, 2500);
    setInterval(() => {}, 2500);
  };

  const handlerShowPassword = () => setIsPasswordShow(!isPasswordShow);

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="login w-full max-w-[380px] border border-gray-200 py-8 px-4 rounded-md shadow-sm">
          {/* <div className="flex flex-col items-center mb-4"> */}
          <div className="flex flex-col mb-4">
            <div className="flex justify-center">
              <Logo className="mx-auto " />
            </div>
            <h2 className="mb-0 mt-10 text-lg text-center">System Login</h2>

            <form action="">
              <div className="form__wrap">
                <label htmlFor="">Email</label>
                <input type="email" disabled={isLoading ? true : false} />
                <span className="error-show">*required</span>
              </div>
              <div className="form__wrap">
                <label htmlFor="">Password</label>
                <input
                  type={isPasswordShow ? "password" : "text"}
                  disabled={isLoading ? true : false}
                />
                <span className="error-show">*required</span>
                <button
                  type="button"
                  className="absolute top-9 right-3"
                  onClick={handlerShowPassword}
                >
                  {isPasswordShow ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <button
                className="btn btn--primary w-full"
                onClick={handleSubmit}
                type="button"
                disabled={isLoading ? true : false}
              >
                Login {isLoading ? <SpinnerButton /> : ""}
              </button>

              <Link
                to="/system/forgot-password"
                className="text-primary block mt-6 text-center text-xs"
              >
                Forgot Password
              </Link>
            </form>
          </div>
        </div>
      </div>
      {isValid && <ModalValidate setIsValid={setIsValid} />}
    </>
  );
};

export default SystemLogin;
