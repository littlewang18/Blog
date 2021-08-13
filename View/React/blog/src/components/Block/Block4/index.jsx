import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment';


import  './index.css'

function Block4() {

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
        <div className="Bcard">
                <div className="row example-centered">
                    <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                        <ul className="timeline timeline-centered">

                        <li className="timeline-item period">
                            <div className="timeline-info"></div>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <h2 className="timeline-title">2021</h2>
                            </div>
                        </li>

                        {datas.map((data) => {
                            const time = moment(`${data.CreatedAt}`).format('MMMM D')
                            return (
                                <Link to={`/article/${data.id}`}>
                                    <li className="timeline-item">
                                        <div className="timeline-info">
                                            <span>{time}</span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h3 className="timeline-title">{data.title}</h3>
                                            <p>{data.desc} </p>
                                        </div>
                                    </li>
                                </Link>
                            )
                        })}



                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default Block4
