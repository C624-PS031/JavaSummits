import axios from 'axios'
import { getElement } from '../utils'

export function initDetailPage(type, id) {
  const content = getElement('#mainContent')
  const apiUrl = `http://localhost:3000/gunung/${id}`

  axios
    .get(apiUrl)
    .then((response) => {
      const data = response.data
      // console.log(data)
      content.innerHTML = `
        <div class="detail-page">
          <h2>${data.nama_gunung || data.kode_gunung}</h2>
          <img src="${data.url}" alt="${
        data.nama_gunung || data.kode_gunung
      }" />
          <p>${data.deskripsi}</p>
        </div>
      `
    })
    .catch((error) => {
      console.error('Error fetching data from API:', error)
    })
}
