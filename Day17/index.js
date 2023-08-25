let moviesWrapper = document.querySelector(".movies");

const moviesData = async () => {
	try {
		const response = await fetch(
			"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1"
		);

		if (!response.ok) {
			throw new Error("Request failed with status: " + response.status);
		}

		const data = await response.json();
		moviesCard(data.results);
	} catch (error) {
		console.error("Error:", error);
	}
};

const moviesCard = (data) => {
	data.forEach((element) => {
		console.log(element);
	});
};

moviesData();
