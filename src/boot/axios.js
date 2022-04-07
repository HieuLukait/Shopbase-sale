import { boot } from "quasar/wrappers";
import axios from "axios";
import useMyApi from "../api";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({
  baseURL: process.env.API,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

export default boot(({ app, redirect }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
  app.config.globalProperties.$myApi = useMyApi(api);

  api.interceptors.response.use(
    (res) => res,
    (error) => {
      const { response } = error;
      if (response) {
        if (response.status === 403) {
          redirect("/error-403");
        }
        if (response.status === 404) {
          redirect("/error-404");
        } else if (response.status === 500) {
          app.$notify.error("サーバー内部エラー");
        }
      }
      return Promise.reject(error);
    }
  );
});

export { api };
