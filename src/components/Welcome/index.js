import React from 'react';
import './index.less';

/**
 * 展示欢迎界面
 */
class Welcome extends React.PureComponent {

    render() {
        return (
            <div>
                <h1 className="welcome-text">
                    Welcome, 这里是欢迎界面, 欢迎访问我的<a target="_blank" href="">blog</a>.
                    <br/>
                    项目地址: <a target="_blank"
                             href="">https://github.com/jiangxy/react-antd-admin</a>
                </h1>
            </div>
        );
    }

}

export default Welcome;
