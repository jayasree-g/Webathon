   const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    
    event.preventDefault();
    
    const email = document.querySelector('input[name="mail"]').value;

    alert(`Thank you for subscribing, ${name} (${email})!`);
  });
