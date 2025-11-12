

HTML样板代码
```html
//声明：告诉浏览器正在使用哪个版本的HTML
<!DOCTYPE html>		
//包裹所有内容，并指定页面的语言
<html lang="en">
//head ----=包含重要的幕后信息
  <head>
//meta ----> 包含网站的元数据，如字符编码等详细信息
    <meta charset="utf-8" />
    <meta
       name="viewport"
       content="width=device-width, initial-scale=1.0" />
//网站标题
    <title>freeCodeCamp</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
//代码主体，放置所有内容
  <body>
  </body>
</html>
```

注释：
```html
<!-- 注释内容 -->
```
标签：
<h1>一级标签</h1>
<h2>二级标签</h2>...到6为止


文本：
<p>这是一个段落标签</p>
b 是加粗，i是斜体，u是下划线，s是删除线
ul是无序列表，其中元素两边加li
ol是有序列表

图像：
```html
<img src = "文件路径",alt = "提示信息">
```


表格：
table是列表，表格的边框，<table border = "数字（可以是1，2，3，4，5，6）">
其中，border是table中的属性，属性的用法：\<开始标签 属性名="属性值"\>
既有行，又有列，用tr表示
其中：行中数据为td,列中标题是th

属性：
1.属性的基本语法：
2.每个HTML元素可以具有不同的属性：
<p id = "describe" class = "section"> </p>
<a href = "https://www.baidu.com">  </a>

3.属性名称不区分大小写，属性值对大小写敏感
<img src = "图片位置路径" alt = "">
4.适用于大多数HTML元素的属性：
class：为HTML元素定义一个或多个类名（类名从样式文件中引入）  
id ：定义元素唯一的id
style：规定元素的行内样式

链接：
```html
<a href = "链接地址" target = "_Blank">提示内容</a>
//在空白标签页打开链接
```

复选框：
```html
<input type = "checkbox" checked>
//type指定输入框类型
//checked本身就是一个属性
<input type = "text" disable>
//text --- > 文本框
//disable ---->表明不允许输入，删除即可输入
```

Link 
```html
//link用于链接到外部资源，如样式表，网站图标,放在head中
<link rel = "stylesheet" href = "./styles.css" />
//ref ----  >指定链接资源与HEML文档之间的关系
//href ---->指定外部资源的URL位置
//其中最后的 ‘/’---->表示计算机在当前文件夹或目录中查找文件styles.css‘
//连接到图标
<link rel = "icon" href = "favicon.ico" />
//网站图标（favicon）是“favourite icon”（最喜欢的图标）的缩写
//它是一个通常显示在浏览器标签页网站标题旁边的小图标

```
