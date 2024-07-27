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
  var switchCrazyTruthSelect = function switchCrazyTruthSelect() {
    $('.for_crazy_truth').hide();
    $('select.rule_x').each(function () {
      if ($(this).val() == $('#crazy_truth_rule_id').attr('data-rule_id')) {
        $('.for_crazy_truth').show();
      }
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
  switchCrazyTruthSelect();
  $('select.rule_x').on('change', function () {
    switchCrazyTruthSelect();
  });
  $('.js-what_is_quiz').on('click', function () {
    myAlert($('#what_is_quiz').html());
  });
  $('.js-what_is_plus').on('click', function () {
    myAlert($('#what_is_plus_message').html());
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
  var has_show_initial_board = false;
  $('.show_initial_board_wrapper').on('click', function () {
    if (!has_show_initial_board) {
      gtag('event', 'show_initial_board');
      has_show_initial_board = true;
    }
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
  $('a.incident_explain').on('click', function () {
    openPopup('js-popup-incident_explain');
  });
  $('.js-popup-incident_explain ul.incident_list > li').on('click', function () {
    var $self = $(this);
    console.log($self.find('p.note').text());
    myAlert($self.find('p.note').html(), $self.find('a').text());
  });
  $('.js-font_size_button').on('click', function () {
    $('.font_size_adjust').toggle();
  });
  $('.js-font_size_adjust').on('input', function () {
    var $self = $(this);
    localStorage.scenarioFontSize = $self.val();
    $('.public_sheet').css({
      'font-size': $self.val() + 'px'
    });
    $('.private_sheet').css({
      'font-size': $self.val() + 'px'
    });
  });
  if (Number(localStorage.scenarioFontSize) > 0) {
    var fontSize = Number(localStorage.scenarioFontSize);
    $('.js-font_size_adjust').val(fontSize);
    $('.public_sheet').css({
      'font-size': fontSize + 'px'
    });
    $('.private_sheet').css({
      'font-size': fontSize + 'px'
    });
  }
}
if ($('#quiz-strings_wrapper').length > 0) {
  // 「脚本家への指針」当てクイズ
  window.confirmToShowHint = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(s) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!$('dd.advice > .content').is(':visible')) {
                _context4.next = 4;
                break;
              }
              return _context4.abrupt("return", {
                result: 'ok'
              });
            case 4:
              _context4.next = 6;
              return myConfirm(s);
            case 6:
              return _context4.abrupt("return", _context4.sent);
            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return function (_x) {
      return _ref4.apply(this, arguments);
    };
  }();
  var sHintLabel = $('#quiz-hint_label').text();
  var sConfirm = $('#quiz-confirm_to_show_hint').text();
  [['.scenario_title', '#quiz-label_title'], ['.private_sheet .difficulty', '#quiz-label_diff'], ['dd.feature', '#quiz-label_feature'], ['dd.story', '#quiz-label_story']].forEach(function (it) {
    var $dom = $(it[0]);
    if ($dom.length <= 0) return;
    var sLabel = $(it[1]).text();
    $dom.children().hide();
    var $tmp = $('<a href="javascript:void(0);">');
    $dom.append($tmp);
    $tmp.text(sHintLabel.replace('___LABEL___', sLabel));
    $tmp.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var $self, theConfirm, _yield$confirmToShowH, result;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              $self = $(this);
              theConfirm = sConfirm.replace('___LABEL___', sLabel);
              _context5.next = 4;
              return confirmToShowHint(theConfirm);
            case 4:
              _yield$confirmToShowH = _context5.sent;
              result = _yield$confirmToShowH.result;
              if (result == 'ok') {
                $self.parent().children().removeAttr('style');
                $self.remove();
              }
            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    })));
  });
  var $dom = $('dd.advice');
  $dom.children().hide();
  var $tmp = $('<a href="javascript:void(0);">');
  $dom.append($tmp);
  $tmp.text($('#quiz-answer_label').text());
  $tmp.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var $self, _yield$confirmToShowH2, result;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            $self = $(this);
            _context6.next = 3;
            return confirmToShowHint($('#quiz-confirm_to_show_answer').text());
          case 3:
            _yield$confirmToShowH2 = _context6.sent;
            result = _yield$confirmToShowH2.result;
            if (result == 'ok') {
              $self.parent().children().removeAttr('style');
              $self.remove();
            }
          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  })));
}

/***/ }),

/***/ "./resources/js/popup.js":
/*!*******************************!*\
  !*** ./resources/js/popup.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
window.openPopup = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(className, preventHash) {
    var selector, $popup, promise;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            selector = '.c-popup.' + className;
            $popup = $(selector);
            $('.c-popup[data-opened]').each(function () {
              var $self = $(this);
              $self.attr('data-opened', Number($self.attr('data-opened')) + 1);
            });
            promise = new Promise(function (resolve, reject) {
              if (preventHash) {
                if (localStorage.preventHash == preventHash) {
                  resolve({
                    'result': 'close'
                  });
                }
                localStorage.preventHash = preventHash;
              }
              $popup.attr('data-opened', 1);
              $popup.find('.filter-area').off('click.open_popup').on('click.open_popup', function () {
                resolve({
                  'result': 'close'
                });
              });
              $popup.find('.close_button').off('click.open_popup').on('click.open_popup', function () {
                resolve({
                  'result': 'close'
                });
              });
              $popup.find('[data-result]').off('click.open_popup').on('click.open_popup', function () {
                var $self = $(this);
                resolve({
                  'result': $self.attr('data-result'),
                  'info': $self.attr('data-info')
                });
              });
            });
            _context.prev = 4;
            _context.next = 7;
            return promise;
          case 7:
            return _context.abrupt("return", _context.sent);
          case 8:
            _context.prev = 8;
            $('.c-popup[data-opened]').each(function () {
              var $self = $(this);
              var opened = Number($self.attr('data-opened'));
              if (opened <= 1) {
                $self.removeAttr('data-opened');
              } else {
                $self.attr('data-opened', opened - 1);
              }
            });
            return _context.finish(8);
          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4,, 8, 11]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
window.myAlert = function (msg) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var preventHash = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  $('.c-popup.js-popup-my_confirm .button_wrapper [data-result=cancel]').hide();
  $('.c-popup.js-popup-my_confirm .message').html(msg.replace("\\n", '<br>'));
  $('.c-popup.js-popup-my_confirm .title').text(title);
  return openPopup('js-popup-my_confirm', preventHash);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMxQnpCLE9BQU8sRUFBRTtnQkFDTCxjQUFjLEVBQUVFLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDdUIsSUFBSSxDQUFDLFNBQVM7Y0FDekQsQ0FBQztjQUNEOEcsSUFBSSxFQUFFaEMsS0FBSyxDQUFDZ0UsU0FBUztZQUN6QixDQUFDLENBQUM7VUFBQTtZQUFBO1VBQUE7VUFBQTtZQUFBO1FBQUE7TUFBQTtJQUFBO0VBQUEsQ0FDTDtFQUFBO0lBQUE7RUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUM5REQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2luZGl2aXN1YWwvbXlfc2NlbmFyaW8tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9pbmRpdmlzdWFsL3NjZW5hcmlvLXNob3cuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BvcHVwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy91cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3Nhc3MvYXBwLnNjc3M/YTgwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCcuL2Jvb3RzdHJhcCcpO1xucmVxdWlyZSgnLi91cGxvYWQnKTtcbnJlcXVpcmUoJy4vcG9wdXAnKTtcbnJlcXVpcmUoJy4vdXRpbGl0eScpO1xuXG5yZXF1aXJlKCcuL2luZGl2aXN1YWwvbXlfc2NlbmFyaW8tY3JlYXRlJyk7XG5yZXF1aXJlKCcuL2luZGl2aXN1YWwvc2NlbmFyaW8tc2hvdycpO1xuXG4iLCJ3aW5kb3cuXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuXG4vKipcbiAqIFdlJ2xsIGxvYWQgdGhlIGF4aW9zIEhUVFAgbGlicmFyeSB3aGljaCBhbGxvd3MgdXMgdG8gZWFzaWx5IGlzc3VlIHJlcXVlc3RzXG4gKiB0byBvdXIgTGFyYXZlbCBiYWNrLWVuZC4gVGhpcyBsaWJyYXJ5IGF1dG9tYXRpY2FsbHkgaGFuZGxlcyBzZW5kaW5nIHRoZVxuICogQ1NSRiB0b2tlbiBhcyBhIGhlYWRlciBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgdGhlIFwiWFNSRlwiIHRva2VuIGNvb2tpZS5cbiAqL1xuXG53aW5kb3cuYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbi8qKlxuICogRWNobyBleHBvc2VzIGFuIGV4cHJlc3NpdmUgQVBJIGZvciBzdWJzY3JpYmluZyB0byBjaGFubmVscyBhbmQgbGlzdGVuaW5nXG4gKiBmb3IgZXZlbnRzIHRoYXQgYXJlIGJyb2FkY2FzdCBieSBMYXJhdmVsLiBFY2hvIGFuZCBldmVudCBicm9hZGNhc3RpbmdcbiAqIGFsbG93cyB5b3VyIHRlYW0gdG8gZWFzaWx5IGJ1aWxkIHJvYnVzdCByZWFsLXRpbWUgd2ViIGFwcGxpY2F0aW9ucy5cbiAqL1xuXG4vLyBpbXBvcnQgRWNobyBmcm9tICdsYXJhdmVsLWVjaG8nO1xuXG4vLyB3aW5kb3cuUHVzaGVyID0gcmVxdWlyZSgncHVzaGVyLWpzJyk7XG5cbi8vIHdpbmRvdy5FY2hvID0gbmV3IEVjaG8oe1xuLy8gICAgIGJyb2FkY2FzdGVyOiAncHVzaGVyJyxcbi8vICAgICBrZXk6IHByb2Nlc3MuZW52Lk1JWF9QVVNIRVJfQVBQX0tFWSxcbi8vICAgICBjbHVzdGVyOiBwcm9jZXNzLmVudi5NSVhfUFVTSEVSX0FQUF9DTFVTVEVSLFxuLy8gICAgIGZvcmNlVExTOiB0cnVlXG4vLyB9KTtcbiIsImlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ215X3NjZW5hcmlvLWNyZWF0ZScpKSB7XG4gICAgZnVuY3Rpb24gdXBkYXRlTGlzdHMoKSB7XG4gICAgICAgIHNldEluZGV4TmFtZVRvTGlzdEl0ZW1zKCk7XG5cbiAgICAgICAgY29uc3QgY3Jvd2RDcmltaW5hbExpc3RIdG1sID0gJCgnLmNsb25lX2Jhc2UgLmpzLWNyb3dkX2NyaW1pbmFsX2xpc3RfaHRtbCcpO1xuICAgICAgICBsZXQgY3JpbWluYWxMaXN0SHRtbCA9ICc8b3B0aW9uPjwvb3B0aW9uPic7XG4gICAgICAgICQoJ3NlbGVjdFtkYXRhLWtleV9uYW1lPWNoYXJhY3Rlcl9pZF0gb3B0aW9uOnNlbGVjdGVkJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0ICRvcHRpb24gPSAkKHRoaXMpO1xuICAgICAgICAgICAgY3JpbWluYWxMaXN0SHRtbCArPSAnPG9wdGlvbiB2YWx1ZT1cIicrJG9wdGlvbi52YWwoKSsnXCI+Jyskb3B0aW9uLnRleHQoKSsnPC9vcHRpb24+JztcbiAgICAgICAgfSk7XG4gICAgICAgICQoJ3NlbGVjdC5jcmltaW5hbCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCAkc2VsZWN0ID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGNvbnN0ICRzZWxlY3RJbmNpZGVudCA9ICRzZWxlY3QuY2xvc2VzdCgnLmluY2lkZW50X3dyYXBwZXInKS5maW5kKCdzZWxlY3QuaW5jaWRlbnQnKTtcbiAgICAgICAgICAgIGNvbnN0IGluY2lkZW50SWQgPSBOdW1iZXIoJHNlbGVjdEluY2lkZW50LnZhbCgpKTtcblxuICAgICAgICAgICAgY29uc3QgY2hhcmFJZCA9ICRzZWxlY3QudmFsKCk7XG4gICAgICAgICAgICBpZiAoQ1JPV0RfSU5DSURFTlRfSURTLmluY2x1ZGVzKGluY2lkZW50SWQpKSB7XG4gICAgICAgICAgICAgICAgJHNlbGVjdC5odG1sKGNyb3dkQ3JpbWluYWxMaXN0SHRtbC5jbG9uZSgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHNlbGVjdC5odG1sKGNyaW1pbmFsTGlzdEh0bWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJHNlbGVjdC52YWwoY2hhcmFJZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICQoKCkgPT4ge1xuICAgICAgICAkKCdbbmFtZT1kYXlzXScpLmNsaWNrKCk7XG4gICAgICAgIHVwZGF0ZUxpc3RzKCk7XG4gICAgfSk7XG5cbiAgICAkKCdbbmFtZT1kYXlzXScpLm9uKCdjaGFuZ2UgY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZCA9ICQodGhpcykudmFsKCk7XG4gICAgICAgICQoJy5zY2VuYXJpb19pbmNpZGVudF9saXN0ID4gbGlbZGF0YS1kYXldJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0ICRkb20gPSAkKHRoaXMpO1xuICAgICAgICAgICAgaWYgKCRkb20uYXR0cignZGF0YS1kYXknKSA8PSBkKSB7XG4gICAgICAgICAgICAgICAgJGRvbS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRkb20uaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgICQoJy5zY2VuYXJpb19jaGFyYWN0ZXJfbGlzdCcpLm9uKCdjbGljaycsICcuY2hhcmFjdGVyX3JvdyAuanMtY2hhcmFfZGVsZXRlX2J1dHRvbicsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCAkc2VsZiA9ICQodGhpcyk7XG4gICAgICAgIGNvbnN0IGNoYXJhTmFtZSA9ICRzZWxmLmNsb3Nlc3QoJy5jaGFyYWN0ZXJfcm93JykuZmluZCgnc2VsZWN0W2RhdGEta2V5X25hbWU9Y2hhcmFjdGVyX2lkXSBvcHRpb246c2VsZWN0ZWQnKS50ZXh0KCk7XG4gICAgICAgIGNvbnN0IG1zZyA9IENIQVJBX0RFTEVURV9DT05GSVJNX01FU1NBR0UucmVwbGFjZSgnX19fQ0hBUkFfX18nLCBjaGFyYU5hbWUpO1xuICAgICAgICBpZiAoJCgnLmNoYXJhY3Rlcl9yb3cnKS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjb25zdCB7cmVzdWx0fSA9IGF3YWl0IG15Q29uZmlybShtc2cpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PSAnb2snKSB7XG4gICAgICAgICAgICAgICAgJHNlbGYuY2xvc2VzdCgnLmNoYXJhY3Rlcl9yb3cnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVMaXN0cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgJCgnLnNjZW5hcmlvX2NoYXJhY3Rlcl9saXN0Jykub24oJ2NsaWNrIGNoYW5nZScsICdzZWxlY3RbZGF0YS1rZXlfbmFtZT1jaGFyYWN0ZXJfaWRdJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHVwZGF0ZUxpc3RzKCk7XG4gICAgfSk7XG4gICAgJCgnLnNjZW5hcmlvX2luY2lkZW50X2xpc3Qgc2VsZWN0LmluY2lkZW50Jykub24oJ2NsaWNrIGNoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICB1cGRhdGVMaXN0cygpO1xuICAgIH0pO1xuICAgICQoJy5zY2VuYXJpb19jaGFyYWN0ZXJfbGlzdCcpLm9uKCdjaGFuZ2UnLCAnLmNoYXJhY3Rlcl9yb3cgc2VsZWN0W2RhdGEta2V5X25hbWU9Y2hhcmFjdGVyX2lkXScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5jaGFyYWN0ZXJfcm93JykucmVtb3ZlQ2xhc3MoJ2lzLWVycm9yJyk7XG4gICAgfSk7XG4gICAgJCgnLmpzLWNoYXJhX2FkZF9idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgJGRvbSA9ICQoJy5jaGFyYWN0ZXJfcm93Omxhc3QnKS5jbG9uZSgpO1xuICAgICAgICAkZG9tLnJlbW92ZUNsYXNzKCdpcy1lcnJvcicpO1xuICAgICAgICAkKCcuc2NlbmFyaW9fY2hhcmFjdGVyX2xpc3QnKS5hcHBlbmQoJGRvbSk7XG4gICAgICAgIHVwZGF0ZUxpc3RzKCk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBzd2l0Y2hDcmF6eVRydXRoU2VsZWN0KCkge1xuICAgICAgICAkKCcuZm9yX2NyYXp5X3RydXRoJykuaGlkZSgpO1xuICAgICAgICAkKCdzZWxlY3QucnVsZV94JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpID09ICQoJyNjcmF6eV90cnV0aF9ydWxlX2lkJykuYXR0cignZGF0YS1ydWxlX2lkJykpIHtcbiAgICAgICAgICAgICAgICAkKCcuZm9yX2NyYXp5X3RydXRoJykuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3dpdGNoQ3JhenlUcnV0aFNlbGVjdCgpO1xuICAgICQoJ3NlbGVjdC5ydWxlX3gnKS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBzd2l0Y2hDcmF6eVRydXRoU2VsZWN0KCk7XG4gICAgfSk7XG5cbiAgICAkKCcuanMtd2hhdF9pc19xdWl6Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIG15QWxlcnQoJCgnI3doYXRfaXNfcXVpeicpLmh0bWwoKSk7XG4gICAgfSk7XG5cbiAgICAkKCcuanMtd2hhdF9pc19wbHVzJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIG15QWxlcnQoJCgnI3doYXRfaXNfcGx1c19tZXNzYWdlJykuaHRtbCgpKTtcbiAgICB9KTtcbn1cbiIsImlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ3NjZW5hcmlvLXNob3cnKSkge1xuICAgICQoJy5zdW1tYXJ5X3FyIGltZycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdzY2FsZWQnKTtcbiAgICB9KTtcblxuICAgICQoJy5qcy1zaG93X3ByaXZhdGVfc2hlZXQnKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZGlhbG9nTWVzc2FnZSA9ICQodGhpcykuYXR0cignZGF0YS1kaWFsb2dfbWVzc2FnZScpO1xuICAgICAgICBjb25zdCB7cmVzdWx0fSA9IGF3YWl0IG15Q29uZmlybShkaWFsb2dNZXNzYWdlKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PSAnb2snKSB7XG4gICAgICAgICAgICAkKCcucHJpdmF0ZV9zaGVldF93cmFwcGVyJykuYWRkQ2xhc3MoJ3Nob3dpbmcnKTtcbiAgICAgICAgICAgICQoJy5qcy1oaWRlX3ByaXZhdGVfc2hlZXQnKS5zaG93KCk7XG4gICAgICAgICAgICAkKCcuanMtc2hvd19wcml2YXRlX3NoZWV0JykuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgJCgnLmpzLWhpZGVfcHJpdmF0ZV9zaGVldCcpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgJCgnLnByaXZhdGVfc2hlZXRfd3JhcHBlcicpLnJlbW92ZUNsYXNzKCdzaG93aW5nJyk7XG4gICAgICAgICQoJy5qcy1oaWRlX3ByaXZhdGVfc2hlZXQnKS5oaWRlKCk7XG4gICAgICAgICQoJy5qcy1zaG93X3ByaXZhdGVfc2hlZXQnKS5zaG93KCk7XG4gICAgfSk7XG5cbiAgICB2YXIgaGFzX3Nob3dfaW5pdGlhbF9ib2FyZCA9IGZhbHNlO1xuICAgICQoJy5zaG93X2luaXRpYWxfYm9hcmRfd3JhcHBlcicpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKCFoYXNfc2hvd19pbml0aWFsX2JvYXJkKSB7XG4gICAgICAgICAgICBndGFnKCdldmVudCcsICdzaG93X2luaXRpYWxfYm9hcmQnKTtcbiAgICAgICAgICAgIGhhc19zaG93X2luaXRpYWxfYm9hcmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgICQoJy5pbml0aWFsX2JvYXJkX3dyYXBwZXInKS5zaG93KCk7XG4gICAgICAgICQoJy5zaG93X2luaXRpYWxfYm9hcmRfd3JhcHBlcicpLmhpZGUoKTtcbiAgICB9KTtcbiAgICAkKCcuaGlkZV9pbml0aWFsX2JvYXJkX3dyYXBwZXInKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICQoJy5pbml0aWFsX2JvYXJkX3dyYXBwZXInKS5oaWRlKCk7XG4gICAgICAgICQoJy5zaG93X2luaXRpYWxfYm9hcmRfd3JhcHBlcicpLnNob3coKTtcbiAgICB9KTtcblxuICAgICQoJy5qcy1saWtlX2J1dHRvbicpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCAkcCA9ICQodGhpcykuY2xvc2VzdCgncCcpO1xuICAgICAgICAkcC50b2dnbGVDbGFzcygnbGlrZWQnKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFqYXhTdWJtaXQoJHAuY2xvc2VzdCgnZm9ybScpKTtcbiAgICAgICAgICAgICRwLmZpbmQoJy5qcy1jb3VudCcpLnRleHQocmVzLmxpa2VzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgJHAudG9nZ2xlQ2xhc3MoJ2xpa2VkJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5qcy1ib29rbWFya19idXR0b24nKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgJHAgPSAkKHRoaXMpLmNsb3Nlc3QoJ3AnKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFqYXhTdWJtaXQoJHAuY2xvc2VzdCgnZm9ybScpKTtcbiAgICAgICAgICAgICRwLnRvZ2dsZUNsYXNzKCdib29rbWFya2VkJyk7XG4gICAgICAgICAgICBteUFsZXJ0KHJlcy5tZXNzYWdlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuanMtcGxlYXNlX2xvZ2luJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIG15QWxlcnQoJCh0aGlzKS5hdHRyKCdkYXRhLW1zZycpKTtcbiAgICB9KTtcblxuICAgICQoJ2EuaW5jaWRlbnRfZXhwbGFpbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBvcGVuUG9wdXAoJ2pzLXBvcHVwLWluY2lkZW50X2V4cGxhaW4nKTtcbiAgICB9KTtcbiAgICAkKCcuanMtcG9wdXAtaW5jaWRlbnRfZXhwbGFpbiB1bC5pbmNpZGVudF9saXN0ID4gbGknKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgJHNlbGYgPSAkKHRoaXMpO1xuICAgICAgICBjb25zb2xlLmxvZygkc2VsZi5maW5kKCdwLm5vdGUnKS50ZXh0KCkpO1xuICAgICAgICBteUFsZXJ0KCRzZWxmLmZpbmQoJ3Aubm90ZScpLmh0bWwoKSwgJHNlbGYuZmluZCgnYScpLnRleHQoKSk7XG4gICAgfSk7XG5cbiAgICAkKCcuanMtZm9udF9zaXplX2J1dHRvbicpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgJCgnLmZvbnRfc2l6ZV9hZGp1c3QnKS50b2dnbGUoKTtcbiAgICB9KTtcbiAgICAkKCcuanMtZm9udF9zaXplX2FkanVzdCcpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCAkc2VsZiA9ICQodGhpcyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zY2VuYXJpb0ZvbnRTaXplID0gJHNlbGYudmFsKCk7XG4gICAgICAgICQoJy5wdWJsaWNfc2hlZXQnKS5jc3Moeydmb250LXNpemUnOiAkc2VsZi52YWwoKSsncHgnfSk7XG4gICAgICAgICQoJy5wcml2YXRlX3NoZWV0JykuY3NzKHsnZm9udC1zaXplJzogJHNlbGYudmFsKCkrJ3B4J30pO1xuICAgIH0pO1xuICAgIGlmIChOdW1iZXIobG9jYWxTdG9yYWdlLnNjZW5hcmlvRm9udFNpemUpID4gMCkge1xuICAgICAgICBjb25zdCBmb250U2l6ZSA9IE51bWJlcihsb2NhbFN0b3JhZ2Uuc2NlbmFyaW9Gb250U2l6ZSk7XG4gICAgICAgICQoJy5qcy1mb250X3NpemVfYWRqdXN0JykudmFsKGZvbnRTaXplKTtcbiAgICAgICAgJCgnLnB1YmxpY19zaGVldCcpLmNzcyh7J2ZvbnQtc2l6ZSc6IGZvbnRTaXplKydweCd9KTtcbiAgICAgICAgJCgnLnByaXZhdGVfc2hlZXQnKS5jc3Moeydmb250LXNpemUnOiBmb250U2l6ZSsncHgnfSk7XG4gICAgfVxufVxuXG5pZigkKCcjcXVpei1zdHJpbmdzX3dyYXBwZXInKS5sZW5ndGggPiAwKSB7XG4gICAgLy8g44CM6ISa5pys5a6244G444Gu5oyH6Yed44CN5b2T44Gm44Kv44Kk44K6XG4gICAgd2luZG93LmNvbmZpcm1Ub1Nob3dIaW50ID0gYXN5bmMgcyA9PiB7XG4gICAgICAgIGlmICgkKCdkZC5hZHZpY2UgPiAuY29udGVudCcpLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICAgICByZXR1cm4ge3Jlc3VsdDonb2snfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBteUNvbmZpcm0ocyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc0hpbnRMYWJlbCA9ICQoJyNxdWl6LWhpbnRfbGFiZWwnKS50ZXh0KCk7XG4gICAgY29uc3Qgc0NvbmZpcm0gPSAkKCcjcXVpei1jb25maXJtX3RvX3Nob3dfaGludCcpLnRleHQoKTtcblxuICAgIFtcbiAgICAgICAgWycuc2NlbmFyaW9fdGl0bGUnLCAnI3F1aXotbGFiZWxfdGl0bGUnXSxcbiAgICAgICAgWycucHJpdmF0ZV9zaGVldCAuZGlmZmljdWx0eScsICcjcXVpei1sYWJlbF9kaWZmJ10sXG4gICAgICAgIFsnZGQuZmVhdHVyZScsICcjcXVpei1sYWJlbF9mZWF0dXJlJ10sXG4gICAgICAgIFsnZGQuc3RvcnknLCAnI3F1aXotbGFiZWxfc3RvcnknXSxcbiAgICBdLmZvckVhY2goaXQgPT4ge1xuICAgICAgICBsZXQgJGRvbSA9ICQoaXRbMF0pO1xuICAgICAgICBpZiAoJGRvbS5sZW5ndGggPD0gMCkgcmV0dXJuO1xuICAgICAgICBsZXQgc0xhYmVsID0gJChpdFsxXSkudGV4dCgpO1xuICAgICAgICAkZG9tLmNoaWxkcmVuKCkuaGlkZSgpO1xuICAgICAgICBsZXQgJHRtcCA9ICQoJzxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+Jyk7XG4gICAgICAgICRkb20uYXBwZW5kKCR0bXApO1xuICAgICAgICAkdG1wLnRleHQoc0hpbnRMYWJlbC5yZXBsYWNlKCdfX19MQUJFTF9fXycsIHNMYWJlbCkpO1xuICAgICAgICAkdG1wLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgJHNlbGYgPSAkKHRoaXMpO1xuICAgICAgICAgICAgY29uc3QgdGhlQ29uZmlybSA9IHNDb25maXJtLnJlcGxhY2UoJ19fX0xBQkVMX19fJywgc0xhYmVsKTtcbiAgICAgICAgICAgIGNvbnN0IHtyZXN1bHR9ID0gYXdhaXQgY29uZmlybVRvU2hvd0hpbnQodGhlQ29uZmlybSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09ICdvaycpIHtcbiAgICAgICAgICAgICAgICAkc2VsZi5wYXJlbnQoKS5jaGlsZHJlbigpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgJHNlbGYucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgbGV0ICRkb20gPSAkKCdkZC5hZHZpY2UnKTtcbiAgICAkZG9tLmNoaWxkcmVuKCkuaGlkZSgpO1xuICAgIGxldCAkdG1wID0gJCgnPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj4nKTtcbiAgICAkZG9tLmFwcGVuZCgkdG1wKTtcbiAgICAkdG1wLnRleHQoJCgnI3F1aXotYW5zd2VyX2xhYmVsJykudGV4dCgpKTtcbiAgICAkdG1wLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCAkc2VsZiA9ICQodGhpcyk7XG4gICAgICAgIGNvbnN0IHtyZXN1bHR9ID0gYXdhaXQgY29uZmlybVRvU2hvd0hpbnQoJCgnI3F1aXotY29uZmlybV90b19zaG93X2Fuc3dlcicpLnRleHQoKSk7XG4gICAgICAgIGlmIChyZXN1bHQgPT0gJ29rJykge1xuICAgICAgICAgICAgJHNlbGYucGFyZW50KCkuY2hpbGRyZW4oKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgJHNlbGYucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIndpbmRvdy5vcGVuUG9wdXAgPSBhc3luYyAoY2xhc3NOYW1lLCBwcmV2ZW50SGFzaCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gJy5jLXBvcHVwLicrY2xhc3NOYW1lO1xuICAgIGNvbnN0ICRwb3B1cCA9ICQoc2VsZWN0b3IpO1xuXG4gICAgJCgnLmMtcG9wdXBbZGF0YS1vcGVuZWRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgJHNlbGYgPSAkKHRoaXMpO1xuICAgICAgICAkc2VsZi5hdHRyKCdkYXRhLW9wZW5lZCcsIE51bWJlcigkc2VsZi5hdHRyKCdkYXRhLW9wZW5lZCcpKSsxKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGlmIChwcmV2ZW50SGFzaCkge1xuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5wcmV2ZW50SGFzaCA9PSBwcmV2ZW50SGFzaCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICAncmVzdWx0JzogJ2Nsb3NlJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5wcmV2ZW50SGFzaCA9IHByZXZlbnRIYXNoO1xuICAgICAgICB9XG5cbiAgICAgICAgJHBvcHVwLmF0dHIoJ2RhdGEtb3BlbmVkJywgMSlcblxuICAgICAgICAkcG9wdXAuZmluZCgnLmZpbHRlci1hcmVhJykub2ZmKCdjbGljay5vcGVuX3BvcHVwJykub24oJ2NsaWNrLm9wZW5fcG9wdXAnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICdyZXN1bHQnOiAnY2xvc2UnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICAkcG9wdXAuZmluZCgnLmNsb3NlX2J1dHRvbicpLm9mZignY2xpY2sub3Blbl9wb3B1cCcpLm9uKCdjbGljay5vcGVuX3BvcHVwJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAncmVzdWx0JzogJ2Nsb3NlJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgJHBvcHVwLmZpbmQoJ1tkYXRhLXJlc3VsdF0nKS5vZmYoJ2NsaWNrLm9wZW5fcG9wdXAnKS5vbignY2xpY2sub3Blbl9wb3B1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgJHNlbGYgPSAkKHRoaXMpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgJ3Jlc3VsdCc6ICRzZWxmLmF0dHIoJ2RhdGEtcmVzdWx0JyksXG4gICAgICAgICAgICAgICAgJ2luZm8nOiAkc2VsZi5hdHRyKCdkYXRhLWluZm8nKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcm9taXNlO1xuICAgIH0gZmluYWxseSB7XG4gICAgICAgICQoJy5jLXBvcHVwW2RhdGEtb3BlbmVkXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCAkc2VsZiA9ICQodGhpcyk7XG4gICAgICAgICAgICBjb25zdCBvcGVuZWQgPSBOdW1iZXIoJHNlbGYuYXR0cignZGF0YS1vcGVuZWQnKSk7XG4gICAgICAgICAgICBpZiAob3BlbmVkIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAkc2VsZi5yZW1vdmVBdHRyKCdkYXRhLW9wZW5lZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkc2VsZi5hdHRyKCdkYXRhLW9wZW5lZCcsIG9wZW5lZC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxud2luZG93Lm15QWxlcnQgPSAobXNnLCB0aXRsZSA9ICcnLCBwcmV2ZW50SGFzaCA9IG51bGwpID0+IHtcbiAgICAkKCcuYy1wb3B1cC5qcy1wb3B1cC1teV9jb25maXJtIC5idXR0b25fd3JhcHBlciBbZGF0YS1yZXN1bHQ9Y2FuY2VsXScpLmhpZGUoKTtcbiAgICAkKCcuYy1wb3B1cC5qcy1wb3B1cC1teV9jb25maXJtIC5tZXNzYWdlJykuaHRtbChtc2cucmVwbGFjZShcIlxcXFxuXCIsICc8YnI+JykpO1xuICAgICQoJy5jLXBvcHVwLmpzLXBvcHVwLW15X2NvbmZpcm0gLnRpdGxlJykudGV4dCh0aXRsZSk7XG4gICAgcmV0dXJuIG9wZW5Qb3B1cCgnanMtcG9wdXAtbXlfY29uZmlybScsIHByZXZlbnRIYXNoKTtcbn07XG5cbndpbmRvdy5teUNvbmZpcm0gPSAobXNnLCB0aXRsZSA9ICcnKSA9PiB7XG4gICAgJCgnLmMtcG9wdXAuanMtcG9wdXAtbXlfY29uZmlybSAuYnV0dG9uX3dyYXBwZXIgW2RhdGEtcmVzdWx0PWNhbmNlbF0nKS5zaG93KCk7XG4gICAgJCgnLmMtcG9wdXAuanMtcG9wdXAtbXlfY29uZmlybSAubWVzc2FnZScpLmh0bWwobXNnLnJlcGxhY2UoXCJcXFxcblwiLCAnPGJyPicpKTtcbiAgICAkKCcuYy1wb3B1cC5qcy1wb3B1cC1teV9jb25maXJtIC50aXRsZScpLnRleHQodGl0bGUpO1xuICAgIHJldHVybiBvcGVuUG9wdXAoJ2pzLXBvcHVwLW15X2NvbmZpcm0nKTtcbn07XG4iLCIvKipcbiog44OV44Kh44Kk44Or44Ki44OD44OX44Ot44O844OJanNcbipcbiogQHBhcmFtIG9wdGlvbi5mb3JtQ2xhc3Mg44OV44Kh44Kk44Or44Ki44OD44OX44Ot44O844OJ44Kk44OZ44Oz44OI44KS5LuV6L6844KAZm9ybeOCv+OCsOOBruOCr+ODqeOCuVxuKiBAcGFyYW0gb3B0aW9uLm9uU3VjY2VzcygkaW5wdXQsIG1lZGlhKSDjg5XjgqHjgqTjg6vjgqLjg4Pjg5fjg63jg7zjg4nmiJDlip/mmYLjga7lh6bnkIbjgIIkaW5wdXTjga/lr77osaHjga5pbnB1dFt0eXBlPWZpbGVdXG4qIEBwYXJhbSBvcHRpb24ub25GYWlsdXJlKCRpbnB1dCwgcmVzKSDjg5XjgqHjgqTjg6vjgqLjg4Pjg5fjg63jg7zjg4nlpLHmlZfmmYLjga7lh6bnkIbjgIIkaW5wdXTjga/lr77osaHjga5pbnB1dFt0eXBlPWZpbGVdXG4qIEBwYXJhbSBvcHRpb24ub25Db21wbGV0ZSgkaW5wdXQsIHhocikg44OV44Kh44Kk44Or44Ki44OD44OX44Ot44O844OJ5a6M5LqG5pmC44Gu5Yem55CG44CCJGlucHV044Gv5a++6LGh44GuaW5wdXRbdHlwZT1maWxlXVxuKiBAcGFyYW0gb3B0aW9uLm9uUHJvZ3Jlc3MoJGlucHV0LCBwZXJjZW50KSDjg5XjgqHjgqTjg6vjgqLjg4Pjg5fjg63jg7zjg4nkuK3jga7lh6bnkIbjgIIkaW5wdXTjga/lr77osaHjga5pbnB1dFt0eXBlPWZpbGVdXG4qL1xud2luZG93LnNldEZpbGVVcGxvYWRFdmVudCA9IChvcHRpb24pID0+IHtcbiAgICBjb25zdCBfZm9ybUNsYXNzID0gKG9wdGlvbi5mb3JtQ2xhc3MgfHwgJycpLmxlbmd0aCA+IDAgPyAnLicrb3B0aW9uLmZvcm1DbGFzcyA6ICcnO1xuICAgIGNvbnN0IF9zZWxlY3RvciA9ICdmb3JtJytfZm9ybUNsYXNzKycgaW5wdXRbdHlwZT1maWxlXVtuYW1lPWZpbGVdJztcbiAgICBjb25zdCBfb25TdWNjZXNzID0gb3B0aW9uLm9uU3VjY2VzcyB8fCAoKCRpbnB1dCwgbWVkaWEpID0+IHsgbXlDb25zb2xlLmxvZyhtZWRpYSk7IH0pO1xuICAgIGNvbnN0IF9vbkZhaWx1cmUgPSBvcHRpb24ub25GYWlsdXJlIHx8ICgoJGlucHV0LCByZXMpID0+IHsgbXlDb25zb2xlLmVycm9yKHJlcyk7IH0pO1xuICAgIGNvbnN0IF9vbkNvbXBsZXRlID0gb3B0aW9uLm9uQ29tcGxldGUgfHwgKCgkaW5wdXQpID0+IHt9KTtcbiAgICBjb25zdCBfb25Qcm9ncmVzcyA9IG9wdGlvbi5vblByb2dyZXNzIHx8ICgoJGlucHV0LCBwZXJjZW50KSA9PiB7fSk7XG5cbiAgICBteUNvbnNvbGUubG9nKF9zZWxlY3Rvcik7XG5cbiAgICAkKCdib2R5Jykub24oJ2NoYW5nZScsIF9zZWxlY3RvciwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0ICRzZWxmID0gJCh0aGlzKTtcbiAgICAgICAgaWYgKCEkc2VsZi52YWwoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCAkZm9ybSA9ICRzZWxmLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgdXBsb2FkRmlsZSA9ICRzZWxmLnByb3AoJ2ZpbGVzJylbMF07XG4gICAgICAgIGNvbnN0IHRvVXNlcklkID0gJGZvcm0uZmluZCgnW25hbWU9dG9fdXNlcl9pZF0nKS52YWwoKTtcbiAgICAgICAgXG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3NUaW1lcjtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgQ0hVTktfU0laRSA9IDEyOCoxMDI0KjEwMjQ7XG4gICAgICAgICAgICAgICAgY29uc3QgUkVUUllfTElNSVQgPSA1O1xuICAgICAgICAgICAgICAgIGNvbnN0IFJFVFJZX0lOVEVSVkFMID0gMTAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IENIVU5LX1VQTE9BRF9VUkwgPSAkKCdtZXRhW25hbWU9Y2h1bmtfdXBsb2FkX3VybF0nKS5hdHRyKCdjb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgQ1NSRl9UT0tFTiA9ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHNlbnQgPSAwOyAvLyDpgIHkv6HmuIjjgb/jg5DjgqTjg4jmlbBcbiAgICAgICAgICAgICAgICBsZXQgbWF5YmVTZW50ID0gMDsgLy8g5py65LiK44Gu6YCB5L+h5riI44G/44OQ44Kk44OI5pWw44CC6KaL44GL44GR5LiK44Gu44OX44Ot44Kw44Os44K544OQ44O85pu05paw44Gu44Gf44KB44Gr5L2/44GGXG4gICAgICAgICAgICAgICAgbGV0IGNodW5rVXBsb2FkVXJsID0gQ0hVTktfVVBMT0FEX1VSTDtcbiAgICAgICAgICAgICAgICBsZXQgd2FpdDsgLy8g5oyH5pWw44OQ44OD44Kv44Kq44OV55SoXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGJwcyA9IDA7IC8vIOWQhOOCouODg+ODl+ODreODvOODieOBi+OCieioiOeul+OBleOCjOOBn0JQU1tieXRlL3NlY11cbiAgICAgICAgICAgICAgICBwcm9ncmVzc1RpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtYXliZVNlbnQgKz0gYnBzICogMC41O1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF5YmVTZW50ID4gc2VudCArIENIVU5LX1NJWkUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heWJlU2VudCA9IHNlbnQgKyBDSFVOS19TSVpFO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBwZXIgPSBtYXliZVNlbnQgKiAxMDAuMCAvIHVwbG9hZEZpbGUuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBlciA+IDk5LjkpIHBlciA9IDk5Ljk7XG4gICAgICAgICAgICAgICAgICAgIF9vblByb2dyZXNzKCRzZWxmLCBwZXIpO1xuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIF9vblByb2dyZXNzKCRzZWxmLCAwKTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoc2VudCA8IHVwbG9hZEZpbGUuc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmtFbmQgPSBzZW50ICsgQ0hVTktfU0laRTsgLy8g5LuK5Zue6YCB44KL44OB44Oj44Oz44Kv44Gu5pyr5bC+44OQ44Kk44OIXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZW50ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNodW5rRW5kID0gQ0hVTktfU0laRSAvIDQ7IC8vIOacgOWIneOBoOOBkeOBr+i7veOBhOWuuemHj+OBp+mAgeOCiuOAgeODrOOCueODneODs+OCueOCv+OCpOODoOOCkuioiOa4rOOBmeOCi1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaHVua0RhdGEgPSB1cGxvYWRGaWxlLnNsaWNlKHNlbnQsIGNodW5rRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgbXlDb25zb2xlLmxvZyhzZW50LCBjaHVua0VuZCk7XG4gICAgICAgICAgICAgICAgICAgIG15Q29uc29sZS5sb2coY2h1bmtEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZCgnZmlsZV9uYW1lJywgdXBsb2FkRmlsZS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKCdmaWxlX3NpemUnLCB1cGxvYWRGaWxlLnNpemUpO1xuICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoJ2NodW5rX2RhdGEnLCBjaHVua0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgd2FpdCA9IFJFVFJZX0lOVEVSVkFMO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMSA7IGkgPD0gUkVUUllfTElNSVQgOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwU3RhcnRBdCA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFqYXhSZXN1bHQgPSBhd2FpdCAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGNodW5rVXBsb2FkVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6IENTUkZfVE9LRU4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGZkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goYXN5bmMgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteUNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPj0gUkVUUllfTElNSVQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6KaP5a6a5Zue5pWw5aSx5pWX44GX44Gf44Gu44Gn44CB44Ki44OD44OX44Ot44O844OJ5Yem55CG5YWo5L2T44KS5aSx5pWX44Go44G/44Gq44GZXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZXJyLnN0YXR1cyA9PSA0MjIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gNDIy44Gv44OQ44Oq44OH44O844K344On44Oz44Ko44Op44O844Gq44Gu44Gn44CB5L2V5bqm57mw44KK6L+U44GX44Gm44KC44Kz44Kx44KL44Gv44GaXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmjIfmlbDjg5Djg4Pjgq/jgqrjg5VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAod2FpdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhaXQgKj0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhamF4UmVzdWx0Py5yZXN1bHQgPT0gJ09LJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOOBk+OBruODgeODo+ODs+OCr+OBr+mAgeS/oeaIkOWKn+OBl+OBn+OBruOBp+asoeOBq+ihjOOBj1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOmAgeS/oeaZgumWk+OCkuioiOa4rFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwVGltZSA9ICgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gdXBTdGFydEF0LmdldFRpbWUoKSkgLyAxMDAwLjA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnBzID0gKGNodW5rRW5kIC0gc2VudCkgLyB1cFRpbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5qyh44GuVVJM44GM5p2l44Gm44Gf44KJ5pu05paw44GZ44KLXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2h1bmtVcGxvYWRVcmwgPSBhamF4UmVzdWx0LnVybCA/PyBjaHVua1VwbG9hZFVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZW50ID0gY2h1bmtFbmQ7XG4gICAgICAgICAgICAgICAgICAgIG1heWJlU2VudCA9IGNodW5rRW5kO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MoJHNlbGYsIHNlbnQgKiAxMDAuMCAvIHVwbG9hZEZpbGUuc2l6ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIOWIhuWJsuOCouODg+ODl+ODreODvOODieWujOS6huOBl+OBn+OBruOBp+OAgeacgOW+jOOBq+ODleOCoeOCpOODq+OCkue1kOWQiOOBmeOCi1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbmlzaERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVfbmFtZTogdXBsb2FkRmlsZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBmaWxlX3NpemU6IHVwbG9hZEZpbGUuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgaXNfZmluaXNoOiB0cnVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKHRvVXNlcklkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmlzaERhdGEudG9fdXNlcl9pZCA9IHRvVXNlcklkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgbGFzdEFqYXhSZXN1bHQ7XG4gICAgICAgICAgICAgICAgd2FpdCA9IFJFVFJZX0lOVEVSVkFMO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8PSBSRVRSWV9MSU1JVCA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsYXN0QWpheFJlc3VsdCA9IGF3YWl0ICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGNodW5rVXBsb2FkVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiBDU1JGX1RPS0VOLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShmaW5pc2hEYXRhKSxcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goYXN5bmMgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG15Q29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID49IFJFVFJZX0xJTUlUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6KaP5a6a5Zue5pWw5aSx5pWX44GX44Gf44Gu44Gn44CB44Ki44OD44OX44Ot44O844OJ5Yem55CG5YWo5L2T44KS5aSx5pWX44Go44G/44Gq44GZXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGVyci5zdGF0dXMgPT0gNDIyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gNDIy44Gv44OQ44Oq44OH44O844K344On44Oz44Ko44Op44O844Gq44Gu44Gn44CB5L2V5bqm57mw44KK6L+U44GX44Gm44KC44Kz44Kx44KL44Gv44GaXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmjIfmlbDjg5Djg4Pjgq/jgqrjg5VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCh3YWl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWl0ICo9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RBamF4UmVzdWx0Py5tZWRpYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g44OV44Kh44Kk44Or57WQ5ZCIQVBJ44KC5oiQ5Yqf44GX44Gf44Gu44Gn5qyh44G4XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBteUNvbnNvbGUubG9nKGxhc3RBamF4UmVzdWx0KTtcbiAgICAgICAgICAgICAgICBpZiAobGFzdEFqYXhSZXN1bHQ/Lm1lZGlhKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWFqOmDqOe1guOCj+OBo+OBn+OBruOBp+aIkOWKn+aZguOCs+ODvOODq+ODkOODg+OCr+OCkuWPqeOBj1xuICAgICAgICAgICAgICAgICAgICBfb25TdWNjZXNzKCRzZWxmLCBsYXN0QWpheFJlc3VsdC5tZWRpYSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfntZDlkIhBUEnlpLHmlZcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBteUNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICBfb25GYWlsdXJlKCRzZWxmLCBlcnIpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHByb2dyZXNzVGltZXIpO1xuICAgICAgICAgICAgICAgIF9vbkNvbXBsZXRlKCRzZWxmKTtcbiAgICAgICAgICAgICAgICAkc2VsZi52YWwoJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgIH0pO1xufTtcblxuIiwid2luZG93LnNldEluZGV4TmFtZVRvTGlzdEl0ZW1zID0gKCkgPT4ge1xuICAgIGxldCBpZHggPSAxO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWluZGV4XScpLmZvckVhY2goZG9tID0+IHtcbiAgICAgICAgZG9tLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGlkeCsrKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pbmRleF0gW2RhdGEtbGlzdF9uYW1lXVtkYXRhLWtleV9uYW1lXScpLmZvckVhY2goZG9tID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdF9uYW1lJykrJ1snK2RvbS5jbG9zZXN0KCdbZGF0YS1pbmRleF0nKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSsnXVsnK2RvbS5nZXRBdHRyaWJ1dGUoJ2RhdGEta2V5X25hbWUnKSsnXSc7XG4gICAgICAgIGRvbS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBuYW1lKTtcbiAgICB9KTtcbn07XG5cbiQoJ2Zvcm0gLnN1Ym1pdF9idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCAkc2VsZiA9ICQodGhpcyk7XG4gICAgY29uc3QgJGZvcm0gPSAkc2VsZi5jbG9zZXN0KCdmb3JtJyk7XG4gICAgY29uc3Qgb3JpZ2luYWxUYXJnZXQgPSAkZm9ybS5hdHRyKCd0YXJnZXQnKTtcblxuICAgIGlmICgkc2VsZi5hdHRyKCdkYXRhLXRhcmdldCcpKSB7XG4gICAgICAgICRmb3JtLmF0dHIoJ3RhcmdldCcsICRzZWxmLmF0dHIoJ2RhdGEtdGFyZ2V0JykpO1xuICAgIH1cbiAgICBpZiAoJHNlbGYuYXR0cignZGF0YS1hY3Rpb24nKSkge1xuICAgICAgICAkZm9ybS5hdHRyKCdhY3Rpb24nLCAkc2VsZi5hdHRyKCdkYXRhLWFjdGlvbicpKTtcbiAgICB9XG4gICAgJGZvcm0uc3VibWl0KCk7XG5cbiAgICBpZiAob3JpZ2luYWxUYXJnZXQpIHtcbiAgICAgICAgJGZvcm0uYXR0cigndGFyZ2V0Jywgb3JpZ2luYWxUYXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRmb3JtLnJlbW92ZUF0dHIoJ3RhcmdldCcpO1xuICAgIH1cbn0pO1xuXG4kKCcuanMtbGFuZ3VhZ2Vfc2V0dGluZycpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS5zdWJtaXQoKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAvLyB0ZXh0YXJlYeOCv+OCsOOCkuWFqOOBpuWPluW+l1xuICBjb25zdCB0ZXh0YXJlYUVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZXh0YXJlYVwiKTtcblxuICB0ZXh0YXJlYUVscy5mb3JFYWNoKCh0ZXh0YXJlYUVsKSA9PiB7XG4gICAgLy8g44OH44OV44Kp44Or44OI5YCk44Go44GX44Gm44K544K/44Kk44Or5bGe5oCn44KS5LuY5LiOXG4gICAgdGV4dGFyZWFFbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgaGVpZ2h0OiAke3RleHRhcmVhRWwuc2Nyb2xsSGVpZ2h0fXB4O2ApO1xuICAgIC8vIGlucHV044Kk44OZ44Oz44OI44GM55m655Sf44GZ44KL44Gf44Gz44Gr6Zai5pWw5ZG844Gz5Ye644GXXG4gICAgdGV4dGFyZWFFbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgc2V0VGV4dGFyZWFIZWlnaHQpO1xuICB9KTtcblxuICAvLyB0ZXh0YXJlYeOBrumrmOOBleOCkuioiOeul+OBl+OBpuaMh+WumuOBmeOCi+mWouaVsFxuICBmdW5jdGlvbiBzZXRUZXh0YXJlYUhlaWdodCgpIHtcbiAgICB0aGlzLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xuICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5zY3JvbGxIZWlnaHR9cHhgO1xuICB9XG59KTtcblxud2luZG93LmFqYXhTdWJtaXQgPSBhc3luYyAkZm9ybSA9PiB7XG4gICAgcmV0dXJuIGF3YWl0ICQuYWpheCh7XG4gICAgICAgIHVybDogJGZvcm0uYXR0cignYWN0aW9uJyksXG4gICAgICAgIHR5cGU6ICRmb3JtLmF0dHIoJ21ldGhvZCcpLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogJCgnW25hbWU9Y3NyZi10b2tlbl0nKS5hdHRyKCdjb250ZW50JyksXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6ICRmb3JtLnNlcmlhbGl6ZSgpLFxuICAgIH0pO1xufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwid2luZG93IiwiXyIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiJCIsImhhc0NsYXNzIiwidXBkYXRlTGlzdHMiLCJzZXRJbmRleE5hbWVUb0xpc3RJdGVtcyIsImNyb3dkQ3JpbWluYWxMaXN0SHRtbCIsImNyaW1pbmFsTGlzdEh0bWwiLCJlYWNoIiwiJG9wdGlvbiIsInZhbCIsInRleHQiLCIkc2VsZWN0IiwiJHNlbGVjdEluY2lkZW50IiwiY2xvc2VzdCIsImZpbmQiLCJpbmNpZGVudElkIiwiTnVtYmVyIiwiY2hhcmFJZCIsIkNST1dEX0lOQ0lERU5UX0lEUyIsImluY2x1ZGVzIiwiaHRtbCIsImNsb25lIiwic3dpdGNoQ3JhenlUcnV0aFNlbGVjdCIsImhpZGUiLCJhdHRyIiwic2hvdyIsImNsaWNrIiwib24iLCJkIiwiJGRvbSIsIiRzZWxmIiwiY2hhcmFOYW1lIiwibXNnIiwiQ0hBUkFfREVMRVRFX0NPTkZJUk1fTUVTU0FHRSIsInJlcGxhY2UiLCJsZW5ndGgiLCJteUNvbmZpcm0iLCJyZXN1bHQiLCJyZW1vdmUiLCJyZW1vdmVDbGFzcyIsImFwcGVuZCIsIm15QWxlcnQiLCJ0b2dnbGVDbGFzcyIsImRpYWxvZ01lc3NhZ2UiLCJhZGRDbGFzcyIsImhhc19zaG93X2luaXRpYWxfYm9hcmQiLCJndGFnIiwiJHAiLCJhamF4U3VibWl0IiwicmVzIiwibGlrZXMiLCJtZXNzYWdlIiwib3BlblBvcHVwIiwiY29uc29sZSIsImxvZyIsInRvZ2dsZSIsImxvY2FsU3RvcmFnZSIsInNjZW5hcmlvRm9udFNpemUiLCJjc3MiLCJmb250U2l6ZSIsImNvbmZpcm1Ub1Nob3dIaW50IiwicyIsImlzIiwic0hpbnRMYWJlbCIsInNDb25maXJtIiwiZm9yRWFjaCIsIml0Iiwic0xhYmVsIiwiY2hpbGRyZW4iLCIkdG1wIiwidGhlQ29uZmlybSIsInBhcmVudCIsInJlbW92ZUF0dHIiLCJjbGFzc05hbWUiLCJwcmV2ZW50SGFzaCIsInNlbGVjdG9yIiwiJHBvcHVwIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib2ZmIiwib3BlbmVkIiwidGl0bGUiLCJzZXRGaWxlVXBsb2FkRXZlbnQiLCJvcHRpb24iLCJfZm9ybUNsYXNzIiwiZm9ybUNsYXNzIiwiX3NlbGVjdG9yIiwiX29uU3VjY2VzcyIsIm9uU3VjY2VzcyIsIiRpbnB1dCIsIm1lZGlhIiwibXlDb25zb2xlIiwiX29uRmFpbHVyZSIsIm9uRmFpbHVyZSIsImVycm9yIiwiX29uQ29tcGxldGUiLCJvbkNvbXBsZXRlIiwiX29uUHJvZ3Jlc3MiLCJvblByb2dyZXNzIiwicGVyY2VudCIsIiRmb3JtIiwidXBsb2FkRmlsZSIsInByb3AiLCJ0b1VzZXJJZCIsIkNIVU5LX1NJWkUiLCJSRVRSWV9MSU1JVCIsIlJFVFJZX0lOVEVSVkFMIiwiQ0hVTktfVVBMT0FEX1VSTCIsIkNTUkZfVE9LRU4iLCJzZW50IiwibWF5YmVTZW50IiwiY2h1bmtVcGxvYWRVcmwiLCJicHMiLCJwcm9ncmVzc1RpbWVyIiwic2V0SW50ZXJ2YWwiLCJwZXIiLCJzaXplIiwiY2h1bmtFbmQiLCJjaHVua0RhdGEiLCJzbGljZSIsImZkIiwiRm9ybURhdGEiLCJuYW1lIiwid2FpdCIsImkiLCJ1cFN0YXJ0QXQiLCJEYXRlIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJjb250ZW50VHlwZSIsInByb2Nlc3NEYXRhIiwiZGF0YSIsImVyciIsInN0YXR1cyIsInNsZWVwIiwiYWpheFJlc3VsdCIsInVwVGltZSIsImdldFRpbWUiLCJmaW5pc2hEYXRhIiwiZmlsZV9uYW1lIiwiZmlsZV9zaXplIiwiaXNfZmluaXNoIiwidG9fdXNlcl9pZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJsYXN0QWpheFJlc3VsdCIsIkVycm9yIiwiY2xlYXJJbnRlcnZhbCIsImlkeCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImRvbSIsInNldEF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsIm9yaWdpbmFsVGFyZ2V0Iiwic3VibWl0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRleHRhcmVhRWxzIiwidGV4dGFyZWFFbCIsInNjcm9sbEhlaWdodCIsInNldFRleHRhcmVhSGVpZ2h0Iiwic3R5bGUiLCJoZWlnaHQiLCJzZXJpYWxpemUiXSwic291cmNlUm9vdCI6IiJ9