/**
 * * Copyright ©2020 Siddhartha_Sarkar. All Rights Reserved
 * ? v1.0.0
 */

function paginatedResponse(jsonArray, p, perPage = 10) {
  const pageCount = Math.ceil(jsonArray.length / perPage);
  let page = parseInt(p);
  if (!page) {
    page = 1;
  }
  if (page > pageCount) {
    page = pageCount;
  }
  const response = {
    page,
    pageCount,
    posts: jsonArray.slice(page * perPage - perPage, page * perPage),
  };
  return response;
}

module.exports = paginatedResponse;
