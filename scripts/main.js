document.addEventListener('DOMContentLoaded', (event) => {
    const data = {
        "mountains": [
            {
                "id": 1,
                "image1": "../assets/gunung/merbabu.jpg",
                "image2": "../assets/gunung/merbabu.jpg",
                "image3": "../assets/gunung/merbabu.jpg",
                "name": "Gunung Merbabu",
                "location": "Jawa Tengah",
                "description": "Gunung yang berada di Jawa Tengah.",
                "suhu": "30"
            },
            {
                "id": 2,
                "image1": "../assets/gunung/bromo.jpeg",
                "image2": "../assets/gunung/bromo.jpeg",
                "image3": "../assets/gunung/bromo.jpeg",
                "name": "Gunung Bromo",
                "location": "Jawa Timur",
                "description": "Gunung yang berada di Jawa Timur.",
                "suhu": "30"
            },
            {
                "id": 3,
                "image1": "../assets/gunung/Gunung Prau.jpg",
                "image2": "url_to_image2.jpg",
                "image3": "url_to_image3.jpg",
                "name": "Gunung Prau",
                "location": "Jawa Tengah",
                "description": "Gunung yang berada di Jawa Tengah.",
                "suhu": "30"
            },
            {
                "id": 4,
                "image1": "../assets/gunung/Gunung Arjuno, Jawa Timur.jpg",
                "image2": "url_to_image2.jpg",
                "image3": "url_to_image3.jpg",
                "name": "Gunung Arjuno",
                "location": "Jawa Timur",
                "description": "Gunung yang berada di Jawa Timur.",
                "suhu": "30"
            },
            {
                "id": 5,
                "image1": "../assets/gunung/Gunung Papandayan.jpg",
                "image2": "url_to_image2.jpg",
                "image3": "url_to_image3.jpg",
                "name": "Gunung Papandayan",
                "location": "Jawa Barat",
                "description": "Gunung yang berada di Jawa Barat.",
                "suhu": "30"
            },
            {
                "id": 6,
                "image1": "../assets/gunung/Sindoro-Sumbing.jpeg",
                "image2": "url_to_image2.jpg",
                "image3": "url_to_image3.jpg",
                "name": "Gunung Sindoro Sumbing",
                "location": "Jawa Tengah",
                "description": "Gunung yang berada di Jawa Tengah.",
                "suhu": "30"
            },
            {
                "id": 7,
                "image1": "../assets/gunung/Mount Semeru, East Java.jpg",
                "image2": "url_to_image2.jpg",
                "image3": "url_to_image3.jpg",
                "name": "Gunung Semeru",
                "location": "Jawa Timur",
                "description": "Gunung yang berada di Jawa Timur.",
                "suhu": "30"
            },
            {
                "id": 8,
                "image1": "../assets/gunung/sindoro.jpeg",
                "image2": "url_to_image2.jpg",
                "image3": "url_to_image3.jpg",
                "name": "Gunung Sindoro",
                "location": "Jawa Tengah",
                "description": "Gunung yang berada di Jawa Tengah.",
                "suhu": "30"
            },
            {
                "id": 9,
                "image1": "../assets/gunung/raung-bolong.jpg",
                "image2": "url_to_image2.jpg",
                "image3": "url_to_image3.jpg",
                "name": "Gunung Raung Bolong",
                "location": "Jawa Timur",
                "description": "Gunung yang berada di Jawa Timur.",
                "suhu": "30"
            },
            {
                "id": 10,
                "image1": "../assets/gunung/gunung-gede.jpg",
                "image2": "url_to_image2.jpg",
                "image3": "url_to_image3.jpg",
                "name": "Gunung Gunung Gede",
                "location": "Jawa Barat",
                "description": "Gunung yang berada di Jawa Barat.",
                "suhu": "30"
            }
        ]
    };

    const cardContent = document.getElementById('card__content');

    data.mountains.forEach(mountain => {
        const cardArticle = document.createElement('article');
        cardArticle.classList.add('card__article');

        const cardImage = document.createElement('div');
        cardImage.classList.add('card__image');

        const img = document.createElement('img');
        img.src = mountain.image1;
        img.alt = 'image';
        img.classList.add('card__img');

        const location = document.createElement('div');
        location.classList.add('card__location');
        location.textContent = mountain.location;

        const shadow = document.createElement('div');
        shadow.classList.add('card__shadow');

        cardImage.appendChild(img);
        cardImage.appendChild(location);
        cardImage.appendChild(shadow);

        const cardData = document.createElement('div');
        cardData.classList.add('card__data');

        const cardName = document.createElement('h3');
        cardName.classList.add('card__name');
        cardName.textContent = mountain.name;

        const cardDescription = document.createElement('p');
        cardDescription.classList.add('card__description');
        cardDescription.textContent = mountain.description;

        const cardButton = document.createElement('a');
        // Set data-mountain-id attribute to store the mountain id
        cardButton.setAttribute('data-mountain-id', mountain.id);
        cardButton.href = '#'; // Set initial href to #

        cardButton.classList.add('card__button');
        cardButton.textContent = 'View More';

        cardButton.addEventListener('click', function(event) {
            event.preventDefault();
            const mountainId = this.getAttribute('data-mountain-id');
            // Redirect or update content based on mountainId
            console.log(`Clicked on View More for mountain with id ${mountainId}`);
            // Example: Redirect to index.html?mountain_id=<mountain_id>
            window.location.href = `../templates/bcgunung.html?mountain_id=${mountainId}`;
        });

        cardData.appendChild(cardName);
        cardData.appendChild(cardDescription);
        cardData.appendChild(cardButton);

        cardArticle.appendChild(cardImage);
        cardArticle.appendChild(cardData);

        cardContent.appendChild(cardArticle);
    });
});
