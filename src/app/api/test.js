export default function handler(req, res) {
  res.json({
    dbUri: process.env.MONGODB_URI,
    jwtSecret: process.env.JWT_ACCESS_SECRET,
    emailUser: process.env.EMAIL_USER,
  });
}
