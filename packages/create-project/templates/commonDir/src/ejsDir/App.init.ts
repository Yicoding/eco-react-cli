import { VITE_BUILD_ENV } from '@/utils/env';
import * as Sentry from '@sentry/react';
import { version } from '../package.json';
import { isProd } from '@/utils/env';
<% if (platform === 'mobile') { %>
  import { waitSdkReady, getUserInfo } from '@/utils/hybrid'
  import { setState } from '@/store';

  // sdk 初始化
  // 加载sdk
  waitSdkReady().then(() => {
    setState({ sdkReady: true });
    // 获取用户信息
    getUserInfo().then((res) => {
      console.log('用户信息', res);
      setState({ userInfo: res });
    });
  });
  <% } %>

// Sentry Project ☞ Client Keys DSN
const CLIENT_KEY = '';

/**
 * Sentry
 *  - test/production 均上报，方便提早发现问题。
 *  - Sentry React: https://docs.sentry.io/platforms/javascript/guides/react/
 */
if (isProd) {
  Sentry.init({
    dsn: CLIENT_KEY, // Client Keys DSN
    environment: VITE_BUILD_ENV, // 区分上报环境
    sampleRate: 1.0,
    release: version
  });
}