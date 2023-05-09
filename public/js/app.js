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
__webpack_require__(/*! ./indivisual/scenario-show */ "./resources/js/indivisual/scenario-show.js");

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
    var crowdCriminalListHtml = $('.clone_base .js-crowd_criminal_list_html');
    var criminalListHtml = '<option></option>';
    $('select[data-key_name=character_id] option:selected').each(function () {
      var $option = $(this);
      criminalListHtml += '<option value="' + $option.val() + '">' + $option.text() + '</option>';
    });
    $('select.criminal').each(function () {
      var $select = $(this);
      var $selectIncident = $select.closest('.incident_wrapper').find('select.incident');
      var incidentId = Number($selectIncident.val());
      var charaId = $select.val();
      if (CROWD_INCIDENT_IDS.includes(incidentId)) {
        $select.html(crowdCriminalListHtml.clone());
      } else {
        $select.html(criminalListHtml);
      }
      $select.val(charaId);
    });
  };
  $(function () {
    $('[name=days]').click();
    updateLists();
  });
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
  $('.scenario_incident_list select.incident').on('click change', function () {
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

/***/ "./resources/js/indivisual/scenario-show.js":
/*!**************************************************!*\
  !*** ./resources/js/indivisual/scenario-show.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
if ($('body').hasClass('scenario-show')) {
  $('.js-show_private_sheet').on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var dialogMessage, _yield$myConfirm, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dialogMessage = $(this).attr('data-dialog_message');
            _context.next = 3;
            return myConfirm(dialogMessage);
          case 3:
            _yield$myConfirm = _context.sent;
            result = _yield$myConfirm.result;
            if (result == 'ok') {
              $('.private_sheet_wrapper').addClass('showing');
              $('.js-hide_private_sheet').show();
              $('.js-show_private_sheet').hide();
            }
          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));
  $('.js-hide_private_sheet').on('click', function () {
    $('.private_sheet_wrapper').removeClass('showing');
    $('.js-hide_private_sheet').hide();
    $('.js-show_private_sheet').show();
  });
  $('.show_initial_board_wrapper').on('click', function () {
    gtag('event', 'show_initial_board');
    $('.initial_board_wrapper').show();
    $('.show_initial_board_wrapper').hide();
  });
  $('.hide_initial_board_wrapper').on('click', function () {
    $('.initial_board_wrapper').hide();
    $('.show_initial_board_wrapper').show();
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
window.myAlert = function (msg) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  $('.c-popup.js-popup-my_confirm .button_wrapper [data-result=cancel]').hide();
  $('.c-popup.js-popup-my_confirm .message').html(msg.replace("\\n", '<br>'));
  $('.c-popup.js-popup-my_confirm .title').text(title);
  return openPopup('js-popup-my_confirm');
};
window.myConfirm = function (msg) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  $('.c-popup.js-popup-my_confirm .button_wrapper [data-result=cancel]').show();
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
$('.js-language_setting').on('change', function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUlELGNBQWMsRUFBRTtJQUNoQnhELEtBQUssQ0FBQy9DLElBQUksQ0FBQyxRQUFRLEVBQUV1RyxjQUFjLENBQUM7RUFDeEMsQ0FBQyxNQUFNO0lBQ0h4RCxLQUFLLENBQUMwRCxVQUFVLENBQUMsUUFBUSxDQUFDO0VBQzlCO0FBQ0osQ0FBQyxDQUFDO0FBRUZsSSxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQ3NCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsWUFBVztFQUM5Q3RCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ1ksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDcUgsTUFBTSxFQUFFO0FBQ3BDLENBQUMsQ0FBQztBQUVGdkksTUFBTSxDQUFDeUksZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtFQUNoRDtFQUNBLElBQU1DLFdBQVcsR0FBR1YsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7RUFFekRTLFdBQVcsQ0FBQ1IsT0FBTyxDQUFDLFVBQUNTLFVBQVUsRUFBSztJQUNsQztJQUNBQSxVQUFVLENBQUNQLFlBQVksQ0FBQyxPQUFPLG9CQUFhTyxVQUFVLENBQUNDLFlBQVksU0FBTTtJQUN6RTtJQUNBRCxVQUFVLENBQUNGLGdCQUFnQixDQUFDLE9BQU8sRUFBRUksaUJBQWlCLENBQUM7RUFDekQsQ0FBQyxDQUFDOztFQUVGO0VBQ0EsU0FBU0EsaUJBQWlCLEdBQUc7SUFDM0IsSUFBSSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sR0FBRyxNQUFNO0lBQzFCLElBQUksQ0FBQ0QsS0FBSyxDQUFDQyxNQUFNLGFBQU0sSUFBSSxDQUFDSCxZQUFZLE9BQUk7RUFDOUM7QUFDRixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ25ERiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaW5kaXZpc3VhbC9teV9zY2VuYXJpby1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2luZGl2aXN1YWwvc2NlbmFyaW8tc2hvdy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3VwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9hcHAuc2Nzcz9hODBiIl0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4vYm9vdHN0cmFwJyk7XG5yZXF1aXJlKCcuL3VwbG9hZCcpO1xucmVxdWlyZSgnLi9wb3B1cCcpO1xucmVxdWlyZSgnLi91dGlsaXR5Jyk7XG5cbnJlcXVpcmUoJy4vaW5kaXZpc3VhbC9teV9zY2VuYXJpby1jcmVhdGUnKTtcbnJlcXVpcmUoJy4vaW5kaXZpc3VhbC9zY2VuYXJpby1zaG93Jyk7XG5cbiIsIndpbmRvdy5fID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbi8qKlxuICogV2UnbGwgbG9hZCB0aGUgYXhpb3MgSFRUUCBsaWJyYXJ5IHdoaWNoIGFsbG93cyB1cyB0byBlYXNpbHkgaXNzdWUgcmVxdWVzdHNcbiAqIHRvIG91ciBMYXJhdmVsIGJhY2stZW5kLiBUaGlzIGxpYnJhcnkgYXV0b21hdGljYWxseSBoYW5kbGVzIHNlbmRpbmcgdGhlXG4gKiBDU1JGIHRva2VuIGFzIGEgaGVhZGVyIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiB0aGUgXCJYU1JGXCIgdG9rZW4gY29va2llLlxuICovXG5cbndpbmRvdy5heGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5cbndpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcblxuLyoqXG4gKiBFY2hvIGV4cG9zZXMgYW4gZXhwcmVzc2l2ZSBBUEkgZm9yIHN1YnNjcmliaW5nIHRvIGNoYW5uZWxzIGFuZCBsaXN0ZW5pbmdcbiAqIGZvciBldmVudHMgdGhhdCBhcmUgYnJvYWRjYXN0IGJ5IExhcmF2ZWwuIEVjaG8gYW5kIGV2ZW50IGJyb2FkY2FzdGluZ1xuICogYWxsb3dzIHlvdXIgdGVhbSB0byBlYXNpbHkgYnVpbGQgcm9idXN0IHJlYWwtdGltZSB3ZWIgYXBwbGljYXRpb25zLlxuICovXG5cbi8vIGltcG9ydCBFY2hvIGZyb20gJ2xhcmF2ZWwtZWNobyc7XG5cbi8vIHdpbmRvdy5QdXNoZXIgPSByZXF1aXJlKCdwdXNoZXItanMnKTtcblxuLy8gd2luZG93LkVjaG8gPSBuZXcgRWNobyh7XG4vLyAgICAgYnJvYWRjYXN0ZXI6ICdwdXNoZXInLFxuLy8gICAgIGtleTogcHJvY2Vzcy5lbnYuTUlYX1BVU0hFUl9BUFBfS0VZLFxuLy8gICAgIGNsdXN0ZXI6IHByb2Nlc3MuZW52Lk1JWF9QVVNIRVJfQVBQX0NMVVNURVIsXG4vLyAgICAgZm9yY2VUTFM6IHRydWVcbi8vIH0pO1xuIiwiaWYgKCQoJ2JvZHknKS5oYXNDbGFzcygnbXlfc2NlbmFyaW8tY3JlYXRlJykpIHtcbiAgICBmdW5jdGlvbiB1cGRhdGVMaXN0cygpIHtcbiAgICAgICAgc2V0SW5kZXhOYW1lVG9MaXN0SXRlbXMoKTtcblxuICAgICAgICBjb25zdCBjcm93ZENyaW1pbmFsTGlzdEh0bWwgPSAkKCcuY2xvbmVfYmFzZSAuanMtY3Jvd2RfY3JpbWluYWxfbGlzdF9odG1sJyk7XG4gICAgICAgIGxldCBjcmltaW5hbExpc3RIdG1sID0gJzxvcHRpb24+PC9vcHRpb24+JztcbiAgICAgICAgJCgnc2VsZWN0W2RhdGEta2V5X25hbWU9Y2hhcmFjdGVyX2lkXSBvcHRpb246c2VsZWN0ZWQnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgJG9wdGlvbiA9ICQodGhpcyk7XG4gICAgICAgICAgICBjcmltaW5hbExpc3RIdG1sICs9ICc8b3B0aW9uIHZhbHVlPVwiJyskb3B0aW9uLnZhbCgpKydcIj4nKyRvcHRpb24udGV4dCgpKyc8L29wdGlvbj4nO1xuICAgICAgICB9KTtcbiAgICAgICAgJCgnc2VsZWN0LmNyaW1pbmFsJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkKHRoaXMpO1xuICAgICAgICAgICAgY29uc3QgJHNlbGVjdEluY2lkZW50ID0gJHNlbGVjdC5jbG9zZXN0KCcuaW5jaWRlbnRfd3JhcHBlcicpLmZpbmQoJ3NlbGVjdC5pbmNpZGVudCcpO1xuICAgICAgICAgICAgY29uc3QgaW5jaWRlbnRJZCA9IE51bWJlcigkc2VsZWN0SW5jaWRlbnQudmFsKCkpO1xuXG4gICAgICAgICAgICBjb25zdCBjaGFyYUlkID0gJHNlbGVjdC52YWwoKTtcbiAgICAgICAgICAgIGlmIChDUk9XRF9JTkNJREVOVF9JRFMuaW5jbHVkZXMoaW5jaWRlbnRJZCkpIHtcbiAgICAgICAgICAgICAgICAkc2VsZWN0Lmh0bWwoY3Jvd2RDcmltaW5hbExpc3RIdG1sLmNsb25lKCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkc2VsZWN0Lmh0bWwoY3JpbWluYWxMaXN0SHRtbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkc2VsZWN0LnZhbChjaGFyYUlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgJCgoKSA9PiB7XG4gICAgICAgICQoJ1tuYW1lPWRheXNdJykuY2xpY2soKTtcbiAgICAgICAgdXBkYXRlTGlzdHMoKTtcbiAgICB9KTtcblxuICAgICQoJ1tuYW1lPWRheXNdJykub24oJ2NoYW5nZSBjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBkID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgJCgnLnNjZW5hcmlvX2luY2lkZW50X2xpc3QgPiBsaVtkYXRhLWRheV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgJGRvbSA9ICQodGhpcyk7XG4gICAgICAgICAgICBpZiAoJGRvbS5hdHRyKCdkYXRhLWRheScpIDw9IGQpIHtcbiAgICAgICAgICAgICAgICAkZG9tLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGRvbS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJCgnLnNjZW5hcmlvX2NoYXJhY3Rlcl9saXN0Jykub24oJ2NsaWNrJywgJy5jaGFyYWN0ZXJfcm93IC5qcy1jaGFyYV9kZWxldGVfYnV0dG9uJywgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0ICRzZWxmID0gJCh0aGlzKTtcbiAgICAgICAgY29uc3QgY2hhcmFOYW1lID0gJHNlbGYuY2xvc2VzdCgnLmNoYXJhY3Rlcl9yb3cnKS5maW5kKCdzZWxlY3RbZGF0YS1rZXlfbmFtZT1jaGFyYWN0ZXJfaWRdIG9wdGlvbjpzZWxlY3RlZCcpLnRleHQoKTtcbiAgICAgICAgY29uc3QgbXNnID0gQ0hBUkFfREVMRVRFX0NPTkZJUk1fTUVTU0FHRS5yZXBsYWNlKCdfX19DSEFSQV9fXycsIGNoYXJhTmFtZSk7XG4gICAgICAgIGlmICgkKCcuY2hhcmFjdGVyX3JvdycpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHtyZXN1bHR9ID0gYXdhaXQgbXlDb25maXJtKG1zZyk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09ICdvaycpIHtcbiAgICAgICAgICAgICAgICAkc2VsZi5jbG9zZXN0KCcuY2hhcmFjdGVyX3JvdycpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUxpc3RzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAkKCcuc2NlbmFyaW9fY2hhcmFjdGVyX2xpc3QnKS5vbignY2xpY2sgY2hhbmdlJywgJ3NlbGVjdFtkYXRhLWtleV9uYW1lPWNoYXJhY3Rlcl9pZF0nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdXBkYXRlTGlzdHMoKTtcbiAgICB9KTtcbiAgICAkKCcuc2NlbmFyaW9faW5jaWRlbnRfbGlzdCBzZWxlY3QuaW5jaWRlbnQnKS5vbignY2xpY2sgY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHVwZGF0ZUxpc3RzKCk7XG4gICAgfSk7XG4gICAgJCgnLnNjZW5hcmlvX2NoYXJhY3Rlcl9saXN0Jykub24oJ2NoYW5nZScsICcuY2hhcmFjdGVyX3JvdyBzZWxlY3RbZGF0YS1rZXlfbmFtZT1jaGFyYWN0ZXJfaWRdJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmNoYXJhY3Rlcl9yb3cnKS5yZW1vdmVDbGFzcygnaXMtZXJyb3InKTtcbiAgICB9KTtcbiAgICAkKCcuanMtY2hhcmFfYWRkX2J1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCAkZG9tID0gJCgnLmNoYXJhY3Rlcl9yb3c6bGFzdCcpLmNsb25lKCk7XG4gICAgICAgICRkb20ucmVtb3ZlQ2xhc3MoJ2lzLWVycm9yJyk7XG4gICAgICAgICQoJy5zY2VuYXJpb19jaGFyYWN0ZXJfbGlzdCcpLmFwcGVuZCgkZG9tKTtcbiAgICAgICAgdXBkYXRlTGlzdHMoKTtcbiAgICB9KTtcbn1cbiIsImlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ3NjZW5hcmlvLXNob3cnKSkge1xuICAgICQoJy5qcy1zaG93X3ByaXZhdGVfc2hlZXQnKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZGlhbG9nTWVzc2FnZSA9ICQodGhpcykuYXR0cignZGF0YS1kaWFsb2dfbWVzc2FnZScpO1xuICAgICAgICBjb25zdCB7cmVzdWx0fSA9IGF3YWl0IG15Q29uZmlybShkaWFsb2dNZXNzYWdlKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PSAnb2snKSB7XG4gICAgICAgICAgICAkKCcucHJpdmF0ZV9zaGVldF93cmFwcGVyJykuYWRkQ2xhc3MoJ3Nob3dpbmcnKTtcbiAgICAgICAgICAgICQoJy5qcy1oaWRlX3ByaXZhdGVfc2hlZXQnKS5zaG93KCk7XG4gICAgICAgICAgICAkKCcuanMtc2hvd19wcml2YXRlX3NoZWV0JykuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgJCgnLmpzLWhpZGVfcHJpdmF0ZV9zaGVldCcpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgJCgnLnByaXZhdGVfc2hlZXRfd3JhcHBlcicpLnJlbW92ZUNsYXNzKCdzaG93aW5nJyk7XG4gICAgICAgICQoJy5qcy1oaWRlX3ByaXZhdGVfc2hlZXQnKS5oaWRlKCk7XG4gICAgICAgICQoJy5qcy1zaG93X3ByaXZhdGVfc2hlZXQnKS5zaG93KCk7XG4gICAgfSk7XG5cbiAgICAkKCcuc2hvd19pbml0aWFsX2JvYXJkX3dyYXBwZXInKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGd0YWcoJ2V2ZW50JywgJ3Nob3dfaW5pdGlhbF9ib2FyZCcpO1xuICAgICAgICAkKCcuaW5pdGlhbF9ib2FyZF93cmFwcGVyJykuc2hvdygpO1xuICAgICAgICAkKCcuc2hvd19pbml0aWFsX2JvYXJkX3dyYXBwZXInKS5oaWRlKCk7XG4gICAgfSk7XG4gICAgJCgnLmhpZGVfaW5pdGlhbF9ib2FyZF93cmFwcGVyJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAkKCcuaW5pdGlhbF9ib2FyZF93cmFwcGVyJykuaGlkZSgpO1xuICAgICAgICAkKCcuc2hvd19pbml0aWFsX2JvYXJkX3dyYXBwZXInKS5zaG93KCk7XG4gICAgfSk7XG59XG4iLCJ3aW5kb3cub3BlblBvcHVwID0gY2xhc3NOYW1lID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9ICcuYy1wb3B1cC4nK2NsYXNzTmFtZTtcbiAgICAgICAgY29uc3QgJHBvcHVwID0gJChzZWxlY3Rvcik7XG5cbiAgICAgICAgJHBvcHVwLmFkZENsYXNzKCdvcGVuJyk7XG5cbiAgICAgICAgJHBvcHVwLmZpbmQoJy5maWx0ZXItYXJlYScpLm9mZignY2xpY2sub3Blbl9wb3B1cCcpLm9uKCdjbGljay5vcGVuX3BvcHVwJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkcG9wdXAucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICdyZXN1bHQnOiAnY2xvc2UnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICAkcG9wdXAuZmluZCgnLmNsb3NlX2J1dHRvbicpLm9mZignY2xpY2sub3Blbl9wb3B1cCcpLm9uKCdjbGljay5vcGVuX3BvcHVwJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkcG9wdXAucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICdyZXN1bHQnOiAnY2xvc2UnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICAkcG9wdXAuZmluZCgnW2RhdGEtcmVzdWx0XScpLm9mZignY2xpY2sub3Blbl9wb3B1cCcpLm9uKCdjbGljay5vcGVuX3BvcHVwJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCAkc2VsZiA9ICQodGhpcyk7XG4gICAgICAgICAgICAkcG9wdXAucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICdyZXN1bHQnOiAkc2VsZi5hdHRyKCdkYXRhLXJlc3VsdCcpLFxuICAgICAgICAgICAgICAgICdpbmZvJzogJHNlbGYuYXR0cignZGF0YS1pbmZvJyksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG53aW5kb3cubXlBbGVydCA9IChtc2csIHRpdGxlID0gJycpID0+IHtcbiAgICAkKCcuYy1wb3B1cC5qcy1wb3B1cC1teV9jb25maXJtIC5idXR0b25fd3JhcHBlciBbZGF0YS1yZXN1bHQ9Y2FuY2VsXScpLmhpZGUoKTtcbiAgICAkKCcuYy1wb3B1cC5qcy1wb3B1cC1teV9jb25maXJtIC5tZXNzYWdlJykuaHRtbChtc2cucmVwbGFjZShcIlxcXFxuXCIsICc8YnI+JykpO1xuICAgICQoJy5jLXBvcHVwLmpzLXBvcHVwLW15X2NvbmZpcm0gLnRpdGxlJykudGV4dCh0aXRsZSk7XG4gICAgcmV0dXJuIG9wZW5Qb3B1cCgnanMtcG9wdXAtbXlfY29uZmlybScpO1xufTtcblxud2luZG93Lm15Q29uZmlybSA9IChtc2csIHRpdGxlID0gJycpID0+IHtcbiAgICAkKCcuYy1wb3B1cC5qcy1wb3B1cC1teV9jb25maXJtIC5idXR0b25fd3JhcHBlciBbZGF0YS1yZXN1bHQ9Y2FuY2VsXScpLnNob3coKTtcbiAgICAkKCcuYy1wb3B1cC5qcy1wb3B1cC1teV9jb25maXJtIC5tZXNzYWdlJykuaHRtbChtc2cucmVwbGFjZShcIlxcXFxuXCIsICc8YnI+JykpO1xuICAgICQoJy5jLXBvcHVwLmpzLXBvcHVwLW15X2NvbmZpcm0gLnRpdGxlJykudGV4dCh0aXRsZSk7XG4gICAgcmV0dXJuIG9wZW5Qb3B1cCgnanMtcG9wdXAtbXlfY29uZmlybScpO1xufTtcbiIsIi8qKlxuKiDjg5XjgqHjgqTjg6vjgqLjg4Pjg5fjg63jg7zjg4lqc1xuKlxuKiBAcGFyYW0gb3B0aW9uLmZvcm1DbGFzcyDjg5XjgqHjgqTjg6vjgqLjg4Pjg5fjg63jg7zjg4njgqTjg5njg7Pjg4jjgpLku5XovrzjgoBmb3Jt44K/44Kw44Gu44Kv44Op44K5XG4qIEBwYXJhbSBvcHRpb24ub25TdWNjZXNzKCRpbnB1dCwgbWVkaWEpIOODleOCoeOCpOODq+OCouODg+ODl+ODreODvOODieaIkOWKn+aZguOBruWHpueQhuOAgiRpbnB1dOOBr+WvvuixoeOBrmlucHV0W3R5cGU9ZmlsZV1cbiogQHBhcmFtIG9wdGlvbi5vbkZhaWx1cmUoJGlucHV0LCByZXMpIOODleOCoeOCpOODq+OCouODg+ODl+ODreODvOODieWkseaVl+aZguOBruWHpueQhuOAgiRpbnB1dOOBr+WvvuixoeOBrmlucHV0W3R5cGU9ZmlsZV1cbiogQHBhcmFtIG9wdGlvbi5vbkNvbXBsZXRlKCRpbnB1dCwgeGhyKSDjg5XjgqHjgqTjg6vjgqLjg4Pjg5fjg63jg7zjg4nlrozkuobmmYLjga7lh6bnkIbjgIIkaW5wdXTjga/lr77osaHjga5pbnB1dFt0eXBlPWZpbGVdXG4qIEBwYXJhbSBvcHRpb24ub25Qcm9ncmVzcygkaW5wdXQsIHBlcmNlbnQpIOODleOCoeOCpOODq+OCouODg+ODl+ODreODvOODieS4reOBruWHpueQhuOAgiRpbnB1dOOBr+WvvuixoeOBrmlucHV0W3R5cGU9ZmlsZV1cbiovXG53aW5kb3cuc2V0RmlsZVVwbG9hZEV2ZW50ID0gKG9wdGlvbikgPT4ge1xuICAgIGNvbnN0IF9mb3JtQ2xhc3MgPSAob3B0aW9uLmZvcm1DbGFzcyB8fCAnJykubGVuZ3RoID4gMCA/ICcuJytvcHRpb24uZm9ybUNsYXNzIDogJyc7XG4gICAgY29uc3QgX3NlbGVjdG9yID0gJ2Zvcm0nK19mb3JtQ2xhc3MrJyBpbnB1dFt0eXBlPWZpbGVdW25hbWU9ZmlsZV0nO1xuICAgIGNvbnN0IF9vblN1Y2Nlc3MgPSBvcHRpb24ub25TdWNjZXNzIHx8ICgoJGlucHV0LCBtZWRpYSkgPT4geyBteUNvbnNvbGUubG9nKG1lZGlhKTsgfSk7XG4gICAgY29uc3QgX29uRmFpbHVyZSA9IG9wdGlvbi5vbkZhaWx1cmUgfHwgKCgkaW5wdXQsIHJlcykgPT4geyBteUNvbnNvbGUuZXJyb3IocmVzKTsgfSk7XG4gICAgY29uc3QgX29uQ29tcGxldGUgPSBvcHRpb24ub25Db21wbGV0ZSB8fCAoKCRpbnB1dCkgPT4ge30pO1xuICAgIGNvbnN0IF9vblByb2dyZXNzID0gb3B0aW9uLm9uUHJvZ3Jlc3MgfHwgKCgkaW5wdXQsIHBlcmNlbnQpID0+IHt9KTtcblxuICAgIG15Q29uc29sZS5sb2coX3NlbGVjdG9yKTtcblxuICAgICQoJ2JvZHknKS5vbignY2hhbmdlJywgX3NlbGVjdG9yLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgJHNlbGYgPSAkKHRoaXMpO1xuICAgICAgICBpZiAoISRzZWxmLnZhbCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJHNlbGYuY2xvc2VzdCgnZm9ybScpO1xuICAgICAgICBjb25zdCB1cGxvYWRGaWxlID0gJHNlbGYucHJvcCgnZmlsZXMnKVswXTtcbiAgICAgICAgY29uc3QgdG9Vc2VySWQgPSAkZm9ybS5maW5kKCdbbmFtZT10b191c2VyX2lkXScpLnZhbCgpO1xuICAgICAgICBcbiAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGxldCBwcm9ncmVzc1RpbWVyO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBDSFVOS19TSVpFID0gMTI4KjEwMjQqMTAyNDtcbiAgICAgICAgICAgICAgICBjb25zdCBSRVRSWV9MSU1JVCA9IDU7XG4gICAgICAgICAgICAgICAgY29uc3QgUkVUUllfSU5URVJWQUwgPSAxMDA7XG4gICAgICAgICAgICAgICAgY29uc3QgQ0hVTktfVVBMT0FEX1VSTCA9ICQoJ21ldGFbbmFtZT1jaHVua191cGxvYWRfdXJsXScpLmF0dHIoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBDU1JGX1RPS0VOID0gJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgc2VudCA9IDA7IC8vIOmAgeS/oea4iOOBv+ODkOOCpOODiOaVsFxuICAgICAgICAgICAgICAgIGxldCBtYXliZVNlbnQgPSAwOyAvLyDmnLrkuIrjga7pgIHkv6HmuIjjgb/jg5DjgqTjg4jmlbDjgILopovjgYvjgZHkuIrjga7jg5fjg63jgrDjg6zjgrnjg5Djg7zmm7TmlrDjga7jgZ/jgoHjgavkvb/jgYZcbiAgICAgICAgICAgICAgICBsZXQgY2h1bmtVcGxvYWRVcmwgPSBDSFVOS19VUExPQURfVVJMO1xuICAgICAgICAgICAgICAgIGxldCB3YWl0OyAvLyDmjIfmlbDjg5Djg4Pjgq/jgqrjg5XnlKhcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgYnBzID0gMDsgLy8g5ZCE44Ki44OD44OX44Ot44O844OJ44GL44KJ6KiI566X44GV44KM44GfQlBTW2J5dGUvc2VjXVxuICAgICAgICAgICAgICAgIHByb2dyZXNzVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1heWJlU2VudCArPSBicHMgKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXliZVNlbnQgPiBzZW50ICsgQ0hVTktfU0laRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF5YmVTZW50ID0gc2VudCArIENIVU5LX1NJWkU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IHBlciA9IG1heWJlU2VudCAqIDEwMC4wIC8gdXBsb2FkRmlsZS5zaXplO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGVyID4gOTkuOSkgcGVyID0gOTkuOTtcbiAgICAgICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MoJHNlbGYsIHBlcik7XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MoJHNlbGYsIDApO1xuICAgICAgICAgICAgICAgIHdoaWxlIChzZW50IDwgdXBsb2FkRmlsZS5zaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaHVua0VuZCA9IHNlbnQgKyBDSFVOS19TSVpFOyAvLyDku4rlm57pgIHjgovjg4Hjg6Pjg7Pjgq/jga7mnKvlsL7jg5DjgqTjg4hcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbnQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2h1bmtFbmQgPSBDSFVOS19TSVpFIC8gNDsgLy8g5pyA5Yid44Gg44GR44Gv6Lu944GE5a656YeP44Gn6YCB44KK44CB44Os44K544Od44Oz44K544K/44Kk44Og44KS6KiI5ris44GZ44KLXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNodW5rRGF0YSA9IHVwbG9hZEZpbGUuc2xpY2Uoc2VudCwgY2h1bmtFbmQpO1xuICAgICAgICAgICAgICAgICAgICBteUNvbnNvbGUubG9nKHNlbnQsIGNodW5rRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgbXlDb25zb2xlLmxvZyhjaHVua0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKCdmaWxlX25hbWUnLCB1cGxvYWRGaWxlLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoJ2ZpbGVfc2l6ZScsIHVwbG9hZEZpbGUuc2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZCgnY2h1bmtfZGF0YScsIGNodW5rRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB3YWl0ID0gUkVUUllfSU5URVJWQUw7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxIDsgaSA8PSBSRVRSWV9MSU1JVCA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBTdGFydEF0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWpheFJlc3VsdCA9IGF3YWl0ICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogY2h1bmtVcGxvYWRVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogQ1NSRl9UT0tFTixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZmQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChhc3luYyBlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15Q29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+PSBSRVRSWV9MSU1JVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDopo/lrprlm57mlbDlpLHmlZfjgZfjgZ/jga7jgafjgIHjgqLjg4Pjg5fjg63jg7zjg4nlh6bnkIblhajkvZPjgpLlpLHmlZfjgajjgb/jgarjgZlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihlcnIuc3RhdHVzID09IDQyMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA0MjLjga/jg5Djg6rjg4fjg7zjgrfjg6fjg7Pjgqjjg6njg7zjgarjga7jgafjgIHkvZXluqbnubDjgorov5TjgZfjgabjgoLjgrPjgrHjgovjga/jgZpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaMh+aVsOODkOODg+OCr+OCquODlVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCh3YWl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FpdCAqPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFqYXhSZXN1bHQ/LnJlc3VsdCA9PSAnT0snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g44GT44Gu44OB44Oj44Oz44Kv44Gv6YCB5L+h5oiQ5Yqf44GX44Gf44Gu44Gn5qyh44Gr6KGM44GPXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6YCB5L+h5pmC6ZaT44KS6KiI5risXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBUaW1lID0gKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSB1cFN0YXJ0QXQuZ2V0VGltZSgpKSAvIDEwMDAuMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicHMgPSAoY2h1bmtFbmQgLSBzZW50KSAvIHVwVGltZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmrKHjga5VUkzjgYzmnaXjgabjgZ/jgonmm7TmlrDjgZnjgotcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaHVua1VwbG9hZFVybCA9IGFqYXhSZXN1bHQudXJsID8/IGNodW5rVXBsb2FkVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNlbnQgPSBjaHVua0VuZDtcbiAgICAgICAgICAgICAgICAgICAgbWF5YmVTZW50ID0gY2h1bmtFbmQ7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcygkc2VsZiwgc2VudCAqIDEwMC4wIC8gdXBsb2FkRmlsZS5zaXplKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g5YiG5Ymy44Ki44OD44OX44Ot44O844OJ5a6M5LqG44GX44Gf44Gu44Gn44CB5pyA5b6M44Gr44OV44Kh44Kk44Or44KS57WQ5ZCI44GZ44KLXG4gICAgICAgICAgICAgICAgY29uc3QgZmluaXNoRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZV9uYW1lOiB1cGxvYWRGaWxlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGZpbGVfc2l6ZTogdXBsb2FkRmlsZS5zaXplLFxuICAgICAgICAgICAgICAgICAgICBpc19maW5pc2g6IHRydWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAodG9Vc2VySWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmluaXNoRGF0YS50b191c2VyX2lkID0gdG9Vc2VySWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBsYXN0QWpheFJlc3VsdDtcbiAgICAgICAgICAgICAgICB3YWl0ID0gUkVUUllfSU5URVJWQUw7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDw9IFJFVFJZX0xJTUlUIDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RBamF4UmVzdWx0ID0gYXdhaXQgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogY2h1bmtVcGxvYWRVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6IENTUkZfVE9LRU4sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGZpbmlzaERhdGEpLFxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChhc3luYyBlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXlDb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPj0gUkVUUllfTElNSVQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDopo/lrprlm57mlbDlpLHmlZfjgZfjgZ/jga7jgafjgIHjgqLjg4Pjg5fjg63jg7zjg4nlh6bnkIblhajkvZPjgpLlpLHmlZfjgajjgb/jgarjgZlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZXJyLnN0YXR1cyA9PSA0MjIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA0MjLjga/jg5Djg6rjg4fjg7zjgrfjg6fjg7Pjgqjjg6njg7zjgarjga7jgafjgIHkvZXluqbnubDjgorov5TjgZfjgabjgoLjgrPjgrHjgovjga/jgZpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaMh+aVsOODkOODg+OCr+OCquODlVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKHdhaXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhaXQgKj0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEFqYXhSZXN1bHQ/Lm1lZGlhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDjg5XjgqHjgqTjg6vntZDlkIhBUEnjgoLmiJDlip/jgZfjgZ/jga7jgafmrKHjgbhcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG15Q29uc29sZS5sb2cobGFzdEFqYXhSZXN1bHQpO1xuICAgICAgICAgICAgICAgIGlmIChsYXN0QWpheFJlc3VsdD8ubWVkaWEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5YWo6YOo57WC44KP44Gj44Gf44Gu44Gn5oiQ5Yqf5pmC44Kz44O844Or44OQ44OD44Kv44KS5Y+p44GPXG4gICAgICAgICAgICAgICAgICAgIF9vblN1Y2Nlc3MoJHNlbGYsIGxhc3RBamF4UmVzdWx0Lm1lZGlhKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ+e1kOWQiEFQSeWkseaVlycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIG15Q29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIF9vbkZhaWx1cmUoJHNlbGYsIGVycik7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwocHJvZ3Jlc3NUaW1lcik7XG4gICAgICAgICAgICAgICAgX29uQ29tcGxldGUoJHNlbGYpO1xuICAgICAgICAgICAgICAgICRzZWxmLnZhbCgnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgfSk7XG59O1xuXG4iLCJ3aW5kb3cuc2V0SW5kZXhOYW1lVG9MaXN0SXRlbXMgPSAoKSA9PiB7XG4gICAgbGV0IGlkeCA9IDE7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtaW5kZXhdJykuZm9yRWFjaChkb20gPT4ge1xuICAgICAgICBkb20uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaWR4KyspO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWluZGV4XSBbZGF0YS1saXN0X25hbWVdW2RhdGEta2V5X25hbWVdJykuZm9yRWFjaChkb20gPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gZG9tLmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0X25hbWUnKSsnWycrZG9tLmNsb3Nlc3QoJ1tkYXRhLWluZGV4XScpLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKyddWycrZG9tLmdldEF0dHJpYnV0ZSgnZGF0YS1rZXlfbmFtZScpKyddJztcbiAgICAgICAgZG9tLnNldEF0dHJpYnV0ZSgnbmFtZScsIG5hbWUpO1xuICAgIH0pO1xufTtcblxuJCgnZm9ybSAuc3VibWl0X2J1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0ICRzZWxmID0gJCh0aGlzKTtcbiAgICBjb25zdCAkZm9ybSA9ICRzZWxmLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICBjb25zdCBvcmlnaW5hbFRhcmdldCA9ICRmb3JtLmF0dHIoJ3RhcmdldCcpO1xuXG4gICAgaWYgKCRzZWxmLmF0dHIoJ2RhdGEtdGFyZ2V0JykpIHtcbiAgICAgICAgJGZvcm0uYXR0cigndGFyZ2V0JywgJHNlbGYuYXR0cignZGF0YS10YXJnZXQnKSk7XG4gICAgfVxuICAgIGlmICgkc2VsZi5hdHRyKCdkYXRhLWFjdGlvbicpKSB7XG4gICAgICAgICRmb3JtLmF0dHIoJ2FjdGlvbicsICRzZWxmLmF0dHIoJ2RhdGEtYWN0aW9uJykpO1xuICAgIH1cbiAgICAkZm9ybS5zdWJtaXQoKTtcblxuICAgIGlmIChvcmlnaW5hbFRhcmdldCkge1xuICAgICAgICAkZm9ybS5hdHRyKCd0YXJnZXQnLCBvcmlnaW5hbFRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGZvcm0ucmVtb3ZlQXR0cigndGFyZ2V0Jyk7XG4gICAgfVxufSk7XG5cbiQoJy5qcy1sYW5ndWFnZV9zZXR0aW5nJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgnZm9ybScpLnN1Ym1pdCgpO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIC8vIHRleHRhcmVh44K/44Kw44KS5YWo44Gm5Y+W5b6XXG4gIGNvbnN0IHRleHRhcmVhRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInRleHRhcmVhXCIpO1xuXG4gIHRleHRhcmVhRWxzLmZvckVhY2goKHRleHRhcmVhRWwpID0+IHtcbiAgICAvLyDjg4fjg5Xjgqnjg6vjg4jlgKTjgajjgZfjgabjgrnjgr/jgqTjg6vlsZ7mgKfjgpLku5jkuI5cbiAgICB0ZXh0YXJlYUVsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGBoZWlnaHQ6ICR7dGV4dGFyZWFFbC5zY3JvbGxIZWlnaHR9cHg7YCk7XG4gICAgLy8gaW5wdXTjgqTjg5njg7Pjg4jjgYznmbrnlJ/jgZnjgovjgZ/jgbPjgavplqLmlbDlkbzjgbPlh7rjgZdcbiAgICB0ZXh0YXJlYUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBzZXRUZXh0YXJlYUhlaWdodCk7XG4gIH0pO1xuXG4gIC8vIHRleHRhcmVh44Gu6auY44GV44KS6KiI566X44GX44Gm5oyH5a6a44GZ44KL6Zai5pWwXG4gIGZ1bmN0aW9uIHNldFRleHRhcmVhSGVpZ2h0KCkge1xuICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7XG4gICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLnNjcm9sbEhlaWdodH1weGA7XG4gIH1cbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJ3aW5kb3ciLCJfIiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCIkIiwiaGFzQ2xhc3MiLCJ1cGRhdGVMaXN0cyIsInNldEluZGV4TmFtZVRvTGlzdEl0ZW1zIiwiY3Jvd2RDcmltaW5hbExpc3RIdG1sIiwiY3JpbWluYWxMaXN0SHRtbCIsImVhY2giLCIkb3B0aW9uIiwidmFsIiwidGV4dCIsIiRzZWxlY3QiLCIkc2VsZWN0SW5jaWRlbnQiLCJjbG9zZXN0IiwiZmluZCIsImluY2lkZW50SWQiLCJOdW1iZXIiLCJjaGFyYUlkIiwiQ1JPV0RfSU5DSURFTlRfSURTIiwiaW5jbHVkZXMiLCJodG1sIiwiY2xvbmUiLCJjbGljayIsIm9uIiwiZCIsIiRkb20iLCJhdHRyIiwic2hvdyIsImhpZGUiLCIkc2VsZiIsImNoYXJhTmFtZSIsIm1zZyIsIkNIQVJBX0RFTEVURV9DT05GSVJNX01FU1NBR0UiLCJyZXBsYWNlIiwibGVuZ3RoIiwibXlDb25maXJtIiwicmVzdWx0IiwicmVtb3ZlIiwicmVtb3ZlQ2xhc3MiLCJhcHBlbmQiLCJkaWFsb2dNZXNzYWdlIiwiYWRkQ2xhc3MiLCJndGFnIiwib3BlblBvcHVwIiwiY2xhc3NOYW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZWxlY3RvciIsIiRwb3B1cCIsIm9mZiIsIm15QWxlcnQiLCJ0aXRsZSIsInNldEZpbGVVcGxvYWRFdmVudCIsIm9wdGlvbiIsIl9mb3JtQ2xhc3MiLCJmb3JtQ2xhc3MiLCJfc2VsZWN0b3IiLCJfb25TdWNjZXNzIiwib25TdWNjZXNzIiwiJGlucHV0IiwibWVkaWEiLCJteUNvbnNvbGUiLCJsb2ciLCJfb25GYWlsdXJlIiwib25GYWlsdXJlIiwicmVzIiwiZXJyb3IiLCJfb25Db21wbGV0ZSIsIm9uQ29tcGxldGUiLCJfb25Qcm9ncmVzcyIsIm9uUHJvZ3Jlc3MiLCJwZXJjZW50IiwiJGZvcm0iLCJ1cGxvYWRGaWxlIiwicHJvcCIsInRvVXNlcklkIiwiQ0hVTktfU0laRSIsIlJFVFJZX0xJTUlUIiwiUkVUUllfSU5URVJWQUwiLCJDSFVOS19VUExPQURfVVJMIiwiQ1NSRl9UT0tFTiIsInNlbnQiLCJtYXliZVNlbnQiLCJjaHVua1VwbG9hZFVybCIsImJwcyIsInByb2dyZXNzVGltZXIiLCJzZXRJbnRlcnZhbCIsInBlciIsInNpemUiLCJjaHVua0VuZCIsImNodW5rRGF0YSIsInNsaWNlIiwiZmQiLCJGb3JtRGF0YSIsIm5hbWUiLCJ3YWl0IiwiaSIsInVwU3RhcnRBdCIsIkRhdGUiLCJhamF4IiwidHlwZSIsInVybCIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCJkYXRhIiwiZXJyIiwic3RhdHVzIiwic2xlZXAiLCJhamF4UmVzdWx0IiwidXBUaW1lIiwiZ2V0VGltZSIsImZpbmlzaERhdGEiLCJmaWxlX25hbWUiLCJmaWxlX3NpemUiLCJpc19maW5pc2giLCJ0b191c2VyX2lkIiwiSlNPTiIsInN0cmluZ2lmeSIsImxhc3RBamF4UmVzdWx0IiwiRXJyb3IiLCJjbGVhckludGVydmFsIiwiaWR4IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImRvbSIsInNldEF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsIm9yaWdpbmFsVGFyZ2V0Iiwic3VibWl0IiwicmVtb3ZlQXR0ciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZXh0YXJlYUVscyIsInRleHRhcmVhRWwiLCJzY3JvbGxIZWlnaHQiLCJzZXRUZXh0YXJlYUhlaWdodCIsInN0eWxlIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==