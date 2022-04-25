import {v4 as uuidv4} from 'uuid';
import {readDataFromFile, writeDataToFile} from '../utils.mjs';

let products = await readDataFromFile('./data/products.json');

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(products)
    });
}

function findById(id) {
    return new Promise((resolve, reject) => {
        const product = products.find(product => product.id === id)
        resolve(product)
    });
}

function create(product) {
    return new Promise((resolve, reject) => {
        const newProduct = {id: uuidv4(), ...product}
        products.push(newProduct);

        writeDataToFile('./data/products.json', products);

        resolve(newProduct)
    });
}

function update(id, product) {
    return new Promise((resolve, reject) => {
        const index = products.findIndex(p => p.id === id);
        products[index] = {id, ...product};

        writeDataToFile('./data/products.json', products);

        resolve(products[index])
    });
}

function remove(id) {
    return new Promise((resolve, reject) => {
        products = products.filter(p => p.id !== id);

        writeDataToFile('./data/products.json', products);

        resolve()
    });
}

export {
    findAll,
    findById,
    create,
    update,
    remove
}