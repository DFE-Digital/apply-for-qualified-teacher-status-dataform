function mapping(countryField) {
    return `
CASE
  WHEN LOWER(${countryField}) IN (
    'austria','belgium','bulgaria','croatia','cyprus','czech republic',
    'denmark','estonia','finland','france','germany','greece','hungary',
    'ireland','italy','latvia','lithuania','luxembourg','malta',
    'netherlands','poland','portugal','romania','slovakia','slovenia',
    'spain','sweden') THEN 'eu'
  WHEN LOWER(${countryField}) IN ('iceland','liechtenstein','norway') THEN 'eea'
  WHEN LOWER(${countryField}) IN ('united states','australia','new zealand','gibraltar','scotland','canada') THEN 'ott'
ELSE 'other'
END
`;
}
module.exports = {
    mapping
};