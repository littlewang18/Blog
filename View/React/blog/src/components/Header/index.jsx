import { React } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowDown } from "react-icons/ai";
import Hstyle from './index.module.css'


function Header(props) {

    const NowPage = props.NowPage

    return (
        <div>
            <header className= {Hstyle.Header}>
                <section className={Hstyle.Section}>
                    <Link to='/home' className={Hstyle.Logo} >Will</Link>

                    <label htmlFor="toggle-1" className={Hstyle.Menu}>
                        <ul className={Hstyle.MenuUl}>
                            <li className={Hstyle.MenuLi}></li>
                            <li className={Hstyle.MenuLi}></li>
                            <li className={Hstyle.MenuLi}></li>
                        </ul>
                    </label>
                    <input type="checkbox" id="toggle-1"></input>


                    <nav className={Hstyle.Nav}>
                        <ul className={Hstyle.Ul}>
                            <li className={Hstyle.Li}>
                                <Link to='/home' className={Hstyle.Link}>
                                    <i className={Hstyle.I}></i>
                                    首页
                                </Link>
                            </li>
                            <li className={Hstyle.Li}>
                                <Link to='/notes' className={Hstyle.Link}>
                                    <i className={Hstyle.I}></i>
                                    随记
                                </Link>
                            </li>
                            <li className={Hstyle.Li}>
                                <Link to='/about' className={Hstyle.Link}>
                                    <i className={Hstyle.I}></i>
                                    关于
                                </Link>
                            </li>
                            <li className={Hstyle.Li}>
                                <Link to='/sum' className={Hstyle.Link}>
                                    <i className={Hstyle.I}></i>
                                    归档
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </section>
            </header>

            {NowPage === 1 &&<div className={Hstyle.Himage}
                style={{ backgroundImage: `url("https://w.wallhaven.cc/full/pk/wallhaven-pkw6y3.jpg")` }}>
                Will <div className={Hstyle.icon}> <AiOutlineArrowDown /> </div>
            </div>}
            {NowPage === 2 && <div className={Hstyle.image}
                style={{ backgroundImage: `url("https://w.wallhaven.cc/full/e7/wallhaven-e79j6o.jpg")` }}>
                随记
            </div>}
            {NowPage === 3 && <div className={Hstyle.image}
                style={{ backgroundImage: `url("https://w.wallhaven.cc/full/pk/wallhaven-pkwq73.jpg")` }}>
                关于
            </div>}
            {NowPage === 4 && <div className={Hstyle.image}
                style={{ backgroundImage: `url("https://w.wallhaven.cc/full/k7/wallhaven-k71pl1.jpg")` }}>
                归档
            </div>}

        </div>
    )
}


export default Header