import React, { useState}from 'react'
import { Layout} from 'antd';

import Block1 from '../Block/Block1';
import Block2 from '../Block/Block2';
import Block3 from '../Block/Block3';
import Block4 from '../Block/Block4';
import Block5 from '../Block/Block5';
import Block6 from '../Block/Block6';
import Block7 from '../Block/Block7';


const { Content } = Layout;

function MContent(props) {

    const [id, setId] = useState(0)
    const {NowKey, ChangeKey} = props


    return (
        <Content style={{margin: '0px, 36.4px ', padding: '28px'}}>
            {NowKey === '1' && <Block1 />}
            {NowKey === '2' && <Block2 NowID = {id}/>}
            {NowKey === '3' && <Block7 />}
            {NowKey === '4' && <Block3 ChangeId={(key) => setId(key)}  ChangeKey={(key) => ChangeKey(key)}/>}
            {NowKey === '5' && <Block4 />}
            {NowKey === '6' && <Block5 />}
            {NowKey === '7' && <Block6 />}
        </Content>

    )
}

export default MContent
