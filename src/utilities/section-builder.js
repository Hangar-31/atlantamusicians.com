import React from 'react';
import SectionSlideshow from '../components/Sections/SectionSlideshow';

export default (data) => {
  const components = [];

  data.forEach((item) => {
    switch (item.type) {
      case 'section_slideshow':
        console.log('Fired');
        components.push(
          <SectionSlideshow
            images={item.section_slideshow_list}
          />,
        );
        break;
      case 'section_boxes':
        console.log(item.section_slideshow_image);
        console.log(item.section_slideshow_image_alt_text);
        break;
      case 'section_content_one':
        console.log('section_content_one');
        break;
      default:
        console.log('Section Not Defined');
        break;
    }
  });

  console.log(components);

  return components;
};
