import  express  from "express";
import mongoose from "mongoose";
import Cards from './dbCards.js';
import cors from 'cors';
import Chats from './Chat.js'

//App Config
const app = express();
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://debayati:Fm!8Z.$6Mf7MAUA@cluster0.eclk5gi.mongodb.net/tinderdb?retryWrites=true&w=majority'

//Middleware
app.use(express.json())
app.use(cors())

//DB Config
mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//API EndPoints
app.get('/',(req,res) => res.status(200).send('hello clever programmers!!!'))

app.post('/tinder/cards',(req,res) => {
    const dbCard = req.body;

    Cards.create(dbCard,(err, data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/cards',(req,res) => {
    Cards.find((err,data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})

app.post('/tinder/chatScreen',(req,res) => {
    const dbChat = req.body
    Chats.create(dbChat,(err,data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/chatScreen',(req,res) => {
    Chats.find((err,data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));