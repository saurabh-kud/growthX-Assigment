const express = require("express");
const {
  register,
  login,
  profile,
  refresh,
  profileUpdate,
} = require("../Controllers/userController");

const { auth, authAdmin } = require("../Middlewares/authMiddleware");

//routing for authentication
const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/me", auth, profile);
router.put("/:id/profile", auth, profileUpdate);
router.post("/refresh", refresh);
// router.get("/admin", authAdmin, getRegistration);
// router.post("/admin", authAdmin, registrationApproval);

module.exports = router;
