import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Layout from '../components/layout'
import ProjectContainer from '../components/projectComp'

const About = () => (
    <Layout>
        <Head>
            <title>About</title>
        </Head>
        <Nav />
        <div>
            <a href="/">This is the about page</a>
        </div>
        <ProjectContainer />
    </Layout>
)

export default About