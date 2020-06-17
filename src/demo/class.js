import React from 'react';

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}; //私有state只能在构造函数内初始化
    }

    //挂载 组件已经被渲染到 DOM 中后运行
    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick(); //每秒执行自己的方法
        }, 1000);
    }

    //取消挂载 组件被删除时执行
    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        //更新当前组件状态
        this.setState({date: new Date()});
    }

    render() {
        return (
            <p className="clock">
                It is {this.state.date.toLocaleTimeString()}
            </p>
        )
    }
}

export default Application;
