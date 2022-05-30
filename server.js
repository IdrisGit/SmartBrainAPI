const express = require ('express');
const bcrypt = require ('bcrypt-nodejs');
const cors = require ('cors');
const knex = require ('knex');


const register = require ('./controllers/register');
const signin = require ('./controllers/signin');
const profile = require  ('./controllers/profile');
const image = require  ('./controllers/image');


const db = knex({
    client : 'pg',
    connection : {
        host : '127.0.0.1',
        user : 'postgres',
        password : '1234',
        database : 'faceDatabase'
    }
});


const app = express();
app.use(express.json());
app.use(cors());



app.get('/', (req,res) =>{res.send(database.users)})

app.post('/signin', (req, res) => {signin.handleSignin(req, res, db, bcrypt)} )

app.post('/register', (req, res) => {register.handleRegister(req, res, db, bcrypt)})

app.get('/profile/:id', (req, res) => {profile.getProfile(req, res, db)} )

app.put('/image', (req, res) => {image.handleImage(req, res, db)} )

app.post('/imageurl', (req, res) => {image.handleApiCall(res, req)})







app.listen(3000,()=>{
    console.log('app is working on port 3000')
})