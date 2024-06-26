// // JavaScript to handle adding to wishlist
// document.addEventListener('DOMContentLoaded', function() {
//     // Select all add-to-wishlist buttons
//     const addToWishlistButtons = document.querySelectorAll('.add-to-wishlist');

//     addToWishlistButtons.forEach(button => {
//         button.addEventListener('click', function(event) {
//             event.preventDefault(); // Prevent default link behavior

//             // Get the game card container
//             const gameCard = event.target.closest('.game-card');
//             if (!gameCard) return;

//             // Clone the game card
//             const clonedGameCard = gameCard.cloneNode(true);

//             // Append the cloned game card to the wishlist page
//             const wishlist = document.getElementById('wishlist');
//             if (wishlist) {
//                 wishlist.appendChild(clonedGameCard);
//             }
//         });
//     });
// });
