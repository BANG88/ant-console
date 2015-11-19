/**
 * SunEee
 * @date Created on 11/13/15
 * @author YuHui(语晖)<yuhui@suneee.com>
 */

import React from 'react'
import { QueueAnim } from 'antd';

/**
 * 主内容区域容器
 */
export default class MainBody extends React.Component {
    render() {
        return (

            <QueueAnim type={['right', 'left']} delay={120} className="anim-wrap">
                <div key="MainBody" className='padding'>              
                    {
                    
                        this.props.children
                    }
                </div>
            </QueueAnim>

        )
    }

}

