import React from 'react'
import Link from 'gatsby-link'
import styles from './styles.module.scss'

export default ({ children, data }) => (
	<div>
		<div className={styles.body}>
			<header className={styles.header}>
				<Link to={`/`}>
					<h1 className={styles.siteTitle}>
						Super Awesome<br />Women in Tech
					</h1>
				</Link>
				<p className={styles.description}>
					{data.site.siteMetadata.description}
				</p>
			</header>
			<div className={styles.content}>{children()}</div>
		</div>
		<footer className={styles.footer}>&copy; Michelle Barker 2018</footer>
	</div>
)

export const query = graphql`
	query LayoutQuery {
		site {
			siteMetadata {
				title
				description
			}
		}
	}
`
