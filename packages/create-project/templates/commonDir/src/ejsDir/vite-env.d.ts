/// <reference types="vite/client" />

/**
 * 编译环境
 */
declare type BuildEnv = 'development' | 'mock' | 'test' | 'production';

/**
 * 多编译环境变量约束
 */
declare type MultiEnv<T = string> = Record<BuildEnv, T>;

interface ImportMetaEnv {
  /** 编译环境 */
  readonly VITE_BUILD_ENV: BuildEnv;
  /** 云效basename */
  readonly VITE_BASE_ROUTE_NAME: string;
  /** 静态资源 url */
  readonly VITE_PUBLIC_URL: string;
  /** 接口请求域名 */
  readonly VITE_ORIGIN: string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

<% if (platform === 'mobile') { %>
  interface Window {
    ly: {
      ready: (cb: () => void) => void;
      error: () => void;
      config: (data: any) => void;
      invokeApp ?: (
        event: string,
        config?: { [key: string]: any; success?: (data?: any) => void } | string
      ) => void;
    };
    wx: {
      ready: (cb: () => void) => void;
      error: (cb: () => void) => void;
      config: (data: any) => void;
      hideAllNonBaseMenuItem: () => void;
      updateAppMessageShareData: (data: any) => void;
      updateTimelineShareData: (data: any) => void;
    };
  }
  <% } %>
