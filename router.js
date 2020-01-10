const Router = require("koa-router");
const visitor = require("./controllers/visitor");

const router = new Router();

router
    .post("/user", visitor.visitor)
   // .get("/order", order.getorders)
    .get("/user/:id", visitor.getvisitor)
    .put("/user/:id", visitor.updatevisitor)
    .delete("/user/:id", visitor.deletevisitor)
    
module.exports = router;  