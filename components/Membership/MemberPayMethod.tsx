"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CreditCard, Lock } from "lucide-react";
import Image from "next/image";

const paymentMethods = [
  { name: "Mastercard", icon: "/images/mastercard.png" },
  { name: "Visa", icon: "/images/visa.png" },
  { name: "American Express", icon: "/images/amex.png" },
  { name: "Discover", icon: "/images/discover.png" },
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const years = Array.from(
  { length: 15 },
  (_, i) => new Date().getFullYear() + i
);

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "France",
  "Singapore",
];

export default function PaymentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedMethod, setSelectedMethod] = useState<
    null | (typeof paymentMethods)[0]
  >(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // ✅ Đóng dropdown khi bấm ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <section className="w-full flex justify-center py-10">
      <div className="w-[685px] bg-white p-6">
        {/* Phương thức thanh toán */}
        <div className="relative mb-6">
          {/* Chọn phương thức */}
          <div
            className="flex justify-between items-center cursor-pointer px-4 py-2 border border-dashed border-[#D5D5D5] rounded-lg"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            <span className="text-black font-medium">
              {selectedMethod ? selectedMethod.name : "Payment Method"}
            </span>

            {/* Nếu đã chọn phương thức thì hiện icon phương thức đã chọn */}
            {selectedMethod ? (
              <Image
                src={selectedMethod.icon}
                alt={selectedMethod.name}
                width={30}
                height={20}
                className="rounded-full"
              />
            ) : (
              // Nếu chưa chọn gì thì hiển thị tất cả các phương thức
              <div className="flex space-x-2">
                {paymentMethods.map((method) => (
                  <Image
                    key={method.name}
                    src={method.icon}
                    alt={method.name}
                    width={30}
                    height={20}
                    className="rounded-full shadow-sm"
                  />
                ))}
              </div>
            )}
          </div>
          {/* Dropdown */}
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.ul
                className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md mt-2 shadow-lg z-50"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {paymentMethods.map((method) => (
                  <li
                    key={method.name}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center space-x-2"
                    onClick={() => {
                      setSelectedMethod(method);
                      setDropdownOpen(false);
                    }}
                  >
                    <Image
                      src={method.icon}
                      alt={method.name}
                      width={30}
                      height={20}
                      className="rounded-full"
                    />
                    <span>{method.name}</span>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mx-auto">
          {/* Credit Card Details */}
          <div>
            <p className="text-[18px] font-semibold text-black">
              Credit Card Details
            </p>
            <div className="mt-4 space-y-4">
              <Field
                label="Name on card"
                name="cardName"
                placeholder="Full Name"
                register={register}
                errors={errors}
              />
              <Field
                label="Card number"
                name="cardNumber"
                placeholder="0000 0000 0000 0000"
                register={register}
                errors={errors}
              />

              {/* Card Expiration */}
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-[12px] font-medium text-black mb-1">
                    Card expiration
                  </label>
                  <select
                    {...register("expirationMonth")}
                    className="w-full border px-4 py-2 rounded-lg bg-white"
                  >
                    <option value="">Month</option>
                    {months.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="w-1/2">
                  <label className="block text-[12px] font-medium text-black mb-1 invisible">
                    Year
                  </label>
                  <select
                    {...register("expirationYear")}
                    className="w-full border px-4 py-2 rounded-lg bg-white"
                  >
                    <option value="">Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <Field
                label="Card Security Code"
                name="securityCode"
                placeholder="Code"
                register={register}
                errors={errors}
                icon={<Lock className="w-4 h-4 text-gray-500" />}
              />
            </div>
          </div>

          {/* Billing Address */}
          <div>
            <p className="text-[18px] font-semibold text-black">
              Billing address
            </p>
            <div className="mt-4 space-y-4">
              {/* Country Dropdown */}
              <div>
                <label className="block text-[12px] font-medium text-black mb-1">
                  Country
                </label>
                <select
                  {...register("country")}
                  className="w-full border px-3 py-2 rounded-lg bg-white"
                >
                  <option value="" className="!text-gray-600">
                    Select Country
                  </option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <Field
                label="Address"
                name="address"
                placeholder="Address"
                register={register}
                errors={errors}
              />

              <Field
                label="City"
                name="city"
                placeholder="City"
                register={register}
                errors={errors}
              />
              <Field
                label="State"
                name="state"
                placeholder="State"
                register={register}
                errors={errors}
              />

              <Field
                label="ZIP code"
                name="zipCode"
                placeholder="ZIP CODE"
                register={register}
                errors={errors}
              />
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <p className="text-[18px] font-semibold text-black">
              Contact information
            </p>
            <div className="mt-4 space-y-4">
              <Field
                label="Email"
                name="email"
                placeholder="Email"
                register={register}
                errors={errors}
              />
              <Field
                label="Phone"
                name="phone"
                placeholder="Phone"
                register={register}
                errors={errors}
              />
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full md:w-[280px] py-3 bg-[#6355D8] text-white font-semibold rounded-full hover:bg-[#4F3BB2] transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Pay
          </motion.button>
        </form>
      </div>
    </section>
  );
}

// Component nhập liệu
function Field({ label, name, placeholder, register, errors, icon }: any) {
  return (
    <div>
      {label && (
        <label className="block text-[12px] font-medium text-black mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          {...register(name, { required: `${label} is required` })}
          className="w-full px-4 py-3 text-[14px] text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6355D8] transition"
        />
        {icon && <div className="absolute right-3 top-3">{icon}</div>}
      </div>
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
}
