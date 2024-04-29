export default function Hero() {
  return (
    <>
      <section id="hero" className="flex flex-col md:flex-row items-center md:justify-between h-screen">
        <div className="w-3/5 mb-10">
        <h2 className="text-4xl text-black font-medium">Hello, I&apos;m Samuel Manu, a web developer &amp; cartographer.</h2>
        <p className="text-gray text-lg">I&apos;m a full-stack developer</p>
        </div>
        <div><img src="src/assets/sam.jpg" alt="Picture of Samuel"  className="grayscale hover:grayscale-0 w-72"/></div>
        <a href="#featured-projects" className="absolute bottom-10 left-10 ">
            <svg
            className=" w-10 h-10 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
            </svg>
        </a>
      </section>
    </>
  );
}
