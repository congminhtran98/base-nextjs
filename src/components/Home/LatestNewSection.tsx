import React from "react";

const LatestNewsSection = () => {
  return (
    <div className="relative z-[18] overflow-hidden py-20 -mt-10 bg-black/70 text-gray-800">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        id="news-background-video"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/images/layer1.mp4" type="video/mp4" />
        <img src="/images/layer1.jpg" alt="Background fallback" className="w-full h-full object-cover" />
      </video>
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      <div className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold mb-12 text-[#39c8e2] relative inline-block text-shadow-md">
          LATEST NEWS
          <span className="block w-20 h-[3px] bg-[#39c8e2] mt-2"></span>
        </h3>

        <div className="flex flex-col md:flex-row gap-8">
          {/* LinkedIn iframe */}
          <div className="w-full md:w-1/2">
            <div className="bg-white p-2 rounded shadow-md h-full mb-5">
              <iframe
                src="https://widgets.sociablekit.com/linkedin-page-posts/iframe/25545009"
                frameBorder="0"
                width="100%"
                height="470"
                title="LinkedIn Feed"
                className="w-full"
              ></iframe>
            </div>
          </div>

          {/* News Items */}
          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { img: "/images/News1.jpg", title: "Industry Trends 2024", date: "March 15, 2024" },
              { img: "/images/News2.jpg", title: "Technology Innovations", date: "March 10, 2024" },
              { img: "/images/News3.jpg", title: "Market Analysis Report", date: "March 5, 2024" },
              { img: "/images/News4.jpg", title: "Product Updates", date: "March 1, 2024" },
            ].map((news, index) => (
              <div
                key={index}
                className="bg-white rounded-[4px] shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-[240px]"
              >
                <img src={news.img} alt={news.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold text-base mb-1 text-gray-800">{news.title}</h4>
                  <p className="text-xs text-gray-500">{news.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More button */}
        <div className="text-right mt-10">
          <a
            href="#"
            className="inline-block bg-[#ff0000] border border-[#ff0000] text-white text-sm font-semibold uppercase px-5 py-2.5 rounded-[4px] shadow-sm hover:bg-[#cc0000] hover:border-[#cc0000] transition-all tracking-wide"
          >
            LOAD MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsSection;
