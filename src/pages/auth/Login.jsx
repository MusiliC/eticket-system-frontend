/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { buttons, layout } from "../../../style";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "lucide-react";
import FormInputError from "../../components/common/FormInputError";
import { useNavigate, useSearchParams } from "react-router-dom";
import { loginUserAction } from "../../redux/actions/authAction";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [searchParams] = useSearchParams();

  const { signInLoading, user, token, userId } = useSelector(
    (state) => state.authReducer
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserLoginData = async (data) => {
    const res = await dispatch(loginUserAction(data));
    if (!res?.payload?.success) {
      console.log(res?.payload?.error + "");
      return;
    }
  };

  useEffect(() => {
    const redirect = searchParams.get("redirect");

    if (userId) {
      if (user === "admin@gmail.com") {
        navigate(redirect || "/admin", { replace: true });
      } else {
        navigate(redirect || "/eticket", { replace: true });
      }
    }
  }, [user, userId, signInLoading, token]);

  return (
    <>
      <section className="bg-gray-50  dark:bg-gray-900">
        <div className={`${layout.smallComponentContainer}`}>
          <a
            href="#"
            className={`flex items-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white`}
          >
            Eticket
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="headingTwo">Sign in to your account</h1>
              <form
                className="space-y-4"
                onSubmit={handleSubmit(handleUserLoginData)}
              >
                <div>
                  <label htmlFor="email" className="labelStyling">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="username"
                    id="username"
                    {...register("username", {
                      required: {
                        value: true,
                        message: "Field is required",
                      },
                    })}
                    className="inputStyling"
                    placeholder="name@company.com"
                    required=""
                  />
                  {errors?.username && (
                    <FormInputError message={errors?.username?.message} />
                  )}
                </div>
                <div>
                  <label htmlFor="password" className="labelStyling">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Field is required",
                      },
                    })}
                    className="inputStyling"
                    required=""
                  />
                  {errors?.password && (
                    <FormInputError message={errors?.password?.message} />
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-secondary-100 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <div>
                  {signInLoading ? (
                    <div
                      className={`${buttons.fullButton} flex justify-center items-center`}
                    >
                      <Loader className="w-5 h-5 animate-spin" />
                    </div>
                  ) : (
                    <button type="submit" className={`${buttons.fullButton}`}>
                      Sign in
                    </button>
                  )}
                </div>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="/signup"
                    className="font-medium text-secondary-100 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
