# CSS 学习

## 1. 行内样式

写在标签的 style 属性中，又称内联样式

语法：

```html
<h1 style="color: red; font-size: 30px;">欢迎</h1>
```

缺点：

1. 代码冗余
2. 不利于维护
3. 不利于SEO

## 2. 内部样式表

说明：将样式写在html文件中，将所有的CSS代码提取出来，单独放在style标签中

格式：

```html
<style>
  h1 {
    color: red;
    font-size: 30px;
  }
</style>
```

注意点：

1. style标签理论上可以放在HTML文档中的任何地方，但一般都放在head标签中
2. 此种写法：样式可以复用，利于维护，代码结构清晰

存在的问题：

1. 并未实现：结构与样式之间的完全分离
2. 多个HTML页面无法复用样式

## 3. 外部样式表

说明：将所有的CSS代码提取出来，单独放在一个CSS文件中，在HTML文件中通过link标签引入，如下：

格式：

```html
<link rel="stylesheet" href="styles.css">
```

外部样式表：新建一个扩展名为.css的文件，将所有的CSS代码放在一个CSS文件中

```css
h1 {
  color: red;
  font-size: 30px;
}
```

注意点：

1. link标签放在head标签中
2. link标签的属性说明：
   3. rel属性值为stylesheet，表示引入的文档与当前文档之间的关系
   4. href属性值为CSS文件的路径，引入的文档来源于哪里
3. 外部样式的优点：
   6. 实现了结构与样式之间的完全分离
   7. 多个HTML页面可以复用样式，可以触发浏览器的缓存机制，提高访问速度

## 4. 样式表的优先级

优先级规则：

行内样式 \> 内部样式 = 外部样式

说明：

1. 内部样式，外部样式，这两者的优先级相同，且：后面的会覆盖前面的
2. 同一个样式表中，优先级也和编写顺序有关，且：后面的会覆盖前面的

注意：

当行内样式中没有的属性在内部/外部样式中存在，那么未声明的属性还是按照内部/外部样式表的优先级来执行

## 5. CSS语法规范

![][image-1]

备注: 选择器与声明块之间，属性名与属性值之间，均有一个空格

注释: 使用'/\* \*/'进行注释

## 6. 基本选择器

选择器包括：

1. 通配选择器
2. 元素选择器
3. 类选择器
4. ID选择器

![][image-2]

### 6.1 通配选择器

```css
* {
  color: red;
}
```

作用: 可以选中所有的HTML元素，可以用来清除样式

### 6.2 元素选择器

```css
h1 {
  color: red;
}
```

作用: 选中所有的h1元素

备注：元素选择器无法实现差异化设置，例如上面的代码中，所有的 p 元素效果都一样。

### 6.3 类选择器

作用: 通过元素的class属性值来选中元素

```css
/* 选中所有class值为speak的元素 */
.speak {
    color: red;
}
/* 选中所有class值为answer的元素 */
.answer {
    color: blue;
}
```

注意点：

1. 元素的 class 属性值不带 `.` ，但 CSS 的类选择器要带 `.`
2. class 值，是我们自定义的，按照标准：不要使用纯数字、不要使用中文、尽量使用英文与数字的组合，若由多个单词组成，使用 `-` 做连接，例如：`left-menu`，且命名要有意义，做到 "见名知意"
3. 一个元素不能写多个 class 属性，下面是错误示例：

```html
<!-- 该写法错误，元素的属性不能重复，后写的会失效 -->
<h1 class="speak" class="big">你好啊</h1>
```

1. 一个元素可以写多个 class 值（在同一个 class 属性中用空格分隔），下面是正确示例：

```html
<!-- 该写法正确，多个类名用空格分隔 -->
<h1 class="speak big">你好啊</h1>
```

### 6.4 ID选择器

作用：根据元素的 id 属性值，来精准的选中某个元素。

语法：

```css
#id {
    color: red;
}
```

举例：

```CSS
/* 选中id值为earthy的那个元素 */
#earthy {
    color: red;
    font-size: 60px;
}
```

注意：

1. id 属性值：尽量由字母、数字、下划线( \_ )、短杠( - )组成，最好以字母开头、不要包含空格、区分大小写。
2. 一个元素只能拥有一个 id 属性，多个元素的 id 属性值不能相同。
3. 一个元素可以同时拥有 id 和 class 属性。

## 7. 复合选择器

包括：

1. 交集选择器
2. 并集选择器
3. 后代选择器
4. 子元素选择器

说明：

1. 复合选择器建立在基本选择器之上，由多个基础选择器，通过不同的方式组合而成
2. 复合选择器可以在复杂结构中，快速而准确的选中元素

### 7.1 交集选择器

作用: 选中同时符合多个条件的元素

语法：

```css
/*
选择器1选择器2选择器3{
}
*/
```

举例：

```css
/* 选中类名为beauty的p元素，为此种写法用的非常多!!! */
p.beauty {
    color: red;
}

/* 选中类名包含rich和beauty的元素 */
.beauty.rich {
    color: red;
}
```

注意：

1. 有标签名，标签名必须写在前面
2. 交集选择器中不可能出现两个元素选择器，因为一个元素，不可能即是p元素又是span元素
3. 用的最多的交集选择器是：元素选择器配合类名选择器，如p.beauty

### 7.2 并集选择器

作用: 选中多个选择器对应的元素，又叫分组选择器

语法：

```css
选择器1,选择器2,选择器3{
}
```

举例：

```css
.rich,
.beauty,
.dog,
.pig {
    font-size: 40px;
    background-color: rgba(204, 197, 197, 0.25);
    width: 160px;
}
```

注意：

1. 并集选择器通常竖着写
2. 任何形式的选择器都可以作为并集选择器的一部分
3. 并集选择器通常用于集体声明，可以缩小样式表的体积

### 7.3 后代选择器

作用: 选中指定元素中，符合要求的后代元素

语法：

```css
选择器1 选择器2 选择器3 {}
```

说明：先写祖先，再写后代。选择器之间，用空格隔开，空格理解为：'xxx中的'就是后代的意思

举例：

```css
/* 选中ul中的所有li */
ul li {
  color: red;
}

/* 选中ul中所有li中的a */
ul li a {
  color: orange;
}

/* 选中类名为subject元素中的所有li */
.subject li {
  color: blue;
}

/* 选中类名为subject元素中的所有类名为front-end的li */
.subject li.front-end {
  color: blue;
}
```

注意：

1. 后代选择器，最终选择的是后代，不选中祖先
2. 儿子，孙子，重孙子全是后代
3. 结构一定要符合HTML嵌套要求，例如：不能p中写h1～h6

### 7.4 子元素选择器（子代选择器）

作用: 选中指定元素中，符合要求的子元素（先写父，再写子）

语法：

```css
选择器1>选择器2>选择器3{}
```

举例：

```HTML
<style>
  div>a {
    color: red;
  }
</style>
<div>
  <a href="#">这是div的子元素a，会被选中</a>
  <p>
    <a href="#">这是div的孙元素a，不会被选中</a>
  </p>
</div>

<div class="persons">
  <a href="#">这是persons类的子元素a，会被选中</a>
  <span>
    <a href="#">这是persons类的孙元素a，不会被选中</a>
  </span>
</div>
```

注意：

1. 子元素选择器，最终选择的是子元素，不选中父元素
2. 子、孙子、重孙子统称为后代

区别：

1. 后代选择器，最终选择的是所有后代
2. 子元素选择器，最终选择的是子元素

举例：

```css
/* div中的子代a元素 */
div>a {
    color: red;
}

/* 类名为persons的元素中的子代a元素 */
.persons>a {
    color: red;
}
```

### 7.5 兄弟选择器

#### 7.5.1 相邻兄弟选择器

作用: 选中指定元素后，符合条件的相邻兄弟元素（所谓相邻，就是紧挨着他的下一个）

语法：

```css
选择器1+选择器2{}
```

示例：

```css
div+p {
    color: red;
}
```

#### 7.5.2 通用兄弟选择器

作用: 选中元素后，符合条件的所有兄弟元素

语法：

```css
选择器1~选择器2{}
```

示例：

```css
div~p {
    color: red;
}
```

注意：两种兄弟选择器，选择的是下面的兄弟，不选中上面的兄弟

### 7.6 属性选择器

作用: 选中属性值符合一定要求的元素

语法：

1. `[属性名]` 选中具有某个属性的元素
2. `[属性名=属性值]` 选中具有某个属性，且属性值'等于'给定值的元素
3. `[属性名^=属性值]` 选中具有某个属性，且属性值以给定值'开头'的元素
4. `[属性名$=属性值]` 选中具有某个属性，且属性值以给定值'结尾'的元素
5. `[属性名*=属性值]` 选中具有某个属性，且属性值'包含'给定值的元素

举例：

```css
/* 选中具有title属性的元素 */
div[title] {
    color: red;
}

/* 选中title属性值为atguigu的元素 */
div[title="atguigu"] {
    color: red;
}

/* 选中title属性值以a开头的元素 */
div[title^="a"] {
    color: red;
}

/* 选中title属性值以u结尾的元素 */
div[title$="u"] {
    color: red;
}

/* 选中title属性值包含g的元素 */
div[title*="g"] {
    color: red;
}
```

### 7.7 伪类选择器

伪类的概念: 像类，但并不是类，是元素的一种特殊状态，比如a标签的访问和未访问

伪类选择器的作用: 选中元素的特殊状态

#### 7.7.1 常用的动态选择器

1. `:link` 超链接未被访问的状态
2. `:visited` 超链接被访问过后的状态
3. `:hover` 鼠标悬停在元素上的状态
4. `:active` 元素激活的状态
   5. 什么是激活：按下鼠标不松开
   6. 注意：遵循LVHA的顺序，即 link → visited → hover → active
5. `:focus` 元素获得焦点的状态
   8. 表单类元素才能使用 `:focus` 伪类
   9. 当用户点击元素，触摸元素，或通过键盘的tab键等方式选择元素时，就是获得焦点

#### 7.7.2 结构伪类

常用的：

1. `:first-child` 所有兄弟元素中的第一个
2. `:last-child` 所有兄弟元素中的最后一个
3. `:nth-child(n)` 所有兄弟元素中的第 n 个
4. `:first-of-type` 所有同类型兄弟元素中的第一个
5. `:last-of-type` 所有同类型兄弟元素中的最后一个
6. `:nth-of-type(n)` 所有同类型兄弟元素中的第 n 个

关于 n 的值：必须是 `an+b` 的形式

1. `0` 或 `1~正无穷的整数`：选中对应序号的子元素
2. `2n` 或 `even`：选中序号为偶数的子元素
3. `2n+1` 或 `odd`：选中序号为奇数的子元素
4. `-n+3`：选中的是前 3 个

了解即可：

1. `:nth-last-child(n)` 所有兄弟元素中的倒数第 n 个
2. `:nth-last-of-type(n)` 所有同类型兄弟元素中的倒数第 n 个
3. `:only-child` 选择没有兄弟的元素（独生子女）
4. `:only-of-type` 选择没有同类型兄弟的元素
5. `:root` 根元素
6. `:empty` 内容为空元素（空格也算内容）

#### 7.7.3 否定伪类

**说明**：`:not(选择器)` 排除满足括号中条件的元素

#### 7.7.4 UI伪类

1. `:checked` - 被选中的复选框和单选按钮
2. `:disabled` - 不可用的表单元素（即被禁用的，有 `disabled` 属性的）
3. `:enabled` - 可用的表单元素（即未被禁用，没有 `disabled` 属性）

#### 7.7.5 目标伪类

**说明**：`:target` 选中锚点指向的元素

#### 7.7.6 语言伪类

**说明**：`:lang()` 根据指定的语言选择元素（本质是看 `lang` 属性的值）

### 7.8 伪元素选择器

**什么是伪元素**：很像元素，但不是元素，是元素中的一些特殊位置

**常用的伪元素**：

1. `::first-letter` - 选中元素中的第一个文字
2. `::first-line` - 选中元素中的第一行文字
3. `::selection` - 选中元素中被鼠标选择的内容
4. `::placeholder` - 选中输入框中的提示文字
5. `::before` - 在元素最开始的位置，创建一个子元素，插入内容（必须用 `content` 属性指定内容）
6. `::after` - 在元素后面的位置，创建一个子元素插入内容（必须用 `content` 属性指定内容）

### 7.9 选择器的优先级

**说明**：通过不同的选择器，选中相同的元素，并且为相同的样式名，设置不同的值，就发生了样式的冲突，到底应用哪个样式，此时就需要看优先级

**简单描述**：
行内样式 \> ID选择器 \> 类选择器 \> 元素选择器 \> 通配选择器

**详细描述**：

**权重的计算**：每个选择器都可以计算出一组权重，格式为：`(a, b, c)`

- a:`ID` 选择器的个数
- b:`类`、`伪类`、`属性` 选择器的个数
- c:`元素`/`伪元素` 选择器的个数

![][image-3]

**比较规则**：按照从左到右的顺序，依次比较大小，当前位胜出后，后面的不再对比，例如：

![][image-4]

**特殊规则**：

1. `行内样式`的权重，大于`所有选择器`。
2. `!important` 的权重，大于`行内样式`，大于`所有选择器`，权重最高！

![][image-5]

## 8. CSS三大特性

### 8.1 层叠性

**概念**：如果发生了样式的冲突，那就会根据一定的规则（选择器优先级），进行样式的层叠（覆盖）

**什么是样式冲突**：元素的同一个样式名，被设置了不同的值，这就是冲突

### 8.2 继承性

**概念**：元素会自动拥有其父元素，或其祖先元素上所设置的某些样式

**规则**：优先继承离得近的

**常见的可继承属性**：`text-??`、`font-??`、`line-??`、`color`

### 8.3 优先级

**简单描述**：`!important` \> 行内样式 \> ID选择器 \> 类选择器 \> 元素选择器 \> \* \> 继承的样式

**详细描述**：需要计算权重

**注意**：计算权重时需要注意，并集选择器的每一个部分是分开计算的

## 9. 颜色

### 9.1 颜色方法一：rgba()

**表示方式**：rgb 或 rgba

**编写方式**：使用 红、黄、蓝 这三种光的三原色进行组合

- r 表示 红色
- g 表示 绿色
- b 表示 蓝色
- a 表示 透明度

### 9.2 颜色方式二：HEX、HEXA

**原理**：HEX 的原理同与 rgb 一样，依然是通过：红、绿、蓝色 进行组合，只不过要用 6位（分成3组）来表达

**格式**：`#rrggbb`

**示例**：

```CSS
.color1 {
    color: #ff0000;
}
```

- `#0000ff` - 蓝色
- `#000000` - 黑色
- `#ffffff` - 白色

**简写规则**：

- 如果每种颜色的两位都是相同的，就可以简写：`#ff9988` 可简为 `#f98`
- 但要注意前三位简写了，那么透明度就也要简写：`#ff998866` 可简为 `#f986`

**注意**：IE 浏览器不支持 HEXA，但支持 HEX

### 9.3 颜色方式三：HSL、HSLA

**格式**：`hsl(色相, 饱和度, 亮度)`

HSL 是通过：色相、饱和度、亮度，来表示一个颜色的。

**色相**：取值范围是 0\~360 度，具体度数对应的颜色如下图：

![][image-6]

**饱和度**：取值范围是 0%\~100%（向色相中对应颜色中添加灰色，0% 全灰，100% 没有灰）

**亮度**：取值范围是 0%\~100%（0% 亮度没了，所以就是黑色；100% 亮度太强，所以就是白色）

**HSLA**：其实就是在 HSL 的基础上，添加了透明度

## 10. 常见的字体属性

### 10.1 字体大小

**属性名**：`font-size`

**作用**：控制字体的大小

**语法**：

```CSS
div { 
    font-size: 40px; }
```

### 10.2 字体族

**属性名**：`font-family`

**作用**：控制字体类型

**语法**：

```CSS
div {
    font-family: "STCaiyun","Microsoft YaHei",sans-serif;
}
```

注意：

1. 使用字体的英文名字兼容性会更好，具体的英文名可以自行查询，或在电脑的设置里去寻找。
2. 如果字体名包含空格，必须使用引号包裹起来。
3. 可以设置多个字体，按照从左到右的顺序逐个查找，找到就用，没有找到就使用后面
   的，且通常在最后写上 `serif` （衬线字体）或 `sans-serif` （非衬线字体）。
4. windows 系统中，默认的字体就是微软雅黑。

### 10.3 字体风格

**属性名**：`font-style`

**作用**：控制字体是否为斜体

**常用值**：

1. `normal` - 正常（默认值）
2. `italic` - 斜体（使用字体自带的斜体效果）
3. `oblique` - 斜体（强制倾斜产生的斜体效果）

**推荐**：实现斜体时，更推荐使用 `italic`

**语法**：

```CSS
div {
    font-style: italic;
}
```

### 10.4 字体粗细

**属性名**：`font-weight`

**作用**：控制字体的粗细

**常用值**：

1. 关键词

- `lighter` - 细
- `normal` - 正常
- `bold` - 粗
- `bolder` - 很粗（多数字体不支持）

1. 数值

- 100\~1000 且无单位，数值越大，字体越粗（或一样粗，具体得看字体设计时的精确程度）
- 100\~300 等同于 `lighter`，400\~500 等同于 `normal`，600 及以上等同于 `bold`

**语法**：

```CSS
div { 
    font-weight: bold; }
div { 
    font-weight: 600; }
```

### 10.5 字体复合写法

**属性名**：`font`（可以把上述字体样式合并成一个属性）

**作用**：将上述所有字体相关的属性复合在一起编写

**编写规则**：

1. 字体大小、字体族必须都写上
2. 字体族必须是最后一位、字体大小必须是倒数第二位
3. 各个属性间用空格隔开

**注意**：实际开发中更推荐复合写法，但这也不是绝对的，比如只想设置字体大小，那就直接用 `font-size` 属性

**示例**：

```CSS
div { 
    /*      粗细    倾斜    大小                    字体族                    */
    font: lighter italic 16px/1.5 "STCaiyun","Microsoft YaHei",sans-serif; }
```

## 11. 常见的文本属性

### 11.1 文本颜色

**属性名**：`color`

**说明**：参考第9章颜色部分

### 11.2 文本间距

**字母间距**：`letter-spacing`

**单词间距**：`word-spacing`（通过空格识别词）

**属性值**：像素（px），正值让间距增大，负值让间距缩小

**示例**：

```CSS
div { 
    letter-spacing: 2px; }
div { 
    word-spacing: 2px; }
```

### 11.3 文本修饰

**属性名**：`text-decoration`

**作用**：控制文本的各种装饰线

**可选值**：

1. `none` - 无装饰线（常用）
2. `underline` - 下划线（常用）
3. `overline` - 上划线
4. `line-through` - 删除线

**可搭配如下值使用**：

1. `dotted` - 虚线
2. `wavy` - 波浪线
3. 也可以指定颜色

**举例**：

```CSS
div { 
    text-decoration: underline dotted red; }
a { 
    text-decoration: none; }
```

### 11.4 文本缩进

**属性名**：`text-indent`

**作用**：控制文本首字母的缩进

**属性值**：CSS 中的长度单位，例如：`px`

**举例**：

```CSS
div { 
    text-indent: 2em; 
}
div { 
    text-indent: 40px; 
}
```

### 11.5 文本对齐（水平）

**属性名**：`text-align`

**作用**：控制文本的水平对齐方式

**常用值**：

1. `left` - 左对齐（默认值）
2. `right` - 右对齐
3. `center` - 居中对齐

**举例**：

```CSS
div { 
    text-align: center; 
}
div { 
    text-align: right; 
}
div { 
    text-align: left; 
}
```

### 11.6 文本的行高

**属性名**：`line-height`

**作用**：控制一行文字的高度

**可选值**：

1. `normal` - 由浏览器根据文字大小决定的一个默认值
2. 像素（`px`）
3. 数字：参考自身 `font-size` 的倍数（很常用）
4. 百分比：参考自身 `font-size` 的百分比

**备注**：由于字体设计原因，文字在一行中，并不是绝对垂直居中，若一行中都是文字，不会太影响观感

**示例**：

```CSS
div { 
    line-height: 60px; 
}
div { 
    line-height: 1.5; 
}
div { 
    line-height: 150%; 
}
```

**行高注意事项**：

1. line-height 过小会怎样？—— 文字产生重叠，且最小值是 0 ，不能为负数。
2. line-height 是可以继承的，且为了能更好的呈现文字，最好写数值。
3. line-height 和 height 是什么关系？
   - 设置了 height ，那么高度就是 height 的值。
   - 不设置 height 的时候，会根据 line-height 计算高度。

**应用场景**：

1. 对于多行文字：控制行与行之间的距离。
2. 对于单行文字：让 height 等于 line-height ，可以实现文字垂直居中。

**备注**：由于字体设计原因，靠上述办法实现的居中，并不是绝对的垂直居中，但如果一行中都是文字，不会太影响观感。

### 文本对齐-垂直

1. 顶部：无需任何属性，在垂直方向上，默认就是顶部对齐。

示例:

```CSS
.d1 {
    height: 60px;
}
```

1. 居中：对于单行文字，让 height = line-height 即可。
   - 问题：多行文字垂直居中怎么办？—— 后面我们用定位去做。

示例:

```CSS
.d1 {
    height: 60px;
    line-height: 60px;
}
```

1. 底部：对于单行文字，目前一个临时的方式：
   - 让 line-height = ( height × 2 ) - font-size - x ;x可以自己测，5，15都可以，x可以忽略
   - 备注： x 是根据字体族，动态决定的一个值。

示例:

```CSS
.d1 {
    height: 60px;
    line-height: 60px;
}
```

**问题**：垂直方向上的底部对齐，更好的解决办法是什么？—— 后面我们用定位去做。

### vertical-align

属性名： vertical-align 。
作用：用于指定同一行元素之间，或 表格单元格 内文字的 垂直对齐方式。
常用值：

1. 'baseline' （默认值）：使元素的基线与父元素的基线对齐。
2. 'top' ：使元素的顶部与其所在行的顶部对齐。
3. 'middle' ：使元素的中部与父元素的基线加上父元素字母x的一半对齐。
4. 'bottom' ：使元素的底部与其所在行的底部对齐。

特别注意： vertical-align 不能控制块元素。

## 12.列表相关属性

列表相关的属性，可以作用在 `ul`、`ol`、`li` 元素上。

| CSS 属性名               | 功能        | 属性值                                                                                                                                                                   |
| --------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `list-style-type`     | 设置列表符号    | `none` ：不显示前面的标识（很常用！）<br>`square` ：实心方块<br>`disc` ：圆形<br>`decimal` ：数字<br>`lower-roman` ：小写罗马字<br>`upper-roman` ：大写罗马字<br>`lower-alpha` ：小写字母<br>`upper-alpha` ：大写字母 |
| `list-style-position` | 设置列表符号的位置 | `inside` ：在 `li` 的里面<br>`outside` ：在 `li` 的外边                                                                                                                         |
| `list-style-image`    | 自定义列表符号样式 | `url(图片地址)`                                                                                                                                                           |
| `list-style`          | 复合属性      | 没有数量、顺序的要求                                                                                                                                                            |

## 13 表格相关的属性

### 13.1 边框相关属性（其他元素也能用）

| CSS 属性名        | 功能     | 属性值                                                                         |
| -------------- | ------ | --------------------------------------------------------------------------- |
| `border-width` | 边框宽度   | CSS 中可用的长度值                                                                 |
| `border-color` | 边框颜色   | CSS 中可用的颜色值                                                                 |
| `border-style` | 边框风格   | `none` ：默认值<br>`solid` ：实线<br>`dashed` ：虚线<br>`dotted` ：点线<br>`double` ：双实线 |
| `border`       | 边框复合属性 | 没有数量、顺序的要求                                                                  |

注意：

1. 以上 4 个边框相关的属性，其他元素也可以用，这是我们第一次遇见它们。
2. 在后面的盒子模型中，我们会详细讲解边框相关的知识。

### 13.2 表格独有属性（只有 table 标签才能使用）

| CSS 属性名           | 功能         | 属性值                                           |
| ----------------- | ---------- | --------------------------------------------- |
| `table-layout`    | 设置列宽度      | `auto` ：自动，列宽根据内容计算（默认值）<br>`fixed` ：固定列宽，平均分 |
| `border-spacing`  | 单元格间距      | CSS 中可用的长度值<br>（生效的前提：单元格边框不能合并）              |
| `border-collapse` | 合并单元格边框    | `collapse` ：合并<br>`separate` ：不合并             |
| `empty-cells`     | 隐藏没有内容的单元格 | `show` ：显示（默认）<br>`hide` ：隐藏                  |
| `caption-side`    | 设置表格标题位置   | `top` ：上面（默认值）<br>`bottom` ：在表格下面             |

## 14 CSS 背景相关的属性

| 属性名                 | 功能       | 属性值                                                                                                                                                                                                                      |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Background-color    | 设置背景颜色   | 复合CSS种颜色规范的值<br>默认背景颜色是transparent(透明)                                                                                                                                                                                   |
| Background-iamge    | 设置背景图片   | Url(图片地址)                                                                                                                                                                                                                |
| background-repeat   | 设置背景重复方式 | Repeat:重复，铺满整个元素，默认值<br>repeat-x:只在水平方向上重复<br>repeat-y:只在垂直方向上重复<br>no-repeat:不重复                                                                                                                                        |
| background-position | 设置背景图的位置 | 方式一：通过关键字设置位置<br>写两个值，用空格隔开<br>水平：left , center , right<br>垂直：top , center , bottom<br>如果只写一个值，那么另一个方向的值取center<br>方式二：通过长度指定坐标位置：<br/>以元素左上角，为坐标原点，设置图片左上角的位置。<br/>两个值，分别是 x 坐标和 y 坐标。<br/>只写一个值，会被当做 x 坐标， y 坐标取center |
| background          | 复合属性     | 没有数量和顺序要求                                                                                                                                                                                                                |

## 15 CSS鼠标属性

| CSS 属性名 | 功能        | 属性值                                                                                |
| ------- | --------- | ---------------------------------------------------------------------------------- |
| cursor  | 设置鼠标光标的样式 | pointer ：小手<br>move ：移动图标<br>text ：文字选择器<br>crosshair ：十字架<br>wait ：等待<br>help ：帮助 |

拓展：自定义鼠标样式

```java
/* 自定义鼠标光标 */
cursor: url("./arrow.png"),pointer;
```

## 16 CSS中盒子模型

### 16.1 CSS 长度单位

1. px ：像素。
2. em ：相对当前元素或其父元素的 font-size 的倍数。
3. rem ：相对根元素的font-size的大小，html标签就是根。
4. xx% ：相对其父元素计算。

### 16.2  元素的显示模式

- 块元素（block）又称：块级元素
  
  - 特点：
  
  ```
  1. 在页面中独占一行，不会与任何元素共用一行，是从上到下排列的。
  2. 默认宽度：撑满父元素。
  3. 默认高度：由内容撑开。
  4. 可以通过 CSS 设置宽高。
  ```

- 行内元素（inline）又称：内联元素
  
  - 特点:
  
  ```
  1. 在页面中不独占一行，一行中不能容纳下的行内元素，会在下一行继续从左到右排列。
  
  2. 默认宽度：由内容撑开。
  
  3. 默认高度：由内容撑开。
  4. 无法通过 CSS 设置宽高。
  ```

- 行内块元素（inline-block）又称：内联块元素
  
  - 特点：
  
  ```
  1. 在页面中不独占一行，一行中不能容纳下的行内元素，会在下一行继续从左到右排列。
  
  2. 默认宽度：由内容撑开。
  
  3. 默认高度：由内容撑开。
  
  4. 可以通过 CSS 设置宽高。
  ```

### 16.3 总结各元素的显示模式

块元素（block）

1. 主体结构标签： <html> 、 <body>
2. 排版标签： <h1> \~ <h6> 、 <hr> 、 <p> 、 <pre> 、 <div>
3. 列表标签： <ul> 、 <ol> 、 <li> 、 <dl> 、 <dt> 、 <dd>
4. 表格相关标签： <table> 、 <tbody> 、 <thead> 、 <tfoot> 、 <tr> 、

<caption>
5. <form> 与 <option>
行内元素（inline）

1. 文本标签： <br> 、 <em> 、 <strong> 、 <sup> 、 <sub> 、 <del> 、 <ins> 2. <a> 与 <label>
   行内块元素（inline-block）

2. 图片： <img>

3. 单元格： <td> 、 <th>

4. 表单控件： <input> 、 <textarea> 、 <select> 、 <button> 4. 框架标签： <iframe>

### 16.4 修改元素的显示模式

通过 CSS 中的 display 属性可以修改元素的默认显示模式，常用值如下：

| 值            | 描述            |
| ------------ | ------------- |
| none         | 元素会被隐藏。       |
| block        | 元素将作为块级元素显示。  |
| inline       | 元素将作为内联元素显示。  |
| inline-block | 元素将作为行内块元素显示。 |

### 16.5 盒子模型的组成

CSS 会把所有的 HTML 元素都看成一个盒子，所有的样式也都是基于这个盒子。

1. margin（外边距）： 盒子与外界的距离。
2. border（边框）： 盒子的边框。
3. padding（内边距）： 紧贴内容的补白区域。
4. content（内容）：元素中的文本或后代元素都是它的内容。
   图示如下：
   ![][image-7]
   盒子的大小 = content  +   左右 padding  +   左右 border 。
   注意：外边距 margin 不会影响盒子的大小，但会影响盒子的位置。

### 16.6 盒子内容区

| CSS 属性名    | 功能          | 属性值 |
| ---------- | ----------- | --- |
| width      | 设置内容区域宽度    | 长度  |
| max-width  | 设置内容区域的最大宽度 | 长度  |
| min-width  | 设置内容区域的最小宽度 | 长度  |
| height     | 设置内容区域的高度   | 长度  |
| max-height | 设置内容区域的最大高度 | 长度  |
| min-height | 设置内容区域的最小高度 | 长度  |

注意：
max-width 、 min-width 一般不与 width 一起使用。
max-height 、 min-height 一般不与 height 一起使用。

### 16.7 关于默认宽度

所谓的默认宽度，就是不设置 width 属性时，元素所呈现出来的宽度。

- **总宽度** = 父的 content — 自身的左右 margin
- **内容区的宽度** = 父的 content — 自身的左右 margin — 自身的左右 border — 自身的左右 padding

### 16.8 盒子内边距（padding）

| CSS 属性名        | 功能   | 属性值              |
| -------------- | ---- | ---------------- |
| padding-top    | 上内边距 | 长度               |
| padding-right  | 右内边距 | 长度               |
| padding-bottom | 下内边距 | 长度               |
| padding-left   | 左内边距 | 长度               |
| padding        | 复合属性 | 长度，可以设置 1 ~ 4 个值 |

#### padding 复合属性的使用规则(按照顺时针方向)

1. `padding: 10px;` - 四个方向内边距都是 10px
2. `padding: 10px 20px;` - 上 10px，左右 20px（上下、左右）
3. `padding: 10px 20px 30px;` - 上 10px，左右 20px，下 30px（上、左右、下）
4. `padding: 10px 20px 30px 40px;` - 上 10px，右 20px，下 30px，左 40px（上、右、下、左）

#### 注意点

1. padding 的值不能为负数
2. 行内元素的左右内边距是没问题的，上下内边距不能完美设置,如span
3. 块级元素、行内块元素，四个方向内边距都可以完美设置

### 16.9 盒子边框（border）

| CSS 属性名                                                                            | 功能      | 属性值                                                                          |
| ---------------------------------------------------------------------------------- | ------- | ---------------------------------------------------------------------------- |
| border-style                                                                       | 边框线风格   | 复合了四个方向的边框风格，可选值：none (默认)、solid (实线)、dashed (虚线)、dotted (点线)、double (双实线) 等 |
| border-width                                                                       | 边框线宽度   | 复合了四个方向的边框宽度，长度，默认 3px                                                       |
| border-color                                                                       | 边框线颜色   | 复合了四个方向的边框颜色，颜色，默认黑色                                                         |
| border                                                                             | 复合属性    | 值没有顺序和数量要求                                                                   |
| border-left<br>border-left-style<br>border-left-width<br>border-left-color         | 左边框相关属性 | 同上                                                                           |
| border-right<br>border-right-style<br>border-right-width<br>border-right-color     | 右边框相关属性 | 同上                                                                           |
| border-top<br>border-top-style<br>border-top-width<br>border-top-color             | 上边框相关属性 | 同上                                                                           |
| border-bottom<br>border-bottom-style<br>border-bottom-width<br>border-bottom-color | 下边框相关属性 | 同上                                                                           |

边框相关属性共 20 个。
border-style 、 border-width 、 border-color 其实也是复合属性。

### 16.10 盒子外边距_margin

| CSS 属性名       | 功能属性值                                      |
| ------------- | ------------------------------------------ |
| margin-left   | 左外边距CSS 中的长度值                              |
| margin-right  | 右外边距CSS 中的长度值                              |
| margin-top    | 上外边距CSS 中的长度值                              |
| margin-bottom | 下外边距CSS 中的长度值                              |
| margin        | 复合属性，可以写 1~4 个值，规律同 padding （顺时针）CSS 中的长度值 |

**margin 注意事项**

1. 子元素的 margin ，是参考父元素的 content 计算的。（因为是父亲的 content 中承装着子元素）
2. 上 margin 、左 margin ：影响自己的位置；下 margin 、右 margin ：影响后面兄弟元素的位置。
3. 块级元素、行内块元素，均可以完美地设置四个方向的 margin ；但行内元素，左右margin 可以完美设置，上下 margin 设置无效。
4. margin 的值也可以是 auto ，如果给一个块级元素设置左右 margin 都为 auto ，该块级元素会在父元素中水平居中。
5. margin 的值可以是负值。
   10.2 margin 塌陷问题

**什么是 margin 塌陷？**
第一个子元素的上 margin 会作用在父元素上，最后一个子元素的下 margin 会作用在父元素上。
**如何解决 margin 塌陷？**
方案一： 给父元素设置不为 0 的 padding 。
方案二： 给父元素设置宽度不为 0 的 border 。
方案三：给父元素设置 css 样式 overflow:hidden

### 16.11 margin 合并问题

**什么是 margin 合并？**
上面兄弟元素的下外边距和下面兄弟元素的上外边距会合并，取一个最大的值，而不是相加。
**如何解决 margin 塌陷？**
无需解决，布局的时候上下的兄弟元素，只给一个设置上下外边距就可以了。

## 浮动

```css
.class {
    float: left;
}
```

**浮动后元素特点：**

1. 可以和其他元素共用一行
2. 不管浮动前是什么元素，浮动后：默认宽与高都是被内容撑开的(尽可能小)，并且可以设置宽高
3. 脱离文档流
4. 不会margin合并，也不会margin塌陷，能欧完美设置四个方向的margin和padding
5. 浮动后的元素不会被当作行内块的文本处理

**浮动后的影响**

1. 因为脱离文档流，其父亲就会因为没有元素而撑不开，即父元素高度塌陷。
2. 不浮动的兄弟元素的文字将会被踢出

**解决方案：**

1. 给父元素指定高度
2. 给父元素也设置为浮动，会带来其他影响。
3. 给父元素设置overflow:hidden
4. 在所有浮动元素的最后面添加一个会计元素，并给改会计元素设置clear:both
5. 最优解：给浮动元素的父元素设置为元素，通过为元素清楚浮动，原理与四相同：

```css
.parent::afer {
    content:"";
    display:block;
    clear:both;
}
```

**布局的基本原则：**

- 在设置浮动的时候，要么全部浮动，要么全部不浮动

## 定位

### 相对定位

相对于定位之前所在位置

```css
position:relative;
left:100px;
top:100px;
```

注意：

1. left和right不能同时存在，同理top和bottom也不能同时存在
2. 相对定位对margin和浮动均没有影响，但是不推荐使用

## 绝对定位

会使元素彻底脱离文档流

- 和浮动的区别：浮动后兄弟元素的文字会被踢出，但是绝对定位会完全覆盖

```css
position:absolute;
top:10px;
left:10px;
```

注意：

1. 对于绝对定位而言，其位置相对于包含块
   - 什么是包含块
     1. 没有脱离文档流的元素，父元素就是包含块
     2. 脱离了文档流的元素，第一个开启定位的祖先元素，就是他的包含块
2. 可以与`margin`搭配，**但是注意：**
   1. 相对定位中有`left,top`时，只能写`margin-top/left`,不能写`right`和`bottom`,但是在某些浏览器中并不生效
3. 不能与浮动搭配
4. 无论是行内元素，块元素，一旦开启了绝对定位，就变成了定位元素
   - **什么是定位块？**宽高默认由内容撑开，也可以自己设置

**应用场景：**

1. 一个元素盖在另一个元素上

### 固定定位

说明：

1. 脱离文档流
2. 参照为整个浏览器窗口
3. 无论窗口怎么变，固定定位的元素永远会一直存在于界面中，并且遮挡住其他元素
4. 不能和浮动同时设置，一旦同时设置，浮动实效。
5. 固定定位的元素，也能通过margin调整位置，但不推荐

### 粘性定位

**如何设置为粘性定位**

- 给元素设置position:sticky接口实现
- 可以使用left, right,top,bottom四个属性调整位置，最常用的是top,必须存在一个

**参考点：**

1. 离他最近的一个拥有滚动机制的祖先元素，即便这个祖先不是最近的真实课滚动祖先

**特点：**

1. 不会脱离文档流，一种专门用于窗口滚动式新的定位方式
2. 最常用的是top值
3. 粘性定位和浮动可以同时设置，但不推荐
4. 粘性定位的元素也可以通过margin调整位置，但不推荐

### 定位的层级

说明：

1. 定位元素的显示层级比普通元素高，无论什么定位，显示层级都是一样的。
2. 如果位置发生重叠，默认情况是：后面的元素，会显示在前面元素之上
3. 可以通过CSS属性z-index调整元素的显示层级
4. z-index的属性值是数字，没有单位，值越大现实层级越高。
5. 只有定位的元素设置z-index才有效
6. 如果z-index值大的元素，依然没有覆盖掉z-index值小的元素，那么需要检查其包含块的层级。

### 定位的特殊应用

**注意：**

1. 发生固定定位，绝对定位后，元素都变成了定位元素，默认宽高北内容撑开，切依然可以设置宽高。
2. 发生相对定位后，元素依然是之前的显示模式。
3. 一下的特殊应用，只针对于绝对定位和固定定位的元素，不包括相对定位的元素

#### 让定位元素的宽高充满包含块

1. 块宽想与包含块一只，可以给定位元素同时设置left和right为0
2. 高度相遇包含块一致，top和bottom设置为0

#### 让定位元素在包含块中居中

- 方案一：

```css
left:0;
rught:0;
top:0;
bottom:0;
margin:auto;
```

- 方案二：

```css
left:50%;
top:50%;
margin-left:- 宽度一半;
margin-top: - 高度一半;
```

**注意：**该定位的元素必须设置宽高

## 布局

### 1. 版心

- 在PC端网页中，一般都会有一个固定宽度且水平居中的盒子，来显示网页的主要内容，这是网页的版心
- 版心的宽度一般是960~1200像素之间
- 版心可以是一个，也可以是多个

### 2. 常见单词

版心                    container

顶部导航条                topbar
页头                    header 、 page-header
导航                    nav 、 navigator 、 navbar
搜索框                    search 、 search-box
横幅、广告、宣传图        banner
主要内容                    content 、 main
侧边栏                        aside 、 sidebar
页脚                        footer 、 page-footer

### 3.重置默认样式

# CSS3

## 私有前缀

常见浏览器私有前缀

- Chrome 浏览器： -webkit

- Safari 浏览器： -webkit

- Firefox 浏览器： -moz

- Edge 浏览器： -webkit-

- 旧 Opera 浏览器：-o-

- 旧 IE 浏览器：-ms-

> 说明：在编码时不需要考虑，以后可以借助构建工具来实现

## 新增长度单位

1. rem 根元素字体大小的倍数，只与根元素字体大小有关。
2. vw 视口宽度的百分之多少     10vw 就是视口宽度的 10% 。
3. vh 视口高度的百分之多少 10vh 就是视口高度的 10% 。
4. vmax 视口宽高中大的那个的百分之多少。（了解即可）
5. vmin 视口宽高中小的那个的百分之多少。（了解即可）

## 新增颜色设置方式

新增了三种设置方式：rhba,hsl,hsla

## 新增选择器

动态伪类，目标伪类，UI伪类，结构伪类，否定伪类，伪元素

## 新增的盒子模型

### box-sizing 怪异盒模型

使用box-sizing可以设置和模型的两种属性

| 可选值         | 含义                            |
| ----------- | ----------------------------- |
| Content-box | width和height设置的是盒子内容区的大小（默认值  |
| border-box  | width和height设置的是盒子的总大小(怪异盒模型) |

#### resize

使用resize属性可以控制是否允许用户调节元素尺寸

| 值          | 含义             |
| ---------- | -------------- |
| none       | 不允许用户调整元素大小    |
| both       | 用户可以调节元素的宽度和高度 |
| horizontal | 用户可以调节元素的宽度    |
| vertical   | 用户可以调节元素的高度    |

### box-shadow盒子阴影

使用box-shadow属性为盒子添加阴影

语法：

> Box-shadow:h-shadow v-shadow blur spread color inset;

各个值的含义：

| 值        | 含义                 |
| -------- | ------------------ |
| h-shadow | 水平阴影的位置，必须填写，可以为负值 |
| v-shadow | 垂直阴影的位置，必须填写，可以为负值 |
| blur     | 可选，模糊距离            |
| spread   | 可选阴影的外延值           |
| color    | 可选，阴影的颜色           |
| inset    | 可选将外部阴影改为内部阴影      |

默认值：box-shadow:none代表没有阴影

示例：

```html
      /* 最少写两个值：水平位置。垂直问题 */
      /* box-shadow:  10px 10px; */

      /* 写三个值：水平位置 垂直问题 阴影颜色 */
      /* box-shadow: 10px 10px blue; */

      /* 写三个值：水平位置 垂直问题 阴影的模糊程度 */
      /* box-shadow: 10px 10px 20px; */
      /* 写四个值：水平位置 垂直问题 阴影的模糊程度 阴影颜色*/
      /* box-shadow: 10px 10px 20px blue; */
      /* 写五个值：水平位置 垂直问题 阴影的模糊程度 阴影的外延 阴影颜色*/
      /* box-shadow: 10px 10px 20px 0px blue; */

      /* 写六个值：水平位置 垂直问题 阴影的模糊程度 阴影的外延 阴影颜色 内阴影*/
      box-shadow: 10px 10px 20px 0px blue inset;
```

### background-origin背景起源

作用：设置背景图的原点
语法：
    - padding-box:  从padding区域开始显示背景图像 ----默认值
    - border-box:  从border区域开始显示背景图像
    - content-box:  从content区域开始显示背景图像

### background-clip背景剪切

作用：设置背景图的剪切区域
语法：
    - border-box:从border区域开始往外裁剪背景图像 --默认值
    - padding-box:从padding区域开始往外裁剪背景图像
    - content-box:从content区域开始往外裁剪背景图像
    - text：背景图只呈现在文字上，需搭配color:transparent属性才可实现
示例：

```html
/* border以外的背景图不可见，默认值 */
background-clip: border-box;

/* padding以外的背景图不可见，背景颜色也不可见 */
background-clip: padding-box;

/* content以外的背景图和背景色都不可见 */
background-clip: content-box;

/* 配合文字透明，即可实现背景图只呈现在文字上 */
background-clip: text;
```

### background-size背景大小

作用：设置背景图的尺寸
语法：

- 用长度值指定背景图片大小，不允许负值
- 用百分比指定背景图片大小，不允许负值
- auto：指定背景图片真实大小 ---默认值
- contain：将背景图片等比缩放，是背景图片的宽或高于容器的宽或高相等。再将完整背景图片包含在容器内，但是要注意：可能会造成容器里部分区域没有背景图片
- cover：将背景图片等比缩放，知道完全覆盖容器，图片会尽可能全的显示在元素上，但是要注意：背景图片又可能显示不完整。 --相对比较好的选择

示例：

```html
background-size: 200px 300px; 
background-size: 100% 100%;
background-size: contain;
background-size: cover;
```

### background 复合属性

语法：
background: <color> <image> <repeat> <position> / <size> <origin> <clip>;
说明：

- `origin`和`clip`的值如果是一样的，如果只写一个值，则`origin`和`clip`都设置为此值；如果设置了两个值，则前面的事`origin`,后面的是`clip`
- size的是必须卸载`position`值的后面，并且使用`/`分开

### 多背景图

```html
background: url("../../资源文件/background/bg-lt.png") no-repeat left top,
    url("../../资源文件/background/bg-rt.png") no-repeat right top,
    url("../../资源文件/background/bg-lb.png") no-repeat left bottom,
    url("../../资源文件/background/bg-rb.png") no-repeat right bottom;
```

## 新增边框相关属性

### 边框圆角

说明：使用border-radius属性可以设置边框圆角
示例：

```css
/* 给四个角一样的圆角 */
border-radius: 50px;
border-radius: 50%;

/* 给四个角分别设置圆角 */
border-top-left-radius: 50px;
border-top-right-radius: 50px;

/* 椭圆，100为x轴方向，200是y轴方向 */
/* 给四个角分别设置椭圆角 */
border-top-left-radius: 100px 200px;
border-top-right-radius: 50px 20px;
border-bottom-right-radius: 100px 50px;
border-bottom-left-radius: 100px 100px;

/* 复合属性，分开设置每个角的圆角，几乎不用，左上x右上x右下x左下x / 左上y右上y右下y左下y */
border-radius: 100px 50px 100px 100px / 200px 20px 50px 100px ;
```

### 边框外轮廓

说明：使用outline属性可以设置边框外轮廓
注意：

- outline-offset不能写进outline中，因为outline-offset不是outline的子属性
- outline-offset设置外轮廓于边框的距离，正负值都可以设置
示例：

```css
outline-width: 20px;
outline-color: blue;
outline-style: solid;
outline-offset: 30px;

/* 复合属性，但是注意offset不能写进outline中，因为outline-offset不是outline的子属性 */
outline: 20px solid orange;
outline-offset: 30px;
```

## 新增文本相关属性

### 文本阴影

说明：使用text-shadow属性可以设置文本阴影

示例：

```css
text-shadow: 3px 3px;
text-shadow: 3px 3px red;
text-shadow: 3px 3px 10px red ;
text-shadow: 3px 3px 15px black;
/* 在背景为黑色，字体颜色为白色时可以制造光晕效果 */
text-shadow: 0px 0px 20px red;
```

### 文本换行

说明：使用white-space属性可以设置文本换行

示例：

```css
/* 按原文显示，与pre标签效果相同 */
white-space: pre;
/* 容器不够大时自动换行 */
white-space: pre-wrap;
/* 每句话最左侧和最右侧无效空格去掉，即只认换行 */
white-space: pre-line;
/* 所有均不换行 */
white-space: nowrap;
```

说明：normal为默认值，文本超出边界自动换行，文本中的换行被浏览器识别为一个空格

### 文本溢出

说明：使用`text-overflow`属性可以设置文本溢出效果

常用值：

- `clip`：当内联内容溢出时，将溢出部分剪切掉(默认值)
- `ellipsis`：将溢出部分替换为...

**注意：** 此属性必须搭配`white-space`显式定义为非`visible`和`overflow`为`nowrap`属性使用
示例：

```css
white-space: nowrap;
overflow: hidden;

text-overflow: clip;

text-overflow: ellipsis;
```

### 文本修饰

说明：使用text-decoration属性可以设置文本修饰

```css
text-decoration-line: overline;
text-decoration-style: dashed;
text-decoration-color: blue;
/* 复合属性 */
text-decoration: overline dashed blue;
```

### 文本描边

注意：只有webkit内核的浏览器才支持

```css
/* 文本描边颜色 */
-webkit-text-stroke-color: red;
/* 文本描边宽度 */
-webkit-text-stroke-width: 3px;

/* 复合属性 */
-webkit-text-stroke: 3px red;
```

[image-1]: https://cdn.jsdelivr.net/gh/Shadow1086/myPicture@master/uPic/A3t2Br.png
[image-2]: https://cdn.jsdelivr.net/gh/Shadow1086/myPicture@master/uPic/B0IC8m.png
[image-3]: https://cdn.jsdelivr.net/gh/Shadow1086/myPicture@master/uPic/nkaU2I.png
[image-4]: https://cdn.jsdelivr.net/gh/Shadow1086/myPicture@master/uPic/ahtBVR.png
[image-5]: https://cdn.jsdelivr.net/gh/Shadow1086/myPicture@master/uPic/QwGeF7.png
[image-6]: https://cdn.jsdelivr.net/gh/Shadow1086/myPicture@master/uPic/2b417j.png
[image-7]: https://cdn.jsdelivr.net/gh/Shadow1086/myPicture@master/uPic/fpwYBF.png
