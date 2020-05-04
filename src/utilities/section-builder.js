import React from 'react';
import SectionSlideshow from '../components/Sections/SectionSlideshow';
import SectionContentOne from '../components/Sections/SectionContentOne';
import SectionBoxes from '../components/Sections/SectionBoxes';

export default (data) => (
  <>
    {data.map((item, index) => {
      switch (item.type) {
        case 'section_slideshow':
          return (<SectionSlideshow sectionIndex={index} />);
        case 'section_boxes':
          return (<SectionBoxes sectionIndex={index} />);
        case 'section_content_one':
          return (<SectionContentOne sectionIndex={index} />);
        default:
          console.log('Section Not Defined');
          return '';
      }
    })}
  </>
);
