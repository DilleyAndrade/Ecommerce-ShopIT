import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      maxLength: [50, "Your name cannot excees 50 caracteres"],
    },

    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minLength: [6, "Your password must be longer than 6 caracteres"],
      select: false, //Evita que a senha seja enviada na resposta ao servidor
    },
    avatar: {
      public_id: String,
      url: String,
    },
    role: {
      type: String,
      default: "user",
    },
    resetPasswordToken: String, //Token para redefinição de senha
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

//Encriptar a senha do usuário antes de salvar
userSchema.pre("save", async function (next) {
  //Se a senha não for modificada, siga o fluxo normalmente
  if (!this.isModified("password")) {
    next();
  }
  //Se for modificada, encriptar antes de salvar
  this.password = await bcrypt.hash(this.password, 10); //O 10 representa o poder de encriptação
});

//Retorna o Json Web Token
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE_TIME,
  });
};

export default mongoose.model("User", userSchema);
