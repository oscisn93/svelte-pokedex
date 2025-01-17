

export async function load() {
		const url = `https://pokeapi.co/api/v2/pokemon?limit=700`;
		const res = await fetch(url);
		const data = await res.json();

		const loadedPokemon = data.results.map((data, index) => {
			const img_url = `http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`;
			return {
				name: data.name,
				id: index + 1,
				image: img_url
			};
		});
		return {
			props: loadedPokemon
		};
	// }
}
