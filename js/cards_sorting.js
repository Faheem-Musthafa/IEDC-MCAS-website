// Sorting Cards Function

  window.addEventListener('load', function() {
    sortCards();
  });
  
  function sortCards() {
    var cardsContainer = document.getElementById('point-content');
    if (!cardsContainer) return; // nothing to sort on pages without the point table
    var cards = Array.from(cardsContainer.getElementsByClassName('point-card'));
  
    // Sort the cards based on the data-points attribute
    cards.sort(function(a, b) {
      var aH2 = a.querySelector('h2');
      var bH2 = b.querySelector('h2');
      var pointsA = aH2 ? parseInt(aH2.getAttribute('data-points')) || 0 : 0;
      var pointsB = bH2 ? parseInt(bH2.getAttribute('data-points')) || 0 : 0;
      return pointsB - pointsA;
    });
  
    // Append the sorted cards to the container
    cards.forEach(function(card) {
      cardsContainer.appendChild(card);
    });
  }
  