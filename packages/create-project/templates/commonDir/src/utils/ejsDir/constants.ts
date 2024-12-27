/** constants */
<% if (platform === 'mobile') { %>
  import { isProd } from '@/utils/env';
  import { UserInfo } from '@/utils/types';

  const env = isProd ? '.' : '.test.';

  /**jssdk */
  export const xxx_JSSDK_SCRIPT = '//xxx.js';
  export const XIMA_JSSDK_APPID = 'xxx';
  export const XIMA_JSSDK_APIS = [

  ];
  /**sdk */

  /** 微信jssdk */
  export const WECHAT_JSSDK_SCRIPT = '//res.wx.qq.com/open/js/jweixin-1.6.0.js';
  export const WECHAT_JSSDK_APIS = [
    'updateAppMessageShareData',
    'updateTimelineShareData',
    'hideAllNonBaseMenuItem'
  ];
  export const WECHAT_OPENTAGLIST = ['wx-open-launch-app'];
  // 站外唤端CID(需自行申请)
  export const CID = 'xxx';
  // 微信开放标签appid
  export const appid = '';
  /** 微信jssdk */

  /** 用户信息相关 */
  const userExtraInfo = {
    nickName: '',
    imgUrl:
      'https://imagev2.xmcdn.com/group63/M06/94/66/wKgMcl0lkjvDyDg-AAAAdAw-8b8622.png!op_type=9&strip=1&quality=0&unlimited=1'
  }

  // 未调用登录接口前的默认用户信息
  export const defaultUserInfo: UserInfo = {
    ...userExtraInfo,
    // -1（未发送请求）；0（请求返回未登录）；> 0（请求返回已登录）
    uid: -1,
    isLogin: false,
  };

  // 未登录用户信息
  export const UNLOGIN_USER = {
    ...userExtraInfo,
    // -1（未发送请求）；0（请求返回未登录）；> 0（请求返回已登录）
    uid: 0,
    isLogin: false
  };
  /** 用户信息相关 */

  // 主域名
  export const M_ORIGIN = `https://xxx${env}xxx.com`;
  // h5登录页域名
  export const PASSPORT_ORIGIN = `https://xxx${env}xxx.com`;
  <% } %>

// 接口失败提示语
export const FAIL_MESSAGE = '你们太热情了';
