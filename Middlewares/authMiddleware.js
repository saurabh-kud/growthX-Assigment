const jwt = require("jsonwebtoken");
const users = require("../Models/userModel");
const asyncHandler = require("express-async-handler");


//middleware for checking user is authorized or not 
const auth = asyncHandler(async (req, res, next) => {
  const reqHeader = req.headers.Authorization || req.headers.authorization;

  if (!reqHeader) {
    res.status(401);
    throw new Error("access token is required || Unauthorized");
  }

  if (reqHeader && reqHeader.startsWith("Bearer")) {
    const token = reqHeader.split(" ")[1];
    if (!token) {
      res.status(401);
      throw new Error("access token is required || Unauthorized");
    }
    try {
      const decode = jwt.verify(token, process.env.ACCESS_SECRET);
      if (!decode) {
        res.status(401);
        throw new error("Unauthorized");
      }
      const { email } = decode.user;
      const user = await users.findOne({ email }).select("-password");

      if (user) {
        req.user = user;

        next();
      } else {
        throw new Error("token invalid");
      }
    } catch (error) {
      res.status(401);
      throw new Error("token is invalid");
    }
  }
});


//middleware for checking user is admin or not 
const authAdmin = asyncHandler(async (req, res, next) => {
  const reqHeader = req.headers.Authorization || req.headers.authorization;

  if (!reqHeader) {
    res.status(401);
    throw new Error("access token is required || Unauthorized");
  }

  if (reqHeader && reqHeader.startsWith("Bearer")) {
    const token = reqHeader.split(" ")[1];
    if (!token) {
      res.status(401);
      throw new Error("access token is required || Unauthorized");
    }
    try {
      const decode = jwt.verify(token, process.env.ACCESS_SECRET);
      if (!decode) {
        res.status(401);
        throw new error("Unauthorized");
      }
      const { email } = decode.user;
      const user = await users.findOne({ email }).select("-password");

      if (user.role == "admin") {
        req.user = user;
        next();
      } else {
        res.status(401);
        throw new Error("unauthorized route");
      }
    } catch (error) {
      res.status(401);
      throw new Error(error.message);
    }
  } else {
    res.status(401);
    throw new Error("invalid token");
  }
});

module.exports = {
  auth,
  authAdmin,
};
