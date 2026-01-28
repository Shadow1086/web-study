# HTML学习

## 1. HTML样板代码

```html
<!-- 声明：告诉浏览器正在使用哪个版本的HTML -->
<!DOCTYPE html>
<!-- 包裹所有内容，并指定页面的语言 -->
<html lang="en">
<!-- head包含重要的幕后信息 -->
<head>
    <!-- meta包含网站的元数据，如字符编码等详细信息 -->
    <meta charset="utf-8"/>
    <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"/>
    <!-- 网站标题 -->
    <title>freeCodeCamp</title>
    <link rel="stylesheet" href="./styles.css"/>
</head>
<!-- 代码主体，放置所有内容 -->
<body>
</body>
</html>
```

## 2. meta元信息

```html
<!--  配置字符编码 -->
<meta charset="utf-8"/>
<!--  配置针对于IE浏览器的兼容模式 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<!--  配置针对于移动设备的响应式布局 -->
<meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"/>
<!--  配置网站的关键词 -->
<meta name="keywords" content="8-12个以英文逗号隔开的单词/短语">
<!--  配置网站的描述 -->
<meta name="description" content="80字以内的网站描述">
<meta name="robots" content="可选值见下">

<!--  自动刷新,5秒后跳转到https://www.baidu.com -->
<meta http-equiv="refresh" content="5;url=https://www.baidu.com">

<!--  
  index   允许搜索爬虫索引此页面
  noindex 不允许搜索爬虫索引此页面
  follow  允许搜索爬虫跟随此页面的链接
  nofollow 不允许搜索爬虫跟随此页面的链接
  all     允许搜索爬虫索引此页面并跟随此页面的链接
  none    不允许搜索爬虫索引此页面并跟随此页面的链接
  noarchive 不允许搜索爬虫缓存此页面
  nosnippet 不允许搜索爬虫显示此页面的摘要
  noimageindex 不允许搜索爬虫索引此页面的图片
-->
```

**如何使用PC端浏览器模拟移动端浏览器**: 使用开发者模式，点击手机图标

## 3. 注释

```html
<!-- 注释内容 -->
```

## 4. 属性

### 4.1 基本语法

每个 HTML 元素可以具有不同的属性：

```html
<p id="describe" class="section"></p>
<a href="https://www.baidu.com"></a>
```

### 4.2 属性规则

- 属性名称不区分大小写
- 属性值对大小写敏感

### 4.3 常用属性

```html
<img src="图片位置路径" alt="">
```

- `class` - 为 HTML 元素定义一个或多个类名（类名从样式文件中引入）
- `id` - 定义元素唯一的 id
- `style` - 规定元素的行内样式

## 5. 标题标签

```html
<h1>一级标签</h1>
<h2>二级标签</h2>
<!-- ...到 h6 为止 -->
```

## 6. 文本标签

### 6.1 段落和换行

```html
<p>这是一个段落标签</p>
<!-- 换行：<br>    水平线：<hr>  -->
<br>
<hr>
```

### 6.2 文本样式

- `<b>` 是加粗
- `<i>` 是斜体
- `<u>` 是下划线
- `<s>` 是删除线

## 7. 列表

- `<ul>` 是无序列表，其中元素用 `<li>` 包裹
- `<ol>` 是有序列表

## 8. 表格

### 8.1 基本概念

- `<table>` 用于创建表格，`border` 属性设置边框宽度（可以是 1-6）
- 属性用法：`<开始标签 属性名="属性值">`
- `<tr>` 表示表格行，table row
- `<td>` 表示行中的数据单元格 table data
- `<th>` 表示列的标题单元格. table head

### 8.2 表格结构标签

用表格结构标签把内容划分区域，让表格结构更清晰，语义更清晰

| 标签          | 作用   |
|-------------|------|
| `<thead>`   | 表格头部 |
| `<tbody>`   | 表格主体 |
| `<tfoot>`   | 表格底部 |
| `<caption>` | 表格标题 |

### 8.3 合并单元格

- **跨列合并**：保留最左单元格，添加 `colspan` 属性（值为合并的单元格数量）
- **跨行合并**：保留最上单元格，添加 `rowspan` 属性（值为合并的单元格数量）

```html

<td colspan="2">合并两列</td>
<td rowspan="2">合并两行</td>
```

### 8.4 示例

```html

<table border="1">
    <thead>
    <tr>
        <th>列表题1</th>
        <th>列标题2</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>表格数据1</td>
        <td>表格数据2</td>
    </tr>
    <tr>
        <td>表格数据11</td>
        <td>表格数据22</td>
    </tr>
    </tbody>
</table>
```

效果：
![][image-1]

## 9. 多媒体

### 9.1 图像

```html
<img src="文件路径" alt="提示信息" width="" height="">
<!-- width设置图片的宽度，height设置图片的高度 -->
```

### 9.2 音频

```html

<audio src="音频URL"> 音频</audio>
```

| 属性         | 作用       | 说明                                                                                                                               |
|------------|----------|----------------------------------------------------------------------------------------------------------------------------------|
| `src`      | 音频URL    | 支持格式：MP3、Ogg、Wav                                                                                                                 |
| `controls` | 显示音频控制面板 | 布尔属性                                                                                                                             |
| `loop`     | 循环播放     | 布尔属性                                                                                                                             |
| `autoplay` | 自动播放     | 浏览器一般会禁用自动播放功能                                                                                                                   |
| `muted`    | 音频静音     | 布尔属性                                                                                                                             |
| `preload`  | 音频预加载    | 可选值：`auto` / `metadata` / `none`<br>如果使用 `autoplay`，则忽略该属性<br>`none`：不预加载音频<br>`metadata`：仅预先获取音频的元数据（例如长度）<br>`auto`：可以下载整个音频文件 |

### 9.3 视频

```html

<video src="视频URL"></video>
```

| 属性                 | 作用     | 说明                                                                                                                               |
|--------------------|--------|----------------------------------------------------------------------------------------------------------------------------------|
| `src`              | 视频URL  | 视频文件路径                                                                                                                           |
| `controls`         | 视频控制面板 | 布尔属性                                                                                                                             |
| `loop`             | 循环播放   | 布尔属性                                                                                                                             |
| `muted`            | 静音播放   | 布尔属性                                                                                                                             |
| `autoplay`         | 自动播放   | 必须搭配 `muted` 才能自动播放                                                                                                              |
| `width` / `height` | 改变视频尺寸 | 设置宽度和高度                                                                                                                          |
| `poster`           | 视频封面   | URL地址，设置视频封面图片                                                                                                                   |
| `preload`          | 视频预加载  | 可选值：`auto` / `metadata` / `none`<br>如果使用 `autoplay`，则忽略该属性<br>`none`：不预加载视频<br>`metadata`：仅预先获取视频的元数据（例如长度）<br>`auto`：可以下载整个视频文件 |

## 10. 链接

```html
<a href="链接地址" target="_blank">提示内容</a>
<!-- 在空白标签页打开链接 -->
```

## 11. 外部资源链接（Link）

```html
<!-- link用于链接到外部资源，如样式表，网站图标,放在head中 -->
<link rel="stylesheet" href="./styles.css"/>
<!-- rel指定链接资源与HTML文档之间的关系 -->
<!-- href指定外部资源的URL位置 -->
<!-- 其中最后的 '/'表示计算机在当前文件夹或目录中查找文件styles.css -->
<!-- 连接到图标 -->
<link rel="icon" href="favicon.ico"/>
<!-- 网站图标（favicon）是"favourite icon"（最喜欢的图标）的缩写 -->
<!-- 它是一个通常显示在浏览器标签页网站标题旁边的小图标 -->
```

## 12. HTML区块-块元素和行内元素

### 12.1 块元素 - div标签

```html

<div class="nav"> <!-- div标签用于创建区块，nav是导航区块，也是这个区块的名称 -->
    <a href=""> 链接1 <!-- a标签用于创建超链接 --></a>
</div>
```

在想好了div标签属于什么类的时候，就可以通过div.类名的方式快速创建这个区块

### 12.2 行内元素 - span标签

```html
<span>包装文本，属于行内元素，以便于使用CSS等样式来修饰所包含的文本</span>
```

## 13. 表单

### 13.1 input 元素

#### 13.1.1 基本用法

```html
<input type="text" placeholder="请输入内容"><br>  <!-- placeholder属性用于设置输入框的提示文本 -->
<input type="text" value="请输入内容"><br>  <!-- value属性用于设置输入框的默认值 -->
<input type="radio" name="gender">男      <!-- radio单选框,想要实现单选，那么name属性必须相同 -->
<input type="radio" name="gender">女
```

#### 13.1.2 input 属性详解

| 属性            | 作用                     | 例子                                                                     |
|---------------|------------------------|------------------------------------------------------------------------|
| `type`        | 输入框类型                  | `type="text"` / `type="password"` / `type="radio"` / `type="checkbox"` |
| `id`          | 元素唯一标识，用于 `<label>` 关联 | `id="name"`                                                            |
| `name`        | 表单提交时的字段名              | `name="gender"`                                                        |
| `placeholder` | 输入框的提示文本               | `placeholder="请输入真实姓名"`                                                |
| `value`       | 元素的值或按钮显示文本            | `value="免费注册"`                                                         |
| `required`    | 表示该字段必填                | `required`                                                             |
| `disabled`    | 禁用该输入框                 | `disabled`                                                             |
| `checked`     | 单选/复选框默认选中             | `checked`                                                              |
| `multiple`    | 允许多选（用于 `file` 类型）     | `multiple`                                                             |

#### 13.1.3 type 常见值

- `text` - 文本输入框
- `password` - 密码输入框（输入内容隐藏）
- `radio` - 单选按钮（同 `name` 的只能选一个）
- `checkbox` - 复选框（可选多个）
- `button` - 普通按钮
- `submit` - 提交按钮
- `email` - 邮箱输入框
- `number` - 数字输入框
- `file` - 文件上传

#### 13.1.4 和CSS

注意：对于radio和checkbox来说，背景色和颜色是不可改变的

### 13.2 textarea 元素

```html
<textarea placeholder="请输入文本"></textarea>
```

用于输入多行文本，右下角可以拖拽尺寸，用 CSS 设置具体尺寸

### 13.3 select 元素

#### 13.3.1 select 属性详解

| 属性         | 作用                     | 例子            |
|------------|------------------------|---------------|
| `id`       | 元素唯一标识，用于 `<label>` 关联 | `id="city"`   |
| `name`     | 表单提交时的字段名              | `name="city"` |
| `multiple` | 允许多选                   | `multiple`    |
| `disabled` | 禁用下拉框                  | `disabled`    |
| `size`     | 显示的选项数量                | `size="3"`    |

#### 13.3.2 option 属性（select 内部的选项）

| 属性         | 作用            | 例子                |
|------------|---------------|-------------------|
| `value`    | 选项的值（提交表单时发送） | `value="beijing"` |
| `selected` | 默认选中该选项       | `selected`        |
| `disabled` | 禁用该选项         | `disabled`        |

### 13.4 button 元素

```html

<button type="submit">提交</button>
<button type="reset">重置</button>
<button type="button">普通按钮</button>
```

| type 值   | 作用                             |
|----------|--------------------------------|
| `submit` | 提交按钮，点击后可以移交数据到后台（默认功能）        |
| `reset`  | 重置按钮，点击后将表单控件恢复默认值             |
| `button` | 普通按钮，默认没有功能，一般配合 JavaScript 使用 |

### 13.5 实际例子

```html
<!-- input 例子 -->
<label for="name">姓名：</label>
<input type="text" id="name" name="name" placeholder="请输入姓名"/>

<!-- select 例子 -->
<label for="city">城市：</label>
<select id="city" name="city">
    <option value="beijing" selected>北京</option>
    <option value="shanghai">上海</option>
    <option value="shenzhen">深圳</option>
</select>

<!-- textarea 例子 -->
<label for="desc">描述：</label>
<textarea id="desc" name="desc" placeholder="请输入描述"></textarea>

<!-- button 例子 -->
<button type="submit">提交</button>
```

### 13.6 关键点

- **`id` 和 `name` 的区别**：
    - `id` 用于 HTML/CSS/JavaScript 标识元素
    - `name` 用于表单提交时发送数据到服务器

- **`<label>` 关联**：
    - `<label for="city">` 的 `for` 属性值必须等于 `<select id="city">` 的 `id` 值
    - 这样点击标签文本也能选中表单元素

## 14. 字符实体

在网页中显示预留字符，在代码中敲空格，网页只识别一个

| 字符  | 实体代码     | 说明    |
|-----|----------|-------|
| 空格  | `&nbsp;` | 不换行空格 |
| `<` | `&lt;`   | 小于号   |
| `>` | `&gt;`   | 大于号   |

```html
乾坤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;未定  <br>
5&lt;7      <br>
7&gt;5
```

# HTML5

## 新增的语义标签

| 标签名       | 语义                            |
|-----------|-------------------------------|
| `header`  | 整个页面/部分区域的头部                  |
| `footer`  | 整个页面/部分区域的底部                  |
| `nav`     | 导航                            |
| `article` | 文章、帖子、杂志、新闻、博客、评论等            |
| `section` | 页面中的某段文字/文章中的某段文字，里面文字通常会包含标题 |
| `aside`   | 侧边栏                           |
| `main`    | 文档的主要内容，几乎不用                  |
| `hgroup`  | 包括连续的标题（已被废弃）                 |

### 关于 article 和 section

1. `article` 里面可以有多个 `section`
2. `section` 强调的是分段或分块，当想将一块内容分成几段的时候，可以使用 `section` 元素
3. `article` 比 `section` 更强调独立性，一块内容如果比较独立、比较完整，应该使用 `article` 元素

## 新增的状态标签

```html

<meter max="100" min="0" value="90" low="20" high="80" optimum="90"></meter>

<progress max="100" value="20"></progress>
```

### meter 标签属性

| 属性        | 说明                                                                                               |
|-----------|--------------------------------------------------------------------------------------------------|
| `max`     | 容量最大值                                                                                            |
| `min`     | 容量最小值                                                                                            |
| `value`   | 当前值                                                                                              |
| `low`     | 达到此值时变为低状态，会变为黄色（警告）                                                                             |
| `high`    | 达到此值时变为高状态，会变为黄色（警告）                                                                             |
| `optimum` | 达到此值时会恢复为正常，变为绿色<br>当添加 `optimum` 时：<br>`low` 以下变为红色<br>`low-high` 之间：黄色<br>`high-optimum` 之间：绿色 |

### progress 标签属性

| 属性      | 说明   |
|---------|------|
| `max`   | 最大值  |
| `value` | 当前进度 |

## 新增的列表标签

| 标签名        | 语义                           | 单/双标签 |
|------------|------------------------------|-------|
| `datalist` | 用于搜索框的关键字提示                  | 双标签   |
| `details`  | 用于展示问题和答案，或对专有名词进行解释         | 双标签   |
| `summary`  | 写在 `details` 的里面，用于指定问题或专有名词 | 双标签   |

```html

<input list="mydata" type="text">
<datalist id="mydata">
    <option value="周冬雨">周冬雨</option>
    <option value="周杰伦">周杰伦</option>
    <option value="温兆伦">温兆伦</option>
    <option value="马冬梅">马冬梅</option>
</datalist>
<details>
    <summary>如何走上人生巅峰？</summary>
    <p>一步一步走呗</p>
</details>
```

## 新增文本标签

### 文本拼音

| 标签名    | 语义                       | 单/双标签 |
|--------|--------------------------|-------|
| `ruby` | 包裹需要注音的文字                | 双标签   |
| `rt`   | 写注音，`rt` 标签写在 `ruby` 的里面 | 双标签   |

```html

<ruby>
    <span>魑魅魍魉</span>
    <rt>chi mei wang liang</rt>
</ruby>
```

### 文本标记

| 标签名    | 语义 | 单/双标签 |
|--------|----|-------|
| `mark` | 标记 | 双标签   |

**用途**：用来标记关键词

## 新增的表单相关标签

### 新增的表单控件属性

| 属性名            | 功能                                                                     |
|----------------|------------------------------------------------------------------------|
| `placeholder`  | 提示文字（注意：不是默认值，`value` 是默认值），适用于文字输入类的表单控件                              |
| `required`     | 表示该输入项必填，适用于除按钮外其他表单控件                                                 |
| `autofocus`    | 自动获取焦点，适用于所有表单控件                                                       |
| `autocomplete` | 自动获取历史填写记录达到自动填写，可以设置为 `on` 或 `off`，适用于文字输入类的表单控件<br>注意：密码输入框、多行输入框不可用 |
| `pattern`      | 填写正则表达式，适用于文本输入类表单控件<br>注意：多行输入不可用，且空的输入框不会验证，往往与 `required` 配合        |

**说明**：`required` 在单选框中代表着必须选择两者其中一个，但是用于多选框时代表着必须选择有 `required` 属性的选项

### input 新增属性

| 属性名              | 功能                                                                       |
|------------------|--------------------------------------------------------------------------|
| `email`          | 邮箱类型的输入框，表单提交时会验证格式，输入为空则不验证格式                                           |
| `url`            | URL 类型的输入框，表单提交时会验证格式，输入为空则不验证格式                                         |
| `number`         | 数字类型的输入框，表单提交时会验证格式，输入为空则不验证格式<br>可配合属性：`step`（步长）、`max`（最大值）、`min`（最小值） |
| `search`         | 搜索类型的输入框，表单提交时不会验证格式                                                     |
| `tel`            | 电话类型的输入框，表单提交时不会验证格式，在移动端使用时会唤起数字键盘                                      |
| `range`          | 范围选择框，默认值为 50，表单提交时不会验证格式                                                |
| `color`          | 颜色选择框，默认值为黑色，表单提交时不会验证格式                                                 |
| `date`           | 日期选择框，默认值为空，表单提交时不会验证格式                                                  |
| `month`          | 月份选择框，默认值为空，表单提交时不会验证格式                                                  |
| `week`           | 周选择框，默认值为空，表单提交时不会验证格式                                                   |
| `time`           | 时间选择框，默认值为空，表单提交时不会验证格式                                                  |
| `datetime-local` | 日期+时间选择框，默认值为空，表单提交时不会验证格式                                               |

### form 标签新增属性

| 属性名          | 功能                                |
|--------------|-----------------------------------|
| `novalidate` | 如果给 `form` 标签设置了该属性，表单提交的时候不再进行验证 |

## 新增的全局属性

| 属性名               | 功能                                                   |
|-------------------|------------------------------------------------------|
| `contenteditable` | 表示元素是否可被用户编辑<br>可选值：<br>`true`：可编辑<br>`false`：不可编辑   |
| `draggable`       | 表示元素可以被拖动<br>可选值：<br>`true`：可拖动<br>`false`：不可拖动      |
| `hidden`          | 隐藏元素                                                 |
| `spellcheck`      | 规定是否对元素进行拼写和语法检查<br>可选值：<br>`true`：检查<br>`false`：不检查 |
| `contextmenu`     | 规定元素的上下文菜单，在用户鼠标右键点击元素时显示                            |
| `data-*`          | 用于存储页面的私有定制数据                                        |

# 解决浏览器兼容问题：

```html
<!-- 让IE浏览器处于最有的渲染模式：edge -->
<meta content="IE=edge" http-equiv="X-UA-Compatible"/>
<!-- 针对一些国产的双核浏览器的设置，让浏览器优先使用webkit内核去渲染网页 -->
<meta content="webkit" name="render"/>
<!-- [if lt ie 9] >
    <script src=""></script>
<![endif]-->
```

拓展：

- lt 小于
- lte 小于等于
- gt 大于
- gte 大于等于
- ! 逻辑非

示例：

```html
<!--[if IE 8]>仅IE8可见<![endif]-->
<!--[if gt IE 8]>仅IE8以上可见<![endif]—> 
<!--[if lt IE 8]>仅IE8以下可见<![endif]—> 
<!--[if gte IE 8]>IE8及以上可见<![endif]—> 
<!--[if lte IE 8]>IE8及以下可见<![endif]—> 
<!--[if !IE 8]>非IE8的IE可见<![endif]-->
```

[image-1]:    https://cdn.jsdelivr.net/gh/Shadow1086/myPicture@master/uPic/uKi8ft.png
