import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, Col, Row, Input, Button, Table,notification, Modal, Form} from 'antd';
import {SmileOutlined } from '@ant-design/icons';

import B4style from './index.module.css'

const { Search } = Input;

function Block1() {

    const [Total,   setTotal]  = useState(0)
    const [piclist, setList]  = useState([])
    const [pageNum,   setNum]  = useState(1)
    const [pageSize, setSize]  = useState(3)
    const [ID,         setID]  = useState(0)
    const [Img,        setImg] = useState('')
    const [upAnchor,setAnchor] = useState(0)
    const [isModalVisible,       setIsModalVisible] = useState(false);
    const [isModalVisibleCom, setIsModalVisibleCom] = useState(false);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            align: 'center',
        },
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
        },
        {
            title: 'img',
            dataIndex: 'img',
            key: 'img',
            align: 'center',
            responsive: ['lg'],
            render: data => (
                <img src = {data} alt='图像' style={{width:'100px', height:'100px', objectFit:'cover'}}></img>
            )
        },
        {
            title: '操作',
            key: 'action',
            align: 'center',
            responsive: ['lg'],
            render: (data) => (
                <div>
                    <Button type="primary" style={{marginRight : "10px"}} onClick={()=>Compile(data)}>编辑</Button>
                    <Button type="danger" onClick={()=>Delete(data.id)}>删除</Button>
                </div>
            ),
        }
    ]


    useEffect(() => {
        async function Upstate() {
            const { data: res } = await axios.get('http://localhost:8080/api/v1/picture', {
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
        setImg(data.img)
        setIsModalVisibleCom(true);
    }

    const ComplieOk = async (values) => {
        axios.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${window.sessionStorage.getItem('token')}`
            return config
        })
        const { data: res } = await axios.put(`http://localhost:8080/api/v1/picture/${ID}`, {
            img: values.Img
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


    const Delete = async (id) => {
        axios.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${window.sessionStorage.getItem('token')}`
            return config
        })
        const res = await axios.delete(`http://localhost:8080/api/v1/picture/${id}`)
        if (res.data.status !== 200)
            return notification.open({
                message: '错误警告',
                description: `${res.data.message}`,
                icon: <SmileOutlined style={{ color: '#108ee9' }} />,
            })
        else{
            const Anchor = upAnchor-1
            setAnchor(Anchor)
            return notification.open({
                message: '删除成功',
                description: `${res.data.message}`,
                icon: <SmileOutlined style={{ color: '#108ee9' }} />,
            })
        }
    }


    const onSearch = async (value) => {
        const { data: res } = await axios.get('http://localhost:8080/api/v1/picture', {
            params: {
                name: value,
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


    const onAdd = () =>{
        setIsModalVisible(true);
    }

    const AddOk = async (values) => {
        axios.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${window.sessionStorage.getItem('token')}`
            return config
        })
        const { data: res } = await axios.post('http://localhost:8080/api/v1/picture/add', {
            username: values.Name,
            img: values.Img,
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
        <Card className={B4style.block}>
            <Row gutter="40">
                <Col span={10}>
                    <Search placeholder="输入图片名" allowClear onSearch={onSearch} style={{ width: "100%" }}/>
                </Col>
                <Col span={6}>
                    <Button type="primary" onClick = {onAdd}>新增</Button>
                </Col>
            </Row>

            <Modal title="添加图片" visible={isModalVisible} footer={null} onCancel={AddFalse} destroyOnClose='true'>
                <Form  onFinish={AddOk}>
                    <Form.Item name="Nane" label="Name"
                        rules={[{ required: true, message: '请输入图片名' }]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="Img" label="Img"
                        rules={[{ required: true, message: '请输入URL' }]}>
                        <Input/>
                    </Form.Item>

                    <Form.Item valuePropName="checked" noStyle>
                        <Button type="primary" htmlType="submit" style= {{"marginRight" : "30px"}}>
                            确定
                        </Button>
                    </Form.Item>
                    <Form.Item valuePropName="checked" noStyle>
                        <Button type="primary" onClick = {AddFalse}>
                            取消
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>

            <Modal title="编辑图片" visible={isModalVisibleCom} footer={null} onCancel={ComplieFalse} destroyOnClose='true'>
                <Form onFinish={ComplieOk}>

                    <Form.Item name="Img" label="Img"
                        rules={[{ required: true, message: '请输入URL' }]}>
                        <Input />
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
                    defaultCurrent : 1,
                    total: Total,
                    showTotal: (total) => `共 ${total} 条`,
                    onChange : (page, pagesize) => {
                        setNum(page)
                        setSize(pagesize)
                    },
                }}
                columns={columns}
                dataSource={piclist}>

        </Table>
    </Card>
    )
}

export default Block1

