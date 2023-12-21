document.addEventListener("DOMContentLoaded", function () {
    let textbox = document.getElementById("textbox");

    // Define texts for different elements
    const texts = {
        Veri: "Veroni",
        Hilda: "Hilda",
        Valerian: "Valerian",
        Huhner: "HUH?",
        Beatrice: "Beatrice",
        Rav: "Rav",
        Elliot: "Elliot",
        Veri: "Veroni",
        Veri: "Veroni",
        Diph: "Dip",
        NoChar: "???",
    };

    // Add event listeners for all elements
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
