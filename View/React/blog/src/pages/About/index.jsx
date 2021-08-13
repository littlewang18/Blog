import React from 'react'
import Header from '../../components/Header'
import Content from '../../components/Content'
import Footer from '../../components/Footer'

function About() {
    return (
        <div>
            <Header NowPage={3} />
            <Content NowPage={3} />
            <Footer />
        </div>
    )
}

export default About
