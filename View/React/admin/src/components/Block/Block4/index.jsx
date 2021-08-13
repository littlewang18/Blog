import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, Input, Button, Table,  notification, Modal, Form, Row, Col} from 'antd';
import { SmileOutlined } from '@ant-design/icons';

import B5style from './index.module.css'


function Block4() {

    const [Total, setTotal] = useState(0)
    const [catelist, setList] = useState([])
    const [pageNum, setNum] = useState(1)
    const [pageSize, setSize] = useState(6)
    const [ID, setID] = useState(0)
    const [name, setName] = useState("")
    const [upAnchor, setAnchor] = useState(0)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisibleCom, setIsModalVisibleCom] = useState(false);

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            align: 'center',
        },
        {
            title: '分类名',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
        },
        {
            title: '操作',
            key: 'action',
            align: 'center',
            responsive: ['lg'],
            render: (data) => (
                <div>
                    <Button type="primary" style={{ marginRight: "10px" }} onClick={() => Compile(data)}>编辑</Button>
                    <Button type="danger" onClick={() => Delete(data.id)}>删除</Button>
                </div>
            ),
        }
    ]


    useEffect(() => {
        async function Upstate() {
            const { data: res } = await axios.get('http://localhost:8080/api/v1/category', {
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
        setID(data.id)
        setName(data.name)
        setIsModalVisibleCom(true);
    }
    const ComplieOk = async (values) => {
        axios.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${window.sessionStorage.getItem('token')}`
            return config
        })
        const { data: res } = await axios.put(`http://localhost:8080/api/v1/category/${ID}`, {
            name: values.name,
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
        const res = await axios.delete(`http://localhost:8080/api/v1/category/${ID}`)
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


    const onAdd = () => {
        setIsModalVisible(true);
    }
    const AddOk = async (values) => {
        axios.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${window.sessionStorage.getItem('token')}`
            return config
        })
        const { data: res } = await axios.post('http://localhost:8080/api/v1/category/add', {
            name: values.name,
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


    return (
        <Card className={B5style.block}>
            <Row gutter="10">
                <Col span={20}>
                    <Button type="primary" onClick={onAdd}>新增</Button>
                </Col>
            </Row>


            <Modal title="新增分类" visible={isModalVisible} footer={null} onCancel={AddFalse} destroyOnClose='true'>
                <Form onFinish={AddOk}>
                    <Form.Item name="name" label="Name"
                        rules={[{ required: true, message: '请输入分类名!' }]}>
                        <Input />
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

            <Modal title="编辑分类" visible={isModalVisibleCom} footer={null} onCancel={ComplieFalse} destroyOnClose='true'>
                <Form onFinish={ComplieOk}>
                    <Form.Item name="name" label="Name"
                        rules={[{ required: true, message: '请输入分类名!' }]}>
                        <Input defaultValue={name} />
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
                dataSource={catelist}>

            </Table>
        </Card>
    )
}

export default Block4

