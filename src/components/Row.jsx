import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = (props) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios.get(props.fetchURL).then((response) => {
			setMovies(response.data.results);
		});
	}, [props.fetchURL]);

	const slideLeft = () => {
		var slider = document.getElementById("slider" + props.rowID);
		slider.scroll({
			left: slider.scrollLeft - 500,
			behavior: "smooth",
		});
	};

	const slideRight = () => {
		var slider = document.getElementById("slider" + props.rowID);
		slider.scroll({
			left: slider.scrollLeft + 500,
			behavior: "smooth",
		});
	};

	return (
		<>
			<h2 className="text-white font-bold md:text-xl p-4"> {props.title}</h2>
			<div className="relative flex items-center group">
				<MdChevronLeft
					onClick={slideLeft}
					className=" bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
					size={40}
				/>
				<div
					id={"slider" + props.rowID}
					className="w-full h-full overflow-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
					{movies.map((item, id) => (
						<Movie
							key={id}
							item={item}
						/>
					))}
				</div>
				<MdChevronRight
					onClick={slideRight}
					className=" bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
					size={40}
				/>
			</div>
		</>
	);
};

export default Row;
