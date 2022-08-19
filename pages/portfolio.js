import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Layout from '../components/layout'
import ProjectContainer from '../components/projectComp'

const Portfolio = () => (
    <Layout>
        <Head>
            <title>Portfolio</title>
        </Head>
        <Nav />
        <div>
            <a href="/">This is the Portfolio page</a>
        </div>
        <ProjectContainer />
    </Layout>
)

export default Portfolio