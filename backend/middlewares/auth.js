import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../util/errorHandler.js";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

//Verificar se o usuário está autenticado ou não
export const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Login first to acess this resource", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id);

  next();
});
