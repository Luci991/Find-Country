import * as modul from "./module.js";
import eventView from "./views/eventView.js";
import renderView from "./views/renderView.js";
import bookmarksView from "./views/bookmarksView.js";

const controllCountry = async function (query) {
  try {
    if (!query) return;
    // Transform query
    query = query.replaceAll("_", " ");
    // Render a spinner
    renderView.renderSpinner();

    // Get data about this query
    await modul.getCountry(query);

    // Update the hash on the window
    window.location.hash = modul.state.name.toLowerCase().replaceAll(" ", "_");

    // Display data on this query
    renderView.render(modul.state);
    bookmarksView.render(modul.bookmarks);
  } catch (err) {
    renderView.renderError();
    console.log(err);
    window.location.hash = "";
  }
};

const controllBookmarks = function () {
  if (modul.state.bookmark == false) {
    modul.addBookmark();
  } else {
    modul.removeBookmark();
  }

  renderView.render(modul.state);

  bookmarksView.render(modul.bookmarks);

  if (modul.bookmarks.length === 0) {
    bookmarksView.renderMessage();
  }
};

const controllBookmarksListMobile = function () {
  if (window.screen.width > 900) return;

  bookmarksView.handlerClick();
};

const init = function () {
  // eventView.eventHandler(controllCountry);
  renderView.eventLoadPage(controllCountry);
  renderView.eventHandlerForm(controllCountry);
  renderView.eventHandlerBtnMark(controllBookmarks);
  bookmarksView.render(modul.bookmarks);
  bookmarksView.handlerLoad(controllBookmarksListMobile);
};

init();
