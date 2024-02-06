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

                <h1 className={classes.subtitle}><center>Welcome to PaleoHack - Python introduction workshop</center></h1>
                <div className={classes.introduction}>
                <p></p>

                <center>
                <p>
                    These short modules will walk you through an introduction to Python and the scientific Python stack; namely, <a href="https://numpy.org">NumPy</a>, <a href="https://pandas.pydata.org">Pandas</a>,<a href="https://matplotlib.org">Matplotlib</a>, and <a href="https://scitools.org.uk/cartopy/docs/latest/"> Cartopy</a>. These packages form the foundation upon which <a href="https://pyleoclim-util.readthedocs.io/en/master/">Pyleoclim</a> is built.

                    The last two modules refer to the use of GitHub and FAIR principles.

                </p>
                <p>
                    After these modules, you will be able to use Python more effectively for your research and work with Pyleoclim more efficiently. Remember that Pyleoclim is built upon these tools, so learning to make a plot in Matplotlib, for instance, will give you a better idea of how Pyleoclim works under the hood and how you can modify your plots.
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
