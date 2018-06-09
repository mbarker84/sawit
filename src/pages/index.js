import React from 'react'
import Link from 'gatsby-link'
import styles from './styles.module.scss'

import { Tags } from '../objects/tags'

export default ({ data }) => {
	return (
		<ul className={styles.list}>
			{data.allMarkdownRemark.edges.map(({ node }) => (
				<li key={node.id} className={styles.person}>
					<Link
						to={node.fields.slug}
						css={{ textDecoration: `none`, color: `inherit` }}
						className={styles.titleLink}
					>
						<h2>{node.frontmatter.title}</h2>
					</Link>
					<a className={styles.link} href="http://twitter.com/">
						{node.frontmatter.twitter}
					</a>
					<a className={styles.link} href={node.frontmatter.url}>
						{node.frontmatter.url}
					</a>
					<Tags items={node.frontmatter.tags} className={styles.tagsList} />
					<Link
						to={node.fields.slug}
						css={{ textDecoration: `none`, color: `inherit` }}
					>
						<p>Read more...</p>
					</Link>
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
					frontmatter {
						title
						twitter
						tags
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
