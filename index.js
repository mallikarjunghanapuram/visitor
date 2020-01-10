const Koa = require("koa");
const config = require("./config");
const BodyParser = require("koa-bodyparser");
const logger = require('koa-logger');

const router = require('./router');
// const db = require("./config/mongo");
const app = new Koa();

//db.connect();

app.use(BodyParser());
app.use(logger());

// Bootstrap application router
app.use(router.routes());
app.use(router.allowedMethods());

// Start server
if (!module.parent) {
    app.listen(config.port, config.ip, () => {
      console.log(
        `API server listening on ${config.host}:${config.port}, in ${config.env}`
      );
    });
 }

module.exports = app;