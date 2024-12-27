/** types */
<% if (platform === 'mobile') { %>
/** 设备类型 */
export type Device = 'android' | 'ios';

  /** 平台 */
  export type Platform =
    | 'xxx'
    | 'wecom'
    | 'wechat'
    | 'weibo'
    | 'qq'
    | '_default';

  /** native用户登录信息 */
  export type UserInfo = {
    // -1（未发送请求）；0（请求返回未登录）；> 0（请求返回已登录）
    uid: number;
    // 是否登录
    isLogin: boolean;
    // 用户名
    nickName?: string;
    // 用户头像
    imgUrl?: string;
  };

  /** 分享参数 */
  export type ShareParams = {
    title: string;
    desc: string;
    link: string;
    imgUrl: string;
    callBack?: () => void;
    isClick?: boolean;
  };
  <% } %>
