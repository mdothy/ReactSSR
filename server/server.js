const express = require('express')
const ReactSSR = require('react-dom/server')
const fs = require('fs')
const path = require('path')
const serverEntry = require('../dist/server-entry').default

const template = fs.readFileSync(path.join(__dirname,'../dist/index.html'),'utf-8')

const app = new express()
app.use('/public',express.static(path.join(__dirname,'../dist')))

app.get('*',function(req,res) {
    const appString = ReactSSR.renderToString(serverEntry)
    console.log(appString)
    res.send(template.replace('<!-- app -->',appString))
})

app.listen(3333,() => {
    console.log('service is started')
})