// Thanks barrel for helping with the syntax that is JS
document.addEventListener("DOMContentLoaded", function () {
    let textbox = document.getElementById("textbox");

    const texts = {
        Pechi: "Pechi",
        Hilda: "Hilda",
        Valerian: "Valerian",
        Huhner: "HUH?",
        Beatrice: "Beatrice",
        Rav: "Rav",
        Elliot: "Elliot",
        Veri: "Veroni",
        Diph: "Dip",    
        May: "May",    
        Bibi: "Bibi",    
        Mara: "Mara",    
        Diaz: "Diaz",    
        Muertoz: "Muertoz",    
        NoChar: "???",
    };

    document.querySelectorAll('[id]').forEach((element) => {
        element.addEventListener("mouseenter", (event) => {
            const id = element.id;
            textbox.innerHTML = texts[id] || "";
        });

        element.addEventListener("mouseleave", (event) => {
            textbox.innerHTML = "";
        });
    });
});

function checkPassword() {
    // Numbercode
    var code = document.getElementById("codeInput").value;

    var codeNumber = parseInt(code);

    switch (codeNumber) {
        case 0001:
            window.location.href = "1-ch.html";
            break;
        case 2:
            window.location.href = "page2.html";
            break;
        case 3:
            window.location.href = "page3.html";
            break;

        default:
            alert("OOOPS = The code is not available/Not yet been made");
    }
}