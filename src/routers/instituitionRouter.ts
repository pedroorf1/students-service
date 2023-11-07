import express from "express";
import * as institituition from "../controllers/instituitionController";
import { routeValidade } from "../helpers/service/routevalidade.midware";

const router = express();

router.post("/institituition", routeValidade, institituition.addOne);
export default router;
