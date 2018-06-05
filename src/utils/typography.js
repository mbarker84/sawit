import Typography from 'typography'
import doelgerTheme from 'typography-theme-doelger'
doelgerTheme.overrideThemeStyles = ({ rhythm }, options) => ({
	a: {
		textShadow: `none`,
		textDecoration: `none`,
		backgroundImage: `none`
	}
})

const typography = new Typography(doelgerTheme)

export default typography
