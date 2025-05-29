import PrimaryButton from "../components/Buttons/PrimaryButton";
import Project from "../components/Project";
import ServiceBlock from "../components/ServiceBlock";
import ClientImage from "../components/ClientImage";

import Projects from "../utils/projects.json";
import Services from "../utils/services.json";
import Clients from "../utils/clients.json";

const Home = () => {
  return (
    <div className="bg-[linear-gradient(to_top,var(--dark),var(--green-dark))] min-h-screen w-screen overflow-hidden main-content">
      {/* Hero */}
      <section>
        <header className="w-screen mt-0 md:mt-15 h-[43rem] overflow-hidden relative flex items-center justify-center p-15">
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

          <div className="container w-screen md:w-full relative md:bg-gradient-to-b md:from-[var(--dark-light-50)] md:to-[var(--dark)] z-10 flex flex-col items-center justify-center gap-4 h-full md:border-1 rounded-2xl border-[var(--green)] p-5">
            <h1 className="text-white text-center font-bold text-2xl sm:text-4xl lg:text-6xl w-fit">
              #UnlockYourBrand’s
              <span className="text-[var(--green)]">TrueStory.</span>
            </h1>
            <p className="text-gray-200 text-center text-md md:text-xl">
              Drone Shoots, Video Production, Graphic Design, Social Media
              Management, All Under One Roof.
            </p>

            <div className="w-full flex gap-2 mx-auto justify-center">
              <a href="#about">
                <PrimaryButton
                  className="px-4 md:px-10 py-2 hover:md:px-12"
                  text="Let's Start"
                />
              </a>
              <a
                href="https://www.instagram.com/unlockstory.in/"
                target="_blank"
              >
                <PrimaryButton
                  className="px-4 py-2 hover:md:px-12"
                  icon={<i className="fa-brands fa-instagram"></i>}
                />
              </a>
              <a href="http://" target="_blank">
                <PrimaryButton
                  className="px-4 py-2 hover:md:px-12"
                  icon={<i className="fa-brands fa-facebook"></i>}
                />
              </a>
            </div>

            {/* Particles */}
            <img
              src="/home/camera.png"
              alt="camera"
              className="absolute hidden md:!block w-50  bottom-10 -right-20 z-10 random-animation"
            />

            <img
              src="/home/drone.png"
              alt="drone"
              className="absolute hidden md:!block w-60 top-10 -left-20 z-10 random-animation"
            />
            <div className="w-20 hidden md:!block h-20 bg-[linear-gradient(to_top,var(--green),var(--green-light))] rounded-full absolute top-0 right-10 md:top-10  md:-right-10 random-animation"></div>
            <div className="w-10 hidden md:!block h-10 bg-[linear-gradient(to_top,var(--green),var(--green-light))] rounded-full absolute top-30 right-20 md:top-30  md:-right-15 random-animation"></div>
            <div className="w-14 hidden md:!block h-14 bg-[linear-gradient(to_top,var(--green),var(--green-light))] rounded-full absolute top-20 right-0  md:top-35  md:right-3 random-animation"></div>
            <div className="w-7 hidden md:!block h-7 bg-[linear-gradient(to_top,var(--green),var(--green-light))] rounded-full absolute bottom-10 left-0  md:bottom-23  md:left-0 random-animation"></div>
            <div className="w-17 hidden md:!block h-17 bg-[linear-gradient(to_top,var(--green),var(--green-light))] rounded-full absolute bottom-20 left-20  md:bottom-30  md:-left-18 random-animation"></div>
            <div className="w-14 hidden md:!block h-14 bg-[linear-gradient(to_top,var(--green),var(--green-light))] rounded-full absolute bottom-0 left-15  md:bottom-35  md:left-3 random-animation"></div>
          </div>
        </header>
      </section>
      {/* Marquee */}
      <section id="about">
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
            icon={<i className="fa-solid fa-arrow-right"></i>}
          />
        </div>
      </section>

      {/* Thought Process */}
      <section>
        <div className="container mx-auto mt-5 p-5 relative">
          <img
            src="/thoughtprocess/back-drop.png"
            className="absolute z-0 scale-200 md:scale-100 opacity-50 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <picture className="w-full h-full flex items-center justify-center relative z-10">
            <source
              media="(min-width: 640px)"
              srcSet="/thoughtprocess/us-web-steps.png"
            />

            <img
              src="/thoughtprocess/us-web-steps-sm.png"
              className="object-cover w-[20rem] sm:w-full"
            />
          </picture>
          <p className="text-gradient text-justify md:text-center mt-10 mx-auto lg:w-1/2 relative z-10">
            We follow a simple five-step process Plan, Conceptualize, Produce,
            Edit & Refine, and Deliver & Manage to create high-quality content.
            From strategy to final delivery, we handle everything in-house for
            smooth, effective results across all media services.
          </p>
        </div>
      </section>
      {/* Clients */}
      <section>
        <div className="container mx-auto mt-5 opacity-50 grid grid-cols-4 md:grid-cols-8 gap-4  justify-items-center items-center p-5">
          {Clients.map((client, index) => (
            <ClientImage key={index} src={client.src} alt={client.alt} />
          ))}
        </div>
      </section>
      {/* Stats */}
      <section>
        <div className="container mx-auto p-5 grid grid-cols-1 gap-4 md:grid-cols-3 items-center justify-center">
          <div className=" flex-col col-span-2 gap-4 grid grid-cols-1 lg:grid-cols-3 items-start justify-center">
            <div>
              <h3 className="font-bold text-white text-8xl">40+</h3>
              <p className=" text-gray-400 ">
                <span className="text-lg text-white">Projects Delivered,</span>{" "}
                From startups to established brands, we’ve brought visions to
                life with precision and passion.
              </p>
            </div>
            <div className="text-end md:text-start">
              <h3 className="font-bold text-white text-8xl">50+</h3>
              <p className=" text-gray-400 ">
                <span className="text-lg text-white">
                  Creative Concepts Executed.
                </span>{" "}
                Every idea is original, every design is strategic. We don’t
                recycle — we reinvent.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white text-8xl">4M+</h3>
              <p className=" text-gray-400 ">
                <span className="text-lg text-white">Views Generated.</span> Our
                videos and content have reached millions, creating real buzz and
                brand awareness across platforms.
              </p>
            </div>
          </div>
          <div className="flex relative">
            <img
              src="/images/drone.jpg"
              alt="drone-image"
              className="rounded-2xl z-10 w-full"
            />
            <div className="absolute z-20 bottom-10 left-1/2 -translate-x-1/2">
              <PrimaryButton
                className="px-4 md:px-10 py-2 hover:md:px-12 hover:shadow-lg shadow-green-700/50"
                text="Portfolio"
                icon={<i className="fa-solid fa-download"></i>}
              />
            </div>
            <div className="absolute z-0  h-full w-full top-5 left-5 bg-gradient-to-b from-[var(--dark-50)] to-[var(--dark-light-50)]  backdrop:blur-md border-1 rounded-2xl border-[var(--dark-light)]"></div>
          </div>
        </div>
      </section>
      <hr className="container mx-auto my-5  border-0" />
      <section className="relative w-screen">
        <div className="absolute inset-0 bg-[url(/images/bg-pattern.png)] opacity-20 bg-cover mix-blend-screen"></div>
        <div className="container mx-auto p-5 relative z-10">
          <div className="text-center">
            <p className="text-gray-300 text-lg">Talk is Over</p>
            <h2 className="text-3xl md:text-7xl text-[var(--green)] font-bold text-center">
              <span className="text-white">let's</span> Unlock Your Brand’s True
              Story <span className="text-white">together.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-11 mt-10 gap-4">
            {/* First iframe */}
            <div className="md:col-span-5 row-span-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.5021655092664!2d76.3277072758642!3d10.139774170612368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080f26a588ab6d%3A0xf6298ef6545a4c15!2sUnlock%20Story%20-%20Drone%20Videography%2C%20Photography%20%26%20Digital%20Marketing!5e0!3m2!1sen!2sin!4v1748359966172!5m2!1sen!2sin"
                loading="lazy"
                className="w-full h-full rounded-2xl"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <hr className="md:hidden" />

            <div className="mx-auto hidden md:!flex md:items-center md:justify-center p-5">
              <div className="h-full w-1 bg-[var(--green)] rounded-full"></div>
            </div>

            {/* Second iframe */}
            <div className="md:col-span-5 row-span-1 w-full h-full flex flex-col justify-center items-center md:items-start">
              <img
                src="/logos/Unlock Story_White.png"
                alt="brand-logo"
                className="w-[10rem] object-contain mb-4"
              />
              <div className="text-white text-center md:text-left">
                <h2 className="text-2xl font-bold">Unlock Story</h2>
                <p className="text-gray-300 text-md md:text-lg ">
                  YIB GLOBAL TECHNOLOGY SERVICES LLP
                  <br /> East Veliyathunad, UCC P.O, Aluva-2, <br /> Kerala
                  683102 India
                  <br />
                  <div className="flex  gap-2 justify-center md:justify-start py-2 items-center">
                    <a target="_blank" href="">
                      <i className="fa-solid fa-square-phone fa-2xl hover:text-white transition-all duration-300 ease-in-out"></i>
                    </a>
                    <a target="_blank" href="">
                      <i className="fa-solid fa-square-envelope fa-2xl hover:text-white transition-all duration-300 ease-in-out"></i>
                    </a>
                    <a target="_blank" href="">
                      <i className="fa-brands fa-square-instagram fa-2xl hover:text-white transition-all duration-300 ease-in-out"></i>
                    </a>
                    <a target="_blank" href="">
                      <i className="fa-brands fa-square-facebook fa-2xl hover:text-white transition-all duration-300 ease-in-out"></i>
                    </a>
                    <a target="_blank" href="">
                      <i className="fa-brands fa-linkedin fa-2xl hover:text-white transition-all duration-300 ease-in-out"></i>
                    </a>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
