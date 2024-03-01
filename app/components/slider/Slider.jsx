'use client';

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './slider.scss';

import picOne from '@/public/pic1.webp';
import picTwo from '@/public/pic2.webp';
import picThree from '@/public/pic3.webp';
import picFour from '@/public/pic4.webp';

const slides = [
  {
    src: picOne,
    alt: 'Screenshots of the dashboard project showing desktop version',
    label: 'Slide One',
    description: 'Latest arrivals',
    link: '/',
    linkDescription: 'See our range',
  },
  {
    src: picTwo,
    alt: 'Screenshots of the dashboard project showing desktop version',
    label: 'Slide Two',
    description: 'Latest arrivals',
    link: '/',
    linkDescription: 'See our range',
  },
  {
    src: picThree,
    alt: 'Screenshots of the dashboard project showing desktop version',
    label: 'Slide Three',
    description: 'Latest arrivals',
    link: '/',
    linkDescription: 'See our range',
  },
  {
    src: picFour,
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
          <Image src={slide.src} className='image' alt={slide.alt} priority />
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
