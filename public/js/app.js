(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");
__webpack_require__(/*! ./upload */ "./resources/js/upload.js");
__webpack_require__(/*! ./popup */ "./resources/js/popup.js");
__webpack_require__(/*! ./utility */ "./resources/js/utility.js");
__webpack_require__(/*! ./indivisual/my_scenario-create */ "./resources/js/indivisual/my_scenario-create.js");

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/js/indivisual/my_scenario-create.js":
/*!*******************************************************!*\
  !*** ./resources/js/indivisual/my_scenario-create.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
if ($('body').hasClass('my_scenario-create')) {
  var updateLists = function updateLists() {
    setIndexNameToListItems();
    var criminalListHtml = '<option></option>';
    $('select[data-key_name=character_id] option:selected').each(function () {
      var $option = $(this);
      criminalListHtml += '<option value="' + $option.val() + '">' + $option.text() + '</option>';
    });
    $('select.criminal').each(function () {
      var $select = $(this);
      var charaId = $select.val();
      $select.html(criminalListHtml);
      $select.val(charaId);
    });
  };
  updateLists();
  $('[name=days]').on('change click', function () {
    var d = $(this).val();
    $('.scenario_incident_list > li[data-day]').each(function () {
      var $dom = $(this);
      if ($dom.attr('data-day') <= d) {
        $dom.show();
      } else {
        $dom.hide();
      }
    });
  });
  $('[name=days]').click();
  $('.scenario_character_list').on('click', '.character_row .js-chara_delete_button', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var $self, charaName, msg, _yield$myConfirm, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            $self = $(this);
            charaName = $self.closest('.character_row').find('select[data-key_name=character_id] option:selected').text();
            msg = CHARA_DELETE_CONFIRM_MESSAGE.replace('___CHARA___', charaName);
            if (!($('.character_row').length > 1)) {
              _context.next = 9;
              break;
            }
            _context.next = 6;
            return myConfirm(msg);
          case 6:
            _yield$myConfirm = _context.sent;
            result = _yield$myConfirm.result;
            if (result == 'ok') {
              $self.closest('.character_row').remove();
              updateLists();
            }
          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));
  $('.scenario_character_list').on('click change', 'select[data-key_name=character_id]', function () {
    updateLists();
  });
  $('.scenario_character_list').on('change', '.character_row select[data-key_name=character_id]', function () {
    $(this).closest('.character_row').removeClass('is-error');
  });
  $('.js-chara_add_button').on('click', function () {
    var $dom = $('.character_row:last').clone();
    $dom.removeClass('is-error');
    $('.scenario_character_list').append($dom);
    updateLists();
  });
}

/***/ }),

/***/ "./resources/js/popup.js":
/*!*******************************!*\
  !*** ./resources/js/popup.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
window.openPopup = function (className) {
  return new Promise(function (resolve, reject) {
    var selector = '.c-popup.' + className;
    var $popup = $(selector);
    $popup.addClass('open');
    $popup.find('.filter-area').off('click.open_popup').on('click.open_popup', function () {
      $popup.removeClass('open');
      resolve({
        'result': 'close'
      });
    });
    $popup.find('.close_button').off('click.open_popup').on('click.open_popup', function () {
      $popup.removeClass('open');
      resolve({
        'result': 'close'
      });
    });
    $popup.find('[data-result]').off('click.open_popup').on('click.open_popup', function () {
      var $self = $(this);
      $popup.removeClass('open');
      resolve({
        'result': $self.attr('data-result'),
        'info': $self.attr('data-info')
      });
    });
  });
};
window.myConfirm = function (msg) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  $('.c-popup.js-popup-my_confirm .message').html(msg.replace("\\n", '<br>'));
  $('.c-popup.js-popup-my_confirm .title').text(title);
  return openPopup('js-popup-my_confirm');
};

/***/ }),

/***/ "./resources/js/upload.js":
/*!********************************!*\
  !*** ./resources/js/upload.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
* ファイルアップロードjs
*
* @param option.formClass ファイルアップロードイベントを仕込むformタグのクラス
* @param option.onSuccess($input, media) ファイルアップロード成功時の処理。$inputは対象のinput[type=file]
* @param option.onFailure($input, res) ファイルアップロード失敗時の処理。$inputは対象のinput[type=file]
* @param option.onComplete($input, xhr) ファイルアップロード完了時の処理。$inputは対象のinput[type=file]
* @param option.onProgress($input, percent) ファイルアップロード中の処理。$inputは対象のinput[type=file]
*/
window.setFileUploadEvent = function (option) {
  var _formClass = (option.formClass || '').length > 0 ? '.' + option.formClass : '';
  var _selector = 'form' + _formClass + ' input[type=file][name=file]';
  var _onSuccess = option.onSuccess || function ($input, media) {
    myConsole.log(media);
  };
  var _onFailure = option.onFailure || function ($input, res) {
    myConsole.error(res);
  };
  var _onComplete = option.onComplete || function ($input) {};
  var _onProgress = option.onProgress || function ($input, percent) {};
  myConsole.log(_selector);
  $('body').on('change', _selector, function () {
    var $self = $(this);
    if (!$self.val()) {
      return;
    }
    var $form = $self.closest('form');
    var uploadFile = $self.prop('files')[0];
    var toUserId = $form.find('[name=to_user_id]').val();
    _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var progressTimer;
      return _regeneratorRuntime().wrap(function _callee4$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              return _context6.delegateYield( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                var _lastAjaxResult;
                var CHUNK_SIZE, RETRY_LIMIT, RETRY_INTERVAL, CHUNK_UPLOAD_URL, CSRF_TOKEN, sent, maybeSent, chunkUploadUrl, wait, bps, chunkEnd, chunkData, fd, _loop, i, _ret, finishData, lastAjaxResult, _loop2, _i, _ret2;
                return _regeneratorRuntime().wrap(function _callee3$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        CHUNK_SIZE = 128 * 1024 * 1024;
                        RETRY_LIMIT = 5;
                        RETRY_INTERVAL = 100;
                        CHUNK_UPLOAD_URL = $('meta[name=chunk_upload_url]').attr('content');
                        CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
                        sent = 0; // 送信済みバイト数
                        maybeSent = 0; // 机上の送信済みバイト数。見かけ上のプログレスバー更新のために使う
                        chunkUploadUrl = CHUNK_UPLOAD_URL;
                        // 指数バックオフ用
                        bps = 0; // 各アップロードから計算されたBPS[byte/sec]
                        progressTimer = setInterval(function () {
                          maybeSent += bps * 0.5;
                          if (maybeSent > sent + CHUNK_SIZE) {
                            maybeSent = sent + CHUNK_SIZE;
                          }
                          var per = maybeSent * 100.0 / uploadFile.size;
                          if (per > 99.9) per = 99.9;
                          _onProgress($self, per);
                        }, 1000);
                        _onProgress($self, 0);
                      case 11:
                        if (!(sent < uploadFile.size)) {
                          _context5.next = 37;
                          break;
                        }
                        chunkEnd = sent + CHUNK_SIZE; // 今回送るチャンクの末尾バイト
                        if (sent == 0) {
                          chunkEnd = CHUNK_SIZE / 4; // 最初だけは軽い容量で送り、レスポンスタイムを計測する
                        }
                        chunkData = uploadFile.slice(sent, chunkEnd);
                        myConsole.log(sent, chunkEnd);
                        myConsole.log(chunkData);
                        fd = new FormData();
                        fd.append('file_name', uploadFile.name);
                        fd.append('file_size', uploadFile.size);
                        fd.append('chunk_data', chunkData);
                        wait = RETRY_INTERVAL;
                        _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop(i) {
                          var upStartAt, ajaxResult, _ajaxResult$url, upTime;
                          return _regeneratorRuntime().wrap(function _loop$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  upStartAt = new Date();
                                  _context2.next = 3;
                                  return $.ajax({
                                    type: 'POST',
                                    url: chunkUploadUrl,
                                    headers: {
                                      'X-CSRF-TOKEN': CSRF_TOKEN
                                    },
                                    contentType: false,
                                    processData: false,
                                    data: fd
                                  })["catch"]( /*#__PURE__*/function () {
                                    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(err) {
                                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                                        while (1) {
                                          switch (_context.prev = _context.next) {
                                            case 0:
                                              myConsole.log(err);
                                              if (!(i >= RETRY_LIMIT)) {
                                                _context.next = 5;
                                                break;
                                              }
                                              throw err;
                                            case 5:
                                              if (!(err.status == 422)) {
                                                _context.next = 9;
                                                break;
                                              }
                                              throw err;
                                            case 9:
                                              _context.next = 11;
                                              return sleep(wait);
                                            case 11:
                                              wait *= 2;
                                            case 12:
                                            case "end":
                                              return _context.stop();
                                          }
                                        }
                                      }, _callee);
                                    }));
                                    return function (_x) {
                                      return _ref2.apply(this, arguments);
                                    };
                                  }());
                                case 3:
                                  ajaxResult = _context2.sent;
                                  if (!((ajaxResult === null || ajaxResult === void 0 ? void 0 : ajaxResult.result) == 'OK')) {
                                    _context2.next = 9;
                                    break;
                                  }
                                  // このチャンクは送信成功したので次に行く
                                  // 送信時間を計測
                                  upTime = (new Date().getTime() - upStartAt.getTime()) / 1000.0;
                                  bps = (chunkEnd - sent) / upTime;

                                  // 次のURLが来てたら更新する
                                  chunkUploadUrl = (_ajaxResult$url = ajaxResult.url) !== null && _ajaxResult$url !== void 0 ? _ajaxResult$url : chunkUploadUrl;
                                  return _context2.abrupt("return", "break");
                                case 9:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _loop);
                        });
                        i = 1;
                      case 24:
                        if (!(i <= RETRY_LIMIT)) {
                          _context5.next = 32;
                          break;
                        }
                        return _context5.delegateYield(_loop(i), "t0", 26);
                      case 26:
                        _ret = _context5.t0;
                        if (!(_ret === "break")) {
                          _context5.next = 29;
                          break;
                        }
                        return _context5.abrupt("break", 32);
                      case 29:
                        i++;
                        _context5.next = 24;
                        break;
                      case 32:
                        sent = chunkEnd;
                        maybeSent = chunkEnd;
                        _onProgress($self, sent * 100.0 / uploadFile.size);
                        _context5.next = 11;
                        break;
                      case 37:
                        // 分割アップロード完了したので、最後にファイルを結合する
                        finishData = {
                          file_name: uploadFile.name,
                          file_size: uploadFile.size,
                          is_finish: true
                        };
                        if (toUserId) {
                          finishData.to_user_id = toUserId;
                        }
                        wait = RETRY_INTERVAL;
                        _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2(_i) {
                          var _lastAjaxResult2;
                          return _regeneratorRuntime().wrap(function _loop2$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  _context4.next = 2;
                                  return $.ajax({
                                    type: 'POST',
                                    url: chunkUploadUrl,
                                    headers: {
                                      'X-CSRF-TOKEN': CSRF_TOKEN
                                    },
                                    contentType: 'application/json',
                                    data: JSON.stringify(finishData)
                                  })["catch"]( /*#__PURE__*/function () {
                                    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(err) {
                                      return _regeneratorRuntime().wrap(function _callee2$(_context3) {
                                        while (1) {
                                          switch (_context3.prev = _context3.next) {
                                            case 0:
                                              myConsole.log(err);
                                              if (!(_i >= RETRY_LIMIT)) {
                                                _context3.next = 5;
                                                break;
                                              }
                                              throw err;
                                            case 5:
                                              if (!(err.status == 422)) {
                                                _context3.next = 9;
                                                break;
                                              }
                                              throw err;
                                            case 9:
                                              _context3.next = 11;
                                              return sleep(wait);
                                            case 11:
                                              wait *= 2;
                                            case 12:
                                            case "end":
                                              return _context3.stop();
                                          }
                                        }
                                      }, _callee2);
                                    }));
                                    return function (_x2) {
                                      return _ref3.apply(this, arguments);
                                    };
                                  }());
                                case 2:
                                  lastAjaxResult = _context4.sent;
                                  if (!((_lastAjaxResult2 = lastAjaxResult) !== null && _lastAjaxResult2 !== void 0 && _lastAjaxResult2.media)) {
                                    _context4.next = 5;
                                    break;
                                  }
                                  return _context4.abrupt("return", "break");
                                case 5:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _loop2);
                        });
                        _i = 0;
                      case 42:
                        if (!(_i <= RETRY_LIMIT)) {
                          _context5.next = 50;
                          break;
                        }
                        return _context5.delegateYield(_loop2(_i), "t1", 44);
                      case 44:
                        _ret2 = _context5.t1;
                        if (!(_ret2 === "break")) {
                          _context5.next = 47;
                          break;
                        }
                        return _context5.abrupt("break", 50);
                      case 47:
                        _i++;
                        _context5.next = 42;
                        break;
                      case 50:
                        myConsole.log(lastAjaxResult);
                        if (!((_lastAjaxResult = lastAjaxResult) !== null && _lastAjaxResult !== void 0 && _lastAjaxResult.media)) {
                          _context5.next = 55;
                          break;
                        }
                        // 全部終わったので成功時コールバックを叩く
                        _onSuccess($self, lastAjaxResult.media);
                        _context5.next = 56;
                        break;
                      case 55:
                        throw new Error('結合API失敗');
                      case 56:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee3);
              })(), "t0", 2);
            case 2:
              _context6.next = 8;
              break;
            case 4:
              _context6.prev = 4;
              _context6.t1 = _context6["catch"](0);
              myConsole.error(_context6.t1);
              _onFailure($self, _context6.t1);
            case 8:
              _context6.prev = 8;
              clearInterval(progressTimer);
              _onComplete($self);
              $self.val('');
              return _context6.finish(8);
            case 13:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee4, null, [[0, 4, 8, 13]]);
    }))();
  });
};

/***/ }),

/***/ "./resources/js/utility.js":
/*!*********************************!*\
  !*** ./resources/js/utility.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
window.setIndexNameToListItems = function () {
  var idx = 1;
  document.querySelectorAll('[data-index]').forEach(function (dom) {
    dom.setAttribute('data-index', idx++);
  });
  document.querySelectorAll('[data-index] [data-list_name][data-key_name]').forEach(function (dom) {
    var name = dom.getAttribute('data-list_name') + '[' + dom.closest('[data-index]').getAttribute('data-index') + '][' + dom.getAttribute('data-key_name') + ']';
    dom.setAttribute('name', name);
  });
};
$('form .submit_button').on('click', function () {
  var $self = $(this);
  var $form = $self.closest('form');
  var originalTarget = $form.attr('target');
  if ($self.attr('data-target')) {
    $form.attr('target', $self.attr('data-target'));
  }
  if ($self.attr('data-action')) {
    $form.attr('action', $self.attr('data-action'));
  }
  $form.submit();
  if (originalTarget) {
    $form.attr('target', originalTarget);
  } else {
    $form.removeAttr('target');
  }
});
window.addEventListener("DOMContentLoaded", function () {
  // textareaタグを全て取得
  var textareaEls = document.querySelectorAll("textarea");
  textareaEls.forEach(function (textareaEl) {
    // デフォルト値としてスタイル属性を付与
    textareaEl.setAttribute("style", "height: ".concat(textareaEl.scrollHeight, "px;"));
    // inputイベントが発生するたびに関数呼び出し
    textareaEl.addEventListener("input", setTextareaHeight);
  });

  // textareaの高さを計算して指定する関数
  function setTextareaHeight() {
    this.style.height = "auto";
    this.style.height = "".concat(this.scrollHeight, "px");
  }
});

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], function() { return __webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/sass/app.scss"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBQSxtQkFBTyxDQUFDLGdEQUFhLENBQUM7QUFDdEJBLG1CQUFPLENBQUMsMENBQVUsQ0FBQztBQUNuQkEsbUJBQU8sQ0FBQyx3Q0FBUyxDQUFDO0FBQ2xCQSxtQkFBTyxDQUFDLDRDQUFXLENBQUM7QUFFcEJBLG1CQUFPLENBQUMsd0ZBQWlDLENBQUM7Ozs7Ozs7Ozs7QUNMMUNDLE1BQU0sQ0FBQ0MsQ0FBQyxHQUFHRixtQkFBTyxDQUFDLCtDQUFRLENBQUM7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFDLE1BQU0sQ0FBQ0UsS0FBSyxHQUFHSCxtQkFBTyxDQUFDLDRDQUFPLENBQUM7QUFFL0JDLE1BQU0sQ0FBQ0UsS0FBSyxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsZ0JBQWdCOztBQUUzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OytDQzFCQTtBQUFBO0FBQUE7QUFEQSxJQUFJQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO0VBQUEsSUFDakNDLFdBQVcsR0FBcEIsU0FBU0EsV0FBVyxHQUFHO0lBQ25CQyx1QkFBdUIsRUFBRTtJQUV6QixJQUFJQyxnQkFBZ0IsR0FBRyxtQkFBbUI7SUFDMUNKLENBQUMsQ0FBQyxvREFBb0QsQ0FBQyxDQUFDSyxJQUFJLENBQUMsWUFBVztNQUNwRSxJQUFNQyxPQUFPLEdBQUdOLENBQUMsQ0FBQyxJQUFJLENBQUM7TUFDdkJJLGdCQUFnQixJQUFJLGlCQUFpQixHQUFDRSxPQUFPLENBQUNDLEdBQUcsRUFBRSxHQUFDLElBQUksR0FBQ0QsT0FBTyxDQUFDRSxJQUFJLEVBQUUsR0FBQyxXQUFXO0lBQ3ZGLENBQUMsQ0FBQztJQUNGUixDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0ssSUFBSSxDQUFDLFlBQVc7TUFDakMsSUFBTUksT0FBTyxHQUFHVCxDQUFDLENBQUMsSUFBSSxDQUFDO01BQ3ZCLElBQU1VLE9BQU8sR0FBR0QsT0FBTyxDQUFDRixHQUFHLEVBQUU7TUFDN0JFLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDUCxnQkFBZ0IsQ0FBQztNQUM5QkssT0FBTyxDQUFDRixHQUFHLENBQUNHLE9BQU8sQ0FBQztJQUN4QixDQUFDLENBQUM7RUFDTixDQUFDO0VBRURSLFdBQVcsRUFBRTtFQUViRixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUNZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsWUFBVztJQUMzQyxJQUFNQyxDQUFDLEdBQUdiLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ08sR0FBRyxFQUFFO0lBQ3ZCUCxDQUFDLENBQUMsd0NBQXdDLENBQUMsQ0FBQ0ssSUFBSSxDQUFDLFlBQVc7TUFDeEQsSUFBTVMsSUFBSSxHQUFHZCxDQUFDLENBQUMsSUFBSSxDQUFDO01BQ3BCLElBQUljLElBQUksQ0FBQ0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJRixDQUFDLEVBQUU7UUFDNUJDLElBQUksQ0FBQ0UsSUFBSSxFQUFFO01BQ2YsQ0FBQyxNQUFNO1FBQ0hGLElBQUksQ0FBQ0csSUFBSSxFQUFFO01BQ2Y7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7RUFDRmpCLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQ2tCLEtBQUssRUFBRTtFQUV4QmxCLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDWSxFQUFFLENBQUMsT0FBTyxFQUFFLHdDQUF3QywwRUFBRTtJQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7WUFDMUVPLEtBQUssR0FBR25CLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDZm9CLFNBQVMsR0FBR0QsS0FBSyxDQUFDRSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLG9EQUFvRCxDQUFDLENBQUNkLElBQUksRUFBRTtZQUM3R2UsR0FBRyxHQUFHQyw0QkFBNEIsQ0FBQ0MsT0FBTyxDQUFDLGFBQWEsRUFBRUwsU0FBUyxDQUFDO1lBQUEsTUFDdEVwQixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzBCLE1BQU0sR0FBRyxDQUFDO2NBQUE7Y0FBQTtZQUFBO1lBQUE7WUFBQSxPQUNQQyxTQUFTLENBQUNKLEdBQUcsQ0FBQztVQUFBO1lBQUE7WUFBOUJLLE1BQU0sb0JBQU5BLE1BQU07WUFDYixJQUFJQSxNQUFNLElBQUksSUFBSSxFQUFFO2NBQ2hCVCxLQUFLLENBQUNFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDUSxNQUFNLEVBQUU7Y0FDeEMzQixXQUFXLEVBQUU7WUFDakI7VUFBQztVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUE7RUFBQSxDQUVSLEdBQUM7RUFDRkYsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUNZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsb0NBQW9DLEVBQUUsWUFBVztJQUM5RlYsV0FBVyxFQUFFO0VBQ2pCLENBQUMsQ0FBQztFQUNGRixDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQ1ksRUFBRSxDQUFDLFFBQVEsRUFBRSxtREFBbUQsRUFBRSxZQUFXO0lBQ3ZHWixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNxQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ1MsV0FBVyxDQUFDLFVBQVUsQ0FBQztFQUM3RCxDQUFDLENBQUM7RUFDRjlCLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDWSxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVc7SUFDN0MsSUFBTUUsSUFBSSxHQUFHZCxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQytCLEtBQUssRUFBRTtJQUM3Q2pCLElBQUksQ0FBQ2dCLFdBQVcsQ0FBQyxVQUFVLENBQUM7SUFDNUI5QixDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQ2dDLE1BQU0sQ0FBQ2xCLElBQUksQ0FBQztJQUMxQ1osV0FBVyxFQUFFO0VBQ2pCLENBQUMsQ0FBQztBQUNOOzs7Ozs7Ozs7OztBQ3hEQVIsTUFBTSxDQUFDdUMsU0FBUyxHQUFHLFVBQUFDLFNBQVMsRUFBSTtFQUM1QixPQUFPLElBQUlDLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBSztJQUNwQyxJQUFNQyxRQUFRLEdBQUcsV0FBVyxHQUFDSixTQUFTO0lBQ3RDLElBQU1LLE1BQU0sR0FBR3ZDLENBQUMsQ0FBQ3NDLFFBQVEsQ0FBQztJQUUxQkMsTUFBTSxDQUFDQyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBRXZCRCxNQUFNLENBQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLENBQUNtQixHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQzdCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxZQUFXO01BQ2xGMkIsTUFBTSxDQUFDVCxXQUFXLENBQUMsTUFBTSxDQUFDO01BQzFCTSxPQUFPLENBQUM7UUFDSixRQUFRLEVBQUU7TUFDZCxDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7SUFDRkcsTUFBTSxDQUFDakIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDbUIsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM3QixFQUFFLENBQUMsa0JBQWtCLEVBQUUsWUFBVztNQUNuRjJCLE1BQU0sQ0FBQ1QsV0FBVyxDQUFDLE1BQU0sQ0FBQztNQUMxQk0sT0FBTyxDQUFDO1FBQ0osUUFBUSxFQUFFO01BQ2QsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0lBQ0ZHLE1BQU0sQ0FBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQ21CLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDN0IsRUFBRSxDQUFDLGtCQUFrQixFQUFFLFlBQVc7TUFDbkYsSUFBTU8sS0FBSyxHQUFHbkIsQ0FBQyxDQUFDLElBQUksQ0FBQztNQUNyQnVDLE1BQU0sQ0FBQ1QsV0FBVyxDQUFDLE1BQU0sQ0FBQztNQUMxQk0sT0FBTyxDQUFDO1FBQ0osUUFBUSxFQUFFakIsS0FBSyxDQUFDSixJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ25DLE1BQU0sRUFBRUksS0FBSyxDQUFDSixJQUFJLENBQUMsV0FBVztNQUNsQyxDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDTixDQUFDO0FBRURyQixNQUFNLENBQUNpQyxTQUFTLEdBQUcsVUFBQ0osR0FBRyxFQUFpQjtFQUFBLElBQWZtQixLQUFLLHVFQUFHLEVBQUU7RUFDL0IxQyxDQUFDLENBQUMsdUNBQXVDLENBQUMsQ0FBQ1csSUFBSSxDQUFDWSxHQUFHLENBQUNFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7RUFDM0V6QixDQUFDLENBQUMscUNBQXFDLENBQUMsQ0FBQ1EsSUFBSSxDQUFDa0MsS0FBSyxDQUFDO0VBQ3BELE9BQU9ULFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQztBQUMzQyxDQUFDOzs7Ozs7Ozs7Ozs7K0NDakNEO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBdkMsTUFBTSxDQUFDaUQsa0JBQWtCLEdBQUcsVUFBQ0MsTUFBTSxFQUFLO0VBQ3BDLElBQU1DLFVBQVUsR0FBRyxDQUFDRCxNQUFNLENBQUNFLFNBQVMsSUFBSSxFQUFFLEVBQUVwQixNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBQ2tCLE1BQU0sQ0FBQ0UsU0FBUyxHQUFHLEVBQUU7RUFDbEYsSUFBTUMsU0FBUyxHQUFHLE1BQU0sR0FBQ0YsVUFBVSxHQUFDLDhCQUE4QjtFQUNsRSxJQUFNRyxVQUFVLEdBQUdKLE1BQU0sQ0FBQ0ssU0FBUyxJQUFLLFVBQUNDLE1BQU0sRUFBRUMsS0FBSyxFQUFLO0lBQUVDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7RUFBRSxDQUFFO0VBQ3JGLElBQU1HLFVBQVUsR0FBR1YsTUFBTSxDQUFDVyxTQUFTLElBQUssVUFBQ0wsTUFBTSxFQUFFTSxHQUFHLEVBQUs7SUFBRUosU0FBUyxDQUFDSyxLQUFLLENBQUNELEdBQUcsQ0FBQztFQUFFLENBQUU7RUFDbkYsSUFBTUUsV0FBVyxHQUFHZCxNQUFNLENBQUNlLFVBQVUsSUFBSyxVQUFDVCxNQUFNLEVBQUssQ0FBQyxDQUFFO0VBQ3pELElBQU1VLFdBQVcsR0FBR2hCLE1BQU0sQ0FBQ2lCLFVBQVUsSUFBSyxVQUFDWCxNQUFNLEVBQUVZLE9BQU8sRUFBSyxDQUFDLENBQUU7RUFFbEVWLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDTixTQUFTLENBQUM7RUFFeEIvQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNZLEVBQUUsQ0FBQyxRQUFRLEVBQUVtQyxTQUFTLEVBQUUsWUFBVztJQUN6QyxJQUFNNUIsS0FBSyxHQUFHbkIsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNyQixJQUFJLENBQUNtQixLQUFLLENBQUNaLEdBQUcsRUFBRSxFQUFFO01BQ2Q7SUFDSjtJQUVBLElBQU13RCxLQUFLLEdBQUc1QyxLQUFLLENBQUNFLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDbkMsSUFBTTJDLFVBQVUsR0FBRzdDLEtBQUssQ0FBQzhDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekMsSUFBTUMsUUFBUSxHQUFHSCxLQUFLLENBQUN6QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQ2YsR0FBRyxFQUFFO0lBRXRELDJEQUFDO01BQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUE7a0JBQUE7b0JBQUE7c0JBQUE7d0JBR2E0RCxVQUFVLEdBQUcsR0FBRyxHQUFDLElBQUksR0FBQyxJQUFJO3dCQUMxQkMsV0FBVyxHQUFHLENBQUM7d0JBQ2ZDLGNBQWMsR0FBRyxHQUFHO3dCQUNwQkMsZ0JBQWdCLEdBQUd0RSxDQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQ2UsSUFBSSxDQUFDLFNBQVMsQ0FBQzt3QkFDbkV3RCxVQUFVLEdBQUd2RSxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQ2UsSUFBSSxDQUFDLFNBQVMsQ0FBQzt3QkFFM0R5RCxJQUFJLEdBQUcsQ0FBQyxFQUFFO3dCQUNWQyxTQUFTLEdBQUcsQ0FBQyxFQUFFO3dCQUNmQyxjQUFjLEdBQUdKLGdCQUFnQjt3QkFDM0I7d0JBRU5LLEdBQUcsR0FBRyxDQUFDLEVBQUU7d0JBQ2JDLGFBQWEsR0FBR0MsV0FBVyxDQUFDLFlBQU07MEJBQzlCSixTQUFTLElBQUlFLEdBQUcsR0FBRyxHQUFHOzBCQUN0QixJQUFJRixTQUFTLEdBQUdELElBQUksR0FBR0wsVUFBVSxFQUFFOzRCQUMvQk0sU0FBUyxHQUFHRCxJQUFJLEdBQUdMLFVBQVU7MEJBQ2pDOzBCQUNBLElBQUlXLEdBQUcsR0FBR0wsU0FBUyxHQUFHLEtBQUssR0FBR1QsVUFBVSxDQUFDZSxJQUFJOzBCQUM3QyxJQUFJRCxHQUFHLEdBQUcsSUFBSSxFQUFFQSxHQUFHLEdBQUcsSUFBSTswQkFDMUJsQixXQUFXLENBQUN6QyxLQUFLLEVBQUUyRCxHQUFHLENBQUM7d0JBQzNCLENBQUMsRUFBRSxJQUFJLENBQUM7d0JBRVJsQixXQUFXLENBQUN6QyxLQUFLLEVBQUUsQ0FBQyxDQUFDO3NCQUFDO3dCQUFBLE1BQ2ZxRCxJQUFJLEdBQUdSLFVBQVUsQ0FBQ2UsSUFBSTswQkFBQTswQkFBQTt3QkFBQTt3QkFDckJDLFFBQVEsR0FBR1IsSUFBSSxHQUFHTCxVQUFVLEVBQUU7d0JBQ2xDLElBQUlLLElBQUksSUFBSSxDQUFDLEVBQUU7MEJBQ1hRLFFBQVEsR0FBR2IsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUMvQjt3QkFFTWMsU0FBUyxHQUFHakIsVUFBVSxDQUFDa0IsS0FBSyxDQUFDVixJQUFJLEVBQUVRLFFBQVEsQ0FBQzt3QkFDbEQ1QixTQUFTLENBQUNDLEdBQUcsQ0FBQ21CLElBQUksRUFBRVEsUUFBUSxDQUFDO3dCQUM3QjVCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDNEIsU0FBUyxDQUFDO3dCQUVsQkUsRUFBRSxHQUFHLElBQUlDLFFBQVEsRUFBRTt3QkFDekJELEVBQUUsQ0FBQ25ELE1BQU0sQ0FBQyxXQUFXLEVBQUVnQyxVQUFVLENBQUNxQixJQUFJLENBQUM7d0JBQ3ZDRixFQUFFLENBQUNuRCxNQUFNLENBQUMsV0FBVyxFQUFFZ0MsVUFBVSxDQUFDZSxJQUFJLENBQUM7d0JBQ3ZDSSxFQUFFLENBQUNuRCxNQUFNLENBQUMsWUFBWSxFQUFFaUQsU0FBUyxDQUFDO3dCQUVsQ0ssSUFBSSxHQUFHakIsY0FBYzt3QkFBQywrREFDYmtCLENBQUM7MEJBQUE7MEJBQUE7NEJBQUE7OEJBQUE7Z0NBQUE7a0NBQ0FDLFNBQVMsR0FBRyxJQUFJQyxJQUFJLEVBQUU7a0NBQUE7a0NBQUEsT0FFSHpGLENBQUMsQ0FBQzBGLElBQUksQ0FBQztvQ0FDNUJDLElBQUksRUFBRSxNQUFNO29DQUNaQyxHQUFHLEVBQUVsQixjQUFjO29DQUNuQjVFLE9BQU8sRUFBRTtzQ0FDTCxjQUFjLEVBQUV5RTtvQ0FDcEIsQ0FBQztvQ0FDRHNCLFdBQVcsRUFBRSxLQUFLO29DQUNsQkMsV0FBVyxFQUFFLEtBQUs7b0NBQ2xCQyxJQUFJLEVBQUVaO2tDQUNWLENBQUMsQ0FBQyxTQUFNO29DQUFBLHVFQUFDLGlCQUFNYSxHQUFHO3NDQUFBO3dDQUFBOzBDQUFBOzRDQUFBOzhDQUNkNUMsU0FBUyxDQUFDQyxHQUFHLENBQUMyQyxHQUFHLENBQUM7OENBQUMsTUFDZlQsQ0FBQyxJQUFJbkIsV0FBVztnREFBQTtnREFBQTs4Q0FBQTs4Q0FBQSxNQUVWNEIsR0FBRzs0Q0FBQTs4Q0FBQSxNQUNIQSxHQUFHLENBQUNDLE1BQU0sSUFBSSxHQUFHO2dEQUFBO2dEQUFBOzhDQUFBOzhDQUFBLE1BRWpCRCxHQUFHOzRDQUFBOzhDQUFBOzhDQUFBLE9BR0hFLEtBQUssQ0FBQ1osSUFBSSxDQUFDOzRDQUFBOzhDQUNqQkEsSUFBSSxJQUFJLENBQUM7NENBQUM7NENBQUE7OENBQUE7MENBQUE7d0NBQUE7c0NBQUE7b0NBQUEsQ0FFakI7b0NBQUE7c0NBQUE7b0NBQUE7a0NBQUEsSUFBQztnQ0FBQTtrQ0F0QklhLFVBQVU7a0NBQUEsTUF1QlosQ0FBQUEsVUFBVSxhQUFWQSxVQUFVLHVCQUFWQSxVQUFVLENBQUV2RSxNQUFNLEtBQUksSUFBSTtvQ0FBQTtvQ0FBQTtrQ0FBQTtrQ0FDMUI7a0NBRUE7a0NBQ013RSxNQUFNLEdBQUcsQ0FBRSxJQUFJWCxJQUFJLEVBQUUsQ0FBRVksT0FBTyxFQUFFLEdBQUdiLFNBQVMsQ0FBQ2EsT0FBTyxFQUFFLElBQUksTUFBTTtrQ0FDdEUxQixHQUFHLEdBQUcsQ0FBQ0ssUUFBUSxHQUFHUixJQUFJLElBQUk0QixNQUFNOztrQ0FFaEM7a0NBQ0ExQixjQUFjLHNCQUFHeUIsVUFBVSxDQUFDUCxHQUFHLDZEQUFJbEIsY0FBYztrQ0FBQztnQ0FBQTtnQ0FBQTtrQ0FBQTs4QkFBQTs0QkFBQTswQkFBQTt3QkFBQTt3QkFsQ2pEYSxDQUFDLEdBQUcsQ0FBQztzQkFBQTt3QkFBQSxNQUFHQSxDQUFDLElBQUluQixXQUFXOzBCQUFBOzBCQUFBO3dCQUFBO3dCQUFBLHFDQUF4Qm1CLENBQUM7c0JBQUE7d0JBQUE7d0JBQUE7MEJBQUE7MEJBQUE7d0JBQUE7d0JBQUE7c0JBQUE7d0JBQTBCQSxDQUFDLEVBQUU7d0JBQUE7d0JBQUE7c0JBQUE7d0JBc0N2Q2YsSUFBSSxHQUFHUSxRQUFRO3dCQUNmUCxTQUFTLEdBQUdPLFFBQVE7d0JBRXBCcEIsV0FBVyxDQUFDekMsS0FBSyxFQUFFcUQsSUFBSSxHQUFHLEtBQUssR0FBR1IsVUFBVSxDQUFDZSxJQUFJLENBQUM7d0JBQUM7d0JBQUE7c0JBQUE7d0JBR3ZEO3dCQUNNdUIsVUFBVSxHQUFHOzBCQUNmQyxTQUFTLEVBQUV2QyxVQUFVLENBQUNxQixJQUFJOzBCQUMxQm1CLFNBQVMsRUFBRXhDLFVBQVUsQ0FBQ2UsSUFBSTswQkFDMUIwQixTQUFTLEVBQUU7d0JBQ2YsQ0FBQzt3QkFDRCxJQUFJdkMsUUFBUSxFQUFFOzBCQUNWb0MsVUFBVSxDQUFDSSxVQUFVLEdBQUd4QyxRQUFRO3dCQUNwQzt3QkFHQW9CLElBQUksR0FBR2pCLGNBQWM7d0JBQUMsaUVBQ2JrQixFQUFDOzBCQUFBOzBCQUFBOzRCQUFBOzhCQUFBO2dDQUFBO2tDQUFBO2tDQUFBLE9BQ2lCdkYsQ0FBQyxDQUFDMEYsSUFBSSxDQUFDO29DQUMxQkMsSUFBSSxFQUFFLE1BQU07b0NBQ1pDLEdBQUcsRUFBRWxCLGNBQWM7b0NBQ25CNUUsT0FBTyxFQUFFO3NDQUNMLGNBQWMsRUFBRXlFO29DQUNwQixDQUFDO29DQUNEc0IsV0FBVyxFQUFFLGtCQUFrQjtvQ0FDL0JFLElBQUksRUFBRVksSUFBSSxDQUFDQyxTQUFTLENBQUNOLFVBQVU7a0NBQ25DLENBQUMsQ0FBQyxTQUFNO29DQUFBLHVFQUFDLGtCQUFNTixHQUFHO3NDQUFBO3dDQUFBOzBDQUFBOzRDQUFBOzhDQUNkNUMsU0FBUyxDQUFDQyxHQUFHLENBQUMyQyxHQUFHLENBQUM7OENBQUMsTUFDZlQsRUFBQyxJQUFJbkIsV0FBVztnREFBQTtnREFBQTs4Q0FBQTs4Q0FBQSxNQUVWNEIsR0FBRzs0Q0FBQTs4Q0FBQSxNQUNIQSxHQUFHLENBQUNDLE1BQU0sSUFBSSxHQUFHO2dEQUFBO2dEQUFBOzhDQUFBOzhDQUFBLE1BRWpCRCxHQUFHOzRDQUFBOzhDQUFBOzhDQUFBLE9BR0hFLEtBQUssQ0FBQ1osSUFBSSxDQUFDOzRDQUFBOzhDQUNqQkEsSUFBSSxJQUFJLENBQUM7NENBQUM7NENBQUE7OENBQUE7MENBQUE7d0NBQUE7c0NBQUE7b0NBQUEsQ0FFakI7b0NBQUE7c0NBQUE7b0NBQUE7a0NBQUEsSUFBQztnQ0FBQTtrQ0FyQkZ1QixjQUFjO2tDQUFBLDBCQXVCVkEsY0FBYyw2Q0FBZCxpQkFBZ0IxRCxLQUFLO29DQUFBO29DQUFBO2tDQUFBO2tDQUFBO2dDQUFBO2dDQUFBO2tDQUFBOzhCQUFBOzRCQUFBOzBCQUFBO3dCQUFBO3dCQXhCcEJvQyxFQUFDLEdBQUcsQ0FBQztzQkFBQTt3QkFBQSxNQUFHQSxFQUFDLElBQUluQixXQUFXOzBCQUFBOzBCQUFBO3dCQUFBO3dCQUFBLHNDQUF4Qm1CLEVBQUM7c0JBQUE7d0JBQUE7d0JBQUE7MEJBQUE7MEJBQUE7d0JBQUE7d0JBQUE7c0JBQUE7d0JBQTBCQSxFQUFDLEVBQUU7d0JBQUE7d0JBQUE7c0JBQUE7d0JBNkJ2Q25DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDd0QsY0FBYyxDQUFDO3dCQUFDLHlCQUMxQkEsY0FBYyw0Q0FBZCxnQkFBZ0IxRCxLQUFLOzBCQUFBOzBCQUFBO3dCQUFBO3dCQUNyQjt3QkFDQUgsVUFBVSxDQUFDN0IsS0FBSyxFQUFFMEYsY0FBYyxDQUFDMUQsS0FBSyxDQUFDO3dCQUFDO3dCQUFBO3NCQUFBO3dCQUFBLE1BRWxDLElBQUkyRCxLQUFLLENBQUMsU0FBUyxDQUFDO3NCQUFBO3NCQUFBO3dCQUFBO29CQUFBO2tCQUFBO2dCQUFBO2NBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtjQUFBO2NBQUE7Y0FJOUIxRCxTQUFTLENBQUNLLEtBQUssY0FBSztjQUNwQkgsVUFBVSxDQUFDbkMsS0FBSyxlQUFNO1lBQUM7Y0FBQTtjQUV2QjRGLGFBQWEsQ0FBQ25DLGFBQWEsQ0FBQztjQUM1QmxCLFdBQVcsQ0FBQ3ZDLEtBQUssQ0FBQztjQUNsQkEsS0FBSyxDQUFDWixHQUFHLENBQUMsRUFBRSxDQUFDO2NBQUM7WUFBQTtZQUFBO2NBQUE7VUFBQTtRQUFBO01BQUE7SUFBQSxDQUVyQixJQUFHO0VBQ1IsQ0FBQyxDQUFDO0FBQ04sQ0FBQzs7Ozs7Ozs7Ozs7QUM5S0RiLE1BQU0sQ0FBQ1MsdUJBQXVCLEdBQUcsWUFBTTtFQUNuQyxJQUFJNkcsR0FBRyxHQUFHLENBQUM7RUFDWEMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQUFDLEdBQUcsRUFBSTtJQUNyREEsR0FBRyxDQUFDQyxZQUFZLENBQUMsWUFBWSxFQUFFTCxHQUFHLEVBQUUsQ0FBQztFQUN6QyxDQUFDLENBQUM7RUFDRkMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBQUMsR0FBRyxFQUFJO0lBQ3JGLElBQU0vQixJQUFJLEdBQUcrQixHQUFHLENBQUNFLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFDLEdBQUcsR0FBQ0YsR0FBRyxDQUFDL0YsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDaUcsWUFBWSxDQUFDLFlBQVksQ0FBQyxHQUFDLElBQUksR0FBQ0YsR0FBRyxDQUFDRSxZQUFZLENBQUMsZUFBZSxDQUFDLEdBQUMsR0FBRztJQUNySkYsR0FBRyxDQUFDQyxZQUFZLENBQUMsTUFBTSxFQUFFaEMsSUFBSSxDQUFDO0VBQ2xDLENBQUMsQ0FBQztBQUNOLENBQUM7QUFFRHJGLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDWSxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVc7RUFDNUMsSUFBTU8sS0FBSyxHQUFHbkIsQ0FBQyxDQUFDLElBQUksQ0FBQztFQUNyQixJQUFNK0QsS0FBSyxHQUFHNUMsS0FBSyxDQUFDRSxPQUFPLENBQUMsTUFBTSxDQUFDO0VBQ25DLElBQU1rRyxjQUFjLEdBQUd4RCxLQUFLLENBQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDO0VBRTNDLElBQUlJLEtBQUssQ0FBQ0osSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFO0lBQzNCZ0QsS0FBSyxDQUFDaEQsSUFBSSxDQUFDLFFBQVEsRUFBRUksS0FBSyxDQUFDSixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7RUFDbkQ7RUFDQSxJQUFJSSxLQUFLLENBQUNKLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtJQUMzQmdELEtBQUssQ0FBQ2hELElBQUksQ0FBQyxRQUFRLEVBQUVJLEtBQUssQ0FBQ0osSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0VBQ25EO0VBQ0FnRCxLQUFLLENBQUN5RCxNQUFNLEVBQUU7RUFFZCxJQUFJRCxjQUFjLEVBQUU7SUFDaEJ4RCxLQUFLLENBQUNoRCxJQUFJLENBQUMsUUFBUSxFQUFFd0csY0FBYyxDQUFDO0VBQ3hDLENBQUMsTUFBTTtJQUNIeEQsS0FBSyxDQUFDMEQsVUFBVSxDQUFDLFFBQVEsQ0FBQztFQUM5QjtBQUNKLENBQUMsQ0FBQztBQUVGL0gsTUFBTSxDQUFDZ0ksZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtFQUNoRDtFQUNBLElBQU1DLFdBQVcsR0FBR1YsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7RUFFekRTLFdBQVcsQ0FBQ1IsT0FBTyxDQUFDLFVBQUNTLFVBQVUsRUFBSztJQUNsQztJQUNBQSxVQUFVLENBQUNQLFlBQVksQ0FBQyxPQUFPLG9CQUFhTyxVQUFVLENBQUNDLFlBQVksU0FBTTtJQUN6RTtJQUNBRCxVQUFVLENBQUNGLGdCQUFnQixDQUFDLE9BQU8sRUFBRUksaUJBQWlCLENBQUM7RUFDekQsQ0FBQyxDQUFDOztFQUVGO0VBQ0EsU0FBU0EsaUJBQWlCLEdBQUc7SUFDM0IsSUFBSSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sR0FBRyxNQUFNO0lBQzFCLElBQUksQ0FBQ0QsS0FBSyxDQUFDQyxNQUFNLGFBQU0sSUFBSSxDQUFDSCxZQUFZLE9BQUk7RUFDOUM7QUFDRixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQy9DRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaW5kaXZpc3VhbC9teV9zY2VuYXJpby1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BvcHVwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy91cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3Nhc3MvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi9ib290c3RyYXAnKTtcbnJlcXVpcmUoJy4vdXBsb2FkJyk7XG5yZXF1aXJlKCcuL3BvcHVwJyk7XG5yZXF1aXJlKCcuL3V0aWxpdHknKTtcblxucmVxdWlyZSgnLi9pbmRpdmlzdWFsL215X3NjZW5hcmlvLWNyZWF0ZScpO1xuXG4iLCJ3aW5kb3cuXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuXG4vKipcbiAqIFdlJ2xsIGxvYWQgdGhlIGF4aW9zIEhUVFAgbGlicmFyeSB3aGljaCBhbGxvd3MgdXMgdG8gZWFzaWx5IGlzc3VlIHJlcXVlc3RzXG4gKiB0byBvdXIgTGFyYXZlbCBiYWNrLWVuZC4gVGhpcyBsaWJyYXJ5IGF1dG9tYXRpY2FsbHkgaGFuZGxlcyBzZW5kaW5nIHRoZVxuICogQ1NSRiB0b2tlbiBhcyBhIGhlYWRlciBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgdGhlIFwiWFNSRlwiIHRva2VuIGNvb2tpZS5cbiAqL1xuXG53aW5kb3cuYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbi8qKlxuICogRWNobyBleHBvc2VzIGFuIGV4cHJlc3NpdmUgQVBJIGZvciBzdWJzY3JpYmluZyB0byBjaGFubmVscyBhbmQgbGlzdGVuaW5nXG4gKiBmb3IgZXZlbnRzIHRoYXQgYXJlIGJyb2FkY2FzdCBieSBMYXJhdmVsLiBFY2hvIGFuZCBldmVudCBicm9hZGNhc3RpbmdcbiAqIGFsbG93cyB5b3VyIHRlYW0gdG8gZWFzaWx5IGJ1aWxkIHJvYnVzdCByZWFsLXRpbWUgd2ViIGFwcGxpY2F0aW9ucy5cbiAqL1xuXG4vLyBpbXBvcnQgRWNobyBmcm9tICdsYXJhdmVsLWVjaG8nO1xuXG4vLyB3aW5kb3cuUHVzaGVyID0gcmVxdWlyZSgncHVzaGVyLWpzJyk7XG5cbi8vIHdpbmRvdy5FY2hvID0gbmV3IEVjaG8oe1xuLy8gICAgIGJyb2FkY2FzdGVyOiAncHVzaGVyJyxcbi8vICAgICBrZXk6IHByb2Nlc3MuZW52Lk1JWF9QVVNIRVJfQVBQX0tFWSxcbi8vICAgICBjbHVzdGVyOiBwcm9jZXNzLmVudi5NSVhfUFVTSEVSX0FQUF9DTFVTVEVSLFxuLy8gICAgIGZvcmNlVExTOiB0cnVlXG4vLyB9KTtcbiIsImlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ215X3NjZW5hcmlvLWNyZWF0ZScpKSB7XG4gICAgZnVuY3Rpb24gdXBkYXRlTGlzdHMoKSB7XG4gICAgICAgIHNldEluZGV4TmFtZVRvTGlzdEl0ZW1zKCk7XG5cbiAgICAgICAgbGV0IGNyaW1pbmFsTGlzdEh0bWwgPSAnPG9wdGlvbj48L29wdGlvbj4nO1xuICAgICAgICAkKCdzZWxlY3RbZGF0YS1rZXlfbmFtZT1jaGFyYWN0ZXJfaWRdIG9wdGlvbjpzZWxlY3RlZCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCAkb3B0aW9uID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGNyaW1pbmFsTGlzdEh0bWwgKz0gJzxvcHRpb24gdmFsdWU9XCInKyRvcHRpb24udmFsKCkrJ1wiPicrJG9wdGlvbi50ZXh0KCkrJzwvb3B0aW9uPic7XG4gICAgICAgIH0pO1xuICAgICAgICAkKCdzZWxlY3QuY3JpbWluYWwnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgJHNlbGVjdCA9ICQodGhpcyk7XG4gICAgICAgICAgICBjb25zdCBjaGFyYUlkID0gJHNlbGVjdC52YWwoKTtcbiAgICAgICAgICAgICRzZWxlY3QuaHRtbChjcmltaW5hbExpc3RIdG1sKTtcbiAgICAgICAgICAgICRzZWxlY3QudmFsKGNoYXJhSWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVMaXN0cygpO1xuXG4gICAgJCgnW25hbWU9ZGF5c10nKS5vbignY2hhbmdlIGNsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGQgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAkKCcuc2NlbmFyaW9faW5jaWRlbnRfbGlzdCA+IGxpW2RhdGEtZGF5XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCAkZG9tID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGlmICgkZG9tLmF0dHIoJ2RhdGEtZGF5JykgPD0gZCkge1xuICAgICAgICAgICAgICAgICRkb20uc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZG9tLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgJCgnW25hbWU9ZGF5c10nKS5jbGljaygpO1xuXG4gICAgJCgnLnNjZW5hcmlvX2NoYXJhY3Rlcl9saXN0Jykub24oJ2NsaWNrJywgJy5jaGFyYWN0ZXJfcm93IC5qcy1jaGFyYV9kZWxldGVfYnV0dG9uJywgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0ICRzZWxmID0gJCh0aGlzKTtcbiAgICAgICAgY29uc3QgY2hhcmFOYW1lID0gJHNlbGYuY2xvc2VzdCgnLmNoYXJhY3Rlcl9yb3cnKS5maW5kKCdzZWxlY3RbZGF0YS1rZXlfbmFtZT1jaGFyYWN0ZXJfaWRdIG9wdGlvbjpzZWxlY3RlZCcpLnRleHQoKTtcbiAgICAgICAgY29uc3QgbXNnID0gQ0hBUkFfREVMRVRFX0NPTkZJUk1fTUVTU0FHRS5yZXBsYWNlKCdfX19DSEFSQV9fXycsIGNoYXJhTmFtZSk7XG4gICAgICAgIGlmICgkKCcuY2hhcmFjdGVyX3JvdycpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHtyZXN1bHR9ID0gYXdhaXQgbXlDb25maXJtKG1zZyk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09ICdvaycpIHtcbiAgICAgICAgICAgICAgICAkc2VsZi5jbG9zZXN0KCcuY2hhcmFjdGVyX3JvdycpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUxpc3RzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAkKCcuc2NlbmFyaW9fY2hhcmFjdGVyX2xpc3QnKS5vbignY2xpY2sgY2hhbmdlJywgJ3NlbGVjdFtkYXRhLWtleV9uYW1lPWNoYXJhY3Rlcl9pZF0nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdXBkYXRlTGlzdHMoKTtcbiAgICB9KTtcbiAgICAkKCcuc2NlbmFyaW9fY2hhcmFjdGVyX2xpc3QnKS5vbignY2hhbmdlJywgJy5jaGFyYWN0ZXJfcm93IHNlbGVjdFtkYXRhLWtleV9uYW1lPWNoYXJhY3Rlcl9pZF0nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuY2hhcmFjdGVyX3JvdycpLnJlbW92ZUNsYXNzKCdpcy1lcnJvcicpO1xuICAgIH0pO1xuICAgICQoJy5qcy1jaGFyYV9hZGRfYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0ICRkb20gPSAkKCcuY2hhcmFjdGVyX3JvdzpsYXN0JykuY2xvbmUoKTtcbiAgICAgICAgJGRvbS5yZW1vdmVDbGFzcygnaXMtZXJyb3InKTtcbiAgICAgICAgJCgnLnNjZW5hcmlvX2NoYXJhY3Rlcl9saXN0JykuYXBwZW5kKCRkb20pO1xuICAgICAgICB1cGRhdGVMaXN0cygpO1xuICAgIH0pO1xufVxuIiwid2luZG93Lm9wZW5Qb3B1cCA9IGNsYXNzTmFtZSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSAnLmMtcG9wdXAuJytjbGFzc05hbWU7XG4gICAgICAgIGNvbnN0ICRwb3B1cCA9ICQoc2VsZWN0b3IpO1xuXG4gICAgICAgICRwb3B1cC5hZGRDbGFzcygnb3BlbicpO1xuXG4gICAgICAgICRwb3B1cC5maW5kKCcuZmlsdGVyLWFyZWEnKS5vZmYoJ2NsaWNrLm9wZW5fcG9wdXAnKS5vbignY2xpY2sub3Blbl9wb3B1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJHBvcHVwLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAncmVzdWx0JzogJ2Nsb3NlJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgJHBvcHVwLmZpbmQoJy5jbG9zZV9idXR0b24nKS5vZmYoJ2NsaWNrLm9wZW5fcG9wdXAnKS5vbignY2xpY2sub3Blbl9wb3B1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJHBvcHVwLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAncmVzdWx0JzogJ2Nsb3NlJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgJHBvcHVwLmZpbmQoJ1tkYXRhLXJlc3VsdF0nKS5vZmYoJ2NsaWNrLm9wZW5fcG9wdXAnKS5vbignY2xpY2sub3Blbl9wb3B1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgJHNlbGYgPSAkKHRoaXMpO1xuICAgICAgICAgICAgJHBvcHVwLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAncmVzdWx0JzogJHNlbGYuYXR0cignZGF0YS1yZXN1bHQnKSxcbiAgICAgICAgICAgICAgICAnaW5mbyc6ICRzZWxmLmF0dHIoJ2RhdGEtaW5mbycpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxud2luZG93Lm15Q29uZmlybSA9IChtc2csIHRpdGxlID0gJycpID0+IHtcbiAgICAkKCcuYy1wb3B1cC5qcy1wb3B1cC1teV9jb25maXJtIC5tZXNzYWdlJykuaHRtbChtc2cucmVwbGFjZShcIlxcXFxuXCIsICc8YnI+JykpO1xuICAgICQoJy5jLXBvcHVwLmpzLXBvcHVwLW15X2NvbmZpcm0gLnRpdGxlJykudGV4dCh0aXRsZSk7XG4gICAgcmV0dXJuIG9wZW5Qb3B1cCgnanMtcG9wdXAtbXlfY29uZmlybScpO1xufTtcbiIsIi8qKlxuKiDjg5XjgqHjgqTjg6vjgqLjg4Pjg5fjg63jg7zjg4lqc1xuKlxuKiBAcGFyYW0gb3B0aW9uLmZvcm1DbGFzcyDjg5XjgqHjgqTjg6vjgqLjg4Pjg5fjg63jg7zjg4njgqTjg5njg7Pjg4jjgpLku5XovrzjgoBmb3Jt44K/44Kw44Gu44Kv44Op44K5XG4qIEBwYXJhbSBvcHRpb24ub25TdWNjZXNzKCRpbnB1dCwgbWVkaWEpIOODleOCoeOCpOODq+OCouODg+ODl+ODreODvOODieaIkOWKn+aZguOBruWHpueQhuOAgiRpbnB1dOOBr+WvvuixoeOBrmlucHV0W3R5cGU9ZmlsZV1cbiogQHBhcmFtIG9wdGlvbi5vbkZhaWx1cmUoJGlucHV0LCByZXMpIOODleOCoeOCpOODq+OCouODg+ODl+ODreODvOODieWkseaVl+aZguOBruWHpueQhuOAgiRpbnB1dOOBr+WvvuixoeOBrmlucHV0W3R5cGU9ZmlsZV1cbiogQHBhcmFtIG9wdGlvbi5vbkNvbXBsZXRlKCRpbnB1dCwgeGhyKSDjg5XjgqHjgqTjg6vjgqLjg4Pjg5fjg63jg7zjg4nlrozkuobmmYLjga7lh6bnkIbjgIIkaW5wdXTjga/lr77osaHjga5pbnB1dFt0eXBlPWZpbGVdXG4qIEBwYXJhbSBvcHRpb24ub25Qcm9ncmVzcygkaW5wdXQsIHBlcmNlbnQpIOODleOCoeOCpOODq+OCouODg+ODl+ODreODvOODieS4reOBruWHpueQhuOAgiRpbnB1dOOBr+WvvuixoeOBrmlucHV0W3R5cGU9ZmlsZV1cbiovXG53aW5kb3cuc2V0RmlsZVVwbG9hZEV2ZW50ID0gKG9wdGlvbikgPT4ge1xuICAgIGNvbnN0IF9mb3JtQ2xhc3MgPSAob3B0aW9uLmZvcm1DbGFzcyB8fCAnJykubGVuZ3RoID4gMCA/ICcuJytvcHRpb24uZm9ybUNsYXNzIDogJyc7XG4gICAgY29uc3QgX3NlbGVjdG9yID0gJ2Zvcm0nK19mb3JtQ2xhc3MrJyBpbnB1dFt0eXBlPWZpbGVdW25hbWU9ZmlsZV0nO1xuICAgIGNvbnN0IF9vblN1Y2Nlc3MgPSBvcHRpb24ub25TdWNjZXNzIHx8ICgoJGlucHV0LCBtZWRpYSkgPT4geyBteUNvbnNvbGUubG9nKG1lZGlhKTsgfSk7XG4gICAgY29uc3QgX29uRmFpbHVyZSA9IG9wdGlvbi5vbkZhaWx1cmUgfHwgKCgkaW5wdXQsIHJlcykgPT4geyBteUNvbnNvbGUuZXJyb3IocmVzKTsgfSk7XG4gICAgY29uc3QgX29uQ29tcGxldGUgPSBvcHRpb24ub25Db21wbGV0ZSB8fCAoKCRpbnB1dCkgPT4ge30pO1xuICAgIGNvbnN0IF9vblByb2dyZXNzID0gb3B0aW9uLm9uUHJvZ3Jlc3MgfHwgKCgkaW5wdXQsIHBlcmNlbnQpID0+IHt9KTtcblxuICAgIG15Q29uc29sZS5sb2coX3NlbGVjdG9yKTtcblxuICAgICQoJ2JvZHknKS5vbignY2hhbmdlJywgX3NlbGVjdG9yLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgJHNlbGYgPSAkKHRoaXMpO1xuICAgICAgICBpZiAoISRzZWxmLnZhbCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJHNlbGYuY2xvc2VzdCgnZm9ybScpO1xuICAgICAgICBjb25zdCB1cGxvYWRGaWxlID0gJHNlbGYucHJvcCgnZmlsZXMnKVswXTtcbiAgICAgICAgY29uc3QgdG9Vc2VySWQgPSAkZm9ybS5maW5kKCdbbmFtZT10b191c2VyX2lkXScpLnZhbCgpO1xuICAgICAgICBcbiAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGxldCBwcm9ncmVzc1RpbWVyO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBDSFVOS19TSVpFID0gMTI4KjEwMjQqMTAyNDtcbiAgICAgICAgICAgICAgICBjb25zdCBSRVRSWV9MSU1JVCA9IDU7XG4gICAgICAgICAgICAgICAgY29uc3QgUkVUUllfSU5URVJWQUwgPSAxMDA7XG4gICAgICAgICAgICAgICAgY29uc3QgQ0hVTktfVVBMT0FEX1VSTCA9ICQoJ21ldGFbbmFtZT1jaHVua191cGxvYWRfdXJsXScpLmF0dHIoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBDU1JGX1RPS0VOID0gJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgc2VudCA9IDA7IC8vIOmAgeS/oea4iOOBv+ODkOOCpOODiOaVsFxuICAgICAgICAgICAgICAgIGxldCBtYXliZVNlbnQgPSAwOyAvLyDmnLrkuIrjga7pgIHkv6HmuIjjgb/jg5DjgqTjg4jmlbDjgILopovjgYvjgZHkuIrjga7jg5fjg63jgrDjg6zjgrnjg5Djg7zmm7TmlrDjga7jgZ/jgoHjgavkvb/jgYZcbiAgICAgICAgICAgICAgICBsZXQgY2h1bmtVcGxvYWRVcmwgPSBDSFVOS19VUExPQURfVVJMO1xuICAgICAgICAgICAgICAgIGxldCB3YWl0OyAvLyDmjIfmlbDjg5Djg4Pjgq/jgqrjg5XnlKhcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgYnBzID0gMDsgLy8g5ZCE44Ki44OD44OX44Ot44O844OJ44GL44KJ6KiI566X44GV44KM44GfQlBTW2J5dGUvc2VjXVxuICAgICAgICAgICAgICAgIHByb2dyZXNzVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1heWJlU2VudCArPSBicHMgKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXliZVNlbnQgPiBzZW50ICsgQ0hVTktfU0laRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF5YmVTZW50ID0gc2VudCArIENIVU5LX1NJWkU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IHBlciA9IG1heWJlU2VudCAqIDEwMC4wIC8gdXBsb2FkRmlsZS5zaXplO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGVyID4gOTkuOSkgcGVyID0gOTkuOTtcbiAgICAgICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MoJHNlbGYsIHBlcik7XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MoJHNlbGYsIDApO1xuICAgICAgICAgICAgICAgIHdoaWxlIChzZW50IDwgdXBsb2FkRmlsZS5zaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaHVua0VuZCA9IHNlbnQgKyBDSFVOS19TSVpFOyAvLyDku4rlm57pgIHjgovjg4Hjg6Pjg7Pjgq/jga7mnKvlsL7jg5DjgqTjg4hcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbnQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2h1bmtFbmQgPSBDSFVOS19TSVpFIC8gNDsgLy8g5pyA5Yid44Gg44GR44Gv6Lu944GE5a656YeP44Gn6YCB44KK44CB44Os44K544Od44Oz44K544K/44Kk44Og44KS6KiI5ris44GZ44KLXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNodW5rRGF0YSA9IHVwbG9hZEZpbGUuc2xpY2Uoc2VudCwgY2h1bmtFbmQpO1xuICAgICAgICAgICAgICAgICAgICBteUNvbnNvbGUubG9nKHNlbnQsIGNodW5rRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgbXlDb25zb2xlLmxvZyhjaHVua0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKCdmaWxlX25hbWUnLCB1cGxvYWRGaWxlLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoJ2ZpbGVfc2l6ZScsIHVwbG9hZEZpbGUuc2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZCgnY2h1bmtfZGF0YScsIGNodW5rRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB3YWl0ID0gUkVUUllfSU5URVJWQUw7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxIDsgaSA8PSBSRVRSWV9MSU1JVCA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBTdGFydEF0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWpheFJlc3VsdCA9IGF3YWl0ICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogY2h1bmtVcGxvYWRVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogQ1NSRl9UT0tFTixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZmQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChhc3luYyBlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15Q29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+PSBSRVRSWV9MSU1JVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDopo/lrprlm57mlbDlpLHmlZfjgZfjgZ/jga7jgafjgIHjgqLjg4Pjg5fjg63jg7zjg4nlh6bnkIblhajkvZPjgpLlpLHmlZfjgajjgb/jgarjgZlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihlcnIuc3RhdHVzID09IDQyMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA0MjLjga/jg5Djg6rjg4fjg7zjgrfjg6fjg7Pjgqjjg6njg7zjgarjga7jgafjgIHkvZXluqbnubDjgorov5TjgZfjgabjgoLjgrPjgrHjgovjga/jgZpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaMh+aVsOODkOODg+OCr+OCquODlVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCh3YWl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FpdCAqPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFqYXhSZXN1bHQ/LnJlc3VsdCA9PSAnT0snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g44GT44Gu44OB44Oj44Oz44Kv44Gv6YCB5L+h5oiQ5Yqf44GX44Gf44Gu44Gn5qyh44Gr6KGM44GPXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6YCB5L+h5pmC6ZaT44KS6KiI5risXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBUaW1lID0gKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSB1cFN0YXJ0QXQuZ2V0VGltZSgpKSAvIDEwMDAuMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicHMgPSAoY2h1bmtFbmQgLSBzZW50KSAvIHVwVGltZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmrKHjga5VUkzjgYzmnaXjgabjgZ/jgonmm7TmlrDjgZnjgotcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaHVua1VwbG9hZFVybCA9IGFqYXhSZXN1bHQudXJsID8/IGNodW5rVXBsb2FkVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNlbnQgPSBjaHVua0VuZDtcbiAgICAgICAgICAgICAgICAgICAgbWF5YmVTZW50ID0gY2h1bmtFbmQ7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcygkc2VsZiwgc2VudCAqIDEwMC4wIC8gdXBsb2FkRmlsZS5zaXplKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g5YiG5Ymy44Ki44OD44OX44Ot44O844OJ5a6M5LqG44GX44Gf44Gu44Gn44CB5pyA5b6M44Gr44OV44Kh44Kk44Or44KS57WQ5ZCI44GZ44KLXG4gICAgICAgICAgICAgICAgY29uc3QgZmluaXNoRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZV9uYW1lOiB1cGxvYWRGaWxlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGZpbGVfc2l6ZTogdXBsb2FkRmlsZS5zaXplLFxuICAgICAgICAgICAgICAgICAgICBpc19maW5pc2g6IHRydWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAodG9Vc2VySWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmluaXNoRGF0YS50b191c2VyX2lkID0gdG9Vc2VySWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBsYXN0QWpheFJlc3VsdDtcbiAgICAgICAgICAgICAgICB3YWl0ID0gUkVUUllfSU5URVJWQUw7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDw9IFJFVFJZX0xJTUlUIDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RBamF4UmVzdWx0ID0gYXdhaXQgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogY2h1bmtVcGxvYWRVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6IENTUkZfVE9LRU4sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGZpbmlzaERhdGEpLFxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChhc3luYyBlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXlDb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPj0gUkVUUllfTElNSVQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDopo/lrprlm57mlbDlpLHmlZfjgZfjgZ/jga7jgafjgIHjgqLjg4Pjg5fjg63jg7zjg4nlh6bnkIblhajkvZPjgpLlpLHmlZfjgajjgb/jgarjgZlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZXJyLnN0YXR1cyA9PSA0MjIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA0MjLjga/jg5Djg6rjg4fjg7zjgrfjg6fjg7Pjgqjjg6njg7zjgarjga7jgafjgIHkvZXluqbnubDjgorov5TjgZfjgabjgoLjgrPjgrHjgovjga/jgZpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaMh+aVsOODkOODg+OCr+OCquODlVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKHdhaXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhaXQgKj0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEFqYXhSZXN1bHQ/Lm1lZGlhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDjg5XjgqHjgqTjg6vntZDlkIhBUEnjgoLmiJDlip/jgZfjgZ/jga7jgafmrKHjgbhcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG15Q29uc29sZS5sb2cobGFzdEFqYXhSZXN1bHQpO1xuICAgICAgICAgICAgICAgIGlmIChsYXN0QWpheFJlc3VsdD8ubWVkaWEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5YWo6YOo57WC44KP44Gj44Gf44Gu44Gn5oiQ5Yqf5pmC44Kz44O844Or44OQ44OD44Kv44KS5Y+p44GPXG4gICAgICAgICAgICAgICAgICAgIF9vblN1Y2Nlc3MoJHNlbGYsIGxhc3RBamF4UmVzdWx0Lm1lZGlhKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ+e1kOWQiEFQSeWkseaVlycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIG15Q29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIF9vbkZhaWx1cmUoJHNlbGYsIGVycik7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwocHJvZ3Jlc3NUaW1lcik7XG4gICAgICAgICAgICAgICAgX29uQ29tcGxldGUoJHNlbGYpO1xuICAgICAgICAgICAgICAgICRzZWxmLnZhbCgnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgfSk7XG59O1xuXG4iLCJ3aW5kb3cuc2V0SW5kZXhOYW1lVG9MaXN0SXRlbXMgPSAoKSA9PiB7XG4gICAgbGV0IGlkeCA9IDE7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtaW5kZXhdJykuZm9yRWFjaChkb20gPT4ge1xuICAgICAgICBkb20uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaWR4KyspO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWluZGV4XSBbZGF0YS1saXN0X25hbWVdW2RhdGEta2V5X25hbWVdJykuZm9yRWFjaChkb20gPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gZG9tLmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0X25hbWUnKSsnWycrZG9tLmNsb3Nlc3QoJ1tkYXRhLWluZGV4XScpLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKyddWycrZG9tLmdldEF0dHJpYnV0ZSgnZGF0YS1rZXlfbmFtZScpKyddJztcbiAgICAgICAgZG9tLnNldEF0dHJpYnV0ZSgnbmFtZScsIG5hbWUpO1xuICAgIH0pO1xufTtcblxuJCgnZm9ybSAuc3VibWl0X2J1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0ICRzZWxmID0gJCh0aGlzKTtcbiAgICBjb25zdCAkZm9ybSA9ICRzZWxmLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICBjb25zdCBvcmlnaW5hbFRhcmdldCA9ICRmb3JtLmF0dHIoJ3RhcmdldCcpO1xuXG4gICAgaWYgKCRzZWxmLmF0dHIoJ2RhdGEtdGFyZ2V0JykpIHtcbiAgICAgICAgJGZvcm0uYXR0cigndGFyZ2V0JywgJHNlbGYuYXR0cignZGF0YS10YXJnZXQnKSk7XG4gICAgfVxuICAgIGlmICgkc2VsZi5hdHRyKCdkYXRhLWFjdGlvbicpKSB7XG4gICAgICAgICRmb3JtLmF0dHIoJ2FjdGlvbicsICRzZWxmLmF0dHIoJ2RhdGEtYWN0aW9uJykpO1xuICAgIH1cbiAgICAkZm9ybS5zdWJtaXQoKTtcblxuICAgIGlmIChvcmlnaW5hbFRhcmdldCkge1xuICAgICAgICAkZm9ybS5hdHRyKCd0YXJnZXQnLCBvcmlnaW5hbFRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGZvcm0ucmVtb3ZlQXR0cigndGFyZ2V0Jyk7XG4gICAgfVxufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIC8vIHRleHRhcmVh44K/44Kw44KS5YWo44Gm5Y+W5b6XXG4gIGNvbnN0IHRleHRhcmVhRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInRleHRhcmVhXCIpO1xuXG4gIHRleHRhcmVhRWxzLmZvckVhY2goKHRleHRhcmVhRWwpID0+IHtcbiAgICAvLyDjg4fjg5Xjgqnjg6vjg4jlgKTjgajjgZfjgabjgrnjgr/jgqTjg6vlsZ7mgKfjgpLku5jkuI5cbiAgICB0ZXh0YXJlYUVsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGBoZWlnaHQ6ICR7dGV4dGFyZWFFbC5zY3JvbGxIZWlnaHR9cHg7YCk7XG4gICAgLy8gaW5wdXTjgqTjg5njg7Pjg4jjgYznmbrnlJ/jgZnjgovjgZ/jgbPjgavplqLmlbDlkbzjgbPlh7rjgZdcbiAgICB0ZXh0YXJlYUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBzZXRUZXh0YXJlYUhlaWdodCk7XG4gIH0pO1xuXG4gIC8vIHRleHRhcmVh44Gu6auY44GV44KS6KiI566X44GX44Gm5oyH5a6a44GZ44KL6Zai5pWwXG4gIGZ1bmN0aW9uIHNldFRleHRhcmVhSGVpZ2h0KCkge1xuICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7XG4gICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLnNjcm9sbEhlaWdodH1weGA7XG4gIH1cbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJ3aW5kb3ciLCJfIiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCIkIiwiaGFzQ2xhc3MiLCJ1cGRhdGVMaXN0cyIsInNldEluZGV4TmFtZVRvTGlzdEl0ZW1zIiwiY3JpbWluYWxMaXN0SHRtbCIsImVhY2giLCIkb3B0aW9uIiwidmFsIiwidGV4dCIsIiRzZWxlY3QiLCJjaGFyYUlkIiwiaHRtbCIsIm9uIiwiZCIsIiRkb20iLCJhdHRyIiwic2hvdyIsImhpZGUiLCJjbGljayIsIiRzZWxmIiwiY2hhcmFOYW1lIiwiY2xvc2VzdCIsImZpbmQiLCJtc2ciLCJDSEFSQV9ERUxFVEVfQ09ORklSTV9NRVNTQUdFIiwicmVwbGFjZSIsImxlbmd0aCIsIm15Q29uZmlybSIsInJlc3VsdCIsInJlbW92ZSIsInJlbW92ZUNsYXNzIiwiY2xvbmUiLCJhcHBlbmQiLCJvcGVuUG9wdXAiLCJjbGFzc05hbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNlbGVjdG9yIiwiJHBvcHVwIiwiYWRkQ2xhc3MiLCJvZmYiLCJ0aXRsZSIsInNldEZpbGVVcGxvYWRFdmVudCIsIm9wdGlvbiIsIl9mb3JtQ2xhc3MiLCJmb3JtQ2xhc3MiLCJfc2VsZWN0b3IiLCJfb25TdWNjZXNzIiwib25TdWNjZXNzIiwiJGlucHV0IiwibWVkaWEiLCJteUNvbnNvbGUiLCJsb2ciLCJfb25GYWlsdXJlIiwib25GYWlsdXJlIiwicmVzIiwiZXJyb3IiLCJfb25Db21wbGV0ZSIsIm9uQ29tcGxldGUiLCJfb25Qcm9ncmVzcyIsIm9uUHJvZ3Jlc3MiLCJwZXJjZW50IiwiJGZvcm0iLCJ1cGxvYWRGaWxlIiwicHJvcCIsInRvVXNlcklkIiwiQ0hVTktfU0laRSIsIlJFVFJZX0xJTUlUIiwiUkVUUllfSU5URVJWQUwiLCJDSFVOS19VUExPQURfVVJMIiwiQ1NSRl9UT0tFTiIsInNlbnQiLCJtYXliZVNlbnQiLCJjaHVua1VwbG9hZFVybCIsImJwcyIsInByb2dyZXNzVGltZXIiLCJzZXRJbnRlcnZhbCIsInBlciIsInNpemUiLCJjaHVua0VuZCIsImNodW5rRGF0YSIsInNsaWNlIiwiZmQiLCJGb3JtRGF0YSIsIm5hbWUiLCJ3YWl0IiwiaSIsInVwU3RhcnRBdCIsIkRhdGUiLCJhamF4IiwidHlwZSIsInVybCIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCJkYXRhIiwiZXJyIiwic3RhdHVzIiwic2xlZXAiLCJhamF4UmVzdWx0IiwidXBUaW1lIiwiZ2V0VGltZSIsImZpbmlzaERhdGEiLCJmaWxlX25hbWUiLCJmaWxlX3NpemUiLCJpc19maW5pc2giLCJ0b191c2VyX2lkIiwiSlNPTiIsInN0cmluZ2lmeSIsImxhc3RBamF4UmVzdWx0IiwiRXJyb3IiLCJjbGVhckludGVydmFsIiwiaWR4IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImRvbSIsInNldEF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsIm9yaWdpbmFsVGFyZ2V0Iiwic3VibWl0IiwicmVtb3ZlQXR0ciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZXh0YXJlYUVscyIsInRleHRhcmVhRWwiLCJzY3JvbGxIZWlnaHQiLCJzZXRUZXh0YXJlYUhlaWdodCIsInN0eWxlIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==