import nodemailer from "nodemailer";

export const sendVerificationEmail = async (email, userId) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verify your email",
    html: `<p>Please verify your email by clicking <a href="${process.env.NEXT_PUBLIC_URL}/auth/verify/${userId}">here</a>.</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Email Sending Error: ", error);
    throw new Error("Failed to send verification email");
  }
};
