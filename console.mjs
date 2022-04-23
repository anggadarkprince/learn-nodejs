import {Console} from 'console';
import fs from 'fs';

const file = fs.createWriteStream("application.log");
const log = new Console({
    stdout: file,
    stderr: file,
});

log.info("hello");
log.error("some error");

const user = {
    name: "Angga",
    email: "angga@mail.com"
}
log.table(user);