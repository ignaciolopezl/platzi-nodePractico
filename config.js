module.exports = {
  remoteDB: process.env.REMOTE_DB || false,
  api: {
    port: process.env.API_PORT || 3000,
  },
  post: {
    port: process.env.POST_PORT || 3002,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "notasecret!",
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'remotemysql.com',
    user: process.env.MYSQL_USER || 'r1HcMrX2r6',
    password: process.env.MYSQL_PASS || 'DWxxQgf8wk',
    database: process.env.MYSQL_DB || 'r1HcMrX2r6',
  },
  mysqlService: {
    port: process.env.MYSQL_SERVICE_PORT || 3001,
    host: process.env.MYSQL_SERVICE_HOST || "localhost",
  },
  cacheService: {
    port: process.env.CACHE_SERVICE_PORT || 3003,
    host: process.env.CACHE_SERVICE_HOST || "localhost",
  },
  redis: {
    host:
      process.env.REDIS_HOST ||
      "redis-15857.c61.us-east-1-3.ec2.cloud.redislabs.com",
    port: process.env.REDIS_PORT || "15857",
    password: process.env.REDIS_PASSWORD || "muOkcp7X6xKTTwHUwBo6bVvQIvUirMYs",
  },
};
