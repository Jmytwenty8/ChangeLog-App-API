import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const comparePassword = (password, hash) => {
  return bcrypt.compare(password, hash);
};

export const hashPassword = (password) => {
  return bcrypt.hash(password);
};

export const createJWT = (user) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET_KEY
  );

  return token;
};

export const protect = (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401);
    res.json({ message: "Not Authorised" });
    return;
  }

  const [, token] = bearer.split(" ");
  if (!token) {
    res.status(401);
    res.json({ message: "Invalid Token" });
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = user;
    next();
  } catch (e) {
    console.error(e);
    res.status(401);
    res.json({ message: "Invalid User" });
    return;
  }
};
