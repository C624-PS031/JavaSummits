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
                "description": "Gunung Merbabu adalah gunung api yang bertipe Stratovulcano yang terletak secara geografis pada 7,5° LS dan 110,4° BT.",
                "suhu": "30",
                "syarat" : "https://tngunungmerbabu.org/tata-tertib/"
            },
            {
                "id": 2,
                "image1": "../assets/gunung/bromo.jpeg",
                "image2": "../assets/gunung/bromo.jpeg",
                "image3": "../assets/gunung/bromo.jpeg",
                "name": "Gunung Bromo",
                "location": "Jawa Timur",
                "description": "Gunung Bromo atau dalam bahasa Tengger dieja Brama, juga disebut Kaldera Tengger, adalah sebuah gunung berapi aktif di Jawa Timur, Indonesia.",
                "suhu": "30",
                "syarat": "https://bookingsemeru.bromotenggersemeru.org/index/sop"
            },
            {
                "id": 3,
                "image1": "../assets/gunung/Gunung Prau.jpg",
                "image2": "url_to_image2.jpg",
                "image3": "url_to_image3.jpg",
                "name": "Gunung Prau",
                "location": "Jawa Tengah",
                "description": "Gunung Parahu adalah salah satu gunung di Dataran Tinggi Dieng, Jawa Tengah, Indonesia memiliki ketinggian puncak 2.590 mdpl terletak pada koordinat 7°11′13″S 109°55′22″E",
                "suhu": "30",
                "syarat" : "https://ceritapendaki.id/gunung-prau-via-dieng/"
            },
            
            {
                "id": 4,
                "image1": "../assets/gunung/Gunung Arjuno, Jawa Timur.jpg",
                "image2": "url_to_image2.jpg",
                "image3": "url_to_image3.jpg",
                "name": "Gunung Arjuno",
                "location": "Jawa Timur",
                "description": "Gunung Arjuno adalah sebuah gunung berapi kerucut di Jawa Timur, Indonesia dengan ketinggian 3.339 m dpl. Gunung Arjuno secara administratif terletak di perbatasan Kota Batu, Kabupaten Malang, dan Kabupaten Pasuruan dan berada di bawah pengelolaan Taman Hutan Raya Raden Soerjo.",
                "suhu": "30",
                "syarat" : "https://tahurarsoerjo.dishut.jatimprov.go.id/sipenerang_bak/sop.php"
            },
            {
                "id": 5,
                "image1": "../assets/gunung/Gunung Papandayan.jpg",
                "image2": "url_to_image2.jpg",
                "image3": "url_to_image3.jpg",
                "name": "Gunung Papandayan",
                "location": "Jawa Tengah",
                "description": "Gunung yang berada di Jawa Tengah.",
                "suhu": "30",
                "syarat" : "https://papandayantrip.com/buka-tutup-gunung-papandayan/"
            },
            {
                "id": 6,
                "image1": "../assets/gunung/Sindoro-Sumbing.jpeg",
                "image2": "url_to_image2.jpg",
                "image3": "url_to_image3.jpg",
                "name": "Gunung Sindoro Sumbing",
                "location": "Jawa Tengah",
                "description": "Gunung yang berada di Jawa Tengah.",
                "suhu": "30",
                "syarat" : "https://www.magelangkab.go.id/home/detail/pendakian-gunung-sumbing-via-basecamp-butuh-di-buka-lagi/3755#:~:text=Seperti%20wajib%20membawa%20surat%20keterangan,satu%20alamat%20dibuktikan%20dengan%20KTP."
            },
            {
                "id": 7,
                "image1": "../assets/gunung/Mount Semeru, East Java.jpg",
                "image2": "url_to_image2.jpg",
                "image3": "url_to_image3.jpg",
                "name": "Gunung Semeru",
                "location": "Jawa Tengah",
                "description": "Gunung yang berada di Jawa Tengah.",
                "suhu": "30",
                "syarat" : "https://tngunungmerbabu.org/tata-tertib/"
            },
            {
                "id": 8,
                "image1": "../assets/gunung/sindoro.jpeg",
                "image2": "url_to_image2.jpg",
                "image3": "url_to_image3.jpg",
                "name": "Gunung Sindoro",
                "location": "Jawa Tengah",
                "description": "Gunung yang berada di Jawa Tengah.",
                "suhu": "30",
                "syarat" : "https://tngunungmerbabu.org/tata-tertib/"
            },
            {
                "id": 9,
                "image1": "../assets/gunung/raung-bolong.jpg",
                "image2": "url_to_image2.jpg",
                "image3": "url_to_image3.jpg",
                "name": "Gunung Raung Bolong",
                "location": "Jawa Tengah",
                "description": "Gunung yang berada di Jawa Tengah.",
                "suhu": "30",
                "syarat" : "https://tngunungmerbabu.org/tata-tertib/"
            },
            {
                "id": 10,
                "image1": "../assets/gunung/gunung-gede.jpg",
                "image2": "url_to_image2.jpg",
                "image3": "url_to_image3.jpg",
                "name": "Gunung Gunung Gede",
                "location": "Jawa Tengah",
                "description": "Gunung yang berada di Jawa Tengah.",
                "suhu": "30",
                "syarat" : "https://tngunungmerbabu.org/tata-tertib/"
            }
            // Data gunung lainnya...
        ],
        "basecamps": {
            "1": [
                { "image": "../assets/gunung/merbabu_cunthel.jpg", "name": "Basecamp Cuncthel" },
                { "image": "../assets/gunung/merbabu_thekelan.jpg", "name": "Basecamp Thekelan" },
                { "image": "../assets/gunung/merbabu_selo.jpg", "name": "Basecamp Selo" }
            ],
            "2": [
                { "image": "../assets/gunung/bromo_cemorolawang.jpg", "name": "Basecamp Cemoro Lawang" },
                { "image": "../assets/gunung/bromo_ngadas.jpg", "name": "Basecamp Ngadas" },
                { "image": "../assets/gunung/bromo_tosari.jpg", "name": "Basecamp Tosari" }
            ],
            "3": [
                { "image": "../assets/gunung/prau_dieng.jpg", "name": "Basecamp Dieng" },
                { "image": "../assets/gunung/prau_kalilembu.jpg", "name": "Basecamp Kalilembu" },
                { "image": "../assets/gunung/prau_patakbanteng.jpg", "name": "Basecamp Patakbanteng" }
            ],
            "4": [
                { "image": "../assets/gunung/arjuno_lawang.jpg", "name": "Basecamp Arjuno Lawang" },
                { "image": "../assets/gunung/arjuno_tambaksari.jpg", "name": "Basecamp Tambaksar" },
                { "image": "../assets/gunung/bromo_tosari.jpg", "name": "Basecamp Tosari" }
            ],
            "5": [
                { "image": "../assets/gunung/papandayan_campDavis.jpg", "name": "Basecamp Camp Davis" },
                { "image": "../assets/gunung/papandayan_cisurupan.jpg", "name": "Basecamp Cisurupan" },
            ],
            "6": [
                { "image": "../assets/gunung/sumbing_butuh.jpg", "name": "Basecamp Sumbing Butuh" },
                { "image": "../assets/gunung/sumbing_cepit.jpg", "name": "Basecamp Sumbing Cepit" },
                { "image": "../assets/gunung/sumbing_garung.jpg", "name": "Basecamp Sumbing Garung" },
            ],
            "7": [
                { "image": "../assets/gunung/semeru_ranupani.jpeg", "name": "Basecamp Ranupani" },
            ],
            "8": [
                { "image": "../assets/gunung/sindoro_kledung.jpg", "name": "Basecamp Sindoro Kledung" },
                { "image": "../assets/gunung/sindoro_sigedang.jpg", "name": "Basecamp Sindoro Sigedang" }
            ],
            "9": [
                { "image": "../assets/gunung/raung_kalibaru.webp.jpg", "name": "Basecamp Raung Kalibaru" },
                { "image": "../assets/gunung/raung_sumberwringin.jpg", "name": "Basecamp Sumber Wringin" },
            ],
            "10": [
                { "image": "../assets/gunung/gede_cibodas.jpeg", "name": "Basecamp Cibodas" },
                { "image": "../assets/gunung/gede_gunungputri.jpg", "name": "Basecamp Gunung Putri" },
                { "image": "../assets/gunung/gede_selabintana.jpg", "name": "Basecamp Selabintana" }
            ],
            // Data basecamp lainnya...
        },
    };

    // Function to get query parameter from URL
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    const mountainId = getParameterByName('mountain_id');

    if (!mountainId) {
        console.error('Mountain ID parameter is missing');
        // Optionally, handle the case where mountain_id parameter is missing
    } else {
        // Find the mountain data based on mountainId
        const mountain = data.mountains.find(m => m.id === parseInt(mountainId));
        if (mountain) {
            // Update main image
            const mainImage = document.getElementById('mainImage');
            mainImage.src = mountain.image1;
            mainImage.alt = mountain.name;

            // Update gallery images
            const gallery = document.getElementById('gallery');
            gallery.innerHTML = `
                <img src="${mountain.image1}" alt="Gallery Image 1" class="gallery-image">
                <img src="${mountain.image2}" alt="Gallery Image 2" class="gallery-image">
                <img src="${mountain.image3}" alt="Gallery Image 3" class="gallery-image">
            `;

            // Update bc-text section
            const bcTextContainer = document.querySelector('.bc-text');
            bcTextContainer.querySelector('h2.name').textContent = mountain.name;
            bcTextContainer.querySelector('p.deskripsi').textContent = mountain.description;
            bcTextContainer.querySelector('.location-info p.location').textContent = mountain.location;
            bcTextContainer.querySelector('.temperature-info p.suhu').textContent = mountain.suhu;
            bcTextContainer.querySelector('a.syarat').textContent = mountain.syarat;

            // Update basecamp details
            const basecamps = data.basecamps[mountainId] || [];
            const cardContent = document.getElementById('card__content');
            cardContent.innerHTML = '';
            basecamps.forEach(basecamp => {
                const cardArticle = document.createElement('article');
                cardArticle.classList.add('card__article');

                const cardImage = document.createElement('div');
                cardImage.classList.add('card__image');

                const img = document.createElement('img');
                img.src = basecamp.image;
                img.alt = 'Basecamp Image';
                img.classList.add('card__img');

                const shadow = document.createElement('div');
                shadow.classList.add('card__shadow');

                cardImage.appendChild(img);
                cardImage.appendChild(shadow);

                const cardData = document.createElement('div');
                cardData.classList.add('card__data');

                const cardName = document.createElement('h3');
                cardName.classList.add('card__name');
                cardName.textContent = basecamp.name;

                cardData.appendChild(cardName);

                cardArticle.appendChild(cardImage);
                cardArticle.appendChild(cardData);

                cardContent.appendChild(cardArticle);
            });

            // Optionally, add event listeners or additional logic here
        } else {
            console.error(`Mountain with ID ${mountainId} not found`);
            // Optionally, handle the case where mountain with given ID is not found
        }
    }
});
