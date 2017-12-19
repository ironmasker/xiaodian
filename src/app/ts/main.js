"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_1 = require("./like");
var like = new like_1.Like(101);
console.log(like.count + ("" + like.count));
like.like();
console.log(like.count);
like.like();
console.log(like.count);
