import React from "react";

const Signup = () => {
	return (
		<div className="w-full h-screen">
			<img
				className="hidden sm:block absolute w-full h-full object-cover"
				src="https://assets.nflxext.com/ffe/siteui/vlv3/530fc327-2ddb-4038-a3f0-2da2d9ccede1/9c547c8a-e707-4bdb-bdbc-843f134dd2a6/IN-en-20230619-popsignuptwoweeks-perspective_alpha_website_large.jpg"
				alt="/"
			/>
			<div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
			<div className="fixed w-full px-4 py-24 z-50">
				<div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white"></div>
			</div>
		</div>
	);
};

export default Signup;
