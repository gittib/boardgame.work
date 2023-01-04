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
  $(this).closest('form').submit();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBQSxtQkFBTyxDQUFDLGdEQUFhLENBQUM7QUFDdEJBLG1CQUFPLENBQUMsMENBQVUsQ0FBQztBQUNuQkEsbUJBQU8sQ0FBQyx3Q0FBUyxDQUFDO0FBQ2xCQSxtQkFBTyxDQUFDLDRDQUFXLENBQUM7QUFFcEJBLG1CQUFPLENBQUMsd0ZBQWlDLENBQUM7Ozs7Ozs7Ozs7QUNMMUNDLE1BQU0sQ0FBQ0MsQ0FBQyxHQUFHRixtQkFBTyxDQUFDLCtDQUFRLENBQUM7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFDLE1BQU0sQ0FBQ0UsS0FBSyxHQUFHSCxtQkFBTyxDQUFDLDRDQUFPLENBQUM7QUFFL0JDLE1BQU0sQ0FBQ0UsS0FBSyxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsZ0JBQWdCOztBQUUzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OytDQzFCQTtBQUFBO0FBQUE7QUFEQSxJQUFJQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO0VBQUEsSUFDakNDLFdBQVcsR0FBcEIsU0FBU0EsV0FBVyxHQUFHO0lBQ25CQyx1QkFBdUIsRUFBRTtJQUV6QixJQUFJQyxnQkFBZ0IsR0FBRyxtQkFBbUI7SUFDMUNKLENBQUMsQ0FBQyxvREFBb0QsQ0FBQyxDQUFDSyxJQUFJLENBQUMsWUFBVztNQUNwRSxJQUFNQyxPQUFPLEdBQUdOLENBQUMsQ0FBQyxJQUFJLENBQUM7TUFDdkJJLGdCQUFnQixJQUFJLGlCQUFpQixHQUFDRSxPQUFPLENBQUNDLEdBQUcsRUFBRSxHQUFDLElBQUksR0FBQ0QsT0FBTyxDQUFDRSxJQUFJLEVBQUUsR0FBQyxXQUFXO0lBQ3ZGLENBQUMsQ0FBQztJQUNGUixDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0ssSUFBSSxDQUFDLFlBQVc7TUFDakMsSUFBTUksT0FBTyxHQUFHVCxDQUFDLENBQUMsSUFBSSxDQUFDO01BQ3ZCLElBQU1VLE9BQU8sR0FBR0QsT0FBTyxDQUFDRixHQUFHLEVBQUU7TUFDN0JFLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDUCxnQkFBZ0IsQ0FBQztNQUM5QkssT0FBTyxDQUFDRixHQUFHLENBQUNHLE9BQU8sQ0FBQztJQUN4QixDQUFDLENBQUM7RUFDTixDQUFDO0VBRURSLFdBQVcsRUFBRTtFQUViRixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUNZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsWUFBVztJQUMzQyxJQUFNQyxDQUFDLEdBQUdiLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ08sR0FBRyxFQUFFO0lBQ3ZCUCxDQUFDLENBQUMsd0NBQXdDLENBQUMsQ0FBQ0ssSUFBSSxDQUFDLFlBQVc7TUFDeEQsSUFBTVMsSUFBSSxHQUFHZCxDQUFDLENBQUMsSUFBSSxDQUFDO01BQ3BCLElBQUljLElBQUksQ0FBQ0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJRixDQUFDLEVBQUU7UUFDNUJDLElBQUksQ0FBQ0UsSUFBSSxFQUFFO01BQ2YsQ0FBQyxNQUFNO1FBQ0hGLElBQUksQ0FBQ0csSUFBSSxFQUFFO01BQ2Y7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7RUFDRmpCLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQ2tCLEtBQUssRUFBRTtFQUV4QmxCLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDWSxFQUFFLENBQUMsT0FBTyxFQUFFLHdDQUF3QywwRUFBRTtJQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7WUFDMUVPLEtBQUssR0FBR25CLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDZm9CLFNBQVMsR0FBR0QsS0FBSyxDQUFDRSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLG9EQUFvRCxDQUFDLENBQUNkLElBQUksRUFBRTtZQUM3R2UsR0FBRyxHQUFHQyw0QkFBNEIsQ0FBQ0MsT0FBTyxDQUFDLGFBQWEsRUFBRUwsU0FBUyxDQUFDO1lBQUEsTUFDdEVwQixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzBCLE1BQU0sR0FBRyxDQUFDO2NBQUE7Y0FBQTtZQUFBO1lBQUE7WUFBQSxPQUNQQyxTQUFTLENBQUNKLEdBQUcsQ0FBQztVQUFBO1lBQUE7WUFBOUJLLE1BQU0sb0JBQU5BLE1BQU07WUFDYixJQUFJQSxNQUFNLElBQUksSUFBSSxFQUFFO2NBQ2hCVCxLQUFLLENBQUNFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDUSxNQUFNLEVBQUU7Y0FDeEMzQixXQUFXLEVBQUU7WUFDakI7VUFBQztVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUE7RUFBQSxDQUVSLEdBQUM7RUFDRkYsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUNZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsb0NBQW9DLEVBQUUsWUFBVztJQUM5RlYsV0FBVyxFQUFFO0VBQ2pCLENBQUMsQ0FBQztFQUNGRixDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQ1ksRUFBRSxDQUFDLFFBQVEsRUFBRSxtREFBbUQsRUFBRSxZQUFXO0lBQ3ZHWixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNxQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ1MsV0FBVyxDQUFDLFVBQVUsQ0FBQztFQUM3RCxDQUFDLENBQUM7RUFDRjlCLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDWSxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVc7SUFDN0MsSUFBTUUsSUFBSSxHQUFHZCxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQytCLEtBQUssRUFBRTtJQUM3Q2pCLElBQUksQ0FBQ2dCLFdBQVcsQ0FBQyxVQUFVLENBQUM7SUFDNUI5QixDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQ2dDLE1BQU0sQ0FBQ2xCLElBQUksQ0FBQztJQUMxQ1osV0FBVyxFQUFFO0VBQ2pCLENBQUMsQ0FBQztBQUNOOzs7Ozs7Ozs7OztBQ3hEQVIsTUFBTSxDQUFDdUMsU0FBUyxHQUFHLFVBQUFDLFNBQVMsRUFBSTtFQUM1QixPQUFPLElBQUlDLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBSztJQUNwQyxJQUFNQyxRQUFRLEdBQUcsV0FBVyxHQUFDSixTQUFTO0lBQ3RDLElBQU1LLE1BQU0sR0FBR3ZDLENBQUMsQ0FBQ3NDLFFBQVEsQ0FBQztJQUUxQkMsTUFBTSxDQUFDQyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBRXZCRCxNQUFNLENBQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLENBQUNtQixHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQzdCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxZQUFXO01BQ2xGMkIsTUFBTSxDQUFDVCxXQUFXLENBQUMsTUFBTSxDQUFDO01BQzFCTSxPQUFPLENBQUM7UUFDSixRQUFRLEVBQUU7TUFDZCxDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7SUFDRkcsTUFBTSxDQUFDakIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDbUIsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM3QixFQUFFLENBQUMsa0JBQWtCLEVBQUUsWUFBVztNQUNuRjJCLE1BQU0sQ0FBQ1QsV0FBVyxDQUFDLE1BQU0sQ0FBQztNQUMxQk0sT0FBTyxDQUFDO1FBQ0osUUFBUSxFQUFFO01BQ2QsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0lBQ0ZHLE1BQU0sQ0FBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQ21CLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDN0IsRUFBRSxDQUFDLGtCQUFrQixFQUFFLFlBQVc7TUFDbkYsSUFBTU8sS0FBSyxHQUFHbkIsQ0FBQyxDQUFDLElBQUksQ0FBQztNQUNyQnVDLE1BQU0sQ0FBQ1QsV0FBVyxDQUFDLE1BQU0sQ0FBQztNQUMxQk0sT0FBTyxDQUFDO1FBQ0osUUFBUSxFQUFFakIsS0FBSyxDQUFDSixJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ25DLE1BQU0sRUFBRUksS0FBSyxDQUFDSixJQUFJLENBQUMsV0FBVztNQUNsQyxDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDTixDQUFDO0FBRURyQixNQUFNLENBQUNpQyxTQUFTLEdBQUcsVUFBQ0osR0FBRyxFQUFpQjtFQUFBLElBQWZtQixLQUFLLHVFQUFHLEVBQUU7RUFDL0IxQyxDQUFDLENBQUMsdUNBQXVDLENBQUMsQ0FBQ1csSUFBSSxDQUFDWSxHQUFHLENBQUNFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7RUFDM0V6QixDQUFDLENBQUMscUNBQXFDLENBQUMsQ0FBQ1EsSUFBSSxDQUFDa0MsS0FBSyxDQUFDO0VBQ3BELE9BQU9ULFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQztBQUMzQyxDQUFDOzs7Ozs7Ozs7Ozs7K0NDakNEO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBdkMsTUFBTSxDQUFDaUQsa0JBQWtCLEdBQUcsVUFBQ0MsTUFBTSxFQUFLO0VBQ3BDLElBQU1DLFVBQVUsR0FBRyxDQUFDRCxNQUFNLENBQUNFLFNBQVMsSUFBSSxFQUFFLEVBQUVwQixNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBQ2tCLE1BQU0sQ0FBQ0UsU0FBUyxHQUFHLEVBQUU7RUFDbEYsSUFBTUMsU0FBUyxHQUFHLE1BQU0sR0FBQ0YsVUFBVSxHQUFDLDhCQUE4QjtFQUNsRSxJQUFNRyxVQUFVLEdBQUdKLE1BQU0sQ0FBQ0ssU0FBUyxJQUFLLFVBQUNDLE1BQU0sRUFBRUMsS0FBSyxFQUFLO0lBQUVDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7RUFBRSxDQUFFO0VBQ3JGLElBQU1HLFVBQVUsR0FBR1YsTUFBTSxDQUFDVyxTQUFTLElBQUssVUFBQ0wsTUFBTSxFQUFFTSxHQUFHLEVBQUs7SUFBRUosU0FBUyxDQUFDSyxLQUFLLENBQUNELEdBQUcsQ0FBQztFQUFFLENBQUU7RUFDbkYsSUFBTUUsV0FBVyxHQUFHZCxNQUFNLENBQUNlLFVBQVUsSUFBSyxVQUFDVCxNQUFNLEVBQUssQ0FBQyxDQUFFO0VBQ3pELElBQU1VLFdBQVcsR0FBR2hCLE1BQU0sQ0FBQ2lCLFVBQVUsSUFBSyxVQUFDWCxNQUFNLEVBQUVZLE9BQU8sRUFBSyxDQUFDLENBQUU7RUFFbEVWLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDTixTQUFTLENBQUM7RUFFeEIvQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNZLEVBQUUsQ0FBQyxRQUFRLEVBQUVtQyxTQUFTLEVBQUUsWUFBVztJQUN6QyxJQUFNNUIsS0FBSyxHQUFHbkIsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNyQixJQUFJLENBQUNtQixLQUFLLENBQUNaLEdBQUcsRUFBRSxFQUFFO01BQ2Q7SUFDSjtJQUVBLElBQU13RCxLQUFLLEdBQUc1QyxLQUFLLENBQUNFLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDbkMsSUFBTTJDLFVBQVUsR0FBRzdDLEtBQUssQ0FBQzhDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekMsSUFBTUMsUUFBUSxHQUFHSCxLQUFLLENBQUN6QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQ2YsR0FBRyxFQUFFO0lBRXRELDJEQUFDO01BQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUE7a0JBQUE7b0JBQUE7c0JBQUE7d0JBR2E0RCxVQUFVLEdBQUcsR0FBRyxHQUFDLElBQUksR0FBQyxJQUFJO3dCQUMxQkMsV0FBVyxHQUFHLENBQUM7d0JBQ2ZDLGNBQWMsR0FBRyxHQUFHO3dCQUNwQkMsZ0JBQWdCLEdBQUd0RSxDQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQ2UsSUFBSSxDQUFDLFNBQVMsQ0FBQzt3QkFDbkV3RCxVQUFVLEdBQUd2RSxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQ2UsSUFBSSxDQUFDLFNBQVMsQ0FBQzt3QkFFM0R5RCxJQUFJLEdBQUcsQ0FBQyxFQUFFO3dCQUNWQyxTQUFTLEdBQUcsQ0FBQyxFQUFFO3dCQUNmQyxjQUFjLEdBQUdKLGdCQUFnQjt3QkFDM0I7d0JBRU5LLEdBQUcsR0FBRyxDQUFDLEVBQUU7d0JBQ2JDLGFBQWEsR0FBR0MsV0FBVyxDQUFDLFlBQU07MEJBQzlCSixTQUFTLElBQUlFLEdBQUcsR0FBRyxHQUFHOzBCQUN0QixJQUFJRixTQUFTLEdBQUdELElBQUksR0FBR0wsVUFBVSxFQUFFOzRCQUMvQk0sU0FBUyxHQUFHRCxJQUFJLEdBQUdMLFVBQVU7MEJBQ2pDOzBCQUNBLElBQUlXLEdBQUcsR0FBR0wsU0FBUyxHQUFHLEtBQUssR0FBR1QsVUFBVSxDQUFDZSxJQUFJOzBCQUM3QyxJQUFJRCxHQUFHLEdBQUcsSUFBSSxFQUFFQSxHQUFHLEdBQUcsSUFBSTswQkFDMUJsQixXQUFXLENBQUN6QyxLQUFLLEVBQUUyRCxHQUFHLENBQUM7d0JBQzNCLENBQUMsRUFBRSxJQUFJLENBQUM7d0JBRVJsQixXQUFXLENBQUN6QyxLQUFLLEVBQUUsQ0FBQyxDQUFDO3NCQUFDO3dCQUFBLE1BQ2ZxRCxJQUFJLEdBQUdSLFVBQVUsQ0FBQ2UsSUFBSTswQkFBQTswQkFBQTt3QkFBQTt3QkFDckJDLFFBQVEsR0FBR1IsSUFBSSxHQUFHTCxVQUFVLEVBQUU7d0JBQ2xDLElBQUlLLElBQUksSUFBSSxDQUFDLEVBQUU7MEJBQ1hRLFFBQVEsR0FBR2IsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUMvQjt3QkFFTWMsU0FBUyxHQUFHakIsVUFBVSxDQUFDa0IsS0FBSyxDQUFDVixJQUFJLEVBQUVRLFFBQVEsQ0FBQzt3QkFDbEQ1QixTQUFTLENBQUNDLEdBQUcsQ0FBQ21CLElBQUksRUFBRVEsUUFBUSxDQUFDO3dCQUM3QjVCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDNEIsU0FBUyxDQUFDO3dCQUVsQkUsRUFBRSxHQUFHLElBQUlDLFFBQVEsRUFBRTt3QkFDekJELEVBQUUsQ0FBQ25ELE1BQU0sQ0FBQyxXQUFXLEVBQUVnQyxVQUFVLENBQUNxQixJQUFJLENBQUM7d0JBQ3ZDRixFQUFFLENBQUNuRCxNQUFNLENBQUMsV0FBVyxFQUFFZ0MsVUFBVSxDQUFDZSxJQUFJLENBQUM7d0JBQ3ZDSSxFQUFFLENBQUNuRCxNQUFNLENBQUMsWUFBWSxFQUFFaUQsU0FBUyxDQUFDO3dCQUVsQ0ssSUFBSSxHQUFHakIsY0FBYzt3QkFBQywrREFDYmtCLENBQUM7MEJBQUE7MEJBQUE7NEJBQUE7OEJBQUE7Z0NBQUE7a0NBQ0FDLFNBQVMsR0FBRyxJQUFJQyxJQUFJLEVBQUU7a0NBQUE7a0NBQUEsT0FFSHpGLENBQUMsQ0FBQzBGLElBQUksQ0FBQztvQ0FDNUJDLElBQUksRUFBRSxNQUFNO29DQUNaQyxHQUFHLEVBQUVsQixjQUFjO29DQUNuQjVFLE9BQU8sRUFBRTtzQ0FDTCxjQUFjLEVBQUV5RTtvQ0FDcEIsQ0FBQztvQ0FDRHNCLFdBQVcsRUFBRSxLQUFLO29DQUNsQkMsV0FBVyxFQUFFLEtBQUs7b0NBQ2xCQyxJQUFJLEVBQUVaO2tDQUNWLENBQUMsQ0FBQyxTQUFNO29DQUFBLHVFQUFDLGlCQUFNYSxHQUFHO3NDQUFBO3dDQUFBOzBDQUFBOzRDQUFBOzhDQUNkNUMsU0FBUyxDQUFDQyxHQUFHLENBQUMyQyxHQUFHLENBQUM7OENBQUMsTUFDZlQsQ0FBQyxJQUFJbkIsV0FBVztnREFBQTtnREFBQTs4Q0FBQTs4Q0FBQSxNQUVWNEIsR0FBRzs0Q0FBQTs4Q0FBQSxNQUNIQSxHQUFHLENBQUNDLE1BQU0sSUFBSSxHQUFHO2dEQUFBO2dEQUFBOzhDQUFBOzhDQUFBLE1BRWpCRCxHQUFHOzRDQUFBOzhDQUFBOzhDQUFBLE9BR0hFLEtBQUssQ0FBQ1osSUFBSSxDQUFDOzRDQUFBOzhDQUNqQkEsSUFBSSxJQUFJLENBQUM7NENBQUM7NENBQUE7OENBQUE7MENBQUE7d0NBQUE7c0NBQUE7b0NBQUEsQ0FFakI7b0NBQUE7c0NBQUE7b0NBQUE7a0NBQUEsSUFBQztnQ0FBQTtrQ0F0QklhLFVBQVU7a0NBQUEsTUF1QlosQ0FBQUEsVUFBVSxhQUFWQSxVQUFVLHVCQUFWQSxVQUFVLENBQUV2RSxNQUFNLEtBQUksSUFBSTtvQ0FBQTtvQ0FBQTtrQ0FBQTtrQ0FDMUI7a0NBRUE7a0NBQ013RSxNQUFNLEdBQUcsQ0FBRSxJQUFJWCxJQUFJLEVBQUUsQ0FBRVksT0FBTyxFQUFFLEdBQUdiLFNBQVMsQ0FBQ2EsT0FBTyxFQUFFLElBQUksTUFBTTtrQ0FDdEUxQixHQUFHLEdBQUcsQ0FBQ0ssUUFBUSxHQUFHUixJQUFJLElBQUk0QixNQUFNOztrQ0FFaEM7a0NBQ0ExQixjQUFjLHNCQUFHeUIsVUFBVSxDQUFDUCxHQUFHLDZEQUFJbEIsY0FBYztrQ0FBQztnQ0FBQTtnQ0FBQTtrQ0FBQTs4QkFBQTs0QkFBQTswQkFBQTt3QkFBQTt3QkFsQ2pEYSxDQUFDLEdBQUcsQ0FBQztzQkFBQTt3QkFBQSxNQUFHQSxDQUFDLElBQUluQixXQUFXOzBCQUFBOzBCQUFBO3dCQUFBO3dCQUFBLHFDQUF4Qm1CLENBQUM7c0JBQUE7d0JBQUE7d0JBQUE7MEJBQUE7MEJBQUE7d0JBQUE7d0JBQUE7c0JBQUE7d0JBQTBCQSxDQUFDLEVBQUU7d0JBQUE7d0JBQUE7c0JBQUE7d0JBc0N2Q2YsSUFBSSxHQUFHUSxRQUFRO3dCQUNmUCxTQUFTLEdBQUdPLFFBQVE7d0JBRXBCcEIsV0FBVyxDQUFDekMsS0FBSyxFQUFFcUQsSUFBSSxHQUFHLEtBQUssR0FBR1IsVUFBVSxDQUFDZSxJQUFJLENBQUM7d0JBQUM7d0JBQUE7c0JBQUE7d0JBR3ZEO3dCQUNNdUIsVUFBVSxHQUFHOzBCQUNmQyxTQUFTLEVBQUV2QyxVQUFVLENBQUNxQixJQUFJOzBCQUMxQm1CLFNBQVMsRUFBRXhDLFVBQVUsQ0FBQ2UsSUFBSTswQkFDMUIwQixTQUFTLEVBQUU7d0JBQ2YsQ0FBQzt3QkFDRCxJQUFJdkMsUUFBUSxFQUFFOzBCQUNWb0MsVUFBVSxDQUFDSSxVQUFVLEdBQUd4QyxRQUFRO3dCQUNwQzt3QkFHQW9CLElBQUksR0FBR2pCLGNBQWM7d0JBQUMsaUVBQ2JrQixFQUFDOzBCQUFBOzBCQUFBOzRCQUFBOzhCQUFBO2dDQUFBO2tDQUFBO2tDQUFBLE9BQ2lCdkYsQ0FBQyxDQUFDMEYsSUFBSSxDQUFDO29DQUMxQkMsSUFBSSxFQUFFLE1BQU07b0NBQ1pDLEdBQUcsRUFBRWxCLGNBQWM7b0NBQ25CNUUsT0FBTyxFQUFFO3NDQUNMLGNBQWMsRUFBRXlFO29DQUNwQixDQUFDO29DQUNEc0IsV0FBVyxFQUFFLGtCQUFrQjtvQ0FDL0JFLElBQUksRUFBRVksSUFBSSxDQUFDQyxTQUFTLENBQUNOLFVBQVU7a0NBQ25DLENBQUMsQ0FBQyxTQUFNO29DQUFBLHVFQUFDLGtCQUFNTixHQUFHO3NDQUFBO3dDQUFBOzBDQUFBOzRDQUFBOzhDQUNkNUMsU0FBUyxDQUFDQyxHQUFHLENBQUMyQyxHQUFHLENBQUM7OENBQUMsTUFDZlQsRUFBQyxJQUFJbkIsV0FBVztnREFBQTtnREFBQTs4Q0FBQTs4Q0FBQSxNQUVWNEIsR0FBRzs0Q0FBQTs4Q0FBQSxNQUNIQSxHQUFHLENBQUNDLE1BQU0sSUFBSSxHQUFHO2dEQUFBO2dEQUFBOzhDQUFBOzhDQUFBLE1BRWpCRCxHQUFHOzRDQUFBOzhDQUFBOzhDQUFBLE9BR0hFLEtBQUssQ0FBQ1osSUFBSSxDQUFDOzRDQUFBOzhDQUNqQkEsSUFBSSxJQUFJLENBQUM7NENBQUM7NENBQUE7OENBQUE7MENBQUE7d0NBQUE7c0NBQUE7b0NBQUEsQ0FFakI7b0NBQUE7c0NBQUE7b0NBQUE7a0NBQUEsSUFBQztnQ0FBQTtrQ0FyQkZ1QixjQUFjO2tDQUFBLDBCQXVCVkEsY0FBYyw2Q0FBZCxpQkFBZ0IxRCxLQUFLO29DQUFBO29DQUFBO2tDQUFBO2tDQUFBO2dDQUFBO2dDQUFBO2tDQUFBOzhCQUFBOzRCQUFBOzBCQUFBO3dCQUFBO3dCQXhCcEJvQyxFQUFDLEdBQUcsQ0FBQztzQkFBQTt3QkFBQSxNQUFHQSxFQUFDLElBQUluQixXQUFXOzBCQUFBOzBCQUFBO3dCQUFBO3dCQUFBLHNDQUF4Qm1CLEVBQUM7c0JBQUE7d0JBQUE7d0JBQUE7MEJBQUE7MEJBQUE7d0JBQUE7d0JBQUE7c0JBQUE7d0JBQTBCQSxFQUFDLEVBQUU7d0JBQUE7d0JBQUE7c0JBQUE7d0JBNkJ2Q25DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDd0QsY0FBYyxDQUFDO3dCQUFDLHlCQUMxQkEsY0FBYyw0Q0FBZCxnQkFBZ0IxRCxLQUFLOzBCQUFBOzBCQUFBO3dCQUFBO3dCQUNyQjt3QkFDQUgsVUFBVSxDQUFDN0IsS0FBSyxFQUFFMEYsY0FBYyxDQUFDMUQsS0FBSyxDQUFDO3dCQUFDO3dCQUFBO3NCQUFBO3dCQUFBLE1BRWxDLElBQUkyRCxLQUFLLENBQUMsU0FBUyxDQUFDO3NCQUFBO3NCQUFBO3dCQUFBO29CQUFBO2tCQUFBO2dCQUFBO2NBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtjQUFBO2NBQUE7Y0FJOUIxRCxTQUFTLENBQUNLLEtBQUssY0FBSztjQUNwQkgsVUFBVSxDQUFDbkMsS0FBSyxlQUFNO1lBQUM7Y0FBQTtjQUV2QjRGLGFBQWEsQ0FBQ25DLGFBQWEsQ0FBQztjQUM1QmxCLFdBQVcsQ0FBQ3ZDLEtBQUssQ0FBQztjQUNsQkEsS0FBSyxDQUFDWixHQUFHLENBQUMsRUFBRSxDQUFDO2NBQUM7WUFBQTtZQUFBO2NBQUE7VUFBQTtRQUFBO01BQUE7SUFBQSxDQUVyQixJQUFHO0VBQ1IsQ0FBQyxDQUFDO0FBQ04sQ0FBQzs7Ozs7Ozs7Ozs7QUM5S0RiLE1BQU0sQ0FBQ1MsdUJBQXVCLEdBQUcsWUFBTTtFQUNuQyxJQUFJNkcsR0FBRyxHQUFHLENBQUM7RUFDWEMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQUFDLEdBQUcsRUFBSTtJQUNyREEsR0FBRyxDQUFDQyxZQUFZLENBQUMsWUFBWSxFQUFFTCxHQUFHLEVBQUUsQ0FBQztFQUN6QyxDQUFDLENBQUM7RUFDRkMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBQUMsR0FBRyxFQUFJO0lBQ3JGLElBQU0vQixJQUFJLEdBQUcrQixHQUFHLENBQUNFLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFDLEdBQUcsR0FBQ0YsR0FBRyxDQUFDL0YsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDaUcsWUFBWSxDQUFDLFlBQVksQ0FBQyxHQUFDLElBQUksR0FBQ0YsR0FBRyxDQUFDRSxZQUFZLENBQUMsZUFBZSxDQUFDLEdBQUMsR0FBRztJQUNySkYsR0FBRyxDQUFDQyxZQUFZLENBQUMsTUFBTSxFQUFFaEMsSUFBSSxDQUFDO0VBQ2xDLENBQUMsQ0FBQztBQUNOLENBQUM7QUFFRHJGLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDWSxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVc7RUFDNUNaLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3FCLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQ2tHLE1BQU0sRUFBRTtBQUNwQyxDQUFDLENBQUM7QUFFRjdILE1BQU0sQ0FBQzhILGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07RUFDaEQ7RUFDQSxJQUFNQyxXQUFXLEdBQUdSLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO0VBRXpETyxXQUFXLENBQUNOLE9BQU8sQ0FBQyxVQUFDTyxVQUFVLEVBQUs7SUFDbEM7SUFDQUEsVUFBVSxDQUFDTCxZQUFZLENBQUMsT0FBTyxvQkFBYUssVUFBVSxDQUFDQyxZQUFZLFNBQU07SUFDekU7SUFDQUQsVUFBVSxDQUFDRixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVJLGlCQUFpQixDQUFDO0VBQ3pELENBQUMsQ0FBQzs7RUFFRjtFQUNBLFNBQVNBLGlCQUFpQixHQUFHO0lBQzNCLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLEdBQUcsTUFBTTtJQUMxQixJQUFJLENBQUNELEtBQUssQ0FBQ0MsTUFBTSxhQUFNLElBQUksQ0FBQ0gsWUFBWSxPQUFJO0VBQzlDO0FBQ0YsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUMvQkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2luZGl2aXN1YWwvbXlfc2NlbmFyaW8tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXBsb2FkLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy91dGlsaXR5LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zYXNzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4vYm9vdHN0cmFwJyk7XG5yZXF1aXJlKCcuL3VwbG9hZCcpO1xucmVxdWlyZSgnLi9wb3B1cCcpO1xucmVxdWlyZSgnLi91dGlsaXR5Jyk7XG5cbnJlcXVpcmUoJy4vaW5kaXZpc3VhbC9teV9zY2VuYXJpby1jcmVhdGUnKTtcblxuIiwid2luZG93Ll8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcblxuLyoqXG4gKiBXZSdsbCBsb2FkIHRoZSBheGlvcyBIVFRQIGxpYnJhcnkgd2hpY2ggYWxsb3dzIHVzIHRvIGVhc2lseSBpc3N1ZSByZXF1ZXN0c1xuICogdG8gb3VyIExhcmF2ZWwgYmFjay1lbmQuIFRoaXMgbGlicmFyeSBhdXRvbWF0aWNhbGx5IGhhbmRsZXMgc2VuZGluZyB0aGVcbiAqIENTUkYgdG9rZW4gYXMgYSBoZWFkZXIgYmFzZWQgb24gdGhlIHZhbHVlIG9mIHRoZSBcIlhTUkZcIiB0b2tlbiBjb29raWUuXG4gKi9cblxud2luZG93LmF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuXG4vKipcbiAqIEVjaG8gZXhwb3NlcyBhbiBleHByZXNzaXZlIEFQSSBmb3Igc3Vic2NyaWJpbmcgdG8gY2hhbm5lbHMgYW5kIGxpc3RlbmluZ1xuICogZm9yIGV2ZW50cyB0aGF0IGFyZSBicm9hZGNhc3QgYnkgTGFyYXZlbC4gRWNobyBhbmQgZXZlbnQgYnJvYWRjYXN0aW5nXG4gKiBhbGxvd3MgeW91ciB0ZWFtIHRvIGVhc2lseSBidWlsZCByb2J1c3QgcmVhbC10aW1lIHdlYiBhcHBsaWNhdGlvbnMuXG4gKi9cblxuLy8gaW1wb3J0IEVjaG8gZnJvbSAnbGFyYXZlbC1lY2hvJztcblxuLy8gd2luZG93LlB1c2hlciA9IHJlcXVpcmUoJ3B1c2hlci1qcycpO1xuXG4vLyB3aW5kb3cuRWNobyA9IG5ldyBFY2hvKHtcbi8vICAgICBicm9hZGNhc3RlcjogJ3B1c2hlcicsXG4vLyAgICAga2V5OiBwcm9jZXNzLmVudi5NSVhfUFVTSEVSX0FQUF9LRVksXG4vLyAgICAgY2x1c3RlcjogcHJvY2Vzcy5lbnYuTUlYX1BVU0hFUl9BUFBfQ0xVU1RFUixcbi8vICAgICBmb3JjZVRMUzogdHJ1ZVxuLy8gfSk7XG4iLCJpZiAoJCgnYm9keScpLmhhc0NsYXNzKCdteV9zY2VuYXJpby1jcmVhdGUnKSkge1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUxpc3RzKCkge1xuICAgICAgICBzZXRJbmRleE5hbWVUb0xpc3RJdGVtcygpO1xuXG4gICAgICAgIGxldCBjcmltaW5hbExpc3RIdG1sID0gJzxvcHRpb24+PC9vcHRpb24+JztcbiAgICAgICAgJCgnc2VsZWN0W2RhdGEta2V5X25hbWU9Y2hhcmFjdGVyX2lkXSBvcHRpb246c2VsZWN0ZWQnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgJG9wdGlvbiA9ICQodGhpcyk7XG4gICAgICAgICAgICBjcmltaW5hbExpc3RIdG1sICs9ICc8b3B0aW9uIHZhbHVlPVwiJyskb3B0aW9uLnZhbCgpKydcIj4nKyRvcHRpb24udGV4dCgpKyc8L29wdGlvbj4nO1xuICAgICAgICB9KTtcbiAgICAgICAgJCgnc2VsZWN0LmNyaW1pbmFsJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkKHRoaXMpO1xuICAgICAgICAgICAgY29uc3QgY2hhcmFJZCA9ICRzZWxlY3QudmFsKCk7XG4gICAgICAgICAgICAkc2VsZWN0Lmh0bWwoY3JpbWluYWxMaXN0SHRtbCk7XG4gICAgICAgICAgICAkc2VsZWN0LnZhbChjaGFyYUlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlTGlzdHMoKTtcblxuICAgICQoJ1tuYW1lPWRheXNdJykub24oJ2NoYW5nZSBjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBkID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgJCgnLnNjZW5hcmlvX2luY2lkZW50X2xpc3QgPiBsaVtkYXRhLWRheV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgJGRvbSA9ICQodGhpcyk7XG4gICAgICAgICAgICBpZiAoJGRvbS5hdHRyKCdkYXRhLWRheScpIDw9IGQpIHtcbiAgICAgICAgICAgICAgICAkZG9tLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGRvbS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgICQoJ1tuYW1lPWRheXNdJykuY2xpY2soKTtcblxuICAgICQoJy5zY2VuYXJpb19jaGFyYWN0ZXJfbGlzdCcpLm9uKCdjbGljaycsICcuY2hhcmFjdGVyX3JvdyAuanMtY2hhcmFfZGVsZXRlX2J1dHRvbicsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCAkc2VsZiA9ICQodGhpcyk7XG4gICAgICAgIGNvbnN0IGNoYXJhTmFtZSA9ICRzZWxmLmNsb3Nlc3QoJy5jaGFyYWN0ZXJfcm93JykuZmluZCgnc2VsZWN0W2RhdGEta2V5X25hbWU9Y2hhcmFjdGVyX2lkXSBvcHRpb246c2VsZWN0ZWQnKS50ZXh0KCk7XG4gICAgICAgIGNvbnN0IG1zZyA9IENIQVJBX0RFTEVURV9DT05GSVJNX01FU1NBR0UucmVwbGFjZSgnX19fQ0hBUkFfX18nLCBjaGFyYU5hbWUpO1xuICAgICAgICBpZiAoJCgnLmNoYXJhY3Rlcl9yb3cnKS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjb25zdCB7cmVzdWx0fSA9IGF3YWl0IG15Q29uZmlybShtc2cpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PSAnb2snKSB7XG4gICAgICAgICAgICAgICAgJHNlbGYuY2xvc2VzdCgnLmNoYXJhY3Rlcl9yb3cnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVMaXN0cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgJCgnLnNjZW5hcmlvX2NoYXJhY3Rlcl9saXN0Jykub24oJ2NsaWNrIGNoYW5nZScsICdzZWxlY3RbZGF0YS1rZXlfbmFtZT1jaGFyYWN0ZXJfaWRdJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHVwZGF0ZUxpc3RzKCk7XG4gICAgfSk7XG4gICAgJCgnLnNjZW5hcmlvX2NoYXJhY3Rlcl9saXN0Jykub24oJ2NoYW5nZScsICcuY2hhcmFjdGVyX3JvdyBzZWxlY3RbZGF0YS1rZXlfbmFtZT1jaGFyYWN0ZXJfaWRdJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmNoYXJhY3Rlcl9yb3cnKS5yZW1vdmVDbGFzcygnaXMtZXJyb3InKTtcbiAgICB9KTtcbiAgICAkKCcuanMtY2hhcmFfYWRkX2J1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCAkZG9tID0gJCgnLmNoYXJhY3Rlcl9yb3c6bGFzdCcpLmNsb25lKCk7XG4gICAgICAgICRkb20ucmVtb3ZlQ2xhc3MoJ2lzLWVycm9yJyk7XG4gICAgICAgICQoJy5zY2VuYXJpb19jaGFyYWN0ZXJfbGlzdCcpLmFwcGVuZCgkZG9tKTtcbiAgICAgICAgdXBkYXRlTGlzdHMoKTtcbiAgICB9KTtcbn1cbiIsIndpbmRvdy5vcGVuUG9wdXAgPSBjbGFzc05hbWUgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gJy5jLXBvcHVwLicrY2xhc3NOYW1lO1xuICAgICAgICBjb25zdCAkcG9wdXAgPSAkKHNlbGVjdG9yKTtcblxuICAgICAgICAkcG9wdXAuYWRkQ2xhc3MoJ29wZW4nKTtcblxuICAgICAgICAkcG9wdXAuZmluZCgnLmZpbHRlci1hcmVhJykub2ZmKCdjbGljay5vcGVuX3BvcHVwJykub24oJ2NsaWNrLm9wZW5fcG9wdXAnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRwb3B1cC5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgJ3Jlc3VsdCc6ICdjbG9zZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgICRwb3B1cC5maW5kKCcuY2xvc2VfYnV0dG9uJykub2ZmKCdjbGljay5vcGVuX3BvcHVwJykub24oJ2NsaWNrLm9wZW5fcG9wdXAnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRwb3B1cC5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgJ3Jlc3VsdCc6ICdjbG9zZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgICRwb3B1cC5maW5kKCdbZGF0YS1yZXN1bHRdJykub2ZmKCdjbGljay5vcGVuX3BvcHVwJykub24oJ2NsaWNrLm9wZW5fcG9wdXAnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0ICRzZWxmID0gJCh0aGlzKTtcbiAgICAgICAgICAgICRwb3B1cC5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgJ3Jlc3VsdCc6ICRzZWxmLmF0dHIoJ2RhdGEtcmVzdWx0JyksXG4gICAgICAgICAgICAgICAgJ2luZm8nOiAkc2VsZi5hdHRyKCdkYXRhLWluZm8nKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbndpbmRvdy5teUNvbmZpcm0gPSAobXNnLCB0aXRsZSA9ICcnKSA9PiB7XG4gICAgJCgnLmMtcG9wdXAuanMtcG9wdXAtbXlfY29uZmlybSAubWVzc2FnZScpLmh0bWwobXNnLnJlcGxhY2UoXCJcXFxcblwiLCAnPGJyPicpKTtcbiAgICAkKCcuYy1wb3B1cC5qcy1wb3B1cC1teV9jb25maXJtIC50aXRsZScpLnRleHQodGl0bGUpO1xuICAgIHJldHVybiBvcGVuUG9wdXAoJ2pzLXBvcHVwLW15X2NvbmZpcm0nKTtcbn07XG4iLCIvKipcbiog44OV44Kh44Kk44Or44Ki44OD44OX44Ot44O844OJanNcbipcbiogQHBhcmFtIG9wdGlvbi5mb3JtQ2xhc3Mg44OV44Kh44Kk44Or44Ki44OD44OX44Ot44O844OJ44Kk44OZ44Oz44OI44KS5LuV6L6844KAZm9ybeOCv+OCsOOBruOCr+ODqeOCuVxuKiBAcGFyYW0gb3B0aW9uLm9uU3VjY2VzcygkaW5wdXQsIG1lZGlhKSDjg5XjgqHjgqTjg6vjgqLjg4Pjg5fjg63jg7zjg4nmiJDlip/mmYLjga7lh6bnkIbjgIIkaW5wdXTjga/lr77osaHjga5pbnB1dFt0eXBlPWZpbGVdXG4qIEBwYXJhbSBvcHRpb24ub25GYWlsdXJlKCRpbnB1dCwgcmVzKSDjg5XjgqHjgqTjg6vjgqLjg4Pjg5fjg63jg7zjg4nlpLHmlZfmmYLjga7lh6bnkIbjgIIkaW5wdXTjga/lr77osaHjga5pbnB1dFt0eXBlPWZpbGVdXG4qIEBwYXJhbSBvcHRpb24ub25Db21wbGV0ZSgkaW5wdXQsIHhocikg44OV44Kh44Kk44Or44Ki44OD44OX44Ot44O844OJ5a6M5LqG5pmC44Gu5Yem55CG44CCJGlucHV044Gv5a++6LGh44GuaW5wdXRbdHlwZT1maWxlXVxuKiBAcGFyYW0gb3B0aW9uLm9uUHJvZ3Jlc3MoJGlucHV0LCBwZXJjZW50KSDjg5XjgqHjgqTjg6vjgqLjg4Pjg5fjg63jg7zjg4nkuK3jga7lh6bnkIbjgIIkaW5wdXTjga/lr77osaHjga5pbnB1dFt0eXBlPWZpbGVdXG4qL1xud2luZG93LnNldEZpbGVVcGxvYWRFdmVudCA9IChvcHRpb24pID0+IHtcbiAgICBjb25zdCBfZm9ybUNsYXNzID0gKG9wdGlvbi5mb3JtQ2xhc3MgfHwgJycpLmxlbmd0aCA+IDAgPyAnLicrb3B0aW9uLmZvcm1DbGFzcyA6ICcnO1xuICAgIGNvbnN0IF9zZWxlY3RvciA9ICdmb3JtJytfZm9ybUNsYXNzKycgaW5wdXRbdHlwZT1maWxlXVtuYW1lPWZpbGVdJztcbiAgICBjb25zdCBfb25TdWNjZXNzID0gb3B0aW9uLm9uU3VjY2VzcyB8fCAoKCRpbnB1dCwgbWVkaWEpID0+IHsgbXlDb25zb2xlLmxvZyhtZWRpYSk7IH0pO1xuICAgIGNvbnN0IF9vbkZhaWx1cmUgPSBvcHRpb24ub25GYWlsdXJlIHx8ICgoJGlucHV0LCByZXMpID0+IHsgbXlDb25zb2xlLmVycm9yKHJlcyk7IH0pO1xuICAgIGNvbnN0IF9vbkNvbXBsZXRlID0gb3B0aW9uLm9uQ29tcGxldGUgfHwgKCgkaW5wdXQpID0+IHt9KTtcbiAgICBjb25zdCBfb25Qcm9ncmVzcyA9IG9wdGlvbi5vblByb2dyZXNzIHx8ICgoJGlucHV0LCBwZXJjZW50KSA9PiB7fSk7XG5cbiAgICBteUNvbnNvbGUubG9nKF9zZWxlY3Rvcik7XG5cbiAgICAkKCdib2R5Jykub24oJ2NoYW5nZScsIF9zZWxlY3RvciwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0ICRzZWxmID0gJCh0aGlzKTtcbiAgICAgICAgaWYgKCEkc2VsZi52YWwoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCAkZm9ybSA9ICRzZWxmLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgdXBsb2FkRmlsZSA9ICRzZWxmLnByb3AoJ2ZpbGVzJylbMF07XG4gICAgICAgIGNvbnN0IHRvVXNlcklkID0gJGZvcm0uZmluZCgnW25hbWU9dG9fdXNlcl9pZF0nKS52YWwoKTtcbiAgICAgICAgXG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3NUaW1lcjtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgQ0hVTktfU0laRSA9IDEyOCoxMDI0KjEwMjQ7XG4gICAgICAgICAgICAgICAgY29uc3QgUkVUUllfTElNSVQgPSA1O1xuICAgICAgICAgICAgICAgIGNvbnN0IFJFVFJZX0lOVEVSVkFMID0gMTAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IENIVU5LX1VQTE9BRF9VUkwgPSAkKCdtZXRhW25hbWU9Y2h1bmtfdXBsb2FkX3VybF0nKS5hdHRyKCdjb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgQ1NSRl9UT0tFTiA9ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHNlbnQgPSAwOyAvLyDpgIHkv6HmuIjjgb/jg5DjgqTjg4jmlbBcbiAgICAgICAgICAgICAgICBsZXQgbWF5YmVTZW50ID0gMDsgLy8g5py65LiK44Gu6YCB5L+h5riI44G/44OQ44Kk44OI5pWw44CC6KaL44GL44GR5LiK44Gu44OX44Ot44Kw44Os44K544OQ44O85pu05paw44Gu44Gf44KB44Gr5L2/44GGXG4gICAgICAgICAgICAgICAgbGV0IGNodW5rVXBsb2FkVXJsID0gQ0hVTktfVVBMT0FEX1VSTDtcbiAgICAgICAgICAgICAgICBsZXQgd2FpdDsgLy8g5oyH5pWw44OQ44OD44Kv44Kq44OV55SoXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGJwcyA9IDA7IC8vIOWQhOOCouODg+ODl+ODreODvOODieOBi+OCieioiOeul+OBleOCjOOBn0JQU1tieXRlL3NlY11cbiAgICAgICAgICAgICAgICBwcm9ncmVzc1RpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtYXliZVNlbnQgKz0gYnBzICogMC41O1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF5YmVTZW50ID4gc2VudCArIENIVU5LX1NJWkUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heWJlU2VudCA9IHNlbnQgKyBDSFVOS19TSVpFO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBwZXIgPSBtYXliZVNlbnQgKiAxMDAuMCAvIHVwbG9hZEZpbGUuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBlciA+IDk5LjkpIHBlciA9IDk5Ljk7XG4gICAgICAgICAgICAgICAgICAgIF9vblByb2dyZXNzKCRzZWxmLCBwZXIpO1xuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIF9vblByb2dyZXNzKCRzZWxmLCAwKTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoc2VudCA8IHVwbG9hZEZpbGUuc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmtFbmQgPSBzZW50ICsgQ0hVTktfU0laRTsgLy8g5LuK5Zue6YCB44KL44OB44Oj44Oz44Kv44Gu5pyr5bC+44OQ44Kk44OIXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZW50ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNodW5rRW5kID0gQ0hVTktfU0laRSAvIDQ7IC8vIOacgOWIneOBoOOBkeOBr+i7veOBhOWuuemHj+OBp+mAgeOCiuOAgeODrOOCueODneODs+OCueOCv+OCpOODoOOCkuioiOa4rOOBmeOCi1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaHVua0RhdGEgPSB1cGxvYWRGaWxlLnNsaWNlKHNlbnQsIGNodW5rRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgbXlDb25zb2xlLmxvZyhzZW50LCBjaHVua0VuZCk7XG4gICAgICAgICAgICAgICAgICAgIG15Q29uc29sZS5sb2coY2h1bmtEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZCgnZmlsZV9uYW1lJywgdXBsb2FkRmlsZS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKCdmaWxlX3NpemUnLCB1cGxvYWRGaWxlLnNpemUpO1xuICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoJ2NodW5rX2RhdGEnLCBjaHVua0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgd2FpdCA9IFJFVFJZX0lOVEVSVkFMO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMSA7IGkgPD0gUkVUUllfTElNSVQgOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwU3RhcnRBdCA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFqYXhSZXN1bHQgPSBhd2FpdCAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGNodW5rVXBsb2FkVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6IENTUkZfVE9LRU4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGZkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goYXN5bmMgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteUNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPj0gUkVUUllfTElNSVQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6KaP5a6a5Zue5pWw5aSx5pWX44GX44Gf44Gu44Gn44CB44Ki44OD44OX44Ot44O844OJ5Yem55CG5YWo5L2T44KS5aSx5pWX44Go44G/44Gq44GZXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZXJyLnN0YXR1cyA9PSA0MjIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gNDIy44Gv44OQ44Oq44OH44O844K344On44Oz44Ko44Op44O844Gq44Gu44Gn44CB5L2V5bqm57mw44KK6L+U44GX44Gm44KC44Kz44Kx44KL44Gv44GaXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmjIfmlbDjg5Djg4Pjgq/jgqrjg5VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAod2FpdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhaXQgKj0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhamF4UmVzdWx0Py5yZXN1bHQgPT0gJ09LJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOOBk+OBruODgeODo+ODs+OCr+OBr+mAgeS/oeaIkOWKn+OBl+OBn+OBruOBp+asoeOBq+ihjOOBj1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOmAgeS/oeaZgumWk+OCkuioiOa4rFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwVGltZSA9ICgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gdXBTdGFydEF0LmdldFRpbWUoKSkgLyAxMDAwLjA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnBzID0gKGNodW5rRW5kIC0gc2VudCkgLyB1cFRpbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5qyh44GuVVJM44GM5p2l44Gm44Gf44KJ5pu05paw44GZ44KLXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2h1bmtVcGxvYWRVcmwgPSBhamF4UmVzdWx0LnVybCA/PyBjaHVua1VwbG9hZFVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZW50ID0gY2h1bmtFbmQ7XG4gICAgICAgICAgICAgICAgICAgIG1heWJlU2VudCA9IGNodW5rRW5kO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MoJHNlbGYsIHNlbnQgKiAxMDAuMCAvIHVwbG9hZEZpbGUuc2l6ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIOWIhuWJsuOCouODg+ODl+ODreODvOODieWujOS6huOBl+OBn+OBruOBp+OAgeacgOW+jOOBq+ODleOCoeOCpOODq+OCkue1kOWQiOOBmeOCi1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbmlzaERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVfbmFtZTogdXBsb2FkRmlsZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBmaWxlX3NpemU6IHVwbG9hZEZpbGUuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgaXNfZmluaXNoOiB0cnVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKHRvVXNlcklkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmlzaERhdGEudG9fdXNlcl9pZCA9IHRvVXNlcklkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgbGFzdEFqYXhSZXN1bHQ7XG4gICAgICAgICAgICAgICAgd2FpdCA9IFJFVFJZX0lOVEVSVkFMO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8PSBSRVRSWV9MSU1JVCA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsYXN0QWpheFJlc3VsdCA9IGF3YWl0ICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGNodW5rVXBsb2FkVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiBDU1JGX1RPS0VOLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShmaW5pc2hEYXRhKSxcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goYXN5bmMgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG15Q29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID49IFJFVFJZX0xJTUlUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6KaP5a6a5Zue5pWw5aSx5pWX44GX44Gf44Gu44Gn44CB44Ki44OD44OX44Ot44O844OJ5Yem55CG5YWo5L2T44KS5aSx5pWX44Go44G/44Gq44GZXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGVyci5zdGF0dXMgPT0gNDIyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gNDIy44Gv44OQ44Oq44OH44O844K344On44Oz44Ko44Op44O844Gq44Gu44Gn44CB5L2V5bqm57mw44KK6L+U44GX44Gm44KC44Kz44Kx44KL44Gv44GaXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmjIfmlbDjg5Djg4Pjgq/jgqrjg5VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCh3YWl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWl0ICo9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RBamF4UmVzdWx0Py5tZWRpYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g44OV44Kh44Kk44Or57WQ5ZCIQVBJ44KC5oiQ5Yqf44GX44Gf44Gu44Gn5qyh44G4XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBteUNvbnNvbGUubG9nKGxhc3RBamF4UmVzdWx0KTtcbiAgICAgICAgICAgICAgICBpZiAobGFzdEFqYXhSZXN1bHQ/Lm1lZGlhKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWFqOmDqOe1guOCj+OBo+OBn+OBruOBp+aIkOWKn+aZguOCs+ODvOODq+ODkOODg+OCr+OCkuWPqeOBj1xuICAgICAgICAgICAgICAgICAgICBfb25TdWNjZXNzKCRzZWxmLCBsYXN0QWpheFJlc3VsdC5tZWRpYSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfntZDlkIhBUEnlpLHmlZcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBteUNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICBfb25GYWlsdXJlKCRzZWxmLCBlcnIpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHByb2dyZXNzVGltZXIpO1xuICAgICAgICAgICAgICAgIF9vbkNvbXBsZXRlKCRzZWxmKTtcbiAgICAgICAgICAgICAgICAkc2VsZi52YWwoJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgIH0pO1xufTtcblxuIiwid2luZG93LnNldEluZGV4TmFtZVRvTGlzdEl0ZW1zID0gKCkgPT4ge1xuICAgIGxldCBpZHggPSAxO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWluZGV4XScpLmZvckVhY2goZG9tID0+IHtcbiAgICAgICAgZG9tLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGlkeCsrKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pbmRleF0gW2RhdGEtbGlzdF9uYW1lXVtkYXRhLWtleV9uYW1lXScpLmZvckVhY2goZG9tID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdF9uYW1lJykrJ1snK2RvbS5jbG9zZXN0KCdbZGF0YS1pbmRleF0nKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSsnXVsnK2RvbS5nZXRBdHRyaWJ1dGUoJ2RhdGEta2V5X25hbWUnKSsnXSc7XG4gICAgICAgIGRvbS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBuYW1lKTtcbiAgICB9KTtcbn07XG5cbiQoJ2Zvcm0gLnN1Ym1pdF9idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS5zdWJtaXQoKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAvLyB0ZXh0YXJlYeOCv+OCsOOCkuWFqOOBpuWPluW+l1xuICBjb25zdCB0ZXh0YXJlYUVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZXh0YXJlYVwiKTtcblxuICB0ZXh0YXJlYUVscy5mb3JFYWNoKCh0ZXh0YXJlYUVsKSA9PiB7XG4gICAgLy8g44OH44OV44Kp44Or44OI5YCk44Go44GX44Gm44K544K/44Kk44Or5bGe5oCn44KS5LuY5LiOXG4gICAgdGV4dGFyZWFFbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgaGVpZ2h0OiAke3RleHRhcmVhRWwuc2Nyb2xsSGVpZ2h0fXB4O2ApO1xuICAgIC8vIGlucHV044Kk44OZ44Oz44OI44GM55m655Sf44GZ44KL44Gf44Gz44Gr6Zai5pWw5ZG844Gz5Ye644GXXG4gICAgdGV4dGFyZWFFbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgc2V0VGV4dGFyZWFIZWlnaHQpO1xuICB9KTtcblxuICAvLyB0ZXh0YXJlYeOBrumrmOOBleOCkuioiOeul+OBl+OBpuaMh+WumuOBmeOCi+mWouaVsFxuICBmdW5jdGlvbiBzZXRUZXh0YXJlYUhlaWdodCgpIHtcbiAgICB0aGlzLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xuICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5zY3JvbGxIZWlnaHR9cHhgO1xuICB9XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwid2luZG93IiwiXyIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiJCIsImhhc0NsYXNzIiwidXBkYXRlTGlzdHMiLCJzZXRJbmRleE5hbWVUb0xpc3RJdGVtcyIsImNyaW1pbmFsTGlzdEh0bWwiLCJlYWNoIiwiJG9wdGlvbiIsInZhbCIsInRleHQiLCIkc2VsZWN0IiwiY2hhcmFJZCIsImh0bWwiLCJvbiIsImQiLCIkZG9tIiwiYXR0ciIsInNob3ciLCJoaWRlIiwiY2xpY2siLCIkc2VsZiIsImNoYXJhTmFtZSIsImNsb3Nlc3QiLCJmaW5kIiwibXNnIiwiQ0hBUkFfREVMRVRFX0NPTkZJUk1fTUVTU0FHRSIsInJlcGxhY2UiLCJsZW5ndGgiLCJteUNvbmZpcm0iLCJyZXN1bHQiLCJyZW1vdmUiLCJyZW1vdmVDbGFzcyIsImNsb25lIiwiYXBwZW5kIiwib3BlblBvcHVwIiwiY2xhc3NOYW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZWxlY3RvciIsIiRwb3B1cCIsImFkZENsYXNzIiwib2ZmIiwidGl0bGUiLCJzZXRGaWxlVXBsb2FkRXZlbnQiLCJvcHRpb24iLCJfZm9ybUNsYXNzIiwiZm9ybUNsYXNzIiwiX3NlbGVjdG9yIiwiX29uU3VjY2VzcyIsIm9uU3VjY2VzcyIsIiRpbnB1dCIsIm1lZGlhIiwibXlDb25zb2xlIiwibG9nIiwiX29uRmFpbHVyZSIsIm9uRmFpbHVyZSIsInJlcyIsImVycm9yIiwiX29uQ29tcGxldGUiLCJvbkNvbXBsZXRlIiwiX29uUHJvZ3Jlc3MiLCJvblByb2dyZXNzIiwicGVyY2VudCIsIiRmb3JtIiwidXBsb2FkRmlsZSIsInByb3AiLCJ0b1VzZXJJZCIsIkNIVU5LX1NJWkUiLCJSRVRSWV9MSU1JVCIsIlJFVFJZX0lOVEVSVkFMIiwiQ0hVTktfVVBMT0FEX1VSTCIsIkNTUkZfVE9LRU4iLCJzZW50IiwibWF5YmVTZW50IiwiY2h1bmtVcGxvYWRVcmwiLCJicHMiLCJwcm9ncmVzc1RpbWVyIiwic2V0SW50ZXJ2YWwiLCJwZXIiLCJzaXplIiwiY2h1bmtFbmQiLCJjaHVua0RhdGEiLCJzbGljZSIsImZkIiwiRm9ybURhdGEiLCJuYW1lIiwid2FpdCIsImkiLCJ1cFN0YXJ0QXQiLCJEYXRlIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJjb250ZW50VHlwZSIsInByb2Nlc3NEYXRhIiwiZGF0YSIsImVyciIsInN0YXR1cyIsInNsZWVwIiwiYWpheFJlc3VsdCIsInVwVGltZSIsImdldFRpbWUiLCJmaW5pc2hEYXRhIiwiZmlsZV9uYW1lIiwiZmlsZV9zaXplIiwiaXNfZmluaXNoIiwidG9fdXNlcl9pZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJsYXN0QWpheFJlc3VsdCIsIkVycm9yIiwiY2xlYXJJbnRlcnZhbCIsImlkeCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJkb20iLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJzdWJtaXQiLCJhZGRFdmVudExpc3RlbmVyIiwidGV4dGFyZWFFbHMiLCJ0ZXh0YXJlYUVsIiwic2Nyb2xsSGVpZ2h0Iiwic2V0VGV4dGFyZWFIZWlnaHQiLCJzdHlsZSIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=