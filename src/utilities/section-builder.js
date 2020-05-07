import React from 'react';
import SectionSlideshow from '../components/Sections/SectionSlideshow';
import SectionContentOne from '../components/Sections/SectionContentOne';
import SectionBoxes from '../components/Sections/SectionBoxes';
import SectionTitleBanner from '../components/Sections/SectionTitleBanner';

export default (sections) => (
  <>
    {sections.map(({ type, ...section }) => {
      switch (type) {
        case 'section_slideshow':
          return (<SectionSlideshow section={section} />);
        case 'section_boxes':
          return (<SectionBoxes section={section} />);
        case 'section_content_one':
          return (<SectionContentOne section={section} />);
        case 'section_title_banner':
          return (<SectionTitleBanner section={section} />);
        default:
          console.log('Section Not Defined');
          return '';
      }
    })}
  </>
);
