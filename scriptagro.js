// script.js
// Navigation Bar Animation
const navBar = document.querySelector('.nav-bar');
const navLinks = navBar.querySelectorAll('li a');

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#ccc';
  });

  link.addEventListener('mouseout', () => {
    link.style.color = '#fff';
  });
});

// Hero Section Animation
const heroSection = document.querySelector('.hero');
const searchInput = heroSection.querySelector('input[type="search"]');
const searchButton = heroSection.querySelector('button[type="button"]');
const callToActions = heroSection.querySelectorAll('.call-to-actions button');

searchInput.addEventListener('focus', () => {
  searchButton.style.transform = 'scale(1.1)';
});

searchInput.addEventListener('blur', () => {
  searchButton.style.transform = 'scale(1)';
});

callToActions.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.1)';
  });

  button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
  });
});

// Product Marketplace Section Animation
const productMarketplaceSection = document.querySelector('.product-marketplace');
const productListingCards = productMarketplaceSection.querySelectorAll('.product-listing-card');

productListingCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.05)';
  });

  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1)';
  });
});

// Community Forum Section Animation
const communityForumSection = document.querySelector('.community-forum');
const discussionCategories = communityForumSection.querySelectorAll('li');

discussionCategories.forEach(category => {
  category.addEventListener('mouseover', () => {
    category.style.backgroundColor = '#f7f7f7';
  });

  category.addEventListener('mouseout', () => {
    category.style.backgroundColor = '#fff';
  });
});

// Page Loading Animation
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
  document.body.style.transition = 'opacity 0.5s';
});

// Navigation Scroll Animation
const navScroll = document.querySelector('.nav-bar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    navScroll.style.position = 'fixed';
    navScroll.style.top = '0';
    navScroll.style.zIndex = '1000';
  } else {
    navScroll.style.position = 'relative';
    navScroll.style.top = 'initial';
    navScroll.style.zIndex = 'initial';
  }
});