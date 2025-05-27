import PrimaryButton from "../components/Buttons/PrimaryButton";
import Project from "../components/Project";
import ServiceBlock from "../components/ServiceBlock";

import Projects from "../utils/projects.json";
import Services from "../utils/services.json";

const Home = () => {
  const marginClasses = ["me-auto", "mx-auto", "ms-auto", "mx-auto", "me-auto"];

  return (
    <div className="bg-[linear-gradient(to_top,var(--dark),var(--green-dark))] min-h-screen w-screen overflow-hidden">
      {/* Hero */}
      <section>
        <header className="w-screen mt-15 h-[43rem] overflow-hidden relative flex items-center justify-center p-15">
          <video
            autoPlay
            loop
            muted={true}
            playsInline={true}
            preload="auto"
            className="absolute top-0 left-0 w-screen h-full object-cover z-0"
          >
            <source src="/videos/bg-video.mp4" type="video/mp4" />
            <source src="/videos/bg-video.webm" type="video/webm" />
          </video>

          <div className="container w-screen md:w-full relative md:bg-[var(--dark-50)] z-10 flex flex-col items-center justify-center gap-4 h-full md:border-5 rounded-2xl border-[var(--green)] p-5">
            <h1 className="text-white text-center font-bold text-2xl sm:text-4xl lg:text-6xl w-fit">
              #UnlockYourBrand’s
              <span className="text-[var(--green)]">TrueStory.</span>
            </h1>
            <p className="text-gray-200 text-center text-md md:text-xl">
              Drone Shoots, Video Production, Graphic Design, Social Media
              Management, All Under One Roof.
            </p>

            <div className="w-full flex gap-2 mx-auto justify-center">
              <PrimaryButton
                className="px-4 md:px-10 md:py-2 hover:md:px-12"
                text="Portfolio"
              />
              <a
                href="https://www.instagram.com/unlockstory.in/"
                target="_blank"
              >
                <PrimaryButton
                  className="px-4 py-2 hover:md:px-12"
                  icon={<i class="fa-brands fa-instagram"></i>}
                />
              </a>
              <a href="http://" target="_blank">
                <PrimaryButton
                  className="px-4 py-2 hover:md:px-12"
                  icon={<i class="fa-brands fa-facebook"></i>}
                />
              </a>
            </div>

            {/* Particles */}
            <img
              src="/home/camera.png"
              alt="camera"
              srcset=""
              className="absolute opacity-0 md:opacity-100 w-50  bottom-10 -right-20 z-10 random-animation"
            />

            <img
              src="/home/drone.png"
              alt="drone"
              srcset=""
              className="absolute opacity-0 md:opacity-100 w-60 top-10 -left-20 z-10 random-animation"
            />
            <div class="w-20 opacity-0 md:opacity-100 h-20 bg-[linear-gradient(to_top,var(--green),var(--green-light))] rounded-full absolute top-0 right-10 md:top-10  md:-right-10 random-animation"></div>
            <div class="w-10 opacity-0 md:opacity-100 h-10 bg-[linear-gradient(to_top,var(--green),var(--green-light))] rounded-full absolute top-30 right-20 md:top-30  md:-right-15 random-animation"></div>
            <div class="w-14 opacity-0 md:opacity-100 h-14 bg-[linear-gradient(to_top,var(--green),var(--green-light))] rounded-full absolute top-20 right-0  md:top-35  md:right-3 random-animation"></div>
            <div class="w-7 opacity-0 md:opacity-100 h-7 bg-[linear-gradient(to_top,var(--green),var(--green-light))] rounded-full absolute bottom-10 left-0  md:bottom-23  md:left-0 random-animation"></div>
            <div class="w-17 opacity-0 md:opacity-100 h-17 bg-[linear-gradient(to_top,var(--green),var(--green-light))] rounded-full absolute bottom-20 left-20  md:bottom-30  md:-left-18 random-animation"></div>
            <div class="w-14 opacity-0 md:opacity-100 h-14 bg-[linear-gradient(to_top,var(--green),var(--green-light))] rounded-full absolute bottom-0 left-15  md:bottom-35  md:left-3 random-animation"></div>
          </div>
        </header>
      </section>
      {/* Marquee */}
      <section>
        <div className="marquee-container overflow-hidden whitespace-nowrap bg-[var(--green)] text-[var(--dark)] flex items-center text-xl md:text-2xl font-bold p-3 md:p-5 w-screen">
          <div className="marquee-content inline-block animate-marquee ">
            Empowering Dreams, One Story at a Time! | 20% OFF this week! | Over
            500 success stories! | Join our free webinar on May 30th! |
            Empowering Dreams, One Story at a Time! | 20% OFF this week! | Over
            500 success stories! | Join our free webinar on May 30th!
          </div>
        </div>
      </section>
      {/* About */}
      <section>
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 p-5 mt-10 relative">
          <div className="w-100 h-100  rounded-full border-10 border-[var(--green-50)] absolute md:-left-100 left-50 top-50 z-0"></div>
          <div className="w-100 h-100 rounded-full border-5 border-[var(--green-50)] absolute  md:-right-100 right-50 bottom-0 z-0"></div>
          <div className="w-full h-full flex flex-col md:flex-row gap-10 items-center justify-center">
            <img
              src="/logos/Unlock Story_White.png"
              alt="logo"
              className="w-35 md:w-50 object-contain"
              srcset=""
            />
            <div className="hidden h-30  border-1 border-[var(--green)]"></div>
            <p className="text-gray-200 text-md text-justify md:text-left">
              At Unlock Story, we transform your brand’s vision into compelling
              visual narratives through expert drone cinematography,
              professional video editing, and innovative creative design.{" "}
              <span className="text-gray-300">
                {" "}
                Whether you're a growing startup, an established business, or a
                content-driven influencer, we specialize in producing
                high-quality, story-driven visuals that captivate your audience
                and elevate your brand presence.
              </span>{" "}
              <span className="text-gray-400">
                {" "}
                From dynamic aerial shots to polished promotional videos, we
                don’t just create content—we craft experiences that make your
                brand truly unforgettable.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 z-10">
            {Services.slice(0, 4).map((service, index) => (
              <ServiceBlock
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Why Us */}
      <section>
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 p-5 mt-10 relative">
          <div className="w-100 h-100  rounded-full border-20 border-[var(--green-50)] absolute -right-30 bottom-50 z-0"></div>
          <div className="w-full h-10 gap-4 flex items-center justify-start">
            <div className="h-full w-[5rem] bg-[var(--green)]"></div>
            <h1 className="text-[var(--green)] font-bold text-2xl md:text-4xl">
              Our Latest Projects
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4 w-full z-10">
            {Projects.slice(0, 4).map((project, index) => (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                client={project.client}
              />
            ))}
          </div>
          <PrimaryButton
            text="View More"
            className="px-4 py-2 md:px-10 hover:px-12 z-10"
            icon={<i class="fa-solid fa-arrow-right"></i>}
          />
        </div>
      </section>
      {/* Clients */}
      <section>
        <div className="container mx-auto mt-5 opacity-30 grid grid-cols-4 md:grid-cols-8 gap-4  justify-items-center items-center p-5">
          <img
            className="w-25 object-contain"
            src="/clients/!flame.png"
            alt="flame"
          />
          <img
            className="w-25 object-contain"
            src="/clients/kfc.png"
            alt="kfc"
          />
          <img
            className="w-25 object-contain"
            src="/clients/kochimetro.png"
            alt="kochimetro"
          />
          <img
            className="w-25 object-contain"
            src="/clients/webxlr8.png"
            alt="webxlr8"
          />
          <img
            className="w-25 object-contain"
            src="/clients/willmount.png"
            alt="willmount"
          />
          <img
            className="w-25 object-contain"
            src="/clients/wonderla.png"
            alt="wonderla"
          />
          <img
            className="w-25 object-contain"
            src="/clients/triumph.png"
            alt="triumph"
          />
          <img
            className="w-25 object-contain"
            src="/clients/b&b.png"
            alt="b&b"
          />
        </div>
      </section>
      {/* Thought Process */}
      <section>
        <div className="container mx-auto mt-5 p-5 relative">
          <img
            src="/thoughtprocess/back-drop.png"
            className="absolute z-0 w-screen opacity-50 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <picture className="w-full h-full flex items-center justify-center">
            <source
              media="(min-width: 640px)"
              srcSet="/thoughtprocess/us-web-steps.png"
            />

            <img
              src="/thoughtprocess/us-web-steps-sm.png"
              className="object-cover w-[20rem] sm:w-full"
            />
          </picture>
          <p className="text-gradient text-justify md:text-center mt-10 mx-auto md:w-1/2 relative z-10">
            We follow a simple five-step process Plan, Conceptualize, Produce,
            Edit & Refine, and Deliver & Manage to create high-quality content.
            From strategy to final delivery, we handle everything in-house for
            smooth, effective results across all media services.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
