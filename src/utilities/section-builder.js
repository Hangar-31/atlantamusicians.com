import React from 'react';
import SectionSlideshow from '../components/Sections/SectionSlideshow';
import SectionBoxes from '../components/Sections/SectionBoxes';
import SectionBannerSmall from '../components/Sections/SectionBannerSmall';
import SectionBanner from '../components/Sections/SectionBanner';
import SectionTitle from '../components/Sections/SectionTitle';
import SectionBios from '../components/Sections/SectionBios';
import SectionContentOne from '../components/Sections/SectionContentOne';
import SectionContentTitle1 from '../components/Sections/SectionContentTitle1';
import SectionContentTitle2 from '../components/Sections/SectionContentTitle2';
import SectionContentTitle3 from '../components/Sections/SectionContentTitle3';
import SectionContentLink from '../components/Sections/SectionContentLink';
import SectionContentImages from '../components/Sections/SectionContentImages';
import SectionContentText from '../components/Sections/SectionContentText';

export default (sections) => (
  <>
    {sections.map(({ type, ...section }) => {
      switch (type) {
        case 'section_slideshow':
          return (<SectionSlideshow section={section} />);
        case 'section_bios':
          return (<SectionBios section={section} />);
        case 'section_content_boxes':
          return (<SectionBoxes section={section} />);
        case 'section_banner':
          return (<SectionBanner section={section} />);
        case 'section_banner_small':
          return (<SectionBannerSmall section={section} />);
        case 'section_title':
          return (<SectionTitle section={section} />);
        case 'section_content_one':
          return (<SectionContentOne section={section} />);
        case 'section_content_title_1':
          return (<SectionContentTitle1 section={section} />);
        case 'section_content_title_2':
          return (<SectionContentTitle2 section={section} />);
        case 'section_content_title_3':
          return (<SectionContentTitle3 section={section} />);
        case 'section_content_link':
          return (<SectionContentLink section={section} />);
        case 'section_content_text':
          return (<SectionContentText section={section} />);
        case 'section_content_images':
          return (<SectionContentImages section={section} />);
        default:
          console.log('Section Not Defined');
          return '';
      }
    })}
  </>
);
