var express = require("express");
var router = express.Router();
const commentController = require("../controllers/commentController");
const authController = require("../controllers/authController");

router.post("/posts/:postid", commentController.createCommentFormPost);
router.put("/posts/:postid", commentController.updateCommentFormPut);
router.delete("/posts/:postid", commentController.deleteCommentFormDelete);

router.get("/authorSession/posts", authController.authorSessionGet);
router.put("/authorSession/posts", authController.authorSessionPut);
router.post("/authorSession/posts", authController.createPostPost);

module.exports = router;
