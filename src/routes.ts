import { Router } from "express"
import { createUserController } from './useCases/CreateUser';

const router = Router();

router.post('/users', (request, response) => {
    return createUserController.handler(request, response)
});

export { router };