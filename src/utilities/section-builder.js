import React, { useState } from 'react';
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
import SectionDirectory from '../components/Sections/SectionDirectory';
import SectionPress from '../components/Sections/SectionPress';
import SectionAwards from '../components/Sections/SectionAwards';
import SectionAwardFilters from '../components/Sections/SectionAwardFilters';

export default (sections) => {
  const years = sections
    .map((section) => (section.type === 'section_awards' ? section.year : false))
    .filter(Boolean).sort().reverse();
  let firstAward = true;
  const [year, setYear] = useState(years[0]);

  return (
    <>
      {sections.map(({ type, ...section }) => {
        switch (type) {
          case 'section_slideshow':
            return (<SectionSlideshow section={section} />);
          case 'section_bios':
            return (<SectionBios section={section} />);
          case 'section_awards': {
            if (firstAward) {
              firstAward = false;
              return (
                <>
                  <SectionAwardFilters years={years} setYear={setYear} currentYear={year} />
                  <SectionAwards section={section} currentYear={year} />
                </>
              );
            }
            return <SectionAwards section={section} currentYear={year} />;
          }
          case 'section_content_boxes':
            return (<SectionBoxes section={section} />);
          case 'section_directory':
            return (<SectionDirectory section={section} />);
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
          case 'section_press':
            return <SectionPress section={section} />;
          default:
            // eslint-disable-next-line no-console
            console.log('Section Not Defined', type);
            return '';
        }
      })}
    </>
  );
};
