import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import B1style from './index.module.css'


function Block1() {
    const [datas, setdata] = useState([])

    useEffect(() => {
        async function GetArt () {
            const res = await axios.get('http://localhost:8080/api/v1/article?pagesize=6&pagenum=1')
            setdata(res.data.data)
            console.log(res)
        }
     GetArt()
    }, [])

    const notic ="问题的关键究竟为何？ 带着这些问题，我们来审视一下你好。 可是，即使是这样，你好的出现仍然代表了一定的意义。"
    const arttotal = 8
    const catetotal = 4
    const booktotal  = 3


    return (

        <div className={B1style.body}>
            <main className={B1style.PageCont}>
            {datas.map((data) => {
                return (
                    <Link to={`/article/${data.id}`} className={B1style.card} style={{ backgroundImage: `url(${data.img})` }}>
                        <div className={B1style.content}>
                            <h2 className={B1style.title}>{data.title}</h2>
                            <p className={B1style.sketch}>{data.desc}</p>
                        </div>
                    </Link>
                )
            })}
        </main>

            <div className={B1style.side}>
                <div className={B1style.info}>
                    <div className={B1style.sidecontent}>
                        <img className={B1style.photo}
                            src="http://qxb2o0r7y.hb-bkt.clouddn.com/FmILLj7KL2rlH18npwfE-D5jasV_"
                            alt="头像">
                        </img>
                        <div className={B1style.cardinfo} >
                            <div className={B1style.carddata}>
                                <Link to="/sum" className={B1style.Link} >
                                    <div>文章</div>
                                    <div>{arttotal}</div>
                                </Link>
                            </div>
                            <div className={B1style.carddata}>
                                <Link to="/sum" className={B1style.Link} >
                                    <div>书籍</div>
                                    <div>{booktotal}</div>
                                </Link>
                            </div>
                            <div className={B1style.carddata}>
                                <Link to="/sum" className={B1style.Link} >
                                    <div>分类</div>
                                    <div>{catetotal}</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={B1style.notic}>
                    <div className={B1style.noticHeader}>公告</div>
                    <div className={B1style.noticContent}>{notic}</div>
                </div>
            </div>
        </div>

    )
}

export default Block1
