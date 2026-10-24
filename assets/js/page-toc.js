(function () {
  var aside = document.querySelector(".page-toc");
  var root = document.querySelector(".archive");
  if (!aside || !root) return;
  var list = aside.querySelector(".toc__menu");
  list.innerHTML = "";
  var headings = root.querySelectorAll("h1, h2");
  var items = [];

  headings.forEach(function (heading) {
    if (heading.classList.contains("page__title")) return;
    if (heading.closest(".archive__item, .list__item")) return;
    var text = heading.textContent.replace(/\s+/g, " ").trim();
    if (!text) return;
    if (!heading.id) heading.id = "section-" + items.length;
    items.push({
      id: heading.id,
      text: text
    });
  });

  if (!items.length) return;

  items.forEach(function (item) {
    var li = document.createElement("li");
    var link = document.createElement("a");
    link.href = "#" + item.id;
    link.textContent = item.text;
    li.appendChild(link);
    list.appendChild(li);
  });

  aside.hidden = false;

  function mark() {
    var current = items[0].id;
    items.forEach(function (item) {
      var el = document.getElementById(item.id);
      if (!el) return;
      if (el.getBoundingClientRect().top < 140) current = item.id;
    });
    list.querySelectorAll("a").forEach(function (link) {
      link.classList.toggle("is-active", link.getAttribute("href") === "#" + current);
    });
  }

  mark();
  window.addEventListener("scroll", mark, { passive: true });
})();
