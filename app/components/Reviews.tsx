 "use client"
import Slider from "react-slick"

export default function ReviewsSlider() {
  const reviews = [
    {
      rating: 5,
      name: "Ravi Sharma",
      date: "5 July 2025",
      message: "Very good clinic. The doctor is very humble and polite.",
    },
    {
      rating: 4,
      name: "Pooja Jain",
      date: "3 July 2025",
      message: "Excellent service and clean environment.",
    },
    {
      rating: 5,
      name: "Aman Verma",
      date: "1 July 2025",
      message: "Affordable charges and great facilities.",
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  }

  return (
    <div className="px-4 py-8 bg-gray-50">

        
<div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Reviews</h2>
        <button className="text-sm text-green-700">View all</button>
      </div>

      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="px-2">
            <div className="bg-white p-6 rounded-lg shadow h-full flex flex-col justify-between">


              <div className="text-yellow-500 text-xl mb-3 flex md:justify-start justify-center">
                {"★".repeat(review.rating)}
              </div>


              <p className="text-gray-700 text-base mb-4 text-center md:text-left">{review.message}</p>


              <div className="text-gray-500 text-sm flex flex-col md:flex-row md:justify-between md:items-center space-y-1 md:space-y-0 text-center md:text-left">
                <span className="font-semibold">{review.name}</span>
                <span>{review.date}</span>
              </div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
