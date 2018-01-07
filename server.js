import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const server = express();
server.use(bodyParser.json());

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

server.get('/help', (request, response) => {
    response.render("index", { name: "DUDE!" });
});



server.use(express.static('public'));

server.listen(config.port, config.host, () => {
 console.log('listening...');
});