import PropTypes from "prop-types";

export default function FilterButton({ tag, activeTag, setActiveTag }) {
  return (
    <button
      className={`${
        activeTag === tag ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
      } px-4 py-2 rounded-full`}
      onClick={() => setActiveTag(tag)}
    >
      {tag}
    </button>
  );
}

FilterButton.propTypes = {
  tag: PropTypes.string.isRequired,
  activeTag: PropTypes.string.isRequired,
  setActiveTag: PropTypes.func.isRequired,
};