document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("searchBtn");
    const field = document.getElementById("searchField");
    const result = document.getElementById("result");

    // Function to fetch results
    function doSearch(query = "") {
        fetch(`superheroes.php?query=${encodeURIComponent(query)}`)
            .then(response => response.text())
            .then(data => {
                result.innerHTML = data;
            })
            .catch(error => console.error("Error:", error));
    }

    doSearch("");

    btn.addEventListener("click", () => {
        let query = field.value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        doSearch(query);
    });

});