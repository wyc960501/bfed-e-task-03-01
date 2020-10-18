# Vue.js 基础回顾

## 1、阶段内容（Vue.js 原理深度剖析 ）
- 快速回顾 Vue.js 基础语法
- Vue Router 原理分析与实现
- 虚拟 DOM 库 Snabbdom 源码解析
- 响应式原理分析与实现
- Vue.js 源码分析

## 2、Vue 基础结构

## 3、Vue 的生命周期
![Vue.js生命周期图示](https://cn.vuejs.org/images/lifecycle.png "Vue.js 生命周期图示")

####生命周期钩子

- **beforeCreate（组件实例化之前执行的函数）：** 调用 beforeCreate 时，Vue实例刚刚创建出来，此时还没有初始化好Vue实例中的data、methods，所以此时还不能访问Vue实例中保存的data、methods

- **created（组件实例化完毕，但页面还未显示）：** 调用 created 时，是我们最早能访问 Vue 实例中保存的 data、methods 的地方

- **beforeMount（组件挂载之前，页面任未显示，但虚拟Dom已经配置）：** 调用 beforeMounted 的时候，表示 Vue 已经编译好了最终模板，但是还没有将最终的模板渲染到界面上

- **mounted（组件挂载后）：** 调用 mounted 时，Vue 已经完成模板渲染，此时可以拿到界面上渲染之后的内容

- **beforeUpdate（组件更新前，页面仍未更新，但虚拟Dom已经配置）：** 调用 beforeUpdate 时，Vue 实例中保存的数据被修改了。只有保存的数据被修改了才会调用，数据已更新，界面还没有更新。

- **updated（组件更新后，此方法执行后，页面显示）：** 调用 update 时，Vue 实例中保存的数据被修改了，并且同步了修改的数据了，也就是说，数据和界面都同步更新之后才会调用 updated

- **beforeDestroy（组件销毁前）：** 调用 beforeDestroy 时，当前组件即将被销毁。只有组件被销毁才会调用，beforeDestroy 是我们最后能够访问到组件数据和方法的函数

- **destroyed（组件销毁后）：** 调用 destroyed 时，此时组件已经被销毁。只有组件被销毁，destroyed 才会被调用，不要在这个生命周期方法中再去操作组件中数据和方法

## 4、Vue 语法和概念

- 插值表达式 {{}}
- 指令 v-if v-for v-on ...
- 计算属性和侦听器
- Class 和 Style 绑定
- 条件渲染/列表渲染
- 表单输入绑定

- 组件 （可复用的 Vue 实例）
- 插槽 
- 插件
- 混入 mixin
- 响应式原理
- 不同构件版本的 Vue
