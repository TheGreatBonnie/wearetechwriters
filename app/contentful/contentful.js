const contentful = require("contentful");

export const client = contentful.createClient({
  space: "ye6gqrpamypo",
  accessToken: "k_oXX7Xll4FKjYGJmDQ-t2yXz1njblk9JVv8zTAoAzk",
});

export const previewClient = contentful.createClient({
  host: "preview.contentful.com",
  space: "ye6gqrpamypo",
  accessToken: "-C4U27dLPHbGra_YuF8zyihLX9lZLPxjT7Y_7BhmN_M",
});
