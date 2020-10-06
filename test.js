const {JoyApi} = require('./dist');

const api = new JoyApi();

api.getHomePage().then(page => {
    console.log(page.nextPage);
})

