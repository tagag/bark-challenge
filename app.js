import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import apiRouter from './api.js';

const app = express();

app.set('trust proxy', 1);
app.use(helmet({ frameguard: false, contentSecurityPolicy: false }));
app.all('*', (req, res, next) => {
  // CORS headers
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Key, Authorization',
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(
  express.static('public', {
    index: 'index.html',
    setHeaders(res) {
      res.setHeader(
        'Content-Security-Policy',
        "default-src *; style-src * 'unsafe-inline'; script-src * 'unsafe-inline' ;",
      );
    },
  }),
);
app.use('/v1', apiRouter);

const server = app.listen(3001, () => {
  const serverAddress = server.address();
  console.log(serverAddress);
});
