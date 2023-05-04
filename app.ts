import express from 'express'
import pairs from './api/pairs'
import summary from './api/summary'
import tokens from './api/tokens/index'
import tokenByAddress from './api/tokens/tokens'
import NodeCache from 'node-cache'

var app = express()

const memCache = new NodeCache({
    stdTTL: 300,
    checkperiod: 300,
})

var app = express()
app.use((req, res: any, next) => {
    let key =  '__express__' + req.originalUrl || req.url
    let cacheContent = memCache.get(key);
    if(cacheContent){
        res.send( cacheContent );
        return
    }else{
        res.sendResponse = res.send
        res.send = (body: any) => {
            memCache.set(key,body);
            res.sendResponse(body)
        }
        next()
    }
})


app.get('/api/pairs', pairs)  
app.get('/api/summary', summary)  
app.get('/api/tokens', tokens)  
app.get('/api/tokens/:address', tokenByAddress)

const port = process.env.PORT  || 3000
app.listen(port);
console.log(`>kaidex-info-api running! (:${port})`);