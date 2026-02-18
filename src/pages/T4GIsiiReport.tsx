import Layout from "@/components/Layout";

const bannerImages = {
  desktop1920: "https://isii-v2.s3.ap-south-1.amazonaws.com/images/1920.png",
  desktop1440: "https://isii-v2.s3.ap-south-1.amazonaws.com/images/1440.png",
  tablet: "https://isii-v2.s3.ap-south-1.amazonaws.com/images/Tab.png",
  mobile: "https://isii-v2.s3.ap-south-1.amazonaws.com/images/Mobile.png",
};

const reportCardImage = "https://isii-v2.s3.ap-south-1.amazonaws.com/images/1_1.png";

const reportUrl = "https://isii-v2.s3.ap-south-1.amazonaws.com/pdfs/1771319324181-ce4dd24c-711e-4289-9ce4-4a28cbf52ca5.pdf";

const introText =
  "An era defining technological transition driven by six advanced technologies could generate a US$350 trillion shift in global wealth by 2050, transforming politics, economics and societies. But today’s artificial intelligence models are unlikely to underpin that future, with energy and resource demands triggering potential market corrections of c.US$13 trillion. the world is already undergoing a systemic shift comparable to the Industrial Revolution, a period marked by intensifying strategic rivalry. The U.S. has moved from collaboration to a competition, reshaping alliances and accelerating geopolitical fragmentation.";

const chapters = [
  {
    title: "Executive summary",
    description:
      "The world is in an epochal technological shift that is reshaping civilisation - one that opens extraordinary possibilities while introducing profound risks. Moving beyond innovation metrics, market performance, and geopolitical rivalry, requires asking a deeper question: how advanced technologies are redefining human agency, national sovereignty, and global order.",
    image: "https://isii-v2.s3.ap-south-1.amazonaws.com/images/Frame+1.png",
  },
  {
    title: "Disruption in the Civilisational Transition",
    description:
      "The world’s rising levels geopolitical conflict, economic fragmentation, technological rivalry, inequality, and climate stress are becoming increasingly interlinked, with failures in one domain propagating rapidly across others. This self-reinforcing dynamic has given rise to a metacrisis, a systemic breakdown in the mechanisms intended to manage volatility, enforce rules, and stabilise outcomes.",
    image: "https://isii-v2.s3.ap-south-1.amazonaws.com/images/Frame+2.png",
  },
  {
    title: "Core Technologies Shaping the Future",
    description:
      "Civilisational transitions are ultimately determined not by shocks or politics, but by the technologies that reshape how societies produce value, coordinate activity, and exercise power. In the transition from the Industrial Age to the Information Age, technology is not merely accelerating change, it is redefining the architecture of economic organisation and strategic advantage itself.",
    image: "https://isii-v2.s3.ap-south-1.amazonaws.com/images/Frame+3.png",
  },
  {
    title: "Tech Competition of Nations",
    description:
      "As technology becomes the organising substrate of the Information Age, the critical question is no longer who innovates first, but who can build enduring technological capacity: converting research into scalable companies, deploying infrastructure, controlling supply chains, and shaping standards that lock in advantage. This recasts technology from a growth driver into a source of sovereignty.",
    image: "https://isii-v2.s3.ap-south-1.amazonaws.com/images/Frame+4.png",
  },
  {
    title: "Private Sector Tech and Markets",
    description:
      "National tech power is increasingly determined by control over the digital technology stack and the firms that dominate its critical layers. Today’s AI-driven expansion has concentrated capital, valuation, and strategic influence in a small group of global technology leaders, particularly those controlling platforms, advanced compute, and hyperscale infrastructure.",
    image: "https://isii-v2.s3.ap-south-1.amazonaws.com/images/Frame+5.png",
  },
  {
    title: "Completing the Transition",
    description:
      "The transition to the Information Age has a discernible end-state: one defined by clean energy abundance, automated production, intelligence embedded across economic and social systems, and the decoupling of prosperity from material scarcity. Yet reaching that end-state is neither linear nor benign.",
    image: "https://isii-v2.s3.ap-south-1.amazonaws.com/images/Frame+6.png",
  },
  {
    title: "Conclusion: Birth of a New Age of Systems",
    description:
      "Humanity is entering one of the most consequential periods in its history, not because progress has failed, but because it is accelerating faster than the systems designed to govern it. The central question is not whether civilisation will change, but who will shape what comes next.",
    image: "https://isii-v2.s3.ap-south-1.amazonaws.com/images/Frame+7.png",
  },
];

const T4GIsiiReport = () => {
  return (
    <Layout>
      <section className="relative min-h-[380px] md:min-h-[520px] bg-slate-950 overflow-hidden">
        <picture className="absolute inset-0 block h-full w-full">
          <source media="(min-width: 1440px)" srcSet={bannerImages.desktop1920} />
          <source media="(min-width: 1200px)" srcSet={bannerImages.desktop1440} />
          <source media="(min-width: 768px)" srcSet={bannerImages.tablet} />
          <img
            src={bannerImages.mobile}
            alt="T4G ISII Report"
            className="h-full w-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent" />
        <div className="container-custom section-padding absolute inset-0 z-10">
          <div className="absolute bottom-8 left-0 right-0 px-4 md:px-8">
            <div className="max-w-3xl text-left">
              <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/75">
                2026 Report
              </p>
              <h1 className="mt-2 text-2xl md:text-4xl font-serif font-semibold text-white">
                Technologies Shaping the Future
              </h1>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-white/90">
                {introText}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-custom section-padding py-12 md:py-16">
          <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="pointer-events-none absolute inset-y-0 right-[320px] hidden w-px bg-slate-200 lg:block" />
            <div className="space-y-12">
              {chapters.map((chapter) => (
                <div
                  key={chapter.title}
                  className="grid gap-8 md:grid-cols-[220px_1fr] border-b border-slate-200 pb-10"
                >
                  <div>
                    <div className="h-36 md:h-40 w-full overflow-hidden bg-slate-100">
                      <img
                        src={chapter.image}
                        alt={chapter.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="mt-5 text-base md:text-lg font-serif text-slate-900 text-center">
                      {chapter.title}
                    </h3>
                  </div>
                  <div>
                    <p className="text-sm md:text-base leading-relaxed text-slate-800">
                      {chapter.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <aside className="lg:sticky lg:top-28 h-fit pl-6">
              <div className="bg-white">
                <h4 className="text-lg font-serif font-semibold text-slate-900">
                  2026 Report: Technologies Shaping the Future
                </h4>
                <div className="mt-4 aspect-square w-full overflow-hidden bg-slate-100">
                  <img
                    src={reportCardImage}
                    alt="2026 Report cover"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <a
                  href={reportUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-slate-800 hover:text-slate-950"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3v12" />
                    <path d="m7 10 5 5 5-5" />
                    <path d="M4 20h16" />
                  </svg>
                  Download report
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default T4GIsiiReport;
