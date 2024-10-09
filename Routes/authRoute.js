const express = require("express");
const {
  register,
  login,
  profile,
  refresh,
  profileUpdate,
  getAllAdmin,
} = require("../Controllers/userController");

const { auth, authAdmin } = require("../Middlewares/authMiddleware");

//routing for authentication
const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/me", auth, profile);
router.put("/me", auth, profileUpdate);
router.post("/refresh", refresh);
router.get("/admins", auth, getAllAdmin);

module.exports = router;
