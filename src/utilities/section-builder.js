import React from 'react';
import SectionSlideshow from '../components/Sections/SectionSlideshow';
import SectionBoxes from '../components/Sections/SectionBoxes';
import SectionTitleBanner from '../components/Sections/SectionTitleBanner';
import SectionTitle from '../components/Sections/SectionTitle';
import SectionContentOne from '../components/Sections/SectionContentOne';
import SectionContentTitleText from '../components/Sections/SectionContentTitleText';

export default (sections) => (
  <>
    {sections.map(({ type, ...section }) => {
      switch (type) {
        case 'section_slideshow':
          return (<SectionSlideshow section={section} />);
        case 'section_content_boxes':
          return (<SectionBoxes section={section} />);
        case 'section_title':
          return (<SectionTitle section={section} />);
        case 'section_title_banner':
          return (<SectionTitleBanner section={section} />);
        case 'section_content_one':
          return (<SectionContentOne section={section} />);
        case 'section_content_title_text':
          return (<SectionContentTitleText section={section} />);
        default:
          console.log('Section Not Defined');
          return '';
      }
    })}
  </>
);
