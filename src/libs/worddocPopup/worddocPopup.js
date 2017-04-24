'use strict';

;function popupMockup() {
	var _this = this;

	var popupOpen = document.querySelector('.worddoc-popup-open');
	var popupClose = document.querySelector('.worddoc-popup-close');
	var popupFrame = document.querySelector('.worddoc-popup-frame');
	var popupOutFrame = document.querySelector('.worddoc-popup-out-frame');
	var popupArr = [];popupArr.push(popupFrame, popupOutFrame);
	var self = this;

	this.closeOut = true;
	this.color = 'rgba(0,0,0,.7)';
	this.openTime = '.4s';
	this.fromSide = 'bottom';
	this.fromStyle = 'ease-in-out';
	this.popupDistance = '170px';

	function countTranslate() {

		var translate;

		if (self.fromSide == 'bottom') {
			translate = 'translateY(' + self.popupDistance + ')';
		} else if (self.fromSide == 'top') {
			translate = 'translateY(-' + self.popupDistance + ')';
		} else if (self.fromSide == 'left') {
			translate = 'translateX(-' + self.popupDistance + ')';
		} else if (self.fromSide == 'right') {
			translate = 'translateX(' + self.popupDistance + ')';
		} else if (self.fromSide == "center") {
			translate = "translateX(0) translateY(0)";
		} else {
			console.log('Ошибка определния стороны fromSide');
		}

		return translate;
	};

	this.build = function () {
		for (var i = 0; i < popupArr.length; i++) {
			popupArr[i].style.transition = 'all' + ' ' + _this.openTime + ' ' + _this.fromStyle;
			popupArr[i].style.oTransition = 'all' + ' ' + _this.openTime + ' ' + _this.fromStyle;
			popupArr[i].style.webkitTransition = 'all' + ' ' + _this.openTime + ' ' + _this.fromStyle;
			popupArr[i].style.msTransition = 'all' + ' ' + _this.openTime + ' ' + _this.fromStyle;
			popupArr[i].style.mozTransition = 'all' + ' ' + _this.openTime + ' ' + _this.fromStyle;
		}
		popupFrame.style.transform = countTranslate();
		popupFrame.style.oTransform = countTranslate();
		popupFrame.style.webkitTransform = countTranslate();
		popupFrame.style.msTransform = countTranslate();
		popupFrame.style.mozTransform = countTranslate();

		popupOutFrame.style.background = _this.color;
	};

	this.open = function () {
		popupOutFrame.classList.add('worddoc-popup-out-frame-active');
		popupFrame.classList.add('worddoc-popup-frame-active');
	};

	this.closeSteps = function () {
		popupOutFrame.classList.remove('worddoc-popup-out-frame-active');
		popupFrame.classList.remove('worddoc-popup-frame-active');
		popupOutFrame.classList.add('worddoc-popup-out-frame-inactive');
		popupFrame.classList.add('worddoc-popup-frame-inactive');
	};

	this.close = function (event) {
		var e = event || window.event;
		if (e.target.classList.contains('worddoc-popup-close')) {
			_this.closeSteps();
		} else if (_this.closeOut) {
			if (e.target.classList.contains('worddoc-popup-out-frame')) {
				_this.closeSteps();
			}
		}
	};
};

var worddocPopup = new popupMockup();

/*document.addEventListener('DOMContentLoaded', worddocPopup.build());*/
document.addEventListener('click', worddocPopup.close);