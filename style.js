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

				{ name: 'Lista morada 1', element: 'ol', attributes: { 'class': 'bck-ol bck-ol1' } },
				{ name: 'Lista morada 2', element: 'ol', attributes: { 'class': 'bck-ol bck-ol2' } },
				{ name: 'Lista morada 3', element: 'ol', attributes: { 'class': 'bck-ol bck-ol3' } },
				{ name: 'Lista verde 1', element: 'ol', attributes: { 'class': 'bck-ol bck-ol4' } },
				{ name: 'Lista verde 2', element: 'ol', attributes: { 'class': 'bck-ol bck-ol5' } },
				{ name: 'Lista verde 3', element: 'ol', attributes: { 'class': 'bck-ol bck-ol6' } },
				{ name: 'Lista naranja 1', element: 'ol', attributes: { 'class': 'bck-ol bck-ol7' } },
				{ name: 'Lista naranja 2', element: 'ol', attributes: { 'class': 'bck-ol bck-ol8' } },
				{ name: 'Lista naranja 3', element: 'ol', attributes: { 'class': 'bck-ol bck-ol9' } },
				{ name: 'Lista azul 1', element: 'ol', attributes: { 'class': 'bck-ol bck-ol10' } },
				{ name: 'Lista azul 2', element: 'ol', attributes: { 'class': 'bck-ol bck-ol11' } },
				{ name: 'Lista azul 3', element: 'ol', attributes: { 'class': 'bck-ol bck-ol12' } },
				{ name: 'Lista roja 1', element: 'ol', attributes: { 'class': 'bck-ol bck-ol13' } },
				{ name: 'Lista roja 2', element: 'ol', attributes: { 'class': 'bck-ol bck-ol14' } },
				{ name: 'Lista roja 3', element: 'ol', attributes: { 'class': 'bck-ol bck-ol15' } },
				{ name: 'Lista celeste 1', element: 'ol', attributes: { 'class': 'bck-ol bck-ol16' } },
				{ name: 'Lista celeste 2', element: 'ol', attributes: { 'class': 'bck-ol bck-ol17' } },
				{ name: 'Lista celeste 3', element: 'ol', attributes: { 'class': 'bck-ol bck-ol18' } },
				{ name: 'Lista oliva 1', element: 'ol', attributes: { 'class': 'bck-ol bck-ol19' } },
				{ name: 'Lista oliva 2', element: 'ol', attributes: { 'class': 'bck-ol bck-ol20' } },
				{ name: 'Lista oliva 3', element: 'ol', attributes: { 'class': 'bck-ol bck-ol21' } },
				{ name: 'Lista naranjaoscuro 1', element: 'ol', attributes: { 'class': 'bck-ol bck-ol22' } },
				{ name: 'Lista naranjaoscuro 2', element: 'ol', attributes: { 'class': 'bck-ol bck-ol23' } },
				{ name: 'Lista naranjaoscuro 3', element: 'ol', attributes: { 'class': 'bck-ol bck-ol24' } },
				{ name: 'Lista cuadrada', element: 'ol', attributes: { 'class': 'bck-ol bck-ol25' } },
				
				{ name: 'Lista Desordenada morada', element: 'ul', attributes: { 'class': 'bck-ul'} },
				{ name: 'Lista Desordenada verde', element: 'ul', attributes: { 'class': 'bck-ul-2'} },
				{ name: 'Lista Desordenada roja', element: 'ul', attributes: { 'class': 'bck-ul-3'} },
				{ name: 'Lista Desordenada celeste', element: 'ul', attributes: { 'class': 'bck-ul-4'} },
				{ name: 'Lista Desordenada oliva', element: 'ul', attributes: { 'class': 'bck-ul-5'} },
				{ name: 'Lista Desordenada naranjaoscuro', element: 'ul', attributes: { 'class': 'bck-ul-6'} },

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
