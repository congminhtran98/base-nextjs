"use client";

import { useForm } from "react-hook-form";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MembershipForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  // Ref để kiểm tra khi nào component vào tầm nhìn
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  return (
    <section ref={ref} className="w-full py-10">
      <div className="container mx-auto max-w-6xl bg-white p-6 rounded-lg shadow-lg">
        {/* Tiêu đề */}
        <motion.h2
          className="text-[32px] font-medium text-black mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Join us as Member
        </motion.h2>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-wrap gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/** Các input field + submit button đều có cùng chiều rộng */}
          {[
            { name: "email", label: "Email", type: "email", placeholder: "Email" },
            { name: "name", label: "Name", type: "text", placeholder: "Name" },
            { name: "organisation", label: "Organisation", type: "text", placeholder: "Organisation" },
            { name: "area", label: "Area in Transport", type: "text", placeholder: "Area in Transport" },
            { name: "designation", label: "Designation", type: "text", placeholder: "Designation" },
          ].map((field) => (
            <div key={field.name} className="w-full md:w-[calc(25%-18px)]">
              <label className="block text-black text-[14px] font-medium mb-1">
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                {...register(field.name, {
                  required: `${field.label} is required`,
                })}
                className="w-full px-4 py-3 text-[16px] text-[#B8B8B8] font-normal border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6355D8] transition"
              />
              {errors[field.name] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[field.name]?.message?.toString()}
                </p>
              )}
            </div>
          ))}

          {/* Nút Submit (có cùng chiều rộng với input fields) */}
          <div className="w-full md:w-[calc(25%-18px)] flex items-end">
            <motion.button
              type="submit"
              className="w-full h-[48px] bg-[#6355D8] text-white text-[16px] font-medium rounded-full hover:bg-[#4F3BB2] transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Continue
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
