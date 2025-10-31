# 在 Cursor 编辑器内部打开浏览器

## 已安装的插件

### 1. Browser Preview (`auchenberg.vscode-browser-preview`)

- ✅ **推荐使用** - 在编辑器内部显示浏览器预览
- 支持 Chrome DevTools
- 无需打开外部浏览器

### 2. Live Server (`ritwickdey.liveserver`)

- 启动本地开发服务器
- ✅ **已配置为自动打开当前文件**
- ✅ **已配置为使用 Browser Preview 打开**

### 3. Live Preview (`ms-vscode.live-server`)

- Microsoft 官方插件
- ✅ **自动打开当前编辑的文件**
- ✅ **在编辑器内部预览，无需外部浏览器**

## 🚀 使用方法（推荐顺序）

### ⭐ 方法 1：使用 Live Preview - 一键预览当前文件（最简单！）

**这是最简单的方法，自动预览当前打开的文件，无需手动输入任何路径！**

1. **打开 HTML 文件**

   - 在编辑器中打开任意 HTML 文件（如 `08-新闻网页案例.html`）

2. **一键预览**

   - 按 `Cmd+Shift+P`（Mac）或 `Ctrl+Shift+P`（Windows）
   - 输入 `Live Preview: Show Preview` 并回车
   - **或者**：右键点击 HTML 文件 → 选择 `Show Preview`

3. **完成！**
   - ✅ 预览会自动在编辑器右侧打开
   - ✅ 自动显示当前打开的文件
   - ✅ 每次保存文件后自动刷新
   - ✅ **无需手动输入任何路径！**

### 🔚 如何退出 Live Preview

**方法 1：关闭预览标签页（最简单）**

- 点击预览窗口标签页右上角的 **`×`** 按钮
- 或者按 `Cmd+W`（Mac）或 `Ctrl+W`（Windows）关闭当前标签页

**方法 2：使用命令面板**

- 按 `Cmd+Shift+P`（Mac）或 `Ctrl+Shift+P`（Windows）
- 输入 `Live Preview: Stop` 并回车

**方法 3：关闭编辑器组**

- 如果预览在单独的编辑器组中，可以关闭整个编辑器组

### 方法 2：使用 Live Server + Browser Preview（自动打开当前文件）

**Live Server 已配置为自动打开当前文件！**

1. **打开 HTML 文件**

   - 在编辑器中打开任意 HTML 文件

2. **启动 Live Server**

   - 右键点击 HTML 文件 → 选择 "Open with Live Server"
   - 或者点击底部状态栏的 "Go Live" 按钮

3. **自动打开**
   - ✅ Live Server 会自动在 Browser Preview 中打开当前文件
   - ✅ 无需手动输入路径
   - ✅ 支持 DevTools：右键点击预览页面 → "Open DevTools"

## 快捷键

### 打开预览

- **`Cmd+Shift+P`**（Mac）或 **`Ctrl+Shift+P`**（Windows）：打开命令面板
  - 输入 `Live Preview: Show Preview` - 自动打开当前文件预览
  - 输入 `Browser Preview: Open Preview` - 手动打开 Browser Preview
- **右键点击 HTML 文件** → **"Open with Live Server"** - 最快的方式！

### 关闭预览

- **`Cmd+W`**（Mac）或 **`Ctrl+W`**（Windows）：关闭当前预览标签页
- **`Cmd+Shift+P`** → 输入 `Live Preview: Stop` - 停止预览服务器

## 🎯 推荐工作流程

### ⭐ 方式 1：Live Preview（最快最简单）

1. 打开 HTML 文件
2. 按 `Cmd+Shift+P` → 输入 `Live Preview: Show Preview`
3. ✅ 完成！当前文件自动预览，无需任何额外操作

### 方式 2：Live Server（适合需要服务器功能时）

1. 打开 HTML 文件
2. 右键点击文件 → **"Open with Live Server"**
3. ✅ 完成！当前文件会自动在 Browser Preview 中打开

**两种方式都无需每次手动输入路径，完全自动化！**

## 配置说明

### Browser Preview 设置

- 默认 URL：`http://localhost:5500`
- Live Server 已配置为使用 Browser Preview 作为默认浏览器

### Live Server 设置

- 端口：5500
- 默认浏览器：Browser Preview（编辑器内部）

## 注意事项

1. **首次使用 Browser Preview**

   - 可能需要下载 Chrome Headless，请耐心等待
   - 如果遇到问题，可以尝试重启 Cursor

2. **文件路径**

   - 直接预览本地 HTML 文件需要使用 `file://` 协议
   - 推荐使用 Live Server 启动本地服务器后预览

3. **DevTools**
   - Browser Preview 支持右键菜单打开 DevTools
   - 可以在编辑器内部进行调试和检查元素

## 故障排除

如果 Browser Preview 无法打开：

1. 检查 Live Server 是否正在运行
2. 确认端口 5500 没有被占用
3. 尝试重启 Cursor 编辑器
4. 检查插件是否正确安装
