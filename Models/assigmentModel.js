const mongoose = require("mongoose");

const assgimentSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "pls enter your first name"],
    },
    description: { type: String, required: true },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User", required }, // Admin ID
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required,
    }, // User who created the assignment
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
