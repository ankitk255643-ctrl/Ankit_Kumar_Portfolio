import FadeIn from './FadeIn';
import ContactButton from './ContactButton';
import AnimatedText from './AnimatedText';

const ABOUT_TEXT =
  "My name is Ankit Kumar. I am a student at Lovely Professional University, Phagwara, currently pursuing B.Tech in Big Data Analytics with Artificial Intelligence. I have a strong interest in Artificial Intelligence, Data Analytics, Full Stack Development, and modern web technologies. I enjoy working with data, understanding patterns, and turning information into useful insights that can help businesses make better decisions. I have experience with tools and technologies like Python Programming, Java Programming, Full Stack Development, Google BigQuery, Google Analytics, Looker Studio, and Google AI tools. I also work on website and mini-application development, along with video editing for creative and academic projects. Apart from academics, I actively participate in coding competitions, innovation clubs, sports events, management activities, and creative projects. I have also designed websites and mini-applications as part of my personal learning and project work. I have completed certifications in Java Programming, Python Programming, and Generative AI Masterminds, which helped me improve my technical knowledge and practical skills. My goal is to build a successful career where I can use Artificial Intelligence, Data Analytics, and Technology to solve real-world problems, create smart digital solutions, and help businesses grow through data-driven decision-making. I believe in continuous learning, self-improvement, and building projects that create real impact.";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-5 sm:px-8 md:px-10 py-20"
    >
      {/* Corner decorative 3D images */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
          className="pointer-events-none absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[60px] sm:w-[160px] md:w-[210px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt=""
          className="w-full h-auto"
          loading="lazy"
          draggable={false}
        />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
          className="pointer-events-none absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[55px] sm:w-[140px] md:w-[180px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt=""
          className="w-full h-auto"
          loading="lazy"
          draggable={false}
        />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
          className="pointer-events-none absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[60px] sm:w-[160px] md:w-[210px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt=""
          className="w-full h-auto"
          loading="lazy"
          draggable={false}
        />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
          className="pointer-events-none absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[65px] sm:w-[170px] md:w-[220px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt=""
          className="w-full h-auto"
          loading="lazy"
          draggable={false}
        />
      </FadeIn>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16 text-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

          <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-20">
                    <AnimatedText
                      text={ABOUT_TEXT}
                      className="font-medium leading-relaxed text-[#D7E2EA] max-w-[560px]"
                      style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
                    />

                    {/* Skills */}
                    <FadeIn delay={0.15} className="w-full max-w-3xl">
                      <div className="flex flex-col gap-5 sm:gap-6">
                        {[
                          {
                            label: 'Languages',
                            items: ['Python', 'JavaScript', 'HTML', 'CSS', 'SQL'],
                          },
                          {
                            label: 'Frameworks & Libraries',
                            items: ['React', 'Tailwind', 'Pandas', 'NumPy', 'Scikit-learn', 'NLTK'],
                          },
                          {
                            label: 'Tools & Platforms',
                            items: ['Figma', 'Vercel', 'Git', 'GitHub', 'Power BI', 'Canva', 'Excel'],
                          },
                          {
                            label: 'AI & GenAI',
                            items: ['Gemini', 'Claude', 'OpenAI', 'Prompt engineering'],
                          },
                        ].map((group) => (
                          <div
                            key={group.label}
                            className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-5"
                          >
                            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 sm:w-44 sm:shrink-0 sm:text-right">
                              {group.label}
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {group.items.map((item) => (
                                <span
                                  key={item}
                                  className="rounded-full border border-[#D7E2EA]/15 bg-[#D7E2EA]/[0.03] px-3 py-1 text-sm text-[#D7E2EA]/80 hover:border-[#D7E2EA]/40 hover:text-[#D7E2EA] transition-colors"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </FadeIn>

                    <FadeIn delay={0.25}>
                      <ContactButton />
                    </FadeIn>
                  </div>      </div>
    </section>
  );
};

export default AboutSection;
