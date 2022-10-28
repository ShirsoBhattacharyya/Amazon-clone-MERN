import verifyToken from "./verifyToken";

const verifyAdmin = (req:any, res:any, next:any) => {
    verifyToken(req, res, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not allowed to do that!");
      }
    });
  };
  export default verifyAdmin;