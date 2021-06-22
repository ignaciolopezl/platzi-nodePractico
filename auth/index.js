const jwt = require("jsonwebtoken");
const config = require("../config");
const error = require("../utils/error");

const secret = config.jwt.secret;

function sign(data) {
  return jwt.sign(data, secret);
}

function verify(token) {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    throw error("Token Invalido", 403);
  }
}

const check = {
  own: function (req, owner) {
    const decoded = decodeHeader(req);
    console.log(decoded);
    if (decoded.id !== owner) {
      throw error("No puedes hacer esto", 401);
    }
  },
  logged: function (req) {
    const decoded = decodeHeader(req);

  },
};

function getToken(auth) {
  if (!auth) {
    throw error("No viene Token", 406);
  }
  if (auth.indexOf("Bearer") === -1) {
    throw error("Formato Invalido", 400);
  }
  let token = auth.replace("Bearer ", "");
  return token;
}

function decodeHeader(req) {
  const authorization = req.headers.authorization || "";
  const token = getToken(authorization);
  const decoded = verify(token);
  req.user = decoded;
  return decoded;
}

module.exports = {
  sign,
  decodeHeader,
  check,
};
