const asyncHandler = require("express-async-handler");

const assignment = require("../Models/assigmentModel");
const users = require("../Models/userModel");

//create new assigmnet
const createAssigment = asyncHandler(async (req, res) => {
  const { title, description, adminId } = req.body;
  if (!title) {
    throw new Error("Assigment title is mandatory");
  } else if (!description) {
    throw new Error("Assigment description is mandatory");
  } else if (!adminId) {
    throw new Error("admin id is mandatory");
  }
  try {
    //admin is not allowed to upload assignment
    if (req.user.role === "admin") {
      res.status(400);
      throw new Error("Admin can't upload the assignment");
    }

    //check admin id is valid admin or not
    const user = await users.findOne({ _id: adminId }).select("-password");
    if (!user || user.role != "admin") {
      res.status(422);
      throw new Error("Provide adminId is not valid or not an admin");
    }
    //create assiment in db
    assignment_data = await assignment.create({
      title,
      description,
      userId: req.user._id,
      adminId: adminId,
    });
    //send back response back
    res.status(201).json({
      status: true,
      message: "Assignment created successfully",
      data: {
        id: assignment_data.id,
        title: assignment_data.title,
        description: assignment_data.description,
        adminId: assignment_data.adminId,
      },
    });
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
});

//fetche all assigment of a user by user
const fetchUserAllAssignment = asyncHandler(async (req, res) => {
  try {
    const assignment_data = await assignment
      .find({
        userId: req.user._id,
      })
      .select("-userId")
      .populate("adminId", "name") // Populating the userId field and fetching only the name
      .sort({ createdAt: -1 })
      .exec();
    res.status(200).json({
      status: true,
      message: "Assignment fetched successfully",
      data: assignment_data,
    });
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
});

//fetched all assigned  assignment for  a specific admin
const fetchAdminAssignedAssignment = asyncHandler(async (req, res) => {
  try {
    const assignment_data = await assignment
      .find({
        adminId: req.user._id,
      })
      .select("-adminId")
      .populate("userId", "name") // Populating the userId field and fetching only the name
      .sort({ createdAt: -1 })
      .exec();
    res.status(200).json({
      status: true,
      message: "Assignment fetched successfully",
      data: assignment_data,
    });
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
});

//accept  the assignment by admin
const acceptAssigment = asyncHandler(async (req, res) => {
  id = req.params.id;
  if (!id) {
    res.status(422);
    throw new Error("Please provide valid Assigment id");
  }

  try {
    const assignment_data = await assignment.findByIdAndUpdate(
      id,
      {
        $set: { status: "success" },
      },
      { new: true }
    );
    if (!assignment_data) {
      res.status(400);
      throw new Error("Assignment id is invalid");
    }
    res.status(200).json({
      status: true,
      message: "Assignment accepted successfully",
      data: {
        id: assignment_data.id,
        title: assignment_data.title,
        description: assignment_data.description,
        userId: assignment_data.userId,
        adminId: assignment_data.adminId,
        status: assignment_data.status,
      },
    });
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
});

//reject the assignment
const rejectAssigment = asyncHandler(async (req, res) => {
  id = req.params.id;
  if (!id) {
    res.status(422);
    throw new Error("Please provide valid Assigment id");
  }

  try {
    const assignment_data = await assignment.findByIdAndUpdate(
      id,
      {
        $set: { status: "failed" },
      },
      { new: true }
    );
    if (!assignment_data) {
      res.status(400);
      throw new Error("Assignment id is invalid");
    }

    res.status(200).json({
      status: true,
      message: "Assignment rejected successfully",
      data: {
        id: assignment_data.id,
        title: assignment_data.title,
        description: assignment_data.description,
        userId: assignment_data.userId,
        adminId: assignment_data.adminId,
        status: assignment_data.status,
      },
    });
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
});

module.exports = {
  createAssigment,
  fetchUserAllAssignment,
  fetchAdminAssignedAssignment,
  acceptAssigment,
  rejectAssigment,
};
