

const env = process.env.NODE_ENV || "development";

const configs = {
  base: {
    env,
    host: process.env.APP_HOST || "localhost",
    port: process.env.APP_PORT || 5000
  }
};

const config = Object.assign(configs.base, configs[env]);

module.exports = config;