import React from 'react'
import { useHistory } from 'react-router';
import { Layout, Menu, Dropdown, Button } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import Hstyle from './index.module.css'

const { Header} = Layout;

function MHeader(props) {

    const NowKey = props.NowKey
    const history = useHistory();
    const PageState = { 1: '仪表盘', 2: '添加文章', 3: '上传图片', 4: '文章管理', 5: '分类管理', 6: '用户管理', 7: '图片管理'}


    const onClick = () => {
        history.push("/login")
    };



    const menu = (
        <Menu onClick = {onClick} >
            <Menu.Item key="1" icon={<UserOutlined />}>
                退出
            </Menu.Item>
        </Menu>
    );


    return (
        <div>
            <Header style={{
                padding: 0,
                height: "52px",
                backgroundColor: "white"
            }}>
                <div className={Hstyle.headcent}>
                    <div className={Hstyle.text}>{PageState[`${NowKey}`]}</div>
                    <Dropdown
                        className={Hstyle.dropdown}
                        overlay={menu} trigger={['click']}>
                        <Button >
                            Admin <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>

            </Header>
        </div>
    )
}

export default MHeader
