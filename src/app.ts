import { config } from 'dotenv';
import express, { Application, Request, Response} from 'express';
import routes from './api/routes'
import dbInit from './db/init';

config();
dbInit();

const PORT = process.env.PORT || 8080;

export const get = () => {
  const app: Application = express()

  // Body parsing Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.get('/', async(_: Request, res: Response): Promise<Response> => {
      return res.status(200).send({ message: `Welcome to the cookbook API! \n Endpoints available at http://localhost:${PORT}/api/v1` })
  })
  app.use('/api/v1', routes)

  return app
}

export const start = () => {
  const app = get();
  try {
      app.listen(PORT, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${PORT}/app/v1`);
      })
  } catch (error: any) {
      console.log(`Error occurred: ${error.message}`)
  }
}

start();
