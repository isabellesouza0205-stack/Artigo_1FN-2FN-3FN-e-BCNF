(function () {
  "use strict";

  var root = document.documentElement;

  /* ---- Tema claro/escuro ---- */
  var toggle = document.getElementById("theme-toggle");
  function temaAtual() {
    var t = root.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  root.setAttribute("data-theme", temaAtual());
  toggle.addEventListener("click", function () {
    var novo = temaAtual() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", novo);
    try {
      localStorage.setItem("tema", novo);
    } catch (e) {}
  });

  /* ---- Destaque simples de SQL ---- */
  var KW = [
    "CREATE",
    "TABLE",
    "PRIMARY",
    "KEY",
    "NOT",
    "NULL",
    "UNIQUE",
    "REFERENCES",
    "SERIAL",
    "INT",
    "TEXT",
    "DATE",
    "UPDATE",
    "SET",
    "WHERE",
    "SELECT",
    "FROM",
    "INSERT",
    "INTO",
    "VALUES",
    "DELETE",
    "JOIN",
    "ON",
  ];
  var kwRe = new RegExp("\\b(" + KW.join("|") + ")\\b", "g");

  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function destacar(texto) {
    // separa comentários e strings antes de marcar palavras-chave
    var partes = texto.split(/(--[^\n]*|'[^']*')/g);
    return partes
      .map(function (p) {
        if (!p) return "";
        if (p.indexOf("--") === 0)
          return '<span class="tok-com">' + esc(p) + "</span>";
        if (p.charAt(0) === "'")
          return '<span class="tok-str">' + esc(p) + "</span>";
        return esc(p)
          .replace(kwRe, '<span class="tok-kw">$1</span>')
          .replace(/\b(\d+)\b/g, '<span class="tok-num">$1</span>');
      })
      .join("");
  }

  document.querySelectorAll("pre.code").forEach(function (pre) {
    var code = pre.querySelector("code");
    var original = code.textContent;
    code.innerHTML = destacar(original);

    var wrap = document.createElement("div");
    wrap.className = "code-block";
    pre.parentNode.insertBefore(wrap, pre);
    wrap.appendChild(pre);

    var head = document.createElement("div");
    head.className = "code-head";
    head.innerHTML =
      "<span>" + (pre.getAttribute("data-lang") || "code") + "</span>";
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "copy-btn";
    btn.textContent = "copiar";
    btn.addEventListener("click", function () {
      var feito = function () {
        btn.textContent = "copiado ✓";
        setTimeout(function () {
          btn.textContent = "copiar";
        }, 1500);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(original).then(feito, function () {});
      } else {
        var ta = document.createElement("textarea");
        ta.value = original;
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand("copy");
          feito();
        } catch (e) {}
        document.body.removeChild(ta);
      }
    });
    head.appendChild(btn);
    wrap.appendChild(head);
  });

  /* ---- Barra de progresso e botão de topo ---- */
  var bar = document.getElementById("progress-bar");
  var toTop = document.getElementById("to-top");
  function aoRolar() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    bar.style.width = pct + "%";
    toTop.classList.toggle("visible", window.scrollY > 600);
  }
  window.addEventListener("scroll", aoRolar, { passive: true });
  aoRolar();
  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0 });
  });

  /* ---- Índice: marca a seção visível ---- */
  var links = document.querySelectorAll(".toc a");
  var mapa = {};
  links.forEach(function (a) {
    mapa[a.getAttribute("href").slice(1)] = a;
  });
  var secoes = Array.prototype.filter.call(
    document.querySelectorAll("main section[id]"),
    function (s) {
      return mapa[s.id];
    },
  );

  function marcarAtiva() {
    var atual = secoes[0];
    var limite = window.innerHeight * 0.3;
    secoes.forEach(function (s) {
      if (s.getBoundingClientRect().top <= limite) atual = s;
    });
    // no fim da página, marca a última seção
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 4
    ) {
      atual = secoes[secoes.length - 1];
    }
    links.forEach(function (a) {
      a.classList.remove("active");
    });
    if (atual) mapa[atual.id].classList.add("active");
  }
  window.addEventListener("scroll", marcarAtiva, { passive: true });
  marcarAtiva();
})();
