module.exports = {
	siteMetadata: {
		title: `Super Awesome Women in Tech`,
		description: `Find your next designer, developer or speaker (who happens to be a woman)`
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Super Awesome Women in Tech',
				short_name: 'SAWIT',
				start_url: '/',
				background_color: '#fcfdff',
				theme_color: '#95e8ed',
				display: 'minimal-ui',
				icon: 'src/images/icon_512.png'
			}
		},
		`gatsby-transformer-remark`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`
			}
		}
	]
}
