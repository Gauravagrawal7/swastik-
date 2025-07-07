 "use client"
import Slider from "react-slick"
import Image from "next/image"

export default function ServicesSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500
  }

 const images = ["/images/v.jpg", "/images/n.jpg"]


  return (
    <div className="max-w-6xl mx-auto py-8">
      <Slider {...settings}>
        {images.map((src, i) => (
          <div key={i}>
            <Image src={src} alt={`Slide ${i + 1}`} width={1200} height={500} className="rounded-lg w-full h-auto object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  )
}
