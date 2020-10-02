const {JoyApi} = require('./dist');

const api = new JoyApi();

const generate = (elements, l) => {
    elements.map(el => {
        if(el.type === 'a') {
            console.log(l + el.type + ' ' + el.data);
        } else {
            console.log(l + el.type);
        }
        if(el.childrens.length > 0) {
            generate(el.childrens, l + '. ');
        }
    })
}

api.getPage(21929).then(page => {

    page.posts.map(post => {
        console.log('---' + post.id + '---')
        generate(post.content.elements, '. ');
    })
})
