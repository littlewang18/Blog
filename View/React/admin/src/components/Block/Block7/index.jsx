import React, { useState } from 'react'
import { Card, Input, Button, Upload, message, } from 'antd';
import {UploadOutlined } from '@ant-design/icons';

import B2style from './index.module.css'



function Block7() {

    const [URL, setURL] = useState('')

    const props = {
        name: 'file',
        action: 'http://localhost:8080/api/v1/upload',
        headers: {
            Authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
        },
        onChange(info) {
            if (info.file.status === 'done') {
                setURL(info.file.response.url)
                message.success(`${info.file.name} 上传成功`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name}上传失败`);
            }
        },
    };

    return (
        <div>
            <Card className={B2style.block}>
                <Input.Group compact>

                    <div style={{ width: '65%',height:'500px', marginRight:'2%'}}>
                        <img src={URL} alt='图片预览' style={{width: '100%', height:'100%', objectFit:'cover'}} ></img>
                    </div>

                    <div style={{ width: '30%' }}>
                        <Card style={{ width: "100%" }}>
                            <p>图片上传</p>
                            <Upload {...props}>
                                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                            </Upload>,
                        </Card>
                        <Card style={{ width: "100%" }}>
                            <p>URL</p>
                            <p>{URL}</p>
                        </Card>
                    </div>
                </Input.Group>
            </Card>
        </div>
    )
}







export default Block7