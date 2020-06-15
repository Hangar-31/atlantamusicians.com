import React from 'react';
import SectionSlideshow from '../components/Sections/SectionSlideshow';
import SectionBoxes from '../components/Sections/SectionBoxes';
import SectionTitleBanner from '../components/Sections/SectionTitleBanner';
import SectionTitle from '../components/Sections/SectionTitle';
import SectionBios from '../components/Sections/SectionBios';
import SectionContact from '../components/Sections/SectionContact';
import SectionContentOne from '../components/Sections/SectionContentOne';
import SectionContentTitle1 from '../components/Sections/SectionContentTitle1';
import SectionContentTitle2 from '../components/Sections/SectionContentTitle2';
import SectionContentTitle3 from '../components/Sections/SectionContentTitle3';
import SectionContentImages from '../components/Sections/SectionContentImages';
import SectionContentText from '../components/Sections/SectionContentText';
import MapOfficeLocation from '../components/Maps/MapOfficeLocation';
import SectionBlogs from '../components/Sections/SectionBlogs';

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
        case 'section_blogs':
          return (<SectionBlogs section={section} />);
        case 'section_title':
          return (<SectionTitle section={section} />);
        case 'section_title_banner':
          return (<SectionTitleBanner section={section} />);
        case 'section_contact':
          return (<SectionContact section={section} />);
        case 'section_map':
          return (<MapOfficeLocation section={section} />);
        case 'section_content_one':
          return (<SectionContentOne section={section} />);
        case 'section_content_title_1':
          return (<SectionContentTitle1 section={section} />);
        case 'section_content_title_2':
          return (<SectionContentTitle2 section={section} />);
        case 'section_content_title_3':
          return (<SectionContentTitle3 section={section} />);
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
