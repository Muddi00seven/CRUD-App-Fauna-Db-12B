const faunadb = require("faunadb"),
  q = faunadb.query

require("dotenv").config()

exports.handler = async (event, context) => {
  try {
    const client = new faunadb.Client({
      secret: process.env.FAUNADB_ADMIN_SECRET,
    })

    // let result = await client.query(
    //   q.Map(
    //     q.Paginate(q.Match(q.Index("all_messages"))),
    //     q.Lambda("x", q.Get(q.Var("x")))
    //   )
    // )
    let result = await client.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection("messages"))),
        q.Lambda("X", q.Get(q.Var("X")))
      )
      // console.log("all the entries " + result.data.map(x => x.data.name))

    )

    console.log("all the entries " + result.data.map(x => x.data.message))
    return {
      statusCode: 200,
      body: JSON.stringify(result.data),
      // body: JSON.stringify({ message: `${result.data.map(x => x.data.message)}` }),

    }
  } catch (error) {
    return { statusCode: 400, body: error.toString() }
  }
}
