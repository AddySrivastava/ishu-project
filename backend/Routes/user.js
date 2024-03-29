const express = require("express");
const {
  updateUser,
  deleteUser,
  getAllUser,
  getSingleUser,
  getUserProfile,
  getMyAppointments
} = require("../controllers/userController.js");

const { authenticate, restrict } = require("../auth/verifyToken.js");

const router = express.Router();

router.get("/:id", authenticate, restrict(["patient"]), getSingleUser);
router.get("/", authenticate, restrict(["admin"]), getAllUser);
router.put("/:id", authenticate, restrict(["patient"]), updateUser);
router.delete("/:id", authenticate, restrict(["patient"]), deleteUser);
router.get("/profile/me", authenticate, restrict(["patient"]), deleteUser);
router.get("/appointments/my-appointments", authenticate, restrict(["patient"]), getMyAppointments);

module.exports = router;