import dns from "dns"

// dns version using callback
dns.lookup("angga-ari.com", function(err, result) {
    console.log(result)
})