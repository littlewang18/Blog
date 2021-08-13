import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import B2style from './index.module.css'

function Block2() {
    const [datas, setdata] = useState([])

    useEffect(() => {
        async function GetArt() {
            const res = await axios.get('http://localhost:8080/api/v1/article?pagesize=6&pagenum=1')
            setdata(res.data.data)
            console.log(res)
        }
        GetArt()
    }, [])

    return (
        <main className={B2style.PageCont}>
            {datas.map((data) => {
                return (
                    <Link to={`/article/${data.id}`} className={B2style.card} style={{ backgroundImage: `url(${data.img})` }}>
                        <div className={B2style.content}>
                            <h2 className={B2style.title}>{data.title}</h2>
                            <p className={B2style.sketch}>{data.desc}</p>
                        </div>
                    </Link>
                )
            })}
        </main>
    )
}

export default Block2
