---
title: 配置sentry
order: 7
toc: content
group:
  title: 基础
  order: 3
nav:
  title: 指南
  order: 1
---

# 配置sentry

发布时，需要配置 `Sentry`

## 配置 Sentry

```ts | pure
import * as Sentry from '@sentry/react';
import { VITE_BUILD_ENV } from '@/utils/env';
import { name as projectName, version } from '../package.json';

// Sentry Project ☞ Client Keys DSN
// https://websentry.xxx.com/settings/xxx/projects/
const CLIENT_KEY = '';

/**
 * Sentry
 *  - test/production 均上报，方便提早发现问题。
 *  - Sentry React: https://docs.sentry.io/platforms/javascript/guides/react/
 */
Sentry.init({
  dsn: CLIENT_KEY, // Client Keys DSN
  environment: VITE_BUILD_ENV, // 区分上报环境
  sampleRate: 0.1,
  release: version,
});
```
