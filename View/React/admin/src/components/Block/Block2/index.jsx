import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Card, Input, Select, Button, notification} from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import Vditor from 'vditor'
import "vditor/src/assets/scss/index.scss"


import B2style from './index.module.css'


const { TextArea } = Input;


function Block2( props ) {
    const [content, setContent] = useState('Hello world')
    const [cpcon,     setCpCpn] = useState('Hello world')
    const [title,     setTitle] = useState('')
    const [desc,       setDesc] = useState('')
    const [cates,     setCates] = useState()
    const [cate,       setCate] = useState('')
    const [pic,         setPic] = useState('')

    const NowID = props.NowID

    useEffect(() => {
        if (NowID !== 0) {
            async function Complie() {
                const res = await axios.get(`http://localhost:8080/api/v1/article/info/${NowID}`,)
                setTitle(res.data.data.title)
                setDesc(res.data.data.desc)
                setCpCpn(res.data.data.context)
                setPic(res.data.data.img)
                setCate(res.data.data.Cateory)
            }
            Complie()

        }
    })

    useEffect(() => {
        async function GetCate() {
            const { data: res } = await axios.get(`http://localhost:8080/api/v1/category`)
            setCates(res.data.map(item => ({
                value: item.id,
                label: item.name,
            })))
        }
        GetCate()
    }, [])

    useEffect(() => {
        const vditor = new Vditor('vditor', {
            height: 620,
            width: "100%",
            "outline": {
                "enable": true,
                "position": "right"
            },
            toolbarConfig: {
                "hide": true
            },
            cache: {
                enable: false,
            },
            after() {
                vditor.setValue(`${cpcon}`)
            },
            blur() {
                setContent(vditor.getValue())
            },
            "mode": "ir",
        })
    }, [cpcon])


    const ChangeTitle = e => {
        setTitle(e.target.value)
    };

    const ChangeSum = e => {
        setDesc(e.target.value)
    };

    const Changepic = e => {
        setPic(e.target.value)
    };

    function handleChange(value) {
        setCate(value)
    }

    const Save = async() => {
        axios.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${window.sessionStorage.getItem('token')}`
            return config
        })
        if (NowID === 0) {
            const res = await axios.post(`http://localhost:8080/api/v1/article/add`, {
                "title": title,
                "cid":  cate,
                "desc": desc,
                "context": content,
                "img": pic,
            })
            if (res.data.status !== 200) {
                return notification.open({
                    message: '错误警告',
                    description: `${res.data.message}`,
                    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
                })
            } else {
                return notification.open({
                    message: '保存成功',
                    description: `${res.data.message}`,
                    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
                })
            }
        }else{
            const res = await axios.put(`http://localhost:8080/api/v1/article/${NowID}`, {
                "title": title,
                "cid": cate,
                "desc": desc,
                "context": content,
                "img": pic,
            })
            if (res.data.status !== 200) {
                return notification.open({
                    message: '错误警告',
                    description: `${res.data.message}`,
                    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
                })
            } else {
                return notification.open({
                    message: '保存成功',
                    description: `${res.data.message}`,
                    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
                })
            }
        }
    }


    return (
        <div>
            <Card className={B2style.block}>
                <Input.Group compact>

                    <div style={{ width: '70%', marginRight:'2%'}}>
                        <div id="vditor"></div>
                    </div>

                    <div style={{ width: '27%' }}>
                        <Card style={{ width: "100%" }}>
                            <p>文章标题</p>
                            <Input defaultValue={title}  onPressEnter={ChangeTitle} />
                        </Card>

                        <Card style={{ width: "100%" }}>
                            <p>文章分类</p>
                            <Select
                                options = {cates}
                                placeholder='选择文章分类'
                                allowClear
                                style={{ width: '100%' }}
                                onChange={handleChange}>
                            </Select>
                        </Card>

                        <Card style={{ width: "100%" }}>
                            <p>文章概述</p>
                            <TextArea rows={4} onPressEnter={ChangeSum}/>
                        </Card>

                        <Card style={{ width: "100%" }}>
                            <p>文章封面图</p>
                            <Input defaultValue={pic} onPressEnter={Changepic} />
                        </Card>

                        <Card style={{ width: "100%" }}>
                            <Button type="primary" style={{ marginRight: "10px" }} onClick={Save}>保存</Button>
                            <Button type="primary" style={{ marginRight: "10px" }} onClick="">发布</Button>
                        </Card>
                    </div>
                </Input.Group>
            </Card>
        </div>
    )
}

export default Block2
