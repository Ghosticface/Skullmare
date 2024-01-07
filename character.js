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
        Sume: "Sume",    
        Cleora: "Cleora",    
        Ori: "Ori",    
        Caramelo: "Caramelo",    
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
            window.location.href = "https://ghosticface.github.io/Skullmare/1-ch.html";
            break;
        case 0002:
            window.location.href = "https://ghosticface.github.io/Skullmare/2-ch.html";
            break;
        case 0006:
            window.location.href = "https://ghosticface.github.io/Skullmare/6-ch.html";
            break;
        case 0021:
            window.location.href = "https://ghosticface.github.io/Skullmare/21-ch.html";
            break;
        case 0041:
            window.location.href = "https://ghosticface.github.io/Skullmare/41-ch.html";
            break;
        case 0042:
            window.location.href = "https://ghosticface.github.io/Skullmare/42-ch.html";
            break;
        case 0043:
            window.location.href = "https://ghosticface.github.io/Skullmare/43-ch.html";
            break;
        case 0044:
            window.location.href = "https://ghosticface.github.io/Skullmare/44-ch.html";
            break;

        default:
            alert("OOOPS = The code is not available/Not yet been made");
    }
}