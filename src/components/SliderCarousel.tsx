import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

interface SliderProps {
	data: React.ReactNode
}


const SliderCarousel: React.FC<SliderProps> = ({ data }) => {

	const sliderSettings = {
		slidesToShow: 5,
		infinite: true,
		responsive: [
			{
				breakpoint: 868,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 568,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 468,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	}
	return <Slider {...sliderSettings}>{data }</Slider>
}

export default SliderCarousel