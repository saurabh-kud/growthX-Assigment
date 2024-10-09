const mongoose = require("mongoose");

const assgimentSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "pls enter title of assignment"],
    },
    description: { type: String, required: true },
    //user who created the assignment
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required,
    },
    //user who assigned the assignment
    adminId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required }, // Admin ID
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Assigment", assgimentSchema);
