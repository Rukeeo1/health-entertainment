import React from 'react';
import './index.scss';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const slides = [
  {
    title: 'First item',
    url:
      'https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
  },
  {
    title: 'Second item',
    url:
      'https://images.pexels.com/photos/4720236/pexels-photo-4720236.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
  },
  {
    title: 'Third item',
    url:
      'https://images.pexels.com/photos/28080/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
  },
  {
    title: 'Fourth item',
    url:
      'https://images.pexels.com/photos/1153370/pexels-photo-1153370.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
  },
];

export default function Header() {
  return (
    <>
      <Slider>
        {slides.map((slide, index) => (
          <div
            className="header-wrapper"
            style={{ backgroundImage: `url(${slide.url})` }}
            key={index}
          >
            <h2 style={{fontWeight:"700"}}>{slide.title}</h2>
            <p>{slide.description}</p>
            <div className="overlay" />
          </div>
        ))}
      </Slider>
   
    </>
  );
}
