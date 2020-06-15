/* eslint-disable react/jsx-no-target-blank */

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { css } from '@emotion/core';
import {
  ArrowBtnStyled,
  AvatarStyled,
  BioStyled,
  CardInfoStyled,
  CardSliderStyled,
  ContactItemStyled,
  MemberCardStyled,
  NameStyled,
  TagArrowStyled,
  TagsStyled,
  TagStyled,
} from '../../../styles/Directory.Styled';

import formattAddress from '../../../utilities/formattAddress';
import Email from '../../SVGs/Email';
import Location from '../../SVGs/Location';
import Phone from '../../SVGs/Phone';
import Teacher from '../../SVGs/Teacher';
import Website from '../../SVGs/Website';

const MemberDirectoryCard = ({ member }) => {
  const [showContact, setShowContact] = useState(false);
  const tagRef = useRef();
  const [showButton, setShowButton] = useState(false);
  const [showTags, setShowTags] = useState(false);
  useEffect(() => {
    if (tagRef.current) {
      const el = tagRef.current;
      const isOverflowing = el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;
      setShowButton(isOverflowing);
    }
  }, [tagRef.current]);
  const addressFormatted = formattAddress(member.address);
  return (
    <MemberCardStyled>
      <CardSliderStyled>
        <CardInfoStyled
          css={css`
            ${showContact ? 'left: -50%' : 'left: 0%;'}
          `}
        >
          <AvatarStyled
            src={
              process.env.NEXT_PUBLIC_ASSET_URL
              + (member.avatar || '/images/default-profile.png')
            }
            height="130"
            width="130"
          />
          <div>
            <NameStyled>{`${member.firstName} ${member.lastName}`}</NameStyled>
            <TagsStyled ref={tagRef} open={showTags}>
              {member.userInstruments.map((instrument) => (
                <TagStyled key={instrument.instruments.code}>
                  {instrument.teach && <Teacher />}
                  {instrument.instruments.name}
                </TagStyled>
              ))}
              {member.styles.map((style) => (
                <TagStyled key={style.code}>{style.name}</TagStyled>
              ))}
              {showButton && (
                <TagArrowStyled
                  open={showTags}
                  onClick={() => setShowTags(!showTags)}
                >
                  &#10095;
                </TagArrowStyled>
              )}
            </TagsStyled>
            <BioStyled display={!showTags}>{member.bio}</BioStyled>
          </div>
        </CardInfoStyled>
        <ArrowBtnStyled
          onClick={() => setShowContact(!showContact)}
          right={showContact}
        />
        <CardInfoStyled
          css={css`
            left: ${showContact ? ' calc(-50% + 7rem)' : '0'};
          `}
        >
          <NameStyled>{`${member.firstName} ${member.lastName}`}</NameStyled>
          {member.email && (
            <ContactItemStyled>
              <Email />
              <a
                href={`mailto:${member.email}`}
                target="_blank"
                rel="noreferrer"
              >
                {member.email}
              </a>
            </ContactItemStyled>
          )}
          {member.phone && (
            <ContactItemStyled>
              <Phone />
              {member.phone}
            </ContactItemStyled>
          )}
          {addressFormatted && (
            <ContactItemStyled>
              <Location />
              {addressFormatted}
            </ContactItemStyled>
          )}
          {member.website && (
            <ContactItemStyled>
              <Website />
              <a href={member.website} target="_blank" rel="noreferrer">
                {member.website}
              </a>
            </ContactItemStyled>
          )}
        </CardInfoStyled>
      </CardSliderStyled>
    </MemberCardStyled>
  );
};

MemberDirectoryCard.propTypes = {
  member: PropTypes.shape({
    address: PropTypes.shape({
      city: PropTypes.string,
      country: PropTypes.string,
      primary: PropTypes.bool,
      state: PropTypes.string,
      street1: PropTypes.string,
      street2: PropTypes.string,
      zip: PropTypes.string,
    }),
    avatar: PropTypes.string,
    bio: PropTypes.string,
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    phone: PropTypes.string,
    styles: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.string,
        name: PropTypes.string,
      }),
    ),
    userInstruments: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.string,
        name: PropTypes.string,
        play: PropTypes.bool,
        teach: PropTypes.bool,
      }),
    ),
    website: PropTypes.string,
  }),
};

MemberDirectoryCard.defaultProps = {
  member: {},
};
export default MemberDirectoryCard;
