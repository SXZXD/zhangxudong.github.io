(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{491:function(s,a,n){"use strict";n.r(a);var t=n(0),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"express-安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#express-安装"}},[s._v("#")]),s._v(" express 安装")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" express --save\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"下载安装-mongodb"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#下载安装-mongodb"}},[s._v("#")]),s._v(" 下载安装 mongodb")]),s._v(" "),n("blockquote",[n("p",[s._v("下载连接： "),n("a",{attrs:{href:"https://www.mongodb.com/download-center/community",target:"_blank",rel:"noopener noreferrer"}},[s._v("MongoDB Download Center | MongoDB"),n("OutboundLink")],1)])]),s._v(" "),n("h3",{attrs:{id:"安装-mongoose"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装-mongoose"}},[s._v("#")]),s._v(" 安装 mongoose")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i mongoose'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"安装-mongoose-gui"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装-mongoose-gui"}},[s._v("#")]),s._v(" 安装 mongoose gui")]),s._v(" "),n("blockquote",[n("p",[s._v("下载连接："),n("a",{attrs:{href:"https://nosqlbooster.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[s._v("NoSQLBooster - The Smartest GUI Admin Tool for MongoDB"),n("OutboundLink")],1)])]),s._v(" "),n("h3",{attrs:{id:"安装-nodemon"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装-nodemon"}},[s._v("#")]),s._v(" 安装 nodemon")]),s._v(" "),n("blockquote",[n("p",[s._v("文件更改之后nodemon 会自动重启应用")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g nodemon\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ul",[n("li",[s._v("配置文件\n"),n("ul",[n("li",[s._v("Nodemon 默认会监听当前目录下（也就是执行 nodemon 命令所在的目录）的所有文件，不过有些情况下，虽然项目文件发生了改动，但是不需要 Nodemon 重启应用，那如何让文件不被 Nodemon 监听呢？不需要监听的文件，可以通过设置 Nodemon 的配置文件排除掉，新建文件 server/nodemon.json，添加代码：")])])])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ignore"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"config.default.js"')]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[s._v("手动重启\n"),n("ul",[n("li",[s._v("有时候可能 Nodemon 还在运行的时候，需要手动重启它，在这种情况下不需要关闭正在运行的 Nodemon 进程然后再重启 Nodemon，只要在 Nodemon 命令运行的终端 窗口中输入 rs 两个字符，然后再按下回车键，就能重启 Nodemon 了")])])])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("   rs\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"mongoose-连接数据库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mongoose-连接数据库"}},[s._v("#")]),s._v(" mongoose 连接数据库")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("mongoose.connect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mongodb://localhost:27017/express-auth"')]),s._v(","),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    useNewUrlParser: true,\n    useCreateIndex:true\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("blockquote",[n("p",[s._v("如果数据库不存在mongoose会自动创建")])]),s._v(" "),n("h3",{attrs:{id:"mongoose-定义模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mongoose-定义模型"}},[s._v("#")]),s._v(" mongoose 定义模型")]),s._v(" "),n("blockquote",[n("p",[s._v("schema 是mongoose 里会用到一种数据模式，可以理解为表结构；没个schema会映射到一个mongodb的一个collection，它不具备操作数据库的能力！")])]),s._v(" "),n("ul",[n("li",[s._v("允许的schemaTypes\n"),n("ul",[n("li",[s._v("String")]),s._v(" "),n("li",[s._v("Number")]),s._v(" "),n("li",[s._v("Date")]),s._v(" "),n("li",[s._v("Buffer")]),s._v(" "),n("li",[s._v("Boolean")]),s._v(" "),n("li",[s._v("Mixed")]),s._v(" "),n("li",[s._v("OblectId")]),s._v(" "),n("li",[s._v("Array")])])]),s._v(" "),n("li",[s._v("创建一个model")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v(" const User "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mongoose.model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'User'")]),s._v(",new mongoose.Schema"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"使用express"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用express"}},[s._v("#")]),s._v(" 使用express")]),s._v(" "),n("ul",[n("li",[s._v("引入express 并 创建实例")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("const express "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" require"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'express'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconst app "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" express"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ul",[n("li",[s._v("注册路由，转换为json格式")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("app.use"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("express.json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v("\n//get 方式\napp.get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),s._v(",async"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("req,res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n//post 方法\napp.post"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),s._v(",async"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("req,res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n适应RESTful Api风格\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);