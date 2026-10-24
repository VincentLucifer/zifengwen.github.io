(function () {
  var trigger = document.querySelector(".author__wechat-trigger");
  var pop = document.querySelector(".author__wechat-pop");
  if (!trigger || !pop) return;
  document.body.appendChild(pop);
  var timer = 0;

  function place() {
    var rect = trigger.getBoundingClientRect();
    var gap = 12;
    var width = pop.offsetWidth;
    var height = pop.offsetHeight;
    var margin = 16;
    var left = rect.left - gap - width;
    if (left < margin) {
      left = rect.right + gap;
    }
    if (left + width > window.innerWidth - margin) {
      left = Math.max(margin, window.innerWidth - width - margin);
    }
    var top = rect.top + rect.height / 2 - height / 2;
    if (top < margin) top = margin;
    if (top + height > window.innerHeight - margin) {
      top = Math.max(margin, window.innerHeight - height - margin);
    }
    pop.style.left = left + "px";
    pop.style.top = top + "px";
  }

  function show() {
    window.clearTimeout(timer);
    pop.hidden = false;
    place();
  }

  function hideSoon() {
    window.clearTimeout(timer);
    timer = window.setTimeout(function () {
      pop.hidden = true;
    }, 180);
  }

  trigger.addEventListener("mouseenter", show);
  trigger.addEventListener("mouseleave", hideSoon);
  trigger.addEventListener("focus", show);
  trigger.addEventListener("blur", hideSoon);
  pop.addEventListener("mouseenter", show);
  pop.addEventListener("mouseleave", hideSoon);
  trigger.addEventListener("click", function () {
    if (pop.hidden) show();
    else pop.hidden = true;
  });
  window.addEventListener("resize", function () {
    if (!pop.hidden) place();
  });
  window.addEventListener("scroll", function () {
    if (!pop.hidden) place();
  }, true);
})();
