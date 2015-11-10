# ant-console
> 后台基础模板( ant + react + react router + es6 + webpack)


## 链接

- 编码风格 https://github.com/airbnb/javascript
- ant https://github.com/ant-design/ant-design
- webpack http://webpack.github.io/docs/
- react http://facebook.github.io/react/
- react-router https://github.com/rackt/react-router
- babeljs https://babeljs.io/

## 概念

- 没有模板概念(组件)
- es6语法
- 规范命名
- 组件定义


## es6 常用属性整理

- class
- import
- function
- => 箭头函数
- 解构赋值 {x,y} = {x,y,z}
- let
- const
-
```js

class 模块名字 extends React.Component {

  constructor(props){

    super(props);

		// 设置状态值
    this.state = {
      count:0
    }

    // You can subscribe to the updates manually, or use bindings to your view layer.

  }

  componentDidMount(){

    //  ajax
    //  

  }

  render() {
    return (
      <div>
        //  模板
      </div>
    )
  }



}

export default 模块名字
```

## react

- 生命周期
- 事件系统
- 状态设置
- 属性设置

## QA

- [x] 兼容性( react ie8+)
- [x] SPA
- [x] Router
- [ ] 双向绑定
- [ ] 工作量
- [ ] 出问题了怎么办?
- [ ] 组件之间的关系( props )
- [ ] react 提示
- [x] 按需加载
- [ ] 编码风格
- [ ] 大纲
- [ ] 流程



## 学习大纲

- react 语法 d1
- react 事件 d1
- es6 (基本语法) d1
- 路由
