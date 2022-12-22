
const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
} = process.env;
const MONGODB_URI = process.env.MONGODB_URI;
console.log("mongodb uri"+MONGODB_URI);

module.exports = {
    url: MONGODB_URI
    // url: "mongodb://mongo_db:27017/Tutorial"
    // url: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`
  };