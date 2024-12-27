<% if (platform === 'mobile') { %>
import type { Device, Platform } from '@/utils/types';
  /**
   * 异步加载脚本
   * @param url 脚本地址
   * @param callback
   */
  export function loadScript(url: string) {
    return new Promise((resolve, reject) => {
      window.addEventListener('load', () => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.onload = () => resolve(true);
        script.onerror = () => reject();
        script.src = url;
        document.body.appendChild(script);
      });
    });
  }

  /**
   * 获取某个 cookie 中某个字段的值
   * @param name 字段名
   */
  export function getCookie(name: string) {
    const value = `; ${document.cookie}`;
    const [, parts2] = value.split(`; ${name}=`);
    if (parts2) {
      return parts2.split(';').shift();
    }
    return undefined;
  }

  /**
   * 获取当前的运行平台
   */
  export function getPlatform(): Platform {
    let platform: Platform = 'xxx';

    const ua = window.navigator.userAgent;
    const impl = getCookie('impl') || '';
    if (/xxx/i.test(ua) || /xxx/i.test(impl)) {
      platform = 'xxx';
    } else if (/wxwork/i.test(ua)) {
      // 企业微信
      platform = 'wecom';
    } else if (/micromessenger/i.test(ua)) {
      platform = 'wechat';
    } else if (/weibo/i.test(ua)) {
      platform = 'weibo';
    } else if (/qq\//i.test(ua)) {
      platform = 'qq';
    } else {
      platform = '_default';
    }

    return platform;
  }

  export const platformType = getPlatform();

  /**
   * 获取设备类型
   */
  export function getDevice(): Device {
    let device: Device = 'android';
    const ua = window.navigator.userAgent;
    if (/android/i.test(ua)) {
      device = 'android';
    } else if (ua.match(/iPhone|iPad|iPod/i)) {
      device = 'ios';
    }
    return device;
  }

  export const deviceType = getDevice();
  <% } %>

/**
 * 获取随机数，min <= x < max
 * @param {number} min
 * @param {number} max
 */
export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * 隐藏loading
 */
export function hideLoading() {
  const loading = document?.getElementById?.('app_loading');
  if (loading) {
    loading?.classList?.add?.('app_loading_hidden');
  }
}

/**
 * 获取url参数
 * @param {string} field
 */
export function getSearchParams(field: string) {
  const search = new URLSearchParams(window.location.search);
  return search.get(field);
}

/**
 * 添加或更新URL参数
 *
 * @param url 要添加或更新参数的URL
 * @param params 要添加或更新的参数对象，键为参数名，值为参数值
 * @returns 返回更新后的URL字符串
 * @throws 当提供的URL无效时，抛出异常
 */
export function addOrUpdateUrlParams(url: string, params: Record<string, string>): string {
  try {
    // Create a URL object
    const urlObj = new URL(url);

    // Loop through each parameter in the params object
    for (const [key, value] of Object.entries(params)) {
      // Set the parameter in the URL's search parameters
      urlObj.searchParams.set(key, value);
    }

    // Return the updated URL as a string
    return urlObj.toString();
  } catch (error) {
    console.error('Invalid URL provided:', error);
    throw new Error('Invalid URL');
  }
}