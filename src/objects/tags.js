import React, { Component } from 'react'
import Link from 'gatsby-link'
import styles from './tags.module.scss'

export const Tags = props => {
	const tags = props.items
	if (tags) {
		const getTags = tags.map(el => {
			return (
				<li className={styles.tag}>
					<Link>{el}</Link>
				</li>
			)
		})
		return <ul className={styles.tagsList}>{getTags}</ul>
	}
}
