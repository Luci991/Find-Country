import View from "./View.js";
class BookmarksView extends View {
  _parentEl = document.querySelector(".list__bookmarks");
  _containerbtnBookmark = document.querySelector(".container-btn-bookmark");
  _container = document.querySelector(".container");
  _generateMarkup() {
    return this._data
      .map((mark) => {
        return `
  <li>
    <a href="#${mark.name}" class="mark ${
          mark.bookmark &&
          window.location.hash.slice(1) ===
            mark.name.toLowerCase().replaceAll(" ", "_")
            ? "mark-active"
            : ""
        }">
      <img
        src="${mark.imgPNG}"
        alt="Flag of ${mark.name}"
        class="mark__img"
      />
      <span class="mark__name">${mark.name}</span>
    </a>
  </li>
    `;
      })
      .join("");
  }

  handlerLoad(handler) {
    ["resize", "load"].forEach((event) =>
      window.addEventListener(event, handler)
    );
  }

  handlerClick() {
    this._container.addEventListener(
      "click",
      function (e) {
        const btn = e.target.closest(".navigation__btn-bookmark");
        if (!btn) return this._parentEl.classList.remove("active-list");

        this._parentEl.classList.toggle("active-list");
      }.bind(this)
    );
  }
}

export default new BookmarksView();
