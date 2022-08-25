import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import indexRoutes from './routes/index.js';


const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   res.send('Hello World!');
//   console.log(req.headers['user-agent']);
// });

app.use(indexRoutes);
app.use(express.static(join(__dirname, 'public')));

const puerto = process.env.PORT || 3005
app.listen(puerto);
console.log('Server is listening on port ', puerto);