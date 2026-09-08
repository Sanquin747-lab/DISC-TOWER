# DISC-TOWER · 磁带雨

经典电影、游戏和音乐光盘盒组成的实时三维建筑。使用 Three.js 0.180.0 与原生 HTML、CSS、JavaScript。

## 操作

- 点击光盘盒或向左拖动：抽出并翻开盒盖，进入作品菜单。
- 拖动场景空白：旋转视角。
- 滚轮：缩放。
- 上下方向键选择楼层，Enter 打开，Esc 关闭菜单。

## GitHub Pages 发布

完整静态网站位于 `docs/`，无需安装依赖或构建。

1. 打开本仓库 Settings → Pages。
2. Source 选择 **Deploy from a branch**。
3. Branch 选择 **main**，Folder 选择 **/docs**，点击 **Save**。
4. 等待 GitHub 的 Pages 部署成功后，使用 Pages 设置页提供的网址。

私有仓库需要支持私有仓库 Pages 的 GitHub 方案（例如 GitHub Pro）。如果当前使用 GitHub Free，需要自行决定是否将仓库改为公开。

## 文件

- `docs/index.html`：页面入口
- `docs/app.js`：三维模型、动画、交互和作品内容
- `docs/style.css`：界面和作品主题
- `docs/covers/` 与 `docs/covers.json`：封面资源和来源记录
- `docs/three.module.js`、`docs/three.core.js`：本地 Three.js 模块
- `docs/THREE-LICENSE.txt`：Three.js MIT 许可证

## 资源说明

电影海报、游戏封面与专辑封面的权利归各自权利人所有，来源记录在 `docs/covers.json`。盒脊排版与部分封套使用本站的档案设计；《黑暗之魂》当前使用文字封套。

GitHub Pages 官方配置说明：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
