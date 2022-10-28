import express from 'express';
import verifyAdmin from '../middlewares/verifyAdmin';
import verifyAuthorization from '../middlewares/verifyAuthorization';
import User from '../models/user.model';
const router=express.Router();
//UPDATE
router.put('/:id',verifyAuthorization,async(req,res)=>{
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
          req.body.password,
          `${process.env.PASS_SECRET}`
        ).toString();
      }
    
      try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } catch (error) {
        res.status(500).json(error);
      }
})
//DELETE
router.delete("/:id", verifyAuthorization, async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted...");
    } catch (error) {
      res.status(500).json(error);
    }
});  
//GET USER
router.get("/find/:id", verifyAdmin, async (req, res) => {
    try {
      const user:any = await User.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (error) {
      res.status(500).json(error);
    }
});
//GET ALL USER
router.get("/", verifyAdmin, async (req, res) => {
    const query = req.query.new;
    try {
      const users = query
        ? await User.find().sort({ _id: -1 }).limit(5)
        : await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
});
//GET USER STATS
router.get("/stats", verifyAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
    try {
      const data = await User.aggregate([
        { $match: { createdAt: { $gte: lastYear }
          //returns the users that were created before the last year
          } 
        },
        {
          $project: {
            month: { $month: "$createdAt" },
            //returns only the month when the user was created
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
            //returns the total number of users
          },
        },
      ]);
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json(error);
    }
});
  
export default router;

