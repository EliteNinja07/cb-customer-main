import axios from 'axios';
import { state, stateActions } from '../../state';

export const request = axios.create({
  method: 'POST',
  baseURL: import.meta.env.VITE_REQUEST_BASE_URL,
  timeout: 60000,
  headers: { 'Content-Type': 'application/json' },
});

request.interceptors.request.use((config) => {
  // if (!config.url?.includes('login')) stateActions.addLoading();
  config.headers.account = JSON.stringify(state.storage ?? '');
  return config;
});

request.interceptors.response.use(
  (response) => {
    stateActions.subLoading();
    const data = response.data;
    // console.log("response:", response);
    if (response.status != 200) {
      return Promise.reject(response.data);
    }
    if (data.code !== 0) return Promise.reject(response.data);
    return Promise.resolve(data);

    // notification.error({
    //     message: `请求错误 ${response.statusText}: ${response}`,
    //     description: data || response.statusText || 'Error',
    // });

    // if (response.status === 401) {
    //   window.location.href = "/login";
    // }

    return Promise.reject(new Error(response.statusText || 'Error'));
  },
  (error) => {
    stateActions.subLoading();
    console.log('err:', error, error.response); // for debug
    let msg = '请求错误';
    if (error.response && error.response.status) {
      // switch (error.response.status) {
      //   // 401: 未登录
      //   // 未登录则跳转登录页面，并携带当前页面的路径
      //   // 在登录成功后返回当前页面，这一步需要在登录页操作。
      //   case 401:
      //     window.location.href = "/login";
      //     break;
      //   // 403 token过期
      //   // 登录过期对用户进行提示
      //   // 清除本地token和清空vuex中token对象
      //   // 跳转登录页面
      //   case 403:
      //     window.location.href = "/login";
      //     break;
      //   // 404请求不存在
      //   case 404:
      //     notification.error({
      //       message: `请求不存在`,
      //       description: error.response.data?.msg || "Error",
      //     });
      //     break;
      //   case 406:
      //     notification.error({
      //       message: `请求参数有误`,
      //       description: error.response.data?.msg || "Error",
      //     });
      //     break;
      //   default:
      //     notification.error({
      //       message: `请求错误`,
      //       description: error.response.data?.msg || "Error",
      //     });
      // }
    }
    // throw new Error(error);
    return Promise.reject(error);
  }
);
