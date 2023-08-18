const btn = document.getElementById('rate-btn');
const rate = document.getElementById('rate-me');
const thank = document.getElementById('thank-you');
const ratingDisplay = document.getElementById('rating-display');

btn.addEventListener('click', (event)=>{

    event.preventDefault();

    const selectedRating = document.querySelector('input[name="rating"]:checked');

    if (selectedRating) {
        const ratingValue = selectedRating.value;
        ratingDisplay.textContent = `You selected ${ratingValue} out of 5`;
      }

    rate.classList.toggle('hidden')
    thank.classList.remove('hidden')
    thank.classList.toggle('flex')
    
})