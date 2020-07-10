import getData from '../utils/getData';
import getHash from '../utils/getHash'


const Character = async () => {
    const id = await getHash()
    const character = await getData(id) 
    console.log(character)
    const view = ` 
    <div class="Characters-inner">
        <article class="Characters-card">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
        </article>
        <article class="Characters-card">
            <h3>Episodes: <spam>${character.episode.length}</span></h3>
            <h3>Status: <spam>${character.status}</span></h3>
            <h3>Species: <spam>${character.species}</span></h3>
            <h3>Gender: <spam>${character.gender}</span> </h3>
            <h3>Origin: <spam> ${character.origin.name}</span></h3>
            <h3>Last Location: <spam>${character.location.name}</span></h3>
        </article>
    </div>
    `;

    return view;
};

export default  Character