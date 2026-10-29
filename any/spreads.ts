// JSON.parse returns any, and what you read from it is any too.
const parsed = JSON.parse('{"total": 3}');
const total: string = parsed.total;
console.log(total.toUpperCase());
