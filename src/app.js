import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import router from './routes/index-routes';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger-output.json';
import cors from 'cors';

const app = express();
// save variable and then obtain
app.set('pkg', pkg);

// show console status and url
app.use(morgan('dev'));
// middleware
app.use(cors());
// accept format json
app.use(express.json({ limit: '50mb' }));

// accept forms dont have image
app.use(express.urlencoded({ limit: '50mb', extended: false }));

// router image show
app.use('/', express.static(__dirname + '/storage/imgs'));
app.use('/text', express.static(__dirname + '/storage/credencial'));

//info basic
app.get('/', (req, res) => {
  res.json({
    name: app.get('pkg').name,
    description: app.get('pkg').description,
    version: app.get('pkg').version,
    author: app.get('pkg').author,
    dirname: __dirname,
  });
});

// import router into app
app.use(router);

// swagger documentation
app.use('/previser-doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

export default app;
