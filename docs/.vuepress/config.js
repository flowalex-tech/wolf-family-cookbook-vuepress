module.exports = {
    dest: 'public',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Breads', link: '/bread/' },
            { text: 'Breakfast', link: '/breakfast/' },
            { text: 'Dessert', link: '/dessert/' }
          ],
          lastUpdated: 'Last Updated', // string | boolean
          smoothScroll: true
    }
}
