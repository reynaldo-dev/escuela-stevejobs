import { getMaterias } from '../controllers/materias.controller';
import {Router} from 'express'

const router =  Router();

router.route('/:nivel')
    .get(getMaterias)



export default router