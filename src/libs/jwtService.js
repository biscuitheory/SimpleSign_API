class KwtService {
  constructor({ jwt, config }) {
    this.jwt = jwt;
    this.secret = config.jwt_secret;
  }

  async decodeToken(token) {
    return await this.jwt.verify(token, this.secret);
  }

  async generateToken(data) {
    return await this.jwt.sign(data, this.secret);
  }
}

export default KwtService;
