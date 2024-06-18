import axios from 'axios'
import { getElement } from '../utils'

export function initDetailArtikelPage(id) {
  const content = getElement('#mainContent')
  const apiUrl = `http://localhost:3000/artikel/${id}`

  axios
    .get(apiUrl)
    .then((response) => {
      const data = response.data
      console.log(data)
      content.innerHTML = `
        <div class="detail-page">
          <h2>${data.judul_artikel}</h2>
          <img src="${
            data.imageList ? data.imageList[0] : 'default-image.jpg'
          }" alt="${data.judul_artikel}" />
          <p>${data.isi_artikel}</p>
        </div>
      `
    })
    .catch((error) => {
      console.error('Error fetching data from API:', error)
    })
}
