import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import app from "../../../services/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import Input from "components/input";
import Button from "components/button";
import ErrorParagraph from "components/errorParagraph";

const LoginForm = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/dashboard");
      })
      .catch((error) => {
        toast.error("User not found, please try again.");
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email"
        name="email"
        register={register}
        required
        pattern={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g}
        placeholder="Enter your email"
        errors={errors}
      />
      {errors.email && errors.email.type === "required" && (
        <ErrorParagraph>This is field required</ErrorParagraph>
      )}
      {errors.email && errors.email.type === "pattern" && (
        <ErrorParagraph>Insert a valid email</ErrorParagraph>
      )}

      <Input
        label="Password"
        name="password"
        type="password"
        register={register}
        required
        pattern={/[0-9a-zA-Z]{6,}/}
        placeholder={"*************"}
      />
      {errors.password && errors.password.type === "required" && (
        <ErrorParagraph>This is field required</ErrorParagraph>
      )}
      {errors.password && errors.password.type === "pattern" && (
        <ErrorParagraph>Min 6 characters</ErrorParagraph>
      )}

      <div className="style_forgot_password w-full px-3 mb-5 text-right">
        <a
          className="text-primary font-semibold cursor-pointer"
          onClick={() => console.log("send email")}
        >
          Forgot password
        </a>
      </div>
      <div className=" flex items-center justify-center pb-2">
        <Button
          bg={"mainButtonBg"}
          width={"w-full"}
          radius={"rounded"}
          text={"Sign in"}
          type={"submit"}
        />
      </div>
    </form>
  );
};

export default LoginForm;
