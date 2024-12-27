---
title: 唤端
order: 3
toc: content
group:
  title: 移动端特有
  order: 4
nav:
  title: 指南
  order: 1
---

# 唤端

统一使用 `landing-common-module` 模块的 [LandingOpenApp](xxx/landing-open-app) 组件进行站外唤端

## 安装依赖

```bash
yarn add landing-common-module
```

## 使用

```tsx | pure
import { LandingOpenApp } from 'landing-common-module';

export default () => {
  return (
    <LandingOpenApp cid="xxx" iting="iting://open?msg_type=14&url=xxx" ready>
      <button>打开喜马App</button>
    </LandingOpenApp>
  );
};
```

[参考文档](xxx/landing-open-app)