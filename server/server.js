const express = require('express')
const app = express()
const cors = require('cors')
const database = require('./database')


app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Server rodando')
})





app.post('/regisTopic', (req, res) => {
    let {title, body, categoria} = req.body
    
    if(title != undefined && body != undefined){
        let data = {
            title,
            content: body,
            categorias_id: categoria
        }

        database.insert(data).into('topicos').then(response => {
            
            res.redirect('http://localhost:3000/')
        }).catch(e => {
            console.log(e)
        })
    } 
})

app.post('/regisCategory', (req, res) => {
    let {name} = req.body
    
    if(name != undefined){
        let category = {
            name:name
        }
        
        if(name.length > 0){
            database.insert(category).into('categorias').then(response => {
                
                res.redirect('http://localhost:3000/')
            }).catch(err => {
                console.log(err)
            })
        }
    }
})

app.get('/getTopics', (req, res) => {
    database.select(['topicos.id', 'topicos.title', 'topicos.content', 'categorias.name']).table('categorias').innerJoin('topicos','topicos.categorias_id','categorias.id').then(data => {
       
        res.send(data)
    }).catch(e => {
        console.log(e)
    })
})


app.get('/getTopicandResponses', (req, res) => {
    database.select(['topicos.id', 'topicos.title','respostas.resposta']).table('topicos').leftJoin('respostas','respostas.topicos_id','topicos.id').then(data => {   
            res.send(data)          
    }).catch(err => {
        console.log(err)
    })
})

app.get('/getCategorys', (req, res) => {
    database.select('*').table('categorias').then(data => {
        res.send(data)
    }).catch(e => {
        console.log(e)
    })
})

app.get('/getCategoryTopics/:id', (req, res) => {
    let {id} = req.params
    
    database.select(['topicos.id', 'topicos.title', 'topicos.content', 'categorias.name']).table('categorias').innerJoin('topicos', 'topicos.categorias_id', 'categorias.id').where('categorias.id', id).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
    })
})


app.get('/getTopic/:id', (req, res) => {
    let {id} = req.params
    
    database.select(['topicos.id', 'topicos.title', 'topicos.content','respostas.resposta']).table('topicos').leftJoin('respostas','respostas.topicos_id','topicos.id').where('topicos.id',id).then(data => {    
        
        res.send(data)
        
    }).catch(err => {
        console.log(err)
    })
})

app.post('/regisResponse', (req, res) => {
    const {quest, response} = req.body
    if(quest != undefined && response != undefined){
        if(response.length > 0){
            let saveResponse = {
                topicos_id: quest,
                resposta: response
            }
            database.insert(saveResponse).into('respostas').then(result => {
                
                res.redirect('http://localhost:3000/')
            }).catch(err => {
                console.log(err)
            })
        }else{
            res.redirect('http://localhost:3000/')
        }
    }else{
        res.redirect('http://localhost:3000/')
    }
})

app.listen(9000, () => {
    console.log('http://localhost:9000')
})