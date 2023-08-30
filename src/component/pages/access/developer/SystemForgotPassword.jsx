import React from "react";
import Logo from "../../../svg/logo";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SpinnerButton from "../../../partials/spinners/SpinnerButton";
import { Link } from "react-router-dom";
import ModalValidate from "../../../partials/modals/ModalValidate";
import { MdMarkEmailRead } from "react-icons/md";

const SystemForgotPassword = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      //   setIsValid(true);
      setIsSuccess(true);
    }, 2500);
    // setInterval(() => {}, 2500);
  };

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="login w-full max-w-[380px] border border-gray-200 py-8 px-4 rounded-md shadow-sm">
          {/* <div className="flex flex-col items-center mb-4"> */}
          <div className="flex flex-col mb-4">
            <div className="flex justify-center">
              <Logo className="mx-auto " />
            </div>

            {isSuccess ? (
              <>
                <MdMarkEmailRead className="text-5xl fill-primary mx-auto mt-10 mb-2" />
                <h2 className="mb-4 mt-2 text-lg text-center">
                  Instruction Sent!
                </h2>
                <p className="text-sm mb-6">
                  We have successfully sent an instruction to reset your
                  password. If you haven't received any email, please also check
                  your spam/junk folder.
                </p>
                <Link
                  className="text-primary text-xs block text-center mt-6"
                  to={`/system/login`}
                >
                  Back to Login
                </Link>
              </>
            ) : (
              <>
                <h2 className="mb-0 mt-10 text-lg text-center">
                  Recover Password
                </h2>
                <p className="my-4 text-sm">
                  Enter the email address associated with your account
                </p>

                <form action="">
                  <div className="form__wrap">
                    <label htmlFor="">Email</label>
                    <input type="email" disabled={isLoading ? true : false} />
                    <span className="error-show">*required</span>
                  </div>

                  <button
                    className="btn btn--primary w-full"
                    onClick={handleSubmit}
                    type="button"
                    disabled={isLoading ? true : false}
                  >
                    Sent Instruction {isLoading ? <SpinnerButton /> : ""}
                  </button>

                  <Link
                    to="/system/login"
                    className="text-primary block mt-6 text-center text-xs"
                  >
                    Back to Login
                  </Link>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SystemForgotPassword;
