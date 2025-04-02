import express from "express";

import {
  createGeneralMaster,
  deleteGeneralMaster,
  getAllGeneralMasters,
  getGeneralDtlsByGeneralMstId,
  getGeneralMasterById,
  updateGeneralMaster,
} from "../controllers/general.controller.js";

const router = express.Router();

// GeneralMaster routes
router.post("/general-master", createGeneralMaster);
router.get("/general-master", getAllGeneralMasters);
router.get("/general-master/:id", getGeneralMasterById);
router.put("/general-master/:id", updateGeneralMaster);
router.delete("/general-master/:id", deleteGeneralMaster);
router.get(
  "/general-mst/:generalMstId",
  getGeneralDtlsByGeneralMstId
);


// // GeneralDtl routes
// router.post("/general-dtl", createGeneralDtl);
// router.get("/general-dtl", getAllGeneralDtls);
// router.get("/general-dtl/:id", getGeneralDtlById);
// router.put("/general-dtl/:id", updateGeneralDtl);
// router.delete("/general-dtl/:id", deleteGeneralDtl);

// router.get(
//   "/general-dtl/by-general-mst/:generalMstId",
//   getGeneralDtlsByGeneralMstId
// );
export default router;
