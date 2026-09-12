// ========================================
// MOVIE DOWNLOAD LINKS
// ========================================

const downloadLinks = {

    "480p": {
        server1: "https://gofile.io/d/bgzPukGE",
        server2: "https://pixeldra.in/u/BsvHrcZD"
    },

    "720p": {
        server1: "https://gofile.io/d/PsChXALv",
        server2: "https://pixeldra.in/u/pNtVG2aV"
    },

    "1080p": {
        server1: "https://gofile.io/d/H0dwBEug",
        server2: "https://pixeldra.in/u/NM4bJzZK"
    }

};


// ========================================
// OPEN MOVIE DETAILS
// ========================================

function openMovie() {

    document.getElementById("home").style.display = "none";

    document.getElementById("details").style.display = "block";

    window.scrollTo(0, 0);
}


// ========================================
// BACK TO HOME
// ========================================

function backHome() {

    document.getElementById("details").style.display = "none";

    document.getElementById("home").style.display = "block";

    window.scrollTo(0, 0);
}


// ========================================
// SEARCH MOVIE
// ========================================

document.getElementById("search").addEventListener(
    "input",
    function () {

        const searchText = this.value
            .toLowerCase()
            .trim();

        const movie = document.getElementById("movie");

        const noResult = document.getElementById("noResult");

        if ("mirzapur".includes(searchText)) {

            movie.style.display = "block";

            noResult.style.display = "none";

        } else {

            movie.style.display = "none";

            noResult.style.display = "block";
        }

    }
);


// ========================================
// ADD SERVER LINKS
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        document.getElementById("server480_1").href =
            downloadLinks["480p"].server1;

        document.getElementById("server480_2").href =
            downloadLinks["480p"].server2;


        document.getElementById("server720_1").href =
            downloadLinks["720p"].server1;

        document.getElementById("server720_2").href =
            downloadLinks["720p"].server2;


        document.getElementById("server1080_1").href =
            downloadLinks["1080p"].server1;

        document.getElementById("server1080_2").href =
            downloadLinks["1080p"].server2;

    }
);