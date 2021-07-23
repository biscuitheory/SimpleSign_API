import UserEntity from '../modules/User/userEntity';

class AuthMiddleware {
  constructor({ jwtService }) {
    this.jwt = jwtService;
  }

  isAuth = async (req, res, next) => {
    try {
      const token = req.cookies['auth-cookie'];

      if (!token) {
        return res.status(401).json('Unauthorized');
      }

      // Verify Token
      const decoded = await this.jwt.decodeToken(token);

      if (!decoded) {
        return res.status(403).json('Access denied. No credentials sent!');
      }

      // if user has permissions
      req.currentUserId = decoded.id;
      next();
    } catch (err) {
      return res.status(401).json('Authentication failed : \n' + err);
    }
  };

  isAdmin = async (req, res, next) => {
    try {
      const token = req.cookies['auth-cookie'];

      if (!token) {
        return res.status(401).json('Unauthorized');
      }

      // Verify Token
      const decoded = await this.jwt.decodeToken(token);

      if (!decoded) {
        return res.status(403).json('Access denied. No credentials sent!');
      }

      // console.log('peggy', decoded.role);

      if (decoded.role !== 'admin') return res.status(401).json('Unauthorized');

      // if user has permissions
      req.currentUserId = decoded.id;
      next();
    } catch (err) {
      return res.status(401).json('Authentication failed : \n' + err);
    }
  };

  isTutor = async (req, res, next) => {
    try {
      const token = req.cookies['auth-cookie'];

      if (!token) {
        return res.status(401).json('Unauthorized');
      }

      // Verify Token
      const decoded = await this.jwt.decodeToken(token);

      if (!decoded) {
        return res.status(403).json('Access denied. No credentials sent!');
      }
      console.log({decoded})

      // if user has permissions
      req.currentUserId = decoded.id;
      next();
    } catch (err) {
      return res.status(401).json('Authentication failed : \n' + err);
    }
  };
}

export default AuthMiddleware;
