import Image from "next/image";

export type KeyActivity = {
  id: number;
  title: string;
  paragraphs: string[];
  image: string;
  link?: { text: string; href: string };
};

type Props = {
  activities: KeyActivity[];
};

export default function KeyActivitiesSection({ activities }: Props) {
  return (
    <section className="activities-intro bg-white py-20 mt-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
            Our Key Activities
            <span className="block w-20 h-[3px] bg-red-700 mt-2 mx-auto" />
          </h2>
        </div>

        <div className="grid gap-12">
          {activities.map((act, index) => {
            const content = (
              <div className="bg-gray-50 p-8 rounded-lg shadow h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 relative pb-2">
                    {act.id}. {act.title}
                    <span className="absolute bottom-0 left-0 w-16 h-[3px] bg-red-700" />
                  </h3>
                  {act.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-gray-700 leading-relaxed mb-4 last:mb-0"
                    >
                      {p}
                    </p>
                  ))}
                </div>
                {act.link && (
                  <a
                    href={act.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-700 text-white px-5 py-2 mt-6 rounded font-semibold hover:bg-red-800 transition w-fit"
                  >
                    <i className="fa fa-link mr-2" />
                    {act.link.text}
                  </a>
                )}
              </div>
            );

            const image = (
              <div className="rounded-lg overflow-hidden shadow h-full">
                <Image
                  src={act.image}
                  alt={act.title}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            );

            return (
              <div
                key={act.id}
                className="grid md:grid-cols-2 gap-8 items-stretch"
              >
                {index % 2 === 0 ? (
                  <>
                    {content}
                    {image}
                  </>
                ) : (
                  <>
                    {image}
                    {content}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
