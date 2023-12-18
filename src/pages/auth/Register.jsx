/* eslint-disable no-unused-vars */
import { buttons, layout } from "../../../style";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "lucide-react";
import { registerUserAction } from "../../redux/actions/authAction";
import FormInputError from "../../components/common/FormInputError";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signUpLoading } = useSelector((state) => state.authReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserRegisterData = async (data) => {
    const res = await dispatch(registerUserAction(data));
    if (res.payload.success && !signUpLoading) {
      navigate("/login");
    }
  };

  return (
    <section className="bg-gray-50  dark:bg-gray-900">
      <div className={`${layout.smallComponentContainer}`}>
        <a
          href="#"
          className={`mb-5 flex items-center text-2xl font-semibold text-gray-900 dark:text-white`}
        >
          Eticket
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="headingTwo">Create account</h1>
            <form
              className="space-y-4 "
            
              onSubmit={handleSubmit(handleUserRegisterData)}
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
              <div>
                <label htmlFor="password" className="labelStyling">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  {...register("confirmPassword", {
                    required: {
                      value: true,
                      message: "Field is required",
                    },
                  })}
                  placeholder="••••••••"
                  className="inputStyling"
                  required=""
                />
                {errors?.confirmPassword && (
                  <FormInputError message={errors?.confirmPassword?.message} />
                )}
              </div>

              <div>
                {signUpLoading ? (
                  <div
                    className={`${buttons.fullButton} flex justify-center items-center`}
                  >
                    <Loader className="w-5 h-5 animate-spin" />
                  </div>
                ) : (
                  <button className={`${buttons.fullButton}`}>Register </button>
                )}
              </div>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Have an account?{" "}
                <a
                  href="/login"
                  className="font-medium text-secondary-100 hover:underline dark:text-primary-500"
                >
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
