const getSales = (axios, page) => axios.get('api/sales',{ params: { page}})

export default (axios) => ({
    getSales: getSales.bind(null, axios),

});