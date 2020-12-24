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
            { text: 'Mains', link: '/mains/' },
            { text: 'Sides', link: '/sides/' },
            { text: 'Soups', link: '/soups/' }
          ],
          lastUpdated: 'Last Updated', // string | boolean
          smoothScroll: true,
          sidebar: {
            '/bread/': [{
              title: 'Bread',
              collapasble: true,
              children: [
                ''
              ]
            }],
            '/breakfast/': [{
                title: 'Breakfast',
                collapasble: true,
                children: [
                  ''
                ]
              }],
              '/dessert/': [{
                title: 'Dessert',
                collapsable: true,
                children: [
                  '',
                  'bars/',
                  'cakes/',
                  'candy/',
                  'cookies/',
                  'pies/'
                ]
              }],
              '/dips-sauces/': [{
                title: 'Dips and Sauces',
                collapasble: true,
                children: [
                  ''
                ]
              }],
              '/mains/': [{
                title: 'Mains',
                collapsable: true,
                children: [
                  '',
                  'african/',
                  'american/',
                  'asian/',
                  'hispanic/',
                  'indian/',
                  'middle-eastern/',
                  'spanish/'
                ]
              }],
              '/sides/': [{
                title: 'Sides',
                collapasble: false,
                children: [
                  ''
                ]
              }]
          }
    }
}
