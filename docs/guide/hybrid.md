---
title: sdk
order: 1
toc: content
group:
  title: 移动端特有
  order: 4
nav:
  title: 指南
  order: 1
---

# sdk

在 `src/utils/hybrid.ts` 文件中，提供了 sdk方法，用于调用客户端能力

## 封装native方法

```ts
export const hybridShell = (
  api: string,
  config?: {
    [key: string]: any;
  }
): any => {
  if (window?.ly?.invokeApp) {
    window.ly.invokeApp(api, {
      ...(config || {})
    });
  }
};
```

## 加载jssdk

```ts
export const loadJsSdk = async () => {
  // 站内
  if (platformType === 'iting') {
    await loadScript(XIMA_JSSDK_SCRIPT);
  } else if (platformType === 'wechat') {
    // 微信
    await loadScript(WECHAT_JSSDK_SCRIPT);
  }
};
```

## 注册微信sdk

```ts
export const registerWechatSdk = async () => {
  if (platformType === 'wechat') {
    // 微信
    const data = await queryWechatJssdk();
    const signature = {
      ...data,
      jsApiList: WECHAT_JSSDK_APIS,
      openTagList: WECHAT_OPENTAGLIST
    };
    window.wx.config(signature);
  }
};
```

## 微信sdk-ready

```ts
export const waitWechatReady = async (cb: () => void) => {
  await registerWechatSdk();
  window?.wx?.ready(() => cb?.());
}
```
