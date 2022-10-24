import verifyToken from "./verifyToken";

const verifyAuthorization = (req:any, res:any, next:any) => {
    verifyToken(req, res, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not allowed to do that!");
      }
    });
  };
  export default verifyAuthorization;