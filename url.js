// module.exports = `mongodb://localhost:27017`;
require("dotenv").config();
module.exports = `${process.env.MONGODB_URL}`;
