import React from 'react'
import Link from 'gatsby-link'
import styles from './profile.module.scss'

export default ({ data }) => {
	const post = data.markdownRemark
	return (
		<div className={styles.profile}>
			<h2>{post.frontmatter.title}</h2>
			<div dangerouslySetInnerHTML={{ __html: post.html }} />
		</div>
	)
}

export const query = graphql`
	query ProfileQuery($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				twitter
				url
			}
		}
	}
`
