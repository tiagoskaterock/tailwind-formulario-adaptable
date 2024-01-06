document.addEventListener('DOMContentLoaded', function() {	

	const switcherTheme = document.querySelector('[data-id="swith-theme"]')
	const htmlTag = document.documentElement

	const storageThemeValue = localStorage.getItem('theme')

	if (storageThemeValue != null) {
		htmlTag.setAttribute('data-theme', storageThemeValue)
	}

	if (htmlTag.getAttribute('data-theme') == 'dark') {
		switcherTheme.checked = true
	}
	
	switcherTheme.addEventListener('click', () => toggleTheme() )

	const toggleTheme = () => {
		const newTheme = switcherTheme.checked ? 'dark' : 'light'
		htmlTag.setAttribute('data-theme', newTheme)

		localStorage.setItem('theme', newTheme)
	}

})
