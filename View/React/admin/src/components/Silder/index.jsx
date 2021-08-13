import {React} from 'react'
import { Layout, Menu } from 'antd';
import {UserOutlined } from '@ant-design/icons';

import Sstyle from './index.module.css'

const { Sider} = Layout;



function MSilder(props) {

    const {ChangeKey} = props


    const onClick = ({key}) => ChangeKey(key)



    return (
        <div>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                theme='light'
                style= {{height : '100vh'}}
            >
                <div className={Sstyle.logo} >
                    <div className={Sstyle.text}>(☞ﾟヮﾟ)☞ ！☜(ﾟヮﾟ☜)</div>
                </div>

                <Menu theme="light" mode="inline" onClick={onClick} defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>仪表盘</Menu.Item>
                    <Menu.ItemGroup key="g1" title="添加">
                        <Menu.Item key="2" icon={<UserOutlined />}>添加文章</Menu.Item>
                        <Menu.Item key="3" icon={<UserOutlined />}>上传图片</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g2" title="管理">
                        <Menu.Item key="4" icon={<UserOutlined />}>文章管理</Menu.Item>
                        <Menu.Item key="5" icon={<UserOutlined />}>分类管理</Menu.Item>
                        <Menu.Item key="6" icon={<UserOutlined />}>用户管理</Menu.Item>
                        <Menu.Item key="7" icon={<UserOutlined />}>图片管理</Menu.Item>
                    </Menu.ItemGroup>
                </Menu>
            </Sider>
        </div>
    )
}

export default MSilder
