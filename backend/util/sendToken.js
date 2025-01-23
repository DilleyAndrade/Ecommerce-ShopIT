//Criar token e salvar no cookie
export default (user, statusCode, res) => {
  //Criar token JWT
  const token = user.getJwtToken();

  //Opções do cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
    ),
    //HttpOnly não pode ser acessado no front-end, por isso estamos passando aqui, gera mais segurança
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    token,
  });
};
