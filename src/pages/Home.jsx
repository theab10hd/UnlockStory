import PrimaryButton from "../components/Buttons/PrimaryButton";

const Home = () => {
  return (
    <div className="bg-[linear-gradient(to_top,var(--dark),var(--green-dark))] min-h-screen ">
      {/* Hero */}
      <section>
        <header className="w-screen mt-15 h-1/2 md:h-[700px] relative overflow-hidden flex items-center justify-center p-15">
          <video
            src="/videos/bg-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          ></video>

          <div className="container w-screen md:w-full relative md:bg-[var(--dark-50)] z-10 flex flex-col items-center justify-center gap-4 h-full md:border-5 rounded-2xl border-[var(--green)] p-5">
            <h1 className="text-white font-bold text-2xl  md:text-4xl lg:text-6xl w-fit">
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
                text="Get Started"
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
              className="absolute w-20 md:w-50 -bottom-10 md:bottom-10 -right-10 md:-right-20 z-10 random-animation"
            />

            <img
              src="/home/drone.png"
              alt="drone"
              srcset=""
              className="absolute w-30 md:w-60  -top-10 md:top-10 -left-10 md:-left-20 z-10 random-animation"
            />
            <div class="w-20 hidden md:block h-20 bg-[linear-gradient(to_top,var(--green),var(--green-light))] rounded-full absolute top-10 -right-10 random-animation"></div>
            <div class="w-10 hidden md:block h-10 bg-[linear-gradient(to_top,var(--green),var(--green-light))] rounded-full absolute top-30 -right-15 random-animation"></div>
            <div class="w-14 hidden md:block h-14 bg-[linear-gradient(to_top,var(--green),var(--green-light))] rounded-full absolute top-35 right-3 random-animation"></div>
            <div class="w-7 hidden md:block h-7 bg-[linear-gradient(to_top,var(--green),var(--green-light))] rounded-full absolute bottom-23 left-0 random-animation"></div>
            <div class="w-17 hidden md:block h-17 bg-[linear-gradient(to_top,var(--green),var(--green-light))] rounded-full absolute bottom-30 -left-18 random-animation"></div>
            <div class="w-14 hidden md:block h-14 bg-[linear-gradient(to_top,var(--green),var(--green-light))] rounded-full absolute bottom-35 left-3 random-animation"></div>
          </div>
        </header>
      </section>
      {/* Marquee */}
      <section>
        <marquee
          loop
          className="w-screen p-5 bg-[var(--green)] text-[var(--dark)] flex items-center text-2xl font-bold"
        >
          Empowering Dreams, One Story at a Time! | 20% OFF this week! | Over
          500 success stories! | Join our free webinar on May 30th! | Empowering
          Dreams, One Story at a Time! | 20% OFF this week! | Over 500 success
          stories! | Join our free webinar on May 30th!
        </marquee>
      </section>
      {/* About */}
      <section>
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 p-5 mt-10 relative">
          <div className="w-100  h-50 rounded-full border-5 border-[var(--green-50)] absolute -right-100 top-50 z-0"></div>
          <div className="w-100  h-100 rounded-full border-5 border-[var(--green-50)] absolute -left-100 top-50 z-0"></div>
          <div className="w-full h-full flex flex-col md:flex-row gap-10 items-center justify-center">
            <img
              src="/logos/Unlock Story_White.png"
              alt="logo"
              className="w-25 md:w-50 object-contain"
              srcset=""
            />
            <div className="hidden h-30  border-1 border-[var(--green)]"></div>
            <p className="text-gray-200 text-xl ">
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

          <div className="flex  items-center justify-center gap-4 mt-10 z-10">
            <div className="p-5 h-70 flex flex-col justify-start gap-2 bg-gradient-to-t from-white to-gray-300 w-100 rounded-2xl hover:shadow-lg hover:scale-102 transition-all duration-300 ease-in-out">
              <img
                src="/icons/drone.png"
                alt=""
                className="w-15 h-15 object-contain"
                srcset=""
              />

              <h1 className="text-2xl font-bold text-[var(--dark)]">
                Drone Cinematography
              </h1>
              <p className="text-gray-700 text-lg">
                Capture breathtaking aerial perspectives that elevate your
                brand. Ideal for real estate, events, tourism, and cinematic
                promotions.
              </p>
            </div>

            <div className="p-5 h-70 flex flex-col justify-start gap-2 bg-gradient-to-t from-white to-gray-300 w-100 rounded-2xl hover:shadow-lg hover:scale-102 transition-all duration-300 ease-in-out">
              <img
                src="/icons/editing.png"
                alt=""
                className="w-15 h-15 object-contain"
                srcset=""
              />

              <h1 className="text-2xl font-bold text-[var(--dark)]">
                Professional Video Editing
              </h1>
              <p className="text-gray-700 text-lg">
                From raw footage to refined stories—our editing team adds the
                polish your content needs to engage and inspire.
              </p>
            </div>

            <div className="p-5 h-70 flex flex-col justify-start gap-2 bg-gradient-to-t from-white to-gray-300 w-100 rounded-2xl hover:shadow-lg hover:scale-102 transition-all duration-300 ease-in-out">
              <img
                src="/icons/design.png"
                alt=""
                className="w-15 h-15 object-contain"
                srcset=""
              />

              <h1 className="text-2xl font-bold text-[var(--dark)]">
                Creative Visual Design
              </h1>
              <p className="text-gray-700 text-lg">
                We merge visuals with strategy to create content that’s not only
                stunning but also aligned with your brand identity and goals.
              </p>
            </div>

            <div className="p-5 h-70 flex flex-col justify-start gap-2 bg-gradient-to-t from-white to-gray-300 w-100 rounded-2xl hover:shadow-lg hover:scale-102 transition-all duration-300 ease-in-out">
              <img
                src="/icons/brand.png"
                alt=""
                className="w-15 h-15 object-contain"
                srcset=""
              />

              <h1 className="text-2xl font-bold text-[var(--dark)]">
                Tailored Brand Storytelling
              </h1>
              <p className="text-gray-700 text-lg">
                Every brand has a story—we help you tell yours with authenticity
                and impact, customized for your target audience and platform.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Why Us */}
      <section>
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 p-5 mt-10 relative">
          <h1 className="text-[var(--green)] font-bold text-5xl w-fit">
            Our Latest Projects
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Home;
