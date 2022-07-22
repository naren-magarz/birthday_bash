

const app = require('./app')

function server(){
    const PORT = process.env.PORT || 5000
    app.listen(PORT,()=>{
        console.log('server is listening on port',PORT)
    })
}
server()