const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("N:\\BOOTCAMP 8 TO 12\\CRUD APP FAUNADB\\Serverless-CRUD-master\\Serverless-CRUD-master\\src\\pages\\index.js")))
}

