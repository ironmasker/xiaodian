import { Like } from './like';

let like = new Like(101);
console.log(like.count + `${like.count}`);
like.like();
console.log(like.count);
like.like();
console.log(like.count);