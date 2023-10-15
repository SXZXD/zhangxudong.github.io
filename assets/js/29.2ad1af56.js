(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{486:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"前台需要了解得nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前台需要了解得nginx"}},[s._v("#")]),s._v(" 前台需要了解得nginx")]),s._v(" "),a("blockquote",[a("p",[s._v("Nginx是一个高性能得http和反向代理服务器")])]),s._v(" "),a("h3",{attrs:{id:"常见场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见场景"}},[s._v("#")]),s._v(" 常见场景")]),s._v(" "),a("ul",[a("li",[s._v("静态资源服务器")]),s._v(" "),a("li",[s._v("动态匹配")]),s._v(" "),a("li",[s._v("反向代理")]),s._v(" "),a("li",[s._v("Gzip压缩")]),s._v(" "),a("li",[s._v("负载均衡")])]),s._v(" "),a("h3",{attrs:{id:"nginx默认配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx默认配置"}},[s._v("#")]),s._v(" Nginx默认配置")]),s._v(" "),a("blockquote",[a("p",[s._v("Nginx安装目录下得nginx.conf，就是全局配置文件，nginx.conf.default作为配置文件得备份。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# 设置工作进程的数量\nworker_processes  1;\n# 处理连接\nevents {\n    # 设置连接数\n    worker_connections  1024;\n}\n\nhttp {\n    # 文件拓展名查找集合\n    include       mime.types;\n    # 当查找不到对应类型的时候默认值\n    default_type  application/octet-stream;\n\n    # 日志格式，定义别名为 main\n    #log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n    #                  \'$status $body_bytes_sent "$http_referer" \'\n    #                  \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    # 指定日志输入目录\n    #access_log  logs/access.log  main;\n\n    # 调用 sendfile 系统传输文件\n    sendfile        on;\n    #tcp_nopush     on;\n\n    # 客户端与服务器连接超时时间，超时自动断开\n    #keepalive_timeout  0;\n    keepalive_timeout  65;\n\n    # 开启gizip 压缩\n    #gzip  on;\n\n    # 虚拟主机\n    server {\n        listen       8080;\n        server_name  localhost;\n\n        #charset koi8-r;\n\n        #access_log  logs/host.access.log  main;\n\n        # 路由\n        location / {\n                root   html;\n                index  index.html index.htm;\n            }\n    }\n\n    # 引入其他的配置文件\n    include servers/*;\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br")])]),a("h3",{attrs:{id:"搭建静态站点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建静态站点"}},[s._v("#")]),s._v(" 搭建静态站点")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 虚拟主机server块\nserver {\n    # 端口\n    listen   8080;\n    # 匹配请求中的host值\n    server_name  localhost;\n    \n    # 监听请求路径\n    location / {\n        # 查找目录\n        root /source;\n        # 默认查找\n        index index.html index.htm;\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"这里说明一下相关字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#这里说明一下相关字段"}},[s._v("#")]),s._v(" 这里说明一下相关字段")]),s._v(" "),a("ul",[a("li",[s._v("server 配置虚拟主机的相关参数，可以有多个")]),s._v(" "),a("li",[s._v("server_name 通过请求中的host值 找到对应的虚拟主机的配置")]),s._v(" "),a("li",[s._v("location 配置请求路由，处理相关页面情况")]),s._v(" "),a("li",[s._v("root 查找资源的路径")])]),s._v(" "),a("h3",{attrs:{id:"配置完成执行nginx-t测试conf配置，successful之后执行nginx-s-reload更新nginx配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置完成执行nginx-t测试conf配置，successful之后执行nginx-s-reload更新nginx配置"}},[s._v("#")]),s._v(" 配置完成执行nginx -t测试conf配置，successful之后执行nginx -s reload更新nginx配置")]),s._v(" "),a("ul",[a("li",[s._v("nginx -t 检查配置文件是否有语法错误")]),s._v(" "),a("li",[s._v("nginx -s reload 向主进程发送信号，重新加载配置文件")]),s._v(" "),a("li",[s._v("nginx -s stop 快速关闭")]),s._v(" "),a("li",[s._v("nginx -s quit 等待工作进程处理完成后关闭")])]),s._v(" "),a("h3",{attrs:{id:"动态匹配（请求过滤）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态匹配（请求过滤）"}},[s._v("#")]),s._v(" 动态匹配（请求过滤）")]),s._v(" "),a("blockquote",[a("p",[s._v("通常在开发环境或者测试环境的时候呢我们修改了代码，因为浏览器缓存，可能不会生效，需要手动清除缓存，才能看到修改后的效果，这里我们做一个配置让浏览器不缓存相关的资源。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  location ~* \\.(js|css|png|jpg|gif)$ {\n      add_header Cache-Control no-store;\n  }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("blockquote",[a("p",[s._v("~* .(js|css|png|jpg|gif)$ 是匹配以相关文件类型然后单独处理。 add_header 是给请求的响应加上一个头信息Cache-Control no-store，告知浏览器禁用缓存，每次都从服务器获取 效果如下：\n"),a("img",{attrs:{src:":storage%5Cff0ebbea-4b6c-454a-847f-e3fd83658f71%5C13583586.png",alt:"13583586.png"}})])]),s._v(" "),a("h3",{attrs:{id:"匹配规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#匹配规则"}},[s._v("#")]),s._v(" 匹配规则")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("location = / {\n    [ configuration A ]\n}\n\nlocation / {\n    [ configuration B ]\n}\n\nlocation /documents/ {\n    [ configuration C ]\n}\n\nlocation ^~ /images/ {\n    [ configuration D ]\n}\n\nlocation ~* \\.(gif|jpg|jpeg)$ {\n    [ configuration E ]\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("ul",[a("li",[s._v("= 表示精确匹配。只有请求的url路径与后面的字符串完全相等时，才会命中（优先级最高）。")]),s._v(" "),a("li",[s._v("^~ 表示如果该符号后面的字符是最佳匹配，采用该规则，不再进行后续的查找。")]),s._v(" "),a("li",[s._v("~ 表示该规则是使用正则定义的，区分大小写。")]),s._v(" "),a("li",[s._v("~* 表示该规则是使用正则定义的，不区分大小写。")])]),s._v(" "),a("h3",{attrs:{id:"反响代理解决跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反响代理解决跨域"}},[s._v("#")]),s._v(" 反响代理解决跨域")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" location /api {   \n    # 请求host传给后端\n    proxy_set_header Host $http_host;\n    # 请求ip 传给后端\n    proxy_set_header X-Real-IP $remote_addr;\n    # 请求协议传给后端\n    proxy_set_header X-Scheme $scheme;\n    # 路径重写\n    rewrite  /api/(.*)  /$1  break;\n    # 代理服务器\n    proxy_pass http://localhost:9000;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("ul",[a("li",[s._v("拦截路径/api, 可以通过正则匹配。")]),s._v(" "),a("li",[s._v("proxy_set_header 允许重新定义或添加字段传递给代理服务器的请求头。")]),s._v(" "),a("li",[s._v("$http_host、$remote_addr、$scheme 为Nginx内置变量。")]),s._v(" "),a("li",[s._v("rewrite 根据rewrite后的请求URI，将路径重写，如：接口路径为 /user, 我们可以请求 /api/user。（为什么需要重写uri？因为在使用Nginx做反向代理的时候，需要匹配到跨域的接口再做转发，为了方便匹配，会人为的在原接口中添加一段路径（或标示， 如例子中的api），因此需要在匹配之后、转发之前把添加的那段去掉，因此需要rewrite。）")]),s._v(" "),a("li",[s._v("break 继续本次请求后面的处理 ,停止匹配下面的location。需要注意的是与之类似的last执行过程则是停止当前这个请求，并根据rewrite匹配的规则重新发起一个请求，从上到下依次匹配location后面的规则。")]),s._v(" "),a("li",[s._v("proxy_pass 代理服务器。")])]),s._v(" "),a("blockquote",[a("p",[s._v("开发过程中难免用到一些成熟的框架，或者插件，这些外部的依赖，有时候体积比较大，导致页面响应缓慢，我们可以用打包工具(webpack, rollup)，将代码进行压缩，以缩小代码体积。 开启Nginx Gzip压缩功能。需要注意的是 Gzip 压缩功能需要浏览器跟服务器都支持，即服务器压缩，浏览器解析。")])]),s._v(" "),a("ul",[a("li",[s._v("查看浏览器支持情况，确定 请求头 中的Accept-Encoding字段\n"),a("img",{attrs:{src:":storage%5Cff0ebbea-4b6c-454a-847f-e3fd83658f71%5C1742abad.png",alt:"1742abad.png"}})]),s._v(" "),a("li",[s._v("确定在浏览器支持，我们就可以在nginx中配置")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("server {\n    # 开启gzip 压缩\n    gzip on;\n    # 设置gzip所需的http协议最低版本 （HTTP/1.1, HTTP/1.0）\n    gzip_http_version 1.1;\n    # 设置压缩级别，压缩级别越高压缩时间越长  （1-9）\n    gzip_comp_level 4;\n    # 设置压缩的最小字节数， 页面Content-Length获取\n    gzip_min_length 1000;\n    # 设置压缩文件的类型  （text/html)\n    gzip_types text/plain application/javascript text/css;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("ul",[a("li",[s._v("查看配置是否生效 查看 响应头 中的Content-Encoding字段，值为 gzip\n"),a("img",{attrs:{src:":storage%5Cff0ebbea-4b6c-454a-847f-e3fd83658f71%5Ceabc4a0b.png",alt:"eabc4a0b.png"}})])]),s._v(" "),a("h3",{attrs:{id:"负载均衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[s._v("#")]),s._v(" 负载均衡")]),s._v(" "),a("blockquote",[a("p",[s._v("负载均衡是Nginx 比较常用的一个功能，可优化资源利用率，最大化吞吐量，减少延迟，确保容错配置，将流量分配到多个后端服务器。")])]),s._v(" "),a("h3",{attrs:{id:"常用策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用策略"}},[s._v("#")]),s._v(" 常用策略")]),s._v(" "),a("ul",[a("li",[s._v("轮询（默认），请求过来后，Nginx随机分配流量到任一服务器")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" upstream backend {\n    server 127.0.0.1:3000;\n    server 127.0.0.1:3001;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("weight=number 设置服务器的权重，默认为1，权重大的会被优先分配")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("upstream backend {\n    server 127.0.0.1:3000 weight=2;\n    server 127.0.0.1:3001 weight=1;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("backup 标记为备份服务器。当主服务器不可用时，将传递与备份服务器的连接。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("upstream backend {\n    server 127.0.0.1:3000 backup;\n    server 127.0.0.1:3001;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("ip_hash 保持会话，保证同一客户端始终访问一台服务器。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("upstream backend {\n    ip_hash;  \n    server 127.0.0.1:3000 backup;\n    server 127.0.0.1:3001;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("ip_hash 保持会话，保证同一客户端始终访问一台服务器。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("upstream backend {\n    least_conn;\n    server 127.0.0.1:3000;\n    server 127.0.0.1:3001;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"当我们需要代理一个集群时候可以通过下面这种方式实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#当我们需要代理一个集群时候可以通过下面这种方式实现"}},[s._v("#")]),s._v(" 当我们需要代理一个集群时候可以通过下面这种方式实现")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http {\n    upstream backend {\n        server 127.0.0.1:3000;\n        server 127.0.0.1:3001;\n    }\n\n    ...\n    server {\n        listen      9000;\n        server_name localhost;\n        \n        location / {\n            proxy_set_header Host $http_host;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header X-Scheme $scheme;\n            \n            proxy_pass backend; \n        }\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);