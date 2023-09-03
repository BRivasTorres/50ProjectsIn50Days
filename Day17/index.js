let moviesWrapper = document.querySelector(".movies");

const moviesData = async () => {
	try {
		const response = await fetch(
			"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1"
		);
		if (response.status === 200) {
			const data = await response.json();
			moviesCard(data.results);
		} else {
			console.log(response.status);
		}
	} catch (error) {
		console.log(error);
	}
};

const moviesCard = (arr) => {
	arr.forEach((element) => {
		console.log(element);
		const div = document.createElement("div");
		div.className = "card-div";

		const img = document.createElement("img");
		img.className = "card-img";
		img.src = `https://image.tmdb.org/t/p/w500/${element.poster_path}`;

		const title = document.createElement("h2");
		title.className = "card-title";
		title.innerHTML = `${element.original_title}`;

		const average = document.createElement("span");
		average.className = "card-average";
		average.innerHTML = `${element.vote_average}`;
		average.style.color = `${
			element.vote_average >= 8 ? "#90EE90" : "#FFA500"
		}`;

		const infoMovie = document.createElement("div");
		infoMovie.className = "info-movie";
		infoMovie.appendChild(title);
		infoMovie.appendChild(average);

		const overviewDiv = document.createElement("div");
		const overviewH2 = document.createElement("h2");
		const overviewP = document.createElement("p");
		overviewH2.innerHTML = "Overview";
		overviewH2.className = "overview-h2";
		overviewDiv.className = "card-overview";
		overviewP.className = "overview-p";
		overviewP.innerHTML = `${element.overview}`;
		overviewDiv.appendChild(overviewH2);
		overviewDiv.appendChild(overviewP);

		div.appendChild(img);
		div.appendChild(infoMovie);
		div.appendChild(overviewDiv);

		moviesWrapper.appendChild(div);
	});
};

moviesData();
