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
