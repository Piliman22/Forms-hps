// script.js
function submitForm() {
    var form = document.getElementById("myForm");
    var formData = new FormData(form);
    var name = formData.get("name");
    var email = formData.get("email");
    
    // IPアドレスの取得（ここではダミーのIPアドレスを使用）
    var ipAddress = "127.0.0.1";

    sendData(name, email, ipAddress);
}

function sendData(name, email, ipAddress) {
    var payload = {
        content: `新しいフォームの回答がありました。\n名前: ${name}\nメールアドレス: ${email}\nIPアドレス: ${ipAddress}`
    };

    // Discord WebhookのURLをここに入力
    var webhookURL = "https://discord.com/api/webhooks/1233768000344293490/bDMpBcYDTvJYrUhzwNc6UcpAf2lo0_VUzrI2lsAZ-ruY4c9E2l9bjmXLbYqdVwfLzBDR";

    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    }).then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.text();
    }).then(data => {
        console.log(data);
    }).catch(error => {
        console.error("There was a problem with your fetch operation:", error);
    });
}
