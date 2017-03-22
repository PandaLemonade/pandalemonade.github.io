var ReadMore = {
	init: function(opts) {
		$('.read-more').each(function () {
		    var _p = $(this).parent();
            if (opts==='slide')
                $('p, h3', _p).slideUp();
		    else
                $('p, h3', _p).hide();
			$(this).click(function (e) {
				e.preventDefault();
				ReadMore.toggle($(this),_p);
			})
		});
	},
	toggle: function(e,o) {
		if (e.hasClass('on'))
			ReadMore._slideUp(e, o);
		else
			ReadMore._slideDown(e, o);
	},
	_slideDown: function(e,o) {
		$('p, h3', o).slideDown();
		e.text('Leer menos -').addClass('on');
	},
	_slideUp: function(e,o) {
		$('p, h3', o).slideUp();
		e.text('Leer m&aacute;s +').removeClass('on');
	},
	slideDown: function (e) {
	    var _o = $(e).parent();
	    this._slideDown(e, _o);
	},
	slideUp: function (e) {
	    var _o = $(e).parent();
	    this._slideUp(e, _o);
	}
};

var PfdMenu = {
    _actuatorTemplate: $('<a/>', { id: 'toc-actuator', css: { opacity: 0 }, text: 'Show Menu' }),
    _ctor: function () {
        this.$menu = $('nav#toc');

        this._actuator = this._actuatorTemplate.appendTo(this.$menu);
        this._actuator.animate({ opacity: 1 }, 1000).on('click', function (e) {
            e.preventDefault();
            PfdMenu.slideToggle();
        });
    },
    slideToggle: function () {
        if (this.$menu.hasClass('on'))
            this.slideClose();
        else
            this.slideOpen();
    },
    slideOpen: function () {
        var i = 240 - Math.min(($(window).width() - 94), 240);
        $('#container,#work-bio,#pfd-location').animate({ left: '-=' + (240 - i) });
        $('.parallax').animate({ 'backgroundPositionX': '-=' + (240 -i) });
        this.$menu.animate({ right: -i  }).addClass('on');
    },
    slideClose: function () {
        var i = 240 - Math.min(($(window).width() - 94), 240);
        $('#container,#work-bio,#pfd-location').animate({ left: 0 })
        $('.parallax').animate({ 'backgroundPositionX': '+=' + (240 - i) });
        this.$menu.animate({ right: '-=' + (240-i) }).removeClass('on');
    }
};