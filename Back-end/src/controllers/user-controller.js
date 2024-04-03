import { UserModel } from "../models/user-model.js";
//import { transporter } from "../util/email.js";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
export const getAllUsers = async (req, res) => {
  const users_data = await UserModel.find({});
  res.status(200).json({ users: users_data });
};

export const getUser = async (req, res) => {
  const userId = req.user.user_id;
  const user = await UserModel.findOne({ _id: userId });
  console.log(user);

  if (user.length == 0) {
    res.status(405).json({ message: "User not found" });
  } else {
    res.status(200).json({ user: user });
  }
  console.log(user);
};

export const createUser = async (req, res) => {
  try {
    const body = req.body;
    const hashedPassword = await bcrypt.hash(body.password || "", 10);
    await UserModel.create({
      userName: body.userName,
      email: body.email,
      password: hashedPassword,
      createdOn: new Date(),
    });
    const users = await UserModel.find();

    res.status(200).json({ users: users });
  } catch (err) {
    res.status(406).json({ message: err.message });
  }
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 405,
  secure: true,
  auth: {
    user: "TastebiteRecipe@gmail.com",
    pass: "wgvmiwjfhudzlomn",
  },
});

export const resetPassword = async (req, res) => {
  const { resetPasswordToken, newPassword } = req.body;
  try {
    const user = await UserModel.findOne({ resetPasswordToken });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (Date.now() > user.resetPasswordExpires) {
      return res.status(404).json({ message: "Token expired" });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();
    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error("Error in reset password:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

let resetToken = null;

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  console.log("email", email);
  try {
    const user = await UserModel.findOne({ email: email });
    console.log("user", user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    resetToken = Math.floor(1000 + Math.random() * 9000).toString();
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000;
    const options = {
      from: "TastebiteRecipe@gmail.com",
      to: email,
      subject: "reset pass",
      text: `Your Tastebite password recovery code is ${resetToken}. Thank you`,
    };
    console.log("resetToken", resetToken);
    await transporter.sendMail(options);
    res.status(200).json({ message: resetToken });
  } catch (error) {
    console.error("Error in forgot password:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const verifyCode = async (req, res) => {
  try {
    const { code } = req.body;
    console.log("code", code);
    console.log("resetToken", resetToken);
    if (code === resetToken) {
      res.status(200).json({ message: "Code verified successfully" });
    } else {
      res.status(400).json({ message: "Invalid code" });
    }
  } catch (error) {
    console.error("Error verifying code:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const UpdatePassword = async (req, res) => {
  try {
    const { password, email } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;

    await user.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error updating password:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
