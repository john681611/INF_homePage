// Lazy loading for background images
var ll = [].slice.call(document.querySelectorAll(".section"));
var lh = [];
var wh = window.innerHeight;

function updateOffsets() {
  ll.forEach(function (elem) {
    lh.push(elem.offsetTop);
  });
}

function lazy() {
  let wscroll = document.documentElement.scrollTop;
  lh.forEach(function (elOffset, i) {
    if (elOffset <= wscroll + (wh + 1000)) {
      ll[i].classList.add("loaded");
      lh.splice(i, 1);
      ll.splice(i, 1);
      if (lh.length === 0) {
        window.removeEventListener("scroll");
      }
    }
  });
}

updateOffsets();
lazy();

window.addEventListener("scroll", function () {
  lazy();
});

function UpdateUserImage(value, id) {
  //eslint-disable-line no-unused-vars
  document.getElementById("img" + id).setAttribute("src", value);
}

function collapseNavbar() {
  const navigation = document.querySelector(".nav");
  var scrollPosition =
    window.scrollY ||
    window.scrollTop ||
    document.getElementsByTagName("html")[0].scrollTop;

  if (scrollPosition > 50) {
    navigation.classList.add("collapse");
  } else {
    navigation.classList.remove("collapse");
  }
}

window.addEventListener("scroll", collapseNavbar);
window.addEventListener("ready", collapseNavbar);

window.addEventListener("message", function (e) {
  if (e.data.uid && e.data.type === "sizeUpdate") {
    var i = document.querySelector('iframe[name="' + e.data.uid + '"]');
    if (!i) {
      return;
    }
    var scale = Number(i.dataset.scale || 1);
    var width = parseFloat(e.data.payload.width);
    var height = parseFloat(e.data.payload.height);
    if (Number.isNaN(width) || Number.isNaN(height)) {
      i.style.width = e.data.payload.width;
      i.style.height = e.data.payload.height;
      return;
    }

    var scaledWidth = width * scale;
    var scaledHeight = height * scale;
    i.dataset.renderedWidth = String(scaledWidth);
    i.dataset.renderedHeight = String(scaledHeight);

    var group = i.dataset.sizeGroup;
    if (!group) {
      i.style.width = scaledWidth + "px";
      i.style.height = scaledHeight + "px";
      return;
    }

    var iframesInGroup = document.querySelectorAll(
      'iframe[data-size-group="' + group + '"]',
    );
    var maxWidth = 0;
    var maxHeight = 0;

    iframesInGroup.forEach(function (iframe) {
      var iframeWidth = Number(iframe.dataset.renderedWidth || 0);
      var iframeHeight = Number(iframe.dataset.renderedHeight || 0);
      if (iframeWidth > maxWidth) {
        maxWidth = iframeWidth;
      }
      if (iframeHeight > maxHeight) {
        maxHeight = iframeHeight;
      }
    });

    iframesInGroup.forEach(function (iframe) {
      iframe.style.width = maxWidth + "px";
      iframe.style.height = maxHeight + "px";
    });
  }
});
