// Minimal JS for small enhancements
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    });
  });

  // Handle form submission with AJAX
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const submitButton = form.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.textContent;
      
      // Show loading state
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;
      
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (response.ok) {
          // Show thank you message and hide form
          document.getElementById('formContent').style.display = 'none';
          document.getElementById('thankYouMessage').style.display = 'block';
          
          // Reset the form (clears all inputs)
          form.reset();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        alert('Sorry, there was an error sending your message. Please try again or email us directly at majedzhd@gmail.com');
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
      }
    });
  }
});

// Function to reset form and show it again
function resetForm() {
  document.getElementById('formContent').style.display = 'block';
  document.getElementById('thankYouMessage').style.display = 'none';
}