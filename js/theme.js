$(function () {
  // Define variables
  var pageWrapper = $("#pageWrapper");
  var pageLoader = $("#pageLoader");
  var sidebar = $("#sidebar");
  var sidebarToggle = $("#sidebarToggle");
  var overlay = $("#overlay");
  var navLinks = $(".nav-link");
  var mql = window.matchMedia("(max-width: 768px)");

  // init screen
  responsive(mql);

  // Re-init screen on media change
  mql.addEventListener("change", responsive);

  // Event listeners
  sidebarToggle.on("click", () => {
    toggleSidebar();
  });
  overlay.on("click", () => {
    closeSidebar();
  });
  navLinks.on("click", (e) => {
    if (!e.target.classList.contains("navlink-dropdown")) {
      navLinks.removeClass("active");
      $(e.target).addClass("active");
      if (isMobile()) {
        setTimeout(closeSidebar, 150);
      }
    }
  });

  // Sets correct styling based on screen width
  function responsive(mql) {
    if (mql.matches) {
      // Small screen
      pageWrapper.addClass("is-mobile");
      closeSidebar();
    } else {
      // Large screen
      pageWrapper.removeClass("is-mobile");
      openSidebar();
    }
  }

  // Toggles sidebar
  function toggleSidebar() {
    sidebar.toggleClass("visible");
    overlay.toggleClass("visible");
  }

  // Closes sidebar
  function closeSidebar() {
    sidebar.removeClass("visible");
    overlay.removeClass("visible");
  }

  // Opens sidebar
  function openSidebar() {
    sidebar.addClass("visible");
    overlay.addClass("visible");
  }

  // Shows pageloader
  function showPageLoader() {
    pageLoader.addClass("visible");
  }

  // Shows pageloader
  function hidePageLoader() {
    pageLoader.removeClass("visible");
  }

  // Returns if current view is mobile
  function isMobile() {
    return pageWrapper.hasClass("is-mobile");
  }

  // Datatable
  $("#exampleTable").DataTable();

  // Remove loading
  setTimeout(function () {
    pageLoader.removeClass("visible");
  }, 150);
});
