/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-home' : '&#xe02d;',
			'icon-home-2' : '&#xe000;',
			'icon-image' : '&#xe002;',
			'icon-camera' : '&#xe003;',
			'icon-file' : '&#xe004;',
			'icon-location' : '&#xe005;',
			'icon-location-2' : '&#xe006;',
			'icon-clock' : '&#xe007;',
			'icon-bubble' : '&#xe008;',
			'icon-tv' : '&#xe009;',
			'icon-screen' : '&#xe00a;',
			'icon-calendar' : '&#xe00b;',
			'icon-calendar-2' : '&#xe00c;',
			'icon-undo' : '&#xe00d;',
			'icon-redo' : '&#xe00e;',
			'icon-bubble-2' : '&#xe00f;',
			'icon-users' : '&#xe010;',
			'icon-user' : '&#xe011;',
			'icon-users-2' : '&#xe012;',
			'icon-user-2' : '&#xe013;',
			'icon-star' : '&#xe014;',
			'icon-globe' : '&#xe015;',
			'icon-earth' : '&#xe016;',
			'icon-mail' : '&#xe017;',
			'icon-mail-2' : '&#xe018;',
			'icon-google-plus' : '&#xe019;',
			'icon-facebook' : '&#xe01a;',
			'icon-facebook-2' : '&#xe01b;',
			'icon-twitter' : '&#xe01c;',
			'icon-twitter-2' : '&#xe01d;',
			'icon-twitter-3' : '&#xe01e;',
			'icon-vimeo' : '&#xe01f;',
			'icon-vimeo2' : '&#xe020;',
			'icon-youtube' : '&#xe021;',
			'icon-feed' : '&#xe022;',
			'icon-tumblr' : '&#xe023;',
			'icon-tumblr-2' : '&#xe024;',
			'icon-android' : '&#xe025;',
			'icon-windows' : '&#xe026;',
			'icon-windows8' : '&#xe027;',
			'icon-earth-2' : '&#xe028;',
			'icon-home-3' : '&#xe029;',
			'icon-monitor' : '&#xe02a;',
			'icon-camera-2' : '&#xe02b;',
			'icon-mail-3' : '&#xe02c;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};