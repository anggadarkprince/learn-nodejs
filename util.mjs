import util from "util";

const angga = "Angga";
const ari = "Ari";

console.info(`Hello ${angga} ${ari}`);
console.info(util.format("Hello %s %s", angga, ari));

const user = {
    name: 'Angga',
    gender: 'Male'
}
console.info(`Person: ${JSON.stringify(user)}`);
console.info(util.format("Person: %j", user));

console.log(util.types.isDate(new Date()));