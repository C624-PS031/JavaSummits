export function createGunungCardTemplate(gunung) {
  return `
      <article class="max-w-sm rounded overflow-hidden shadow-lg mx-2 mb-4">
        <div class="relative">
          <img src="${gunung.imgSrc}" alt="${gunung.name}" class="w-full h-48 object-cover">
          <div class="absolute inset-0 flex items-center justify-center bg-black opacity-25">
            <div class="text-center text-white px-4">
              <h3 class="text-xl font-bold">${gunung.name}</h3>
              <p>${gunung.kode}</p>
            </div>
          </div>
        </div>
        <div class="px-6 py-4">
          <!-- Additional content if needed -->
        </div>
        <div class="px-6 pt-4 pb-2">
          <button class="detail-button mr-2" data-id="${gunung.id}" data-type="gunung">View Details</button>
          <button class="favorite-button" data-id="${gunung.id}" data-name="${gunung.name}" data-img="${gunung.imgSrc}">Add to Favorites</button>
        </div>
      </article>
    `
}

// export function createGunungCardTemplate(gunung) {
//   return `
//     <div class="gunung-card">
//       <img src="${gunung.imgSrc}" alt="${gunung.name}" />
//       <div class="card-content">
//         <h3>${gunung.name}</h3>
//         <p>${gunung.description}</p>
//         <button class="detail-button" data-id="${gunung.id}" data-type="gunung">View Details</button>
//       </div>
//     </div>
//   `
// }

export function createArticleCardTemplate(article) {
  return `
      <article class="max-w-sm rounded overflow-hidden shadow-lg mx-2 mb-4">
        <div class="relative">
          <img src="${article.url}" alt="${article.judul_artikel}" class="w-full h-48 object-cover">
          <div class="absolute inset-0 flex items-center justify-center bg-black opacity-25">
            <div class="text-center text-white px-4">
              <h3 class="text-xl font-bold">${article.judul_artikel}</h3>
              <p>${article.isi_artikel}</p>
            </div>
          </div>
        </div>
        <div class="px-6 py-4">

        </div>
        <div class="px-6 pt-4 pb-2">
          <button class="detail-button" data-id="${article.id}" data-type="article">View Details</button>
        </div>
      </article>
    `
}

export function createGunungDetailTemplate(gunung) {
  return `
        <div class="detail-container p-5">
            <h2 class="text-3xl font-bold mb-4">${gunung.name}</h2>
            <img src="${gunung.imgSrc}" alt="${gunung.name}" class="w-full h-64 object-cover rounded-lg shadow-lg mb-4">
            <p>${gunung.detailDescription}</p>
        </div>
    `
}

export function createAboutUsCardTemplate(aboutUsData) {
  return `
      <div class="max-w-md rounded overflow-hidden shadow-lg mx-2 mb-4">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">About Us</div>
          <p class="text-gray-700 text-base">${aboutUsData.description}</p>
        </div>
      </div>
    `
}

export function createFavoriteCardTemplate(favorite) {
  return `
    <article class="max-w-sm rounded overflow-hidden shadow-lg mx-2 mb-4">
      <div class="relative">
        <img src="${favorite.imgSrc}" alt="${favorite.name}" class="w-full h-48 object-cover">
        <div class="absolute inset-0 flex items-center justify-center bg-black opacity-25">
          <div class="text-center text-white px-4">
            <h3 class="text-xl font-bold">${favorite.name}</h3>
          </div>
        </div>
      </div>
      <div class="px-6 py-4">
        <!-- Additional content if needed -->
      </div>
      <div class="px-6 pt-4 pb-2">
        <button class="unfavorite-button bg-red-500 text-white px-4 py-2 rounded" data-id="${favorite.id}">Unfavorite</button>
      </div>
    </article>
  `
}
