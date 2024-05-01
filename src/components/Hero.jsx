import PropTypes from 'prop-types';

export default function Hero({info}) {
  const intro = info.intro.replace(/\n/g, '<br>');

  return (
    <>
      <section id="hero" className="flex flex-col md:flex-row items-center md:justify-between lg:h-screen mb-10">
        <div className="md:w-2/4 mb-10">
        <h2 className="text-4xl font-medium">{`Hello, I'm ${info.name}, a ${info.role}.`}</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg pt-10" dangerouslySetInnerHTML={{ __html: intro }}></p>
        </div>
        <div><img src="public/sam.jpg" alt="Picture of Samuel"  className="grayscale hover:grayscale-0 w-72"/></div>
        <a href="#featured-projects" className="absolute bottom-10 left-10 hidden lg:block">
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

Hero.propTypes = {
  info: PropTypes.object.isRequired,
};