"use client";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

type LoginFormData = {
  username: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log("Dữ liệu form:", data);
  };

  return (
    <div className="m-20 max-w-sm mx-auto px-4">
      <div className="flex flex-col items-center mb-2">
        <Image
          src="/images/logoCompany.png"
          width={257}
          height={70}
          alt="ITS Singapore Logo"
        />
        <h2 className="mt-1 text-2xl font-normal text-black">Member Login</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <div>
          <label htmlFor="username" className="text-sm text-black">
            User Name
          </label>
          <input
            id="username"
            type="text"
            placeholder="User Name"
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="User Name"
            {...register("username", { required: "User Name là bắt buộc" })}
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
        </div>

        <div>
          <label htmlFor="password" className="text-sm text-black">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Password"
            {...register("password", { required: "Password là bắt buộc" })}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Login
        </button>
      </form>
    </div>
  );
}