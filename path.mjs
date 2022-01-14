import path from "path"

const file = "/user/angga\//file.txt"
console.info(file)
console.info(path.dirname(file))
console.info(path.basename(file))
console.info(path.extname(file))
console.info(path.isAbsolute(file))
console.info(path.normalize(file))