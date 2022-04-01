import e from 'express';
import jwt from 'jsonwebtoken';

//https://levelup.gitconnected.com/authentication-using-jwt-in-mern-1cc5c8ccd03c
const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token)
      return res
        .status(401)
        .json({ message: 'No authentication token, access denied' });
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedData)
      return res
        .status(401)
        .json({ message: 'Token verification failed, authorization denied' });

    req.userId = decodedData.id;
    next();
  } catch (error) {
    res.status(500).json({ message: error });

    // console.log(error);
  }
};

export default auth;
