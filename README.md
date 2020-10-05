## About the package

This package format JSON-Array data to paginated form to send to client for front-end display.

## Installation

Run `npm i paginated-response`

## Test

```js
const paginatedResponse = require("paginated-response");

const jsonArray = [
  {
    _id: "5f78e2112cc17f206c131125",
    title: "bg",
  },
  {
    _id: "5f78e8cc3b076d0017b4e634",
    title: "Tags featured 🥳🥳",
  },
  {
    _id: "5f79af1466ac4d256899249e",
    title: "ad",
  },
  {
    _id: "5f79c6b107e3fa00176c4ba4",
    title: "Gg again",
  },
  {
    _id: "5f79c6d607e3fa00176c4ba5",
    title: "Wow",
  },
];

let paginated = paginatedResponse(jsonArray, 3, 2);

console.log(paginated);

// OUTPUT:
// {
//   page: 3,
//   pageCount: 3,
//   posts: [
//     {
//       _id: '5f79c6d607e3fa00176c4ba5',
//       title: 'Wow'
//     }
//   ]
// }
```

## Parameters

This package requires three parameters.

`jsonArray` -> 1st parameter - Main data

`pageno` -> 2nd parameter - Page no. to fetch

`perPage` -> 3rd parameter - no of data to send in a page, optional default is 10

## Example Usage

```js
const paginatedResponse = require("paginated-response");

const jsonArray = [
  {
    _id: "5f78e2112cc17f206c131125",
    title: "bg",
  },
  {
    _id: "5f78e8cc3b076d0017b4e634",
    title: "Tags featured 🥳🥳",
  },
  {
    _id: "5f79af1466ac4d256899249e",
    title: "ad",
  },
  {
    _id: "5f79c6b107e3fa00176c4ba4",
    title: "Gg again",
  },
  {
    _id: "5f79c6d607e3fa00176c4ba5",
    title: "Wow",
  },
];

app.get("/api/posts", (req, res) => {
  const page = req.query.p; //page number requested
  const perPage = 2; //optional, default is 10
  let paginated = paginatedResponse(jsonArray, page, perPage);
  res.json(paginated);
  //see output below
});
```

Example Request:

```js
fetch("/api/posts?p=3"); //request page no. 3 of posts
```

Example Response

```js
{
  "page": 3,  //got page number
  "pageCount": 3,  //total pages
  "posts":[   //data of page 3
    {
      _id: "5f79c6d607e3fa00176c4ba5",
      title: "Wow",
    },
  ]
```
