import React, { useState } from "react";

const Test = () => {
	const [number, setNumber] = useState(0);

	const sum = () => {
		var num1 = document.getElementById("num1").value;
		var num2 = document.getElementById("num2").value;
		setNumber(parseInt(num1) + parseInt(num2));
	};
	const increase = () => {
		setNumber(number + 1);
	};
	const decrease = () => {
		setNumber(number - 1);
	};

	return (
		<div className="flex m-10">
			<div className="m-4">{number}</div>
			<input
				className="border border-grey-500 m-4"
				type="number"
				id="num1"
			/>
			<input
				className="border border-grey-500 m-4"
				type="number"
				id="num2"
			/>
			<button
				onClick={increase}
				className="m-4">
				increase
			</button>
			<button
				onClick={sum}
				className="m-4">
				sum
			</button>
			<button
				onClick={decrease}
				className="m-4">
				decrease
			</button>
		</div>
	);
};

export default Test;
