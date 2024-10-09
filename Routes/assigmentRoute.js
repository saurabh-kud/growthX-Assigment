const express = require("express");
const {
  createAssigment,
  fetchUserAllAssignment,
  fetchAdminAssignedAssignment,
  acceptAssigment,
  rejectAssigment,
} = require("../Controllers/assignmentController");

const { auth, authAdmin } = require("../Middlewares/authMiddleware");

//routing for authentication
const router = express.Router();

//user assignment route
router.post("/upload", auth, createAssigment);
router.get("/usr-assignments", auth, fetchUserAllAssignment);

//admin assignmet route
router.post("/assignments/:id/accept", authAdmin, acceptAssigment);
router.post("/assignments/:id/reject", authAdmin, rejectAssigment);
router.get("/assignments", authAdmin, fetchAdminAssignedAssignment);

module.exports = router;
