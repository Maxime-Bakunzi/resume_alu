feather.replace()

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Add a click event listener to the "Download Resume" button
  const downloadBtn = document.querySelector('.downloadBtn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function () {
      // You can add download functionality here
      // For example, open the resume PDF in a new tab
      window.open(downloadBtn.href, '_blank');
    });
  }

  // Add functionality to the social links (open links in new tabs)
  const socialLinks = document.querySelectorAll('.social_item a');
  socialLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const url = link.getAttribute('href');
      window.open(url, '_blank');
    });
  });

  // You can add more JavaScript functionality here as needed
});
