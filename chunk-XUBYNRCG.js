import {
  $ as a,
  Da as g,
  E as U,
  Ea as W,
  G as u,
  Ga as t,
  Ha as n,
  Hb as X,
  Hc as P,
  I as z,
  Ia as x,
  Ic as ae,
  J as e,
  Jb as Z,
  K as b,
  Kb as ee,
  Lb as te,
  Mb as v,
  Nb as ne,
  Nc as re,
  Qa as V,
  Qb as ie,
  Sa as q,
  T as S,
  Ta as $,
  Ua as Q,
  V as l,
  Vb as C,
  Xa as Y,
  Xb as h,
  Ya as H,
  Z as F,
  aa as r,
  ba as d,
  ca as N,
  da as j,
  fb as G,
  ga as R,
  gb as J,
  ha as k,
  m as E,
  qc as _,
  r as M,
  s as D,
  sa as p,
  ta as o,
  ua as f,
  va as A,
  wb as K,
} from "./chunk-ZKJSKFQC.js";
var pe = (() => {
  class i {
    static ɵfac = function (s) {
      return new (s || i)();
    };
    static ɵcmp = M({
      type: i,
      selectors: [["app-updates-layout"]],
      decls: 1,
      vars: 0,
      template: function (s, m) {
        s & 1 && d(0, "router-outlet");
      },
      dependencies: [ee],
      encapsulation: 2,
    });
  }
  return i;
})();
var ue = (i) => ["/", i, "news"],
  ge = (i) => ({ link: i }),
  Je = (() => {
    class i {
      translate;
      currentLanguage;
      homeUrl = "";
      constructor(c) {
        (this.translate = c),
          (this.currentLanguage = this.translate.currentLang),
          (this.homeUrl = _(this.currentLanguage)),
          this.translate.onLangChange.subscribe((s) => {
            (this.currentLanguage = s.lang),
              (this.homeUrl = _(this.currentLanguage));
          });
      }
      static ɵfac = function (s) {
        return new (s || i)(b(C));
      };
      static ɵcmp = M({
        type: i,
        selectors: [["app-detail-1"]],
        decls: 35,
        vars: 39,
        consts: [
          [1, "container", "details-container", "mt-lg-5"],
          [1, "update_detail"],
          [1, "back-btn", "mb-3", "pb-2", 3, "routerLink"],
          [
            "deferLoad",
            "/assets/images/svg-icons/back-icon.svg",
            "alt",
            "back-icon",
            1,
            "img-fluid",
            "me-3",
          ],
          [
            "deferLoad",
            "/assets/images/webp/updates/box_1.webp",
            "alt",
            "graphic",
            1,
            "graphic",
          ],
          [1, "title", "mt-4"],
          [1, "subitem"],
          [1, "subitem", "fw-bold", "big", "light", 3, "innerHTML"],
          [1, "subitem", "fw-bold", "big", "light"],
          [1, "subitem", "big", "fw-bold", 3, "innerHTML"],
          [1, "subitem", "light", "date", "mb-5"],
        ],
        template: function (s, m) {
          s & 1 &&
            (a(0, "div", 0)(1, "div", 1)(2, "a", 2),
            d(3, "img", 3),
            p(4),
            t(5, "translate"),
            r(),
            d(6, "img", 4),
            a(7, "h1", 5),
            p(8),
            t(9, "translate"),
            r(),
            a(10, "p", 6),
            p(11),
            t(12, "translate"),
            r(),
            d(13, "p", 7),
            t(14, "translate"),
            a(15, "p", 6),
            p(16),
            t(17, "translate"),
            r(),
            a(18, "p", 6),
            p(19),
            t(20, "translate"),
            r(),
            a(21, "p", 6),
            p(22),
            t(23, "translate"),
            r(),
            a(24, "p", 6),
            p(25),
            t(26, "translate"),
            r(),
            a(27, "p", 8),
            p(28),
            t(29, "translate"),
            r(),
            d(30, "p", 9),
            t(31, "translate"),
            a(32, "p", 10),
            p(33),
            t(34, "translate"),
            r()()()),
            s & 2 &&
              (e(2),
              l(
                "routerLink",
                m.currentLanguage !== "en"
                  ? g(35, ue, m.currentLanguage)
                  : "/news"
              ),
              e(2),
              f(" ", n(5, 12, "updates.back_to"), ""),
              e(4),
              o(n(9, 14, "updates.box1_title")),
              e(3),
              o(n(12, 16, "updates.box1_desc")),
              e(2),
              l(
                "innerHTML",
                x(14, 18, "updates.box1_desc1", g(37, ge, m.homeUrl)),
                u
              ),
              e(3),
              o(n(17, 21, "updates.box1_desc2")),
              e(3),
              o(n(20, 23, "updates.box1_desc3")),
              e(3),
              o(n(23, 25, "updates.box1_desc4")),
              e(3),
              o(n(26, 27, "updates.box1_desc5")),
              e(3),
              o(n(29, 29, "updates.box1_desc6")),
              e(2),
              l("innerHTML", n(31, 31, "updates.common_bottom"), u),
              e(3),
              o(n(34, 33, "updates.box1_date")));
        },
        dependencies: [v, P, h],
        encapsulation: 2,
      });
    }
    return i;
  })();
var _e = (i) => ["/", i, "news"],
  be = (i) => ({ link: i }),
  Ze = (() => {
    class i {
      translate;
      currentLanguage;
      homeUrl = "";
      constructor(c) {
        (this.translate = c),
          (this.currentLanguage = this.translate.currentLang),
          (this.homeUrl = _(this.currentLanguage)),
          this.translate.onLangChange.subscribe((s) => {
            (this.currentLanguage = s.lang),
              (this.homeUrl = _(this.currentLanguage));
          });
      }
      static ɵfac = function (s) {
        return new (s || i)(b(C));
      };
      static ɵcmp = M({
        type: i,
        selectors: [["app-detail-2"]],
        decls: 46,
        vars: 54,
        consts: [
          [1, "container", "details-container", "mt-lg-5"],
          [1, "update_detail"],
          [1, "back-btn", "mb-3", "pb-2", 3, "routerLink"],
          [
            "deferLoad",
            "/assets/images/svg-icons/back-icon.svg",
            "alt",
            "back-icon",
            1,
            "img-fluid",
            "me-3",
          ],
          [
            "deferLoad",
            "/assets/images/webp/updates/box_2.webp",
            "alt",
            "graphic",
            1,
            "graphic",
          ],
          [1, "title", "mt-4"],
          [1, "subitem"],
          [1, "subitem", "fw-bold", "big", "light"],
          [1, "subitem", 3, "innerHTML"],
          [1, "subitem", "big", "fw-bold", 3, "innerHTML"],
          [1, "subitem", "light", "date", "mb-5"],
        ],
        template: function (s, m) {
          s & 1 &&
            (a(0, "div", 0)(1, "div", 1)(2, "a", 2),
            d(3, "img", 3),
            p(4),
            t(5, "translate"),
            r(),
            d(6, "img", 4),
            a(7, "h1", 5),
            p(8),
            t(9, "translate"),
            r(),
            a(10, "p", 6),
            p(11),
            t(12, "translate"),
            r(),
            a(13, "p", 7),
            p(14),
            t(15, "translate"),
            r(),
            a(16, "p", 6),
            p(17),
            t(18, "translate"),
            r(),
            d(19, "p", 8),
            t(20, "translate"),
            a(21, "p", 6),
            p(22),
            t(23, "translate"),
            r(),
            d(24, "p", 8),
            t(25, "translate"),
            d(26, "p", 8),
            t(27, "translate"),
            d(28, "p", 8),
            t(29, "translate"),
            d(30, "p", 8),
            t(31, "translate"),
            a(32, "p", 6),
            p(33),
            t(34, "translate"),
            r(),
            a(35, "p", 6),
            p(36),
            t(37, "translate"),
            r(),
            a(38, "p", 6),
            p(39),
            t(40, "translate"),
            r(),
            d(41, "p", 9),
            t(42, "translate"),
            a(43, "p", 10),
            p(44),
            t(45, "translate"),
            r()()()),
            s & 2 &&
              (e(2),
              l(
                "routerLink",
                m.currentLanguage !== "en"
                  ? g(50, _e, m.currentLanguage)
                  : "/news"
              ),
              e(2),
              f(" ", n(5, 17, "updates.back_to"), ""),
              e(4),
              o(n(9, 19, "updates.box2_title")),
              e(3),
              o(n(12, 21, "updates.box2_desc")),
              e(3),
              o(n(15, 23, "updates.box2_desc1")),
              e(3),
              o(n(18, 25, "updates.box2_desc2")),
              e(2),
              l(
                "innerHTML",
                x(20, 27, "updates.box2_desc3", g(52, be, m.homeUrl)),
                u
              ),
              e(3),
              o(n(23, 30, "updates.box2_desc4")),
              e(2),
              l("innerHTML", n(25, 32, "updates.box2_desc5"), u),
              e(2),
              l("innerHTML", n(27, 34, "updates.box2_desc6"), u),
              e(2),
              l("innerHTML", n(29, 36, "updates.box2_desc7"), u),
              e(2),
              l("innerHTML", n(31, 38, "updates.box2_desc8"), u),
              e(3),
              o(n(34, 40, "updates.box2_desc9")),
              e(3),
              o(n(37, 42, "updates.box2_desc10")),
              e(3),
              o(n(40, 44, "updates.box2_desc11")),
              e(2),
              l("innerHTML", n(42, 46, "updates.common_bottom"), u),
              e(3),
              o(n(45, 48, "updates.box2_date")));
        },
        dependencies: [v, P, h],
        encapsulation: 2,
      });
    }
    return i;
  })();
var xe = (i) => ["/", i, "news"],
  Me = (i) => ({ link: i }),
  nt = (() => {
    class i {
      translate;
      currentLanguage;
      homeUrl = "";
      constructor(c) {
        (this.translate = c),
          (this.currentLanguage = this.translate.currentLang),
          (this.homeUrl = _(this.currentLanguage)),
          this.translate.onLangChange.subscribe((s) => {
            (this.currentLanguage = s.lang),
              (this.homeUrl = _(this.currentLanguage));
          });
      }
      static ɵfac = function (s) {
        return new (s || i)(b(C));
      };
      static ɵcmp = M({
        type: i,
        selectors: [["app-detail-3"]],
        decls: 38,
        vars: 42,
        consts: [
          [1, "container", "details-container", "mt-lg-5"],
          [1, "update_detail"],
          [1, "back-btn", "mb-3", "pb-2", 3, "routerLink"],
          [
            "deferLoad",
            "/assets/images/svg-icons/back-icon.svg",
            "alt",
            "back-icon",
            1,
            "img-fluid",
            "me-3",
          ],
          [
            "deferLoad",
            "/assets/images/webp/updates/box_3.webp",
            "alt",
            "graphic",
            1,
            "graphic",
          ],
          [1, "title", "mt-4"],
          [1, "subitem"],
          [1, "subitem", "mb-0"],
          [1, "subitem", 3, "innerHTML"],
          [1, "subitem", "big", "fw-bold", 3, "innerHTML"],
          [1, "subitem", "light", "date", "mb-5"],
        ],
        template: function (s, m) {
          s & 1 &&
            (a(0, "div", 0)(1, "div", 1)(2, "a", 2),
            d(3, "img", 3),
            p(4),
            t(5, "translate"),
            r(),
            d(6, "img", 4),
            a(7, "h1", 5),
            p(8),
            t(9, "translate"),
            r(),
            a(10, "p", 6),
            p(11),
            t(12, "translate"),
            r(),
            a(13, "p", 7),
            p(14),
            t(15, "translate"),
            r(),
            a(16, "ul")(17, "li", 6),
            p(18),
            t(19, "translate"),
            r(),
            a(20, "li", 6),
            p(21),
            t(22, "translate"),
            r(),
            a(23, "li", 6),
            p(24),
            t(25, "translate"),
            r(),
            a(26, "li", 6),
            p(27),
            t(28, "translate"),
            r()(),
            a(29, "p", 8),
            t(30, "translate"),
            p(31),
            t(32, "translate"),
            r(),
            d(33, "p", 9),
            t(34, "translate"),
            a(35, "p", 10),
            p(36),
            t(37, "translate"),
            r()()()),
            s & 2 &&
              (e(2),
              l(
                "routerLink",
                m.currentLanguage !== "en"
                  ? g(38, xe, m.currentLanguage)
                  : "/news"
              ),
              e(2),
              f(" ", n(5, 13, "updates.back_to"), ""),
              e(4),
              o(n(9, 15, "updates.box3_title")),
              e(3),
              o(n(12, 17, "updates.box3_desc")),
              e(3),
              o(n(15, 19, "updates.box3_desc2")),
              e(4),
              o(n(19, 21, "updates.box3_li_1")),
              e(3),
              o(n(22, 23, "updates.box3_li_2")),
              e(3),
              o(n(25, 25, "updates.box3_li_3")),
              e(3),
              o(n(28, 27, "updates.box3_li_4")),
              e(2),
              l(
                "innerHTML",
                x(30, 29, "updates.box3_desc3", g(40, Me, m.homeUrl)),
                u
              ),
              e(2),
              o(n(32, 32, "updates.box3_desc3")),
              e(2),
              l("innerHTML", n(34, 34, "updates.common_bottom"), u),
              e(3),
              o(n(37, 36, "updates.box3_date")));
        },
        dependencies: [v, P, h],
        encapsulation: 2,
      });
    }
    return i;
  })();
var fe = (i) => ["/", i, "news"],
  ve = (i) => ({ link: i }),
  rt = (() => {
    class i {
      translate;
      currentLanguage;
      homeUrl = "";
      constructor(c) {
        (this.translate = c),
          (this.currentLanguage = this.translate.currentLang),
          (this.homeUrl = _(this.currentLanguage)),
          this.translate.onLangChange.subscribe((s) => {
            (this.currentLanguage = s.lang),
              (this.homeUrl = _(this.currentLanguage));
          });
      }
      static ɵfac = function (s) {
        return new (s || i)(b(C));
      };
      static ɵcmp = M({
        type: i,
        selectors: [["app-detail-4"]],
        decls: 55,
        vars: 60,
        consts: [
          [1, "container", "details-container", "mt-lg-5"],
          [1, "update_detail"],
          [1, "back-btn", "mb-3", "pb-2", 3, "routerLink"],
          [
            "deferLoad",
            "/assets/images/svg-icons/back-icon.svg",
            "alt",
            "back-icon",
            1,
            "img-fluid",
            "me-3",
          ],
          [
            "deferLoad",
            "/assets/images/webp/updates/box_4.webp",
            "alt",
            "graphic",
            1,
            "graphic",
          ],
          [1, "title", "mt-4"],
          [1, "subitem"],
          [1, "ms-2"],
          [1, "subitem", "mb-0", "mt-2", "fw-bold"],
          [1, "subitem", 3, "innerHTML"],
          [1, "subitem", "big", "fw-bold", 3, "innerHTML"],
          [1, "subitem", "light", "date", "mb-5"],
        ],
        template: function (s, m) {
          s & 1 &&
            (a(0, "div", 0)(1, "div", 1)(2, "a", 2),
            d(3, "img", 3),
            p(4),
            t(5, "translate"),
            r(),
            d(6, "img", 4),
            a(7, "h1", 5),
            p(8),
            t(9, "translate"),
            r(),
            a(10, "p", 6),
            p(11),
            t(12, "translate"),
            t(13, "translate"),
            r(),
            a(14, "ul", 7)(15, "li", 6),
            p(16),
            t(17, "translate"),
            r(),
            a(18, "li", 6),
            p(19),
            t(20, "translate"),
            r(),
            a(21, "li", 6),
            p(22),
            t(23, "translate"),
            r(),
            a(24, "li", 6),
            p(25),
            t(26, "translate"),
            r()(),
            a(27, "p", 8),
            p(28),
            t(29, "translate"),
            r(),
            a(30, "p", 9),
            t(31, "translate"),
            p(32),
            t(33, "translate"),
            r(),
            a(34, "p", 6),
            p(35),
            t(36, "translate"),
            r(),
            a(37, "ul", 7)(38, "li", 6),
            p(39),
            t(40, "translate"),
            r(),
            a(41, "li", 6),
            p(42),
            t(43, "translate"),
            r(),
            a(44, "li", 6),
            p(45),
            t(46, "translate"),
            r()(),
            a(47, "p", 6),
            p(48),
            t(49, "translate"),
            r(),
            d(50, "p", 10),
            t(51, "translate"),
            a(52, "p", 11),
            p(53),
            t(54, "translate"),
            r()()()),
            s & 2 &&
              (e(2),
              l(
                "routerLink",
                m.currentLanguage !== "en"
                  ? g(56, fe, m.currentLanguage)
                  : "/news"
              ),
              e(2),
              f(" ", n(5, 19, "updates.back_to"), ""),
              e(4),
              o(n(9, 21, "updates.box4_title")),
              e(3),
              A(
                "",
                n(12, 23, "updates.box4_desc"),
                " ",
                n(13, 25, "updates.box4_desc1"),
                ""
              ),
              e(5),
              o(n(17, 27, "updates.box4_li_1")),
              e(3),
              o(n(20, 29, "updates.box4_li_2")),
              e(3),
              o(n(23, 31, "updates.box4_li_3")),
              e(3),
              o(n(26, 33, "updates.box4_li_4")),
              e(3),
              o(n(29, 35, "updates.box4_para2_title")),
              e(2),
              l(
                "innerHTML",
                x(31, 37, "updates.box4_para2_desc", g(58, ve, m.homeUrl)),
                u
              ),
              e(2),
              o(n(33, 40, "updates.box4_para2_desc")),
              e(3),
              o(n(36, 42, "updates.box4_para3_title")),
              e(4),
              o(n(40, 44, "updates.box4_li2_1")),
              e(3),
              o(n(43, 46, "updates.box4_li2_2")),
              e(3),
              o(n(46, 48, "updates.box4_li2_3")),
              e(3),
              o(n(49, 50, "updates.box4_para3_desc")),
              e(2),
              l("innerHTML", n(51, 52, "updates.common_bottom"), u),
              e(3),
              o(n(54, 54, "updates.box4_date")));
        },
        dependencies: [v, P, h],
        encapsulation: 2,
      });
    }
    return i;
  })();
var Ce = (i) => ["/", i, "news"],
  he = (i) => ({ link: i }),
  st = (() => {
    class i {
      translate;
      currentLanguage;
      homeUrl = "";
      constructor(c) {
        (this.translate = c),
          (this.currentLanguage = this.translate.currentLang),
          (this.homeUrl = _(this.currentLanguage)),
          this.translate.onLangChange.subscribe((s) => {
            (this.currentLanguage = s.lang),
              (this.homeUrl = _(this.currentLanguage));
          });
      }
      static ɵfac = function (s) {
        return new (s || i)(b(C));
      };
      static ɵcmp = M({
        type: i,
        selectors: [["app-detail-5"]],
        decls: 42,
        vars: 48,
        consts: [
          [1, "container", "details-container", "mt-lg-5"],
          [1, "update_detail"],
          [1, "back-btn", "mb-3", "pb-2", 3, "routerLink"],
          [
            "deferLoad",
            "/assets/images/svg-icons/back-icon.svg",
            "alt",
            "back-icon",
            1,
            "img-fluid",
            "me-3",
          ],
          [
            "deferLoad",
            "/assets/images/webp/updates/box_5.webp",
            "alt",
            "graphic",
            1,
            "graphic",
          ],
          [1, "title", "mt-4"],
          [1, "subitem", 3, "innerHTML"],
          [1, "mt-4", 3, "innerHTML"],
          [1, "ms-2"],
          [1, "subitem"],
          [1, "subitem", "mb-3", "max-w-400"],
          [1, "subitem", "mb-3", 3, "innerHTML"],
          [1, "subitem", "mb-3"],
          [1, "subitem", "mb-4", "max-w-400"],
          [1, "subitem", "big", "fw-bold", 3, "innerHTML"],
          [1, "subitem", "light", "date", "mb-5"],
        ],
        template: function (s, m) {
          s & 1 &&
            (a(0, "div", 0)(1, "div", 1)(2, "a", 2),
            d(3, "img", 3),
            p(4),
            t(5, "translate"),
            r(),
            d(6, "img", 4),
            a(7, "h1", 5),
            p(8),
            t(9, "translate"),
            r(),
            d(10, "p", 6),
            t(11, "translate"),
            d(12, "p", 7),
            t(13, "translate"),
            a(14, "ul", 8)(15, "li", 9),
            p(16),
            t(17, "translate"),
            r(),
            a(18, "li", 9),
            p(19),
            t(20, "translate"),
            r(),
            a(21, "li", 9),
            p(22),
            t(23, "translate"),
            r()(),
            a(24, "p", 10),
            p(25),
            t(26, "translate"),
            r(),
            d(27, "p", 11),
            t(28, "translate"),
            a(29, "p", 12),
            p(30),
            t(31, "translate"),
            r(),
            d(32, "p", 11),
            t(33, "translate"),
            a(34, "p", 13),
            p(35),
            t(36, "translate"),
            r(),
            d(37, "p", 14),
            t(38, "translate"),
            a(39, "p", 15),
            p(40),
            t(41, "translate"),
            r()()()),
            s & 2 &&
              (e(2),
              l(
                "routerLink",
                m.currentLanguage !== "en"
                  ? g(44, Ce, m.currentLanguage)
                  : "/news"
              ),
              e(2),
              f(" ", n(5, 15, "updates.back_to"), ""),
              e(4),
              o(n(9, 17, "updates.box5_title")),
              e(2),
              l("innerHTML", n(11, 19, "updates.box5_desc"), u),
              e(2),
              l(
                "innerHTML",
                x(13, 21, "updates.box5_list_title", g(46, he, m.homeUrl)),
                u
              ),
              e(4),
              o(n(17, 24, "updates.box5_li_1")),
              e(3),
              o(n(20, 26, "updates.box5_li_2")),
              e(3),
              o(n(23, 28, "updates.box5_li_3")),
              e(3),
              o(n(26, 30, "updates.box5_para1")),
              e(2),
              l("innerHTML", n(28, 32, "updates.box5_para2"), u),
              e(3),
              o(n(31, 34, "updates.box5_para3")),
              e(2),
              l("innerHTML", n(33, 36, "updates.box5_para4"), u),
              e(3),
              o(n(36, 38, "updates.box5_para5")),
              e(2),
              l("innerHTML", n(38, 40, "updates.common_bottom"), u),
              e(3),
              o(n(41, 42, "updates.box4_date")));
        },
        dependencies: [v, P, h],
        encapsulation: 2,
      });
    }
    return i;
  })();
var Pe = (i) => ["/", i, "news"],
  Le = (i) => ({ link: i }),
  dt = (() => {
    class i {
      translate;
      currentLanguage;
      homeUrl = "";
      constructor(c) {
        (this.translate = c),
          (this.currentLanguage = this.translate.currentLang),
          (this.homeUrl = _(this.currentLanguage)),
          this.translate.onLangChange.subscribe((s) => {
            (this.currentLanguage = s.lang),
              (this.homeUrl = _(this.currentLanguage));
          });
      }
      static ɵfac = function (s) {
        return new (s || i)(b(C));
      };
      static ɵcmp = M({
        type: i,
        selectors: [["app-detail-6"]],
        decls: 46,
        vars: 54,
        consts: [
          [1, "container", "details-container", "mt-lg-5"],
          [1, "update_detail"],
          [1, "back-btn", "mb-3", "pb-2", 3, "routerLink"],
          [
            "deferLoad",
            "/assets/images/svg-icons/back-icon.svg",
            "alt",
            "back-icon",
            1,
            "img-fluid",
            "me-3",
          ],
          [
            "deferLoad",
            "/assets/images/webp/updates/box_6.webp",
            "alt",
            "graphic",
            1,
            "graphic",
          ],
          [1, "title", "mt-4"],
          [1, "subitem", 3, "innerHTML"],
          [1, "mt-4", 3, "innerHTML"],
          [1, "mb-3", 3, "innerHTML"],
          [1, "ms-2"],
          [1, "subitem", "mb-1"],
          [1, "subitem", "mb-3", 3, "innerHTML"],
          [1, "subitem", "mb-4"],
          [1, "subitem", "big", "fw-bold", 3, "innerHTML"],
          [1, "subitem", "light", "date", "mb-5"],
        ],
        template: function (s, m) {
          s & 1 &&
            (a(0, "div", 0)(1, "div", 1)(2, "a", 2),
            d(3, "img", 3),
            p(4),
            t(5, "translate"),
            r(),
            d(6, "img", 4),
            a(7, "h1", 5),
            p(8),
            t(9, "translate"),
            r(),
            d(10, "p", 6),
            t(11, "translate"),
            d(12, "p", 7),
            t(13, "translate"),
            d(14, "p", 8),
            t(15, "translate"),
            a(16, "ul", 9)(17, "li", 10),
            p(18),
            t(19, "translate"),
            r(),
            a(20, "li", 10),
            p(21),
            t(22, "translate"),
            r(),
            a(23, "li", 10),
            p(24),
            t(25, "translate"),
            r(),
            a(26, "li", 10),
            p(27),
            t(28, "translate"),
            r()(),
            a(29, "p", 11),
            t(30, "translate"),
            p(31),
            t(32, "translate"),
            r(),
            d(33, "p", 11),
            t(34, "translate"),
            a(35, "p", 12),
            p(36),
            t(37, "translate"),
            r(),
            a(38, "p", 12),
            p(39),
            t(40, "translate"),
            r(),
            d(41, "p", 13),
            t(42, "translate"),
            a(43, "p", 14),
            p(44),
            t(45, "translate"),
            r()()()),
            s & 2 &&
              (e(2),
              l(
                "routerLink",
                m.currentLanguage !== "en"
                  ? g(50, Pe, m.currentLanguage)
                  : "/news"
              ),
              e(2),
              f(" ", n(5, 17, "updates.back_to"), ""),
              e(4),
              o(n(9, 19, "updates.box6_title")),
              e(2),
              l("innerHTML", n(11, 21, "updates.box6_desc"), u),
              e(2),
              l("innerHTML", n(13, 23, "updates.box6_para1"), u),
              e(2),
              l("innerHTML", n(15, 25, "updates.box6_para2"), u),
              e(4),
              o(n(19, 27, "updates.box6_li_1")),
              e(3),
              o(n(22, 29, "updates.box6_li_2")),
              e(3),
              o(n(25, 31, "updates.box6_li_3")),
              e(3),
              o(n(28, 33, "updates.box6_li_4")),
              e(2),
              l(
                "innerHTML",
                x(30, 35, "updates.box6_para3", g(52, Le, m.homeUrl)),
                u
              ),
              e(2),
              o(n(32, 38, "updates.box6_para3")),
              e(2),
              l("innerHTML", n(34, 40, "updates.box6_para4"), u),
              e(3),
              o(n(37, 42, "updates.box6_para5")),
              e(3),
              o(n(40, 44, "updates.box6_para6")),
              e(2),
              l("innerHTML", n(42, 46, "updates.common_bottom"), u),
              e(3),
              o(n(45, 48, "updates.box6_date")));
        },
        dependencies: [v, P, h],
        encapsulation: 2,
      });
    }
    return i;
  })();
var Oe = (i) => ["/", i, "news"],
  we = (i) => ({ link: i }),
  gt = (() => {
    class i {
      translate;
      currentLanguage;
      homeUrl = "";
      constructor(c) {
        (this.translate = c),
          (this.currentLanguage = this.translate.currentLang),
          (this.homeUrl = _(this.currentLanguage)),
          this.translate.onLangChange.subscribe((s) => {
            (this.currentLanguage = s.lang),
              (this.homeUrl = _(this.currentLanguage));
          });
      }
      static ɵfac = function (s) {
        return new (s || i)(b(C));
      };
      static ɵcmp = M({
        type: i,
        selectors: [["app-details-7"]],
        decls: 56,
        vars: 60,
        consts: [
          [1, "container", "details-container", "mt-lg-5"],
          [1, "update_detail"],
          [1, "back-btn", "mb-3", "pb-2", 3, "routerLink"],
          [
            "deferLoad",
            "/assets/images/svg-icons/back-icon.svg",
            "alt",
            "back-icon",
            1,
            "img-fluid",
            "me-3",
          ],
          [
            "deferLoad",
            "/assets/images/webp/updates/box_7.webp",
            "alt",
            "graphic",
            1,
            "graphic",
          ],
          [1, "title", "mt-4"],
          [1, "subitem", 3, "innerHTML"],
          [1, "mt-4", "fw-bold", 3, "innerHTML"],
          [1, "ms-2"],
          [1, "subitem", "mb-1"],
          [1, "subitem", "mb-3", "fw-bold"],
          [1, "subitem", "mb-3", "fw-bold", 3, "innerHTML"],
          [1, "subitem", "mb-1", 3, "innerHTML"],
          [1, "subitem", "big", "fw-bold", 3, "innerHTML"],
          [1, "subitem", "light", "date", "mb-5"],
        ],
        template: function (s, m) {
          s & 1 &&
            (a(0, "div", 0)(1, "div", 1)(2, "a", 2),
            d(3, "img", 3),
            p(4),
            t(5, "translate"),
            r(),
            d(6, "img", 4),
            a(7, "h1", 5),
            p(8),
            t(9, "translate"),
            r(),
            d(10, "p", 6),
            t(11, "translate"),
            d(12, "p", 7),
            t(13, "translate"),
            a(14, "ul", 8)(15, "li", 9),
            p(16),
            t(17, "translate"),
            r(),
            a(18, "li", 9),
            p(19),
            t(20, "translate"),
            r(),
            a(21, "li", 9),
            p(22),
            t(23, "translate"),
            r(),
            a(24, "li", 9),
            p(25),
            t(26, "translate"),
            r()(),
            a(27, "p", 10),
            p(28),
            t(29, "translate"),
            r(),
            a(30, "ul", 8)(31, "li", 9),
            p(32),
            t(33, "translate"),
            r(),
            a(34, "li", 9),
            p(35),
            t(36, "translate"),
            r(),
            a(37, "li", 9),
            p(38),
            t(39, "translate"),
            r(),
            a(40, "li", 9),
            p(41),
            t(42, "translate"),
            r()(),
            d(43, "p", 11),
            t(44, "translate"),
            a(45, "ul", 8),
            d(46, "li", 12),
            t(47, "translate"),
            a(48, "li", 9),
            p(49),
            t(50, "translate"),
            r()(),
            d(51, "p", 13),
            t(52, "translate"),
            a(53, "p", 14),
            p(54),
            t(55, "translate"),
            r()()()),
            s & 2 &&
              (e(2),
              l(
                "routerLink",
                m.currentLanguage !== "en"
                  ? g(56, Oe, m.currentLanguage)
                  : "/news"
              ),
              e(2),
              f(" ", n(5, 19, "updates.back_to"), ""),
              e(4),
              o(n(9, 21, "updates.box7_title")),
              e(2),
              l("innerHTML", n(11, 23, "updates.box7_desc"), u),
              e(2),
              l("innerHTML", n(13, 25, "updates.box7_para1"), u),
              e(4),
              o(n(17, 27, "updates.box7_li_1")),
              e(3),
              o(n(20, 29, "updates.box7_li_2")),
              e(3),
              o(n(23, 31, "updates.box7_li_3")),
              e(3),
              o(n(26, 33, "updates.box7_li_4")),
              e(3),
              o(n(29, 35, "updates.box7_para3")),
              e(4),
              o(n(33, 37, "updates.box7_li_5")),
              e(3),
              o(n(36, 39, "updates.box7_li_6")),
              e(3),
              o(n(39, 41, "updates.box7_li_7")),
              e(3),
              o(n(42, 43, "updates.box7_li_8")),
              e(2),
              l("innerHTML", n(44, 45, "updates.box7_para4"), u),
              e(3),
              l(
                "innerHTML",
                x(47, 47, "updates.box7_li_9", g(58, we, m.homeUrl)),
                u
              ),
              e(3),
              o(n(50, 50, "updates.box7_li_10")),
              e(2),
              l("innerHTML", n(52, 52, "updates.common_bottom"), u),
              e(3),
              o(n(55, 54, "updates.box7_date")));
        },
        dependencies: [v, P, h],
        encapsulation: 2,
      });
    }
    return i;
  })();
var Be = (i) => ["/", i, "news"],
  Ie = (i) => ({ link: i }),
  xt = (() => {
    class i {
      translate;
      currentLanguage;
      homeUrl = "";
      constructor(c) {
        (this.translate = c),
          (this.currentLanguage = this.translate.currentLang),
          (this.homeUrl = _(this.currentLanguage)),
          this.translate.onLangChange.subscribe((s) => {
            (this.currentLanguage = s.lang),
              (this.homeUrl = _(this.currentLanguage));
          });
      }
      static ɵfac = function (s) {
        return new (s || i)(b(C));
      };
      static ɵcmp = M({
        type: i,
        selectors: [["app-details-8"]],
        decls: 29,
        vars: 33,
        consts: [
          [1, "container", "details-container", "mt-lg-5"],
          [1, "update_detail"],
          [1, "back-btn", "mb-3", "pb-2", 3, "routerLink"],
          [
            "deferLoad",
            "/assets/images/svg-icons/back-icon.svg",
            "alt",
            "back-icon",
            1,
            "img-fluid",
            "me-3",
          ],
          [
            "deferLoad",
            "/assets/images/webp/updates/box_8.webp",
            "alt",
            "graphic",
            1,
            "graphic",
          ],
          [1, "title", "mt-4"],
          [1, "subitem", "mb-3"],
          [1, "subitem", "mb-3", 3, "innerHTML"],
          [1, "subitem", "big", "fw-bold", 3, "innerHTML"],
          [1, "subitem", "light", "date", "mb-5"],
        ],
        template: function (s, m) {
          s & 1 &&
            (a(0, "div", 0)(1, "div", 1)(2, "a", 2),
            d(3, "img", 3),
            p(4),
            t(5, "translate"),
            r(),
            d(6, "img", 4),
            a(7, "h1", 5),
            p(8),
            t(9, "translate"),
            r(),
            a(10, "p", 6),
            p(11),
            t(12, "translate"),
            r(),
            a(13, "p", 6),
            p(14),
            t(15, "translate"),
            r(),
            d(16, "p", 7),
            t(17, "translate"),
            a(18, "p", 6),
            p(19),
            t(20, "translate"),
            r(),
            a(21, "p", 6),
            p(22),
            t(23, "translate"),
            r(),
            d(24, "p", 8),
            t(25, "translate"),
            a(26, "p", 9),
            p(27),
            t(28, "translate"),
            r()()()),
            s & 2 &&
              (e(2),
              l(
                "routerLink",
                m.currentLanguage !== "en"
                  ? g(29, Be, m.currentLanguage)
                  : "/news"
              ),
              e(2),
              f(" ", n(5, 10, "updates.back_to"), ""),
              e(4),
              o(n(9, 12, "updates.box8_title")),
              e(3),
              o(n(12, 14, "updates.box8_desc")),
              e(3),
              o(n(15, 16, "updates.box8_para1")),
              e(2),
              l(
                "innerHTML",
                x(17, 18, "updates.box8_para2", g(31, Ie, m.homeUrl)),
                u
              ),
              e(3),
              o(n(20, 21, "updates.box8_para3")),
              e(3),
              o(n(23, 23, "updates.box8_para4")),
              e(2),
              l("innerHTML", n(25, 25, "updates.common_bottom"), u),
              e(3),
              o(n(28, 27, "updates.box8_date")));
        },
        dependencies: [v, P, h],
        encapsulation: 2,
      });
    }
    return i;
  })();
var ke = (i) => ({ "three-cards": i }),
  Se = (i) => ({ link: i }),
  ye = (i, I) => ["/", i, "news", I],
  He = (i) => ["/news", i],
  Te = (i) => ["/", i, "news"];
function Ee(i, I) {
  i & 1 && d(0, "app-common-carousel", 10),
    i & 2 && l("rewards", !0)("placement", "banner");
}
function De(i, I) {
  i & 1 && (a(0, "h1", 11), p(1), t(2, "translate"), r()),
    i & 2 && (e(), o(n(2, 1, "updates.title")));
}
function Ue(i, I) {
  i & 1 && (a(0, "h2", 11), p(1), t(2, "translate"), r()),
    i & 2 && (e(), o(n(2, 1, "updates.title")));
}
function ze(i, I) {
  if ((i & 1 && (d(0, "h2", 12), t(1, "translate")), i & 2)) {
    let c = k(2);
    l("innerHTML", x(1, 1, "updates.desc", g(4, Se, c.homeUrl)), u);
  }
}
function Fe(i, I) {
  if (
    (i & 1 &&
      (a(0, "a", 14),
      d(1, "img", 15),
      a(2, "div", 16)(3, "p", 17),
      p(4),
      t(5, "translate"),
      r(),
      d(6, "p", 18),
      t(7, "translate"),
      r(),
      a(8, "span", 19),
      p(9),
      t(10, "translate"),
      r()()),
    i & 2)
  ) {
    let c = k().$implicit,
      s = k(2);
    F("box ", c.cursor, ""),
      l(
        "routerLink",
        s.currentLanguage !== "en"
          ? W(15, ye, s.currentLanguage, c.link)
          : g(18, He, c.link)
      ),
      e(),
      l("deferLoad", c.graphic),
      e(2),
      l("ngClass", s.currentLanguage),
      e(),
      o(n(5, 9, c.title)),
      e(2),
      l("innerHTML", n(7, 11, c.desc), u),
      e(3),
      f(" ", n(10, 13, "updates.read_more"), " ");
  }
}
function Ne(i, I) {
  if ((i & 1 && (N(0), S(1, Fe, 11, 20, "a", 13), j()), i & 2)) {
    let c = I.index,
      s = k(2);
    e(), l("ngIf", s.fromLanding && !s.isMobile ? c < 8 : !0);
  }
}
function je(i, I) {
  if (
    (i & 1 && (a(0, "div", 20)(1, "a", 21), p(2), t(3, "translate"), r()()),
    i & 2)
  ) {
    let c = k(2);
    e(),
      l(
        "routerLink",
        c.currentLanguage !== "en" ? g(4, Te, c.currentLanguage) : "/news"
      ),
      e(),
      o(n(3, 2, "updates.check_updates"));
  }
}
function Re(i, I) {
  if (
    (i & 1 &&
      (a(0, "div", 3),
      S(1, Ee, 1, 2, "app-common-carousel", 4)(2, De, 3, 3, "h1", 5)(
        3,
        Ue,
        3,
        3,
        "h2",
        5
      )(4, ze, 2, 6, "h2", 6),
      a(5, "div", 7),
      S(6, Ne, 2, 1, "ng-container", 8),
      r(),
      S(7, je, 4, 6, "div", 9),
      r()),
    i & 2)
  ) {
    let c = k();
    e(),
      l("ngIf", !c.fromLanding),
      e(),
      l("ngIf", !c.fromLanding),
      e(),
      l("ngIf", c.fromLanding),
      e(),
      l("ngIf", !c.fromLanding),
      e(),
      l("ngClass", g(7, ke, !c.fromLanding && !c.isMobile)),
      e(),
      l("ngForOf", c.items),
      e(),
      l("ngIf", c.fromLanding);
  }
}
function Ae(i, I) {
  i & 1 && d(0, "app-common-carousel", 22),
    i & 2 && l("placement", "bitcoin-layer");
}
var kt = (() => {
  class i {
    dom;
    _platformId;
    translate;
    route;
    router;
    meta;
    title;
    fromLanding = !1;
    currentLanguage = "";
    isMobile = !1;
    homeUrl = "";
    onResize(c) {
      if (H(this._platformId)) {
        let s = window.innerWidth;
        this.isMobile = s <= 1024;
      }
    }
    constructor(c, s, m, T, y, le, de) {
      (this.dom = c),
        (this._platformId = s),
        (this.translate = m),
        (this.route = T),
        (this.router = y),
        (this.meta = le),
        (this.title = de),
        (this.currentLanguage = this.translate.currentLang),
        this.translate.onLangChange.subscribe((me) => {
          (this.currentLanguage = me.lang),
            (this.homeUrl = _(this.currentLanguage));
        });
    }
    activeIndex = -1;
    items = [
      {
        id: 12,
        graphic: "/assets/images/webp/updates/box_12.webp",
        title: "updates.box12_title",
        desc: "updates.box12_desc",
        isActive: !0,
        cursor: "cursor-pointer",
        link: "Observability-&-Indexing",
      },
      {
        id: 11,
        graphic: "/assets/images/webp/updates/box_11.webp",
        title: "updates.box11_title",
        desc: "updates.box11_desc",
        isActive: !0,
        cursor: "cursor-pointer",
        link: "Developer-Workflow-Design",
      },
      {
        id: 10,
        graphic: "/assets/images/webp/updates/box_10.webp",
        title: "updates.box10_title",
        desc: "updates.box10_desc",
        isActive: !0,
        cursor: "cursor-pointer",
        link: "Rollup-Sequencing-Models",
      },
      {
        id: 9,
        graphic: "/assets/images/webp/updates/box_9.webp",
        title: "updates.box9_title",
        desc: "updates.box9_desc",
        isActive: !0,
        cursor: "cursor-pointer",
        link: "Execution-Layer-Research",
      },
      {
        id: 8,
        graphic: "/assets/images/webp/updates/box_8.webp",
        title: "updates.box8_title",
        desc: "updates.box8_desc",
        isActive: !0,
        cursor: "cursor-pointer",
        link: "Settlement-Pathways",
      },
      {
        id: 7,
        graphic: "/assets/images/webp/updates/box_7.webp",
        title: "updates.box7_title",
        desc: "updates.box7_desc",
        isActive: !0,
        cursor: "cursor-pointer",
        link: "Bitcoin-Hyper-Ecosystem-Update",
      },
      {
        id: 6,
        graphic: "/assets/images/webp/updates/box_6.webp",
        title: "updates.box6_title",
        desc: "updates.box6_desc",
        isActive: !0,
        cursor: "cursor-pointer",
        link: "SVM-Programs-Running-Natively",
      },
      {
        id: 5,
        graphic: "/assets/images/webp/updates/box_5.webp",
        title: "updates.box5_title",
        desc: "updates.box5_desc",
        isActive: !0,
        cursor: "cursor-pointer",
        link: "The-Rollup-Model:-Why-It-Works-for-Bitcoin",
      },
      {
        id: 4,
        graphic: "/assets/images/webp/updates/box_4.webp",
        title: "updates.box4_title",
        desc: "updates.box4_desc",
        isActive: !0,
        cursor: "cursor-pointer",
        link: "What-You-Can-Build-On-Bitcoin-Hyper",
      },
      {
        id: 3,
        graphic: "/assets/images/webp/updates/box_3.webp",
        title: "updates.box3_title",
        desc: "updates.box3_desc",
        isActive: !0,
        cursor: "cursor-pointer",
        link: "Devnet-Is-Live-Quietly",
      },
      {
        id: 2,
        graphic: "/assets/images/webp/updates/box_2.webp",
        title: "updates.box2_title",
        desc: "updates.box2_desc",
        isActive: !0,
        cursor: "cursor-pointer",
        link: "Why-solana-VM-Why-Not-EVM",
      },
      {
        id: 1,
        graphic: "/assets/images/webp/updates/box_1.webp",
        title: "updates.box1_title",
        desc: "updates.box1_desc",
        isActive: !0,
        cursor: "cursor-pointer",
        link: "Introducing-Bitcoin-Hyper:-Bringing-Rollups-to-Bitcoin",
      },
    ];
    goBack() {
      this.activeIndex = -1;
    }
    ngOnInit() {
      this.router.queryParams.subscribe((c) => {
        c.id && (this.activeIndex = c.id);
      }),
        (this.homeUrl = _(this.currentLanguage));
    }
    handleActiveClick(c) {
      if (this.fromLanding) {
        this.route.navigate([`/${this.currentLanguage}/news`, c.title]);
        return;
      }
      c.isActive && (this.activeIndex = c.id),
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    ngAfterViewInit() {
      setTimeout(() => {
        if (H(this._platformId)) {
          let c = window.innerWidth;
          this.isMobile = c <= 1024;
        }
      }, 100);
    }
    static ɵfac = function (s) {
      return new (s || i)(b(V), b(U), b(C), b(te), b(Z), b(G), b(J));
    };
    static ɵcmp = M({
      type: i,
      selectors: [["app-updates"]],
      hostBindings: function (s, m) {
        s & 1 &&
          R(
            "resize",
            function (y) {
              return m.onResize(y);
            },
            !1,
            z
          );
      },
      inputs: { fromLanding: "fromLanding" },
      decls: 3,
      vars: 2,
      consts: [
        ["id", "updates", 1, "updates"],
        ["class", "container mt-2", 4, "ngIf"],
        [3, "placement", 4, "ngIf"],
        [1, "container", "mt-2"],
        [3, "rewards", "placement", 4, "ngIf"],
        ["class", "section-title", 4, "ngIf"],
        ["class", "subtitle", 3, "innerHTML", 4, "ngIf"],
        [1, "boxes", 3, "ngClass"],
        [4, "ngFor", "ngForOf"],
        ["class", "d-flex justify-content-center mt-3", 4, "ngIf"],
        [3, "rewards", "placement"],
        [1, "section-title"],
        [1, "subtitle", 3, "innerHTML"],
        [3, "routerLink", "class", 4, "ngIf"],
        [3, "routerLink"],
        ["alt", "graphic", 1, "graphic", 3, "deferLoad"],
        [1, "content-wrapper"],
        [1, "title", 3, "ngClass"],
        [1, "desc", 3, "innerHTML"],
        [1, "read-more-cta"],
        [1, "d-flex", "justify-content-center", "mt-3"],
        [
          "title",
          "News",
          1,
          "btn",
          "btn-primary",
          "updates-btn",
          "text-white",
          "mwx-230",
          "w-100",
          3,
          "routerLink",
        ],
        [3, "placement"],
      ],
      template: function (s, m) {
        s & 1 &&
          (a(0, "div", 0),
          S(1, Re, 8, 9, "div", 1)(2, Ae, 1, 1, "app-common-carousel", 2),
          r()),
          s & 2 &&
            (e(),
            l("ngIf", m.activeIndex == -1),
            e(),
            l("ngIf", !m.fromLanding));
      },
      dependencies: [v, q, $, Q, ae, P, h],
      styles: [
        ".updates[_ngcontent-%COMP%]{padding:100px 0 20px}@media screen and (max-width: 576px){.updates[_ngcontent-%COMP%]{padding:125px 0 20px;background-size:100%}}.updates[_ngcontent-%COMP%]   .updates-btn[_ngcontent-%COMP%]{background:#1a7ef7!important}.updates[_ngcontent-%COMP%]   .updates-btn[_ngcontent-%COMP%]:hover{border-color:#1a7ef7!important}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{color:#464646;text-transform:uppercase;max-width:60%;font-family:Librestile_Extended_Bold,sans-serif;font-size:1rem}@media screen and (max-width: 576px){.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{max-width:100%;font-size:14px;line-height:18px}}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes.three-cards[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}@media screen and (max-width: 1024px){.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media screen and (max-width: 768px){.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media screen and (max-width: 576px){.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr)}}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{width:100%;border:2px solid #000000;box-shadow:0 2px #000;background:#fea942;border-radius:24px;margin:8px;min-height:450px;position:relative;color:#000;overflow:hidden}@media screen and (max-width: 576px){.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{margin:8px 0;min-height:unset}}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;overflow:hidden}@media screen and (max-width: 576px){.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{-webkit-line-clamp:6;margin-bottom:50px}}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .graphic[_ngcontent-%COMP%]{max-height:220px;width:100%;border-radius:20px 20px 0 0}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{margin-top:8px;padding:0 16px}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:20px;font-weight:700;margin-bottom:0;min-height:56px}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.bg[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.cz[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.nl[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.fr[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.el[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.hu[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.id[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.it[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.jp[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.pl[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.pt[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.ro[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.sk[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.es[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.tr[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.vn[_ngcontent-%COMP%]{min-height:84px}@media screen and (max-width: 576px){.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.bg[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.cz[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.nl[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.fr[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.el[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.hu[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.id[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.it[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.jp[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.pl[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.pt[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.ro[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.sk[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.es[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.tr[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.vn[_ngcontent-%COMP%]{min-height:unset}}@media screen and (max-width: 576px){.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{min-height:unset}}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .read-more-cta[_ngcontent-%COMP%]{position:absolute;bottom:-1px;left:0;border-bottom:none;font-weight:800;text-transform:uppercase;color:#000;width:100%;display:flex;justify-content:center;align-items:center;background:#fff;border-radius:0 0 24px 24px;box-shadow:0 1px #000;height:42px}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .update_detail[_ngcontent-%COMP%]   .graphic[_ngcontent-%COMP%]{max-height:400px;width:100%;border:2px solid #000000;border-radius:24px;box-shadow:0 2px #000}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .update_detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:32px;font-weight:700}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .update_detail[_ngcontent-%COMP%]   .subitem[_ngcontent-%COMP%]{font-weight:400;color:#000;font-size:16px;margin-bottom:16px;letter-spacing:.8px}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .update_detail[_ngcontent-%COMP%]   .subitem.big[_ngcontent-%COMP%]{font-size:20px;letter-spacing:.8px}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .update_detail[_ngcontent-%COMP%]   .subitem.light[_ngcontent-%COMP%]{color:#454545;line-height:130%}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .update_detail[_ngcontent-%COMP%]   .subitem.date[_ngcontent-%COMP%]{letter-spacing:.8px;font-style:italic}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .update_detail[_ngcontent-%COMP%]   .subitem.max-w-400[_ngcontent-%COMP%]{max-width:400px}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .update_detail[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:0}",
      ],
    });
  }
  return i;
})();
var We = (i) => ["/", i, "news"],
  Ve = (i) => ({ link: i }),
  Ht = (() => {
    class i {
      translate;
      currentLanguage;
      homeUrl = "";
      constructor(c) {
        (this.translate = c),
          (this.currentLanguage = this.translate.currentLang),
          (this.homeUrl = _(this.currentLanguage)),
          this.translate.onLangChange.subscribe((s) => {
            (this.currentLanguage = s.lang),
              (this.homeUrl = _(this.currentLanguage));
          });
      }
      static ɵfac = function (s) {
        return new (s || i)(b(C));
      };
      static ɵcmp = M({
        type: i,
        selectors: [["app-details-9"]],
        decls: 29,
        vars: 33,
        consts: [
          [1, "container", "details-container", "mt-lg-5"],
          [1, "update_detail"],
          [1, "back-btn", "mb-3", "pb-2", 3, "routerLink"],
          [
            "deferLoad",
            "/assets/images/svg-icons/back-icon.svg",
            "alt",
            "back-icon",
            1,
            "img-fluid",
            "me-3",
          ],
          [
            "deferLoad",
            "/assets/images/webp/updates/box_9.webp",
            "alt",
            "graphic",
            1,
            "graphic",
          ],
          [1, "title", "mt-4"],
          [1, "subitem", "mb-3"],
          [1, "subitem", "mb-3", 3, "innerHTML"],
          [1, "subitem", "big", "fw-bold", 3, "innerHTML"],
          [1, "subitem", "light", "date", "mb-5"],
        ],
        template: function (s, m) {
          s & 1 &&
            (a(0, "div", 0)(1, "div", 1)(2, "a", 2),
            d(3, "img", 3),
            p(4),
            t(5, "translate"),
            r(),
            d(6, "img", 4),
            a(7, "h1", 5),
            p(8),
            t(9, "translate"),
            r(),
            a(10, "p", 6),
            p(11),
            t(12, "translate"),
            r(),
            a(13, "p", 6),
            p(14),
            t(15, "translate"),
            r(),
            d(16, "p", 7),
            t(17, "translate"),
            a(18, "p", 6),
            p(19),
            t(20, "translate"),
            r(),
            a(21, "p", 6),
            p(22),
            t(23, "translate"),
            r(),
            d(24, "p", 8),
            t(25, "translate"),
            a(26, "p", 9),
            p(27),
            t(28, "translate"),
            r()()()),
            s & 2 &&
              (e(2),
              l(
                "routerLink",
                m.currentLanguage !== "en"
                  ? g(29, We, m.currentLanguage)
                  : "/news"
              ),
              e(2),
              f(" ", n(5, 10, "updates.back_to"), ""),
              e(4),
              o(n(9, 12, "updates.box9_title")),
              e(3),
              o(n(12, 14, "updates.box9_desc")),
              e(3),
              o(n(15, 16, "updates.box9_para1")),
              e(2),
              l(
                "innerHTML",
                x(17, 18, "updates.box9_para2", g(31, Ve, m.homeUrl)),
                u
              ),
              e(3),
              o(n(20, 21, "updates.box9_para3")),
              e(3),
              o(n(23, 23, "updates.box9_para4")),
              e(2),
              l("innerHTML", n(25, 25, "updates.common_bottom"), u),
              e(3),
              o(n(28, 27, "updates.box9_date")));
        },
        dependencies: [v, P, h],
        encapsulation: 2,
      });
    }
    return i;
  })();
var qe = (i) => ["/", i, "news"],
  oe = (i) => ({ link: i }),
  Dt = (() => {
    class i {
      translate;
      currentLanguage;
      homeUrl = "";
      constructor(c) {
        (this.translate = c),
          (this.currentLanguage = this.translate.currentLang),
          (this.homeUrl = _(this.currentLanguage)),
          this.translate.onLangChange.subscribe((s) => {
            (this.currentLanguage = s.lang),
              (this.homeUrl = _(this.currentLanguage));
          });
      }
      static ɵfac = function (s) {
        return new (s || i)(b(C));
      };
      static ɵcmp = M({
        type: i,
        selectors: [["app-details-10"]],
        decls: 34,
        vars: 42,
        consts: [
          [1, "container", "details-container", "mt-lg-5"],
          [1, "update_detail"],
          [1, "back-btn", "mb-3", "pb-2", 3, "routerLink"],
          [
            "deferLoad",
            "/assets/images/svg-icons/back-icon.svg",
            "alt",
            "back-icon",
            1,
            "img-fluid",
            "me-3",
          ],
          [
            "deferLoad",
            "/assets/images/webp/updates/box_10.webp",
            "alt",
            "graphic",
            1,
            "graphic",
          ],
          [1, "title", "mt-4"],
          [1, "subitem", "mb-3"],
          [1, "subitem", "mb-3", 3, "innerHTML"],
          [1, "subitem", "mb-0"],
          [1, "subitem", "big", "fw-bold", 3, "innerHTML"],
          [1, "subitem", "light", "date", "mb-5"],
        ],
        template: function (s, m) {
          s & 1 &&
            (a(0, "div", 0)(1, "div", 1)(2, "a", 2),
            d(3, "img", 3),
            p(4),
            t(5, "translate"),
            r(),
            d(6, "img", 4),
            a(7, "h1", 5),
            p(8),
            t(9, "translate"),
            r(),
            a(10, "p", 6),
            p(11),
            t(12, "translate"),
            r(),
            a(13, "p", 6),
            p(14),
            t(15, "translate"),
            r(),
            d(16, "p", 7),
            t(17, "translate"),
            a(18, "p", 6),
            p(19),
            t(20, "translate"),
            r(),
            a(21, "p", 8),
            p(22),
            t(23, "translate"),
            r(),
            a(24, "p", 6),
            p(25),
            t(26, "translate"),
            r(),
            d(27, "p", 7),
            t(28, "translate"),
            d(29, "p", 9),
            t(30, "translate"),
            a(31, "p", 10),
            p(32),
            t(33, "translate"),
            r()()()),
            s & 2 &&
              (e(2),
              l(
                "routerLink",
                m.currentLanguage !== "en"
                  ? g(36, qe, m.currentLanguage)
                  : "/news"
              ),
              e(2),
              f(" ", n(5, 12, "updates.back_to"), ""),
              e(4),
              o(n(9, 14, "updates.box10_title")),
              e(3),
              o(n(12, 16, "updates.box10_desc")),
              e(3),
              o(n(15, 18, "updates.box10_para1")),
              e(2),
              l(
                "innerHTML",
                x(17, 20, "updates.box10_para2", g(38, oe, m.homeUrl)),
                u
              ),
              e(3),
              o(n(20, 23, "updates.box10_para3")),
              e(3),
              o(n(23, 25, "updates.box10_para4")),
              e(3),
              o(n(26, 27, "updates.box10_para5")),
              e(2),
              l(
                "innerHTML",
                x(28, 29, "updates.box10_para6", g(40, oe, m.homeUrl)),
                u
              ),
              e(2),
              l("innerHTML", n(30, 32, "updates.common_bottom"), u),
              e(3),
              o(n(33, 34, "updates.box10_date")));
        },
        dependencies: [v, P, h],
        encapsulation: 2,
      });
    }
    return i;
  })();
var $e = (i) => ["/", i, "news"],
  se = (i) => ({ link: i }),
  Ft = (() => {
    class i {
      translate;
      currentLanguage;
      homeUrl = "";
      constructor(c) {
        (this.translate = c),
          (this.currentLanguage = this.translate.currentLang),
          (this.homeUrl = _(this.currentLanguage)),
          this.translate.onLangChange.subscribe((s) => {
            (this.currentLanguage = s.lang),
              (this.homeUrl = _(this.currentLanguage));
          });
      }
      static ɵfac = function (s) {
        return new (s || i)(b(C));
      };
      static ɵcmp = M({
        type: i,
        selectors: [["app-details-11"]],
        decls: 28,
        vars: 36,
        consts: [
          [1, "container", "details-container", "mt-lg-5"],
          [1, "update_detail"],
          [1, "back-btn", "mb-3", "pb-2", 3, "routerLink"],
          [
            "deferLoad",
            "/assets/images/svg-icons/back-icon.svg",
            "alt",
            "back-icon",
            1,
            "img-fluid",
            "me-3",
          ],
          [
            "deferLoad",
            "/assets/images/webp/updates/box_11.webp",
            "alt",
            "graphic",
            1,
            "graphic",
          ],
          [1, "title", "mt-4"],
          [1, "subitem", "mb-0"],
          [1, "subitem", "mb-3", 3, "innerHTML"],
          [1, "subitem", "mb-3"],
          [1, "subitem", "mb-4"],
          [1, "subitem", "big", "fw-bold", 3, "innerHTML"],
          [1, "subitem", "light", "date", "mb-5"],
        ],
        template: function (s, m) {
          s & 1 &&
            (a(0, "div", 0)(1, "div", 1)(2, "a", 2),
            d(3, "img", 3),
            p(4),
            t(5, "translate"),
            r(),
            d(6, "img", 4),
            a(7, "h1", 5),
            p(8),
            t(9, "translate"),
            r(),
            a(10, "p", 6),
            p(11),
            t(12, "translate"),
            r(),
            d(13, "p", 7),
            t(14, "translate"),
            d(15, "p", 7),
            t(16, "translate"),
            a(17, "p", 8),
            p(18),
            t(19, "translate"),
            r(),
            a(20, "p", 9),
            p(21),
            t(22, "translate"),
            r(),
            d(23, "p", 10),
            t(24, "translate"),
            a(25, "p", 11),
            p(26),
            t(27, "translate"),
            r()()()),
            s & 2 &&
              (e(2),
              l(
                "routerLink",
                m.currentLanguage !== "en"
                  ? g(30, $e, m.currentLanguage)
                  : "/news"
              ),
              e(2),
              f(" ", n(5, 10, "updates.back_to"), ""),
              e(4),
              o(n(9, 12, "updates.box11_title")),
              e(3),
              o(n(12, 14, "updates.box11_desc")),
              e(2),
              l(
                "innerHTML",
                x(14, 16, "updates.box11_para1", g(32, se, m.homeUrl)),
                u
              ),
              e(2),
              l(
                "innerHTML",
                x(16, 19, "updates.box11_para2", g(34, se, m.homeUrl)),
                u
              ),
              e(3),
              o(n(19, 22, "updates.box11_para3")),
              e(3),
              o(n(22, 24, "updates.box11_para4")),
              e(2),
              l("innerHTML", n(24, 26, "updates.common_bottom"), u),
              e(3),
              o(n(27, 28, "updates.box11_date")));
        },
        dependencies: [v, P, h],
        encapsulation: 2,
      });
    }
    return i;
  })();
var Qe = (i) => ["/", i, "news"],
  ce = (i) => ({ link: i }),
  Rt = (() => {
    class i {
      translate;
      currentLanguage;
      homeUrl = "";
      constructor(c) {
        (this.translate = c),
          (this.currentLanguage = this.translate.currentLang),
          (this.homeUrl = _(this.currentLanguage)),
          this.translate.onLangChange.subscribe((s) => {
            (this.currentLanguage = s.lang),
              (this.homeUrl = _(this.currentLanguage));
          });
      }
      static ɵfac = function (s) {
        return new (s || i)(b(C));
      };
      static ɵcmp = M({
        type: i,
        selectors: [["app-details-12"]],
        decls: 40,
        vars: 48,
        consts: [
          [1, "container", "details-container", "mt-lg-5"],
          [1, "update_detail"],
          [1, "back-btn", "mb-3", "pb-2", 3, "routerLink"],
          [
            "deferLoad",
            "/assets/images/svg-icons/back-icon.svg",
            "alt",
            "back-icon",
            1,
            "img-fluid",
            "me-3",
          ],
          [
            "deferLoad",
            "/assets/images/webp/updates/box_12.webp",
            "alt",
            "graphic",
            1,
            "graphic",
          ],
          [1, "title", "mt-4"],
          [1, "subitem", "mb-3"],
          [1, "subitem", "mb-3", 3, "innerHTML"],
          [1, "subitem", "mb-4"],
          [1, "subitem", "big", "fw-bold", 3, "innerHTML"],
          [1, "subitem", "light", "date", "mb-5"],
        ],
        template: function (s, m) {
          s & 1 &&
            (a(0, "div", 0)(1, "div", 1)(2, "a", 2),
            d(3, "img", 3),
            p(4),
            t(5, "translate"),
            r(),
            d(6, "img", 4),
            a(7, "h1", 5),
            p(8),
            t(9, "translate"),
            r(),
            a(10, "p", 6),
            p(11),
            t(12, "translate"),
            r(),
            d(13, "p", 7),
            t(14, "translate"),
            d(15, "p", 7),
            t(16, "translate"),
            a(17, "p", 6),
            p(18),
            t(19, "translate"),
            r(),
            a(20, "p", 8),
            p(21),
            t(22, "translate"),
            r(),
            a(23, "p", 8),
            p(24),
            t(25, "translate"),
            r(),
            a(26, "p", 8),
            p(27),
            t(28, "translate"),
            r(),
            a(29, "p", 8),
            p(30),
            t(31, "translate"),
            r(),
            a(32, "p", 8),
            p(33),
            t(34, "translate"),
            r(),
            d(35, "p", 9),
            t(36, "translate"),
            a(37, "p", 10),
            p(38),
            t(39, "translate"),
            r()()()),
            s & 2 &&
              (e(2),
              l(
                "routerLink",
                m.currentLanguage !== "en"
                  ? g(42, Qe, m.currentLanguage)
                  : "/news"
              ),
              e(2),
              f(" ", n(5, 14, "updates.back_to"), ""),
              e(4),
              o(n(9, 16, "updates.box12_title")),
              e(3),
              o(n(12, 18, "updates.box12_para9")),
              e(2),
              l(
                "innerHTML",
                x(14, 20, "updates.box12_para1", g(44, ce, m.homeUrl)),
                u
              ),
              e(2),
              l(
                "innerHTML",
                x(16, 23, "updates.box12_para2", g(46, ce, m.homeUrl)),
                u
              ),
              e(3),
              o(n(19, 26, "updates.box12_para3")),
              e(3),
              o(n(22, 28, "updates.box12_para4")),
              e(3),
              o(n(25, 30, "updates.box12_para5")),
              e(3),
              o(n(28, 32, "updates.box12_para6")),
              e(3),
              o(n(31, 34, "updates.box12_para7")),
              e(3),
              o(n(34, 36, "updates.box12_para8")),
              e(2),
              l("innerHTML", n(36, 38, "updates.common_bottom"), u),
              e(3),
              o(n(39, 40, "updates.box12_date")));
        },
        dependencies: [v, P, h],
        encapsulation: 2,
      });
    }
    return i;
  })();
var Pn = (() => {
  class i {
    static ɵfac = function (s) {
      return new (s || i)();
    };
    static ɵmod = D({ type: i, bootstrap: [pe] });
    static ɵinj = E({ imports: [ne.forChild([]), Y, ie, re, K, X] });
  }
  return i;
})();
export {
  kt as a,
  Je as b,
  Ze as c,
  nt as d,
  rt as e,
  st as f,
  dt as g,
  gt as h,
  xt as i,
  pe as j,
  Ht as k,
  Dt as l,
  Ft as m,
  Rt as n,
  Pn as o,
};
