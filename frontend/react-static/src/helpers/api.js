import mapValues from 'lodash.mapvalues';

const { SERVER_URL } = process.env;

const createLinks = (links, base) => mapValues(links, (link) => `${base}${link}`);

// TODO: Set as your
export const api = createLinks(
  {
    getValues: 'get-values-of-something',
  },
  SERVER_URL
);

export const REsitekey = 'YOUR_RESITE_KEY';
