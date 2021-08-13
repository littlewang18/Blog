import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, Col, Row, Input, Button, Table, Tag, notification} from 'antd';
import { SmileOutlined } from '@ant-design/icons';

import B3style from './index.module.css'

const { Search } = Input;

function Block3(props) {

    const [Total, setTotal] = useState(0)
    const [artList, setList] = useState([])
    const [pageNum, setNum] = useState(1)
    const [pageSize, setSize] = useState(6)
    const [upAnchor, setAnchor] = useState(0)

    const  {ChangeId, ChangeKey}  = props

    const columns = [
        {
            title: 'ID',
            dataIndex: 'ID',
            key: 'id',
            align: 'center',
        },
        {
            title: '文章标题',
            dataIndex: 'title',
            key: 'title',
            align: 'center',
        },
        {
            title: '文章概述',
            dataIndex: 'desc',
            key: 'desc',
            align: 'center',
            responsive: ['lg'],
        },
        {
            title: '上传时间',
            dataIndex: 'CreatedAt',
            key: 'CreatedAt',
            align: 'center',
            responsive: ['lg'],
        },
        {
            title: '所属分类',
            dataIndex: 'Category',
            key: 'name',
            align: 'center',
            render: data => (
                <Tag color="green">
                    {data.name}
                </Tag>
            )
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
            const { data: res } = await axios.get('http://localhost:8080/api/v1/article', {
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
        ChangeId(0)
    }, [pageNum, pageSize, upAnchor, ChangeId]);


    const Compile = (data) => {
        ChangeId(data.ID)
        ChangeKey('2')
    }


    const Delete = async (ID) => {
        axios.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${window.sessionStorage.getItem('token')}`
            return config
        })
        const res = await axios.delete(`http://localhost:8080/api/v1/article/${ID}`)
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
        const { data: res } = await axios.get('http://localhost:8080/api/v1/article', {
            params: {
                title: value,
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


    return (
        <Card className={B3style.block}>
            <Row gutter="40">
                <Col span={10}>
                    <Search placeholder="输入文章名" allowClear onSearch={onSearch} style={{ width: "100%" }} />
                </Col>
            </Row>

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
                dataSource={artList}>

            </Table>
        </Card>
    )
}

export default Block3