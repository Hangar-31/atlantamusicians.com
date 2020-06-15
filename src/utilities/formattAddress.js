export default (...args) => {
  // workaround for nulls
  const address = args[0] || {};
  let addressFormatted = '';
  if (address.street1) addressFormatted += address.street1;
  if (address.street2) addressFormatted += ` ${address.street2}`;
  if (address.street1) addressFormatted += ', ';
  if (address.city) addressFormatted += `${address.city}, `;
  if (address.state) addressFormatted += address.state;
  if (address.zip) addressFormatted += ` ${address.zip}`;
  if (address.country) addressFormatted += `, ${address.country}`;
  return addressFormatted;
};
