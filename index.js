const email_copy = document.querySelector(".email_copy");

email_copy.onclick = function () {
    document.execCommand("copy");
}

email_copy.addEventListener("copy", function (event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", email_copy.textContent);
        console.log(event.clipboardData.getData("text"))
    }
});