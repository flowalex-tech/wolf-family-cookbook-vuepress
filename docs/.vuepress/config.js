module.exports = {
    dest: 'public',
    title: 'Wolf Family Cookbook',
    description: 'Collection of Recipies',
    themeConfig: {
        logo: '/headerimg.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Breads', link: '/bread/' },
            { text: 'Breakfast', link: '/breakfast/' },
            { text: 'Dessert', link: '/dessert/' },
            { text: 'Dips and Sauces', link: '/dips-sauces/' },
            { text: 'Drinks', link: '/drinks/' },
            { text: 'Mains', link: '/mains/' }
          ],
          lastUpdated: 'Last Updated', // string | boolean
          smoothScroll: true
    }
}
