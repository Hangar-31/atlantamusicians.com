import gqlClient from './gqlClient';

export default async (ctx) => {
  const query = `{
    GetSettings {
      localName

      imageBanner
      imageBackground
      imageLogo

      colorNavBg
      colorNavLink
      colorNavHover

      colorBtnBg
      colorBtnText
      colorBtnHover

      colorActive
      colorActiveHover

      membershipDisclaimer
      workDuesDisclaimer

      bylawsTitle
      bylawsFile
    }
  }`;

  const { GetSettings } = await gqlClient(ctx).request(query);
  return { props: { settings: GetSettings } };
};
