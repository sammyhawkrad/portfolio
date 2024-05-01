import PropTypes from "prop-types";

export default function Project({ project, index }) {

    function formatList(list) {
    if (list.length === 0) {
      return '';
    } else if (list.length === 1) {
      return list[0];
    } else {
      return `${list.slice(0, -1).join(', ')} and ${list[list.length - 1]}`;
    }
  }

  return (
    <>
      <div className="lg:flex pb-20 pt-20 border-b border-black">
        <div className="lg:w-3/5 lg:pl-5">
          <a href={project.link} target="_blank" rel="noopener noreferrer"><img
            src={project.image}
            alt={project.name}
            title="View project"
            className="w-full max-h-80 object-scale-down grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          /></a>
        </div>
        <div className="mt-5 lg:mt-0 lg:order-first lg:w-2/5 lg:pr-5 lg:flex lg:flex-col flex-grow">
          <h3 className="uppercase mb-5 font-medium">{`${index < 10 ? '0': ''}${index + 1}/ ${project.name}`}</h3>
          <p className="mb-5">{project.description}</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Built with: {formatList(project.tech) }</p>
          <div className="justify-self-end content-end grow pt-5">
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className=""
            >
              <img title="View Github repo" src="https://github.com/sammyhawkrad/OsmoseStats/raw/main/src/assets/github.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
