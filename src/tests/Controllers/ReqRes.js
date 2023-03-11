export const req = {
  body: null,
  user: {
    id: 1,
  },
  params: {
    id: 1,
  },
};
export const res = {
  dataJS: null,
  json: (data) => {
    res.dataJS = data;
  },
};
