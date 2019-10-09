window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'UA-46316096-4');


axios
    .post("https://submit-form.com/jay6HuL4YjXhI3yWQEqny", {
        message: "Thanks for your interest."
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (response) {
        console.error(response);
    });