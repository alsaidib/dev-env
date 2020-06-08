const { parse } = require('cookie');

export default (req) => {
  const { headers } = req;
  const headerCookie = (headers && headers.cookie) || req.getHeader('Cookie');

  let cookies;
  if (headerCookie) {
    if (cookies) {
      const parsedCookie = parse(headerCookie);
      for (const cookie in parsedCookie) {
        cookies[cookie] = parsedCookie[cookie];
      }
    } else if (!cookies) {
      cookies = parse(headerCookie);
    }
  }
  return cookies;
};
