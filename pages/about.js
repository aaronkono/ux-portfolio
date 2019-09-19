import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Layout from '../components/layout'

const About = () => (
    <Layout>
        <Head>
            <title>About</title>
        </Head>
        <Nav />
        <div>
            <a href="/">This is the about page</a>
        </div>
    </Layout>
)

export default About