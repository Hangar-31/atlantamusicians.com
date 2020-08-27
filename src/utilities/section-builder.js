import React, { useState } from 'react';
import SectionMasthead from '../components/Sections/SectionMasthead';
import SectionBoxes from '../components/Sections/SectionBoxes';
import SectionBannerSmall from '../components/Sections/SectionBannerSmall';
import SectionBanner from '../components/Sections/SectionBanner';
import SectionTitle from '../components/Sections/SectionTitle';
import SectionBios from '../components/Sections/SectionBios';
import SectionContact from '../components/Sections/SectionContact';
import SectionContentOne from '../components/Sections/SectionContentOne';
import SectionContentTitle1 from '../components/Sections/SectionContentTitle1';
import SectionContentTitle2 from '../components/Sections/SectionContentTitle2';
import SectionContentTitle3 from '../components/Sections/SectionContentTitle3';
import SectionContentLink from '../components/Sections/SectionContentLink';
import SectionContentImages from '../components/Sections/SectionContentImages';
import SectionContentText from '../components/Sections/SectionContentText';
import MapOfficeLocation from '../components/Maps/MapOfficeLocation';
import SectionBlogs from '../components/Sections/SectionBlogs';
import SectionDirectory from '../components/Sections/SectionDirectory';
import SectionPress from '../components/Sections/SectionPress';
import SectionAwards from '../components/Sections/SectionAwards';
import SectionAwardFilters from '../components/Sections/SectionAwardFilters';
import SectionCreditCard from '../components/Sections/SectionCreditCard';
import SectionThankYou from '../components/Sections/SectionThankYou';
import SectionContentFile from '../components/Sections/SectionContentFile';
import SectionSpacer from '../components/Sections/SectionSpacer';
import SectionPriceList from '../components/Sections/SectionPriceList';

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
          case 'section_masthead':
            return (<SectionMasthead section={section} />);
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
          case 'section_banner_small':
            return (<SectionBannerSmall section={section} />);
          case 'section_banner':
            return (<SectionBanner section={section} />);
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
          case 'section_content_link':
            return (<SectionContentLink section={section} />);
          case 'section_content_file':
            return (<SectionContentFile section={section} />);
          case 'section_content_images':
            return (<SectionContentImages section={section} />);
          case 'section_press':
            return <SectionPress section={section} />;
          case 'section_spacer':
            return <SectionSpacer />;
          case 'section_credit_card_donate':
          case 'section_credit_card_payment':
            return (
              <SectionCreditCard
                section={section}
                ThankYou={
                  <SectionThankYou section={sections.find((s) => s.type === 'section_thank_you')} />
                }
              />
            );
          case 'section_price_list':
            return <SectionPriceList section={section} />;
          default:
            // eslint-disable-next-line no-console
            console.log('Section Not Defined', type);
            return '';
        }
      })}
    </>
  );
};
