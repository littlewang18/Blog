import {React} from 'react'
import { useHistory } from 'react-router';
import { Form, Input, Button, notification } from 'antd';
import { UserOutlined, LockOutlined, SmileOutlined} from '@ant-design/icons';
import axios from 'axios';


import style from './index.module.css'



function LogPut() {
    let history = useHistory();


    const onFinish = async(values) => {
        const { data: res } = await axios.post('http://localhost:8080/api/v1/login', {
            username: values.username,
            password: values.password,
        })
        if (res.status !== 200)
        return notification.open({
            message: '错误警告',
            description:`${res.message}`,
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        })
        window.sessionStorage.setItem('token', res.token)
        history.push("/admin")
    };


    return (
        <div className={style.logbox}>
            <h1 className= {style.logtxt}>后台登录</h1>
            <div className={style.logform}>
            <Form
            onFinish={onFinish}
            >

                <Form.Item
                    name="username"
                    rules={[{ required: true,  message: '请输入用户名!'     },
                            { min: 1, max: 10, message: '用户名必须在1到10位'}
                    ]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                </Form.Item>


                <Form.Item
                    name="password"
                    rules={[{ required: true,  message: '请输入密码!' },
                            { min: 6, max: 20, message: '密码必须在6到20位' }
                    ]}>
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="密码"
                    />
                </Form.Item>


                <Form.Item valuePropName="checked" noStyle>
                    <Button type="primary" htmlType="submit" className={style.logbtn}>
                        登录
                    </Button>
                </Form.Item>
            </Form>
            </div>
        </div>
    )
}

export default LogPut
