import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Hero({info}) {
  const intro = info.intro.replace(/\n/g, '<br>');

  return (
    <>
      <section id="hero" className="flex flex-col md:flex-row items-center md:justify-between lg:justify-around md:h-screen mb-10 pb-20">
        <div className="md:w-2/5 mb-10 md:mb-0">
        <h2 className="text-4xl font-medium">Hello, I&apos;m <br/>{info.name}.</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg pt-10" dangerouslySetInnerHTML={{ __html: intro }}></p>
        </div>
        <div><img src={info.image} alt="Picture of Samuel"  className="hover:grayscale w-72 lg:w-fit md:max-h-[28rem] 2xl:max-h-full"/></div>
        <Link to="/#featured-projects" className="absolute bottom-10 left-10 hidden md:block">
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
        </Link>
      </section>
    </>
  );
}

Hero.propTypes = {
  info: PropTypes.object.isRequired,
};