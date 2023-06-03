import { Router } from 'express';
import * as userController from '../controllers/user';

const usersRouter = Router();


usersRouter.post('/sign-in', (request, response) => {
  response.send('ok');
});

usersRouter.post('/sign-out', (request, response) => {
  response.send('ok');
});

usersRouter.post('/sign-up', (request, response) => {
  response.send('ok');
});

usersRouter.get(':id', (request, response) => {
  console.log('*******************************       ',request.params);
  // const id = Number(request.params?.id);
  // const result = userController.getById(id);
  return response.status(200).send('ok');
})

export default usersRouter;