import https from "https";

const url = "https://hookb.in/1g2LdndRxRFd6NOOxk7w";
const request = https.request(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}, function(response) {
    response.addListener("data", (data) => {
        console.info(`Receive ${data.toString()}`);
    })
});

const body = JSON.stringify({
    firstName: "Angga",
    lastName: "Ari Wijaya"
});
request.write(body);
request.end();