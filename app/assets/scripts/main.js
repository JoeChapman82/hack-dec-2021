if(document.getElementById('qrcode')) {
    new QRCode(document.getElementById("qrcode"), "http://localhost:8900/start?user=f153ab26-2767-4607-bbd3-4fadaded5882");
    const title = document.getElementById('qrcode').title;
    console.log(title);
    document.getElementById('qrlink').href = title;
}