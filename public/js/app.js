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
  $('.summary_qr img').on('click', function () {
    $(this).toggleClass('scaled');
  });
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
  $('.js-like_button').on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var $p, res;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            $p = $(this).closest('p');
            $p.toggleClass('liked');
            _context2.prev = 2;
            _context2.next = 5;
            return ajaxSubmit($p.closest('form'));
          case 5:
            res = _context2.sent;
            $p.find('.js-count').text(res.likes);
            _context2.next = 12;
            break;
          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](2);
            $p.toggleClass('liked');
          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[2, 9]]);
  })));
  $('.js-bookmark_button').on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var $p, res;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            $p = $(this).closest('p');
            _context3.prev = 1;
            _context3.next = 4;
            return ajaxSubmit($p.closest('form'));
          case 4:
            res = _context3.sent;
            $p.toggleClass('bookmarked');
            myAlert(res.message);
            _context3.next = 11;
            break;
          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[1, 9]]);
  })));
  $('.js-please_login').on('click', function () {
    myAlert($(this).attr('data-msg'));
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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
window.ajaxSubmit = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee($form) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return $.ajax({
              url: $form.attr('action'),
              type: $form.attr('method'),
              headers: {
                'X-CSRF-TOKEN': $('[name=csrf-token]').attr('content')
              },
              data: $form.serialize()
            });
          case 2:
            return _context.abrupt("return", _context.sent);
          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTTtJQUMxQixJQUFJLENBQUNELEtBQUssQ0FBQ0MsTUFBTSxhQUFNLElBQUksQ0FBQ0gsWUFBWSxPQUFJO0VBQzlDO0FBQ0YsQ0FBQyxDQUFDO0FBRUZqSixNQUFNLENBQUNrRCxVQUFVO0VBQUEsc0VBQUcsaUJBQU1pQyxLQUFLO0lBQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtZQUFBLE9BQ2Q3RSxDQUFDLENBQUN3RyxJQUFJLENBQUM7Y0FDaEJFLEdBQUcsRUFBRTdCLEtBQUssQ0FBQ3BELElBQUksQ0FBQyxRQUFRLENBQUM7Y0FDekJnRixJQUFJLEVBQUU1QixLQUFLLENBQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDO2NBQzFCM0IsT0FBTyxFQUFFO2dCQUNMLGNBQWMsRUFBRUUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUN5QixJQUFJLENBQUMsU0FBUztjQUN6RCxDQUFDO2NBQ0RvRixJQUFJLEVBQUVoQyxLQUFLLENBQUNrRSxTQUFTO1lBQ3pCLENBQUMsQ0FBQztVQUFBO1lBQUE7VUFBQTtVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUE7RUFBQSxDQUNMO0VBQUE7SUFBQTtFQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQzlERCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaW5kaXZpc3VhbC9teV9zY2VuYXJpby1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2luZGl2aXN1YWwvc2NlbmFyaW8tc2hvdy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3VwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCcuL2Jvb3RzdHJhcCcpO1xucmVxdWlyZSgnLi91cGxvYWQnKTtcbnJlcXVpcmUoJy4vcG9wdXAnKTtcbnJlcXVpcmUoJy4vdXRpbGl0eScpO1xuXG5yZXF1aXJlKCcuL2luZGl2aXN1YWwvbXlfc2NlbmFyaW8tY3JlYXRlJyk7XG5yZXF1aXJlKCcuL2luZGl2aXN1YWwvc2NlbmFyaW8tc2hvdycpO1xuXG4iLCJ3aW5kb3cuXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuXG4vKipcbiAqIFdlJ2xsIGxvYWQgdGhlIGF4aW9zIEhUVFAgbGlicmFyeSB3aGljaCBhbGxvd3MgdXMgdG8gZWFzaWx5IGlzc3VlIHJlcXVlc3RzXG4gKiB0byBvdXIgTGFyYXZlbCBiYWNrLWVuZC4gVGhpcyBsaWJyYXJ5IGF1dG9tYXRpY2FsbHkgaGFuZGxlcyBzZW5kaW5nIHRoZVxuICogQ1NSRiB0b2tlbiBhcyBhIGhlYWRlciBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgdGhlIFwiWFNSRlwiIHRva2VuIGNvb2tpZS5cbiAqL1xuXG53aW5kb3cuYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbi8qKlxuICogRWNobyBleHBvc2VzIGFuIGV4cHJlc3NpdmUgQVBJIGZvciBzdWJzY3JpYmluZyB0byBjaGFubmVscyBhbmQgbGlzdGVuaW5nXG4gKiBmb3IgZXZlbnRzIHRoYXQgYXJlIGJyb2FkY2FzdCBieSBMYXJhdmVsLiBFY2hvIGFuZCBldmVudCBicm9hZGNhc3RpbmdcbiAqIGFsbG93cyB5b3VyIHRlYW0gdG8gZWFzaWx5IGJ1aWxkIHJvYnVzdCByZWFsLXRpbWUgd2ViIGFwcGxpY2F0aW9ucy5cbiAqL1xuXG4vLyBpbXBvcnQgRWNobyBmcm9tICdsYXJhdmVsLWVjaG8nO1xuXG4vLyB3aW5kb3cuUHVzaGVyID0gcmVxdWlyZSgncHVzaGVyLWpzJyk7XG5cbi8vIHdpbmRvdy5FY2hvID0gbmV3IEVjaG8oe1xuLy8gICAgIGJyb2FkY2FzdGVyOiAncHVzaGVyJyxcbi8vICAgICBrZXk6IHByb2Nlc3MuZW52Lk1JWF9QVVNIRVJfQVBQX0tFWSxcbi8vICAgICBjbHVzdGVyOiBwcm9jZXNzLmVudi5NSVhfUFVTSEVSX0FQUF9DTFVTVEVSLFxuLy8gICAgIGZvcmNlVExTOiB0cnVlXG4vLyB9KTtcbiIsImlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ215X3NjZW5hcmlvLWNyZWF0ZScpKSB7XG4gICAgZnVuY3Rpb24gdXBkYXRlTGlzdHMoKSB7XG4gICAgICAgIHNldEluZGV4TmFtZVRvTGlzdEl0ZW1zKCk7XG5cbiAgICAgICAgY29uc3QgY3Jvd2RDcmltaW5hbExpc3RIdG1sID0gJCgnLmNsb25lX2Jhc2UgLmpzLWNyb3dkX2NyaW1pbmFsX2xpc3RfaHRtbCcpO1xuICAgICAgICBsZXQgY3JpbWluYWxMaXN0SHRtbCA9ICc8b3B0aW9uPjwvb3B0aW9uPic7XG4gICAgICAgICQoJ3NlbGVjdFtkYXRhLWtleV9uYW1lPWNoYXJhY3Rlcl9pZF0gb3B0aW9uOnNlbGVjdGVkJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0ICRvcHRpb24gPSAkKHRoaXMpO1xuICAgICAgICAgICAgY3JpbWluYWxMaXN0SHRtbCArPSAnPG9wdGlvbiB2YWx1ZT1cIicrJG9wdGlvbi52YWwoKSsnXCI+Jyskb3B0aW9uLnRleHQoKSsnPC9vcHRpb24+JztcbiAgICAgICAgfSk7XG4gICAgICAgICQoJ3NlbGVjdC5jcmltaW5hbCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCAkc2VsZWN0ID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGNvbnN0ICRzZWxlY3RJbmNpZGVudCA9ICRzZWxlY3QuY2xvc2VzdCgnLmluY2lkZW50X3dyYXBwZXInKS5maW5kKCdzZWxlY3QuaW5jaWRlbnQnKTtcbiAgICAgICAgICAgIGNvbnN0IGluY2lkZW50SWQgPSBOdW1iZXIoJHNlbGVjdEluY2lkZW50LnZhbCgpKTtcblxuICAgICAgICAgICAgY29uc3QgY2hhcmFJZCA9ICRzZWxlY3QudmFsKCk7XG4gICAgICAgICAgICBpZiAoQ1JPV0RfSU5DSURFTlRfSURTLmluY2x1ZGVzKGluY2lkZW50SWQpKSB7XG4gICAgICAgICAgICAgICAgJHNlbGVjdC5odG1sKGNyb3dkQ3JpbWluYWxMaXN0SHRtbC5jbG9uZSgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHNlbGVjdC5odG1sKGNyaW1pbmFsTGlzdEh0bWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJHNlbGVjdC52YWwoY2hhcmFJZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICQoKCkgPT4ge1xuICAgICAgICAkKCdbbmFtZT1kYXlzXScpLmNsaWNrKCk7XG4gICAgICAgIHVwZGF0ZUxpc3RzKCk7XG4gICAgfSk7XG5cbiAgICAkKCdbbmFtZT1kYXlzXScpLm9uKCdjaGFuZ2UgY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZCA9ICQodGhpcykudmFsKCk7XG4gICAgICAgICQoJy5zY2VuYXJpb19pbmNpZGVudF9saXN0ID4gbGlbZGF0YS1kYXldJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0ICRkb20gPSAkKHRoaXMpO1xuICAgICAgICAgICAgaWYgKCRkb20uYXR0cignZGF0YS1kYXknKSA8PSBkKSB7XG4gICAgICAgICAgICAgICAgJGRvbS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRkb20uaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgICQoJy5zY2VuYXJpb19jaGFyYWN0ZXJfbGlzdCcpLm9uKCdjbGljaycsICcuY2hhcmFjdGVyX3JvdyAuanMtY2hhcmFfZGVsZXRlX2J1dHRvbicsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCAkc2VsZiA9ICQodGhpcyk7XG4gICAgICAgIGNvbnN0IGNoYXJhTmFtZSA9ICRzZWxmLmNsb3Nlc3QoJy5jaGFyYWN0ZXJfcm93JykuZmluZCgnc2VsZWN0W2RhdGEta2V5X25hbWU9Y2hhcmFjdGVyX2lkXSBvcHRpb246c2VsZWN0ZWQnKS50ZXh0KCk7XG4gICAgICAgIGNvbnN0IG1zZyA9IENIQVJBX0RFTEVURV9DT05GSVJNX01FU1NBR0UucmVwbGFjZSgnX19fQ0hBUkFfX18nLCBjaGFyYU5hbWUpO1xuICAgICAgICBpZiAoJCgnLmNoYXJhY3Rlcl9yb3cnKS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjb25zdCB7cmVzdWx0fSA9IGF3YWl0IG15Q29uZmlybShtc2cpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PSAnb2snKSB7XG4gICAgICAgICAgICAgICAgJHNlbGYuY2xvc2VzdCgnLmNoYXJhY3Rlcl9yb3cnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVMaXN0cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgJCgnLnNjZW5hcmlvX2NoYXJhY3Rlcl9saXN0Jykub24oJ2NsaWNrIGNoYW5nZScsICdzZWxlY3RbZGF0YS1rZXlfbmFtZT1jaGFyYWN0ZXJfaWRdJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHVwZGF0ZUxpc3RzKCk7XG4gICAgfSk7XG4gICAgJCgnLnNjZW5hcmlvX2luY2lkZW50X2xpc3Qgc2VsZWN0LmluY2lkZW50Jykub24oJ2NsaWNrIGNoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICB1cGRhdGVMaXN0cygpO1xuICAgIH0pO1xuICAgICQoJy5zY2VuYXJpb19jaGFyYWN0ZXJfbGlzdCcpLm9uKCdjaGFuZ2UnLCAnLmNoYXJhY3Rlcl9yb3cgc2VsZWN0W2RhdGEta2V5X25hbWU9Y2hhcmFjdGVyX2lkXScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5jaGFyYWN0ZXJfcm93JykucmVtb3ZlQ2xhc3MoJ2lzLWVycm9yJyk7XG4gICAgfSk7XG4gICAgJCgnLmpzLWNoYXJhX2FkZF9idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgJGRvbSA9ICQoJy5jaGFyYWN0ZXJfcm93Omxhc3QnKS5jbG9uZSgpO1xuICAgICAgICAkZG9tLnJlbW92ZUNsYXNzKCdpcy1lcnJvcicpO1xuICAgICAgICAkKCcuc2NlbmFyaW9fY2hhcmFjdGVyX2xpc3QnKS5hcHBlbmQoJGRvbSk7XG4gICAgICAgIHVwZGF0ZUxpc3RzKCk7XG4gICAgfSk7XG59XG4iLCJpZiAoJCgnYm9keScpLmhhc0NsYXNzKCdzY2VuYXJpby1zaG93JykpIHtcbiAgICAkKCcuc3VtbWFyeV9xciBpbWcnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnc2NhbGVkJyk7XG4gICAgfSk7XG5cbiAgICAkKCcuanMtc2hvd19wcml2YXRlX3NoZWV0Jykub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGRpYWxvZ01lc3NhZ2UgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZGlhbG9nX21lc3NhZ2UnKTtcbiAgICAgICAgY29uc3Qge3Jlc3VsdH0gPSBhd2FpdCBteUNvbmZpcm0oZGlhbG9nTWVzc2FnZSk7XG4gICAgICAgIGlmIChyZXN1bHQgPT0gJ29rJykge1xuICAgICAgICAgICAgJCgnLnByaXZhdGVfc2hlZXRfd3JhcHBlcicpLmFkZENsYXNzKCdzaG93aW5nJyk7XG4gICAgICAgICAgICAkKCcuanMtaGlkZV9wcml2YXRlX3NoZWV0Jykuc2hvdygpO1xuICAgICAgICAgICAgJCgnLmpzLXNob3dfcHJpdmF0ZV9zaGVldCcpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgICQoJy5qcy1oaWRlX3ByaXZhdGVfc2hlZXQnKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICQoJy5wcml2YXRlX3NoZWV0X3dyYXBwZXInKS5yZW1vdmVDbGFzcygnc2hvd2luZycpO1xuICAgICAgICAkKCcuanMtaGlkZV9wcml2YXRlX3NoZWV0JykuaGlkZSgpO1xuICAgICAgICAkKCcuanMtc2hvd19wcml2YXRlX3NoZWV0Jykuc2hvdygpO1xuICAgIH0pO1xuXG4gICAgJCgnLnNob3dfaW5pdGlhbF9ib2FyZF93cmFwcGVyJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBndGFnKCdldmVudCcsICdzaG93X2luaXRpYWxfYm9hcmQnKTtcbiAgICAgICAgJCgnLmluaXRpYWxfYm9hcmRfd3JhcHBlcicpLnNob3coKTtcbiAgICAgICAgJCgnLnNob3dfaW5pdGlhbF9ib2FyZF93cmFwcGVyJykuaGlkZSgpO1xuICAgIH0pO1xuICAgICQoJy5oaWRlX2luaXRpYWxfYm9hcmRfd3JhcHBlcicpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgJCgnLmluaXRpYWxfYm9hcmRfd3JhcHBlcicpLmhpZGUoKTtcbiAgICAgICAgJCgnLnNob3dfaW5pdGlhbF9ib2FyZF93cmFwcGVyJykuc2hvdygpO1xuICAgIH0pO1xuXG4gICAgJCgnLmpzLWxpa2VfYnV0dG9uJykub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0ICRwID0gJCh0aGlzKS5jbG9zZXN0KCdwJyk7XG4gICAgICAgICRwLnRvZ2dsZUNsYXNzKCdsaWtlZCcpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYWpheFN1Ym1pdCgkcC5jbG9zZXN0KCdmb3JtJykpO1xuICAgICAgICAgICAgJHAuZmluZCgnLmpzLWNvdW50JykudGV4dChyZXMubGlrZXMpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAkcC50b2dnbGVDbGFzcygnbGlrZWQnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnLmpzLWJvb2ttYXJrX2J1dHRvbicpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCAkcCA9ICQodGhpcykuY2xvc2VzdCgncCcpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYWpheFN1Ym1pdCgkcC5jbG9zZXN0KCdmb3JtJykpO1xuICAgICAgICAgICAgJHAudG9nZ2xlQ2xhc3MoJ2Jvb2ttYXJrZWQnKTtcbiAgICAgICAgICAgIG15QWxlcnQocmVzLm1lc3NhZ2UpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5qcy1wbGVhc2VfbG9naW4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbXlBbGVydCgkKHRoaXMpLmF0dHIoJ2RhdGEtbXNnJykpO1xuICAgIH0pO1xufVxuIiwid2luZG93Lm9wZW5Qb3B1cCA9IGNsYXNzTmFtZSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSAnLmMtcG9wdXAuJytjbGFzc05hbWU7XG4gICAgICAgIGNvbnN0ICRwb3B1cCA9ICQoc2VsZWN0b3IpO1xuXG4gICAgICAgICRwb3B1cC5hZGRDbGFzcygnb3BlbicpO1xuXG4gICAgICAgICRwb3B1cC5maW5kKCcuZmlsdGVyLWFyZWEnKS5vZmYoJ2NsaWNrLm9wZW5fcG9wdXAnKS5vbignY2xpY2sub3Blbl9wb3B1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJHBvcHVwLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAncmVzdWx0JzogJ2Nsb3NlJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgJHBvcHVwLmZpbmQoJy5jbG9zZV9idXR0b24nKS5vZmYoJ2NsaWNrLm9wZW5fcG9wdXAnKS5vbignY2xpY2sub3Blbl9wb3B1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJHBvcHVwLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAncmVzdWx0JzogJ2Nsb3NlJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgJHBvcHVwLmZpbmQoJ1tkYXRhLXJlc3VsdF0nKS5vZmYoJ2NsaWNrLm9wZW5fcG9wdXAnKS5vbignY2xpY2sub3Blbl9wb3B1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgJHNlbGYgPSAkKHRoaXMpO1xuICAgICAgICAgICAgJHBvcHVwLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAncmVzdWx0JzogJHNlbGYuYXR0cignZGF0YS1yZXN1bHQnKSxcbiAgICAgICAgICAgICAgICAnaW5mbyc6ICRzZWxmLmF0dHIoJ2RhdGEtaW5mbycpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxud2luZG93Lm15QWxlcnQgPSAobXNnLCB0aXRsZSA9ICcnKSA9PiB7XG4gICAgJCgnLmMtcG9wdXAuanMtcG9wdXAtbXlfY29uZmlybSAuYnV0dG9uX3dyYXBwZXIgW2RhdGEtcmVzdWx0PWNhbmNlbF0nKS5oaWRlKCk7XG4gICAgJCgnLmMtcG9wdXAuanMtcG9wdXAtbXlfY29uZmlybSAubWVzc2FnZScpLmh0bWwobXNnLnJlcGxhY2UoXCJcXFxcblwiLCAnPGJyPicpKTtcbiAgICAkKCcuYy1wb3B1cC5qcy1wb3B1cC1teV9jb25maXJtIC50aXRsZScpLnRleHQodGl0bGUpO1xuICAgIHJldHVybiBvcGVuUG9wdXAoJ2pzLXBvcHVwLW15X2NvbmZpcm0nKTtcbn07XG5cbndpbmRvdy5teUNvbmZpcm0gPSAobXNnLCB0aXRsZSA9ICcnKSA9PiB7XG4gICAgJCgnLmMtcG9wdXAuanMtcG9wdXAtbXlfY29uZmlybSAuYnV0dG9uX3dyYXBwZXIgW2RhdGEtcmVzdWx0PWNhbmNlbF0nKS5zaG93KCk7XG4gICAgJCgnLmMtcG9wdXAuanMtcG9wdXAtbXlfY29uZmlybSAubWVzc2FnZScpLmh0bWwobXNnLnJlcGxhY2UoXCJcXFxcblwiLCAnPGJyPicpKTtcbiAgICAkKCcuYy1wb3B1cC5qcy1wb3B1cC1teV9jb25maXJtIC50aXRsZScpLnRleHQodGl0bGUpO1xuICAgIHJldHVybiBvcGVuUG9wdXAoJ2pzLXBvcHVwLW15X2NvbmZpcm0nKTtcbn07XG4iLCIvKipcbiog44OV44Kh44Kk44Or44Ki44OD44OX44Ot44O844OJanNcbipcbiogQHBhcmFtIG9wdGlvbi5mb3JtQ2xhc3Mg44OV44Kh44Kk44Or44Ki44OD44OX44Ot44O844OJ44Kk44OZ44Oz44OI44KS5LuV6L6844KAZm9ybeOCv+OCsOOBruOCr+ODqeOCuVxuKiBAcGFyYW0gb3B0aW9uLm9uU3VjY2VzcygkaW5wdXQsIG1lZGlhKSDjg5XjgqHjgqTjg6vjgqLjg4Pjg5fjg63jg7zjg4nmiJDlip/mmYLjga7lh6bnkIbjgIIkaW5wdXTjga/lr77osaHjga5pbnB1dFt0eXBlPWZpbGVdXG4qIEBwYXJhbSBvcHRpb24ub25GYWlsdXJlKCRpbnB1dCwgcmVzKSDjg5XjgqHjgqTjg6vjgqLjg4Pjg5fjg63jg7zjg4nlpLHmlZfmmYLjga7lh6bnkIbjgIIkaW5wdXTjga/lr77osaHjga5pbnB1dFt0eXBlPWZpbGVdXG4qIEBwYXJhbSBvcHRpb24ub25Db21wbGV0ZSgkaW5wdXQsIHhocikg44OV44Kh44Kk44Or44Ki44OD44OX44Ot44O844OJ5a6M5LqG5pmC44Gu5Yem55CG44CCJGlucHV044Gv5a++6LGh44GuaW5wdXRbdHlwZT1maWxlXVxuKiBAcGFyYW0gb3B0aW9uLm9uUHJvZ3Jlc3MoJGlucHV0LCBwZXJjZW50KSDjg5XjgqHjgqTjg6vjgqLjg4Pjg5fjg63jg7zjg4nkuK3jga7lh6bnkIbjgIIkaW5wdXTjga/lr77osaHjga5pbnB1dFt0eXBlPWZpbGVdXG4qL1xud2luZG93LnNldEZpbGVVcGxvYWRFdmVudCA9IChvcHRpb24pID0+IHtcbiAgICBjb25zdCBfZm9ybUNsYXNzID0gKG9wdGlvbi5mb3JtQ2xhc3MgfHwgJycpLmxlbmd0aCA+IDAgPyAnLicrb3B0aW9uLmZvcm1DbGFzcyA6ICcnO1xuICAgIGNvbnN0IF9zZWxlY3RvciA9ICdmb3JtJytfZm9ybUNsYXNzKycgaW5wdXRbdHlwZT1maWxlXVtuYW1lPWZpbGVdJztcbiAgICBjb25zdCBfb25TdWNjZXNzID0gb3B0aW9uLm9uU3VjY2VzcyB8fCAoKCRpbnB1dCwgbWVkaWEpID0+IHsgbXlDb25zb2xlLmxvZyhtZWRpYSk7IH0pO1xuICAgIGNvbnN0IF9vbkZhaWx1cmUgPSBvcHRpb24ub25GYWlsdXJlIHx8ICgoJGlucHV0LCByZXMpID0+IHsgbXlDb25zb2xlLmVycm9yKHJlcyk7IH0pO1xuICAgIGNvbnN0IF9vbkNvbXBsZXRlID0gb3B0aW9uLm9uQ29tcGxldGUgfHwgKCgkaW5wdXQpID0+IHt9KTtcbiAgICBjb25zdCBfb25Qcm9ncmVzcyA9IG9wdGlvbi5vblByb2dyZXNzIHx8ICgoJGlucHV0LCBwZXJjZW50KSA9PiB7fSk7XG5cbiAgICBteUNvbnNvbGUubG9nKF9zZWxlY3Rvcik7XG5cbiAgICAkKCdib2R5Jykub24oJ2NoYW5nZScsIF9zZWxlY3RvciwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0ICRzZWxmID0gJCh0aGlzKTtcbiAgICAgICAgaWYgKCEkc2VsZi52YWwoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCAkZm9ybSA9ICRzZWxmLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgdXBsb2FkRmlsZSA9ICRzZWxmLnByb3AoJ2ZpbGVzJylbMF07XG4gICAgICAgIGNvbnN0IHRvVXNlcklkID0gJGZvcm0uZmluZCgnW25hbWU9dG9fdXNlcl9pZF0nKS52YWwoKTtcbiAgICAgICAgXG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3NUaW1lcjtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgQ0hVTktfU0laRSA9IDEyOCoxMDI0KjEwMjQ7XG4gICAgICAgICAgICAgICAgY29uc3QgUkVUUllfTElNSVQgPSA1O1xuICAgICAgICAgICAgICAgIGNvbnN0IFJFVFJZX0lOVEVSVkFMID0gMTAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IENIVU5LX1VQTE9BRF9VUkwgPSAkKCdtZXRhW25hbWU9Y2h1bmtfdXBsb2FkX3VybF0nKS5hdHRyKCdjb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgQ1NSRl9UT0tFTiA9ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHNlbnQgPSAwOyAvLyDpgIHkv6HmuIjjgb/jg5DjgqTjg4jmlbBcbiAgICAgICAgICAgICAgICBsZXQgbWF5YmVTZW50ID0gMDsgLy8g5py65LiK44Gu6YCB5L+h5riI44G/44OQ44Kk44OI5pWw44CC6KaL44GL44GR5LiK44Gu44OX44Ot44Kw44Os44K544OQ44O85pu05paw44Gu44Gf44KB44Gr5L2/44GGXG4gICAgICAgICAgICAgICAgbGV0IGNodW5rVXBsb2FkVXJsID0gQ0hVTktfVVBMT0FEX1VSTDtcbiAgICAgICAgICAgICAgICBsZXQgd2FpdDsgLy8g5oyH5pWw44OQ44OD44Kv44Kq44OV55SoXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGJwcyA9IDA7IC8vIOWQhOOCouODg+ODl+ODreODvOODieOBi+OCieioiOeul+OBleOCjOOBn0JQU1tieXRlL3NlY11cbiAgICAgICAgICAgICAgICBwcm9ncmVzc1RpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtYXliZVNlbnQgKz0gYnBzICogMC41O1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF5YmVTZW50ID4gc2VudCArIENIVU5LX1NJWkUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heWJlU2VudCA9IHNlbnQgKyBDSFVOS19TSVpFO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBwZXIgPSBtYXliZVNlbnQgKiAxMDAuMCAvIHVwbG9hZEZpbGUuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBlciA+IDk5LjkpIHBlciA9IDk5Ljk7XG4gICAgICAgICAgICAgICAgICAgIF9vblByb2dyZXNzKCRzZWxmLCBwZXIpO1xuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIF9vblByb2dyZXNzKCRzZWxmLCAwKTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoc2VudCA8IHVwbG9hZEZpbGUuc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmtFbmQgPSBzZW50ICsgQ0hVTktfU0laRTsgLy8g5LuK5Zue6YCB44KL44OB44Oj44Oz44Kv44Gu5pyr5bC+44OQ44Kk44OIXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZW50ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNodW5rRW5kID0gQ0hVTktfU0laRSAvIDQ7IC8vIOacgOWIneOBoOOBkeOBr+i7veOBhOWuuemHj+OBp+mAgeOCiuOAgeODrOOCueODneODs+OCueOCv+OCpOODoOOCkuioiOa4rOOBmeOCi1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaHVua0RhdGEgPSB1cGxvYWRGaWxlLnNsaWNlKHNlbnQsIGNodW5rRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgbXlDb25zb2xlLmxvZyhzZW50LCBjaHVua0VuZCk7XG4gICAgICAgICAgICAgICAgICAgIG15Q29uc29sZS5sb2coY2h1bmtEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZCgnZmlsZV9uYW1lJywgdXBsb2FkRmlsZS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKCdmaWxlX3NpemUnLCB1cGxvYWRGaWxlLnNpemUpO1xuICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoJ2NodW5rX2RhdGEnLCBjaHVua0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgd2FpdCA9IFJFVFJZX0lOVEVSVkFMO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMSA7IGkgPD0gUkVUUllfTElNSVQgOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwU3RhcnRBdCA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFqYXhSZXN1bHQgPSBhd2FpdCAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGNodW5rVXBsb2FkVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6IENTUkZfVE9LRU4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGZkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goYXN5bmMgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteUNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPj0gUkVUUllfTElNSVQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6KaP5a6a5Zue5pWw5aSx5pWX44GX44Gf44Gu44Gn44CB44Ki44OD44OX44Ot44O844OJ5Yem55CG5YWo5L2T44KS5aSx5pWX44Go44G/44Gq44GZXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZXJyLnN0YXR1cyA9PSA0MjIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gNDIy44Gv44OQ44Oq44OH44O844K344On44Oz44Ko44Op44O844Gq44Gu44Gn44CB5L2V5bqm57mw44KK6L+U44GX44Gm44KC44Kz44Kx44KL44Gv44GaXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmjIfmlbDjg5Djg4Pjgq/jgqrjg5VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAod2FpdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhaXQgKj0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhamF4UmVzdWx0Py5yZXN1bHQgPT0gJ09LJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOOBk+OBruODgeODo+ODs+OCr+OBr+mAgeS/oeaIkOWKn+OBl+OBn+OBruOBp+asoeOBq+ihjOOBj1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOmAgeS/oeaZgumWk+OCkuioiOa4rFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwVGltZSA9ICgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gdXBTdGFydEF0LmdldFRpbWUoKSkgLyAxMDAwLjA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnBzID0gKGNodW5rRW5kIC0gc2VudCkgLyB1cFRpbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5qyh44GuVVJM44GM5p2l44Gm44Gf44KJ5pu05paw44GZ44KLXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2h1bmtVcGxvYWRVcmwgPSBhamF4UmVzdWx0LnVybCA/PyBjaHVua1VwbG9hZFVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZW50ID0gY2h1bmtFbmQ7XG4gICAgICAgICAgICAgICAgICAgIG1heWJlU2VudCA9IGNodW5rRW5kO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MoJHNlbGYsIHNlbnQgKiAxMDAuMCAvIHVwbG9hZEZpbGUuc2l6ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIOWIhuWJsuOCouODg+ODl+ODreODvOODieWujOS6huOBl+OBn+OBruOBp+OAgeacgOW+jOOBq+ODleOCoeOCpOODq+OCkue1kOWQiOOBmeOCi1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbmlzaERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVfbmFtZTogdXBsb2FkRmlsZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBmaWxlX3NpemU6IHVwbG9hZEZpbGUuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgaXNfZmluaXNoOiB0cnVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKHRvVXNlcklkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmlzaERhdGEudG9fdXNlcl9pZCA9IHRvVXNlcklkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgbGFzdEFqYXhSZXN1bHQ7XG4gICAgICAgICAgICAgICAgd2FpdCA9IFJFVFJZX0lOVEVSVkFMO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8PSBSRVRSWV9MSU1JVCA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsYXN0QWpheFJlc3VsdCA9IGF3YWl0ICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGNodW5rVXBsb2FkVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiBDU1JGX1RPS0VOLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShmaW5pc2hEYXRhKSxcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goYXN5bmMgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG15Q29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID49IFJFVFJZX0xJTUlUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6KaP5a6a5Zue5pWw5aSx5pWX44GX44Gf44Gu44Gn44CB44Ki44OD44OX44Ot44O844OJ5Yem55CG5YWo5L2T44KS5aSx5pWX44Go44G/44Gq44GZXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGVyci5zdGF0dXMgPT0gNDIyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gNDIy44Gv44OQ44Oq44OH44O844K344On44Oz44Ko44Op44O844Gq44Gu44Gn44CB5L2V5bqm57mw44KK6L+U44GX44Gm44KC44Kz44Kx44KL44Gv44GaXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmjIfmlbDjg5Djg4Pjgq/jgqrjg5VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCh3YWl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWl0ICo9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RBamF4UmVzdWx0Py5tZWRpYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g44OV44Kh44Kk44Or57WQ5ZCIQVBJ44KC5oiQ5Yqf44GX44Gf44Gu44Gn5qyh44G4XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBteUNvbnNvbGUubG9nKGxhc3RBamF4UmVzdWx0KTtcbiAgICAgICAgICAgICAgICBpZiAobGFzdEFqYXhSZXN1bHQ/Lm1lZGlhKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWFqOmDqOe1guOCj+OBo+OBn+OBruOBp+aIkOWKn+aZguOCs+ODvOODq+ODkOODg+OCr+OCkuWPqeOBj1xuICAgICAgICAgICAgICAgICAgICBfb25TdWNjZXNzKCRzZWxmLCBsYXN0QWpheFJlc3VsdC5tZWRpYSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfntZDlkIhBUEnlpLHmlZcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBteUNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICBfb25GYWlsdXJlKCRzZWxmLCBlcnIpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHByb2dyZXNzVGltZXIpO1xuICAgICAgICAgICAgICAgIF9vbkNvbXBsZXRlKCRzZWxmKTtcbiAgICAgICAgICAgICAgICAkc2VsZi52YWwoJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgIH0pO1xufTtcblxuIiwid2luZG93LnNldEluZGV4TmFtZVRvTGlzdEl0ZW1zID0gKCkgPT4ge1xuICAgIGxldCBpZHggPSAxO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWluZGV4XScpLmZvckVhY2goZG9tID0+IHtcbiAgICAgICAgZG9tLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGlkeCsrKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pbmRleF0gW2RhdGEtbGlzdF9uYW1lXVtkYXRhLWtleV9uYW1lXScpLmZvckVhY2goZG9tID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdF9uYW1lJykrJ1snK2RvbS5jbG9zZXN0KCdbZGF0YS1pbmRleF0nKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSsnXVsnK2RvbS5nZXRBdHRyaWJ1dGUoJ2RhdGEta2V5X25hbWUnKSsnXSc7XG4gICAgICAgIGRvbS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBuYW1lKTtcbiAgICB9KTtcbn07XG5cbiQoJ2Zvcm0gLnN1Ym1pdF9idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCAkc2VsZiA9ICQodGhpcyk7XG4gICAgY29uc3QgJGZvcm0gPSAkc2VsZi5jbG9zZXN0KCdmb3JtJyk7XG4gICAgY29uc3Qgb3JpZ2luYWxUYXJnZXQgPSAkZm9ybS5hdHRyKCd0YXJnZXQnKTtcblxuICAgIGlmICgkc2VsZi5hdHRyKCdkYXRhLXRhcmdldCcpKSB7XG4gICAgICAgICRmb3JtLmF0dHIoJ3RhcmdldCcsICRzZWxmLmF0dHIoJ2RhdGEtdGFyZ2V0JykpO1xuICAgIH1cbiAgICBpZiAoJHNlbGYuYXR0cignZGF0YS1hY3Rpb24nKSkge1xuICAgICAgICAkZm9ybS5hdHRyKCdhY3Rpb24nLCAkc2VsZi5hdHRyKCdkYXRhLWFjdGlvbicpKTtcbiAgICB9XG4gICAgJGZvcm0uc3VibWl0KCk7XG5cbiAgICBpZiAob3JpZ2luYWxUYXJnZXQpIHtcbiAgICAgICAgJGZvcm0uYXR0cigndGFyZ2V0Jywgb3JpZ2luYWxUYXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRmb3JtLnJlbW92ZUF0dHIoJ3RhcmdldCcpO1xuICAgIH1cbn0pO1xuXG4kKCcuanMtbGFuZ3VhZ2Vfc2V0dGluZycpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS5zdWJtaXQoKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAvLyB0ZXh0YXJlYeOCv+OCsOOCkuWFqOOBpuWPluW+l1xuICBjb25zdCB0ZXh0YXJlYUVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZXh0YXJlYVwiKTtcblxuICB0ZXh0YXJlYUVscy5mb3JFYWNoKCh0ZXh0YXJlYUVsKSA9PiB7XG4gICAgLy8g44OH44OV44Kp44Or44OI5YCk44Go44GX44Gm44K544K/44Kk44Or5bGe5oCn44KS5LuY5LiOXG4gICAgdGV4dGFyZWFFbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgaGVpZ2h0OiAke3RleHRhcmVhRWwuc2Nyb2xsSGVpZ2h0fXB4O2ApO1xuICAgIC8vIGlucHV044Kk44OZ44Oz44OI44GM55m655Sf44GZ44KL44Gf44Gz44Gr6Zai5pWw5ZG844Gz5Ye644GXXG4gICAgdGV4dGFyZWFFbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgc2V0VGV4dGFyZWFIZWlnaHQpO1xuICB9KTtcblxuICAvLyB0ZXh0YXJlYeOBrumrmOOBleOCkuioiOeul+OBl+OBpuaMh+WumuOBmeOCi+mWouaVsFxuICBmdW5jdGlvbiBzZXRUZXh0YXJlYUhlaWdodCgpIHtcbiAgICB0aGlzLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xuICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5zY3JvbGxIZWlnaHR9cHhgO1xuICB9XG59KTtcblxud2luZG93LmFqYXhTdWJtaXQgPSBhc3luYyAkZm9ybSA9PiB7XG4gICAgcmV0dXJuIGF3YWl0ICQuYWpheCh7XG4gICAgICAgIHVybDogJGZvcm0uYXR0cignYWN0aW9uJyksXG4gICAgICAgIHR5cGU6ICRmb3JtLmF0dHIoJ21ldGhvZCcpLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogJCgnW25hbWU9Y3NyZi10b2tlbl0nKS5hdHRyKCdjb250ZW50JyksXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6ICRmb3JtLnNlcmlhbGl6ZSgpLFxuICAgIH0pO1xufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwid2luZG93IiwiXyIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiJCIsImhhc0NsYXNzIiwidXBkYXRlTGlzdHMiLCJzZXRJbmRleE5hbWVUb0xpc3RJdGVtcyIsImNyb3dkQ3JpbWluYWxMaXN0SHRtbCIsImNyaW1pbmFsTGlzdEh0bWwiLCJlYWNoIiwiJG9wdGlvbiIsInZhbCIsInRleHQiLCIkc2VsZWN0IiwiJHNlbGVjdEluY2lkZW50IiwiY2xvc2VzdCIsImZpbmQiLCJpbmNpZGVudElkIiwiTnVtYmVyIiwiY2hhcmFJZCIsIkNST1dEX0lOQ0lERU5UX0lEUyIsImluY2x1ZGVzIiwiaHRtbCIsImNsb25lIiwiY2xpY2siLCJvbiIsImQiLCIkZG9tIiwiYXR0ciIsInNob3ciLCJoaWRlIiwiJHNlbGYiLCJjaGFyYU5hbWUiLCJtc2ciLCJDSEFSQV9ERUxFVEVfQ09ORklSTV9NRVNTQUdFIiwicmVwbGFjZSIsImxlbmd0aCIsIm15Q29uZmlybSIsInJlc3VsdCIsInJlbW92ZSIsInJlbW92ZUNsYXNzIiwiYXBwZW5kIiwidG9nZ2xlQ2xhc3MiLCJkaWFsb2dNZXNzYWdlIiwiYWRkQ2xhc3MiLCJndGFnIiwiJHAiLCJhamF4U3VibWl0IiwicmVzIiwibGlrZXMiLCJteUFsZXJ0IiwibWVzc2FnZSIsIm9wZW5Qb3B1cCIsImNsYXNzTmFtZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2VsZWN0b3IiLCIkcG9wdXAiLCJvZmYiLCJ0aXRsZSIsInNldEZpbGVVcGxvYWRFdmVudCIsIm9wdGlvbiIsIl9mb3JtQ2xhc3MiLCJmb3JtQ2xhc3MiLCJfc2VsZWN0b3IiLCJfb25TdWNjZXNzIiwib25TdWNjZXNzIiwiJGlucHV0IiwibWVkaWEiLCJteUNvbnNvbGUiLCJsb2ciLCJfb25GYWlsdXJlIiwib25GYWlsdXJlIiwiZXJyb3IiLCJfb25Db21wbGV0ZSIsIm9uQ29tcGxldGUiLCJfb25Qcm9ncmVzcyIsIm9uUHJvZ3Jlc3MiLCJwZXJjZW50IiwiJGZvcm0iLCJ1cGxvYWRGaWxlIiwicHJvcCIsInRvVXNlcklkIiwiQ0hVTktfU0laRSIsIlJFVFJZX0xJTUlUIiwiUkVUUllfSU5URVJWQUwiLCJDSFVOS19VUExPQURfVVJMIiwiQ1NSRl9UT0tFTiIsInNlbnQiLCJtYXliZVNlbnQiLCJjaHVua1VwbG9hZFVybCIsImJwcyIsInByb2dyZXNzVGltZXIiLCJzZXRJbnRlcnZhbCIsInBlciIsInNpemUiLCJjaHVua0VuZCIsImNodW5rRGF0YSIsInNsaWNlIiwiZmQiLCJGb3JtRGF0YSIsIm5hbWUiLCJ3YWl0IiwiaSIsInVwU3RhcnRBdCIsIkRhdGUiLCJhamF4IiwidHlwZSIsInVybCIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCJkYXRhIiwiZXJyIiwic3RhdHVzIiwic2xlZXAiLCJhamF4UmVzdWx0IiwidXBUaW1lIiwiZ2V0VGltZSIsImZpbmlzaERhdGEiLCJmaWxlX25hbWUiLCJmaWxlX3NpemUiLCJpc19maW5pc2giLCJ0b191c2VyX2lkIiwiSlNPTiIsInN0cmluZ2lmeSIsImxhc3RBamF4UmVzdWx0IiwiRXJyb3IiLCJjbGVhckludGVydmFsIiwiaWR4IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImRvbSIsInNldEF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsIm9yaWdpbmFsVGFyZ2V0Iiwic3VibWl0IiwicmVtb3ZlQXR0ciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZXh0YXJlYUVscyIsInRleHRhcmVhRWwiLCJzY3JvbGxIZWlnaHQiLCJzZXRUZXh0YXJlYUhlaWdodCIsInN0eWxlIiwiaGVpZ2h0Iiwic2VyaWFsaXplIl0sInNvdXJjZVJvb3QiOiIifQ==