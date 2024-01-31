const knex = require("../db/connection");

function list() {
  // your solution here
  return knex("comments").select("*");
}

function listCommenterCount() {
  // your solution here
  return knex("comments as c")
    .join("users as u", "u.user_id", "c.commenter_id")
    .select("u.user_email as commenter_email")
    .count("u.user_email")
    .groupBy("u.user_id")
    .orderBy("commenter_email");
}

function read(commentId) {
  // your solution here
  return knex("comments as c")
    .join("users as u", "u.user_id", "c.commenter_id")
    .join("posts as p", "p.post_id", "c.post_id")
    .select("c.comment_id", "c.comment", "u.user_email as commenter_email", "p.post_body as commented_post")
    .where({ comment_id: commentId })
    .first();
}

module.exports = {
  list,
  listCommenterCount,
  read,
};
