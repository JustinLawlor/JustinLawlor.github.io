/*
  Shared site behaviour: sidebar, footer, project cards, filters, step menu, analytics.
  Edit NAV to add or rename a tab. Each page sets <body data-page="..."> to mark its tab.
*/
(function () {
  var NAV = [
    { id: "home", label: "Home", href: "/" },
    { id: "experience", label: "Experience", href: "/experience/" },
    { id: "projects", label: "Projects", href: "/projects/" },
    { id: "education", label: "Education & Leadership", href: "/education/" },
    { id: "certifications", label: "Certifications", href: "/certifications/" },
    { id: "personal", label: "Personal", href: "/personal/" }
    // { id: "resume", label: "Resume", href: "/assets/Justin_Lawlor_Resume.pdf" }  (add when the general resume is ready)
  ];

  // Privacy-friendly analytics (GoatCounter: no cookies, no personal data).
  // Sign up at goatcounter.com, then put your site code here, e.g. "justinlawlor".
  var GOATCOUNTER_CODE = "justinlawlor";

  var page = document.body.getAttribute("data-page") || "";

  // Sidebar
  var side = document.getElementById("sidebar");
  if (side) {
    var links = NAV.map(function (n) {
      var cur = n.id === page ? ' aria-current="page"' : "";
      return '<a href="' + n.href + '"' + cur + ">" + n.label.replace("&", "&amp;") + "</a>";
    }).join("");
    side.innerHTML =
      '<div class="avatar" aria-hidden="true">JL</div>' +
      '<div><a class="side-name" href="/">Justin Lawlor</a>' +
      '<div class="side-role">Business Systems Analyst<br>Greater Toronto Area</div></div>' +
      '<button class="menu-toggle" aria-expanded="false" aria-controls="side-nav">Menu</button>' +
      '<nav class="side-nav" id="side-nav" aria-label="Main">' + links + "</nav>" +
      '<div class="side-links">' +
      '<a href="https://www.linkedin.com/in/justinlawlor">LinkedIn</a>' +
      '<a href="https://github.com/JustinLawlor">GitHub</a></div>';
    var toggle = side.querySelector(".menu-toggle");
    toggle.addEventListener("click", function () {
      var open = side.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Footer
  var foot = document.getElementById("footer");
  if (foot) {
    foot.className = "site-footer";
    foot.innerHTML = "<span>&copy; " + new Date().getFullYear() + " Justin Lawlor</span>" +
      '<span><a href="mailto:justin.lawlor889@gmail.com">justin.lawlor889@gmail.com</a></span>';
  }

  // Project cards: <div data-projects data-limit="3" data-exclude-featured></div>
  function card(p) {
    var tools = (p.tools || []).map(function (t) { return "<span>" + t + "</span>"; }).join("");
    return '<a class="card project-card" href="/projects/' + p.slug + '.html" data-tags="' + p.tags.join("|") + '">' +
      '<span class="tag">' + p.label + "</span><h3>" + p.title + "</h3><p>" + p.summary + "</p>" +
      '<div class="pc-foot"><div class="chips chips-sm">' + tools + '</div><span class="go">View project &rarr;</span></div></a>';
  }
  var all = window.PROJECTS || [];
  document.querySelectorAll("[data-projects]").forEach(function (box) {
    var list = all.slice();
    if (box.hasAttribute("data-exclude-featured")) list = list.filter(function (p) { return !p.featured; });
    var limit = parseInt(box.getAttribute("data-limit") || "0", 10);
    if (limit) list = list.slice(0, limit);
    box.innerHTML = list.map(card).join("");
  });

  // Filter buttons: <div class="filters" data-filter-for="id-of-grid">
  document.querySelectorAll("[data-filter-for]").forEach(function (bar) {
    var grid = document.getElementById(bar.getAttribute("data-filter-for"));
    var tags = ["All"];
    all.forEach(function (p) { p.tags.forEach(function (t) { if (tags.indexOf(t) < 0) tags.push(t); }); });
    bar.innerHTML = tags.map(function (t, i) {
      return '<button type="button" aria-pressed="' + (i === 0) + '" data-tag="' + t + '">' + t + "</button>";
    }).join("");
    bar.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      bar.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      var t = b.getAttribute("data-tag");
      grid.querySelectorAll(".project-card").forEach(function (c) {
        c.style.display = t === "All" || c.getAttribute("data-tags").split("|").indexOf(t) >= 0 ? "" : "none";
      });
    });
  });

  // Project pages: highlight the step you are reading in the side menu
  var toc = document.querySelector(".toc");
  if (toc && "IntersectionObserver" in window) {
    var tocLinks = toc.querySelectorAll("a[href^='#']");
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          tocLinks.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id); });
        }
      });
    }, { rootMargin: "0px 0px -70% 0px" });
    document.querySelectorAll(".step[id]").forEach(function (s) { obs.observe(s); });
  }

  // Analytics (only on the live site, only when a code is set)
  if (GOATCOUNTER_CODE && location.hostname.indexOf("github.io") > -1) {
    var s = document.createElement("script");
    s.async = true;
    s.src = "//gc.zgo.at/count.js";
    s.setAttribute("data-goatcounter", "https://" + GOATCOUNTER_CODE + ".goatcounter.com/count");
    document.body.appendChild(s);
  }
})();
