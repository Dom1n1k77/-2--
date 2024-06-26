document.addEventListener("DOMContentLoaded", function() {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
        enableRating();
    } else {
        disableRating();
    }

    document.querySelectorAll(".rating input").forEach(function(radio) {
        radio.addEventListener("change", function() {
            if (isLoggedIn === "true") {
                const gameIndex = Array.from(document.querySelectorAll('.game')).indexOf(radio.closest('.game')) + 1;
                const ratingValue = this.value;
                saveRatingToSession(gameIndex, ratingValue);
            } else {
                alert("Please log in to rate the games.");
            }
        });
    });
    
    loadRatingsFromSession();
});

function saveRatingToSession(gameIndex, ratingValue) {
    sessionStorage.setItem(`gameRating_${gameIndex}`, ratingValue);
}

function loadRatingsFromSession() {
    document.querySelectorAll(".game").forEach((game, index) => {
        const gameIndex = index + 1;
        const savedRating = sessionStorage.getItem(`gameRating_${gameIndex}`);
        if (savedRating) {
            document.querySelector(`#star${savedRating}_game${gameIndex}`).checked = true;
        }
    });
}

function enableRating() {
    document.querySelectorAll(".rating input").forEach(function(radio) {
        radio.disabled = false;
    });
}

function disableRating() {
    document.querySelectorAll(".rating input").forEach(function(radio) {
        radio.disabled = true;
    });
}

function logIn() {
    sessionStorage.setItem("isLoggedIn", "true");
    enableRating();
}

function logOut() {
    sessionStorage.setItem("isLoggedIn", "false");
    disableRating();
    sessionStorage.clear();
    // Redirect to home page with a message
    window.location.href = "index.html?message=You have been logged out.";
}

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get('message');
    if (message) {
        alert(message);
    }
};
