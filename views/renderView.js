import View from "./View.js";

class RenderView extends View {
  _parentEl = document.querySelector("article");
  _data;
  _errormessage = "We could not found your country.";
  _searchForm = document.querySelector(".search-form");

  _generateMarkup(data) {
    return `
    <figure class="box">
          <img src="${data.flag}" alt="" class="image" />
          <ul class="detail-box">
            <ion-icon
              name="bookmark${data.bookmark ? "" : "-outline"}"
              class="btn__favorite favorite__icon"
             title="${
               data.bookmark ? "Unmark this country" : "Mark this country"
             }"></ion-icon>
            <p class="region">${data.region}</p>

            <li class="population">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="detail-icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>Population:</p>
              <span>${(data.population / 1_000_000).toFixed(2)}</span>
            </li>
            <li class="capital">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="detail-icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5H15v-18a.75.75 0 000-1.5H3zM6.75 19.5v-2.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 010 1.5h-.75A.75.75 0 016 6.75zM6.75 9a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM6 12.75a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 6a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zm-.75 3.75A.75.75 0 0110.5 9h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 12a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM16.5 6.75v15h5.25a.75.75 0 000-1.5H21v-12a.75.75 0 000-1.5h-4.5zm1.5 4.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 2.25a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75h-.008zM18 17.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
                  clip-rule="evenodd"
                />
              </svg>

              <p>Capital:</p>
              <span>${data.capital}</span>
            </li>

            <li class="currencies">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="detail-icon"
              >
                <path
                  d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z"
                />
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z"
                  clip-rule="evenodd"
                />
              </svg>

              <p>Currencies:</p>
              <span>${data.currencies}</span>
            </li>

            <li class="language">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="detail-icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2.25a.75.75 0 01.75.75v1.506a49.38 49.38 0 015.343.371.75.75 0 11-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 01-2.969 6.323c.317.384.65.753.998 1.107a.75.75 0 11-1.07 1.052A18.902 18.902 0 019 13.687a18.823 18.823 0 01-5.656 4.482.75.75 0 11-.688-1.333 17.323 17.323 0 005.396-4.353A18.72 18.72 0 015.89 8.598a.75.75 0 011.388-.568A17.21 17.21 0 009 11.224a17.17 17.17 0 002.391-5.165 48.038 48.038 0 00-8.298.307.75.75 0 01-.186-1.489 49.159 49.159 0 015.343-.371V3A.75.75 0 019 2.25zM15.75 9a.75.75 0 01.68.433l5.25 11.25a.75.75 0 01-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 01-1.36-.634l5.25-11.25A.75.75 0 0115.75 9zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726z"
                  clip-rule="evenodd"
                />
              </svg>

              <p>Language:</p>
              <span>${data.language}</span>
            </li>
          </ul>
        </figure>

        <a
          class="link-transfer"
          href="https://en.wikipedia.org/wiki/${data.name}"
          target="_blank"
          >More on Wikipedia...</a
        >
    `;
  }

  eventHandlerForm(handler) {
    this._searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const query = this.querySelector(".search-bar").value.toLowerCase();
      handler(query);
    });
  }

  eventHandlerBtnMark(handler) {
    this._parentEl.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn__favorite");

      if (!btn) return;

      handler();
    });
  }
}

export default new RenderView();
