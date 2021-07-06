(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./assets/js/theme/compare.js":
/*!************************************!*\
  !*** ./assets/js/theme/compare.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Compare; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Compare = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Compare, _PageManager);

  function Compare() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = Compare.prototype;

  _proto.onReady = function onReady() {
    var _this = this;

    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context.urls);
    var message = this.context.compareRemoveMessage;
    $('body').on('click', '[data-comparison-remove]', function (event) {
      if (_this.context.comparisons.length <= 2) {
        Object(_global_modal__WEBPACK_IMPORTED_MODULE_1__["showAlertModal"])(message);
        event.preventDefault();
      }
    });
  };

  return Compare;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");


function decrementCounter(counter, item) {
  var index = counter.indexOf(item);

  if (index > -1) {
    counter.splice(index, 1);
  }
}

function incrementCounter(counter, item) {
  counter.push(item);
}

function updateCounterNav(counter, $link, urlContext) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }

    $link.attr('href', urlContext.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function (urlContext) {
  var compareCounter = [];
  var $compareLink = $('a[data-compare-nav]');
  $('body').on('compareReset', function () {
    var $checked = $('body').find('input[name="products\[\]"]:checked');
    compareCounter = $checked.length ? $checked.map(function (index, element) {
      return element.value;
    }).get() : [];
    updateCounterNav(compareCounter, $compareLink, urlContext);
  });
  $('body').triggerHandler('compareReset');
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');

    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }

    updateCounterNav(compareCounter, $clickedCompareLink, urlContext);
  });
  $('body').on('submit', '[data-product-compare]', function (event) {
    var $this = $(event.currentTarget);
    var productsToCompare = $this.find('input[name="products\[\]"]:checked');

    if (productsToCompare.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_0__["showAlertModal"])('You must select at least two products to compare');
      event.preventDefault();
    }
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');

    if ($clickedCheckedInput.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_0__["showAlertModal"])('You must select at least two products to compare');
      return false;
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMuanMiXSwibmFtZXMiOlsiQ29tcGFyZSIsIm9uUmVhZHkiLCJjb21wYXJlUHJvZHVjdHMiLCJjb250ZXh0IiwidXJscyIsIm1lc3NhZ2UiLCJjb21wYXJlUmVtb3ZlTWVzc2FnZSIsIiQiLCJvbiIsImV2ZW50IiwiY29tcGFyaXNvbnMiLCJsZW5ndGgiLCJzaG93QWxlcnRNb2RhbCIsInByZXZlbnREZWZhdWx0IiwiUGFnZU1hbmFnZXIiLCJkZWNyZW1lbnRDb3VudGVyIiwiY291bnRlciIsIml0ZW0iLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJpbmNyZW1lbnRDb3VudGVyIiwicHVzaCIsInVwZGF0ZUNvdW50ZXJOYXYiLCIkbGluayIsInVybENvbnRleHQiLCJpcyIsImFkZENsYXNzIiwiYXR0ciIsImNvbXBhcmUiLCJqb2luIiwiZmluZCIsImh0bWwiLCJyZW1vdmVDbGFzcyIsImNvbXBhcmVDb3VudGVyIiwiJGNvbXBhcmVMaW5rIiwiJGNoZWNrZWQiLCJtYXAiLCJlbGVtZW50IiwidmFsdWUiLCJnZXQiLCJ0cmlnZ2VySGFuZGxlciIsInByb2R1Y3QiLCJjdXJyZW50VGFyZ2V0IiwiJGNsaWNrZWRDb21wYXJlTGluayIsImNoZWNrZWQiLCIkdGhpcyIsInByb2R1Y3RzVG9Db21wYXJlIiwiJGNsaWNrZWRDaGVja2VkSW5wdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRXFCQSxPOzs7Ozs7Ozs7U0FDakJDLE8sR0FBQSxtQkFBVTtBQUFBOztBQUNOQyw0RUFBZSxDQUFDLEtBQUtDLE9BQUwsQ0FBYUMsSUFBZCxDQUFmO0FBRUEsUUFBTUMsT0FBTyxHQUFHLEtBQUtGLE9BQUwsQ0FBYUcsb0JBQTdCO0FBRUFDLEtBQUMsQ0FB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QUFqQixDQUFoQjtBQUNIOztBQUVEbkIsb0JBQWdCLENBQUNXLGNBQUQsRUFBaUJVLG1CQUFqQixFQUFzQ25CLFVBQXRDLENBQWhCO0FBQ0gsR0FYRDtBQWFBbEIsR0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVQyxFQUFWLENBQWEsUUFBYixFQUF1Qix3QkFBdkIsRUFBaUQsVUFBQUMsS0FBSyxFQUFJO0FBQ3RELFFBQU1xQyxLQUFLLEdBQUd2QyxDQUFDLENBQUNFLEtBQUssQ0FBQ2tDLGFBQVAsQ0FBZjtBQUNBLFFBQU1JLGlCQUFpQixHQUFHRCxLQUFLLENBQUNmLElBQU4sQ0FBVyxvQ0FBWCxDQUExQjs7QUFFQSxRQUFJZ0IsaUJBQWlCLENBQUNwQyxNQUFsQixJQUE0QixDQUFoQyxFQUFtQztBQUMvQkMsbUVBQWMsQ0FBQyxrREFBRCxDQUFkO0FBQ0FILFdBQUssQ0FBQ0ksY0FBTjtBQUNIO0FBQ0osR0FSRDtBQVVBTixHQUFDLENBQUMsTUFBRCxDQUFELENBQVVDLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLHFCQUF0QixFQUE2QyxZQUFNO0FBQy9DLFFBQU13QyxvQkFBb0IsR0FBR3pDLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVXdCLElBQVYsQ0FBZSxvQ0FBZixDQUE3Qjs7QUFFQSxRQUFJaUIsb0JBQW9CLENBQUNyQyxNQUFyQixJQUErQixDQUFuQyxFQUFzQztBQUNsQ0MsbUVBQWMsQ0FBQyxrREFBRCxDQUFkO0FBQ0EsYUFBTyxLQUFQO0FBQ0g7QUFDSixHQVBEO0FBUUgsQyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xyXG5pbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4vZ2xvYmFsL21vZGFsJztcclxuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBhcmUgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XHJcbiAgICBvblJlYWR5KCkge1xyXG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLmNvbnRleHQuY29tcGFyZVJlbW92ZU1lc3NhZ2U7XHJcblxyXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtY29tcGFyaXNvbi1yZW1vdmVdJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZXh0LmNvbXBhcmlzb25zLmxlbmd0aCA8PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbChtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4vbW9kYWwnO1xyXG5cclxuZnVuY3Rpb24gZGVjcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IGNvdW50ZXIuaW5kZXhPZihpdGVtKTtcclxuXHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgIGNvdW50ZXIuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5jcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XHJcbiAgICBjb3VudGVyLnB1c2goaXRlbSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNvdW50ZXJOYXYoY291bnRlciwgJGxpbmssIHVybENvbnRleHQpIHtcclxuICAgIGlmIChjb3VudGVyLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGlmICghJGxpbmsuaXMoJ3Zpc2libGUnKSkge1xyXG4gICAgICAgICAgICAkbGluay5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkbGluay5hdHRyKCdocmVmJywgYCR7dXJsQ29udGV4dC5jb21wYXJlfS8ke2NvdW50ZXIuam9pbignLycpfWApO1xyXG4gICAgICAgICRsaW5rLmZpbmQoJ3NwYW4uY291bnRQaWxsJykuaHRtbChjb3VudGVyLmxlbmd0aCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICRsaW5rLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh1cmxDb250ZXh0KSB7XHJcbiAgICBsZXQgY29tcGFyZUNvdW50ZXIgPSBbXTtcclxuXHJcbiAgICBjb25zdCAkY29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjb21wYXJlUmVzZXQnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGNoZWNrZWQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcclxuXHJcbiAgICAgICAgY29tcGFyZUNvdW50ZXIgPSAkY2hlY2tlZC5sZW5ndGggPyAkY2hlY2tlZC5tYXAoKGluZGV4LCBlbGVtZW50KSA9PiBlbGVtZW50LnZhbHVlKS5nZXQoKSA6IFtdO1xyXG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYoY29tcGFyZUNvdW50ZXIsICRjb21wYXJlTGluaywgdXJsQ29udGV4dCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xyXG5cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtY29tcGFyZS1pZF0nLCBldmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICBpbmNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZWNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYoY29tcGFyZUNvdW50ZXIsICRjbGlja2VkQ29tcGFyZUxpbmssIHVybENvbnRleHQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnW2RhdGEtcHJvZHVjdC1jb21wYXJlXScsIGV2ZW50ID0+IHtcclxuICAgICAgICBjb25zdCAkdGhpcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHNUb0NvbXBhcmUgPSAkdGhpcy5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xyXG5cclxuICAgICAgICBpZiAocHJvZHVjdHNUb0NvbXBhcmUubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoJ1lvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCB0d28gcHJvZHVjdHMgdG8gY29tcGFyZScpO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnYVtkYXRhLWNvbXBhcmUtbmF2XScsICgpID0+IHtcclxuICAgICAgICBjb25zdCAkY2xpY2tlZENoZWNrZWRJbnB1dCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xyXG5cclxuICAgICAgICBpZiAoJGNsaWNrZWRDaGVja2VkSW5wdXQubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoJ1lvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCB0d28gcHJvZHVjdHMgdG8gY29tcGFyZScpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==