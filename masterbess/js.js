// scripts.js

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling to exercise plans section
  const btnExplorePrograms = document.querySelector('.btn');

  btnExplorePrograms.addEventListener('click', function(e) {
      e.preventDefault();
      const exerciseSection = document.getElementById('exercise-plans');
      exerciseSection.scrollIntoView({ behavior: 'smooth' });
  });

  // Hover effect on exercise cards
  const exerciseCards = document.querySelectorAll('.exercise-card');

  exerciseCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
          this.style.transform = 'scale(1.05)';
          this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
      });

      card.addEventListener('mouseleave', function() {
          this.style.transform = 'scale(1)';
          this.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
      });
  });
});
