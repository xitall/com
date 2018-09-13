!
function() {
	var i = null !== navigator.userAgent.toLowerCase().match(/Mobile/i);
	window.oneplus5PageTool = {
		popup: function a(i) {
			a.elementId ? a.elementId++ : a.elementId = 1;
			var e = ['<div id="popup-' + a.elementId + '">'].join(""),
				s = $(e);
			s.on("click", ".btn-close", function() {
				s.remove()
			}), $("body").append(s)
		}
	}, function() {
		$(".nav-bar .menus").on("click", function() {
			i && ($(this).hasClass("active") ? ($(this).removeClass("active"), $(this).find("ul").slideUp()) : ($(this).addClass("active"), $(this).find("ul").slideDown()))
		})
	}()
}();

!
function() {
	function e() {
		i(), a()
	}

	function i() {
		$(window).on("scroll", function() {
			a()
		}), $(window).on("resize", function() {
			n()
		}), $(window).resize(), $(window).scroll(function() {
			M && $(".nav-bar .menus").hasClass("active") && ($(".nav-bar .menus").removeClass("active"), $(".nav-bar ul").slideUp())
		}), r(), l(), c(), C(), u(), p(), w(), g(), m(), M && T(), b(), I()
	}

	function a() {
		var e, i = $(window).scrollTop(),
			t = $("header").height(),
			n = $(window).height();
		e = M ? n / 1.2 : n / 1.25, t <= i ? $(".nav-bar").addClass("fixed") : $(".nav-bar").removeClass("fixed"), $(".body-index .section").each(function() {
			var e, t, n, a = $(this),
				s = $(this).position().top;
			i >= s && $(this).height() + s > i && (n = a.attr("data-anchor"), n && $(".nav-bar .menus li").removeClass("active").each(function() {
				if ($(this).find("a").attr("href").indexOf(n) != -1) return $(this).addClass("active"), !0
			}), $(this).hasClass("section-dual-camera") ? (e = $(this).find(".second .img-box"), i >= e.position().top && e.height() + e.position().top > i ? $(".nav-bar").removeClass("nav-bar-black").addClass(e.attr("data-nav-color")) : $(".nav-bar").removeClass("nav-bar-black").addClass($(this).attr("data-nav-color")), void 0 == X.dualCameraFirst && ($(".section-dual-camera .first .nav-dot li").eq(0).addClass("loading"), X.dualCameraFirst = A(".section-dual-camera .first .nav-dot li"))) : $(this).hasClass("section-experience") ? (t = $(this).find(".first"), i >= t.position().top && t.height() + t.position().top > i ? $(".nav-bar").removeClass("nav-bar-black").addClass(t.attr("data-nav-color")) : $(".nav-bar").removeClass("nav-bar-black").addClass($(this).attr("data-nav-color"))) : $(".nav-bar").removeClass("nav-bar-black").addClass($(this).attr("data-nav-color")))
		}), $(".body-index .animated-box").each(function() {
			var t = $(this);
			t.hasClass("animated") || t.offset().top - i <= e && (t.addClass("animated"), $(this).hasClass("section-design") && void 0 == X.design && ($(".section-design .nav-dot li").eq(0).addClass("loading"), X.desgin = A(".section-design .nav-dot li")), $(this).hasClass("section-dash-charge") && void 0 == X.dashCharge && ($(".section-dash-charge .nav-dot").each(function() {
				$(this).find("li").eq(0).addClass("loading")
			}), void 0 == X.dashCharge && (X.dashCharge = A(".section-dash-charge .nav-dot li"))), M && $(this).parents(".section").hasClass("section-experience") && ($(".section-experience .nav-dot li").eq(0).addClass("loading"), void 0 == X.experience && (X.experience = A(".section-experience .nav-dot li"))), $(this).hasClass("section-network") && ($(".section-network .nav-dot").each(function() {
				$(this).find("li").eq(0).addClass("loading")
			}), void 0 == X.network && (X.network = A(".section-network .nav-dot li"))), $(this).hasClass("section-matters") && ($(".section-matters .nav-dot").each(function() {
				$(this).find("li").eq(0).addClass("loading")
			}), void 0 == X.matters && (X.matters = A(".section-matters .nav-dot li"))))
		})
	}

	function d() {
		!
		function(e, i, t) {
			function n(i, n, a, s) {
				var o = a.type;
				a.type = n, s ? e.event.trigger(a, t, i) : e.event.dispatch.call(i, a), a.type = o
			}
			var a = e(document),
				s = !e.mobile || e.mobile.support.touch,
				o = "touchmove scroll",
				r = s ? "touchstart" : "mousedown",
				d = s ? "touchend" : "mouseup",
				l = s ? "touchmove" : "mousemove";
			e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function(i, t) {
				e.fn[t] = function(e) {
					return e ? this.bind(t, e) : this.trigger(t)
				}, e.attrFn && (e.attrFn[t] = !0)
			}), e.event.special.scrollstart = {
				enabled: !0,

				teardown: function() {
					e(this).unbind(o)
				}
			}, e.event.special.tap = {
				tapholdThreshold: 750,
				emitTapOnTaphold: !0,
			}, e.each({
				scrollstop: "scrollstart",
				taphold: "tap",
				swipeleft: "swipe.left",
				swiperight: "swipe.right"
			}, function(i, t) {
				e.event.special[i] = {
					setup: function() {
						e(this).bind(t, e.noop)
					},
					teardown: function() {
						e(this).unbind(t)
					}
				}
			})
		}(jQuery, this)
	};
	var D = "transitionend webkitTransitionEnd",
		M = null !== navigator.userAgent.toLowerCase().match(/Mobile/i),
		X = {},
		A = function(e) {
			var i = 0,
				t = $(e).parent("ol"),
				n = setInterval(function() {
					i == t.eq(0).find("li").length - 1 ? i = 0 : i += 1, t.length > 1 && !M ? (t.find("li").removeClass("loading"), t.eq(i).find("li").eq(i).trigger("click").addClass("loading").end().eq(i - 1).removeClass("loading")) : t.eq(0).find("li").eq(i).trigger("click").addClass("loading").end().eq(i - 1).removeClass("loading")
				}, );
		};
	M && d(), e()
}();