import styled from '@emotion/styled';

const imageUrl = process.env.NEXT_PUBLIC_ASSET_URL;

export const LayoutStyled = styled.section`
  display: block;
  box-sizing: border-box;
  min-height: 100vh;

  ::before {
  position: fixed;
  z-index: -1;

  display: block;
  width: 100%;
  height: 100%;

  background-image: url('${(props) => imageUrl + props.theme.imageBackground}');
  background-position: center center;
  background-size: cover;
  content: '';
  }
`;

export const ContainerGridStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  width: 100%;
  max-width: 1440px;
  margin: 45px auto;
`;

export const ContainerFlexStyled = styled.section`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1440px;
  min-height: calc(100vh - 80px);
  max-height: 100%;
  margin: 0 auto;

  ${(props) => props.nav
    && `
    min-height: auto;
    align-items: center;
    height: 8rem;
    `}
`;
