const asyncHandler = require("express-async-handler");
const users = require("../Models/userModel");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//user register
const register = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name) {
    res.status(422);
    throw new Error("Name is required");
  } else if (!email) {
    res.status(422);
    throw new Error("Email is required");
  } else if (!password) {
    res.status(422);
    throw new Error("Password is required");
  }

  try {
    //cheking user available in database
    if (await users.findOne({ email })) {
      res.status(409);
      throw new Error("User already exist please login!");
    }

    const hasedPassword = await bcrypt.hash(password, 10);
    const user = await users.create({
      name,
      email,
      role:
        role && typeof role == "string" && role.toLowerCase() === "admin"
          ? "admin"
          : "user",
      password: hasedPassword,
    });

    if (user) {
      const accesstoken = jwt.sign(
        { user: { email: user.email, id: user._id } },
        process.env.ACCESS_SECRET,
        { expiresIn: "1d" }
      );
      const refreshToken = jwt.sign(
        { user: { email: user.email, id: user._id } },
        process.env.REFRESH_SECRET,
        { expiresIn: "3d" }
      );

      res.status(201).json({
        status: true,
        message: "User created successfully",
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          accessToken: accesstoken,
          refreshToken: refreshToken,
        },
      });
    }
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
});

//user login
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    res.status(422);
    throw new Error("Email is required");
  } else if (!password) {
    res.status(422);
    throw new Error("Password is required");
  }

  try {
    //find user in db
    const available = await users.findOne({ email });
    if (!available) {
      res.status(401);
      throw new Error("User doesn't exist please register");
    }
    //if user available then create token using credential and send back
    if (
      available &&
      (await bcrypt.compare(String(password), available.password))
    ) {
      const accessToken = jwt.sign(
        { user: { email: available.email, id: available._id } },
        process.env.ACCESS_SECRET,
        { expiresIn: "1d" }
      );
      const refreshToken = jwt.sign(
        { user: { email: available.email, id: available._id } },
        process.env.REFRESH_SECRET,
        { expiresIn: "1d" }
      );
      res.status(200);
      res.json({
        status: true,
        message: "Login successfull",
        data: {
          id: available.id,
          name: available.name,
          email: available.email,
          role: available.role,
          accessToken,
          refreshToken,
        },
      });
    } else {
      res.status(401);
      throw new Error("Email or password is wrong");
    }
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
});

// get profile details after authorization
const profile = asyncHandler(async (req, res) => {
  res.status(200).json({
    status: true,
    message: "sucessfully get profile",
    data: req.user,
  });
});

//update profile details after authorization
const profileUpdate = asyncHandler(async (req, res) => {
  const { name, email } = req.body;
  if (!name) {
    res.status(422);
    throw new Error("Name is required");
  } else if (!email) {
    res.status(422);
    throw new Error("Email is required");
  }

  id = req.user._id;
  try {
    const user = await users.findByIdAndUpdate(
      id,
      {
        name: name,
        email: email,
      },
      { new: true }
    );
    if (!user) {
      res.status(400);
      throw new Error("user id not valid");
    }

    if (user) {
      res.status(201).json({
        status: true,
        message: "User profile updated",
        data: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    }
  } catch (error) {
    console.log(error.message);
    throw new Error("something went wrong", error.message);
  }
});

//get access token after check valid refresh token
const refresh = asyncHandler(async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) {
    res.status(400);
    throw new Error("Refresh token is required");
  }

  try {
    var decode = jwt.decode(refreshToken);
  } catch (error) {
    res.status(401);
    throw new Error("provide valid refresh token");
  }

  if (!decode) {
    throw new Error("provide valid refresh token");
  }

  const email = decode.user.email;
  if (!email) {
    res.status(404);
    throw new Error("provide valid refresh token");
  }

  try {
    const user = await users.findOne({ email });
    if (user) {
      const accesstoken = jwt.sign(
        { user: { email: user.email, id: user._id } },
        process.env.ACCESS_SECRET,
        { expiresIn: "1d" }
      );
      const refreshToken = jwt.sign(
        { user: { email: user.email, id: user._id } },
        process.env.REFRESH_SECRET,
        { expiresIn: "3d" }
      );
      res.status(200).json({
        accessToken: accesstoken,
        refreshToken: refreshToken,
      });
    } else {
      res.status(401);
      throw new Error("invalid refresh token");
    }
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
});

//fetch all admins
const getAllAdmin = asyncHandler(async (req, res) => {
  try {
    admins = await users.find({ role: "admin" }).select("-password");
    res.status(200).json({
      type: "success",
      message: "admin fetched successfully",
      data: admins,
    });
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
});

module.exports = {
  register,
  login,
  profile,
  profileUpdate,
  refresh,
  getAllAdmin,
};
