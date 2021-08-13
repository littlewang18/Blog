import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, Col, Row, Input, Button, Table, Tag, notification, Modal, Form, Radio } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

import B8style from './index.module.css'

const { Search } = Input;

function Block5() {

    const [Total, setTotal] = useState(0)
    const [userlist, setList] = useState([])
    const [pageNum, setNum] = useState(1)
    const [pageSize, setSize] = useState(6)
    const [ID, setID] = useState(0)
    const [username, setUserName] = useState("")
    const [Role, setRole] = useState(1);
    const [upAnchor, setAnchor] = useState(0)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisibleCom, setIsModalVisibleCom] = useState(false);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'ID',
            key: 'id',
            align: 'center',
        },
        {
            title: '用户名',
            dataIndex: 'username',
            key: 'username',
            align: 'center',
        },
        {
            title: '注册时间',
            dataIndex: 'CreatedAt',
            key: 'CreatedAt',
            align: 'center',
            responsive: ['lg'],
        },
        {
            title: '权限',
            dataIndex: 'role',
            key: 'Role',
            align: 'center',
            render: role => (
                <div>
                    {role === 1 ?
                        <Tag color="blue">
                            {"admin"}
                        </Tag> : <Tag color="green">
                            {"user"}
                        </Tag>
                    }
                </div>
            ),
        },
        {
            title: '操作',
            key: 'action',
            align: 'center',
            responsive: ['lg'],
            render: (data) => (
                <div>
                    <Button type="primary" style={{ marginRight: "10px" }} onClick={() => Compile(data)}>编辑</Button>
                    <Button type="danger" onClick={() => Delete(data.ID)}>删除</Button>
                </div>
            ),
        }
    ]


    useEffect(() => {
        async function Upstate() {
            const { data: res } = await axios.get('http://localhost:8080/api/v1/users', {
                params: {
                    pagesize: pageSize,
                    pagenum: pageNum,
                },
            })
            if (res.status !== 200) return console.log(res.message);
            else {
                setList(res.data)
                setTotal(res.total)
                setAnchor(res.total)
            }
        }
        Upstate()
    }, [pageNum, pageSize, upAnchor]);


    const Compile = async (data) => {
        setID(data.ID)
        setUserName(data.username)
        setRole(data.role)
        setIsModalVisibleCom(true);
    }
    const ComplieOk = async (values) => {
        axios.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${window.sessionStorage.getItem('token')}`
            return config
        })
        const { data: res } = await axios.put(`http://localhost:8080/api/v1/user/${ID}`, {
            username: values.username,
            role: Role
        })
        if (res.status !== 200)
            return notification.open({
                message: '错误警告',
                description: `${res.message}`,
                icon: <SmileOutlined style={{ color: '#108ee9' }} />,
            })
        else {
            setIsModalVisibleCom(false);
            const Anchor = upAnchor + 1
            setAnchor(Anchor)
            return notification.open({
                message: '添加成功',
                description: `${res.message}`,
                icon: <SmileOutlined style={{ color: '#108ee9' }} />,
            })
        }
    }
    const ComplieFalse = () => {
        setIsModalVisibleCom(false);
    }


    const Delete = async (ID) => {
        axios.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${window.sessionStorage.getItem('token')}`
            return config
        })
        const res = await axios.delete(`http://localhost:8080/api/v1/user/${ID}`)
        if (res.data.status !== 200)
            return notification.open({
                message: '错误警告',
                description: `${res.data.message}`,
                icon: <SmileOutlined style={{ color: '#108ee9' }} />,
            })
        else {
            const Anchor = upAnchor - 1
            setAnchor(Anchor)
            return notification.open({
                message: '删除成功',
                description: `${res.data.message}`,
                icon: <SmileOutlined style={{ color: '#108ee9' }} />,
            })
        }
    }


    const onSearch = async (value) => {
        const { data: res } = await axios.get('http://localhost:8080/api/v1/users', {
            params: {
                username: value,
                pagesize: pageSize,
                pageNum: pageNum,
            },
        })
        if (res.status !== 200) return console.log(res.message);
        else {
            setList(res.data)
            setTotal(res.total)
        }
    }


    const onAdd = () => {
        setIsModalVisible(true);
    }
    const AddOk = async (values) => {
        const { data: res } = await axios.post('http://localhost:8080/api/v1/user/add', {
            username: values.username,
            password: values.password,
            role: Role
        })
        if (res.status !== 200)
            return notification.open({
                message: '错误警告',
                description: `${res.message}`,
                icon: <SmileOutlined style={{ color: '#108ee9' }} />,
            })
        else {
            setIsModalVisible(false);
            const Anchor = upAnchor + 1
            setAnchor(Anchor)
            return notification.open({
                message: '添加成功',
                description: `${res.message}`,
                icon: <SmileOutlined style={{ color: '#108ee9' }} />,
            })
        }
    }
    const AddFalse = () => {
        setIsModalVisible(false);
    }
    const ChangeRole = e => {
        setRole(e.target.value)
    };



    return (
        <Card className={B8style.block1}>
            <Row gutter="40">
                <Col span={10}>
                    <Search placeholder="输入用户名" allowClear onSearch={onSearch} style={{ width: "100%" }} />
                </Col>
                <Col span={6}>
                    <Button type="primary" onClick={onAdd}>新增</Button>
                </Col>
            </Row>

            <Modal title="新增用户" visible={isModalVisible} footer={null} onCancel={AddFalse} destroyOnClose='true'>
                <Form onFinish={AddOk}>
                    <Form.Item name="username" label="UserName"
                        rules={[{ required: true, message: '请输入用户名!' },
                        { min: 1, max: 10, message: '用户名必须在1到10位' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="password" label="Password"
                        rules={[{ required: true, message: '请输入密码!' },
                        { min: 6, max: 20, message: '密码必须在6到20位' }]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item name="role" label="权限">
                        <Radio.Group onChange={ChangeRole} value={Role}>
                            <Radio value={1}>管理员</Radio>
                            <Radio value={2}>普通用户</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item valuePropName="checked" noStyle>
                        <Button type="primary" htmlType="submit" style={{ "marginRight": "30px" }}>
                            确定
                        </Button>
                    </Form.Item>
                    <Form.Item valuePropName="checked" noStyle>
                        <Button type="primary" onClick={AddFalse}>
                            取消
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>

            <Modal title="编辑用户" visible={isModalVisibleCom} footer={null} onCancel={ComplieFalse} destroyOnClose='true'>
                <Form onFinish={ComplieOk}>
                    <Form.Item name="username" label="UserName"
                        rules={[{ min: 1, max: 10, message: '用户名必须在1到10位' }]}>
                        <Input defaultValue={username} />
                    </Form.Item>
                    <Form.Item name="role" label="权限">
                        <Radio.Group onChange={ChangeRole} value={Role} defaultValue={Role}>
                            <Radio value={1}>管理员</Radio>
                            <Radio value={2}>普通用户</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item valuePropName="checked" noStyle>
                        <Button type="primary" htmlType="submit" style={{ "marginRight": "30px" }}>
                            确定
                        </Button>
                    </Form.Item>
                    <Form.Item valuePropName="checked" noStyle>
                        <Button type="primary" onClick={ComplieFalse}>
                            取消
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>


            <Table
                pagination={{
                    defaultPageSize: 6,
                    defaultCurrent: 1,
                    total: Total,
                    showTotal: (total) => `共 ${total} 条`,
                    onChange: (page, pagesize) => {
                        setNum(page)
                        setSize(pagesize)
                    },
                }}
                columns={columns}
                dataSource={userlist}>

            </Table>
        </Card>
    )
}

export default Block5

