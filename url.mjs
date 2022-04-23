import {URL} from 'url';

const anggadotcom = new URL("https://angga-ari.com/contact.html?source=email&lang=id");

console.info(anggadotcom.toString());
console.info(anggadotcom.href);
console.info(anggadotcom.protocol);
console.info(anggadotcom.host);
console.info(anggadotcom.pathname);
console.info(anggadotcom.searchParams);
console.info(anggadotcom.search);

anggadotcom.host = "www.angga.com";
anggadotcom.searchParams.append('status', 'active');
console.info(anggadotcom.toString());