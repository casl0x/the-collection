
const collection = [
{ 
    picture : "assets/image/the-last-of-us.jpg",
    name : "The Last Of Us",
    synopsis :"Dans une civilisation ravagée où les infectés et les survivants prolifèrent, Joel, un protagoniste désabusé, est embauché pour faire sortir Ellie, une adolescente de 14 ans, d'une zone de quarantaine militaire. Ce qui commence comme un petit boulot se transforme vite en une aventure dangereuse à travers tout le pays.",
    genre : ["Action", " Aventure"],
    release : 2023,
    teaser : "https://www.youtube.com/watch?v=_6v_D3QocIs"
},
{ 
    picture :"assets/image/spider-man.jpeg",
    name : "Marvel's Spider-Man",
    synopsis : "Vous y incarnez un Peter Parker aguerri combattant le crime contre des ennemis emblématiques dans le New York de Marvel. Il lutte en même temps pour trouver l’équilibre entre sa vie personnelle chaotique et sa carrière tandis que le destin des New-Yorkais est entre ses mains.",
    genre : ["Action", " Aventure"],
    release : 2022,
    teaser : "https://www.youtube.com/watch?v=mrT5q5xXb7Y",
},
{ 
    picture : "assets/image/gta.jpg",
    name : "Grand Theft Auto V",
    synopsis : "Lorsqu'un jeune arnaqueur, un braqueur de banque à la retraite et un terrifiant psychopathe se retrouvent piégés par de grands criminels, le gouvernement américain et l'industrie du divertissement, ils décident de se lancer dans une série de braquages pour survivre dans une ville sans pitié, où ils ne peuvent se fier à personne, même entre eux.",
    genre : ["Action", " Aventure"],
    release : 2015,
    teaser : "https://www.youtube.com/watch?v=QkkoHAzjnUs",
},
{ 
    picture : "assets/image/rdr.png",
    name : "Red Dead Redemption II",
    synopsis : "Arthur Morgan et la bande de Dutch van der Linde sont en cavale. Les agents fédéraux et les meilleurs chasseurs de primes du pays se mettent à leurs trousses et la bande commet méfaits sur méfaits dans les vastes terres sauvages de l'Amérique dans un seul et unique but : survivre. Alors que des querelles internes menacent de faire voler la bande en éclats, Arthur est tiraillé entre ses propres idéaux et sa loyauté envers la bande qui l'a élevé.",
    genre : ["Action", " Aventure"],
    release : 2019,
    teaser : "https://www.youtube.com/watch?v=gmA6MrX81z4",
},
{ 
    picture : "assets/image/riders-republic.jpg",
    name : "Riders Republic",
    synopsis : "Découvrez l'immense terrain de jeu multijoueur de Riders Republic™ ! Avec votre vélo, vos skis, votre snowboard ou votre wingsuit, explorez un paradis sportif en monde ouvert où vous imposez vos règles.",
    genre : ["Multijoueur", " Sport"],
    release : 2023,
    teaser : "https://www.youtube.com/watch?v=cP3a45jqTqo",
},
{ 
    picture : "assets/image/pubg.jpg",
    name : "PUBG : BATTLEGROUNDS",
    synopsis :" Atterrissez à des emplacements stratégiques, pillez des armes et du ravitaillement, puis survivez pour devenir la dernière équipe en lice lors de combats farouches sur des champs de bataille tout aussi divers que variés. Formez une escouade et ruez-vous sur les champs de bataille pour vivre l’authentique expérience originale 'sang pour sang' Battle Royale que seule PUBG: BATTLEGROUNDS peut vous offrir.",
    genre : ["Multijoueurs", " Action", " Aventure"],
    release : 2017,
    teaser : "https://www.youtube.com/watch?v=u1oqfdh4xBY",
},
{ 
    picture : "assets/image/witcher.jpg",
    name : "The Witcher 3: Wild Hunt",
    synopsis : "Vous incarnez Geralt de Riv, un mercenaire et tueur de monstres. Devant vous s'étend un continent infesté de monstres et déchiré par la guerre, que vous pouvez explorer à votre guise. Votre contrat actuel ? Retrouver Ciri, l'enfant de la prophétie, une arme vivante capable de changer le monde.",
    genre : ["RPG"],
    release : 2015,
    teaser : "https://www.youtube.com/watch?v=c0i88t0Kacs",
},
{ 
    picture : "assets/image/forest.jpg",
    name : "The Forest",
    synopsis : "Seul survivant d'un accident d'avion, vous vous retrouvez dans une forêt mystérieuse où vous devez lutter pour rester en vie contre une société de mutants cannibales. Construisez, explorez, survivez dans ce terrifiant simulateur de survie à la première personne.",
    genre : ["Action", " Aventure", " Simulation", " Indépendant"],
    release : '2018',
    teaser : "https://www.youtube.com/watch?v=7mwn5U2PNvk",
},
{ 
    picture : "assets/image/raft.png",
    name : "Raft",
    synopsis : "Seul ou avec des amis, votre mission est de survivre à une mer périlleuse ! Rassemblez des débris pour survivre, agrandissez votre radeau et mettez les voiles vers des îles oubliées et dangereuses !",
    genre : ["Aventure", " Indépendant", " Simulation"],
    release : 2022,
    teaser : "https://www.youtube.com/watch?v=__w615A5lC4",
},
{ 
    picture : "assets/image/forza.png",
    name : "Forza Horizon 5",
    synopsis : "L'aventure Horizon ultime vous attend ! Découvrez le monde ouvert vivant et changeant constamment, situé dans les magnifiques paysages du Mexique, et vibrez au volant de centaines de voitures parmi les plus belles au monde.",
    genre : ["Action", " Aventure", " Course", " Simulation", " Sport"],
    release : 2021,
    teaser : "https://www.youtube.com/watch?v=Rv7xLt5yNsM",
}];

const gameCollection = document.getElementById("gameCollection");

// création de chaque carte 
collection.forEach( game => {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = game.picture;
    image.alt = game.name + "overviews";

    const title = document.createElement("h2");
    title.classList.add("card_title");
    title.textContent = game.name;

    const synopsis = document.createElement("p");
    synopsis.classList.add("card_synopsis");
    synopsis.textContent = game.synopsis;

    const info = document.createElement("div");
    info.classList.add("card_info")

    const genre = document.createElement("p");
    genre.classList.add("card_ingo_genre");
    genre.textContent = game.genre;
    
    const dateRelease = document.createElement("p");
    dateRelease.classList.add("card_info_release");
    dateRelease.textContent = game.release;

    const teaser = document.createElement("a");
    teaser.classList.add("card_teaser");
    teaser.href = game.teaser;
    teaser.target = "_blank";
    
    const icon = document.createElement("img");
    icon.src = "assets/image/play-button.png";
    icon.alt = "bouton play"

    // création d'un bouton pour supprimer la carte de l'affichage
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "▬";
    deleteButton.classList.add("card_deletebtn");
    deleteButton.addEventListener("click", () => {
        const index = collection.indexOf(game);
        if (index !== -1){
            collection.slice(index, 1);
            card.remove();
        }
    });

    card.appendChild(deleteButton);

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(synopsis);

    card.appendChild(info)
    info.appendChild(genre);
    info.appendChild(dateRelease);

    card.appendChild(teaser)
    teaser.appendChild(icon)

    gameCollection.appendChild(card);
});

// création header 
const header = document.createElement("header");

const pp = document.createElement("img");
pp.src = "assets/image/myAvatar.png";
pp.alt = "avatar Cassidy";

const titleCollection = document.createElement("h1");
titleCollection.textContent = "Jeux Fav'"

header.appendChild(pp);
header.appendChild(titleCollection);

document.body.insertBefore(header, genreButton);

