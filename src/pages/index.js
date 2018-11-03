import React from 'react'
import Link from 'gatsby-link'
import styles from './styles.module.scss'

import { Tags } from '../objects/tags'

export default ({ data }) => {
	return (
		<ul className={styles.list}>
			{data.allMarkdownRemark.edges.map(({ node }) => (
				<li key={node.id} className={styles.person}>
					<a className={styles.blockLink} href={node.frontmatter.url} />
					<a className={styles.titleLink} href={node.frontmatter.url}>
						<h2>{node.frontmatter.title}</h2>
					</a>
					<p className={styles.subtitle}>{node.frontmatter.role}</p>
					<a className={styles.link} href="http://twitter.com/">
						{node.frontmatter.twitter}
					</a>
					<div dangerouslySetInnerHTML={{ __html: node.html }} />
				</li>
			))}
		</ul>
	)
}

export const query = graphql`
	query IndexQuery {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(sort: { fields: [frontmatter___title], order: DESC }) {
			totalCount
			edges {
				node {
					id
					html
					frontmatter {
						title
						twitter
						tags
						url
						role
					}
					fields {
						slug
					}
					excerpt
				}
			}
		}
	}
`
