const getSales = (axios, page, country, startAt, endAt) =>
  axios.get("api/sales", { params: { page, country, startAt, endAt } });
const getTopDomain = (axios) => axios.get("api/top-domains");
const getProduct = (axios) => axios.get("api/top-products");
const getCountry = (axios) => axios.get("api/countries");

export default (axios) => ({
  getSales: getSales.bind(null, axios),
  getTopDomain: getTopDomain.bind(null, axios),
  getProduct: getProduct.bind(null, axios),
  getCountry: getCountry.bind(null, axios),
});
