const http = require("http");
const fs = require("fs");
const Koa = require("koa");
const Router = require("koa-router");
const graphqlHTTP = require("koa-graphql");

import { graphql, GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql";

const app = new Koa();
const logger = require("koa-logger");
const staticServe = require("koa-static");
app.use(staticServe(__dirname + "/dist/"));
app.use(staticServe(__dirname + "/assets/"));
app.use(logger());

let router = new Router();

router.get("/", ctx => {
  try {
    ctx.body = fs.readFileSync("dist/site/index.html", "utf-8");
  } catch (e) {
    ctx.status = "404";
    ctx.body = " 页面不存在！";
  }
});

const helloSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return "world";
        }
      }
    }
  })
});

router.all(
  "/gql",
  graphqlHTTP({
    schema: helloSchema,
    graphiql: true
  })
);

app.use(router.routes());
http.createServer(app.callback()).listen(8000);
