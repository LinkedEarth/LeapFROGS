import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { Link } from '../components/link'
import Logo from '../../static/logo.svg'

import classes from '../styles/index.module.sass'

export default ({ data }) => {
    const siteMetadata = data.site.siteMetadata
    const chapters = data.allMarkdownRemark.edges.map(({ node }) => ({
        slug: node.fields.slug,
        title: node.frontmatter.title,
        description: node.frontmatter.description,
    }))
    return (
        <Layout isHome>
            <Logo className={classes.logo} aria-label={siteMetadata.title} />
            <section>

                <h1 className={classes.subtitle}><center>Welcome to LeapFROGS - A platform for FAIR science practice and publishing</center></h1>
                <div className={classes.introduction}>
                <p></p>

                <center>
                <p>
                    Sharing research data, software, and workflow is fundamental to building a Findable, Accessible, Interoperable, and Reusable (FAIR) open science ecosystem. Indeed, over the past decade, funders and publishers have introduced open science policies emphasizing reproducibility, recognizing increased frameworks that support the sharing of reproducible science products. 

                </p>
                <p>
                    LeapFROGS is a free online platofrm that curates lecture materials on science practice and publishing, along with interactive, self-graded exercises to create self-paced learning modules on various aspects of scienctific research. After you have completed these modules, you will be able to use Python and R more effectively for your research and publish all artifacts of your research according to FAIR principles. 
                </p>
                <p>
                    This page runs on a python3 kernel.
                </p>
                </center>
                </div>
            </section>
            {chapters.map(({ slug, title, description }) => (
                <section key={slug} className={classes.chapter}>
                    <h2 className={classes.chapterTitle}>
                        <Link hidden to={slug}>
                            {title}
                        </Link>
                    </h2>
                    <p className={classes.chapterDesc}>
                        <Link hidden to={slug}>
                            {description}
                        </Link>
                    </p>
                </section>
            ))}
        </Layout>
    )
}

export const pageQuery = graphql`
    {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            sort: { fields: [frontmatter___title], order: ASC }
            filter: { frontmatter: { type: { eq: "chapter" } } }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        description
                    }
                }
            }
        }
    }
`
