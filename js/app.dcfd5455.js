(function(a) {
    function t(t) {
        for (var s, r, n = t[0], k = t[1], l = t[2], p = 0, y = []; p < n.length; p++) r = n[p], o[r] && y.push(o[r][0]), o[r] = 0;
        for (s in k) Object.prototype.hasOwnProperty.call(k, s) && (a[s] = k[s]);
        c && c(t);
        while (y.length) y.shift()();
        return i.push.apply(i, l || []), e()
    }

    function e() {
        for (var a, t = 0; t < i.length; t++) {
            for (var e = i[t], s = !0, n = 1; n < e.length; n++) {
                var k = e[n];
                0 !== o[k] && (s = !1)
            }
            s && (i.splice(t--, 1), a = r(r.s = e[0]))
        }
        return a
    }
    var s = {},
        o = {
            app: 0
        },
        i = [];

    function r(t) {
        if (s[t]) return s[t].exports;
        var e = s[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return a[t].call(e.exports, e, e.exports, r), e.l = !0, e.exports
    }
    r.m = a, r.c = s, r.d = function(a, t, e) {
        r.o(a, t) || Object.defineProperty(a, t, {
            enumerable: !0,
            get: e
        })
    }, r.r = function(a) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(a, "__esModule", {
            value: !0
        })
    }, r.t = function(a, t) {
        if (1 & t && (a = r(a)), 8 & t) return a;
        if (4 & t && "object" === typeof a && a && a.__esModule) return a;
        var e = Object.create(null);
        if (r.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: a
            }), 2 & t && "string" != typeof a)
            for (var s in a) r.d(e, s, function(t) {
                return a[t]
            }.bind(null, s));
        return e
    }, r.n = function(a) {
        var t = a && a.__esModule ? function() {
            return a["default"]
        } : function() {
            return a
        };
        return r.d(t, "a", t), t
    }, r.o = function(a, t) {
        return Object.prototype.hasOwnProperty.call(a, t)
    }, r.p = "/";
    var n = window["webpackJsonp"] = window["webpackJsonp"] || [],
        k = n.push.bind(n);
    n.push = t, n = n.slice();
    for (var l = 0; l < n.length; l++) t(n[l]);
    var c = k;
    i.push([0, "chunk-vendors"]), e()
})({
    0: function(a, t, e) {
        a.exports = e("56d7")
    },
    "034f": function(a, t, e) {
        "use strict";
        var s = e("19b3"),
            o = e.n(s);
        o.a
    },
    "19b3": function(a, t, e) {},
    "1cbe": function(a, t, e) {
        a.exports = e.p + "img/codegarden.51428aaf.jpg"
    },
    "34a9": function(a, t, e) {
        a.exports = e.p + "img/wildlife.8b20cbd1.jpg"
    },
    "35f0": function(a, t, e) {},
    "378f": function(a, t, e) {
        a.exports = e.p + "img/webdev.254f7e47.jpg"
    },
    3883: function(a, t, e) {
        a.exports = e.p + "img/new_years_party.8980d9e9.jpg"
    },
    "3a72": function(a, t, e) {},
    "40f8": function(a, t, e) {
        a.exports = e.p + "img/digital_reklame_snow.d029d6dd.jpg"
    },
    "48b7": function(a, t, e) {},
    "56d7": function(a, t, e) {
        "use strict";
        e.r(t);
        e("cadf"), e("551c"), e("f751"), e("097d");
        var s = e("2b0e"),
            o = e("bb71");
        e("da64");
        s["a"].use(o["a"], {
            theme: {
                primary: "#4285F4",
                secondary: "#000000",
                light: "#ffffff",
                secondary2: "#212121",
                secondary3: "#424242",
                accent: "#82B1FF",
                error: "#ff4444",
                info: "#33b5e5",
                success: "#00C851",
                warning: "#ffbb33"
            },
            iconfont: "mdi fa fab"
        });
        e("5363"), e("15f5");
        var i = e("8c4f"),
            r = function() {
                var a = this,
                    t = a.$createElement,
                    s = a._self._c || t;
                return s("v-app", {
                    staticClass: "dark",
                    attrs: {
                        dark: ""
                    }
                }, [s("v-navigation-drawer", {
                    staticClass: "dark",
                    attrs: {
                        temporary: "",
                        absolute: "",
                        overflow: "",
                        app: ""
                    },
                    model: {
                        value: a.primaryDrawer.model,
                        callback: function(t) {
                            a.$set(a.primaryDrawer, "model", t)
                        },
                        expression: "primaryDrawer.model"
                    }
                }, [s("v-layout", {
                    attrs: {
                        "text-xs-center": "",
                        "align-space-around": "",
                        "align-center": "",
                        column: ""
                    }
                }, [s("v-flex", {
                    staticClass: "navInImg",
                    attrs: {
                        xs12: ""
                    }
                }, [s("router-link", {
                    attrs: {
                        to: "/"
                    }
                }, [s("v-img", {
                    staticClass: "navlogo",
                    attrs: {
                        src: e("cf05"),
                        contain: ""
                    }
                })], 1)], 1), s("v-flex", {
                    staticClass: "navInLinks",
                    attrs: {
                        xs12: ""
                    }
                }, [s("router-link", {
                    staticClass: "text-uppercase font-weight-medium subheading",
                    attrs: {
                        to: "/",
                        tag: "li"
                    }
                }, [a._v("Home")]), s("router-link", {
                    staticClass: "text-uppercase font-weight-medium subheading",
                    attrs: {
                        to: "/about",
                        tag: "li"
                    }
                }, [a._v("About")]), s("router-link", {
                    staticClass: "text-uppercase font-weight-medium subheading",
                    attrs: {
                        to: "/works",
                        tag: "li"
                    }
                }, [a._v("Works")])], 1)], 1)], 1), s("v-toolbar", {
                    attrs: {
                        clipped: "",
                        fixed: "",
                        color: "secondary",
                        app: ""
                    }
                }, [s("v-toolbar-side-icon", {
                    staticClass: "iconWhite",
                    on: {
                        click: function(t) {
                            t.stopPropagation(), a.primaryDrawer.model = !a.primaryDrawer.model
                        }
                    }
                }), s("v-toolbar-title", {
                    staticClass: "headline text-uppercase"
                }, [s("router-link", {
                    attrs: {
                        to: "/"
                    }
                }, [s("v-img", {
                    staticClass: "navlogo",
                    attrs: {
                        src: e("cf05"),
                        contain: ""
                    }
                })], 1)], 1), s("v-spacer"), s("div", {
                    staticClass: "navLinks"
                }, [s("router-link", {
                    staticClass: "text-uppercase font-weight-medium subheading",
                    attrs: {
                        to: "/",
                        tag: "li"
                    }
                }, [a._v("Home")]), s("router-link", {
                    staticClass: "text-uppercase font-weight-medium subheading",
                    attrs: {
                        to: "/about",
                        tag: "li"
                    }
                }, [a._v("About")]), s("router-link", {
                    staticClass: "text-uppercase font-weight-medium subheading",
                    attrs: {
                        to: "/works",
                        tag: "li"
                    }
                }, [a._v("Works")])], 1)], 1), s("v-content", {
                    attrs: {
                        color: "primary"
                    }
                }, [s("router-view")], 1), s("v-footer", {
                    attrs: {
                        color: "secondary"
                    }
                }, [s("v-layout", {
                    attrs: {
                        "mt-5": "",
                        "align-center": "",
                        column: ""
                    }
                }, [s("v-flex", {
                    attrs: {
                        "mt-5": "",
                        xs12: ""
                    }
                }, [s("p", {
                    staticClass: "text"
                }, [s("span", {
                    staticClass: "caption",
                    attrs: {
                        "px-3": ""
                    }
                }, [a._v("© " + a._s((new Date).getFullYear()))])])]), s("v-flex", {
                    attrs: {
                        xs12: ""
                    }
                }, [s("socialmedia")], 1)], 1)], 1)], 1)
            },
            n = [],
            k = (e("28a5"), function() {
                var a = this,
                    t = a.$createElement,
                    e = a._self._c || t;
                return e("div", {
                    staticClass: "socialIcons"
                }, [e("v-btn", {
                    attrs: {
                        icon: "",
                        href: "https://www.linkedin.com/in/kristian-pospiš-39643899"
                    }
                }, [e("v-icon", [a._v("\n            fab fa-linkedin\n        ")])], 1), e("v-btn", {
                    attrs: {
                        icon: "",
                        href: "https://codepen.io/pospisk/"
                    }
                }, [e("v-icon", [a._v("\n            fab fa-codepen\n        ")])], 1), e("v-btn", {
                    attrs: {
                        icon: "",
                        href: "https://github.com/pospisk"
                    }
                }, [e("v-icon", [a._v("\n            fab fa-github\n        ")])], 1), e("v-btn", {
                    attrs: {
                        icon: "",
                        href: "https://www.instagram.com/pospisk/"
                    }
                }, [e("v-icon", [a._v("\n            fab fa-instagram\n        ")])], 1), e("v-btn", {
                    attrs: {
                        icon: "",
                        href: "https://dribbble.com/pospisk"
                    }
                }, [e("v-icon", [a._v("\n            fab fa-dribbble\n        ")])], 1)], 1)
            }),
            l = [],
            c = {},
            p = c,
            y = e("2877"),
            h = e("6544"),
            d = e.n(h),
            m = e("8336"),
            u = e("132d"),
            g = Object(y["a"])(p, k, l, !1, null, null, null),
            f = g.exports;
        d()(g, {
            VBtn: m["a"],
            VIcon: u["a"]
        });
        var v = {
                name: "App",
                components: {
                    socialmedia: f
                },
                data: function() {
                    return {
                        primaryDrawer: {
                            model: null,
                            type: "temporary",
                            temporary: !0
                        },
                        footer: {
                            inset: !1
                        }
                    }
                },
                watch: {
                    $route: function(a, t) {
                        var e = a.path.split("/").length,
                            s = t.path.split("/").length;
                        this.transitionName = e < s ? "slide-right" : "slide-left"
                    }
                }
            },
            w = v,
            b = (e("034f"), e("7496")),
            x = e("549c"),
            C = e("0e8f"),
            _ = e("553a"),
            j = e("adda"),
            T = e("a722"),
            I = e("f774"),
            S = e("9910"),
            A = e("71d9"),
            V = e("706c"),
            D = e("2a7f"),
            E = Object(y["a"])(w, r, n, !1, null, null, null),
            G = E.exports;
        d()(E, {
            VApp: b["a"],
            VContent: x["a"],
            VFlex: C["a"],
            VFooter: _["a"],
            VImg: j["a"],
            VLayout: T["a"],
            VNavigationDrawer: I["a"],
            VSpacer: S["a"],
            VToolbar: A["a"],
            VToolbarSideIcon: V["a"],
            VToolbarTitle: D["a"]
        });
        var L = function() {
                var a = this,
                    t = a.$createElement,
                    e = a._self._c || t;
                return e("v-container", {
                    attrs: {
                        fluid: "",
                        "grid-list-lg": ""
                    }
                }, [e("v-layout", {
                    attrs: {
                        wrap: "",
                        row: ""
                    }
                }, a._l(a.arts, function(t, s) {
                    return e("v-flex", {
                        key: s,
                        class: a.colN,
                        attrs: {
                            "fill-height": "",
                            xs12: "",
                            sm6: "",
                            md6: ""
                        }
                    }, [e("v-card", {
                        staticClass: "vcards",
                        attrs: {
                            raised: ""
                        }
                    }, [e("v-img", {
                        attrs: {
                            src: t.img,
                            "aspect-ratio": "1.9"
                        }
                    }), e("v-card-actions", [0 == t.ahref ? void 0 : [e("v-btn", {
                        staticClass: "btnIcon",
                        attrs: {
                            large: "",
                            target: "_blank",
                            href: t.ahref,
                            icon: "",
                            color: "white"
                        }
                    }, [e("v-icon", [a._v("fa-external-link-alt")])], 1)]], 2), e("v-card-title", {
                        attrs: {
                            "primary-title": ""
                        }
                    }, [e("div", [e("h4", {
                        staticClass: "headline mb-0"
                    }, [a._v(a._s(t.title))]), e("div", [a._v(" " + a._s(t.body) + " ")])])])], 1)], 1)
                }), 1)], 1)
            },
            M = [],
            O = {
                data: function() {
                    return {
                        dialog: !1,
                        components: {},
                        arts: [{
                            id: "1",
                            title: "DryRack",
                            body: "The project's development has started in November 2018. The client, Peter Suchopa has invented a product which will run under the name DryRack, the company and product required an identity which was formed in the branding phase, the client required a website with an eshop for which WordPress . More information will be available once the product passes all testing phases.",
                            img: e("8a26"),
                            ahref: ""
                        }, {
                            id: "2",
                            title: "Digital Reklame",
                            body: "Digital Reklame is an Odense, Denmark based company, which offers digital screens for motion ads. The company required branding and a logo which was done according to contemporary design principles. The logo was print and web ready, with an eye catching color ready to be recognized across the city.",
                            img: e("40f8"),
                            ahref: "https://digital-reklame.dk/"
                        }, {
                            id: "3",
                            title: "CodeGarden 2018",
                            body: "CodeGarden is a UmbracoCMS event which occurs annually in Odense, Denmark. The event takes place in May, and lasts 3 days. There are many international speakers who tackle problems and introduce new features concerning Umbraco. The project was handed out by my university (UCL) and it gave our team of 3 classmates the opportunity to create a responsive schedule for the event in UmbracoCMS.",
                            img: e("1cbe"),
                            ahref: "https://github.com/pospisk/Codegarden-schedule-section"
                        }, {
                            id: "4",
                            title: "PrivatBar",
                            body: "PrivatBar is a private bartending service where the customer books a date and location. The bartender will come prepared with all the necessities to the location to prepare drinks and cocktails. The client has requested me to create a logo and that based upon a sketch of his idea. The website was created by an external web development company.",
                            img: e("a9db"),
                            ahref: "https://privatbar.dk/"
                        }, {
                            id: "5",
                            title: "Restaurant Stop 25th Anniversary",
                            body: "The restaurant is one of the oldest continuously running establishments in the city. They offer traditional Austrain Hungarian meals while also cooking modern lighter meals. For the company's 25th anniversary, the client has requested a limited edition design for their gift wine. The wine was handed out as a gift to the frequent visitors and also to guest eating a certain steak from the menu which paired well with the red wine. The text oraments were created in adobe Illustrator. ",
                            img: e("9af3"),
                            ahref: "https://restauracia-stop.sk/"
                        }, {
                            id: "6",
                            title: "Restaurant Stop Logo",
                            body: "Restaurant Stop was established in 1991 and it is located in Galanta, Slovakia. It is one of the oldest restaurants in the city, and certainly the best place to find traditional austrian - hungarian meals. The restaurant is often booked for private events. The client has requested a rebranding of their menu and logo, this was done according to contemporary design trends while incorporating the restaurants elegance in the logo with simplicity.",
                            img: e("77af"),
                            ahref: "https://restauracia-stop.sk/"
                        }, {
                            id: "7",
                            title: "Refugee Camp Museum Oksbøl",
                            body: "The project was handed out by my university (EAL) at the Multimedia design and communication course. The project's main concern was to create a digital solution which would add interactive missions to the refugee museum located in Oksbøl, Denmark. The app was created using HTML/CSS/JS and exported to .app & .apk using https://cordova.apache.org/ ",
                            img: e("8f03"),
                            ahref: "https://en.wikipedia.org/wiki/Oksb%C3%B8l_Refugee_Camp"
                        }, {
                            id: "8",
                            title: "Cosmopolitan Wine Tasting",
                            body: "Cosmopolitan is a slovakian coffee and wine bar located in Galanta. The company often hosts events where the visitors can taste otherwise very expensive wines while a professional sommelier explains the specifics and the wine's characteristics. The client has requested an A3 poster design for a wine tasting event. The design of the poster is minimal, yet elegant.",
                            img: e("7e5e"),
                            ahref: ""
                        }, {
                            id: "9",
                            title: "Cosmopolitan New Year Party",
                            body: "Cosmopolitan is a slovakian coffee and wine bar located in Galanta. The new year party is an annually occuring event. The bar is located close to the city centers square and therefor the guests have a view of the fireworks show. The client has requested an A3 poster design which was advertised in the whole region.",
                            img: e("3883"),
                            ahref: ""
                        }, {
                            id: "10",
                            title: "Space logo challenge",
                            body: "While I was stuck offline traveling on the train, I remembered that I had a pdf containing all of the 30 day logo challenges. The challenge became more interesting when I've realised I can't search for inspiration due to being offline. The space logo is a combination of the space key's icon with the word space. The word itself also contains excluded space which empathizes the words meaning.",
                            img: e("e15d"),
                            ahref: ""
                        }, {
                            id: "11",
                            title: "WildLife logo challenge",
                            body: "While I was stuck offline traveling on the train, I remembered that I had a pdf containing all of the 30 day logo challenges. The challenge became more interesting when I've realised I can't search for inspiration due to being offline. The logo was created according to the golden proportions theory (Golden Circles). The briefing was the following: 'Wildlife™ is a non-profit organization that preserves the life and habitat of wild animals throughout the world. Our organization is known for our passion and personal investment in the lives of animals.'",
                            img: e("34a9"),
                            ahref: ""
                        }, {
                            id: "12",
                            title: "Dear deer",
                            body: "When I had some free time during my studies at Multimedia design and Communication. I spent that time creating art in Photoshop. This piece was created using polygonal lines and overlaying several textures to create the rough distortion of the filled polygons. ",
                            img: e("7759"),
                            ahref: ""
                        }]
                    }
                },
                computed: {
                    colN: function() {
                        var a = 12 / this.arts.length,
                            t = Math.round(a),
                            e = "lg" + (t + 3);
                        return e
                    }
                },
                methods: {
                    openModal: function() {
                        this.$refs.modal.open()
                    }
                }
            },
            P = O,
            z = (e("6c0b"), e("b0af")),
            W = e("99d9"),
            B = e("12b2"),
            F = e("a523"),
            N = Object(y["a"])(P, L, M, !1, null, null, null),
            q = N.exports;
        d()(N, {
            VBtn: m["a"],
            VCard: z["a"],
            VCardActions: W["a"],
            VCardTitle: B["a"],
            VContainer: F["a"],
            VFlex: C["a"],
            VIcon: u["a"],
            VImg: j["a"],
            VLayout: T["a"]
        });
        var H = function() {
                var a = this,
                    t = a.$createElement,
                    s = a._self._c || t;
                return s("v-container", {
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-easing": "ease-in-out",
                        "data-aos-delay": "50"
                    }
                }, [s("v-layout", {
                    staticClass: "aboutHeaderRow",
                    attrs: {
                        row: "",
                        wrap: ""
                    }
                }, [s("v-flex", {
                    staticClass: "headerAbout",
                    attrs: {
                        "text-xs-center": "",
                        xs12: "",
                        sm7: ""
                    }
                }, [s("v-img", {
                    staticClass: "aboutImg",
                    attrs: {
                        src: e("7b8c")
                    }
                })], 1), s("v-flex", {
                    staticClass: "headerAboutTextWrap",
                    attrs: {
                        "text-xs-center": "",
                        "text-sm-left": "",
                        xs12: "",
                        sm5: ""
                    }
                }, [s("div", {
                    staticClass: "headerAboutText"
                }, [s("h1", {
                    staticClass: "display-1"
                }, [a._v("\n        Kristian Pospis\n      ")]), s("p", [a._v("web/app developer and designer")]), s("hr"), s("div", {
                    staticClass: "headerAboutButtons"
                }, [s("v-btn", {
                    staticClass: "aboutCVEN",
                    attrs: {
                        outline: "",
                        color: "white",
                        href: "kpcv.pdf",
                        target: "_blank"
                    }
                }, [a._v("\n        CV(EN)\n      ")]), s("v-btn", {
                    staticClass: "aboutCVDE",
                    attrs: {
                        outline: "",
                        color: "white",
                        href: "kpcvde.pdf",
                        target: "_blank"
                    }
                }, [a._v("\n        CV(DE)\n      ")])], 1), s("hr"), s("socialmedia")], 1)])], 1), s("v-layout", [s("v-flex", [s("v-timeline", {
                    attrs: {
                        "align-top": ""
                    }
                }, a._l(a.items, function(t, e) {
                    return s("v-timeline-item", {
                        key: e,
                        attrs: {
                            color: t.color,
                            icon: t.icon,
                            "fill-dot": "",
                            "data-aos": "fade-up",
                            "data-aos-easing": "ease-in-out",
                            "data-aos-delay": "50"
                        },
                        scopedSlots: a._u([{
                            key: "opposite",
                            fn: function() {
                                return [s("span", [a._v(a._s(t.year))])]
                            },
                            proxy: !0
                        }], null, !0)
                    }, [s("v-card", {
                        attrs: {
                            color: t.color,
                            dark: ""
                        }
                    }, [s("v-card-title", {
                        staticClass: "title"
                    }, [a._v(a._s(t.title))]), s("v-card-text", {
                        staticClass: "white text--primary",
                        attrs: {
                            color: "secondary"
                        }
                    }, [s("p", {
                        staticClass: "blk"
                    }, [a._v(a._s(t.body))]), 0 == t.anchorTitle ? void 0 : [s("v-btn", {
                        staticClass: "mx-0",
                        attrs: {
                            color: "secondary3",
                            outline: "",
                            target: "_blank",
                            href: t.anchor
                        }
                    }, [a._v("\n                        " + a._s(t.anchorTitle) + "\n                    ")])]], 2)], 1)], 1)
                }), 1)], 1)], 1)], 1)
            },
            $ = [],
            U = {
                components: {
                    socialmedia: f
                },
                data: function() {
                    return {
                        items: [{
                            color: "#4C7161",
                            icon: "mdi-face",
                            year: "1996",
                            title: "Birth",
                            body: "I was born in Galanta, Slovakia, it is a city which is 50km from the capital city, Bratislava.",
                            anchorTitle: "Galanta",
                            anchor: "https://wikipedia.org/wiki/Galanta"
                        }, {
                            color: "#5D4E70",
                            icon: "fa-school",
                            year: "2001",
                            title: "Elementary School",
                            body: "I have attended a hungarian elementary school in Sala and graduated in 2009.",
                            anchorTitle: "Elementary School",
                            anchor: "https://pazmanymta.edupage.org/"
                        }, {
                            color: "#23cdf7",
                            icon: "fa-paint-brush",
                            year: "2007",
                            title: "First Experience with Adobe Photoshop",
                            body: "The first thing I have made using Photoshop was a 100px * 100px avatar for a multiplayer game on Steam. Since then I was amazed by the possibilities it had to offer and ever since then I am sharpening my skills.",
                            anchorTitle: "",
                            anchor: ""
                        }, {
                            color: "#A5A06F",
                            icon: "mdi-domain",
                            year: "2010",
                            title: "Secondary School (Gymnasium)",
                            body: "I have attended SBGG (Súkromné Bilingvalné Gymnasium Galanta). The school was focused on English and some subjects such as history were taught in English. During the beginning of my education, our timetable was 60% English lessons, later it was reduced and I spruced up my German grammar. Slovak was our conversational language during other lessons. I have graduated in 2015.",
                            anchorTitle: "SBGG",
                            anchor: "http://www.sbggalanta.sk/"
                        }, {
                            color: "#fb8c25",
                            icon: "fa-vector-square",
                            year: "2012",
                            title: "First Experience with Adobe Illustrator",
                            body: "This was the first time that I have discovered the wonders of vector/vectorized images, and started creating my first icons and logos.",
                            anchorTitle: "",
                            anchor: ""
                        }, {
                            color: "#425828",
                            icon: "fa-file-code",
                            year: "2013",
                            title: "First Experience with HTML/CSS/JS",
                            body: "I was always interested in how websites work and one day my fellow classmate showed me codecademy. Before I already had experience using the console and inspector tools in the browser because it granted access to stats in online games. I have made a bet with my dad, that his passwords arent secure enough and since then I have been learning about ethical (whitehat) hacking.",
                            anchorTitle: "",
                            anchor: ""
                        }, {
                            color: "#515571",
                            icon: "mdi-school",
                            year: "2015",
                            title: "Started MMD at EAL",
                            body: "After graduating from highschool I have decided to quit my part-time job and continue with my education. In 2015 I have moved to Odense, Denmark to study Multimedia design and Communication (MMD) at Erhvervsakademiet Lillebælt (EAL).",
                            anchorTitle: "EAL",
                            anchor: "https://www.eal.dk/international/"
                        }, {
                            color: "#B03F4B",
                            icon: "mdi-web",
                            year: "2017",
                            title: "Internship at Witt-Gruppe",
                            body: "During my MMD studies I have interned at Witt-Gruppe (member of the Otto Group) as a web designer for 4 months in Weiden, Germany. The company is over 100 years old, has 3000 employees and 17 e-commerce stores. I was working 38 hours per week at Witt-Gruppe where I have gained a lot of knowledge from my experienced co-workers. I was working on the ambria.de website, creation-l.de website, witt-weiden.de website and also on their foreign versions.",
                            anchorTitle: "Witt-Gruppe",
                            anchor: "https://www.witt-gruppe.eu/"
                        }, {
                            color: "#515571",
                            icon: "mdi-school",
                            year: "2017",
                            title: "Graduated MMD at EAL",
                            body: "In 2017 I have graduated with an AP degree from Multimedia design and communication at EAL. The course focused 2 years on design, coding and communication best practices and theories.",
                            anchorTitle: "EAL",
                            anchor: "https://www.eal.dk/international/"
                        }, {
                            color: "#532638",
                            icon: "fa-university",
                            year: "2017",
                            title: "Started Web Dev at UCL",
                            body: "After the completion of the AP degree. In 2017 I have started Web Development (Bc Top-up) at University College Lillebælt in Odense. I've continued with Web Development as my BA Top-up to strengthen my programming knowledge meanwhile during my spare time I still design and create websites & logos.",
                            anchorTitle: "UCL",
                            anchor: "https://www.ucl.dk/"
                        }, {
                            color: "#8FBDCB",
                            icon: "mdi-web",
                            year: "2018",
                            title: "Internship at LISA.SK",
                            body: "During my internship course at web development, I have interned at LISA.SK which is a Galanta, Slovakia based multimedia and web development company. I have spent 38 hours weekly in the office with my experienced co-workers for 3 months. During this period I have learned more about web dev best practices and motion animation also its applications in frontend.",
                            anchorTitle: "LISA.SK",
                            anchor: "https://lisa.sk/"
                        }, {
                            color: "#532638",
                            icon: "fa-university",
                            year: "2019",
                            title: "Graduated Web Dev at UCL",
                            body: "In February 2019 I have graduated my web-development course and received my bachelors degree. My studies were focused on web and application development specializing in frontend and backend. ",
                            anchorTitle: "EAL",
                            anchor: "https://www.ucl.dk/"
                        }, {
                            color: "#006699",
                            icon: "fa-code-branch",
                            year: "2019",
                            title: "Boyens-Online in Heide",
                            body: "After finishing my studies I have moved to Heide because I wanted to gain more work experience in Germany. ",
                            anchorTitle: "Boyens-Medien",
                            anchor: "https://www.boyens-medien.de/"
                        }]
                    }
                }
            },
            R = U,
            J = (e("b8ab"), e("8414")),
            K = e("1e06"),
            X = Object(y["a"])(R, H, $, !1, null, null, null),
            Y = X.exports;
        d()(X, {
            VBtn: m["a"],
            VCard: z["a"],
            VCardText: W["b"],
            VCardTitle: B["a"],
            VContainer: F["a"],
            VFlex: C["a"],
            VImg: j["a"],
            VLayout: T["a"],
            VTimeline: J["a"],
            VTimelineItem: K["a"]
        });
        var Q = function() {
                var a = this,
                    t = a.$createElement,
                    s = a._self._c || t;
                return s("div", {
                    staticClass: "heroHeader",
                    style: {
                        "background-image": "url(" + e("378f") + ")"
                    }
                }, [s("v-container", {
                    staticClass: "no_pd",
                    attrs: {
                        fluid: ""
                    }
                }, [s("v-layout", {
                    staticClass: "heroWrap",
                    attrs: {
                        wrap: "",
                        row: "",
                        "fill-height": ""
                    }
                }, [s("v-flex", {
                    staticClass: "heroText",
                    attrs: {
                        "pa-5": "",
                        "ma-5": "",
                        "text-xs-left": "",
                        sm12: "",
                        md4: ""
                    }
                }, [s("div", {
                    staticClass: "heroTextInner"
                }, [s("h1", {
                    staticClass: "display-2 font-weight-black"
                }, [a._v("Kristian Pospis")]), s("h2", {
                    staticClass: "font-weight-light font-italic"
                }, [a._v("web developer & designer")]), s("p", {
                    staticClass: "py-3 body-1"
                }, [a._v("I am "), s("span", {
                    staticClass: "imp"
                }, [a._v(" " + a._s(a.age) + " years old ")]), a._v(" and I have "), s("span", {
                    staticClass: "imp"
                }, [a._v("12 years of experience")]), a._v(" using adobe "), s("span", {
                    staticClass: "imp"
                }, [a._v("photoshop")]), a._v(" also "), s("span", {
                    staticClass: "imp"
                }, [a._v("7 years of experience")]), a._v(" with adobe "), s("span", {
                    staticClass: "imp"
                }, [a._v("Illustrator")]), a._v(". I specialize in "), s("span", {
                    staticClass: "imp"
                }, [a._v("front-end")]), a._v(" development and I have a passion for creating "), s("span", {
                    staticClass: "imp"
                }, [a._v("interactive content")]), a._v(". I am currently "), s("span", {
                    staticClass: "imp"
                }, [a._v("looking for a frontend position")]), a._v(" in "), s("span", {
                    staticClass: "imp"
                }, [a._v("Heide")]), a._v(" (Schleswig Holstein), Germany. I have recently "), s("span", {
                    staticClass: "imp"
                }, [a._v("graduated")]), a._v(" from "), s("span", {
                    staticClass: "imp"
                }, [a._v("Web Development")]), a._v(" (BC) at UCL in Odense, Denmark. I have previously studied "), s("span", {
                    staticClass: "imp"
                }, [a._v("Multimedia Design and Communication")]), a._v(" (AP) at EAL (former UCL, 2015) in Odense.")]), s("div", {
                    staticClass: "skillChips"
                }, a._l(a.skills, function(t, e) {
                    return s("v-tooltip", {
                        key: e,
                        attrs: {
                            top: ""
                        },
                        scopedSlots: a._u([{
                            key: "activator",
                            fn: function(e) {
                                var o = e.on;
                                return [s("v-chip", a._g({
                                    attrs: {
                                        small: ""
                                    }
                                }, o), [a._v(a._s(t.title))])]
                            }
                        }], null, !0)
                    }, [
                        [s("span", [a._v(a._s(t.info))])]
                    ], 2)
                }), 1), s("span", {
                    staticClass: "caption"
                }, [a._v("hover for more info")]), s("br"), s("v-btn", {
                    staticClass: "nomg",
                    attrs: {
                        href: "kpcv.pdf",
                        target: "_blank"
                    }
                }, [a._v("CV(EN")]), s("v-btn", {
                    attrs: {
                        href: "kpcvde.pdf",
                        target: "_blank"
                    }
                }, [a._v("CV(DE)")]), s("v-btn", {
                    attrs: {
                        href: "#/about"
                    }
                }, [a._v("Timeline")])], 1)]), s("v-flex", {
                    attrs: {
                        sm12: "",
                        md8: ""
                    }
                }, [s("animPospisk", {
                    staticClass: "screenHead"
                })], 1)], 1)], 1)], 1)
            },
            Z = [],
            aa = function() {
                var a = this,
                    t = a.$createElement,
                    e = a._self._c || t;
                return e("lottie", {
                    staticClass: "pospiskAnim",
                    attrs: {
                        options: a.defaultOptions,
                        height: 400,
                        width: 400
                    },
                    on: {
                        animCreated: a.handleAnimation
                    }
                })
            },
            ta = [],
            ea = function() {
                var a = this,
                    t = a.$createElement,
                    e = a._self._c || t;
                return e("div", {
                    ref: "lavContainer",
                    style: a.style
                })
            },
            sa = [],
            oa = (e("c5f6"), e("94f1")),
            ia = e.n(oa),
            ra = {
                props: {
                    options: {
                        type: Object,
                        required: !0
                    },
                    height: Number,
                    width: Number
                },
                data: function() {
                    return {
                        style: {
                            width: this.width ? "".concat(this.width, "px") : "100%",
                            height: this.height ? "".concat(this.height, "px") : "100%",
                            overflow: "hidden",
                            margin: "0 auto"
                        }
                    }
                },
                mounted: function() {
                    this.anim = ia.a.loadAnimation({
                        container: this.$refs.lavContainer,
                        renderer: "svg",
                        loop: !1 !== this.options.loop,
                        autoplay: !1 !== this.options.autoplay,
                        animationData: this.options.animationData,
                        rendererSettings: this.options.rendererSettings
                    }), this.$emit("animCreated", this.anim)
                }
            },
            na = ra,
            ka = Object(y["a"])(na, ea, sa, !1, null, null, null),
            la = ka.exports,
            ca = e("98f9"),
            pa = {
                name: "app",
                components: {
                    lottie: la
                },
                data: function() {
                    return {
                        defaultOptions: {
                            animationData: ca,
                            autoplay: !1,
                            loop: !1
                        },
                        animationSpeed: 1
                    }
                },
                methods: {
                    handleAnimation: function(a) {
                        function t() {
                            this.anim = a, a.playSegments([0, 160], !0)
                        }
                        setTimeout(t, 1e3)
                    }
                },
                mounted: function() {}
            },
            ya = pa,
            ha = (e("f8c0"), Object(y["a"])(ya, aa, ta, !1, null, null, null)),
            da = ha.exports,
            ma = {
                name: "App",
                components: {
                    animPospisk: da
                },
                data: function() {
                    return {
                        skills: [{
                            title: "PHP",
                            info: "WordPress (themes/plugins)"
                        }, {
                            title: "C# (C-Sharp)",
                            info: "ASP.NET, Umbraco, Xamarin & Xamarin.forms (crossplatform mobile development)"
                        }, {
                            title: "JavaScript",
                            info: "Vanilla, vueJs, NodeJs, jQuery, lottieJs (bodymovin), "
                        }, {
                            title: "HTML/CSS",
                            info: "SASS/LESS"
                        }, {
                            title: "Adobe Photoshop",
                            info: "Web/App design, graphic design, mockups, compositions"
                        }, {
                            title: "Adobe Illustrator",
                            info: "Logos, Print, SVG illustrations & icons"
                        }, {
                            title: "Sketch App",
                            info: "Prototyping"
                        }, {
                            title: "Adobe After Effects",
                            info: "Videos, SFX, motion design, bodymovin, "
                        }, {
                            title: "Languages",
                            info: "English, German, Hungarian, Slovak"
                        }],
                        dob: "1996/06/25",
                        age: 0
                    }
                },
                created: function() {
                    var a = new Date,
                        t = a.getDate(),
                        e = a.getMonth() + 1,
                        s = a.getFullYear();
                    t < 10 && (t = "0" + t), e < 10 && (e = "0" + e), a = s + "/" + e + "/" + t;
                    var o = new Date(a),
                        i = new Date(this.dob),
                        r = Math.abs(o.getTime() - i.getTime()),
                        n = Math.ceil(r / 864e5);
                    this.age = Math.floor(n / 365)
                },
                mounted: function() {
                    var a = document.documentElement.clientWidth,
                        t = document.documentElement.clientHeight,
                        e = document.querySelector(".pospiskAnim svg"),
                        s = e.childNodes,
                        o = s[1],
                        i = o.childNodes,
                        r = i[7],
                        n = r.childNodes,
                        k = n[1],
                        l = n[2],
                        c = n[3],
                        p = n[6],
                        y = n[7],
                        h = n[8],
                        d = "http://www.w3.org/2000/svg";

                    function m() {
                        var a = document.createElementNS(d, "g");
                        a.setAttributeNS(null, "class", "leftGr"), a.appendChild(k), a.appendChild(l), r.insertBefore(a, c);
                        var t = document.createElementNS(d, "g");
                        t.setAttributeNS(null, "class", "rightGr"), t.appendChild(p), t.appendChild(y), r.insertBefore(t, h)
                    }

                    function u(a) {
                        var t = document.querySelector(".leftGr"),
                            e = document.querySelector(".rightGr"),
                            s = a.beta,
                            o = a.gamma;
                        s > 90 && (s = 90), s < -90 && (s = -90), o > 90 && (o = -90), o < -90 && (o = 90);
                        var i = s / 10,
                            r = o / 10,
                            n = i.toFixed(2),
                            k = r.toFixed(2);
                        t.setAttribute("transform", "matrix(1,0,0,1," + k + "," + n + ")"), e.setAttribute("transform", "matrix(1,0,0,1," + k + "," + n + ")")
                    }
                    setTimeout(m, 3500), window.addEventListener("deviceorientation", u), window.addEventListener("mousemove", function(e) {
                        function s() {
                            var s = document.querySelector(".leftGr"),
                                o = document.querySelector(".rightGr");
                            if (s || o) {
                                var i = e.x,
                                    r = e.y,
                                    n = i - a / 2,
                                    k = r - t / 2,
                                    l = n / 150,
                                    c = k / 150;
                                s.setAttribute("transform", "matrix(1,0,0,1," + l + "," + c + ")"), o.setAttribute("transform", "matrix(1,0,0,1," + l + "," + c + ")")
                            } else;
                        }
                        setTimeout(s, 150)
                    })
                },
                methods: {}
            },
            ua = ma,
            ga = (e("8b71"), e("cc20")),
            fa = e("3a2f"),
            va = Object(y["a"])(ua, Q, Z, !1, null, null, null),
            wa = va.exports;
        d()(va, {
            VBtn: m["a"],
            VChip: ga["a"],
            VContainer: F["a"],
            VFlex: C["a"],
            VLayout: T["a"],
            VTooltip: fa["a"]
        });
        var ba = e("ee53"),
            xa = (e("683e"), e("f5af")),
            Ca = e.n(xa);
        e("e829");
        s["a"].use(ba["a"]), s["a"].use(i["a"]), s["a"].config.productionTip = !1, s["a"].filter("truncate", function(a, t, e) {
            return a.slice(0, t) + (t < a.length ? e || "..." : "")
        });
        var _a = [{
                path: "/works",
                component: q
            }, {
                path: "/about",
                component: Y
            }, {
                path: "/",
                component: wa
            }],
            ja = new i["a"]({
                routes: _a
            });
        new s["a"]({
            created: function() {
                Ca.a.init()
            },
            SequentialEntrance: ba["a"],
            router: ja,
            render: function(a) {
                return a(G)
            }
        }).$mount("#app")
    },
    "66e7": function(a, t, e) {},
    "6c0b": function(a, t, e) {
        "use strict";
        var s = e("66e7"),
            o = e.n(s);
        o.a
    },
    7759: function(a, t, e) {
        a.exports = e.p + "img/dear_deer.6870ce8c.jpg"
    },
    "77af": function(a, t, e) {
        a.exports = e.p + "img/stop.af199d6b.jpg"
    },
    "7b8c": function(a, t, e) {
        a.exports = e.p + "img/kristian_pospis.adcc0fcc.jpg"
    },
    "7e5e": function(a, t, e) {
        a.exports = e.p + "img/degustacia_berta_strekov.f33a49bf.jpg"
    },
    "8a26": function(a, t, e) {
        a.exports = e.p + "img/dryrack.1b46e776.jpg"
    },
    "8b71": function(a, t, e) {
        "use strict";
        var s = e("48b7"),
            o = e.n(s);
        o.a
    },
    "8f03": function(a, t, e) {
        a.exports = e.p + "img/refugeecamp_museum_oksbol.3748f08e.jpg"
    },
    "98f9": function(a) {
        a.exports = {
            ip: 0,
            fr: 60,
            v: "5.1.20",
            assets: [],
            layers: [{
                ty: 4,
                nm: "kp2-03",
                ip: 0,
                st: 0,
                ind: 17,
                hix: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100
                    },
                    or: {
                        a: 0,
                        k: [0, 0, 0]
                    },
                    a: {
                        a: 0,
                        k: [55, 55, 0]
                    },
                    p: {
                        s: !0,
                        x: {
                            a: 0,
                            k: 796.0260009765625
                        },
                        y: {
                            a: 0,
                            k: 785
                        }
                    },
                    rx: {
                        a: 0,
                        k: 0
                    },
                    ry: {
                        a: 0,
                        k: 0
                    },
                    rz: {
                        a: 0,
                        k: 0
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100]
                    }
                },
                shapes: [{
                    ty: "gr",
                    nm: "kp2-03 shape group",
                    it: [{
                        ty: "rc",
                        s: {
                            a: 0,
                            k: [110, 110]
                        },
                        r: {
                            a: 0,
                            k: 0
                        },
                        p: {
                            a: 0,
                            k: [469, 186]
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "gf",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        g: {
                            p: 3,
                            k: {
                                a: 0,
                                k: [0, .6, .47843137254901963, .42745098039215684, .3076, .6509803921568628, .5176470588235295, .4588235294117647, 1, .7490196078431373, .6, .5254901960784314]
                            }
                        },
                        t: 1,
                        s: {
                            a: 0,
                            k: [414, 186]
                        },
                        e: {
                            a: 0,
                            k: [524, 186]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-414, -131]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }],
                op: 200
            }, {
                ty: 4,
                nm: "wink",
                ip: 0,
                st: 0,
                ind: 16,
                hix: 2,
                ks: {
                    o: {
                        a: 1,
                        k: [{
                            t: 0,
                            s: [0],
                            e: [0],
                            i: {
                                x: [1],
                                y: [1]
                            },
                            o: {
                                x: [0],
                                y: [0]
                            }
                        }, {
                            t: 160,
                            s: [0],
                            e: [100],
                            i: {
                                x: [.515],
                                y: [.955]
                            },
                            o: {
                                x: [.455],
                                y: [.03]
                            }
                        }, {
                            t: 170,
                            s: [100],
                            e: [0],
                            i: {
                                x: [.515],
                                y: [.955]
                            },
                            o: {
                                x: [.455],
                                y: [.03]
                            }
                        }, {
                            t: 180,
                            s: [0],
                            e: [100],
                            i: {
                                x: [.515],
                                y: [.955]
                            },
                            o: {
                                x: [.455],
                                y: [.03]
                            }
                        }, {
                            t: 190,
                            s: [100],
                            e: [0],
                            i: {
                                x: [.515],
                                y: [.955]
                            },
                            o: {
                                x: [.455],
                                y: [.03]
                            }
                        }, {
                            t: 200
                        }]
                    },
                    or: {
                        a: 0,
                        k: [0, 0, 0]
                    },
                    a: {
                        a: 0,
                        k: [139.541015625, 35.225494384765625, 0]
                    },
                    p: {
                        s: !0,
                        x: {
                            a: 0,
                            k: 274
                        },
                        y: {
                            a: 0,
                            k: 335.5
                        }
                    },
                    rx: {
                        a: 0,
                        k: 0
                    },
                    ry: {
                        a: 0,
                        k: 0
                    },
                    rz: {
                        a: 0,
                        k: 0
                    },
                    s: {
                        a: 0,
                        k: [89.9, 89.9]
                    }
                },
                shapes: [{
                    ty: "gr",
                    nm: "wink shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [339.725, 726.383],
                                    [340.40900000000005, 716.774],
                                    [302.78700000000003, 691.396],
                                    [245.79500000000004, 717.274],
                                    [246.09900000000005, 721.447],
                                    [309.78700000000003, 744.396],
                                    [339.78700000000003, 726.396]
                                ],
                                i: [
                                    [0, 0],
                                    [1.7229999999999563, 3.0470000000000255],
                                    [0, 0],
                                    [3.3149999999999977, -8.594000000000051],
                                    [-.7090000000000032, -1.2559999999999718],
                                    [0, 0],
                                    [0, 0]
                                ],
                                o: [
                                    [2.132000000000005, -2.7759999999999536],
                                    [-9.704000000000008, -17.16700000000003],
                                    [-40.867999999999995, -5.721000000000004],
                                    [-.5360000000000014, 1.3899999999999864],
                                    [-2.4399999999999977, 34.678999999999974],
                                    [34, 7],
                                    [0, 0]
                                ]
                            }
                        }
                    }, {
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [315.329, 725.421],
                                    [311.28700000000003, 725.897],
                                    [310.66100000000006, 726.014],
                                    [286.28600000000006, 731.029],
                                    [265.5350000000001, 727.429],
                                    [257.78800000000007, 722.3969999999999],
                                    [258.78800000000007, 717.3969999999999],
                                    [271.2920000000001, 708.334],
                                    [289.6140000000001, 703.929],
                                    [327.1180000000001, 716.745],
                                    [327.1230000000001, 717.047],
                                    [335.7340000000001, 725.715]
                                ],
                                i: [
                                    [9.069000000000017, -.8070000000000164],
                                    [0, 0],
                                    [0, 0],
                                    [10.165999999999997, -.86099999999999],
                                    [6.475999999999999, 2.9880000000000564],
                                    [2.2760000000000105, 2.2760000000000673],
                                    [0, 0],
                                    [-4.174000000000035, 2.1200000000000045],
                                    [-6.372000000000014, 0],
                                    [-1.6580000000000155, -1.4519999999999982],
                                    [.08400000000000318, -.08699999999998909],
                                    [-1.7239999999999895, -2.1019999999999754]
                                ],
                                o: [
                                    [0, 0],
                                    [0, 0],
                                    [-6.170000000000016, 2.19399999999996],
                                    [-7.107000000000028, .6019999999999754],
                                    [-2.6720000000000255, -1.2329999999999472],
                                    [-2, -2],
                                    [3.399000000000001, -3.8840000000000146],
                                    [5.682000000000016, -2.884999999999991],
                                    [22.161999999999978, 0],
                                    [.09300000000001774, .08100000000001728],
                                    [4.093000000000018, 3.3310000000000173],
                                    [-4.1730000000001155, -.5470000000000255]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "gf",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        g: {
                            p: 3,
                            k: {
                                a: 0,
                                k: [0, .7490196078431373, .6, .5254901960784314, .6924, .6509803921568628, .5176470588235295, .4588235294117647, 1, .6, .47843137254901963, .42745098039215684]
                            }
                        },
                        t: 1,
                        s: {
                            a: 0,
                            k: [245.4653, 718.3999]
                        },
                        e: {
                            a: 0,
                            k: [341.5347, 718.3999]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-243.659, -685.675]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "wink shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [327.121, 717.047],
                                    [327.183, 716.888],
                                    [310.31, 725.988],
                                    [316.956, 725.2900000000001],
                                    [317.135, 725.2780000000001],
                                    [318.546, 725.1870000000001],
                                    [318.789, 725.1740000000001],
                                    [320.10699999999997, 725.109],
                                    [320.347, 725.099],
                                    [321.63399999999996, 725.0550000000001],
                                    [321.84799999999996, 725.0490000000001],
                                    [323.14899999999994, 725.0240000000001],
                                    [323.28499999999997, 725.0220000000002],
                                    [329.82199999999995, 725.1690000000002],
                                    [329.8759999999999, 725.1720000000003],
                                    [330.92799999999994, 725.2390000000003],
                                    [331.07199999999995, 725.2490000000003],
                                    [331.9839999999999, 725.3190000000003],
                                    [332.1529999999999, 725.3330000000003],
                                    [332.9959999999999, 725.4080000000004],
                                    [333.1449999999999, 725.4220000000004],
                                    [333.9559999999999, 725.5040000000004],
                                    [334.0709999999999, 725.5160000000003],
                                    [334.8639999999999, 725.6060000000003],
                                    [334.93299999999994, 725.6140000000004],
                                    [335.7319999999999, 725.7140000000004]
                                ],
                                i: [
                                    [4.093000000000018, 3.3310000000000173],
                                    [.0009999999999763531, .05700000000001637],
                                    [0, 0],
                                    [-2.1100000000000136, .15399999999999636],
                                    [-.05999999999994543, .0039999999999054126],
                                    [-.464999999999975, .025999999999953616],
                                    [-.08100000000001728, .004000000000019099],
                                    [-.4329999999999927, .019000000000005457],
                                    [-.07999999999998408, .0030000000000427463],
                                    [-.4230000000000018, .011999999999943611],
                                    [-.07100000000002638, .0019999999999527063],
                                    [-.4269999999999641, .005999999999971806],
                                    [-.045000000000015916, .0009999999999763531],
                                    [-1.9419999999999504, -.11200000000008004],
                                    [-.01799999999997226, -.00100000000009004],
                                    [-.3420000000000414, -.02400000000000091],
                                    [-.04800000000000182, -.0030000000000427463],
                                    [-.29599999999999227, -.02500000000009095],
                                    [-.055999999999983174, -.0049999999999954525],
                                    [-.2740000000000009, -.026000000000067303],
                                    [-.04899999999997817, -.0049999999999954525],
                                    [-.26200000000000045, -.02800000000002001],
                                    [-.038000000000010914, -.0039999999999054126],
                                    [-.25499999999999545, -.030000000000086402],
                                    [-.02199999999999136, -.0030000000000427463],
                                    [-.25499999999999545, -.033999999999991815]
                                ],
                                o: [
                                    [.04399999999998272, -.04499999999995907],
                                    [-4.677000000000021, 3.480000000000018],
                                    [2.319000000000017, -.31899999999996],
                                    [.060000000000002274, -.004000000000019099],
                                    [.4759999999999991, -.033999999999991815],
                                    [.08100000000001728, -.0049999999999954525],
                                    [.4449999999999932, -.024999999999977263],
                                    [.07999999999998408, -.0030000000000427463],
                                    [.4350000000000023, -.01700000000005275],
                                    [.07200000000000273, -.0019999999999527063],
                                    [.4399999999999977, -.010999999999967258],
                                    [.045000000000015916, -.0009999999999763531],
                                    [2.406000000000006, -.025999999999953616],
                                    [.01799999999997226, .0009999999999763531],
                                    [.35899999999998045, .020999999999958163],
                                    [.04899999999997817, .0030000000000427463],
                                    [.3120000000000118, .022000000000048203],
                                    [.05700000000001637, .0049999999999954525],
                                    [.2880000000000109, .02400000000000091],
                                    [.05000000000001137, .0049999999999954525],
                                    [.27899999999999636, .027000000000043656],
                                    [.038000000000010914, .004000000000019099],
                                    [.27300000000002456, .029999999999972715],
                                    [.023000000000024556, .0030000000000427463],
                                    [.2769999999999868, .03300000000001546],
                                    [-1.7239999999999327, -2.10100000000034]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [.8470588235294118, .5058823529411764, .42745098039215684, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-243.659, -685.675]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "wink shape group",
                    it: [{
                        ty: "el",
                        p: {
                            a: 0,
                            k: [290, 716]
                        },
                        s: {
                            a: 0,
                            k: [13, 13]
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [0, 0, 0, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-243.659, -685.675]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "wink shape group",
                    it: [{
                        ty: "el",
                        p: {
                            a: 0,
                            k: [290, 716]
                        },
                        s: {
                            a: 0,
                            k: [30, 30]
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [.36470588235294116, .40784313725490196, .27058823529411763, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-243.659, -685.675]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "wink shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [258.787, 717.396],
                                    [271.291, 708.333],
                                    [289.613, 703.928],
                                    [327.117, 716.744],
                                    [327.117, 717.058],
                                    [286.286, 731.028],
                                    [265.535, 727.428],
                                    [257.788, 722.396]
                                ],
                                i: [
                                    [0, 0],
                                    [-4.174000000000035, 2.1200000000000045],
                                    [-6.372000000000014, 0],
                                    [-1.6580000000000155, -1.4519999999999982],
                                    [.09399999999999409, -.08699999999998909],
                                    [27.31800000000004, -2.3150000000000546],
                                    [6.475999999999999, 2.9880000000000564],
                                    [2.2760000000000105, 2.2760000000000673]
                                ],
                                o: [
                                    [3.399000000000001, -3.8840000000000146],
                                    [5.682000000000016, -2.884999999999991],
                                    [22.161999999999978, 0],
                                    [.09600000000000364, .08399999999994634],
                                    [-1.5330000000000155, 1.4120000000000346],
                                    [-7.107000000000028, .6019999999999754],
                                    [-2.6720000000000255, -1.2329999999999472],
                                    [-2.0010000000000048, -2]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "gf",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        g: {
                            p: 2,
                            k: {
                                a: 0,
                                k: [0, .7019607843137254, .7019607843137254, .7019607843137254, 1, .9019607843137255, .9019607843137255, .9019607843137255]
                            }
                        },
                        t: 1,
                        s: {
                            a: 0,
                            k: [-1107.6141, 717.5532]
                        },
                        e: {
                            a: 0,
                            k: [-1037.5259, 717.5532]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-243.659, -685.675]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "wink shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [428.213, 726.396],
                                    [441.685, 745.17],
                                    [453.76, 745.125],
                                    [458.316, 744.671],
                                    [463.674, 745.095],
                                    [502.23299999999995, 744.0160000000001],
                                    [513.333, 739.441],
                                    [521.901, 721.448],
                                    [522.2049999999999, 717.275],
                                    [465.2129999999999, 691.3969999999999],
                                    [427.5909999999999, 716.775],
                                    [428.2749999999999, 726.384]
                                ],
                                i: [
                                    [0, 0],
                                    [-8.95599999999996, -1.7019999999999982],
                                    [-4.0090000000000146, .5169999999999391],
                                    [-1.5269999999999868, .029999999999972715],
                                    [-1.7800000000000296, -.21899999999993724],
                                    [-12.537999999999954, 3.173000000000002],
                                    [-3.347000000000037, 2.229000000000042],
                                    [.5130000000000337, 7.305000000000064],
                                    [.5360000000000582, 1.3899999999999864],
                                    [40.867999999999995, -5.72199999999998],
                                    [9.704000000000008, -17.16700000000003],
                                    [-2.132000000000005, -2.7760000000000673]
                                ],
                                o: [
                                    [-1.4680000000000177, 9.173999999999978],
                                    [3.9710000000000036, .7549999999999955],
                                    [1.5149999999999864, -.19500000000005002],
                                    [1.7930000000000064, -.03499999999996817],
                                    [12.836000000000013, 1.5810000000000173],
                                    [3.899000000000001, -.98599999999999],
                                    [6.149999999999977, -4.095000000000027],
                                    [.7089999999999463, -1.2559999999999718],
                                    [-3.316000000000031, -8.595000000000027],
                                    [0, 0],
                                    [-1.7230000000000132, 3.0470000000000255],
                                    [0, 0]
                                ]
                            }
                        }
                    }, {
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [440.609, 724.009],
                                    [432.356, 725.066],
                                    [441.61, 721.759],
                                    [499.116, 719.354],
                                    [508, 724.3960000000001],
                                    [452.718, 724.2270000000001]
                                ],
                                i: [
                                    [3.9950000000000045, -.1330000000000382],
                                    [2.9119999999999777, -.5740000000000691],
                                    [-3.0780000000000314, 1.3269999999999982],
                                    [-18.238999999999976, -8.216999999999985],
                                    [-2.875, -2],
                                    [18.281999999999982, -.8310000000000173]
                                ],
                                o: [
                                    [-2.8729999999999905, .23299999999994725],
                                    [3.1259999999999764, -.7809999999999491],
                                    [18.468000000000018, -7.95799999999997],
                                    [3.0400000000000205, 1.3700000000000045],
                                    [-18, 8],
                                    [-3.994000000000028, -.23100000000010823]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "gf",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        g: {
                            p: 3,
                            k: {
                                a: 0,
                                k: [0, .6, .47843137254901963, .42745098039215684, .3076, .6509803921568628, .5176470588235295, .4588235294117647, 1, .7490196078431373, .6, .5254901960784314]
                            }
                        },
                        t: 1,
                        s: {
                            a: 0,
                            k: [414, 186]
                        },
                        e: {
                            a: 0,
                            k: [524, 186]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-243.659, -685.675]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "wink shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [440.879, 717.047],
                                    [440.817, 716.888],
                                    [457.69, 725.988],
                                    [451.044, 725.2900000000001],
                                    [450.865, 725.2780000000001],
                                    [449.454, 725.1870000000001],
                                    [449.211, 725.1740000000001],
                                    [447.89300000000003, 725.109],
                                    [447.653, 725.099],
                                    [446.36600000000004, 725.0550000000001],
                                    [446.15200000000004, 725.0490000000001],
                                    [444.85100000000006, 725.0240000000001],
                                    [444.71500000000003, 725.0220000000002],
                                    [438.17800000000005, 725.1690000000002],
                                    [438.1240000000001, 725.1720000000003],
                                    [437.07200000000006, 725.2390000000003],
                                    [436.92800000000005, 725.2490000000003],
                                    [436.0160000000001, 725.3190000000003],
                                    [435.8470000000001, 725.3330000000003],
                                    [435.0040000000001, 725.4080000000004],
                                    [434.8550000000001, 725.4220000000004],
                                    [434.0440000000001, 725.5040000000004],
                                    [433.9290000000001, 725.5160000000003],
                                    [433.1360000000001, 725.6060000000003],
                                    [433.06700000000006, 725.6140000000004],
                                    [432.2680000000001, 725.7140000000004]
                                ],
                                i: [
                                    [-4.093000000000018, 3.3310000000000173],
                                    [-.0009999999999763531, .05700000000001637],
                                    [0, 0],
                                    [2.1100000000000136, .15399999999999636],
                                    [.05999999999994543, .0039999999999054126],
                                    [.464999999999975, .025999999999953616],
                                    [.08100000000001728, .004000000000019099],
                                    [.4329999999999927, .019000000000005457],
                                    [.07999999999998408, .0030000000000427463],
                                    [.4230000000000018, .011999999999943611],
                                    [.07100000000002638, .0019999999999527063],
                                    [.4269999999999641, .005999999999971806],
                                    [.045000000000015916, .0009999999999763531],
                                    [1.9419999999999504, -.11200000000008004],
                                    [.01799999999997226, -.00100000000009004],
                                    [.3420000000000414, -.02400000000000091],
                                    [.04800000000000182, -.0030000000000427463],
                                    [.29599999999999227, -.02500000000009095],
                                    [.055999999999983174, -.0049999999999954525],
                                    [.2740000000000009, -.026000000000067303],
                                    [.04899999999997817, -.0049999999999954525],
                                    [.26200000000000045, -.02800000000002001],
                                    [.038000000000010914, -.0039999999999054126],
                                    [.25499999999999545, -.030000000000086402],
                                    [.02199999999999136, -.0030000000000427463],
                                    [.25499999999999545, -.033999999999991815]
                                ],
                                o: [
                                    [-.04399999999998272, -.04499999999995907],
                                    [4.677000000000021, 3.480000000000018],
                                    [-2.319000000000017, -.31899999999996],
                                    [-.060000000000002274, -.004000000000019099],
                                    [-.4759999999999991, -.033999999999991815],
                                    [-.08100000000001728, -.0049999999999954525],
                                    [-.4449999999999932, -.024999999999977263],
                                    [-.07999999999998408, -.0030000000000427463],
                                    [-.4350000000000023, -.01700000000005275],
                                    [-.07200000000000273, -.0019999999999527063],
                                    [-.4399999999999977, -.010999999999967258],
                                    [-.045000000000015916, -.0009999999999763531],
                                    [-2.406000000000006, -.025999999999953616],
                                    [-.01799999999997226, .0009999999999763531],
                                    [-.35899999999998045, .020999999999958163],
                                    [-.04899999999997817, .0030000000000427463],
                                    [-.3120000000000118, .022000000000048203],
                                    [-.05700000000001637, .0049999999999954525],
                                    [-.2880000000000109, .02400000000000091],
                                    [-.05000000000001137, .0049999999999954525],
                                    [-.27899999999999636, .027000000000043656],
                                    [-.038000000000010914, .004000000000019099],
                                    [-.27300000000002456, .029999999999972715],
                                    [-.023000000000024556, .0030000000000427463],
                                    [-.2769999999999868, .03300000000001546],
                                    [1.7239999999999327, -2.10100000000034]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [.8470588235294118, .5058823529411764, .42745098039215684, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-243.659, -685.675]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "wink shape group",
                    it: [{
                        ty: "el",
                        p: {
                            a: 0,
                            k: [477, 716]
                        },
                        s: {
                            a: 0,
                            k: [13, 13]
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [0, 0, 0, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-243.659, -685.675]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "wink shape group",
                    it: [{
                        ty: "el",
                        p: {
                            a: 0,
                            k: [477, 716]
                        },
                        s: {
                            a: 0,
                            k: [30, 30]
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [.36470588235294116, .40784313725490196, .27058823529411763, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-243.659, -685.675]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "wink shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [509.213, 717.396],
                                    [496.709, 708.333],
                                    [478.387, 703.928],
                                    [440.883, 716.744],
                                    [440.883, 717.058],
                                    [481.714, 731.028],
                                    [502.465, 727.428],
                                    [510.212, 722.396]
                                ],
                                i: [
                                    [0, 0],
                                    [4.174000000000035, 2.1200000000000045],
                                    [6.372000000000014, 0],
                                    [1.6580000000000155, -1.4519999999999982],
                                    [-.09399999999999409, -.08699999999998909],
                                    [-27.31800000000004, -2.3150000000000546],
                                    [-6.475999999999999, 2.9880000000000564],
                                    [-2.2760000000000105, 2.2760000000000673]
                                ],
                                o: [
                                    [-3.399000000000001, -3.8840000000000146],
                                    [-5.682000000000016, -2.884999999999991],
                                    [-22.161999999999978, 0],
                                    [-.09600000000000364, .08399999999994634],
                                    [1.5330000000000155, 1.4120000000000346],
                                    [7.107000000000028, .6019999999999754],
                                    [2.6720000000000255, -1.2329999999999472],
                                    [2.0009999999999764, -2]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "gf",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        g: {
                            p: 2,
                            k: {
                                a: 0,
                                k: [0, .7019607843137254, .7019607843137254, .7019607843137254, 1, .9019607843137255, .9019607843137255, .9019607843137255]
                            }
                        },
                        t: 1,
                        s: {
                            a: 0,
                            k: [-2374.6143, 717.5532]
                        },
                        e: {
                            a: 0,
                            k: [-2304.5259, 717.5532]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-243.659, -685.675]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }],
                op: 200
            }, {
                ty: 4,
                nm: "wink2",
                ip: 0,
                st: 0,
                ind: 15,
                hix: 3,
                ks: {
                    o: {
                        a: 1,
                        k: [{
                            t: 0,
                            s: [0],
                            e: [0],
                            i: {
                                x: [1],
                                y: [1]
                            },
                            o: {
                                x: [0],
                                y: [0]
                            }
                        }, {
                            t: 162,
                            s: [0],
                            e: [100],
                            i: {
                                x: [.515],
                                y: [.955]
                            },
                            o: {
                                x: [.455],
                                y: [.03]
                            }
                        }, {
                            t: 178,
                            s: [100],
                            e: [100],
                            i: {
                                x: [1],
                                y: [1]
                            },
                            o: {
                                x: [0],
                                y: [0]
                            }
                        }, {
                            t: 180,
                            s: [100],
                            e: [0],
                            i: {
                                x: [.515],
                                y: [.955]
                            },
                            o: {
                                x: [.455],
                                y: [.03]
                            }
                        }, {
                            t: 195
                        }]
                    },
                    or: {
                        a: 0,
                        k: [0, 0, 0]
                    },
                    a: {
                        a: 0,
                        k: [139.54150390625, 35.244476318359375, 0]
                    },
                    p: {
                        s: !0,
                        x: {
                            a: 0,
                            k: 274
                        },
                        y: {
                            a: 0,
                            k: 335.5
                        }
                    },
                    rx: {
                        a: 0,
                        k: 0
                    },
                    ry: {
                        a: 0,
                        k: 0
                    },
                    rz: {
                        a: 0,
                        k: 0
                    },
                    s: {
                        a: 0,
                        k: [89.9, 89.9]
                    }
                },
                shapes: [{
                    ty: "gr",
                    nm: "wink2 shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [339.725, 866.024],
                                    [340.40900000000005, 856.415],
                                    [302.78700000000003, 831.0369999999999],
                                    [245.79500000000004, 856.915],
                                    [246.09900000000005, 861.088],
                                    [309.78700000000003, 884.0369999999999],
                                    [339.78700000000003, 866.0369999999999]
                                ],
                                i: [
                                    [0, 0],
                                    [1.7229999999999563, 3.0470000000000255],
                                    [0, 0],
                                    [3.3149999999999977, -8.594000000000051],
                                    [-.7090000000000032, -1.2559999999999718],
                                    [0, 0],
                                    [0, 0]
                                ],
                                o: [
                                    [2.132000000000005, -2.7759999999999536],
                                    [-9.704000000000008, -17.16700000000003],
                                    [-40.867999999999995, -5.721000000000004],
                                    [-.5360000000000014, 1.3899999999999864],
                                    [-2.4399999999999977, 34.678999999999974],
                                    [34, 7],
                                    [0, 0]
                                ]
                            }
                        }
                    }, {
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [315.329, 865.062],
                                    [311.28700000000003, 865.538],
                                    [310.66100000000006, 865.655],
                                    [286.28600000000006, 870.67],
                                    [265.5350000000001, 867.0699999999999],
                                    [257.78800000000007, 862.0379999999999],
                                    [258.78800000000007, 857.0379999999999],
                                    [271.2920000000001, 847.9749999999999],
                                    [289.6140000000001, 843.5699999999999],
                                    [327.1180000000001, 856.386],
                                    [327.1230000000001, 856.688],
                                    [335.7340000000001, 865.356]
                                ],
                                i: [
                                    [9.069000000000017, -.8070000000000164],
                                    [0, 0],
                                    [0, 0],
                                    [10.165999999999997, -.86099999999999],
                                    [6.475999999999999, 2.9880000000000564],
                                    [2.2760000000000105, 2.2760000000000673],
                                    [0, 0],
                                    [-4.174000000000035, 2.1200000000000045],
                                    [-6.372000000000014, 0],
                                    [-1.6580000000000155, -1.4519999999999982],
                                    [.08400000000000318, -.08699999999998909],
                                    [-1.7239999999999895, -2.1019999999999754]
                                ],
                                o: [
                                    [0, 0],
                                    [0, 0],
                                    [-6.170000000000016, 2.19399999999996],
                                    [-7.107000000000028, .6019999999999754],
                                    [-2.6720000000000255, -1.2329999999999472],
                                    [-2, -2],
                                    [3.399000000000001, -3.8840000000000146],
                                    [5.682000000000016, -2.884999999999991],
                                    [22.161999999999978, 0],
                                    [.09300000000001774, .08100000000001728],
                                    [4.093000000000018, 3.3310000000000173],
                                    [-4.1730000000001155, -.5460000000000491]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "gf",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        g: {
                            p: 3,
                            k: {
                                a: 0,
                                k: [0, .7490196078431373, .6, .5254901960784314, .6924, .6509803921568628, .5176470588235295, .4588235294117647, 1, .6, .47843137254901963, .42745098039215684]
                            }
                        },
                        t: 1,
                        s: {
                            a: 0,
                            k: [245.4653, 858.0411]
                        },
                        e: {
                            a: 0,
                            k: [341.5347, 858.0411]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-243.659, -825.278]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "wink2 shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [327.121, 856.688],
                                    [327.183, 856.529],
                                    [310.31, 865.629],
                                    [316.956, 864.931],
                                    [317.135, 864.9190000000001],
                                    [318.546, 864.8280000000001],
                                    [318.789, 864.815],
                                    [320.10699999999997, 864.75],
                                    [320.347, 864.74],
                                    [321.63399999999996, 864.696],
                                    [321.84799999999996, 864.69],
                                    [323.14899999999994, 864.6650000000001],
                                    [323.28499999999997, 864.6630000000001],
                                    [329.82199999999995, 864.8100000000002],
                                    [329.8759999999999, 864.8130000000002],
                                    [330.92799999999994, 864.8800000000002],
                                    [331.07199999999995, 864.8900000000002],
                                    [331.9839999999999, 864.9600000000003],
                                    [332.1529999999999, 864.9740000000003],
                                    [332.9959999999999, 865.0490000000003],
                                    [333.1449999999999, 865.0630000000003],
                                    [333.9559999999999, 865.1450000000003],
                                    [334.0709999999999, 865.1570000000003],
                                    [334.8639999999999, 865.2470000000003],
                                    [334.93299999999994, 865.2550000000003],
                                    [335.7319999999999, 865.3550000000004]
                                ],
                                i: [
                                    [4.093000000000018, 3.3310000000000173],
                                    [.0009999999999763531, .05700000000001637],
                                    [0, 0],
                                    [-2.1100000000000136, .15399999999999636],
                                    [-.05999999999994543, .0039999999999054126],
                                    [-.464999999999975, .025999999999953616],
                                    [-.08100000000001728, .004000000000019099],
                                    [-.4329999999999927, .019000000000005457],
                                    [-.07999999999998408, .0030000000000427463],
                                    [-.4230000000000018, .011999999999943611],
                                    [-.07100000000002638, .0019999999999527063],
                                    [-.4269999999999641, .005999999999971806],
                                    [-.045000000000015916, .0009999999999763531],
                                    [-1.9419999999999504, -.11200000000008004],
                                    [-.01799999999997226, -.00100000000009004],
                                    [-.3420000000000414, -.02400000000000091],
                                    [-.04800000000000182, -.0030000000000427463],
                                    [-.29599999999999227, -.02500000000009095],
                                    [-.055999999999983174, -.0049999999999954525],
                                    [-.2740000000000009, -.026000000000067303],
                                    [-.04899999999997817, -.0049999999999954525],
                                    [-.26200000000000045, -.02800000000002001],
                                    [-.038000000000010914, -.0039999999999054126],
                                    [-.25499999999999545, -.030000000000086402],
                                    [-.02199999999999136, -.0030000000000427463],
                                    [-.25499999999999545, -.033999999999991815]
                                ],
                                o: [
                                    [.04399999999998272, -.04499999999995907],
                                    [-4.677000000000021, 3.480000000000018],
                                    [2.319000000000017, -.31899999999996],
                                    [.060000000000002274, -.004000000000019099],
                                    [.4759999999999991, -.033999999999991815],
                                    [.08100000000001728, -.0049999999999954525],
                                    [.4449999999999932, -.024999999999977263],
                                    [.07999999999998408, -.0030000000000427463],
                                    [.4350000000000023, -.01700000000005275],
                                    [.07200000000000273, -.0019999999999527063],
                                    [.4399999999999977, -.010999999999967258],
                                    [.045000000000015916, -.0009999999999763531],
                                    [2.406000000000006, -.025999999999953616],
                                    [.01799999999997226, .0009999999999763531],
                                    [.35899999999998045, .020999999999958163],
                                    [.04899999999997817, .0030000000000427463],
                                    [.3120000000000118, .022000000000048203],
                                    [.05700000000001637, .0049999999999954525],
                                    [.2880000000000109, .02400000000000091],
                                    [.05000000000001137, .0049999999999954525],
                                    [.27899999999999636, .027000000000043656],
                                    [.038000000000010914, .004000000000019099],
                                    [.27300000000002456, .029999999999972715],
                                    [.023000000000024556, .0030000000000427463],
                                    [.2769999999999868, .03300000000001546],
                                    [-1.7239999999999327, -2.10100000000034]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [.8470588235294118, .5058823529411764, .42745098039215684, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-243.659, -825.278]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "wink2 shape group",
                    it: [{
                        ty: "el",
                        p: {
                            a: 0,
                            k: [290, 855]
                        },
                        s: {
                            a: 0,
                            k: [13, 13]
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [0, 0, 0, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-243.659, -825.278]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "wink2 shape group",
                    it: [{
                        ty: "el",
                        p: {
                            a: 0,
                            k: [290, 855]
                        },
                        s: {
                            a: 0,
                            k: [30, 30]
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [.36470588235294116, .40784313725490196, .27058823529411763, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-243.659, -825.278]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "wink2 shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [258.787, 857.037],
                                    [271.291, 847.974],
                                    [289.613, 843.5690000000001],
                                    [327.117, 856.3850000000001],
                                    [327.117, 856.6990000000001],
                                    [286.286, 870.6690000000001],
                                    [265.535, 867.0690000000001],
                                    [257.788, 862.037]
                                ],
                                i: [
                                    [0, 0],
                                    [-4.174000000000035, 2.1200000000000045],
                                    [-6.372000000000014, 0],
                                    [-1.6580000000000155, -1.4519999999999982],
                                    [.09399999999999409, -.08699999999998909],
                                    [27.31800000000004, -2.3150000000000546],
                                    [6.475999999999999, 2.9880000000000564],
                                    [2.2760000000000105, 2.2760000000000673]
                                ],
                                o: [
                                    [3.399000000000001, -3.8840000000000146],
                                    [5.682000000000016, -2.884999999999991],
                                    [22.161999999999978, 0],
                                    [.09600000000000364, .08399999999994634],
                                    [-1.5330000000000155, 1.4120000000000346],
                                    [-7.107000000000028, .6019999999999754],
                                    [-2.6720000000000255, -1.2329999999999472],
                                    [-2.0010000000000048, -2]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "gf",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        g: {
                            p: 2,
                            k: {
                                a: 0,
                                k: [0, .7019607843137254, .7019607843137254, .7019607843137254, 1, .9019607843137255, .9019607843137255, .9019607843137255]
                            }
                        },
                        t: 1,
                        s: {
                            a: 0,
                            k: [-1107.6143, 857.1945]
                        },
                        e: {
                            a: 0,
                            k: [-1037.5259, 857.1945]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-243.659, -825.278]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "wink2 shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [428.204, 866.087],
                                    [441.68600000000004, 884.774],
                                    [453.761, 884.729],
                                    [458.317, 884.2750000000001],
                                    [463.675, 884.6990000000001],
                                    [487.9083203125, 885.772212890625],
                                    [502.23400000000004, 883.6200000000001],
                                    [513.3340000000001, 879.0450000000001],
                                    [521.902, 861.0590000000001]
                                ],
                                i: [
                                    [3.4320000000000164, 1.4510000000000218],
                                    [-8.927000000000021, -1.6970000000000027],
                                    [-4.0090000000000146, .5169999999999391],
                                    [-1.5269999999999868, .029999999999972715],
                                    [-1.7800000000000296, -.21899999999993724],
                                    [-8.051992187499991, .48545898437510004],
                                    [-4.701750000000004, 1.1894999999999527],
                                    [-3.347000000000037, 2.229000000000042],
                                    [.5109999999999673, 7.302000000000021]
                                ],
                                o: [
                                    [-1.4159999999999968, 9.135999999999967],
                                    [3.9710000000000036, .7549999999999955],
                                    [1.51400000000001, -.19500000000005002],
                                    [1.7930000000000064, -.03499999999996817],
                                    [8.022500000000036, .9881250000000819],
                                    [4.831195312499972, -.29127539062506],
                                    [3.899000000000001, -.9869999999999663],
                                    [6.148000000000025, -4.092999999999961],
                                    [-42.37500000000006, 25.926999999999907]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "gf",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        g: {
                            p: 3,
                            k: {
                                a: 0,
                                k: [0, .6, .47843137254901963, .42745098039215684, .3076, .6509803921568628, .5176470588235295, .4588235294117647, 1, .7490196078431373, .6, .5254901960784314]
                            }
                        },
                        t: 1,
                        s: {
                            a: 0,
                            k: [426.4653, 873.5031]
                        },
                        e: {
                            a: 0,
                            k: [522.5347, 873.5031]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-243.659, -825.278]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "wink2 shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [522.206, 856.878],
                                    [465.214, 831],
                                    [427.592, 856.378],
                                    [428.276, 865.9870000000001],
                                    [428.213, 866],
                                    [428.20300000000003, 866.087],
                                    [521.9010000000001, 861.058],
                                    [521.9010000000001, 861.051]
                                ],
                                i: [
                                    [.5359999999999445, 1.3899999999999864],
                                    [40.86700000000002, -5.72199999999998],
                                    [9.704000000000008, -17.16700000000003],
                                    [-2.132000000000005, -2.7760000000000673],
                                    [0, 0],
                                    [.0049999999999954525, -.028999999999996362],
                                    [-42.374000000000024, 25.927999999999997],
                                    [0, .0019999999999527063]
                                ],
                                o: [
                                    [-3.316000000000031, -8.595000000000027],
                                    [0, 0],
                                    [-1.7230000000000132, 3.0470000000000255],
                                    [0, 0],
                                    [-.0049999999999954525, .028999999999996362],
                                    [3.4329999999999927, 1.4510000000000218],
                                    [0, -.0019999999999527063],
                                    [.7099999999999227, -1.2560000000000855]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "gf",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        g: {
                            p: 3,
                            k: {
                                a: 0,
                                k: [0, .7490196078431373, .6, .5254901960784314, .6924, .6509803921568628, .5176470588235295, .4588235294117647, 1, .6, .47843137254901963, .42745098039215684]
                            }
                        },
                        t: 1,
                        s: {
                            a: 0,
                            k: [474.5, 830.0971]
                        },
                        e: {
                            a: 0,
                            k: [474.5, 874.4491]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-243.659, -825.278]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }],
                op: 200
            }, {
                ty: 4,
                nm: "kp2-03",
                ip: 0,
                st: 0,
                ind: 14,
                hix: 4,
                ks: {
                    o: {
                        a: 0,
                        k: 100
                    },
                    or: {
                        a: 0,
                        k: [0, 0, 0]
                    },
                    a: {
                        a: 0,
                        k: [55, 55, 0]
                    },
                    p: {
                        s: !0,
                        x: {
                            a: 0,
                            k: 942.526
                        },
                        y: {
                            a: 0,
                            k: 645
                        }
                    },
                    rx: {
                        a: 0,
                        k: 0
                    },
                    ry: {
                        a: 0,
                        k: 0
                    },
                    rz: {
                        a: 0,
                        k: 0
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100]
                    }
                },
                shapes: [{
                    ty: "gr",
                    nm: "kp2-03 shape group",
                    it: [{
                        ty: "rc",
                        s: {
                            a: 0,
                            k: [110, 110]
                        },
                        r: {
                            a: 0,
                            k: 0
                        },
                        p: {
                            a: 0,
                            k: [615, 186]
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "gf",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        g: {
                            p: 3,
                            k: {
                                a: 0,
                                k: [0, .7490196078431373, .6, .5254901960784314, .6924, .6509803921568628, .5176470588235295, .4588235294117647, 1, .6, .47843137254901963, .42745098039215684]
                            }
                        },
                        t: 1,
                        s: {
                            a: 0,
                            k: [670, 186]
                        },
                        e: {
                            a: 0,
                            k: [560, 186]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-560, -131]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }],
                op: 200
            }, {
                ty: 4,
                nm: "kp2-03",
                ip: 0,
                st: 0,
                ind: 13,
                hix: 5,
                ks: {
                    o: {
                        a: 0,
                        k: 100
                    },
                    or: {
                        a: 0,
                        k: [0, 0, 0]
                    },
                    a: {
                        a: 0,
                        k: [55, 55, 0]
                    },
                    p: {
                        s: !0,
                        x: {
                            a: 0,
                            k: 796.526
                        },
                        y: {
                            a: 0,
                            k: 645
                        }
                    },
                    rx: {
                        a: 0,
                        k: 0
                    },
                    ry: {
                        a: 0,
                        k: 0
                    },
                    rz: {
                        a: 0,
                        k: 0
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100]
                    }
                },
                shapes: [{
                    ty: "gr",
                    nm: "kp2-03 shape group",
                    it: [{
                        ty: "rc",
                        s: {
                            a: 0,
                            k: [110, 110]
                        },
                        r: {
                            a: 0,
                            k: 0
                        },
                        p: {
                            a: 0,
                            k: [469, 186]
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "gf",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        g: {
                            p: 3,
                            k: {
                                a: 0,
                                k: [0, .6, .47843137254901963, .42745098039215684, .3076, .6509803921568628, .5176470588235295, .4588235294117647, 1, .7490196078431373, .6, .5254901960784314]
                            }
                        },
                        t: 1,
                        s: {
                            a: 0,
                            k: [414, 186]
                        },
                        e: {
                            a: 0,
                            k: [524, 186]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-414, -131]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }],
                op: 200
            }, {
                ty: 4,
                nm: "kp2-03",
                ip: 0,
                st: 0,
                ind: 12,
                hix: 6,
                ks: {
                    o: {
                        a: 0,
                        k: 100
                    },
                    or: {
                        a: 0,
                        k: [0, 0, 0]
                    },
                    a: {
                        a: 0,
                        k: [55, 55, 0]
                    },
                    p: {
                        s: !0,
                        x: {
                            a: 0,
                            k: 650.526
                        },
                        y: {
                            a: 0,
                            k: 645
                        }
                    },
                    rx: {
                        a: 0,
                        k: 0
                    },
                    ry: {
                        a: 0,
                        k: 0
                    },
                    rz: {
                        a: 0,
                        k: 0
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100]
                    }
                },
                shapes: [{
                    ty: "gr",
                    nm: "kp2-03 shape group",
                    it: [{
                        ty: "rc",
                        s: {
                            a: 0,
                            k: [110, 110]
                        },
                        r: {
                            a: 0,
                            k: 0
                        },
                        p: {
                            a: 0,
                            k: [323, 186]
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "gf",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        g: {
                            p: 3,
                            k: {
                                a: 0,
                                k: [0, .7490196078431373, .6, .5254901960784314, .6924, .6509803921568628, .5176470588235295, .4588235294117647, 1, .6, .47843137254901963, .42745098039215684]
                            }
                        },
                        t: 1,
                        s: {
                            a: 0,
                            k: [268, 186]
                        },
                        e: {
                            a: 0,
                            k: [378, 186]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-268, -131]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }],
                op: 200
            }, {
                ty: 4,
                nm: "glasses",
                ip: 0,
                st: 0,
                ind: 11,
                hix: 14,
                ks: {
                    o: {
                        a: 0,
                        k: 100
                    },
                    or: {
                        a: 0,
                        k: [0, 0, 0]
                    },
                    a: {
                        a: 0,
                        k: [212.79249572753906, 69.60603332519531, 0]
                    },
                    p: {
                        s: !0,
                        x: {
                            a: 0,
                            k: 275
                        },
                        y: {
                            a: 0,
                            k: 354.268
                        }
                    },
                    rx: {
                        a: 0,
                        k: 0
                    },
                    ry: {
                        a: 0,
                        k: 0
                    },
                    rz: {
                        a: 0,
                        k: 0
                    },
                    s: {
                        a: 1,
                        k: [{
                            t: 0,
                            s: [0, 0],
                            e: [0, 0],
                            i: {
                                x: [1, 1],
                                y: [1, 1]
                            },
                            o: {
                                x: [0, 0],
                                y: [0, 0]
                            }
                        }, {
                            t: 60,
                            s: [0, 0],
                            e: [89.9, 89.9],
                            i: {
                                x: [.265, .265],
                                y: [1.5, 1.5]
                            },
                            o: {
                                x: [.68, .68],
                                y: [-.55, -.55]
                            }
                        }, {
                            t: 90
                        }]
                    }
                },
                shapes: [{
                    ty: "gr",
                    nm: "glasses shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [596.16, 467.068],
                                    [596, 461.78499999999997],
                                    [596, 460.41799999999995],
                                    [594.578, 460.18699999999995],
                                    [568.1709999999999, 455.13499999999993],
                                    [509.39199999999994, 447.14199999999994],
                                    [508.5779999999999, 447.14399999999995],
                                    [459.9939999999999, 451.5199999999999],
                                    [458.43799999999993, 451.72599999999994],
                                    [432.45399999999995, 456.54099999999994],
                                    [403.53599999999994, 461.6959999999999],
                                    [383.99999999999994, 462.63499999999993],
                                    [364.46399999999994, 461.6959999999999],
                                    [335.54599999999994, 456.54099999999994],
                                    [309.56199999999995, 451.72599999999994],
                                    [308.006, 451.5199999999999],
                                    [259.42199999999997, 447.14399999999995],
                                    [258.60799999999995, 447.14199999999994],
                                    [199.82899999999995, 455.13499999999993],
                                    [173.42199999999994, 460.18699999999995],
                                    [172, 460.418],
                                    [172, 461.785],
                                    [171.84, 467.06800000000004],
                                    [174.898, 486.15400000000005],
                                    [179.656, 491.45700000000005],
                                    [188.348, 504.15200000000004],
                                    [207.774, 557.7860000000001],
                                    [228.666, 576.725],
                                    [275.753, 586.354],
                                    [296.66999999999996, 584.9110000000001],
                                    [335.85699999999997, 566.2080000000001],
                                    [360.388, 531.47],
                                    [360.411, 531.424],
                                    [365.183, 517.423],
                                    [372.29, 499.56600000000003],
                                    [381.163, 496.528],
                                    [386.836, 496.528],
                                    [395.709, 499.56600000000003],
                                    [402.81600000000003, 517.423],
                                    [407.588, 531.424],
                                    [407.61100000000005, 531.47],
                                    [432.14200000000005, 566.2080000000001],
                                    [471.32900000000006, 584.9110000000001],
                                    [492.2460000000001, 586.354],
                                    [539.3330000000001, 576.725],
                                    [560.2250000000001, 557.7860000000001],
                                    [579.6510000000002, 504.15200000000004],
                                    [588.3430000000002, 491.45700000000005],
                                    [593.1010000000002, 486.15400000000005]
                                ],
                                i: [
                                    [.31100000000003547, 7.037000000000035],
                                    [0, 1.6680000000000064],
                                    [0, 0],
                                    [0, 0],
                                    [8.650000000000091, 1.781000000000006],
                                    [19.958999999999946, 0],
                                    [.2720000000000482, -.0010000000000331966],
                                    [15.906000000000006, -2.108000000000004],
                                    [0, 0],
                                    [8.461999999999989, -1.7959999999999923],
                                    [9.716999999999985, -1.079999999999984],
                                    [6.759999999999991, .06299999999998818],
                                    [6.245999999999981, .6940000000000168],
                                    [9.439999999999998, 2.002999999999986],
                                    [8.771999999999991, 1.1619999999999777],
                                    [0, 0],
                                    [16.230000000000018, .08899999999999864],
                                    [.2720000000000482, 0],
                                    [19.089, -3.930000000000007],
                                    [8.813000000000017, -1.4300000000000068],
                                    [0, 0],
                                    [0, 0],
                                    [.08199999999999363, -1.8590000000000373],
                                    [-3.6910000000000025, -4.771999999999991],
                                    [-1.7270000000000039, -1.7970000000000255],
                                    [-1.2319999999999993, -4.935000000000002],
                                    [-8.298999999999978, -17.204000000000065],
                                    [-10.103000000000009, -4.770999999999958],
                                    [-14.757999999999981, 0],
                                    [-6.137999999999977, .8310000000000173],
                                    [-11.187000000000012, 10.528999999999996],
                                    [-7.896999999999991, 15.379000000000019],
                                    [0, 0],
                                    [-1.295000000000016, 4.659999999999968],
                                    [-3.6210000000000377, 5.315999999999974],
                                    [-3.7210000000000036, -.07699999999999818],
                                    [-1.8899999999999864, .03899999999998727],
                                    [-1.7860000000000014, -2.622000000000014],
                                    [-1.79200000000003, -6.449999999999989],
                                    [-2.1370000000000005, -4.5219999999999345],
                                    [0, 0],
                                    [-8.838999999999999, -8.32000000000005],
                                    [-15.182999999999993, -2.05499999999995],
                                    [-7.6580000000000155, 0],
                                    [-15.572999999999979, 7.356999999999971],
                                    [-3.761000000000081, 7.794999999999959],
                                    [-4.591000000000008, 18.38499999999999],
                                    [-3.66700000000003, 3.8149999999999977],
                                    [-1.400000000000091, 1.8100000000000023]
                                ],
                                o: [
                                    [-.08199999999999363, -1.8589999999999804],
                                    [0, 0],
                                    [0, 0],
                                    [-8.812999999999988, -1.4289999999999736],
                                    [-19.089000000000055, -3.930000000000007],
                                    [-.271000000000015, 0],
                                    [-16.230000000000018, .08899999999999864],
                                    [0, 0],
                                    [-8.771999999999991, 1.1619999999999777],
                                    [-9.439999999999998, 2.002999999999986],
                                    [-6.245999999999981, .6940000000000168],
                                    [-6.759999999999991, .06299999999998818],
                                    [-9.716999999999985, -1.079999999999984],
                                    [-8.461999999999989, -1.7959999999999923],
                                    [0, 0],
                                    [-15.906000000000006, -2.108000000000004],
                                    [-.27199999999999136, -.0009999999999763531],
                                    [-19.959000000000003, 0],
                                    [-8.650000000000006, 1.781000000000006],
                                    [0, 0],
                                    [0, 0],
                                    [0, 1.6680000000000064],
                                    [-.31100000000000705, 7.036999999999978],
                                    [1.4000000000000057, 1.8100000000000023],
                                    [3.6670000000000016, 3.8149999999999977],
                                    [4.591000000000008, 18.38499999999999],
                                    [3.759999999999991, 7.794999999999959],
                                    [15.574000000000012, 7.356999999999971],
                                    [7.6580000000000155, 0],
                                    [15.182999999999993, -2.05600000000004],
                                    [8.838999999999999, -8.32000000000005],
                                    [0, 0],
                                    [2.137999999999977, -4.522000000000048],
                                    [1.7919999999999732, -6.449000000000012],
                                    [1.7869999999999777, -2.622000000000014],
                                    [1.8899999999999864, .03899999999998727],
                                    [3.7210000000000036, -.07600000000002183],
                                    [3.622000000000014, 5.315999999999974],
                                    [1.295000000000016, 4.659999999999968],
                                    [0, 0],
                                    [7.896999999999991, 15.379000000000019],
                                    [11.185999999999979, 10.529999999999973],
                                    [6.137999999999977, .8310000000000173],
                                    [14.757999999999981, 0],
                                    [10.101999999999975, -4.772000000000048],
                                    [8.298999999999978, -17.20399999999995],
                                    [1.231999999999971, -4.935000000000002],
                                    [1.7269999999999754, -1.7959999999999923],
                                    [3.6909999999998035, -4.772000000000048]
                                ]
                            }
                        }
                    }, {
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [343.017, 536.141],
                                    [303.342, 570.646],
                                    [248.415, 572.0699999999999],
                                    [226.56799999999998, 561.026],
                                    [213.51899999999998, 541.106],
                                    [203.89199999999997, 488.53999999999996],
                                    [221.14499999999998, 466.93999999999994],
                                    [253.40499999999997, 460.45399999999995],
                                    [282.03499999999997, 458.62699999999995],
                                    [310.25899999999996, 461.05999999999995],
                                    [354.282, 483.29099999999994]
                                ],
                                i: [
                                    [13.663999999999987, -26.581999999999937],
                                    [17.633000000000038, -5.984000000000037],
                                    [20.015000000000015, 4.471000000000004],
                                    [6, 5.430999999999926],
                                    [2.859000000000009, 7.968999999999937],
                                    [-.8819999999999766, 15.100999999999999],
                                    [-11.025000000000006, 4.549000000000035],
                                    [-9.387, .992999999999995],
                                    [-8.204999999999984, .04899999999997817],
                                    [-8.543000000000006, -1.6990000000000123],
                                    [-5.298000000000002, -10.24799999999999]
                                ],
                                o: [
                                    [-8.692999999999984, 16.910999999999945],
                                    [-15.918999999999983, 5.40300000000002],
                                    [-8.49600000000001, -1.8980000000000246],
                                    [-5.799000000000007, -5.249000000000024],
                                    [-7.449999999999989, -20.761999999999944],
                                    [.5840000000000032, -9.98599999999999],
                                    [10.018, -4.132999999999981],
                                    [11.327999999999975, -1.197999999999979],
                                    [10.449000000000012, -.06200000000001182],
                                    [24.737000000000023, 4.918999999999983],
                                    [5.662000000000035, 10.956000000000074]
                                ]
                            }
                        }
                    }, {
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [554.481, 541.105],
                                    [541.432, 561.025],
                                    [519.585, 572.069],
                                    [464.658, 570.645],
                                    [424.983, 536.14],
                                    [413.72, 483.28999999999996],
                                    [457.74300000000005, 461.05899999999997],
                                    [485.96700000000004, 458.626],
                                    [514.5970000000001, 460.453],
                                    [546.8570000000001, 466.93899999999996],
                                    [564.1100000000001, 488.539]
                                ],
                                i: [
                                    [7.451000000000022, -20.760999999999967],
                                    [5.798999999999978, -5.247999999999934],
                                    [8.495999999999981, -1.8969999999999345],
                                    [15.91900000000004, 5.40300000000002],
                                    [8.69300000000004, 16.910999999999945],
                                    [-5.664000000000044, 10.956000000000017],
                                    [-24.737000000000023, 4.918999999999983],
                                    [-10.449000000000012, -.06200000000001182],
                                    [-11.328000000000031, -1.1970000000000027],
                                    [-10.018000000000029, -4.132999999999981],
                                    [-.5850000000000364, -9.986000000000047]
                                ],
                                o: [
                                    [-2.8600000000000136, 7.970000000000027],
                                    [-6, 5.43100000000004],
                                    [-20.01400000000001, 4.471000000000004],
                                    [-17.634000000000015, -5.985000000000014],
                                    [-13.663999999999987, -26.581999999999994],
                                    [5.2970000000000255, -10.24799999999999],
                                    [8.541999999999973, -1.6990000000000123],
                                    [8.204999999999984, .04899999999997817],
                                    [9.387000000000057, .992999999999995],
                                    [11.024999999999977, 4.548999999999978],
                                    [.8809999999998581, 15.100999999999999]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [.09803921568627451, .09803921568627451, .09803921568627451, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-171.207, -447.142]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }],
                op: 200
            }, {
                ty: 4,
                nm: "closed",
                ip: 0,
                st: 0,
                ind: 10,
                hix: 7,
                ks: {
                    o: {
                        a: 1,
                        k: [{
                            t: 0,
                            s: [100],
                            e: [100],
                            i: {
                                x: [1],
                                y: [1]
                            },
                            o: {
                                x: [0],
                                y: [0]
                            }
                        }, {
                            t: 60,
                            s: [100],
                            e: [0],
                            i: {
                                x: [.515],
                                y: [.955]
                            },
                            o: {
                                x: [.455],
                                y: [.03]
                            }
                        }, {
                            t: 70,
                            s: [0],
                            e: [0],
                            i: {
                                x: [1],
                                y: [1]
                            },
                            o: {
                                x: [0],
                                y: [0]
                            }
                        }, {
                            t: 124,
                            s: [0],
                            e: [100],
                            i: {
                                x: [.515],
                                y: [.955]
                            },
                            o: {
                                x: [.455],
                                y: [.03]
                            }
                        }, {
                            t: 138,
                            s: [100],
                            e: [0],
                            i: {
                                x: [.515],
                                y: [.955]
                            },
                            o: {
                                x: [.455],
                                y: [.03]
                            }
                        }, {
                            t: 153
                        }]
                    },
                    or: {
                        a: 0,
                        k: [0, 0, 0]
                    },
                    a: {
                        a: 0,
                        k: [138.74200439453125, 30.85400390625, 0]
                    },
                    p: {
                        s: !0,
                        x: {
                            a: 0,
                            k: 275
                        },
                        y: {
                            a: 0,
                            k: 332.024
                        }
                    },
                    rx: {
                        a: 0,
                        k: 0
                    },
                    ry: {
                        a: 0,
                        k: 0
                    },
                    rz: {
                        a: 0,
                        k: 0
                    },
                    s: {
                        a: 1,
                        k: [{
                            t: 0,
                            s: [0, 0],
                            e: [0, 0],
                            i: {
                                x: [1, 1],
                                y: [1, 1]
                            },
                            o: {
                                x: [0, 0],
                                y: [0, 0]
                            }
                        }, {
                            t: 30,
                            s: [0, 0],
                            e: [89.9, 89.9],
                            i: {
                                x: [.265, .265],
                                y: [1.5, 1.5]
                            },
                            o: {
                                x: [.68, .68],
                                y: [-.55, -.55]
                            }
                        }, {
                            t: 60
                        }]
                    }
                },
                shapes: [{
                    ty: "gr",
                    nm: "closed shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [428.204, 447.276],
                                    [441.68600000000004, 465.963],
                                    [453.761, 465.918],
                                    [458.317, 465.464],
                                    [463.675, 465.888],
                                    [502.23400000000004, 464.80899999999997],
                                    [513.3340000000001, 460.234],
                                    [521.902, 442.248]
                                ],
                                i: [
                                    [3.4329999999999927, 1.450999999999965],
                                    [-8.927000000000021, -1.6970000000000027],
                                    [-4.0090000000000146, .5169999999999959],
                                    [-1.5269999999999868, .03000000000002956],
                                    [-1.7800000000000296, -.2189999999999941],
                                    [-12.538000000000011, 3.1720000000000255],
                                    [-3.347000000000037, 2.228999999999985],
                                    [.5109999999999673, 7.301999999999964]
                                ],
                                o: [
                                    [-1.4159999999999968, 9.136000000000024],
                                    [3.9710000000000036, .7549999999999955],
                                    [1.51400000000001, -.19499999999999318],
                                    [1.7930000000000064, -.03500000000002501],
                                    [12.836000000000013, 1.5810000000000173],
                                    [3.899000000000001, -.9870000000000232],
                                    [6.148000000000025, -4.093000000000018],
                                    [-42.37500000000006, 25.925999999999988]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "gf",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        g: {
                            p: 3,
                            k: {
                                a: 0,
                                k: [0, .6, .47843137254901963, .42745098039215684, .3076, .6509803921568628, .5176470588235295, .4588235294117647, 1, .7490196078431373, .6, .5254901960784314]
                            }
                        },
                        t: 1,
                        s: {
                            a: 0,
                            k: [414, 186]
                        },
                        e: {
                            a: 0,
                            k: [524, 186]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-245.258, -406.467]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "closed shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [522.206, 438.067],
                                    [465.214, 412.189],
                                    [427.592, 437.567],
                                    [428.276, 447.176],
                                    [428.214, 447.18899999999996],
                                    [428.204, 447.27599999999995],
                                    [521.902, 442.24699999999996],
                                    [521.902, 442.23999999999995]
                                ],
                                i: [
                                    [.5359999999999445, 1.3899999999999864],
                                    [40.867999999999995, -5.722000000000037],
                                    [9.704000000000008, -17.166999999999973],
                                    [-2.132000000000005, -2.7759999999999536],
                                    [0, 0],
                                    [.0049999999999954525, -.028999999999996362],
                                    [-42.374000000000024, 25.927999999999997],
                                    [0, .0020000000000095497]
                                ],
                                o: [
                                    [-3.316000000000031, -8.595000000000027],
                                    [0, 0],
                                    [-1.7230000000000132, 3.0470000000000255],
                                    [0, 0],
                                    [-.0049999999999954525, .028999999999996362],
                                    [3.4329999999999927, 1.4510000000000218],
                                    [0, -.0020000000000095497],
                                    [.7089999999999463, -1.2559999999999718]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "gf",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        g: {
                            p: 3,
                            k: {
                                a: 0,
                                k: [0, .7490196078431373, .6, .5254901960784314, .6924, .6509803921568628, .5176470588235295, .4588235294117647, 1, .6, .47843137254901963, .42745098039215684]
                            }
                        },
                        t: 1,
                        s: {
                            a: 0,
                            k: [474.5, 411.2859]
                        },
                        e: {
                            a: 0,
                            k: [474.5, 455.6378]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-245.258, -406.467]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "closed shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [246.098, 442.247],
                                    [254.66600000000003, 460.233],
                                    [265.766, 464.808],
                                    [304.32500000000005, 465.887],
                                    [309.68300000000005, 465.463],
                                    [314.23900000000003, 465.91700000000003],
                                    [326.314, 465.96200000000005],
                                    [339.79600000000005, 447.27500000000003]
                                ],
                                i: [
                                    [42.375, 25.926999999999964],
                                    [-6.148000000000025, -4.093000000000018],
                                    [-3.899000000000001, -.9869999999999663],
                                    [-12.837000000000046, 1.5810000000000173],
                                    [-1.7930000000000064, -.03500000000002501],
                                    [-1.51400000000001, -.19499999999999318],
                                    [-3.9710000000000036, .7549999999999955],
                                    [1.4149999999999636, 9.136000000000024]
                                ],
                                o: [
                                    [-.5109999999999957, 7.302000000000021],
                                    [3.3470000000000084, 2.228999999999985],
                                    [12.538000000000011, 3.173000000000002],
                                    [1.7799999999999727, -.2189999999999941],
                                    [1.5269999999999868, .029999999999972715],
                                    [4.0090000000000146, .5179999999999723],
                                    [8.927000000000021, -1.6970000000000027],
                                    [-3.4330000000000496, 1.4519999999999413]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "gf",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        g: {
                            p: 3,
                            k: {
                                a: 0,
                                k: [0, .7490196078431373, .6, .5254901960784314, .6924, .6509803921568628, .5176470588235295, .4588235294117647, 1, .6, .47843137254901963, .42745098039215684]
                            }
                        },
                        t: 1,
                        s: {
                            a: 0,
                            k: [268, 186]
                        },
                        e: {
                            a: 0,
                            k: [378, 186]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-245.258, -406.467]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "closed shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [246.099, 442.24],
                                    [246.099, 442.247],
                                    [339.79699999999997, 447.276],
                                    [339.787, 447.189],
                                    [339.72499999999997, 447.17600000000004],
                                    [340.409, 437.56700000000006],
                                    [302.787, 412.1890000000001],
                                    [245.795, 438.06700000000006]
                                ],
                                i: [
                                    [-.7099999999999795, -1.2560000000000286],
                                    [0, -.0020000000000095497],
                                    [-3.4329999999999927, 1.4510000000000218],
                                    [.0049999999999954525, .028999999999996362],
                                    [0, 0],
                                    [1.7229999999999563, 3.0469999999999686],
                                    [0, 0],
                                    [3.3149999999999977, -8.593999999999994]
                                ],
                                o: [
                                    [0, .0020000000000095497],
                                    [42.375, 25.92700000000002],
                                    [-.0049999999999954525, -.028999999999996362],
                                    [0, 0],
                                    [2.132000000000005, -2.7760000000000105],
                                    [-9.704000000000008, -17.166999999999973],
                                    [-40.867999999999995, -5.721000000000004],
                                    [-.5369999999999777, 1.3899999999999295]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "gf",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        g: {
                            p: 3,
                            k: {
                                a: 0,
                                k: [0, .7490196078431373, .6, .5254901960784314, .6924, .6509803921568628, .5176470588235295, .4588235294117647, 1, .6, .47843137254901963, .42745098039215684]
                            }
                        },
                        t: 1,
                        s: {
                            a: 0,
                            k: [2103.5, 411.2859]
                        },
                        e: {
                            a: 0,
                            k: [2103.5, 455.6378]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-245.258, -406.467]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }],
                op: 200
            }, {
                ty: 4,
                nm: "halfclosed",
                ip: 0,
                st: 0,
                ind: 9,
                hix: 8,
                ks: {
                    o: {
                        a: 1,
                        k: [{
                            t: 0,
                            s: [100],
                            e: [100],
                            i: {
                                x: [1],
                                y: [1]
                            },
                            o: {
                                x: [0],
                                y: [0]
                            }
                        }, {
                            t: 65,
                            s: [100],
                            e: [0],
                            i: {
                                x: [.515],
                                y: [.955]
                            },
                            o: {
                                x: [.455],
                                y: [.03]
                            }
                        }, {
                            t: 75,
                            s: [0],
                            e: [0],
                            i: {
                                x: [1],
                                y: [1]
                            },
                            o: {
                                x: [0],
                                y: [0]
                            }
                        }, {
                            t: 122,
                            s: [0],
                            e: [100],
                            i: {
                                x: [.515],
                                y: [.955]
                            },
                            o: {
                                x: [.455],
                                y: [.03]
                            }
                        }, {
                            t: 132,
                            s: [100],
                            e: [100],
                            i: {
                                x: [1],
                                y: [1]
                            },
                            o: {
                                x: [0],
                                y: [0]
                            }
                        }, {
                            t: 145,
                            s: [100],
                            e: [0],
                            i: {
                                x: [.515],
                                y: [.955]
                            },
                            o: {
                                x: [.455],
                                y: [.03]
                            }
                        }, {
                            t: 155
                        }]
                    },
                    or: {
                        a: 0,
                        k: [0, 0, 0]
                    },
                    a: {
                        a: 0,
                        k: [138.74102783203125, 30.756546020507812, 0]
                    },
                    p: {
                        s: !0,
                        x: {
                            a: 0,
                            k: 275
                        },
                        y: {
                            a: 0,
                            k: 332.024
                        }
                    },
                    rx: {
                        a: 0,
                        k: 0
                    },
                    ry: {
                        a: 0,
                        k: 0
                    },
                    rz: {
                        a: 0,
                        k: 0
                    },
                    s: {
                        a: 1,
                        k: [{
                            t: 0,
                            s: [0, 0],
                            e: [0, 0],
                            i: {
                                x: [1, 1],
                                y: [1, 1]
                            },
                            o: {
                                x: [0, 0],
                                y: [0, 0]
                            }
                        }, {
                            t: 30,
                            s: [0, 0],
                            e: [89.9, 89.9],
                            i: {
                                x: [.265, .265],
                                y: [1.5, 1.5]
                            },
                            o: {
                                x: [.68, .68],
                                y: [-.55, -.55]
                            }
                        }, {
                            t: 60
                        }]
                    }
                },
                shapes: [{
                    ty: "gr",
                    nm: "halfclosed shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [428.213, 307.585],
                                    [441.685, 326.359],
                                    [453.76, 326.31399999999996],
                                    [458.316, 325.85999999999996],
                                    [463.674, 326.28399999999993],
                                    [502.23299999999995, 325.2049999999999],
                                    [513.333, 320.62999999999994],
                                    [521.901, 302.63699999999994],
                                    [522.2049999999999, 298.46399999999994],
                                    [465.2129999999999, 272.58599999999996],
                                    [427.5909999999999, 297.96399999999994],
                                    [428.2749999999999, 307.5729999999999]
                                ],
                                i: [
                                    [0, 0],
                                    [-8.95599999999996, -1.7019999999999982],
                                    [-4.0090000000000146, .5169999999999959],
                                    [-1.5269999999999868, .03000000000002956],
                                    [-1.7800000000000296, -.2189999999999941],
                                    [-12.537999999999954, 3.1720000000000255],
                                    [-3.347000000000037, 2.228999999999985],
                                    [.5130000000000337, 7.305000000000007],
                                    [.5360000000000582, 1.3899999999999864],
                                    [40.867999999999995, -5.722000000000037],
                                    [9.704000000000008, -17.166999999999973],
                                    [-2.132000000000005, -2.7759999999999536]
                                ],
                                o: [
                                    [-1.4680000000000177, 9.173999999999978],
                                    [3.9710000000000036, .7549999999999955],
                                    [1.5149999999999864, -.19600000000002638],
                                    [1.7930000000000064, -.03500000000002501],
                                    [12.836000000000013, 1.5810000000000173],
                                    [3.899000000000001, -.9870000000000232],
                                    [6.149999999999977, -4.095000000000027],
                                    [.7089999999999463, -1.2559999999999718],
                                    [-3.316000000000031, -8.595000000000027],
                                    [0, 0],
                                    [-1.7230000000000132, 3.0470000000000255],
                                    [0, 0]
                                ]
                            }
                        }
                    }, {
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [440.609, 305.197],
                                    [432.356, 306.254],
                                    [441.61, 302.947],
                                    [499.116, 300.54200000000003],
                                    [508, 305.583],
                                    [452.718, 305.41400000000004]
                                ],
                                i: [
                                    [3.9950000000000045, -.132000000000005],
                                    [2.9119999999999777, -.5740000000000123],
                                    [-3.0780000000000314, 1.3269999999999982],
                                    [-18.238999999999976, -8.217000000000041],
                                    [-2.875, -2],
                                    [18.281999999999982, -.8310000000000173]
                                ],
                                o: [
                                    [-2.8729999999999905, .2330000000000041],
                                    [3.1259999999999764, -.7810000000000059],
                                    [18.468000000000018, -7.958000000000027],
                                    [3.0400000000000205, 1.3700000000000045],
                                    [-18, 8],
                                    [-3.994000000000028, -.22900000000004184]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "gf",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        g: {
                            p: 3,
                            k: {
                                a: 0,
                                k: [0, .6, .47843137254901963, .42745098039215684, .3076, .6509803921568628, .5176470588235295, .4588235294117647, 1, .7490196078431373, .6, .5254901960784314]
                            }
                        },
                        t: 1,
                        s: {
                            a: 0,
                            k: [414, 186]
                        },
                        e: {
                            a: 0,
                            k: [524, 186]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-245.259, -266.864]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "halfclosed shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [440.879, 298.235],
                                    [440.817, 298.076],
                                    [457.69, 307.17600000000004],
                                    [451.044, 306.47800000000007],
                                    [450.865, 306.46600000000007],
                                    [449.454, 306.37500000000006],
                                    [449.211, 306.3620000000001],
                                    [447.89300000000003, 306.2970000000001],
                                    [447.653, 306.2870000000001],
                                    [446.36600000000004, 306.2430000000001],
                                    [446.15200000000004, 306.23700000000014],
                                    [444.85100000000006, 306.21200000000016],
                                    [444.71500000000003, 306.21000000000015],
                                    [438.17800000000005, 306.35700000000014],
                                    [438.1240000000001, 306.3600000000001],
                                    [437.07200000000006, 306.42700000000013],
                                    [436.92800000000005, 306.4370000000001],
                                    [436.0160000000001, 306.5070000000001],
                                    [435.8470000000001, 306.52100000000013],
                                    [435.0040000000001, 306.5960000000001],
                                    [434.8550000000001, 306.6100000000001],
                                    [434.0440000000001, 306.6920000000001],
                                    [433.9290000000001, 306.7040000000001],
                                    [433.1360000000001, 306.7940000000001],
                                    [433.06700000000006, 306.8020000000001],
                                    [432.2680000000001, 306.9020000000001]
                                ],
                                i: [
                                    [-4.093000000000018, 3.3309999999999604],
                                    [-.0009999999999763531, .05700000000001637],
                                    [0, 0],
                                    [2.1100000000000136, .15399999999999636],
                                    [.05999999999994543, .004000000000019099],
                                    [.464999999999975, .02600000000001046],
                                    [.08100000000001728, .003999999999962256],
                                    [.4329999999999927, .019000000000005457],
                                    [.07999999999998408, .002999999999985903],
                                    [.4230000000000018, .012000000000000455],
                                    [.07100000000002638, .0019999999999527063],
                                    [.4269999999999641, .005999999999971806],
                                    [.045000000000015916, .0010000000000331966],
                                    [1.9419999999999504, -.11199999999996635],
                                    [.01799999999997226, -.0009999999999763531],
                                    [.3420000000000414, -.02400000000000091],
                                    [.04800000000000182, -.002999999999985903],
                                    [.29599999999999227, -.024999999999977263],
                                    [.055999999999983174, -.0049999999999954525],
                                    [.2740000000000009, -.02600000000001046],
                                    [.04899999999997817, -.0049999999999954525],
                                    [.26200000000000045, -.02800000000002001],
                                    [.038000000000010914, -.004000000000019099],
                                    [.25499999999999545, -.029999999999972715],
                                    [.02199999999999136, -.002999999999985903],
                                    [.25499999999999545, -.03400000000004866]
                                ],
                                o: [
                                    [-.04399999999998272, -.045000000000015916],
                                    [4.677000000000021, 3.480000000000018],
                                    [-2.319000000000017, -.3190000000000168],
                                    [-.060000000000002274, -.004000000000019099],
                                    [-.4759999999999991, -.033999999999991815],
                                    [-.08100000000001728, -.0049999999999954525],
                                    [-.4449999999999932, -.024999999999977263],
                                    [-.07999999999998408, -.002999999999985903],
                                    [-.4350000000000023, -.016999999999995907],
                                    [-.07200000000000273, -.0020000000000095497],
                                    [-.4399999999999977, -.011000000000024102],
                                    [-.045000000000015916, -.0009999999999763531],
                                    [-2.406000000000006, -.02600000000001046],
                                    [-.01799999999997226, .0009999999999763531],
                                    [-.35899999999998045, .021000000000015007],
                                    [-.04899999999997817, .002999999999985903],
                                    [-.3120000000000118, .02199999999999136],
                                    [-.05700000000001637, .0049999999999954525],
                                    [-.2880000000000109, .02400000000000091],
                                    [-.05000000000001137, .0049999999999954525],
                                    [-.27899999999999636, .026999999999986812],
                                    [-.038000000000010914, .004000000000019099],
                                    [-.27300000000002456, .029999999999972715],
                                    [-.023000000000024556, .002999999999985903],
                                    [-.2769999999999868, .03300000000001546],
                                    [1.7239999999999327, -2.1010000000001128]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [.8470588235294118, .5058823529411764, .42745098039215684, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-245.259, -266.864]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "halfclosed shape group",
                    it: [{
                        ty: "el",
                        p: {
                            a: 0,
                            k: [477, 297]
                        },
                        s: {
                            a: 0,
                            k: [13, 13]
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [0, 0, 0, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-245.259, -266.864]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "halfclosed shape group",
                    it: [{
                        ty: "el",
                        p: {
                            a: 0,
                            k: [477, 297]
                        },
                        s: {
                            a: 0,
                            k: [30, 30]
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [.36470588235294116, .40784313725490196, .27058823529411763, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-245.259, -266.864]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "halfclosed shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [513.931, 298.563],
                                    [499.65900000000005, 288.21799999999996],
                                    [478.74600000000004, 283.18999999999994],
                                    [435.93800000000005, 297.8179999999999],
                                    [435.93800000000005, 298.17599999999993],
                                    [482.54300000000006, 314.12199999999996],
                                    [506.22900000000004, 310.013],
                                    [515.072, 304.269]
                                ],
                                i: [
                                    [0, 0],
                                    [4.76400000000001, 2.420000000000016],
                                    [7.273000000000025, 0],
                                    [1.8929999999999723, -1.6569999999999823],
                                    [-.10700000000002774, -.09899999999998954],
                                    [-31.18100000000004, -2.643000000000029],
                                    [-7.391999999999996, 3.4110000000000014],
                                    [-2.5979999999999563, 2.5979999999999563]
                                ],
                                o: [
                                    [-3.879000000000019, -4.434000000000026],
                                    [-6.485000000000014, -3.2930000000000064],
                                    [-25.295999999999992, 0],
                                    [-.11000000000001364, .09600000000000364],
                                    [1.75, 1.6120000000000232],
                                    [8.112000000000023, .6870000000000118],
                                    [3.048999999999978, -1.4069999999999823],
                                    [2.2830000000000155, -2.2819999999999823]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "gf",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        g: {
                            p: 2,
                            k: {
                                a: 0,
                                k: [0, .7019607843137254, .7019607843137254, .7019607843137254, 1, .9019607843137255, .9019607843137255, .9019607843137255]
                            }
                        },
                        t: 1,
                        s: {
                            a: 0,
                            k: [-2379.5701, 298.742]
                        },
                        e: {
                            a: 0,
                            k: [-2299.5701, 298.742]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-245.259, -266.864]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "halfclosed shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [339.725, 307.572],
                                    [340.40900000000005, 297.963],
                                    [302.78700000000003, 272.58500000000004],
                                    [245.79500000000004, 298.463],
                                    [246.09900000000005, 302.636],
                                    [254.66700000000006, 320.629],
                                    [265.76700000000005, 325.204],
                                    [304.326, 326.283],
                                    [309.684, 325.85900000000004],
                                    [314.24, 326.31300000000005],
                                    [326.315, 326.35800000000006],
                                    [339.787, 307.58400000000006]
                                ],
                                i: [
                                    [0, 0],
                                    [1.7229999999999563, 3.0469999999999686],
                                    [0, 0],
                                    [3.3149999999999977, -8.593999999999994],
                                    [-.7090000000000032, -1.2560000000000286],
                                    [-6.1510000000000105, -4.09499999999997],
                                    [-3.8979999999999677, -.9869999999999663],
                                    [-12.836999999999989, 1.5810000000000173],
                                    [-1.7930000000000064, -.03500000000002501],
                                    [-1.51400000000001, -.19499999999999318],
                                    [-3.9710000000000036, .7549999999999955],
                                    [1.4680000000000177, 9.173999999999978]
                                ],
                                o: [
                                    [2.132000000000005, -2.7760000000000105],
                                    [-9.704000000000008, -17.166999999999973],
                                    [-40.867999999999995, -5.721000000000004],
                                    [-.5360000000000014, 1.3899999999999864],
                                    [-.51400000000001, 7.305000000000007],
                                    [3.3479999999999848, 2.228999999999985],
                                    [12.538000000000011, 3.173000000000002],
                                    [1.7799999999999727, -.2189999999999941],
                                    [1.5269999999999868, .029999999999972715],
                                    [4.0090000000000146, .5179999999999723],
                                    [8.956000000000017, -1.7019999999999982],
                                    [0, 0]
                                ]
                            }
                        }
                    }, {
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [315.282, 305.416],
                                    [260, 305.585],
                                    [268.884, 300.544],
                                    [326.39, 302.94899999999996],
                                    [335.644, 306.256],
                                    [327.391, 305.19899999999996]
                                ],
                                i: [
                                    [3.994000000000028, -.23099999999999454],
                                    [18, 8],
                                    [-3.0400000000000205, 1.3689999999999714],
                                    [-18.46799999999996, -7.958999999999946],
                                    [-3.125, -.7820000000000391],
                                    [2.8729999999999905, .2330000000000041]
                                ],
                                o: [
                                    [-18.281999999999982, -.8310000000000173],
                                    [2.875, -2],
                                    [18.238999999999976, -8.218000000000018],
                                    [3.0779999999999745, 1.3260000000000218],
                                    [-2.9110000000000014, -.5740000000000123],
                                    [-3.9950000000000045, -.1339999999999577]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "gf",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        g: {
                            p: 3,
                            k: {
                                a: 0,
                                k: [0, .7490196078431373, .6, .5254901960784314, .6924, .6509803921568628, .5176470588235295, .4588235294117647, 1, .6, .47843137254901963, .42745098039215684]
                            }
                        },
                        t: 1,
                        s: {
                            a: 0,
                            k: [245.4653, 299.6074]
                        },
                        e: {
                            a: 0,
                            k: [341.5347, 299.6074]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-245.259, -266.864]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "halfclosed shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [327.121, 298.235],
                                    [327.183, 298.076],
                                    [310.31, 307.17600000000004],
                                    [316.956, 306.47800000000007],
                                    [317.135, 306.46600000000007],
                                    [318.546, 306.37500000000006],
                                    [318.789, 306.3620000000001],
                                    [320.10699999999997, 306.2970000000001],
                                    [320.347, 306.2870000000001],
                                    [321.63399999999996, 306.2430000000001],
                                    [321.84799999999996, 306.23700000000014],
                                    [323.14899999999994, 306.21200000000016],
                                    [323.28499999999997, 306.21000000000015],
                                    [329.82199999999995, 306.35700000000014],
                                    [329.8759999999999, 306.3600000000001],
                                    [330.92799999999994, 306.42700000000013],
                                    [331.07199999999995, 306.4370000000001],
                                    [331.9839999999999, 306.5070000000001],
                                    [332.1529999999999, 306.52100000000013],
                                    [332.9959999999999, 306.5960000000001],
                                    [333.1449999999999, 306.6100000000001],
                                    [333.9559999999999, 306.6920000000001],
                                    [334.0709999999999, 306.7040000000001],
                                    [334.8639999999999, 306.7940000000001],
                                    [334.93299999999994, 306.8020000000001],
                                    [335.7319999999999, 306.9020000000001]
                                ],
                                i: [
                                    [4.093000000000018, 3.3309999999999604],
                                    [.0009999999999763531, .05700000000001637],
                                    [0, 0],
                                    [-2.1100000000000136, .15399999999999636],
                                    [-.05999999999994543, .004000000000019099],
                                    [-.464999999999975, .02600000000001046],
                                    [-.08100000000001728, .003999999999962256],
                                    [-.4329999999999927, .019000000000005457],
                                    [-.07999999999998408, .002999999999985903],
                                    [-.4230000000000018, .012000000000000455],
                                    [-.07100000000002638, .0019999999999527063],
                                    [-.4269999999999641, .005999999999971806],
                                    [-.045000000000015916, .0010000000000331966],
                                    [-1.9419999999999504, -.11199999999996635],
                                    [-.01799999999997226, -.0009999999999763531],
                                    [-.3420000000000414, -.02400000000000091],
                                    [-.04800000000000182, -.002999999999985903],
                                    [-.29599999999999227, -.024999999999977263],
                                    [-.055999999999983174, -.0049999999999954525],
                                    [-.2740000000000009, -.02600000000001046],
                                    [-.04899999999997817, -.0049999999999954525],
                                    [-.26200000000000045, -.02800000000002001],
                                    [-.038000000000010914, -.004000000000019099],
                                    [-.25499999999999545, -.029999999999972715],
                                    [-.02199999999999136, -.002999999999985903],
                                    [-.25499999999999545, -.03400000000004866]
                                ],
                                o: [
                                    [.04399999999998272, -.045000000000015916],
                                    [-4.677000000000021, 3.480000000000018],
                                    [2.319000000000017, -.3190000000000168],
                                    [.060000000000002274, -.004000000000019099],
                                    [.4759999999999991, -.033999999999991815],
                                    [.08100000000001728, -.0049999999999954525],
                                    [.4449999999999932, -.024999999999977263],
                                    [.07999999999998408, -.002999999999985903],
                                    [.4350000000000023, -.016999999999995907],
                                    [.07200000000000273, -.0020000000000095497],
                                    [.4399999999999977, -.011000000000024102],
                                    [.045000000000015916, -.0009999999999763531],
                                    [2.406000000000006, -.02600000000001046],
                                    [.01799999999997226, .0009999999999763531],
                                    [.35899999999998045, .021000000000015007],
                                    [.04899999999997817, .002999999999985903],
                                    [.3120000000000118, .02199999999999136],
                                    [.05700000000001637, .0049999999999954525],
                                    [.2880000000000109, .02400000000000091],
                                    [.05000000000001137, .0049999999999954525],
                                    [.27899999999999636, .026999999999986812],
                                    [.038000000000010914, .004000000000019099],
                                    [.27300000000002456, .029999999999972715],
                                    [.023000000000024556, .002999999999985903],
                                    [.2769999999999868, .03300000000001546],
                                    [-1.7239999999999327, -2.1010000000001128]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [.8470588235294118, .5058823529411764, .42745098039215684, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-245.259, -266.864]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "halfclosed shape group",
                    it: [{
                        ty: "el",
                        p: {
                            a: 0,
                            k: [290, 297]
                        },
                        s: {
                            a: 0,
                            k: [13, 13]
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [0, 0, 0, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-245.259, -266.864]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "halfclosed shape group",
                    it: [{
                        ty: "el",
                        p: {
                            a: 0,
                            k: [290, 297]
                        },
                        s: {
                            a: 0,
                            k: [30, 30]
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [.36470588235294116, .40784313725490196, .27058823529411763, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-245.259, -266.864]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "halfclosed shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [254.069, 298.563],
                                    [268.341, 288.21799999999996],
                                    [289.254, 283.18999999999994],
                                    [332.062, 297.8179999999999],
                                    [332.062, 298.17599999999993],
                                    [285.457, 314.12199999999996],
                                    [261.771, 310.013],
                                    [252.92800000000003, 304.269]
                                ],
                                i: [
                                    [0, 0],
                                    [-4.76400000000001, 2.420000000000016],
                                    [-7.273000000000025, 0],
                                    [-1.8929999999999723, -1.6569999999999823],
                                    [.10700000000002774, -.09899999999998954],
                                    [31.18100000000004, -2.643000000000029],
                                    [7.391999999999996, 3.4110000000000014],
                                    [2.5979999999999848, 2.5979999999999563]
                                ],
                                o: [
                                    [3.8789999999999907, -4.434000000000026],
                                    [6.485000000000014, -3.2930000000000064],
                                    [25.295999999999992, 0],
                                    [.11000000000001364, .09600000000000364],
                                    [-1.75, 1.6120000000000232],
                                    [-8.112000000000023, .6870000000000118],
                                    [-3.048999999999978, -1.4069999999999823],
                                    [-2.2830000000000155, -2.2819999999999823]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "gf",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        g: {
                            p: 2,
                            k: {
                                a: 0,
                                k: [0, .7019607843137254, .7019607843137254, .7019607843137254, 1, .9019607843137255, .9019607843137255, .9019607843137255]
                            }
                        },
                        t: 1,
                        s: {
                            a: 0,
                            k: [-1112.5701, 298.742]
                        },
                        e: {
                            a: 0,
                            k: [-1032.5701, 298.742]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-245.259, -266.864]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }],
                op: 200
            }, {
                ty: 4,
                nm: "#eyesopen",
                ip: 0,
                st: 0,
                ind: 8,
                hix: 9,
                ks: {
                    o: {
                        a: 1,
                        k: [{
                            t: 0,
                            s: [100],
                            e: [0],
                            i: {
                                x: [.515],
                                y: [.955]
                            },
                            o: {
                                x: [.455],
                                y: [.03]
                            }
                        }, {
                            t: 60,
                            s: [0],
                            e: [0],
                            i: {
                                x: [1],
                                y: [1]
                            },
                            o: {
                                x: [0],
                                y: [0]
                            }
                        }, {
                            t: 69,
                            s: [0],
                            e: [100],
                            i: {
                                x: [.515],
                                y: [.955]
                            },
                            o: {
                                x: [.455],
                                y: [.03]
                            }
                        }, {
                            t: 79,
                            s: [100],
                            e: [100],
                            i: {
                                x: [1],
                                y: [1]
                            },
                            o: {
                                x: [0],
                                y: [0]
                            }
                        }, {
                            t: 120,
                            s: [100],
                            e: [0],
                            i: {
                                x: [.515],
                                y: [.955]
                            },
                            o: {
                                x: [.455],
                                y: [.03]
                            }
                        }, {
                            t: 130,
                            s: [0],
                            e: [0],
                            i: {
                                x: [1],
                                y: [1]
                            },
                            o: {
                                x: [0],
                                y: [0]
                            }
                        }, {
                            t: 148,
                            s: [0],
                            e: [100],
                            i: {
                                x: [.515],
                                y: [.955]
                            },
                            o: {
                                x: [.455],
                                y: [.03]
                            }
                        }, {
                            t: 157,
                            s: [100],
                            e: [100],
                            i: {
                                x: [1],
                                y: [1]
                            },
                            o: {
                                x: [0],
                                y: [0]
                            }
                        }, {
                            t: 170,
                            s: [100],
                            e: [0],
                            i: {
                                x: [.515],
                                y: [.955]
                            },
                            o: {
                                x: [.455],
                                y: [.03]
                            }
                        }, {
                            t: 180,
                            s: [0],
                            e: [100],
                            i: {
                                x: [.515],
                                y: [.955]
                            },
                            o: {
                                x: [.455],
                                y: [.03]
                            }
                        }, {
                            t: 190
                        }]
                    },
                    or: {
                        a: 0,
                        k: [0, 0, 0]
                    },
                    a: {
                        a: 0,
                        k: [140.34100341796875, 33.353492736816406, 0]
                    },
                    p: {
                        s: !0,
                        x: {
                            a: 0,
                            k: 275
                        },
                        y: {
                            a: 0,
                            k: 337.024
                        }
                    },
                    rx: {
                        a: 0,
                        k: 0
                    },
                    ry: {
                        a: 0,
                        k: 0
                    },
                    rz: {
                        a: 0,
                        k: 0
                    },
                    s: {
                        a: 1,
                        k: [{
                            t: 0,
                            s: [0, 0],
                            e: [0, 0],
                            i: {
                                x: [1, 1],
                                y: [1, 1]
                            },
                            o: {
                                x: [0, 0],
                                y: [0, 0]
                            }
                        }, {
                            t: 30,
                            s: [0, 0],
                            e: [89.9, 89.9],
                            i: {
                                x: [.265, .265],
                                y: [1.5, 1.5]
                            },
                            o: {
                                x: [.68, .68],
                                y: [-.55, -.55]
                            }
                        }, {
                            t: 60
                        }]
                    }
                },
                shapes: [{
                    ty: "gr",
                    nm: "#eyesopen shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [428.213, 168],
                                    [458.213, 186],
                                    [521.9010000000001, 163.051],
                                    [522.205, 158.878],
                                    [477.34000000000003, 132.09699999999998],
                                    [454.05400000000003, 137.30999999999997],
                                    [427.59000000000003, 158.378],
                                    [428.27400000000006, 167.987]
                                ],
                                i: [
                                    [0, 0],
                                    [-34, 7],
                                    [2.439999999999941, 34.68000000000001],
                                    [.5360000000000582, 1.3900000000000148],
                                    [31.362000000000023, -.08099999999998886],
                                    [7.314999999999998, -3.3389999999999986],
                                    [5.670000000000016, -10.031000000000006],
                                    [-2.132000000000005, -2.7760000000000105]
                                ],
                                o: [
                                    [0, 0],
                                    [0, 0],
                                    [.7089999999999463, -1.2560000000000002],
                                    [-2.961999999999989, -7.679000000000002],
                                    [-8.04000000000002, .020999999999986585],
                                    [-8.903999999999996, 4.063999999999993],
                                    [-1.7230000000000132, 3.046999999999997],
                                    [0, 0]
                                ]
                            }
                        }
                    }, {
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [432.268, 167.318],
                                    [440.87899999999996, 158.65],
                                    [440.88399999999996, 158.348],
                                    [478.388, 145.532],
                                    [496.71, 149.937],
                                    [509.214, 159],
                                    [510.214, 164],
                                    [502.467, 169.032],
                                    [481.716, 172.632],
                                    [457.341, 167.591],
                                    [456.71500000000003, 167.5],
                                    [452.67300000000006, 167.024]
                                ],
                                i: [
                                    [4.171000000000049, -.5460000000000207],
                                    [-4.093000000000018, 3.3310000000000173],
                                    [-.09300000000001774, .08099999999998886],
                                    [-22.162000000000035, 0],
                                    [-5.682000000000016, -2.884999999999991],
                                    [-3.399000000000001, -3.883999999999986],
                                    [1.9999999999999432, -2],
                                    [2.6720000000000255, -1.2319999999999993],
                                    [7.1059999999999945, .6020000000000039],
                                    [6.168999999999983, 2.1939999999999884],
                                    [0, 0],
                                    [0, 0]
                                ],
                                o: [
                                    [1.7239999999999895, -2.102000000000004],
                                    [-.08400000000000318, -.08699999999998909],
                                    [1.6580000000000155, -1.4519999999999982],
                                    [6.372000000000014, 0],
                                    [4.173999999999978, 2.1200000000000045],
                                    [0, 0],
                                    [-2.2760000000000105, 2.2760000000000105],
                                    [-6.475999999999999, 2.9879999999999995],
                                    [-10.166999999999973, -.8619999999999948],
                                    [0, 0],
                                    [0, 0],
                                    [-9.071000000000083, -.8060000000000116]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "gf",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        g: {
                            p: 3,
                            k: {
                                a: 0,
                                k: [0, .6, .47843137254901963, .42745098039215684, .3076, .6509803921568628, .5176470588235295, .4588235294117647, 1, .7490196078431373, .6, .5254901960784314]
                            }
                        },
                        t: 1,
                        s: {
                            a: 0,
                            k: [426.4653, 160.0036]
                        },
                        e: {
                            a: 0,
                            k: [522.5347, 160.0036]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-243.659, -131.024]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "#eyesopen shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [440.879, 158.65],
                                    [440.817, 158.491],
                                    [457.339, 167.591],
                                    [451.044, 166.893],
                                    [450.865, 166.881],
                                    [449.454, 166.79],
                                    [449.211, 166.777],
                                    [447.89300000000003, 166.712],
                                    [447.653, 166.702],
                                    [446.36600000000004, 166.658],
                                    [446.15200000000004, 166.652],
                                    [444.85100000000006, 166.62699999999998],
                                    [444.71500000000003, 166.62499999999997],
                                    [438.17800000000005, 166.77199999999996],
                                    [438.1240000000001, 166.77499999999995],
                                    [437.07200000000006, 166.84199999999996],
                                    [436.92800000000005, 166.85199999999995],
                                    [436.0160000000001, 166.92199999999994],
                                    [435.8470000000001, 166.93599999999995],
                                    [435.0040000000001, 167.01099999999994],
                                    [434.8550000000001, 167.02499999999995],
                                    [434.0440000000001, 167.10699999999994],
                                    [433.9290000000001, 167.11899999999994],
                                    [433.1360000000001, 167.20899999999995],
                                    [433.06700000000006, 167.21699999999996],
                                    [432.2680000000001, 167.31699999999995]
                                ],
                                i: [
                                    [-4.093000000000018, 3.3319999999999936],
                                    [-.0009999999999763531, .05699999999998795],
                                    [0, 0],
                                    [2.1090000000000373, .15399999999999636],
                                    [.05999999999994543, .003999999999990678],
                                    [.464999999999975, .02600000000001046],
                                    [.08100000000001728, .004000000000019099],
                                    [.4329999999999927, .019000000000005457],
                                    [.07999999999998408, .002999999999985903],
                                    [.4230000000000018, .012000000000000455],
                                    [.07100000000002638, .0020000000000095497],
                                    [.4269999999999641, .006000000000000227],
                                    [.045000000000015916, .0010000000000047748],
                                    [1.9419999999999504, -.11199999999999477],
                                    [.01799999999997226, -.0009999999999763531],
                                    [.3420000000000414, -.02400000000000091],
                                    [.04800000000000182, -.002999999999985903],
                                    [.29599999999999227, -.025000000000005684],
                                    [.055999999999983174, -.005000000000023874],
                                    [.2740000000000009, -.025999999999982037],
                                    [.04899999999997817, -.005000000000023874],
                                    [.26200000000000045, -.027999999999991587],
                                    [.038000000000010914, -.003999999999990678],
                                    [.25499999999999545, -.030000000000001137],
                                    [.02199999999999136, -.0030000000000143245],
                                    [.25499999999999545, -.033999999999991815]
                                ],
                                o: [
                                    [-.04399999999998272, -.044999999999987494],
                                    [4.677000000000021, 3.4799999999999898],
                                    [-2.319000000000017, -.3189999999999884],
                                    [-.060000000000002274, -.003999999999990678],
                                    [-.4759999999999991, -.033999999999991815],
                                    [-.08100000000001728, -.0049999999999954525],
                                    [-.4449999999999932, -.025000000000005684],
                                    [-.07999999999998408, -.002999999999985903],
                                    [-.4350000000000023, -.016999999999995907],
                                    [-.07200000000000273, -.0020000000000095497],
                                    [-.4399999999999977, -.01099999999999568],
                                    [-.045000000000015916, -.0010000000000047748],
                                    [-2.406000000000006, -.02600000000001046],
                                    [-.01799999999997226, .0010000000000047748],
                                    [-.35899999999998045, .020999999999986585],
                                    [-.04899999999997817, .002999999999985903],
                                    [-.3120000000000118, .02199999999999136],
                                    [-.05700000000001637, .0049999999999954525],
                                    [-.2880000000000109, .02400000000000091],
                                    [-.05000000000001137, .0049999999999954525],
                                    [-.27899999999999636, .026999999999986812],
                                    [-.038000000000010914, .003999999999990678],
                                    [-.27300000000002456, .030000000000001137],
                                    [-.023000000000024556, .002999999999985903],
                                    [-.2769999999999868, .03299999999998704],
                                    [1.7239999999999327, -2.1009999999999422]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [.8470588235294118, .5058823529411764, .42745098039215684, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-243.659, -131.024]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "#eyesopen shape group",
                    it: [{
                        ty: "el",
                        p: {
                            a: 0,
                            k: [477, 157]
                        },
                        s: {
                            a: 0,
                            k: [13, 13]
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [0, 0, 0, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-243.659, -131.024]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "#eyesopen shape group",
                    it: [{
                        ty: "el",
                        p: {
                            a: 0,
                            k: [477, 157]
                        },
                        s: {
                            a: 0,
                            k: [30, 30]
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [.36470588235294116, .40784313725490196, .27058823529411763, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-243.659, -131.024]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "#eyesopen shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [514.002, 158.978],
                                    [499.72999999999996, 148.633],
                                    [478.81699999999995, 143.60500000000002],
                                    [436.00899999999996, 158.233],
                                    [436.00899999999996, 158.591],
                                    [482.614, 174.537],
                                    [506.29999999999995, 170.428],
                                    [515.1429999999999, 164.684]
                                ],
                                i: [
                                    [0, 0],
                                    [4.76400000000001, 2.4199999999999875],
                                    [7.273000000000025, 0],
                                    [1.8929999999999723, -1.6569999999999823],
                                    [-.10700000000002774, -.09900000000001796],
                                    [-31.18100000000004, -2.6430000000000007],
                                    [-7.391999999999996, 3.4110000000000014],
                                    [-2.5979999999999563, 2.598000000000013]
                                ],
                                o: [
                                    [-3.879000000000019, -4.4339999999999975],
                                    [-6.485000000000014, -3.2930000000000064],
                                    [-25.295999999999992, 0],
                                    [-.11000000000001364, .09600000000000364],
                                    [1.75, 1.6119999999999948],
                                    [8.112000000000023, .6870000000000118],
                                    [3.048999999999978, -1.4070000000000107],
                                    [2.2840000000001055, -2.2820000000000107]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "gf",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        g: {
                            p: 2,
                            k: {
                                a: 0,
                                k: [0, .7019607843137254, .7019607843137254, .7019607843137254, 1, .9019607843137255, .9019607843137255, .9019607843137255]
                            }
                        },
                        t: 1,
                        s: {
                            a: 0,
                            k: [-627.9251, 159.157]
                        },
                        e: {
                            a: 0,
                            k: [-547.9251, 159.157]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-243.659, -131.024]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "#eyesopen shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [339.725, 167.987],
                                    [340.40900000000005, 158.378],
                                    [318.34700000000004, 139.452],
                                    [281.81100000000004, 132.627],
                                    [245.79400000000004, 158.87900000000002],
                                    [246.09800000000004, 163.05200000000002],
                                    [309.787, 186],
                                    [339.787, 168]
                                ],
                                i: [
                                    [0, 0],
                                    [1.7229999999999563, 3.046999999999997],
                                    [8.09899999999999, 4.198999999999984],
                                    [12.567999999999984, -1.6030000000000086],
                                    [2.664999999999992, -6.907000000000011],
                                    [-.7090000000000032, -1.2560000000000002],
                                    [0, 0],
                                    [0, 0]
                                ],
                                o: [
                                    [2.132000000000005, -2.7760000000000105],
                                    [-4.7760000000000105, -8.448000000000008],
                                    [-11.24799999999999, -5.830999999999989],
                                    [-24.557999999999993, 3.133999999999986],
                                    [-.5360000000000014, 1.3899999999999864],
                                    [-2.43900000000005, 34.678999999999974],
                                    [34, 7],
                                    [0, 0]
                                ]
                            }
                        }
                    }, {
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [315.329, 167.024],
                                    [311.28700000000003, 167.5],
                                    [310.66100000000006, 167.617],
                                    [286.28600000000006, 172.63199999999998],
                                    [265.5350000000001, 169.03199999999998],
                                    [257.78800000000007, 163.99999999999997],
                                    [258.78800000000007, 158.99999999999997],
                                    [271.2920000000001, 149.93699999999998],
                                    [289.6140000000001, 145.53199999999998],
                                    [327.1180000000001, 158.34799999999998],
                                    [327.1230000000001, 158.64999999999998],
                                    [335.7340000000001, 167.31799999999998]
                                ],
                                i: [
                                    [9.069000000000017, -.8060000000000116],
                                    [0, 0],
                                    [0, 0],
                                    [10.165999999999997, -.86099999999999],
                                    [6.475999999999999, 2.9879999999999995],
                                    [2.2760000000000105, 2.2760000000000105],
                                    [0, 0],
                                    [-4.174000000000035, 2.119999999999976],
                                    [-6.372000000000014, 0],
                                    [-1.6580000000000155, -1.4519999999999982],
                                    [.08400000000000318, -.08699999999998909],
                                    [-1.7239999999999895, -2.102000000000004]
                                ],
                                o: [
                                    [0, 0],
                                    [0, 0],
                                    [-6.170000000000016, 2.1939999999999884],
                                    [-7.107000000000028, .6020000000000039],
                                    [-2.6720000000000255, -1.233000000000004],
                                    [-2, -2],
                                    [3.399000000000001, -3.883999999999986],
                                    [5.682000000000016, -2.884999999999991],
                                    [22.161999999999978, 0],
                                    [.09300000000001774, .08099999999998886],
                                    [4.093000000000018, 3.330999999999989],
                                    [-4.1730000000001155, -.5459999999999923]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "gf",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        g: {
                            p: 3,
                            k: {
                                a: 0,
                                k: [0, .7490196078431373, .6, .5254901960784314, .6924, .6509803921568628, .5176470588235295, .4588235294117647, 1, .6, .47843137254901963, .42745098039215684]
                            }
                        },
                        t: 1,
                        s: {
                            a: 0,
                            k: [245.4653, 160.0354]
                        },
                        e: {
                            a: 0,
                            k: [341.5347, 160.0354]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-243.659, -131.024]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "#eyesopen shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [327.121, 158.65],
                                    [327.183, 158.491],
                                    [310.661, 167.616],
                                    [316.956, 166.89200000000002],
                                    [317.135, 166.88000000000002],
                                    [318.546, 166.78900000000002],
                                    [318.789, 166.776],
                                    [320.10699999999997, 166.711],
                                    [320.347, 166.70100000000002],
                                    [321.63399999999996, 166.657],
                                    [321.84799999999996, 166.651],
                                    [323.14899999999994, 166.626],
                                    [323.28499999999997, 166.624],
                                    [329.82199999999995, 166.771],
                                    [329.8759999999999, 166.77399999999997],
                                    [330.92799999999994, 166.84099999999998],
                                    [331.07199999999995, 166.85099999999997],
                                    [331.9839999999999, 166.92099999999996],
                                    [332.1529999999999, 166.93499999999997],
                                    [332.9959999999999, 167.00999999999996],
                                    [333.1449999999999, 167.02399999999997],
                                    [333.9559999999999, 167.10599999999997],
                                    [334.0709999999999, 167.11799999999997],
                                    [334.8639999999999, 167.20799999999997],
                                    [334.93299999999994, 167.21599999999998],
                                    [335.7319999999999, 167.31599999999997]
                                ],
                                i: [
                                    [4.093000000000018, 3.3319999999999936],
                                    [.0009999999999763531, .05699999999998795],
                                    [0, 0],
                                    [-2.1090000000000373, .15500000000000114],
                                    [-.05999999999994543, .003999999999990678],
                                    [-.464999999999975, .02600000000001046],
                                    [-.08100000000001728, .004000000000019099],
                                    [-.4329999999999927, .019000000000005457],
                                    [-.07999999999998408, .002999999999985903],
                                    [-.4230000000000018, .012000000000000455],
                                    [-.07100000000002638, .0020000000000095497],
                                    [-.4269999999999641, .006000000000000227],
                                    [-.045000000000015916, .0010000000000047748],
                                    [-1.9419999999999504, -.11199999999999477],
                                    [-.01799999999997226, -.0009999999999763531],
                                    [-.3420000000000414, -.02400000000000091],
                                    [-.04800000000000182, -.002999999999985903],
                                    [-.29599999999999227, -.025000000000005684],
                                    [-.055999999999983174, -.005000000000023874],
                                    [-.2740000000000009, -.025999999999982037],
                                    [-.04899999999997817, -.005000000000023874],
                                    [-.26200000000000045, -.027999999999991587],
                                    [-.038000000000010914, -.003999999999990678],
                                    [-.25499999999999545, -.030000000000001137],
                                    [-.02199999999999136, -.0030000000000143245],
                                    [-.25499999999999545, -.033999999999991815]
                                ],
                                o: [
                                    [.04399999999998272, -.044999999999987494],
                                    [-4.677000000000021, 3.4799999999999898],
                                    [2.319000000000017, -.3189999999999884],
                                    [.060000000000002274, -.003999999999990678],
                                    [.4759999999999991, -.033999999999991815],
                                    [.08100000000001728, -.0049999999999954525],
                                    [.4449999999999932, -.025000000000005684],
                                    [.07999999999998408, -.002999999999985903],
                                    [.4350000000000023, -.016999999999995907],
                                    [.07200000000000273, -.0020000000000095497],
                                    [.4399999999999977, -.01099999999999568],
                                    [.045000000000015916, -.0010000000000047748],
                                    [2.406000000000006, -.02600000000001046],
                                    [.01799999999997226, .0010000000000047748],
                                    [.35899999999998045, .020999999999986585],
                                    [.04899999999997817, .002999999999985903],
                                    [.3120000000000118, .02199999999999136],
                                    [.05700000000001637, .0049999999999954525],
                                    [.2880000000000109, .02400000000000091],
                                    [.05000000000001137, .0049999999999954525],
                                    [.27899999999999636, .026999999999986812],
                                    [.038000000000010914, .003999999999990678],
                                    [.27300000000002456, .030000000000001137],
                                    [.023000000000024556, .002999999999985903],
                                    [.2769999999999868, .03299999999998704],
                                    [-1.7239999999999327, -2.099999999999966]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [.8470588235294118, .5058823529411764, .42745098039215684, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-243.659, -131.024]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "#eyesopen shape group",
                    it: [{
                        ty: "el",
                        p: {
                            a: 0,
                            k: [290, 157]
                        },
                        s: {
                            a: 0,
                            k: [13, 13]
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [0, 0, 0, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-243.659, -131.024]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "#eyesopen shape group",
                    it: [{
                        ty: "el",
                        p: {
                            a: 0,
                            k: [290, 157]
                        },
                        s: {
                            a: 0,
                            k: [30, 30]
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [.36470588235294116, .40784313725490196, .27058823529411763, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-243.659, -131.024]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "#eyesopen shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [253.998, 158.978],
                                    [268.27, 148.633],
                                    [289.183, 143.60500000000002],
                                    [331.991, 158.233],
                                    [331.991, 158.591],
                                    [285.38599999999997, 174.537],
                                    [261.7, 170.428],
                                    [252.857, 164.684]
                                ],
                                i: [
                                    [0, 0],
                                    [-4.76400000000001, 2.4199999999999875],
                                    [-7.273000000000025, 0],
                                    [-1.8929999999999723, -1.6569999999999823],
                                    [.10700000000002774, -.09900000000001796],
                                    [31.18100000000004, -2.6430000000000007],
                                    [7.391999999999996, 3.4110000000000014],
                                    [2.5979999999999848, 2.598000000000013]
                                ],
                                o: [
                                    [3.879000000000019, -4.4339999999999975],
                                    [6.485000000000014, -3.2930000000000064],
                                    [25.295999999999992, 0],
                                    [.11000000000001364, .09600000000000364],
                                    [-1.75, 1.6119999999999948],
                                    [-8.112000000000023, .6870000000000118],
                                    [-3.048999999999978, -1.4070000000000107],
                                    [-2.283999999999992, -2.2820000000000107]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "gf",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        g: {
                            p: 2,
                            k: {
                                a: 0,
                                k: [0, .7019607843137254, .7019607843137254, .7019607843137254, 1, .9019607843137255, .9019607843137255, .9019607843137255]
                            }
                        },
                        t: 1,
                        s: {
                            a: 0,
                            k: [-1112.4983, 159.157]
                        },
                        e: {
                            a: 0,
                            k: [-1032.4983, 159.157]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-243.659, -131.024]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }],
                op: 200
            }, {
                ty: 4,
                nm: "beard",
                ip: 0,
                st: 0,
                ind: 7,
                hix: 11,
                ks: {
                    o: {
                        a: 0,
                        k: 100
                    },
                    or: {
                        a: 0,
                        k: [0, 0, 0]
                    },
                    a: {
                        a: 0,
                        k: [118.37799072265625, 57.72552490234375, 0]
                    },
                    p: {
                        s: !0,
                        x: {
                            a: 0,
                            k: 275
                        },
                        y: {
                            a: 0,
                            k: 614.742
                        }
                    },
                    rx: {
                        a: 0,
                        k: 0
                    },
                    ry: {
                        a: 0,
                        k: 0
                    },
                    rz: {
                        a: 0,
                        k: 0
                    },
                    s: {
                        a: 1,
                        k: [{
                            t: 0,
                            s: [0, 0],
                            e: [0, 0],
                            i: {
                                x: [.515, .515],
                                y: [.955, .955]
                            },
                            o: {
                                x: [.455, .455],
                                y: [.03, .03]
                            }
                        }, {
                            t: 60,
                            s: [0, 0],
                            e: [89.9, 89.9],
                            i: {
                                x: [.265, .265],
                                y: [1.5, 1.5]
                            },
                            o: {
                                x: [.68, .68],
                                y: [-.55, -.55]
                            }
                        }, {
                            t: 90
                        }]
                    }
                },
                shapes: [{
                    ty: "gr",
                    nm: "beard shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [414.548, 855.561],
                                    [502.378, 748.931],
                                    [384.5, 749],
                                    [265.622, 748.931],
                                    [356.236, 855.594]
                                ],
                                i: [
                                    [-18.440999999999974, 8.644999999999982],
                                    [0, 0],
                                    [49.983000000000004, -.2400000000000091],
                                    [54.938999999999965, 30.533999999999992],
                                    [-85.70399999999995, -40.01599999999996]
                                ],
                                o: [
                                    [85.36500000000001, -40.01999999999998],
                                    [-57.61500000000001, 32.11099999999999],
                                    [-46.63099999999997, .22400000000004638],
                                    [0, 0],
                                    [18.454999999999984, 8.616999999999962]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [.2, .13333333333333333, .1450980392156863, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-265.622, -748.76]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }],
                op: 200
            }, {
                ty: 4,
                nm: "lips",
                ip: 0,
                st: 0,
                ind: 6,
                hix: 12,
                ks: {
                    o: {
                        a: 0,
                        k: 100
                    },
                    or: {
                        a: 0,
                        k: [0, 0, 0]
                    },
                    a: {
                        a: 0,
                        k: [78.00302124023438, 23.774505615234375, 0]
                    },
                    p: {
                        s: !0,
                        x: {
                            a: 0,
                            k: 275.003
                        },
                        y: {
                            a: 0,
                            k: 513.821
                        }
                    },
                    rx: {
                        a: 0,
                        k: 0
                    },
                    ry: {
                        a: 0,
                        k: 0
                    },
                    rz: {
                        a: 0,
                        k: 0
                    },
                    s: {
                        a: 1,
                        k: [{
                            t: 0,
                            s: [0, 0],
                            e: [0, 0],
                            i: {
                                x: [1, 1],
                                y: [1, 1]
                            },
                            o: {
                                x: [0, 0],
                                y: [0, 0]
                            }
                        }, {
                            t: 60,
                            s: [0, 0],
                            e: [89.9, 89.9],
                            i: {
                                x: [.265, .265],
                                y: [1.5, 1.5]
                            },
                            o: {
                                x: [.68, .68],
                                y: [-.55, -.55]
                            }
                        }, {
                            t: 90
                        }]
                    }
                },
                shapes: [{
                    ty: "gr",
                    nm: "lips shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [385.534, 691.647],
                                    [417.551, 689.832],
                                    [435.835, 689.082],
                                    [462, 684.451],
                                    [418, 674.451],
                                    [389, 680.451],
                                    [386.517, 682.386],
                                    [381.273, 682.319],
                                    [379, 680.451],
                                    [350, 674.451],
                                    [306, 684.451],
                                    [332.165, 689.082],
                                    [350.449, 689.832],
                                    [382.466, 691.647]
                                ],
                                i: [
                                    [-1.5, -.1570000000000391],
                                    [-9.343000000000018, 1.2320000000000846],
                                    [-6.1089999999999804, -.2619999999999436],
                                    [0, 0],
                                    [34, 12],
                                    [13, -10],
                                    [0, 0],
                                    [1.516999999999996, 1.245999999999981],
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                    [-22.95500000000004, .98700000000008],
                                    [-6.062000000000012, -.7999999999999545],
                                    [-8.567999999999984, .8990000000000009]
                                ],
                                o: [
                                    [8.567999999999984, .8990000000000009],
                                    [6.060999999999979, -.7999999999999545],
                                    [22.954999999999984, .98599999999999],
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                    [-1.5480000000000018, 1.2069999999999936],
                                    [0, 0],
                                    [-13, -10],
                                    [-34, 12],
                                    [0, 0],
                                    [6.108000000000004, -.2619999999999436],
                                    [9.343000000000018, 1.231999999999971],
                                    [1.5, -.1570000000000391]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "gf",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        g: {
                            p: 3,
                            k: {
                                a: 0,
                                k: [0, .7490196078431373, .6, .5254901960784314, .5509, .7215686274509804, .5019607843137255, .4392156862745098, 1, .6980392156862745, .40784313725490196, .3568627450980392]
                            }
                        },
                        t: 1,
                        s: {
                            a: 0,
                            k: [384, 673.6606]
                        },
                        e: {
                            a: 0,
                            k: [384, 691.923]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-306, -670.451]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "lips shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [458.009, 686.811],
                                    [453.25800000000004, 688.135],
                                    [443.43800000000005, 689.084],
                                    [438.499, 689.0419999999999],
                                    [433.548, 688.8009999999999],
                                    [423.553, 688.6969999999999],
                                    [418.547, 688.9769999999999],
                                    [413.619, 689.4309999999998],
                                    [403.783, 690.0569999999998],
                                    [393.925, 690.4579999999997],
                                    [388.991, 690.5569999999998],
                                    [386.522, 690.5659999999998],
                                    [384.109, 690.6099999999998],
                                    [381.69599999999997, 690.5659999999998],
                                    [379.227, 690.5569999999998],
                                    [374.29299999999995, 690.4579999999997],
                                    [364.43499999999995, 690.0569999999998],
                                    [354.59899999999993, 689.4309999999998],
                                    [349.67099999999994, 688.9769999999999],
                                    [344.66499999999996, 688.6969999999999],
                                    [334.66999999999996, 688.8009999999999],
                                    [329.71899999999994, 689.0419999999999],
                                    [324.7799999999999, 689.084],
                                    [314.9599999999999, 688.135],
                                    [310.20899999999995, 686.811],
                                    [306.00399999999996, 684.2900000000001],
                                    [310.13399999999996, 686.9960000000001],
                                    [314.876, 688.5260000000001],
                                    [324.75, 689.883],
                                    [329.735, 690.042],
                                    [334.707, 690],
                                    [344.556, 690.436],
                                    [354.36699999999996, 691.744],
                                    [364.33399999999995, 692.505],
                                    [377.5799999999999, 692.152],
                                    [390.6459999999999, 692.152],
                                    [403.8909999999999, 692.505],
                                    [413.8579999999999, 691.744],
                                    [423.66899999999987, 690.436],
                                    [433.51799999999986, 690],
                                    [438.48999999999984, 690.042],
                                    [443.47499999999985, 689.883],
                                    [453.3489999999999, 688.5260000000001],
                                    [458.0909999999999, 686.9960000000001],
                                    [462.0059999999999, 684.4510000000001]
                                ],
                                i: [
                                    [1.516999999999996, -.6059999999999945],
                                    [1.61099999999999, -.3269999999999982],
                                    [3.291999999999973, -.05099999999993088],
                                    [1.6450000000000387, .05700000000001637],
                                    [0, 0],
                                    [3.3380000000000223, -.1129999999999427],
                                    [1.6679999999999495, -.13599999999996726],
                                    [1.641999999999996, -.12000000000000455],
                                    [3.283999999999992, -.16800000000000637],
                                    [3.288000000000011, -.09999999999990905],
                                    [0, 0],
                                    [.8209999999999695, .01999999999998181],
                                    [.8120000000000118, -.07899999999995089],
                                    [.7760000000000105, -.012000000000057298],
                                    [.8209999999999695, .004000000000019099],
                                    [0, 0],
                                    [3.2830000000000155, .17899999999997362],
                                    [3.2730000000000246, .24299999999993815],
                                    [1.6829999999999927, .15499999999997272],
                                    [1.6689999999999827, .05200000000002092],
                                    [3.322999999999979, -.17200000000002547],
                                    [0, 0],
                                    [1.646000000000015, .023000000000024556],
                                    [3.2350000000000136, .6150000000000091],
                                    [1.5329999999999586, .6019999999999754],
                                    [1.1379999999999768, 1.2139999999999418],
                                    [-1.5049999999999955, -.6710000000000491],
                                    [-1.6140000000000327, -.39599999999995816],
                                    [-3.32000000000005, -.18499999999994543],
                                    [-1.6620000000000346, -.009999999999990905],
                                    [0, 0],
                                    [-3.266999999999996, -.31500000000005457],
                                    [-3.343999999999994, -.42600000000004457],
                                    [-3.3279999999999745, -.12000000000000455],
                                    [-4.395999999999958, .42799999999999727],
                                    [-4.3489999999999895, -.42200000000002547],
                                    [-4.394999999999982, .1410000000000764],
                                    [-3.312000000000012, .4249999999999545],
                                    [-3.277999999999963, .29700000000002547],
                                    [-3.291999999999973, -.01599999999996271],
                                    [0, 0],
                                    [-1.6589999999999918, .09100000000000819],
                                    [-3.240000000000009, .7519999999999527],
                                    [-1.524000000000001, .6699999999999591],
                                    [-1.0910000000000082, 1.2619999999999436]
                                ],
                                o: [
                                    [-1.5339999999999918, .6019999999999754],
                                    [-3.2350000000000136, .6150000000000091],
                                    [-1.646000000000015, .02400000000000091],
                                    [0, 0],
                                    [-3.322999999999979, -.17200000000002547],
                                    [-1.6689999999999827, .05200000000002092],
                                    [-1.6829999999999927, .15499999999997272],
                                    [-3.2719999999999914, .24300000000005184],
                                    [-3.2830000000000155, .17999999999994998],
                                    [0, 0],
                                    [-.8220000000000027, .004000000000019099],
                                    [-.7760000000000105, -.011999999999943611],
                                    [-.8120000000000118, -.08000000000004093],
                                    [-.8220000000000027, .01999999999998181],
                                    [0, 0],
                                    [-3.288000000000011, -.10000000000002274],
                                    [-3.2830000000000155, -.16800000000000637],
                                    [-1.641999999999996, -.12000000000000455],
                                    [-1.6680000000000064, -.13599999999996726],
                                    [-3.336999999999989, -.11300000000005639],
                                    [0, 0],
                                    [-1.6449999999999818, .05700000000001637],
                                    [-3.2930000000000064, -.051000000000044565],
                                    [-1.6120000000000232, -.3269999999999982],
                                    [-1.5160000000000196, -.6050000000000182],
                                    [1.0910000000000082, 1.2619999999999436],
                                    [1.524000000000001, .6699999999999591],
                                    [3.240000000000009, .7530000000000427],
                                    [1.6589999999999918, .09100000000000819],
                                    [0, 0],
                                    [3.291999999999973, -.01599999999996271],
                                    [3.276999999999987, .29700000000002547],
                                    [3.312000000000012, .4249999999999545],
                                    [4.394999999999982, .1409999999999627],
                                    [4.348000000000013, -.42200000000002547],
                                    [4.394999999999982, .4270000000000209],
                                    [3.3279999999999745, -.12000000000000455],
                                    [3.343999999999994, -.42600000000004457],
                                    [3.266999999999996, -.31500000000005457],
                                    [0, 0],
                                    [1.6619999999999777, -.009999999999990905],
                                    [3.319000000000017, -.18499999999994543],
                                    [1.613999999999976, -.39599999999995816],
                                    [1.504000000000019, -.6720000000000255],
                                    [-1.144999999999925, 1.213999999999828]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [.17647058823529413, .17254901960784313, .17254901960784313, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-306, -670.451]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "lips shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [306, 684.451],
                                    [384, 718],
                                    [462, 684.451],
                                    [393.744, 691.119],
                                    [374.086, 691.1170000000001]
                                ],
                                i: [
                                    [0, 0],
                                    [-49, 0],
                                    [0, 0],
                                    [0, 0],
                                    [6.5400000000000205, .5879999999999654]
                                ],
                                o: [
                                    [0, 0],
                                    [49, 0],
                                    [0, 0],
                                    [-6.5400000000000205, .5860000000000127],
                                    [0, 0]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "gf",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        g: {
                            p: 3,
                            k: {
                                a: 0,
                                k: [0, .7490196078431373, .6, .5254901960784314, .5509, .7215686274509804, .5019607843137255, .4392156862745098, 1, .6980392156862745, .40784313725490196, .3568627450980392]
                            }
                        },
                        t: 1,
                        s: {
                            a: 0,
                            k: [384, 684.4508]
                        },
                        e: {
                            a: 0,
                            k: [384, 718]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-306, -670.451]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }],
                op: 200
            }, {
                ty: 4,
                nm: "nose",
                ip: 0,
                st: 0,
                ind: 5,
                hix: 13,
                ks: {
                    o: {
                        a: 0,
                        k: 100
                    },
                    or: {
                        a: 0,
                        k: [0, 0, 0]
                    },
                    a: {
                        a: 0,
                        k: [49.88951110839844, 73.91899108886719, 0]
                    },
                    p: {
                        s: !0,
                        x: {
                            a: 0,
                            k: 275.118
                        },
                        y: {
                            a: 0,
                            k: 393.49
                        }
                    },
                    rx: {
                        a: 0,
                        k: 0
                    },
                    ry: {
                        a: 0,
                        k: 0
                    },
                    rz: {
                        a: 0,
                        k: 0
                    },
                    s: {
                        a: 1,
                        k: [{
                            t: 0,
                            s: [0, 0],
                            e: [0, 0],
                            i: {
                                x: [1, 1],
                                y: [1, 1]
                            },
                            o: {
                                x: [0, 0],
                                y: [0, 0]
                            }
                        }, {
                            t: 60,
                            s: [0, 0],
                            e: [89.9, 89.9],
                            i: {
                                x: [.265, .265],
                                y: [1.5, 1.5]
                            },
                            o: {
                                x: [.68, .68],
                                y: [-.55, -.55]
                            }
                        }, {
                            t: 90
                        }]
                    }
                },
                shapes: [{
                    ty: "gr",
                    nm: "nose shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [422.17, 623.106],
                                    [421.896, 621.928],
                                    [408.942, 623.306],
                                    [402.75, 626.0250000000001],
                                    [400.908, 627.315],
                                    [402.872, 629.397]
                                ],
                                i: [
                                    [-6.771000000000015, 8.197000000000003],
                                    [.4399999999999977, .1470000000000482],
                                    [6, -3.122000000000071],
                                    [0, 0],
                                    [.5269999999999868, -.5769999999999982],
                                    [-3.2509999999999764, 0]
                                ],
                                o: [
                                    [.31799999999998363, -.3849999999999909],
                                    [-1.978999999999985, -.6649999999999636],
                                    [0, 0],
                                    [-.6750000000000114, .29700000000002547],
                                    [-.8129999999999882, .8920000000000528],
                                    [5.041999999999973, -.00100000000009004]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [.22745098039215686, .16470588235294117, .13333333333333333, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-334.242, -486.457]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "nose shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [345.83, 623.106],
                                    [346.104, 621.928],
                                    [359.058, 623.306],
                                    [365.25, 626.0250000000001],
                                    [367.092, 627.315],
                                    [365.128, 629.397]
                                ],
                                i: [
                                    [6.771000000000015, 8.197000000000003],
                                    [-.4399999999999977, .1470000000000482],
                                    [-6, -3.122000000000071],
                                    [0, 0],
                                    [-.5269999999999868, -.5769999999999982],
                                    [3.2509999999999764, 0]
                                ],
                                o: [
                                    [-.31799999999998363, -.3849999999999909],
                                    [1.978999999999985, -.6649999999999636],
                                    [0, 0],
                                    [.6750000000000114, .29700000000002547],
                                    [.8129999999999882, .8920000000000528],
                                    [-5.041999999999973, -.00100000000009004]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [.22745098039215686, .16470588235294117, .13333333333333333, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-334.242, -486.457]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "nose shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [392.564, 631.245],
                                    [402.88800000000003, 629.845],
                                    [412.02000000000004, 633.186],
                                    [419.56300000000005, 633.5490000000001],
                                    [425.302, 630.027],
                                    [431.11600000000004, 620.475],
                                    [431.79300000000006, 618.2470000000001],
                                    [424.5420000000001, 594.1160000000001],
                                    [418.10800000000006, 585.1650000000001],
                                    [415.29400000000004, 579.6590000000001],
                                    [397.61, 492.6730000000001],
                                    [384.755, 486.4720000000001],
                                    [384.654, 486.4660000000001],
                                    [384, 486.45800000000014],
                                    [383.346, 486.4660000000001],
                                    [383.245, 486.4720000000001],
                                    [370.39, 492.6730000000001],
                                    [352.704, 579.6650000000001],
                                    [349.975, 585.061],
                                    [341.966, 596.587],
                                    [336.207, 618.249],
                                    [336.884, 620.477],
                                    [342.69800000000004, 630.029],
                                    [348.437, 633.551],
                                    [355.98, 633.188],
                                    [365.112, 629.847],
                                    [373.987, 630.885],
                                    [375.995, 631.436]
                                ],
                                i: [
                                    [-7.711000000000013, 2.5720000000000027],
                                    [0, 0],
                                    [0, 0],
                                    [-2.480000000000018, .7439999999999145],
                                    [-1.6669999999999732, 1.650000000000091],
                                    [-1.2690000000000055, 3.5020000000000664],
                                    [-.18700000000001182, .7579999999999245],
                                    [4.1059999999999945, 6.802999999999997],
                                    [2.2860000000000014, 2.84699999999998],
                                    [.5880000000000223, 2.0539999999999736],
                                    [0, 0],
                                    [7.552000000000021, .3490000000000464],
                                    [.033999999999991815, .0019999999999527063],
                                    [.2189999999999941, -.0010000000000331966],
                                    [.21600000000000819, -.007999999999981355],
                                    [.033999999999991815, -.0019999999999527063],
                                    [0, 0],
                                    [7.649999999999977, -26.728999999999928],
                                    [1.224999999999966, -1.55499999999995],
                                    [2.430000000000007, -4.055999999999926],
                                    [-1.964999999999975, -7.974000000000046],
                                    [-.26300000000003365, -.7259999999999991],
                                    [-2.480000000000018, -2.455000000000041],
                                    [-2.1189999999999714, -.6350000000001046],
                                    [-2.444000000000017, .8940000000000055],
                                    [0, 0],
                                    [-7.137999999999977, -1.7140000000000555],
                                    [-.6619999999999777, -.20800000000008367]
                                ],
                                o: [
                                    [8.355999999999995, -2.1660000000000537],
                                    [0, 0],
                                    [2.4429999999999836, .8940000000000055],
                                    [2.119000000000028, -.6359999999999673],
                                    [2.4809999999999945, -2.455000000000041],
                                    [.2629999999999768, -.7259999999999991],
                                    [2.2280000000000086, -9.039999999999964],
                                    [-1.9259999999999877, -3.191000000000031],
                                    [-1.2679999999999723, -1.5789999999999509],
                                    [-7.649999999999977, -26.73199999999997],
                                    [0, 0],
                                    [-.033999999999991815, -.0020000000000095497],
                                    [-.21600000000000819, -.007999999999981355],
                                    [-.22000000000002728, -.0009999999999763531],
                                    [-.033999999999991815, .0020000000000095497],
                                    [-7.552000000000021, .34899999999998954],
                                    [0, 0],
                                    [-.5740000000000123, 2.005999999999972],
                                    [-2.869000000000028, 3.63900000000001],
                                    [-3.7760000000000105, 6.301000000000045],
                                    [.18700000000001182, .7580000000000382],
                                    [1.2690000000000055, 3.5009999999999764],
                                    [1.6669999999999732, 1.6499999999999773],
                                    [2.480000000000018, .7440000000000282],
                                    [0, 0],
                                    [0, 0],
                                    [.6720000000000255, .16099999999994452],
                                    [1.964999999999975, .6119999999999663]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "gf",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        g: {
                            p: 3,
                            k: {
                                a: 0,
                                k: [0, .6, .47843137254901963, .42745098039215684, .3076, .6509803921568628, .5176470588235295, .4588235294117647, 1, .7490196078431373, .6, .5254901960784314]
                            }
                        },
                        t: 1,
                        s: {
                            a: 0,
                            k: [335.6846, 560.228]
                        },
                        e: {
                            a: 0,
                            k: [432.3154, 560.228]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-334.242, -486.457]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }],
                op: 200
            }, {
                ty: 4,
                nm: "eyebrows",
                ip: 0,
                st: 0,
                ind: 4,
                hix: 15,
                ks: {
                    o: {
                        a: 0,
                        k: 100
                    },
                    or: {
                        a: 0,
                        k: [0, 0, 0]
                    },
                    a: {
                        a: 0,
                        k: [186.78201293945312, 39.23698425292969, 0]
                    },
                    p: {
                        s: !0,
                        x: {
                            a: 0,
                            k: 275
                        },
                        y: {
                            a: 0,
                            k: 292.987
                        }
                    },
                    rx: {
                        a: 0,
                        k: 0
                    },
                    ry: {
                        a: 0,
                        k: 0
                    },
                    rz: {
                        a: 0,
                        k: 0
                    },
                    s: {
                        a: 1,
                        k: [{
                            t: 0,
                            s: [0, 0],
                            e: [0, 0],
                            i: {
                                x: [1, 1],
                                y: [1, 1]
                            },
                            o: {
                                x: [0, 0],
                                y: [0, 0]
                            }
                        }, {
                            t: 30,
                            s: [0, 0],
                            e: [89.9, 89.9],
                            i: {
                                x: [.265, .265],
                                y: [1.5, 1.5]
                            },
                            o: {
                                x: [.68, .68],
                                y: [-.55, -.55]
                            }
                        }, {
                            t: 60
                        }]
                    }
                },
                shapes: [{
                    ty: "gr",
                    nm: "eyebrows shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [563.02, 484.92],
                                    [555.007, 450.75800000000004],
                                    [527.683, 434.31800000000004],
                                    [414.022, 439.461],
                                    [420.394, 448.702],
                                    [539.307, 468.123],
                                    [541.133, 469.967],
                                    [555.3570000000001, 485.577]
                                ],
                                i: [
                                    [-1.467999999999961, 2.5369999999999777],
                                    [8.631000000000085, 8.58099999999996],
                                    [10.51400000000001, 3.6240000000000236],
                                    [11.435000000000002, -12.891999999999996],
                                    [-5.999000000000024, .4900000000000091],
                                    [-26.626999999999953, -24.016999999999996],
                                    [-.5779999999999745, -.6349999999999909],
                                    [0, 0]
                                ],
                                o: [
                                    [7.761999999999944, -13.41500000000002],
                                    [-7.32000000000005, -7.276999999999987],
                                    [-72.46199999999999, -24.973000000000013],
                                    [-3.591000000000008, 4.048000000000002],
                                    [27.65100000000001, -2.257000000000005],
                                    [.6490000000000009, .5860000000000127],
                                    [0, 0],
                                    [2.043999999999869, 2.2420000000000186]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [.2, .13333333333333333, .1450980392156863, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-197.218, -409.345]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "eyebrows shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [204.98, 484.92],
                                    [212.993, 450.75800000000004],
                                    [240.317, 434.31800000000004],
                                    [353.978, 439.461],
                                    [347.606, 448.702],
                                    [228.69299999999998, 468.123],
                                    [226.867, 469.967],
                                    [212.643, 485.577]
                                ],
                                i: [
                                    [1.4680000000000177, 2.5369999999999777],
                                    [-8.631, 8.58099999999996],
                                    [-10.51400000000001, 3.6240000000000236],
                                    [-11.435000000000002, -12.891999999999996],
                                    [5.999000000000024, .4900000000000091],
                                    [26.62700000000001, -24.016999999999996],
                                    [.578000000000003, -.6349999999999909],
                                    [0, 0]
                                ],
                                o: [
                                    [-7.7620000000000005, -13.41500000000002],
                                    [7.319999999999993, -7.276999999999987],
                                    [72.46199999999999, -24.973000000000013],
                                    [3.591000000000008, 4.048000000000002],
                                    [-27.65100000000001, -2.257000000000005],
                                    [-.6490000000000009, .5860000000000127],
                                    [0, 0],
                                    [-2.044000000000011, 2.2420000000000186]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [.2, .13333333333333333, .1450980392156863, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-197.218, -409.345]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }],
                op: 200
            }, {
                ty: 4,
                nm: "face",
                ip: 0,
                st: 0,
                ind: 3,
                hix: 16,
                ks: {
                    o: {
                        a: 0,
                        k: 100
                    },
                    or: {
                        a: 0,
                        k: [0, 0, 0]
                    },
                    a: {
                        a: 0,
                        k: [184.1719970703125, 252.99046325683594, 0]
                    },
                    p: {
                        s: !0,
                        x: {
                            a: 0,
                            k: 275
                        },
                        y: {
                            a: 0,
                            k: 392.726
                        }
                    },
                    rx: {
                        a: 0,
                        k: 0
                    },
                    ry: {
                        a: 0,
                        k: 0
                    },
                    rz: {
                        a: 0,
                        k: 0
                    },
                    s: {
                        a: 1,
                        k: [{
                            t: 0,
                            s: [0, 0],
                            e: [89.9, 89.9],
                            i: {
                                x: [.265, .265],
                                y: [1.5, 1.5]
                            },
                            o: {
                                x: [.68, .68],
                                y: [-.55, -.55]
                            }
                        }, {
                            t: 30
                        }]
                    }
                },
                shapes: [{
                    ty: "gr",
                    nm: "face shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [567.62, 523],
                                    [564.594, 470.552],
                                    [552.643, 434.21700000000004],
                                    [542.525, 396.6700000000001],
                                    [534.249, 379.5880000000001],
                                    [518.84, 366.20400000000006],
                                    [513.029, 339.7660000000001],
                                    [458.218, 311.77200000000005],
                                    [383.999, 306.53600000000006],
                                    [309.78000000000003, 311.77200000000005],
                                    [254.96900000000002, 339.7660000000001],
                                    [249.15800000000002, 366.20400000000006],
                                    [233.74900000000002, 379.5880000000001],
                                    [225.473, 396.6700000000001],
                                    [215.35500000000002, 434.2170000000001],
                                    [203.40400000000002, 470.5520000000001],
                                    [200.38, 523],
                                    [207.889, 600.186],
                                    [235.661, 701.3230000000001],
                                    [362.046, 810.6780000000001],
                                    [384, 812.5060000000001],
                                    [405.954, 810.6780000000001],
                                    [532.339, 701.3230000000001],
                                    [560.1110000000001, 600.1860000000001]
                                ],
                                i: [
                                    [.5520000000000209, 25.399],
                                    [0, 0],
                                    [4.230000000000018, 12.349999999999966],
                                    [3.55600000000004, 12.45799999999997],
                                    [4.3689999999999145, 4.663000000000011],
                                    [3.8659999999999854, 5.632000000000005],
                                    [2.350999999999999, 8.800000000000011],
                                    [19.313999999999965, 3.066000000000031],
                                    [24.795999999999992, .19900000000001228],
                                    [24.488999999999976, -3.887999999999977],
                                    [6.133999999999986, -22.964000000000055],
                                    [5.156000000000006, -7.5090000000000146],
                                    [4.6699999999999875, -4.985000000000014],
                                    [1.754000000000019, -6.1440000000000055],
                                    [4.203000000000003, -12.272000000000048],
                                    [0, -13.531000000000006],
                                    [0, 0],
                                    [-6.826000000000022, -24.545000000000073],
                                    [-15.605999999999995, -32.561000000000035],
                                    [-57.28199999999998, -9.721000000000004],
                                    [-7.2549999999999955, .011000000000080945],
                                    [-7.3700000000000045, 1.2509999999999764],
                                    [-24.137000000000057, 50.35900000000004],
                                    [-9.526000000000067, 34.25499999999988]
                                ],
                                o: [
                                    [0, 0],
                                    [0, -13.529999999999973],
                                    [-4.2029999999999745, -12.271999999999991],
                                    [-1.754000000000019, -6.1440000000000055],
                                    [-4.671000000000049, -4.98599999999999],
                                    [-5.155999999999949, -7.5090000000000146],
                                    [-6.134999999999991, -22.964],
                                    [-24.488999999999976, -3.8870000000000005],
                                    [-24.795000000000016, .19900000000001228],
                                    [-19.31400000000002, 3.065999999999974],
                                    [-2.350999999999999, 8.800000000000011],
                                    [-3.8669999999999902, 5.632000000000005],
                                    [-4.369, 4.663000000000011],
                                    [-3.5560000000000116, 12.458000000000027],
                                    [-4.229000000000013, 12.350000000000023],
                                    [0, 0],
                                    [-.5519999999999925, 25.399],
                                    [9.52600000000001, 34.254999999999995],
                                    [24.137, 50.35900000000004],
                                    [7.3700000000000045, 1.2509999999999764],
                                    [7.2549999999999955, .010999999999967258],
                                    [57.28199999999998, -9.721000000000004],
                                    [15.605999999999995, -32.561000000000035],
                                    [6.8269999999998845, -24.545000000000186]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [.7490196078431373, .6, .5254901960784314, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-199.828, -306.536]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }],
                op: 200
            }, {
                ty: 4,
                nm: "ears",
                ip: 0,
                st: 0,
                ind: 2,
                hix: 10,
                ks: {
                    o: {
                        a: 0,
                        k: 100
                    },
                    or: {
                        a: 0,
                        k: [0, 0, 0]
                    },
                    a: {
                        a: 0,
                        k: [203.49197387695312, 66.70399475097656, 0]
                    },
                    p: {
                        s: !0,
                        x: {
                            a: 0,
                            k: 275
                        },
                        y: {
                            a: 0,
                            k: 394.317
                        }
                    },
                    rx: {
                        a: 0,
                        k: 0
                    },
                    ry: {
                        a: 0,
                        k: 0
                    },
                    rz: {
                        a: 0,
                        k: 0
                    },
                    s: {
                        a: 1,
                        k: [{
                            t: 0,
                            s: [0, 0],
                            e: [50, 50],
                            i: {
                                x: [.515, .515],
                                y: [.955, .955]
                            },
                            o: {
                                x: [.455, .455],
                                y: [.03, .03]
                            }
                        }, {
                            t: 60,
                            s: [50, 50],
                            e: [88.9, 88.9],
                            i: {
                                x: [.515, .515],
                                y: [.955, .955]
                            },
                            o: {
                                x: [.455, .455],
                                y: [.03, .03]
                            }
                        }, {
                            t: 90
                        }]
                    }
                },
                shapes: [{
                    ty: "gr",
                    nm: "ears shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [556.983, 605.032],
                                    [556.492, 625],
                                    [580.492, 614],
                                    [586.492, 585],
                                    [585.492, 543],
                                    [582.492, 526],
                                    [580.492, 509],
                                    [573.492, 497],
                                    [561.429, 504.296]
                                ],
                                i: [
                                    [0, 0],
                                    [-3, 0],
                                    [-7, 14],
                                    [0, 0],
                                    [-1, 12],
                                    [3, 9],
                                    [0, 7],
                                    [0, 0],
                                    [2.937000000000012, -9.704000000000008]
                                ],
                                o: [
                                    [0, 0],
                                    [3, 0],
                                    [7, -14],
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                    [0, -7],
                                    [0, 0],
                                    [-2.937000000000012, 9.704000000000008]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [.8745098039215686, .7019607843137254, .6078431372549019, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-180.508, -494.592]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }, {
                    ty: "gr",
                    nm: "ears shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [212.017, 605.032],
                                    [211.508, 625],
                                    [187.508, 614],
                                    [181.508, 585],
                                    [182.508, 543],
                                    [185.508, 526],
                                    [187.508, 509],
                                    [194.508, 497],
                                    [206.571, 504.296]
                                ],
                                i: [
                                    [0, 0],
                                    [3, 0],
                                    [7, 14],
                                    [0, 0],
                                    [1, 12],
                                    [-3, 9],
                                    [0, 7],
                                    [0, 0],
                                    [-2.9369999999999834, -9.704000000000008]
                                ],
                                o: [
                                    [0, 0],
                                    [-3, 0],
                                    [-7, -14],
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                    [0, -7],
                                    [0, 0],
                                    [2.937000000000012, 9.704000000000008]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [.8745098039215686, .7019607843137254, .6078431372549019, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-180.508, -494.592]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }],
                op: 200
            }, {
                ty: 4,
                nm: "hair",
                ip: 0,
                st: 0,
                ind: 1,
                hix: 17,
                ks: {
                    o: {
                        a: 0,
                        k: 100
                    },
                    or: {
                        a: 0,
                        k: [0, 0, 0]
                    },
                    a: {
                        a: 0,
                        k: [210.00601196289062, 165.70199584960938, 0]
                    },
                    p: {
                        s: !0,
                        x: {
                            a: 0,
                            k: 282.47
                        },
                        y: {
                            a: 0,
                            k: 200.454
                        }
                    },
                    rx: {
                        a: 0,
                        k: 0
                    },
                    ry: {
                        a: 0,
                        k: 0
                    },
                    rz: {
                        a: 0,
                        k: 0
                    },
                    s: {
                        a: 1,
                        k: [{
                            t: 0,
                            s: [0, 0],
                            e: [0, 0],
                            i: {
                                x: [.515, .515],
                                y: [.955, .955]
                            },
                            o: {
                                x: [.455, .455],
                                y: [.03, .03]
                            }
                        }, {
                            t: 60,
                            s: [0, 0],
                            e: [88.9, 88.9],
                            i: {
                                x: [.265, .265],
                                y: [1.5, 1.5]
                            },
                            o: {
                                x: [.68, .68],
                                y: [-.55, -.55]
                            }
                        }, {
                            t: 90
                        }]
                    }
                },
                shapes: [{
                    ty: "gr",
                    nm: "hair shape group",
                    it: [{
                        ty: "sh",
                        ks: {
                            a: 0,
                            k: {
                                c: !0,
                                v: [
                                    [201.911, 498.078],
                                    [187.402, 508.5],
                                    [182.618, 418.648],
                                    [184.38899999999998, 341.196],
                                    [216.47299999999998, 234.29400000000004],
                                    [261.11, 207.26200000000003],
                                    [333.016, 192.46800000000002],
                                    [409.093, 183.931],
                                    [518.753, 185.91500000000002],
                                    [561.2370000000001, 208.42200000000003],
                                    [562.5060000000001, 219.42700000000002],
                                    [562.1720000000001, 253.94700000000003],
                                    [566.9550000000002, 280.49],
                                    [580.1230000000002, 511.355],
                                    [565.7060000000001, 497.595]
                                ],
                                i: [
                                    [0, 0],
                                    [0, 0],
                                    [.3649999999999807, 29.947000000000003],
                                    [-1.9039999999999964, 25.76800000000003],
                                    [-26.10300000000001, 28.210999999999956],
                                    [-16.68500000000003, 5.550000000000011],
                                    [-23.90500000000003, 3.7590000000000146],
                                    [-25.473000000000013, 1.6769999999999925],
                                    [-35.80200000000002, -5.963999999999999],
                                    [-5.9920000000000755, -15.724999999999994],
                                    [.03599999999994452, -3.716000000000008],
                                    [.11599999999998545, -11.506],
                                    [-4.59800000000007, -7.640999999999963],
                                    [0, 0],
                                    [0, 0]
                                ],
                                o: [
                                    [0, 0],
                                    [-3.1430000000000007, -29.80000000000001],
                                    [-.3149999999999977, -25.824000000000012],
                                    [2.6899999999999977, -36.416],
                                    [11.937000000000012, -12.90100000000001],
                                    [23.03800000000001, -7.663000000000011],
                                    [25.216000000000008, -3.9650000000000034],
                                    [36.14999999999998, -2.3799999999999955],
                                    [14.557999999999993, 2.4250000000000114],
                                    [1.322999999999979, 3.4720000000000084],
                                    [-.11099999999999, 11.507000000000005],
                                    [-.08699999999998909, 8.619],
                                    [35.360000000000014, 58.76299999999998],
                                    [0, 0],
                                    [0, 0]
                                ]
                            }
                        }
                    }, {
                        ty: "st",
                        o: {
                            a: 0,
                            k: 0
                        },
                        w: {
                            a: 0,
                            k: 0
                        },
                        c: {
                            a: 0,
                            k: [0, 0, 0, 0]
                        },
                        lc: 3,
                        lj: 1,
                        ml: 1
                    }, {
                        ty: "fl",
                        o: {
                            a: 0,
                            k: 100
                        },
                        r: 1,
                        c: {
                            a: 0,
                            k: [.2, .13333333333333333, .1450980392156863, 1]
                        }
                    }, {
                        ty: "tr",
                        o: {
                            a: 0,
                            k: 100
                        },
                        a: {
                            a: 0,
                            k: [0, 0]
                        },
                        s: {
                            a: 0,
                            k: [100, 100]
                        },
                        p: {
                            a: 0,
                            k: [-182.303, -179.951]
                        },
                        r: {
                            a: 0,
                            k: 0
                        }
                    }]
                }],
                op: 200
            }],
            op: 200,
            w: 550,
            h: 700
        }
    },
    "9af3": function(a, t, e) {
        a.exports = e.p + "img/stop_wine.339f2de9.jpg"
    },
    a9db: function(a, t, e) {
        a.exports = e.p + "img/privatbar.19f70f7c.jpg"
    },
    b8ab: function(a, t, e) {
        "use strict";
        var s = e("35f0"),
            o = e.n(s);
        o.a
    },
    cf05: function(a, t, e) {
        a.exports = e.p + "img/logo.5df759b8.png"
    },
    e15d: function(a, t, e) {
        a.exports = e.p + "img/space.cf15e844.jpg"
    },
    f8c0: function(a, t, e) {
        "use strict";
        var s = e("3a72"),
            o = e.n(s);
        o.a
    }
});
//# sourceMappingURL=app.dcfd5455.js.map
