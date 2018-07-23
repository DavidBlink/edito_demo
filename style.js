(function (blink) {
	'use strict';

	var edito_demoStyle = function () {
			blink.theme.styles.basic.apply(this, arguments);
		},
		page = blink.currentPage;

	edito_demoStyle.prototype = {
		bodyClassName: 'content_type_clase_edito_demo',
		ckEditorStyles: {
			name: 'edito_demo',
			styles: [

				{ name: 'Título 1', element: 'h4', attributes: { 'class': 'bck-title bck-title1'} },

				{ name: 'Lista ordenada1', element: 'ol', attributes: { 'class': 'bck-ol bck-ol1' } },
				{ name: 'Lista ordenada2', element: 'ol', attributes: { 'class': 'bck-ol bck-ol2' } },
				{ name: 'Lista ordenada3', element: 'ol', attributes: { 'class': 'bck-ol bck-ol3' } },
				{ name: 'Lista ordenada4', element: 'ol', attributes: { 'class': 'bck-ol bck-ol4' } },
				{ name: 'Lista ordenada5', element: 'ol', attributes: { 'class': 'bck-ol bck-ol5' } },
				
				{ name: 'Lista Desordenada', element: 'ul', attributes: { 'class': 'bck-ul'} },
				{ name: 'Lista Desordenada 2', element: 'ul', attributes: { 'class': 'bck-ul-2'} },

				{ name: 'Caja 1', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-1' } },
				{ name: 'Caja 2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-2' } }

			]
		},

		init: function () {
			var parent = blink.theme.styles.basic.prototype;
			parent.init.call(this);
			this.addActivityTitle();
			if(window.esWeb) return;
			this.removeFinalSlide();
			this.handleScrollEnd();
			this.setTooltip();
			window.editar && this.configEditor();

			if ($('.navbar-bottom').length > 0) {
 				$('.navbar-bottom ol').wrapAll('<div id="bottom-navigator"></div>');
		 		var width = 0;
		 		$('.navbar-bottom li').each(function(i, elem){ width += $(elem).outerWidth(true); });
		 		$('.navbar-bottom ol').css('width', width * 1.1);
		 		var scroll = new IScroll('#bottom-navigator', {
		 			scrollX: true,
		 			scrollY: false,
		 			eventPassthrough: true
		 		});
		 		scroll.on('scrollEnd', this.handleScrollEnd);
		 		this.handleScrollEnd.call(scroll);
	 		}

		},

		configEditor: function (editor) {
			editor.dtd.$removeEmpty['span'] = false;
		},


		addActivityTitle: function () {
			if (!blink.courseInfo || !blink.courseInfo.unit) return;
			$('.libro-left').find('.title').html(function () {
				return $(this).html().trim() + ' > ' + blink.courseInfo.unit;
			});
		},

		handleScrollEnd: function () {
 			$('#bottom-navigator')
 				.removeClass('show_left')
 				.removeClass('show_right');

 			if (this.x < 0) {
 				$('#bottom-navigator').addClass('show_left');
 			}
 			if (this.x > this.maxScrollX) {
 				$('#bottom-navigator').addClass('show_right');
 			}

 		},

		setTooltip: function () {},

		getEditorStyles: function () {
			return this.ckEditorStyles;
		}
	};

	edito_demoStyle.prototype = _.extend({}, new blink.theme.styles.basic(), edito_demoStyle.prototype);

	blink.theme.styles.edito_demo = edito_demoStyle;

})( blink );
