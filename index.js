import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const port = 8000

app.use(express.static(__dirname));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})  