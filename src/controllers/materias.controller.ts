import { Request, Response } from 'express';
import {pool} from '../pool';


export const getMaterias = async (req: Request, res: Response) => {
    const { nivel } = req.params
    try {

        const result = await pool.query('SELECT * FROM materia WHERE nivel = $1', [nivel]);
        return res.status(200).json(result.rows);
    } catch (error) {
        res.status(204).json({ok: false,msg:'ocurrió un error'});	
    }
}