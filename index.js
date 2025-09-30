// 1. Import express and axios
import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import morgan from 'morgan';

// 2. Create an express app and set the port number.
const app = express();
const PORT = 3000;

// 3. Use the public folder for static files.
app.use(express.static('public'));

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

// 4. When the user goes to the home page it should render the index.ejs file.
// app.get('/', (req, res) => {
//   res.render('index.ejs');
// }); 

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
app.get("/", async (req, res) => {
    try {
        const result = await axios.get('https://secrets-api.appbrewery.com/random')
        const secret = result.data.secret
        const username = result.data.username
        res.render('index.ejs', { secret: secret, user: username });

    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching secret');
    } });

// 6. Listen on your predefined port and start the server.
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}   );
