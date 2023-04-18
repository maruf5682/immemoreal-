import React, { useRef } from "react";
import { useFeatureLeftShutter, useFeatureRightShutter } from "../hooks/gsap";

const Feature = () => {
	// feature ref added
	const featureRef = useRef(null);
	const featureLeftShutterRef = useRef(null);
	const featureRightShutterRef = useRef(null);

	// hook call feature
	useFeatureLeftShutter(featureLeftShutterRef, featureRef);
	useFeatureRightShutter(featureRightShutterRef, featureRef);

	return (
		<section className="featured wrapper" ref={featureRef}>
			<h2 className="section-title">Featured</h2>
			<div className="features">
				<div className="feature-l">
					<span className="feature-text">90's TELEPHONE</span>
					<img
						src="https://images.pexels.com/photos/2587464/pexels-photo-2587464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt="90's TELEPHONE"
					/>
					<span
						ref={featureLeftShutterRef}
						className="feature-shutter-l"></span>
				</div>
				<div className="feature-r">
					<span className="feature-text">90'S CASSETTE PLAYER</span>
					<img
						src="https://images.pexels.com/photos/6076410/pexels-photo-6076410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt="90'S CASSETTE PLAYER"
					/>
					<span
						ref={featureRightShutterRef}
						className="feature-shutter-r"></span>
				</div>
			</div>
		</section>
	);
};

export default Feature;
