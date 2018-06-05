import React from 'react'
import Link from 'gatsby-link'
import styles from './styles.module.scss'

export default ({ data }) => {
	return (
		<div>
			{data.allMarkdownRemark.edges.map(({ node }) => (
				<div key={node.id}>
					<Link
						to={node.fields.slug}
						css={{ textDecoration: `none`, color: `inherit` }}
					>
						<h2>{node.frontmatter.title}</h2>
					</Link>
					<a className={styles.link} href="http://twitter.com/">
						{node.frontmatter.twitter}
					</a>
					<a className={styles.link} href={node.frontmatter.url}>
						{node.frontmatter.url}
					</a>
					<p>{node.excerpt}</p>
				</div>
			))}
		</div>
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
						url
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
