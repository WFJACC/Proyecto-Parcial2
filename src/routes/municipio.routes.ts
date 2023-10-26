import { Router } from "express";
import { deleteMunicipio, getMunicipio, getMunicipios, postMunicipio, putMunicipio } from "../controllers/municipio.controller";

const router = Router();

router.get('/', getMunicipios)
router.get('/:id', getMunicipio)
router.delete('/:id', deleteMunicipio)
router.post('/', postMunicipio)
router.put('/:id', putMunicipio)

export default router;