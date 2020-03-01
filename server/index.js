const express = require('express')

const app = express()
app.use(require('cors')())
app.use(express.json())

require('./plugins/db')(app)
require('./routers/admin')(app)

app.listen(3000,() => {
    console.log('listen on 3000')
})