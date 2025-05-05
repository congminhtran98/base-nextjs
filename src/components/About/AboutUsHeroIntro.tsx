interface AboutHeroIntroProps {
  heading: string;
  subheading: string;
  title: string;
  icon?: React.ReactNode;
  description: string;
  backgroundImage?: string;
  overlayImage?: string;
  overlayOpacity?: number;
  hideIntro?: boolean;
}

const AboutHeroIntro = ({
  heading,
  subheading,
  icon,
  title,
  description,
  backgroundImage = "/images/aboutus.jpg",
  overlayImage = "/images/slide1.jpg",
  overlayOpacity = 0.9,
  hideIntro = false,
}: AboutHeroIntroProps) => {
  return (
    <>
      {/* Hero Section */}
      <div
  className="bg-cover bg-center py-[150px] relative"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImage})`,
  }}
>
  <div className="container mx-auto text-center">
    <h1 className="text-white text-[32px] md:text-[48px] font-medium mb-5">
      {heading}
    </h1>
    <p className="text-white text-lg md:text-[18px]">{subheading}</p>
  </div>

  {/* Skew nếu hideIntro = true */}
  {hideIntro && (
    <div className="absolute bottom-[-50px] left-0 right-0 h-[100px] bg-white transform skew-y-[-2deg] z-20 shadow-md" />
  )}
</div>

      {/* Intro Section */}
      {!hideIntro && (
        <div
          className="relative py-[150px] bg-white bg-bottom bg-cover"
          style={{ backgroundImage: `url(${overlayImage})` }}
        >
          {/* Overlay */}
          {/* Overlay */}
          <div
            className="absolute inset-0 z-10"
            style={{
              backgroundColor: `rgba(255, 255, 255, ${overlayOpacity})`,
            }}
          ></div>

          {/* Skewed Top Edge */}
          <div className="absolute top-[-50px] left-0 right-0 h-[100px] bg-white transform -skew-y-2 z-20 shadow-md"></div>

          <div className="relative z-30 container mx-auto px-4 text-center">
            <div className="flex flex-col items-center">
              {icon && (
                <div className="text-[#39c8e2] text-[60px] mb-5">{icon}</div>
              )}
              <h2 className="text-[1.5em] font-medium text-[#777777] mb-6">
                {title}
              </h2>
              <p className="text-[#777777] md:text-[21px] font-light leading-relaxed font-sans max-w-4xl">
                {description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutHeroIntro;
