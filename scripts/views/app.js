import NavInitiator from '../utils/nav-initiator'
import { initHomePage } from './home'
import { initGunungPage } from './gunung'
import { initDetailPage } from './detail'
import { initDetailArtikelPage } from './detailartikel'
import initAdminPage from '../../src/views/Admin'
import { createFavoriteCardTemplate } from '../../templates/templateCreator'
import { getElement } from '../utils'

class App {
  constructor({ button, nav, content }) {
    this._button = button
    this._nav = nav
    this._content = content

    this._initialApp()
  }

  _initialApp() {
    NavInitiator.init({
      button: this._button,
      nav: this._nav,
      content: this._content,
    })
  }

  async renderPage() {
    const url = window.location.hash.slice(1).toLowerCase()
    const urlParts = url.split('/')
    const page = urlParts[1]
    const type = urlParts[2]
    const id = urlParts[3]

    if (page === 'detail' && type === 'gunung' && id) {
      initDetailPage(type, id)
      return
    }

    if (page === 'detail' && type === 'artikel' && id) {
      initDetailArtikelPage(id)
      return
    }

    this._content.innerHTML = this._getPage(url)
    switch (url) {
      case '/home':
        initHomePage()
        break
      case '/gunung':
        initGunungPage()
        break
      case '/favorit':
        this.renderFavoritePage()
        break
      case '/about':
        // Implementasi halaman about
        break
      case '/admin':
        initAdminPage()
        break
      default:
        this._content.innerHTML = this._getPage('/home')
        initHomePage()
        break
    }
  }

  renderFavoritePage() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    const favoritListContainer = getElement('#favoritList')
    favoritListContainer.innerHTML = ''

    favorites.forEach((favorite) => {
      const favoriteCardTemplate = createFavoriteCardTemplate(favorite)
      favoritListContainer.insertAdjacentHTML('beforeend', favoriteCardTemplate)
    })

    // Add event listener to unfavorite buttons
    const unfavoriteButtons = favoritListContainer.querySelectorAll(
      '.unfavorite-button',
    )
    unfavoriteButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const id = event.target.dataset.id
        this.removeFromFavorites(id)
        // Re-render the favorites list
        this.renderPage()
      })
    })
  }

  _getPage(url) {
    switch (url) {
      case '/home':
        return `
          <section id="home">
            <center><h2 class="text-3xl font-bold mb-4">New Artikel</h2></center>
            <div class="flex flex-wrap justify-center" id="articlesContainer"></div>
          </section>`
      case '/gunung':
        return `
          <section id="gunung">
            <h2 class="text-3xl font-bold mb-4">Daftar Gunung</h2>
            <div class="flex flex-wrap justify-center" id="gunungList"></div>
          </section>`
      case '/favorit':
        return `
              <section id="favorit">
                <h2 class="text-3xl font-bold mb-4 text-center">Gunung Favorit</h2>
                <div class="flex flex-wrap justify-center" id="favoritList"></div>
              </section>`

      case '/about':
        return `
          <section id="about" class="p-10 bg-gray-100">
            <div class="container mx-auto flex flex-col md:flex-row items-center">
              <div class="md:w-1/2 md:pr-10">
                <h2 class="text-3xl font-bold mb-4">About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris consectetur lorem, eu varius odio ligula non lorem.</p>
              </div>
              <div class="md:w-1/2 mt-5 md:mt-0">
                <img src="https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=" alt="About Us Image" class="rounded-lg shadow-lg" />
              </div>
            </div>
          </section>`
      default:
        return '<section id="home"></section>'
    }
  }

  removeFromFavorites(id) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || []
    favorites = favorites.filter((favorite) => favorite.id !== id)
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }
}

export default App
