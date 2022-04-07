import useSaleApi from './sale';

export default (axios) => ({
  sale: useSaleApi(axios),
});
