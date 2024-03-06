'use client';

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './slider.scss';

import slide1 from '@/public/slide1.webp';
import slide2 from '@/public/slide2.webp';
import slide3 from '@/public/slide3.webp';
import slide4 from '@/public/slide4.webp';

const slides = [
  {
    src: slide1,
    alt: 'Screenshots of the dashboard project showing desktop version',
    label: 'Slide One',
    description: 'Latest arrivals',
    link: '/',
    linkDescription: 'See our range',
  },
  {
    src: slide2,
    alt: 'Screenshots of the dashboard project showing desktop version',
    label: 'Slide Two',
    description: 'Latest arrivals',
    link: '/',
    linkDescription: 'See our range',
  },
  {
    src: slide3,
    alt: 'Screenshots of the dashboard project showing desktop version',
    label: 'Slide Three',
    description: 'Latest arrivals',
    link: '/',
    linkDescription: 'See our range',
  },
  {
    src: slide4,
    alt: 'Screenshots of the dashboard project showing desktop version',
    label: 'Slide Four',
    description: 'Latest arrivals',
    link: '/',
    linkDescription: 'See our range',
  },
];

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <div className='item' key={slide.src}>
          <Image
            src={slide.src}
            className='image'
            alt={slide.alt}
            width={1400}
            height={716}
            priority
          />
          <div className='label'>
            <h3>{slide.label}</h3>
            <p>{slide.description}</p>
            <button>
              <a href='/'>{slide.linkDescription}</a>
            </button>
          </div>
        </div>
      ))}
    </Slider>
  );
}
