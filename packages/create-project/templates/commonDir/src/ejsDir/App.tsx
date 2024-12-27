import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import router from '@/router';
<% if (platform === 'mobile') { %>
import { hideLoading, platformType } from '@/utils/tools';
  import { setState } from '@/store';
  import { waitWechatReady } from '@/utils/hybrid';
<% } else { %>
import { hideLoading } from '@/utils/tools';
<% } %>

  function App() {

    useEffect(() => {
      setTimeout(() => {
        hideLoading();
      }, 500);
    }, []);

<% if (platform === 'mobile') { %>
      // 路由切换后，需重新初始化微信sdk（根据当前url进行签名验证）
      useEffect(() => {
        type Unsubscribe = () => void;
        let unsubscribe: Unsubscribe;
        if (platformType === 'wechat') {
          unsubscribe = router.subscribe((state, asdf) => {
            console.log('路由切换', state, asdf);
            waitWechatReady(() => setState({ sdkReady: true }))
          });
        }
        return () => {
          unsubscribe && unsubscribe();
        };
      }, []);
<% } %>


return (
      <Sentry.ErrorBoundary>
        <RouterProvider router={router} />
      </Sentry.ErrorBoundary>
    )
  }

export default App;
