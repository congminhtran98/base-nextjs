import React from "react";

interface CallToActionProps {
  title: string;
  description: string;
  type?: "button" | "form";
  buttonText?: string;
  formPlaceholder?: string;
  backgroundImage?: string;
}

const CallToActionSection: React.FC<CallToActionProps> = ({
  title,
  description,
  type = "button",
  buttonText = "Become a Member",
  formPlaceholder = "Enter your email address",
  backgroundImage = "/images/slide1.jpg",
}) => {
  return (
    <div
      className="text-center text-white py-20 bg-cover bg-center clip-bottom"
      style={{
        backgroundImage: `linear-gradient(rgba(9,6,47,0.9), rgba(9,6,47,0.9)), url(${backgroundImage})`,
      }}
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-[36px] font-bold mb-5 uppercase">{title}</h2>
        <p className="text-[18px] leading-relaxed mb-8 text-[#dddddd]">{description}</p>

        {type === "button" ? (
          <a
            href="/membership"
            className="inline-block !bg-[#ff0000] text-[#09062f] px-8 py-3 text-sm font-semibold rounded-md uppercase tracking-wider transition-all hover:shadow-lg"
          >
            <i className="fa fa-user-plus mr-2 text-white" /> 
            <span className="!text-white">{buttonText}</span>
          </a>
        ) : (
          <form className="relative max-w-xl mx-auto">
            <input
              type="email"
              className="w-full h-[50px] px-4 pr-[150px] rounded-md text-black"
              placeholder={formPlaceholder}
            />
            <button
              type="submit"
              className="absolute right-[5px] top-[5px] bg-red-600 text-white px-6 py-2 rounded-md font-medium uppercase tracking-wider transition-all"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CallToActionSection;