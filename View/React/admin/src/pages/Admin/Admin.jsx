import { React, useState } from 'react'
import { Layout} from 'antd';

import MHeader from '../../components/Header';
import MSilder from '../../components/Silder';
import MContent from '../../components/Content';
import './index.css'



function Admin() {

    const [NowPage, setPage] = useState(1)


    return (
        <div className= 'admin'>
            <Layout style = {{height: "100%"}}>
                <MSilder ChangeKey={(key) => setPage(key)} />
                <Layout>
                    <MHeader NowKey = {NowPage} />
                    <MContent NowKey={NowPage} ChangeKey={(key) => setPage(key)}/>
                </Layout>
            </Layout>
        </div>
    )
}

export default Admin
