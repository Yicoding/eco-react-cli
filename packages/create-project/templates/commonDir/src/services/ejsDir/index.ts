import { http } from '@/services/request';
<% if (platform === 'mobile') { %>
  import { isProd } from '@/utils/env';
  import { M_ORIGIN } from '@/utils/constants';
  import type { UserInfo } from '@/utils/types';

  /** h5获取用户信息接口 */
  export const queryUserInfo = () => {
    const url = `${M_ORIGIN}/xxx/user/info`;
    return http.get<UserInfo>(url);
  };

  /** 微信sdk授权接口 */
  export const queryWechatJssdk = () => {
    const url = `${M_ORIGIN}/xxx/${isProd ? 0 : 1}`;
    return http.get(url, {
      params: {
        signatureUrl: encodeURIComponent(window.location.href)
      },
      withCredentials: true
    });
  };

  <% } else { %>
  const { VITE_ORIGIN } = import.meta.env;

  export function queryUrl() {
    return http.get(`${VITE_ORIGIN}/query/url`);
  }
  <% } %>