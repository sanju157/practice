import React, { lazy } from 'react'
import { Carousel } from 'react-bootstrap'

import slide_img_1 from '@assets/Coffee_1.jpg'
import slide_img_2 from '@assets/Coffee_2.webp'
import slide_img_3 from '@assets/Coffee_3.jpg'
import slide_img_4 from '@assets/Coffee_4.jpg'
import slide_img_5 from '@assets/Coffee_5.webp'
import slide_img_6 from '@assets/Coffee_6.webp'
import slide_img_7 from '@assets/Coffee_7.webp'
import slide_img_8 from '@assets/Coffee_8.webp'
import slide_img_9 from '@assets/Coffee_9.webp'
import slide_img_10 from '@assets/Coffee_10.webp'

export default function Slider() {

  const slides = [
    {
      class: "d-block w-100",
      src: slide_img_1,
      alt: "First slide"
    },
    {
      class: "d-block w-100",
      src: slide_img_2,
      alt: "Second slide"
    },
    {
      class: "d-block w-100",
      src: slide_img_3,
      alt: "Third slide"
    },
    {
      class: "d-block w-100",
      src: slide_img_4,
      alt: "Forth slide"
    },
    {
      class: "d-block w-100",
      src: slide_img_5,
      alt: "Fifth slide"
    },
    {
      class: "d-block w-100",
      src: slide_img_6,
      alt: "Sixth slide"
    },
    {
      class: "d-block w-100",
      src: slide_img_7,
      alt: "Seven slide"
    },
    {
      class: "d-block w-100",
      src: slide_img_8,
      alt: "Eight slide"
    },
    {
      class: "d-block w-100",
      src: slide_img_9,
      alt: "Nine slide"
    },
    {
      class: "d-block w-100",
      src: slide_img_10,
      alt: "Ten slide"
    }
  ]
  
  return (
    <Carousel data-bs-theme="dark" fade>
      {
        slides.map((item, index) => (
          <Carousel.Item key={`${item?.alt}-${index}`}>
            <img
              className={ item?.class }
              src={item?.src}
              alt={item?.alt}
              style={{ height: '900px' }}
            />
          </Carousel.Item>
        ))
      }
    </Carousel>
  )
}
