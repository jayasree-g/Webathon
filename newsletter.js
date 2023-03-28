   const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    
    event.preventDefault();
    
    const name = document.querySelector('input[name="name"]').value;

    alert(`Thank you for subscribing, ${name} !`);
  });
