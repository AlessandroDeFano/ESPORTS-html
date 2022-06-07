/**
 * @file: news.js
 * @author: gruppo 3
 * Showing and hiding more of the news content when clicking the
 * read more in the news section
 */

/**
 * Function that toggles the content of the first body of the news
 * when clicking the read more button in the news
 */
function toggleText() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

/**
 * Function that toggles the content of the second body of the news
 * when clicking the read more button in the news
 */
function toggleText2() {
    let dots2 = document.getElementById("dots2");
    let moreText2 = document.getElementById("more2");
    let btnText2 = document.getElementById("myBtn2");

    if (dots2.style.display === "none") {
        dots2.style.display = "inline";
        btnText2.innerHTML = "Read more";
        moreText2.style.display = "none";
    } else {
        dots2.style.display = "none";
        btnText2.innerHTML = "Read less";
        moreText2.style.display = "inline";
    }
}

/**
 * Function that toggles the content of the third body of the news
 * when clicking the read more button in the news
 */
function toggleText3() {
    let dots3 = document.getElementById("dots3");
    let moreText3 = document.getElementById("more3");
    let btnText3 = document.getElementById("myBtn3");

    if (dots3.style.display === "none") {
        dots3.style.display = "inline";
        btnText3.innerHTML = "Read more";
        moreText3.style.display = "none";
    } else {
        dots3.style.display = "none";
        btnText3.innerHTML = "Read less";
        moreText3.style.display = "inline";
    }
}