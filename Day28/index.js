const searchInput = document.querySelector(".github-profile__search");
let arr;

searchInput.addEventListener("search", (e) => {
	let user = e.target.value;
	searchInput.value = "";
	getUser(user);
});

async function getUser(user) {
	try {
		const result = await fetch(`https://api.github.com/users/${user}`);
		const repos = await fetch(`https://api.github.com/users/${user}/repos`);
		const data = await result.json();
		arr = await repos.json();

		if (result.ok && repos.ok) {
			createContentUser(data);
			console.log(arr[0]);
		} else {
			noContentUser();
		}
	} catch (e) {
		console.log(e);
	}
}

const noContentUser = () => {
	const exisstMain = document.querySelector(".main");
	if (exisstMain) {
		exisstMain.remove();
	}
	const main = document.createElement("main");
	main.classList.add("github-profile__main--empty", "main");

	main.innerHTML = `
        <h2>No profile with this username</h2>
    `;
	document.body.appendChild(main);
};

const createContentUser = (data) => {
	const existMain = document.querySelector(".main");
	if (existMain) {
		existMain.remove();
	}
	const main = document.createElement("main");
	main.classList.add("github-profile__main", "main");

	main.innerHTML = `
        <div class="github-profile__img">
            <img src=${data.avatar_url} alt="user image" title="user image">
        </div>
        <div class="github-profile__data">
            <h2 class="github-profile__name">${data.name}</h2>
            <p class="github-profile__description">${data.bio}</p>
            <ul class="github-profile__stats">
                <li class="github-profile__follower">${data.followers}<strong>followers</strong>
                </li>
                <li class="github-profile__following">${data.following}
                    <strong>following</strong>
                </li>
                <li class="github-profile__repos">${data.public_repos} <strong>repos</strong></li>
            </ul>
            <div class="github-profile__repositoris">
                <a href=${arr[0].clone_url} target="_blank" >${arr[0].name}</a>
                <a href=${arr[1].clone_url} target="_blank">${arr[1].name}</a>
                <a href=${arr[2].clone_url} target="_blank">${arr[2].name}</a>
                <a href=${arr[3].clone_url} target="_blank">${arr[3].name}</a>
                <a href=${arr[4].clone_url} target="_blank">${arr[4].name}</a>
            </div>
        </div>
    `;
	document.body.appendChild(main);
};
