// Get the category filter dropdown
const categoryFilter = document.getElementById('category-filter');

// Get all the podcasts
const podcasts = document.querySelectorAll('.podcast');

// Add event listener for when the category filter changes
categoryFilter.addEventListener('change', function() {
	// Get the selected category
	const selectedCategory = this.value;

	// Loop through all the podcasts
	for (let i = 0; i < podcasts.length; i++) {
		// Get the category for this podcast
		const podcastCategory = podcasts[i].getAttribute('data-category');

		// If the selected category is "all" or the podcast category matches the selected category, show the podcast
		if (selectedCategory === 'all' || podcastCategory === selectedCategory) {
			podcasts[i].classList.remove('hidden');
		} else {
			// Otherwise, hide the podcast
			podcasts[i].classList.add('hidden');
		}
	}
});
