import React from 'react'

import Block1 from '../Block/Block1'
import Block2 from '../Block/Block2'
import Block3 from '../Block/Block3'
import Block4 from '../Block/Block4'
import Cstyle from './index.module.css'

function Content(props) {

    const NowPage = props.NowPage

    return (
        <div className={Cstyle.Content}>
            {NowPage === 1 && <Block1 />}
            {NowPage === 2 && <Block2 />}
            {NowPage === 3 && <Block3 />}
            {NowPage === 4 && <Block4 />}
        </div>
    )
}

export default Content
