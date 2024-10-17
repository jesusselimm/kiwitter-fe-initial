import AuthLayout from "./AuthLayout";
import { useForm } from "react-hook-form";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  function handleSignup(data) {
    console.log(data, "---");
    axios({
      method: "post",
      url: "https://kiwitter-node-77f5acb427c1.herokuapp.com/users/signup",
      data: data,
    })
      .then((response) => {
        const token = response.data.token;
        const decoded = jwtDecode(token);
        console.log(decoded, "aftersignup");
      })
      .catch((error) => console.log(error));
  }

  return (
    <AuthLayout>
      <h1 className="text-3xl text-center font-semibold tracking-tighter text-lime-700">
        Welcome!
      </h1>
      <form onSubmit={handleSubmit(handleSignup)}>
        <div className="pt-4">
          <div className="flex justify-between gap-2 items-baseline pb-1">
            <label htmlFor="nickname ">Name - Last Name</label>
            <span className="text-sm font-medium text-red-600">
              {errors.name && errors.name.message.toString()}
            </span>
          </div>
          <input
            type="text"
            className="w-full h-10 px-2 border rounded-md border-gray-300"
            {...register("name", { required: "You must fill this field" })}
          />
        </div>

        <div className="pt-4">
          <div className="flex justify-between gap-2 items-baseline pb-1">
            <label htmlFor="nickname ">Nickname</label>
            <span className="text-sm font-medium text-red-600">
              {errors.nickname && errors.nickname.message.toString()}
            </span>
          </div>
          <input
            type="text"
            className="w-full h-10 px-2 border rounded-md border-gray-300"
            {...register("nickname", { required: "You must fill this field" })}
          />
        </div>

        <div className="pt-4">
          <div className="flex justify-between gap-2 items-baseline pb-1">
            <label htmlFor="nickname">Email</label>
            <span className="text-sm font-medium text-red-600">
              {errors.email && errors.email.message.toString()}
            </span>
          </div>
          <input
            type="email"
            className="w-full h-10 px-2 border rounded-md border-gray-300"
            {...register("email", {
              required: "You must fill this field",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Enter a valid email address",
              },
            })}
          />
        </div>

        <div className="pt-4">
          <div className="flex justify-between gap-2 items-baseline pb-1">
            <label htmlFor="password">Password</label>
            <span className="text-sm font-medium text-red-600">
              {errors.password && errors.password.message.toString()}
            </span>
          </div>
          <input
            type="password"
            className="w-full h-10 px-2 border rounded-md border-gray-300"
            {...register("password", { required: "Bu alan zorunlu" })}
          />
        </div>
        <div className="pt-4">
          <button
            type="submit"
            className="h-12 text-center block w-full rounded-lg bg-lime-700 text-white font-bold "
          >
            Sign Up
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}
