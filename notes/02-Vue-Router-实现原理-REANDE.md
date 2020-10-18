# Vue Router 实现原理

## Vue Router 基础回顾

**实现步骤**

1. 创建路由相关组件（视图）
2. 注册路由插件（使用 Vue.use() 注册)
3. 创建一个 Router 对象，在创建路由对象的时候，需要配置路由规则
4. 注册 Router 对象，就是在创建 Vue 实例的时候，在选项里边配置创建好的Router 对象
5. 通过 router-view 设置占位，当路径匹配成功后，把匹配到的组件替换调 router-view
6. 通过 router-link 创建一些链接

**动态路由** -- 两种传参方式

1. 通过当前路由规则获取
2. 路由规则中开启 props 传参（推荐）

**嵌套路由**

Vue 路由通过 children 实现路由的嵌套

**编程式导航**

- router.push() ,该方法会向 history 栈添加一个新的记录，当用户点击浏览器后退按钮时，会回到之前的 url。该方法的参数可以是一个字符串路径，或者一个描述地址的对象。

- router.replace(),跟 router.replace() 很像，唯一的不同就是，它不会像 history 添加新记录，而是替换掉当前的 history 记录

- router.go(),这个方法的参数是一个整数，意思是在 history 记录中向前或者向后退多少步


## Hash 模式和 History 模式

**Hash 模式 和 History 模式的原理区别**

- Hash 模式是基于锚点，以及 onhashchange 事件
- History 模式是基于 HTML5 中的 History API
    - history.pushState() IE 10 以后支持
    - history.replaceState()

**History 模式**

- History 需要服务器的支持
- 单页应用中，服务端不存在 https://www.testurl.com/login 这样的地址，会返回找不该该页面
- 在服务端应该除了静态资源外都返回单页应用的 index.html

**History 模式 - nginx**

nginx 服务器配置
- 从官网下载 nginx 的压缩包
- 把压缩包解压到 c 盘根目录，c:\ngix-1.18.0 文件夹
- 打开命令行，切换到目录 c:\nginx-1.18.0

启动 nginx

```
# 启动
start nginx

# 重启
nginx -s reload

# 停止
nginx -s stop
```


## 模拟实现自己的 Vue Router

**Vue Router 实现原理**

Vue Router 是前端路由，当路径切换的时候在浏览器端判断当前路径，并加载当前路径对应的组件。

**Vue 前置知识**
- 插件
- 混入
- Vue.observable()
- 插槽
- render 函数
- 运行时和完整版的 Vue

**Hash 模式**
- URL 中 # 后面的内容作为路径地址
- 监听 hashchange 事件
- 根据当前路由地址找到对应组件重新渲染

**History 模式**
- 通过 history.pushState()方法改变地址栏
- 监听 popstate 事件
- 根据当前路由地址找到对应组件重新渲染
