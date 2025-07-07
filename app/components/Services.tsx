 "use client"
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const images = [
  "/images/sw.jpg",
  "/images/1.jpg",
  "/images/2.jpg",
]

export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false, 
  }

  return (
    <div className="px-4 py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Services</h2>
        <button className="text-sm text-green-700">View all</button>
      </div>
      <div className="relative w-full overflow-hidden rounded-lg">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index}>
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={500}
                height={400}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
