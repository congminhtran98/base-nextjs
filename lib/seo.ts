import { DefaultSeoProps } from "next-seo";

export const defaultSEO: DefaultSeoProps = {
  title: "ITS News - Latest Updates on Intelligent Transportation Technology",
  description:
    "ITS News is the leading source for updates on Intelligent Transportation Systems (ITS), AI, IoT, autonomous vehicles, and more.",
  canonical: "https://its-news.com",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://its-news.com",
    site_name: "ITS News",
    images: [
      {
        url: "https://its-news.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ITS News - Technology News Site",
      },
    ],
  },
  twitter: {
    handle: "@ITSNews",
    site: "@ITSNews",
    cardType: "summary_large_image",
  },
};
