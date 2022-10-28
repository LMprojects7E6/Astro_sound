import { Link } from "react-router-dom";

const GenreContainer = ({ genre }) => {
  return (
    <Link to={`/genre/${genre.genre}`}>
      <div
        className={`bg-${genre.color} rounded-xl  md:max-w-xs m-2 md:m-5 cursor-pointer`}
      >
        <h4 className="md:text-xl pt-5 m-5 text-white font-bold flex">
          {genre.genre.toUpperCase()}
        </h4>
        <div className="flex flex-row  m-5 space-around md:flex-col items-center    md:rounded-xl  w-28 h-14 md:w-60 md:max-h-72  md:m-20"></div>
      </div>
    </Link>
  );
};

export default GenreContainer;
