import React from 'react'
import styles from './styles.module.scss'

export default ({ children, data }) => (
	<div>
		<div className={styles.body}>
			<header className={styles.header}>
				<h1>{data.site.siteMetadata.title}</h1>
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
