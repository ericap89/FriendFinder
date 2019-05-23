// Build 'path' 

const { join } = require('path')

module.exports = app => {
    app.get('/', (req, res) => {
        //use direct path to home page  
        res.sendFile(join(__dirname, '../public/home.html'))
    })
    
}