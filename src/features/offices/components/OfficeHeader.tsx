"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

export default function OfficeHeader({
  image,
  images,
}: {
  image: string;
  images: string[];
}) {
  return (
    <section id="Gallery" className="-mb-[50px]">
      <div className="swiper w-full">
        <Swiper
          className="swiper-wrapper"
          slidesPerView="auto"
          spaceBetween={10}
          slidesOffsetAfter={10}
          slidesOffsetBefore={10}
        >
          <SwiperSlide className="swiper-slide !w-fit">
            <div className="w-[700px] h-[550px] overflow-hidden">
              <Image
                src={"/assets/images/thumbnails/thumbnail-details-1.png"}
                width={700}
                height={550}
                className="w-full h-full object-cover"
                alt="cover-thumbnail"
              />
            </div>
          </SwiperSlide>

          {images.map((img, index) => (
            <SwiperSlide key={index} className="swiper-slide !w-fit">
              <div className="w-[700px] h-[550px] overflow-hidden">
                <Image
                  src={image}
                  width={700}
                  height={550}
                  className="w-full h-full object-cover"
                  alt="cover-thumbnail"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
