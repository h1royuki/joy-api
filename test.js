const {JoyApi} = require('./dist');

const api = new JoyApi();

api.getHomePage().then(page => {

    page.posts.map(post => {
        console.log('---' + post.id + '---')
        console.log(post.content)
    })
})

