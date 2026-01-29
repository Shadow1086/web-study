import {println} from "./0403-util.js";

// click : 当按钮被电击
document.querySelector("#btn2").addEventListener("click", () => {
    println("单击事件已触发");
});

// keydown : 键盘被按下
document.querySelector("#text1").addEventListener("keydown", () => {
    println("键盘按下");
});
// keyup : 键盘被抬起
document.querySelector("#text1").addEventListener("keyup", () => {
    println("键盘抬起");
});

// focus:获取焦点：
document.querySelector("#text2").addEventListener("focus", () => {
    println("我获取了焦点");
});

//blur : 失去焦点
document.querySelector("#text2").addEventListener("blur", () => {
    println("我失去了焦点");
});

//input : 用户输入时触发
document.querySelector("#text2").addEventListener("input", () => {
    println("用户输入中");
});

// submit : 用户提交时触发
document.querySelector("form").addEventListener("submit", () => {
    println("表单被提交");
});

// 添加表格鼠标移入移出的颜色变化
let trs = document.querySelectorAll("tr");

for (let i = 0; i < trs.length; i++) {
    trs[i].addEventListener("mouseenter", () => {
        trs[i].style.backgroundColor = "#f2e2e2";
    });
    trs[i].addEventListener("mouseleave", () => {
        trs[i].style.backgroundColor = "#fff";
    });
}
