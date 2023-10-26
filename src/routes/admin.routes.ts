import { Router } from "express";
import { getAdmins, getAdmin, deleteAdmin, postAdmin, putAdmin } from "../controllers/login.controller";

const router = Router();

router.get('/', getAdmins)
router.get('/:id', getAdmin)
router.delete('/:id', deleteAdmin)
router.post('/', postAdmin)
router.put('/:id', putAdmin)

export default router;