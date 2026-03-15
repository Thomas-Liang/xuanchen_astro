# 免费资源分享平台

一个基于 Astro 构建的免费资源分享网站。

## 技术栈

- **框架**: Astro
- **数据库**: SQLite + Drizzle ORM
- **部署**: GitHub Pages

## 页面功能

| 页面 | 路径 | 描述 |
|------|------|------|
| 首页 | `/` | 网站首页 |
| 全部资源 | `/resources` | 资源列表 |
| 网盘资源 | `/cloud-storage` | 网盘资源 |
| 工具集合 | `/tools` | 实用工具 |
| 项目展示 | `/projects` | 开源项目 |
| 学习资料 | `/learning` | 学习资源 |
| 管理后台 | `/admin` | 内容管理 |

## 开发

```sh
npm install
npm run dev
```

## 命令

| 命令 | 作用 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览构建结果 |

## 部署

自动部署到 GitHub Pages，通过 GitHub Actions 实现。
