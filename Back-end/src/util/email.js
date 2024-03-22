import { UserModel } from "../models/user-model.js";
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "TastebiteRecipe@gmail.com",
    pass: "wgvmiwjfhudzlomn",
  },
});
export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const resetToken = Math.floor(1000 + Math.random() * 9000).toString();
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000;
    await user.save();

    const mailOptions = {
      from: "TastebiteRecipe@gmail.com",
      to: email,
      subject: "Password Reset Code",
      text: `Your verification code for password reset is: ${resetToken}`,
    };
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Reset token sent to your email" });
  } catch (error) {
    console.error("Error in forgot password:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
