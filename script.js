const downloadLinks = {

    "480p": {
        gofile: "https://gofile.io/d/bgzPukGE",
        pixeldrain: "https://pixeldra.in/u/BsvHrcZD"
    },

    "720p": {
        gofile: "https://gofile.io/d/PsChXALv",
        pixeldrain: "https://pixeldra.in/u/pNtVG2aV"
    },

    "1080p": {
        gofile: "https://gofile.io/d/H0dwBEug",
        pixeldrain: "https://pixeldra.in/u/NM4bJzZK"
    }

};

function openMovie() {
    document.getElementById("home").style.display = "none";
    document.getElementById("details").style.display = "block";
    window.scrollTo(0, 0);
}

function backHome() {
    document.getElementById("details").style.display = "none";
    document.getElementById("home").style.display = "block";
    window.scrollTo(0, 0);
}

function searchMovie() {

    let searchText = document
        .getElementById("search")
        .value
        .toLowerCase()
        .trim();

    let movie = document.getElementById("movie");
    let noResult = document.getElementById("noResult");

    if ("mirzapur".includes(searchText)) {
        movie.style.display = "block";
        noResult.style.display = "none";
    } else {
        movie.style.display = "none";
        noResult.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("gofile480").href = downloadLinks["480p"].gofile;
    document.getElementById("pixel480").href = downloadLinks["480p"].pixeldrain;

    document.getElementById("gofile720").href = downloadLinks["720p"].gofile;
    document.getElementById("pixel720").href = downloadLinks["720p"].pixeldrain;

    document.getElementById("gofile1080").href = downloadLinks["1080p"].gofile;
    document.getElementById("pixel1080").href = downloadLinks["1080p"].pixeldrain;
});