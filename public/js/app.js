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
  $('.font_size_adjust .close').on('click', function () {
    $(this).closest('.font_size_adjust').hide();
  });
  $('.js-font_size_adjust').on('input', function () {
    var $self = $(this);
    localStorage.scenarioFontSize = $self.val();
    $('.public_sheet').css({
      'font-size': $self.val() + 'px'
    });
    $('.writer_wrapper').css({
      'font-size': $self.val() + 'px'
    });
  });
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

// 脚本画面のフォントサイズ調整機能
$('.js-font_size_button').on('click', function () {
  $('#menu_toggle').prop('checked', false);
  if ($('.font_size_adjust').length > 0) {
    $('.font_size_adjust').show();
  } else {
    myAlert($('[data-only_scenario_show]').attr('data-only_scenario_show'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBQSxtQkFBTyxDQUFDLGdEQUFhLENBQUM7QUFDdEJBLG1CQUFPLENBQUMsMENBQVUsQ0FBQztBQUNuQkEsbUJBQU8sQ0FBQyx3Q0FBUyxDQUFDO0FBQ2xCQSxtQkFBTyxDQUFDLDRDQUFXLENBQUM7QUFFcEJBLG1CQUFPLENBQUMsd0ZBQWlDLENBQUM7QUFDMUNBLG1CQUFPLENBQUMsOEVBQTRCLENBQUM7Ozs7Ozs7Ozs7QUNOckNDLE1BQU0sQ0FBQ0MsQ0FBQyxHQUFHRixtQkFBTyxDQUFDLCtDQUFRLENBQUM7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFDLE1BQU0sQ0FBQ0UsS0FBSyxHQUFHSCxtQkFBTyxDQUFDLDRDQUFPLENBQUM7QUFFL0JDLE1BQU0sQ0FBQ0UsS0FBSyxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsZ0JBQWdCOztBQUUzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OytDQzFCQTtBQUFBO0FBQUE7QUFEQSxJQUFJQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO0VBQUEsSUFDakNDLFdBQVcsR0FBcEIsU0FBU0EsV0FBVyxHQUFHO0lBQ25CQyx1QkFBdUIsRUFBRTtJQUV6QixJQUFNQyxxQkFBcUIsR0FBR0osQ0FBQyxDQUFDLDBDQUEwQyxDQUFDO0lBQzNFLElBQUlLLGdCQUFnQixHQUFHLG1CQUFtQjtJQUMxQ0wsQ0FBQyxDQUFDLG9EQUFvRCxDQUFDLENBQUNNLElBQUksQ0FBQyxZQUFXO01BQ3BFLElBQU1DLE9BQU8sR0FBR1AsQ0FBQyxDQUFDLElBQUksQ0FBQztNQUN2QkssZ0JBQWdCLElBQUksaUJBQWlCLEdBQUNFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLEdBQUMsSUFBSSxHQUFDRCxPQUFPLENBQUNFLElBQUksRUFBRSxHQUFDLFdBQVc7SUFDdkYsQ0FBQyxDQUFDO0lBQ0ZULENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDTSxJQUFJLENBQUMsWUFBVztNQUNqQyxJQUFNSSxPQUFPLEdBQUdWLENBQUMsQ0FBQyxJQUFJLENBQUM7TUFDdkIsSUFBTVcsZUFBZSxHQUFHRCxPQUFPLENBQUNFLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7TUFDcEYsSUFBTUMsVUFBVSxHQUFHQyxNQUFNLENBQUNKLGVBQWUsQ0FBQ0gsR0FBRyxFQUFFLENBQUM7TUFFaEQsSUFBTVEsT0FBTyxHQUFHTixPQUFPLENBQUNGLEdBQUcsRUFBRTtNQUM3QixJQUFJUyxrQkFBa0IsQ0FBQ0MsUUFBUSxDQUFDSixVQUFVLENBQUMsRUFBRTtRQUN6Q0osT0FBTyxDQUFDUyxJQUFJLENBQUNmLHFCQUFxQixDQUFDZ0IsS0FBSyxFQUFFLENBQUM7TUFDL0MsQ0FBQyxNQUFNO1FBQ0hWLE9BQU8sQ0FBQ1MsSUFBSSxDQUFDZCxnQkFBZ0IsQ0FBQztNQUNsQztNQUNBSyxPQUFPLENBQUNGLEdBQUcsQ0FBQ1EsT0FBTyxDQUFDO0lBQ3hCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQSxJQStDUUssc0JBQXNCLEdBQS9CLFNBQVNBLHNCQUFzQixHQUFHO0lBQzlCckIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUNzQixJQUFJLEVBQUU7SUFDNUJ0QixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNNLElBQUksQ0FBQyxZQUFXO01BQy9CLElBQUlOLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ1EsR0FBRyxFQUFFLElBQUlSLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDdUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1FBQ2pFdkIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUN3QixJQUFJLEVBQUU7TUFDaEM7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDO0VBcEREeEIsQ0FBQyxDQUFDLFlBQU07SUFDSkEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDeUIsS0FBSyxFQUFFO0lBQ3hCdkIsV0FBVyxFQUFFO0VBQ2pCLENBQUMsQ0FBQztFQUVGRixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMwQixFQUFFLENBQUMsY0FBYyxFQUFFLFlBQVc7SUFDM0MsSUFBTUMsQ0FBQyxHQUFHM0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDUSxHQUFHLEVBQUU7SUFDdkJSLENBQUMsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDTSxJQUFJLENBQUMsWUFBVztNQUN4RCxJQUFNc0IsSUFBSSxHQUFHNUIsQ0FBQyxDQUFDLElBQUksQ0FBQztNQUNwQixJQUFJNEIsSUFBSSxDQUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUlJLENBQUMsRUFBRTtRQUM1QkMsSUFBSSxDQUFDSixJQUFJLEVBQUU7TUFDZixDQUFDLE1BQU07UUFDSEksSUFBSSxDQUFDTixJQUFJLEVBQUU7TUFDZjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztFQUVGdEIsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMwQixFQUFFLENBQUMsT0FBTyxFQUFFLHdDQUF3QywwRUFBRTtJQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7WUFDMUVHLEtBQUssR0FBRzdCLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDZjhCLFNBQVMsR0FBR0QsS0FBSyxDQUFDakIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUNDLElBQUksQ0FBQyxvREFBb0QsQ0FBQyxDQUFDSixJQUFJLEVBQUU7WUFDN0dzQixHQUFHLEdBQUdDLDRCQUE0QixDQUFDQyxPQUFPLENBQUMsYUFBYSxFQUFFSCxTQUFTLENBQUM7WUFBQSxNQUN0RTlCLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDa0MsTUFBTSxHQUFHLENBQUM7Y0FBQTtjQUFBO1lBQUE7WUFBQTtZQUFBLE9BQ1BDLFNBQVMsQ0FBQ0osR0FBRyxDQUFDO1VBQUE7WUFBQTtZQUE5QkssTUFBTSxvQkFBTkEsTUFBTTtZQUNiLElBQUlBLE1BQU0sSUFBSSxJQUFJLEVBQUU7Y0FDaEJQLEtBQUssQ0FBQ2pCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDeUIsTUFBTSxFQUFFO2NBQ3hDbkMsV0FBVyxFQUFFO1lBQ2pCO1VBQUM7VUFBQTtZQUFBO1FBQUE7TUFBQTtJQUFBO0VBQUEsQ0FFUixHQUFDO0VBQ0ZGLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDMEIsRUFBRSxDQUFDLGNBQWMsRUFBRSxvQ0FBb0MsRUFBRSxZQUFXO0lBQzlGeEIsV0FBVyxFQUFFO0VBQ2pCLENBQUMsQ0FBQztFQUNGRixDQUFDLENBQUMseUNBQXlDLENBQUMsQ0FBQzBCLEVBQUUsQ0FBQyxjQUFjLEVBQUUsWUFBVztJQUN2RXhCLFdBQVcsRUFBRTtFQUNqQixDQUFDLENBQUM7RUFDRkYsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMwQixFQUFFLENBQUMsUUFBUSxFQUFFLG1EQUFtRCxFQUFFLFlBQVc7SUFDdkcxQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNZLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDMEIsV0FBVyxDQUFDLFVBQVUsQ0FBQztFQUM3RCxDQUFDLENBQUM7RUFDRnRDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDMEIsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFXO0lBQzdDLElBQU1FLElBQUksR0FBRzVCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDb0IsS0FBSyxFQUFFO0lBQzdDUSxJQUFJLENBQUNVLFdBQVcsQ0FBQyxVQUFVLENBQUM7SUFDNUJ0QyxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQ3VDLE1BQU0sQ0FBQ1gsSUFBSSxDQUFDO0lBQzFDMUIsV0FBVyxFQUFFO0VBQ2pCLENBQUMsQ0FBQztFQVVGbUIsc0JBQXNCLEVBQUU7RUFDeEJyQixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMwQixFQUFFLENBQUMsUUFBUSxFQUFFLFlBQU07SUFDbENMLHNCQUFzQixFQUFFO0VBQzVCLENBQUMsQ0FBQztFQUVGckIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMwQixFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVc7SUFDekNjLE9BQU8sQ0FBQ3hDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ21CLElBQUksRUFBRSxDQUFDO0VBQ3RDLENBQUMsQ0FBQztFQUVGbkIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMwQixFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVc7SUFDekNjLE9BQU8sQ0FBQ3hDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDbUIsSUFBSSxFQUFFLENBQUM7RUFDOUMsQ0FBQyxDQUFDO0FBQ047Ozs7Ozs7Ozs7OzsrQ0N6RkE7QUFBQTtBQUFBO0FBREEsSUFBSW5CLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFFO0VBQ3JDRCxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQzBCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBVztJQUN4QzFCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3lDLFdBQVcsQ0FBQyxRQUFRLENBQUM7RUFDakMsQ0FBQyxDQUFDO0VBRUZ6QyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQzBCLEVBQUUsQ0FBQyxPQUFPLDBFQUFFO0lBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtZQUM5QmdCLGFBQWEsR0FBRzFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3VCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUFBO1lBQUEsT0FDbENZLFNBQVMsQ0FBQ08sYUFBYSxDQUFDO1VBQUE7WUFBQTtZQUF4Q04sTUFBTSxvQkFBTkEsTUFBTTtZQUNiLElBQUlBLE1BQU0sSUFBSSxJQUFJLEVBQUU7Y0FDaEJwQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQzJDLFFBQVEsQ0FBQyxTQUFTLENBQUM7Y0FDL0MzQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQ3dCLElBQUksRUFBRTtjQUNsQ3hCLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDc0IsSUFBSSxFQUFFO1lBQ3RDO1VBQUM7VUFBQTtZQUFBO1FBQUE7TUFBQTtJQUFBO0VBQUEsQ0FDSixHQUFDO0VBQ0Z0QixDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQzBCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUMxQzFCLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDc0MsV0FBVyxDQUFDLFNBQVMsQ0FBQztJQUNsRHRDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDc0IsSUFBSSxFQUFFO0lBQ2xDdEIsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUN3QixJQUFJLEVBQUU7RUFDdEMsQ0FBQyxDQUFDO0VBRUYsSUFBSW9CLHNCQUFzQixHQUFHLEtBQUs7RUFDbEM1QyxDQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQzBCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUMvQyxJQUFJLENBQUNrQixzQkFBc0IsRUFBRTtNQUN6QkMsSUFBSSxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQztNQUNuQ0Qsc0JBQXNCLEdBQUcsSUFBSTtJQUNqQztJQUNBNUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUN3QixJQUFJLEVBQUU7SUFDbEN4QixDQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQ3NCLElBQUksRUFBRTtFQUMzQyxDQUFDLENBQUM7RUFDRnRCLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDMEIsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQy9DMUIsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUNzQixJQUFJLEVBQUU7SUFDbEN0QixDQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQ3dCLElBQUksRUFBRTtFQUMzQyxDQUFDLENBQUM7RUFFRnhCLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDMEIsRUFBRSxDQUFDLE9BQU8sMEVBQUU7SUFBQTtJQUFBO01BQUE7UUFBQTtVQUFBO1lBQ3ZCb0IsRUFBRSxHQUFHOUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDWSxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQy9Ca0MsRUFBRSxDQUFDTCxXQUFXLENBQUMsT0FBTyxDQUFDO1lBQUM7WUFBQTtZQUFBLE9BRUZNLFVBQVUsQ0FBQ0QsRUFBRSxDQUFDbEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1VBQUE7WUFBMUNvQyxHQUFHO1lBQ1RGLEVBQUUsQ0FBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQ0osSUFBSSxDQUFDdUMsR0FBRyxDQUFDQyxLQUFLLENBQUM7WUFBQztZQUFBO1VBQUE7WUFBQTtZQUFBO1lBRXJDSCxFQUFFLENBQUNMLFdBQVcsQ0FBQyxPQUFPLENBQUM7VUFBQztVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUE7RUFBQSxDQUUvQixHQUFDO0VBRUZ6QyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQzBCLEVBQUUsQ0FBQyxPQUFPLDBFQUFFO0lBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtZQUMzQm9CLEVBQUUsR0FBRzlDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ1ksT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUFBO1lBQUE7WUFBQSxPQUVUbUMsVUFBVSxDQUFDRCxFQUFFLENBQUNsQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7VUFBQTtZQUExQ29DLEdBQUc7WUFDVEYsRUFBRSxDQUFDTCxXQUFXLENBQUMsWUFBWSxDQUFDO1lBQzVCRCxPQUFPLENBQUNRLEdBQUcsQ0FBQ0UsT0FBTyxDQUFDO1lBQUM7WUFBQTtVQUFBO1lBQUE7WUFBQTtVQUFBO1VBQUE7WUFBQTtRQUFBO01BQUE7SUFBQTtFQUFBLENBRzVCLEdBQUM7RUFFRmxELENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDMEIsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFXO0lBQ3pDYyxPQUFPLENBQUN4QyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN1QixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7RUFDckMsQ0FBQyxDQUFDO0VBRUZ2QixDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQzBCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBVztJQUMzQ3lCLFNBQVMsQ0FBQywyQkFBMkIsQ0FBQztFQUMxQyxDQUFDLENBQUM7RUFDRm5ELENBQUMsQ0FBQyxrREFBa0QsQ0FBQyxDQUFDMEIsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFXO0lBQ3pFLElBQU1HLEtBQUssR0FBRzdCLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDckJvRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ3hCLEtBQUssQ0FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQ0osSUFBSSxFQUFFLENBQUM7SUFDeEMrQixPQUFPLENBQUNYLEtBQUssQ0FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQ00sSUFBSSxFQUFFLEVBQUVVLEtBQUssQ0FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQ0osSUFBSSxFQUFFLENBQUM7RUFDaEUsQ0FBQyxDQUFDO0VBRUZULENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDMEIsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZO0lBQ2xEMUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDWSxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQ1UsSUFBSSxFQUFFO0VBQy9DLENBQUMsQ0FBQztFQUNGdEIsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMwQixFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVc7SUFDN0MsSUFBTUcsS0FBSyxHQUFHN0IsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNyQnNELFlBQVksQ0FBQ0MsZ0JBQWdCLEdBQUcxQixLQUFLLENBQUNyQixHQUFHLEVBQUU7SUFDM0NSLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ3dELEdBQUcsQ0FBQztNQUFDLFdBQVcsRUFBRTNCLEtBQUssQ0FBQ3JCLEdBQUcsRUFBRSxHQUFDO0lBQUksQ0FBQyxDQUFDO0lBQ3ZEUixDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ3dELEdBQUcsQ0FBQztNQUFDLFdBQVcsRUFBRTNCLEtBQUssQ0FBQ3JCLEdBQUcsRUFBRSxHQUFDO0lBQUksQ0FBQyxDQUFDO0VBQzdELENBQUMsQ0FBQztBQUNOO0FBRUEsSUFBR1IsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUNrQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0VBQ3RDO0VBQ0F4QyxNQUFNLENBQUMrRCxpQkFBaUI7SUFBQSx1RUFBRyxrQkFBTUMsQ0FBQztNQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUEsS0FDMUIxRCxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQzJELEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQUE7Z0JBQUE7Y0FBQTtjQUFBLGtDQUNqQztnQkFBQ3ZCLE1BQU0sRUFBQztjQUFJLENBQUM7WUFBQTtjQUFBO2NBQUEsT0FFUEQsU0FBUyxDQUFDdUIsQ0FBQyxDQUFDO1lBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBLENBRWhDO0lBQUE7TUFBQTtJQUFBO0VBQUE7RUFFRCxJQUFNRSxVQUFVLEdBQUc1RCxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQ1MsSUFBSSxFQUFFO0VBQy9DLElBQU1vRCxRQUFRLEdBQUc3RCxDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQ1MsSUFBSSxFQUFFO0VBRXZELENBQ0ksQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsQ0FBQyxFQUN4QyxDQUFDLDRCQUE0QixFQUFFLGtCQUFrQixDQUFDLEVBQ2xELENBQUMsWUFBWSxFQUFFLHFCQUFxQixDQUFDLEVBQ3JDLENBQUMsVUFBVSxFQUFFLG1CQUFtQixDQUFDLENBQ3BDLENBQUNxRCxPQUFPLENBQUMsVUFBQUMsRUFBRSxFQUFJO0lBQ1osSUFBSW5DLElBQUksR0FBRzVCLENBQUMsQ0FBQytELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQixJQUFJbkMsSUFBSSxDQUFDTSxNQUFNLElBQUksQ0FBQyxFQUFFO0lBQ3RCLElBQUk4QixNQUFNLEdBQUdoRSxDQUFDLENBQUMrRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ3RELElBQUksRUFBRTtJQUM1Qm1CLElBQUksQ0FBQ3FDLFFBQVEsRUFBRSxDQUFDM0MsSUFBSSxFQUFFO0lBQ3RCLElBQUk0QyxJQUFJLEdBQUdsRSxDQUFDLENBQUMsZ0NBQWdDLENBQUM7SUFDOUM0QixJQUFJLENBQUNXLE1BQU0sQ0FBQzJCLElBQUksQ0FBQztJQUNqQkEsSUFBSSxDQUFDekQsSUFBSSxDQUFDbUQsVUFBVSxDQUFDM0IsT0FBTyxDQUFDLGFBQWEsRUFBRStCLE1BQU0sQ0FBQyxDQUFDO0lBQ3BERSxJQUFJLENBQUN4QyxFQUFFLENBQUMsT0FBTywwRUFBRTtNQUFBO01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FDUEcsS0FBSyxHQUFHN0IsQ0FBQyxDQUFDLElBQUksQ0FBQztjQUNmbUUsVUFBVSxHQUFHTixRQUFRLENBQUM1QixPQUFPLENBQUMsYUFBYSxFQUFFK0IsTUFBTSxDQUFDO2NBQUE7Y0FBQSxPQUNuQ1AsaUJBQWlCLENBQUNVLFVBQVUsQ0FBQztZQUFBO2NBQUE7Y0FBN0MvQixNQUFNLHlCQUFOQSxNQUFNO2NBQ2IsSUFBSUEsTUFBTSxJQUFJLElBQUksRUFBRTtnQkFDaEJQLEtBQUssQ0FBQ3VDLE1BQU0sRUFBRSxDQUFDSCxRQUFRLEVBQUUsQ0FBQ0ksVUFBVSxDQUFDLE9BQU8sQ0FBQztnQkFDN0N4QyxLQUFLLENBQUNRLE1BQU0sRUFBRTtjQUNsQjtZQUFDO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBLENBQ0osR0FBQztFQUNOLENBQUMsQ0FBQztFQUVGLElBQUlULElBQUksR0FBRzVCLENBQUMsQ0FBQyxXQUFXLENBQUM7RUFDekI0QixJQUFJLENBQUNxQyxRQUFRLEVBQUUsQ0FBQzNDLElBQUksRUFBRTtFQUN0QixJQUFJNEMsSUFBSSxHQUFHbEUsQ0FBQyxDQUFDLGdDQUFnQyxDQUFDO0VBQzlDNEIsSUFBSSxDQUFDVyxNQUFNLENBQUMyQixJQUFJLENBQUM7RUFDakJBLElBQUksQ0FBQ3pELElBQUksQ0FBQ1QsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUNTLElBQUksRUFBRSxDQUFDO0VBQ3pDeUQsSUFBSSxDQUFDeEMsRUFBRSxDQUFDLE9BQU8sMEVBQUU7SUFBQTtJQUFBO01BQUE7UUFBQTtVQUFBO1lBQ1BHLEtBQUssR0FBRzdCLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFBQTtZQUFBLE9BQ0V5RCxpQkFBaUIsQ0FBQ3pELENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDUyxJQUFJLEVBQUUsQ0FBQztVQUFBO1lBQUE7WUFBM0UyQixNQUFNLDBCQUFOQSxNQUFNO1lBQ2IsSUFBSUEsTUFBTSxJQUFJLElBQUksRUFBRTtjQUNoQlAsS0FBSyxDQUFDdUMsTUFBTSxFQUFFLENBQUNILFFBQVEsRUFBRSxDQUFDSSxVQUFVLENBQUMsT0FBTyxDQUFDO2NBQzdDeEMsS0FBSyxDQUFDUSxNQUFNLEVBQUU7WUFDbEI7VUFBQztVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUE7RUFBQSxDQUNKLEdBQUM7QUFDTjs7Ozs7Ozs7Ozs7OytDQ2hJQTtBQUFBO0FBQUE7QUFEQTNDLE1BQU0sQ0FBQ3lELFNBQVM7RUFBQSxzRUFBRyxpQkFBT21CLFNBQVMsRUFBRUMsV0FBVztJQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7WUFDdENDLFFBQVEsR0FBRyxXQUFXLEdBQUNGLFNBQVM7WUFDaENHLE1BQU0sR0FBR3pFLENBQUMsQ0FBQ3dFLFFBQVEsQ0FBQztZQUUxQnhFLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDTSxJQUFJLENBQUMsWUFBVztjQUN2QyxJQUFNdUIsS0FBSyxHQUFHN0IsQ0FBQyxDQUFDLElBQUksQ0FBQztjQUNyQjZCLEtBQUssQ0FBQ04sSUFBSSxDQUFDLGFBQWEsRUFBRVIsTUFBTSxDQUFDYyxLQUFLLENBQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztZQUNsRSxDQUFDLENBQUM7WUFFSW1ELE9BQU8sR0FBRyxJQUFJQyxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7Y0FDN0MsSUFBSU4sV0FBVyxFQUFFO2dCQUNiLElBQUlqQixZQUFZLENBQUNpQixXQUFXLElBQUlBLFdBQVcsRUFBRTtrQkFDekNLLE9BQU8sQ0FBQztvQkFDSixRQUFRLEVBQUU7a0JBQ2QsQ0FBQyxDQUFDO2dCQUNOO2dCQUNBdEIsWUFBWSxDQUFDaUIsV0FBVyxHQUFHQSxXQUFXO2NBQzFDO2NBRUFFLE1BQU0sQ0FBQ2xELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO2NBRTdCa0QsTUFBTSxDQUFDNUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDaUUsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUNwRCxFQUFFLENBQUMsa0JBQWtCLEVBQUUsWUFBVztnQkFDbEZrRCxPQUFPLENBQUM7a0JBQ0osUUFBUSxFQUFFO2dCQUNkLENBQUMsQ0FBQztjQUNOLENBQUMsQ0FBQztjQUNGSCxNQUFNLENBQUM1RCxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUNpRSxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQ3BELEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxZQUFXO2dCQUNuRmtELE9BQU8sQ0FBQztrQkFDSixRQUFRLEVBQUU7Z0JBQ2QsQ0FBQyxDQUFDO2NBQ04sQ0FBQyxDQUFDO2NBQ0ZILE1BQU0sQ0FBQzVELElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQ2lFLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDcEQsRUFBRSxDQUFDLGtCQUFrQixFQUFFLFlBQVc7Z0JBQ25GLElBQU1HLEtBQUssR0FBRzdCLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3JCNEUsT0FBTyxDQUFDO2tCQUNKLFFBQVEsRUFBRS9DLEtBQUssQ0FBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQztrQkFDbkMsTUFBTSxFQUFFTSxLQUFLLENBQUNOLElBQUksQ0FBQyxXQUFXO2dCQUNsQyxDQUFDLENBQUM7Y0FDTixDQUFDLENBQUM7WUFDTixDQUFDLENBQUM7WUFBQTtZQUFBO1lBQUEsT0FHZW1ELE9BQU87VUFBQTtZQUFBO1VBQUE7WUFBQTtZQUVwQjFFLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDTSxJQUFJLENBQUMsWUFBVztjQUN2QyxJQUFNdUIsS0FBSyxHQUFHN0IsQ0FBQyxDQUFDLElBQUksQ0FBQztjQUNyQixJQUFNK0UsTUFBTSxHQUFHaEUsTUFBTSxDQUFDYyxLQUFLLENBQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztjQUNoRCxJQUFJd0QsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDYmxELEtBQUssQ0FBQ3dDLFVBQVUsQ0FBQyxhQUFhLENBQUM7Y0FDbkMsQ0FBQyxNQUFNO2dCQUNIeEMsS0FBSyxDQUFDTixJQUFJLENBQUMsYUFBYSxFQUFFd0QsTUFBTSxHQUFDLENBQUMsQ0FBQztjQUN2QztZQUNKLENBQUMsQ0FBQztZQUFDO1VBQUE7VUFBQTtZQUFBO1FBQUE7TUFBQTtJQUFBO0VBQUEsQ0FFVjtFQUFBO0lBQUE7RUFBQTtBQUFBO0FBRURyRixNQUFNLENBQUM4QyxPQUFPLEdBQUcsVUFBQ1QsR0FBRyxFQUFxQztFQUFBLElBQW5DaUQsS0FBSyx1RUFBRyxFQUFFO0VBQUEsSUFBRVQsV0FBVyx1RUFBRyxJQUFJO0VBQ2pEdkUsQ0FBQyxDQUFDLG1FQUFtRSxDQUFDLENBQUNzQixJQUFJLEVBQUU7RUFDN0V0QixDQUFDLENBQUMsdUNBQXVDLENBQUMsQ0FBQ21CLElBQUksQ0FBQ1ksR0FBRyxDQUFDRSxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0VBQzNFakMsQ0FBQyxDQUFDLHFDQUFxQyxDQUFDLENBQUNTLElBQUksQ0FBQ3VFLEtBQUssQ0FBQztFQUNwRCxPQUFPN0IsU0FBUyxDQUFDLHFCQUFxQixFQUFFb0IsV0FBVyxDQUFDO0FBQ3hELENBQUM7QUFFRDdFLE1BQU0sQ0FBQ3lDLFNBQVMsR0FBRyxVQUFDSixHQUFHLEVBQWlCO0VBQUEsSUFBZmlELEtBQUssdUVBQUcsRUFBRTtFQUMvQmhGLENBQUMsQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDd0IsSUFBSSxFQUFFO0VBQzdFeEIsQ0FBQyxDQUFDLHVDQUF1QyxDQUFDLENBQUNtQixJQUFJLENBQUNZLEdBQUcsQ0FBQ0UsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztFQUMzRWpDLENBQUMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDUyxJQUFJLENBQUN1RSxLQUFLLENBQUM7RUFDcEQsT0FBTzdCLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQztBQUMzQyxDQUFDOzs7Ozs7Ozs7Ozs7K0NDbEVEO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBekQsTUFBTSxDQUFDdUYsa0JBQWtCLEdBQUcsVUFBQ0MsTUFBTSxFQUFLO0VBQ3BDLElBQU1DLFVBQVUsR0FBRyxDQUFDRCxNQUFNLENBQUNFLFNBQVMsSUFBSSxFQUFFLEVBQUVsRCxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBQ2dELE1BQU0sQ0FBQ0UsU0FBUyxHQUFHLEVBQUU7RUFDbEYsSUFBTUMsU0FBUyxHQUFHLE1BQU0sR0FBQ0YsVUFBVSxHQUFDLDhCQUE4QjtFQUNsRSxJQUFNRyxVQUFVLEdBQUdKLE1BQU0sQ0FBQ0ssU0FBUyxJQUFLLFVBQUNDLE1BQU0sRUFBRUMsS0FBSyxFQUFLO0lBQUVDLFNBQVMsQ0FBQ3JDLEdBQUcsQ0FBQ29DLEtBQUssQ0FBQztFQUFFLENBQUU7RUFDckYsSUFBTUUsVUFBVSxHQUFHVCxNQUFNLENBQUNVLFNBQVMsSUFBSyxVQUFDSixNQUFNLEVBQUV4QyxHQUFHLEVBQUs7SUFBRTBDLFNBQVMsQ0FBQ0csS0FBSyxDQUFDN0MsR0FBRyxDQUFDO0VBQUUsQ0FBRTtFQUNuRixJQUFNOEMsV0FBVyxHQUFHWixNQUFNLENBQUNhLFVBQVUsSUFBSyxVQUFDUCxNQUFNLEVBQUssQ0FBQyxDQUFFO0VBQ3pELElBQU1RLFdBQVcsR0FBR2QsTUFBTSxDQUFDZSxVQUFVLElBQUssVUFBQ1QsTUFBTSxFQUFFVSxPQUFPLEVBQUssQ0FBQyxDQUFFO0VBRWxFUixTQUFTLENBQUNyQyxHQUFHLENBQUNnQyxTQUFTLENBQUM7RUFFeEJyRixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMwQixFQUFFLENBQUMsUUFBUSxFQUFFMkQsU0FBUyxFQUFFLFlBQVc7SUFDekMsSUFBTXhELEtBQUssR0FBRzdCLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDckIsSUFBSSxDQUFDNkIsS0FBSyxDQUFDckIsR0FBRyxFQUFFLEVBQUU7TUFDZDtJQUNKO0lBRUEsSUFBTTJGLEtBQUssR0FBR3RFLEtBQUssQ0FBQ2pCLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDbkMsSUFBTXdGLFVBQVUsR0FBR3ZFLEtBQUssQ0FBQ3dFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekMsSUFBTUMsUUFBUSxHQUFHSCxLQUFLLENBQUN0RixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQ0wsR0FBRyxFQUFFO0lBRXRELDJEQUFDO01BQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUE7a0JBQUE7b0JBQUE7c0JBQUE7d0JBR2ErRixVQUFVLEdBQUcsR0FBRyxHQUFDLElBQUksR0FBQyxJQUFJO3dCQUMxQkMsV0FBVyxHQUFHLENBQUM7d0JBQ2ZDLGNBQWMsR0FBRyxHQUFHO3dCQUNwQkMsZ0JBQWdCLEdBQUcxRyxDQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQ3VCLElBQUksQ0FBQyxTQUFTLENBQUM7d0JBQ25Fb0YsVUFBVSxHQUFHM0csQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUN1QixJQUFJLENBQUMsU0FBUyxDQUFDO3dCQUUzRHFGLElBQUksR0FBRyxDQUFDLEVBQUU7d0JBQ1ZDLFNBQVMsR0FBRyxDQUFDLEVBQUU7d0JBQ2ZDLGNBQWMsR0FBR0osZ0JBQWdCO3dCQUMzQjt3QkFFTkssR0FBRyxHQUFHLENBQUMsRUFBRTt3QkFDYkMsYUFBYSxHQUFHQyxXQUFXLENBQUMsWUFBTTswQkFDOUJKLFNBQVMsSUFBSUUsR0FBRyxHQUFHLEdBQUc7MEJBQ3RCLElBQUlGLFNBQVMsR0FBR0QsSUFBSSxHQUFHTCxVQUFVLEVBQUU7NEJBQy9CTSxTQUFTLEdBQUdELElBQUksR0FBR0wsVUFBVTswQkFDakM7MEJBQ0EsSUFBSVcsR0FBRyxHQUFHTCxTQUFTLEdBQUcsS0FBSyxHQUFHVCxVQUFVLENBQUNlLElBQUk7MEJBQzdDLElBQUlELEdBQUcsR0FBRyxJQUFJLEVBQUVBLEdBQUcsR0FBRyxJQUFJOzBCQUMxQmxCLFdBQVcsQ0FBQ25FLEtBQUssRUFBRXFGLEdBQUcsQ0FBQzt3QkFDM0IsQ0FBQyxFQUFFLElBQUksQ0FBQzt3QkFFUmxCLFdBQVcsQ0FBQ25FLEtBQUssRUFBRSxDQUFDLENBQUM7c0JBQUM7d0JBQUEsTUFDZitFLElBQUksR0FBR1IsVUFBVSxDQUFDZSxJQUFJOzBCQUFBOzBCQUFBO3dCQUFBO3dCQUNyQkMsUUFBUSxHQUFHUixJQUFJLEdBQUdMLFVBQVUsRUFBRTt3QkFDbEMsSUFBSUssSUFBSSxJQUFJLENBQUMsRUFBRTswQkFDWFEsUUFBUSxHQUFHYixVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQy9CO3dCQUVNYyxTQUFTLEdBQUdqQixVQUFVLENBQUNrQixLQUFLLENBQUNWLElBQUksRUFBRVEsUUFBUSxDQUFDO3dCQUNsRDFCLFNBQVMsQ0FBQ3JDLEdBQUcsQ0FBQ3VELElBQUksRUFBRVEsUUFBUSxDQUFDO3dCQUM3QjFCLFNBQVMsQ0FBQ3JDLEdBQUcsQ0FBQ2dFLFNBQVMsQ0FBQzt3QkFFbEJFLEVBQUUsR0FBRyxJQUFJQyxRQUFRLEVBQUU7d0JBQ3pCRCxFQUFFLENBQUNoRixNQUFNLENBQUMsV0FBVyxFQUFFNkQsVUFBVSxDQUFDcUIsSUFBSSxDQUFDO3dCQUN2Q0YsRUFBRSxDQUFDaEYsTUFBTSxDQUFDLFdBQVcsRUFBRTZELFVBQVUsQ0FBQ2UsSUFBSSxDQUFDO3dCQUN2Q0ksRUFBRSxDQUFDaEYsTUFBTSxDQUFDLFlBQVksRUFBRThFLFNBQVMsQ0FBQzt3QkFFbENLLElBQUksR0FBR2pCLGNBQWM7d0JBQUMsK0RBQ2JrQixDQUFDOzBCQUFBOzBCQUFBOzRCQUFBOzhCQUFBO2dDQUFBO2tDQUNBQyxTQUFTLEdBQUcsSUFBSUMsSUFBSSxFQUFFO2tDQUFBO2tDQUFBLE9BRUg3SCxDQUFDLENBQUM4SCxJQUFJLENBQUM7b0NBQzVCQyxJQUFJLEVBQUUsTUFBTTtvQ0FDWkMsR0FBRyxFQUFFbEIsY0FBYztvQ0FDbkJoSCxPQUFPLEVBQUU7c0NBQ0wsY0FBYyxFQUFFNkc7b0NBQ3BCLENBQUM7b0NBQ0RzQixXQUFXLEVBQUUsS0FBSztvQ0FDbEJDLFdBQVcsRUFBRSxLQUFLO29DQUNsQkMsSUFBSSxFQUFFWjtrQ0FDVixDQUFDLENBQUMsU0FBTTtvQ0FBQSx1RUFBQyxpQkFBTWEsR0FBRztzQ0FBQTt3Q0FBQTswQ0FBQTs0Q0FBQTs4Q0FDZDFDLFNBQVMsQ0FBQ3JDLEdBQUcsQ0FBQytFLEdBQUcsQ0FBQzs4Q0FBQyxNQUNmVCxDQUFDLElBQUluQixXQUFXO2dEQUFBO2dEQUFBOzhDQUFBOzhDQUFBLE1BRVY0QixHQUFHOzRDQUFBOzhDQUFBLE1BQ0hBLEdBQUcsQ0FBQ0MsTUFBTSxJQUFJLEdBQUc7Z0RBQUE7Z0RBQUE7OENBQUE7OENBQUEsTUFFakJELEdBQUc7NENBQUE7OENBQUE7OENBQUEsT0FHSEUsS0FBSyxDQUFDWixJQUFJLENBQUM7NENBQUE7OENBQ2pCQSxJQUFJLElBQUksQ0FBQzs0Q0FBQzs0Q0FBQTs4Q0FBQTswQ0FBQTt3Q0FBQTtzQ0FBQTtvQ0FBQSxDQUVqQjtvQ0FBQTtzQ0FBQTtvQ0FBQTtrQ0FBQSxJQUFDO2dDQUFBO2tDQXRCSWEsVUFBVTtrQ0FBQSxNQXVCWixDQUFBQSxVQUFVLGFBQVZBLFVBQVUsdUJBQVZBLFVBQVUsQ0FBRW5HLE1BQU0sS0FBSSxJQUFJO29DQUFBO29DQUFBO2tDQUFBO2tDQUMxQjtrQ0FFQTtrQ0FDTW9HLE1BQU0sR0FBRyxDQUFFLElBQUlYLElBQUksRUFBRSxDQUFFWSxPQUFPLEVBQUUsR0FBR2IsU0FBUyxDQUFDYSxPQUFPLEVBQUUsSUFBSSxNQUFNO2tDQUN0RTFCLEdBQUcsR0FBRyxDQUFDSyxRQUFRLEdBQUdSLElBQUksSUFBSTRCLE1BQU07O2tDQUVoQztrQ0FDQTFCLGNBQWMsc0JBQUd5QixVQUFVLENBQUNQLEdBQUcsNkRBQUlsQixjQUFjO2tDQUFDO2dDQUFBO2dDQUFBO2tDQUFBOzhCQUFBOzRCQUFBOzBCQUFBO3dCQUFBO3dCQWxDakRhLENBQUMsR0FBRyxDQUFDO3NCQUFBO3dCQUFBLE1BQUdBLENBQUMsSUFBSW5CLFdBQVc7MEJBQUE7MEJBQUE7d0JBQUE7d0JBQUEscUNBQXhCbUIsQ0FBQztzQkFBQTt3QkFBQTt3QkFBQTswQkFBQTswQkFBQTt3QkFBQTt3QkFBQTtzQkFBQTt3QkFBMEJBLENBQUMsRUFBRTt3QkFBQTt3QkFBQTtzQkFBQTt3QkFzQ3ZDZixJQUFJLEdBQUdRLFFBQVE7d0JBQ2ZQLFNBQVMsR0FBR08sUUFBUTt3QkFFcEJwQixXQUFXLENBQUNuRSxLQUFLLEVBQUUrRSxJQUFJLEdBQUcsS0FBSyxHQUFHUixVQUFVLENBQUNlLElBQUksQ0FBQzt3QkFBQzt3QkFBQTtzQkFBQTt3QkFHdkQ7d0JBQ011QixVQUFVLEdBQUc7MEJBQ2ZDLFNBQVMsRUFBRXZDLFVBQVUsQ0FBQ3FCLElBQUk7MEJBQzFCbUIsU0FBUyxFQUFFeEMsVUFBVSxDQUFDZSxJQUFJOzBCQUMxQjBCLFNBQVMsRUFBRTt3QkFDZixDQUFDO3dCQUNELElBQUl2QyxRQUFRLEVBQUU7MEJBQ1ZvQyxVQUFVLENBQUNJLFVBQVUsR0FBR3hDLFFBQVE7d0JBQ3BDO3dCQUdBb0IsSUFBSSxHQUFHakIsY0FBYzt3QkFBQyxpRUFDYmtCLEVBQUM7MEJBQUE7MEJBQUE7NEJBQUE7OEJBQUE7Z0NBQUE7a0NBQUE7a0NBQUEsT0FDaUIzSCxDQUFDLENBQUM4SCxJQUFJLENBQUM7b0NBQzFCQyxJQUFJLEVBQUUsTUFBTTtvQ0FDWkMsR0FBRyxFQUFFbEIsY0FBYztvQ0FDbkJoSCxPQUFPLEVBQUU7c0NBQ0wsY0FBYyxFQUFFNkc7b0NBQ3BCLENBQUM7b0NBQ0RzQixXQUFXLEVBQUUsa0JBQWtCO29DQUMvQkUsSUFBSSxFQUFFWSxJQUFJLENBQUNDLFNBQVMsQ0FBQ04sVUFBVTtrQ0FDbkMsQ0FBQyxDQUFDLFNBQU07b0NBQUEsdUVBQUMsa0JBQU1OLEdBQUc7c0NBQUE7d0NBQUE7MENBQUE7NENBQUE7OENBQ2QxQyxTQUFTLENBQUNyQyxHQUFHLENBQUMrRSxHQUFHLENBQUM7OENBQUMsTUFDZlQsRUFBQyxJQUFJbkIsV0FBVztnREFBQTtnREFBQTs4Q0FBQTs4Q0FBQSxNQUVWNEIsR0FBRzs0Q0FBQTs4Q0FBQSxNQUNIQSxHQUFHLENBQUNDLE1BQU0sSUFBSSxHQUFHO2dEQUFBO2dEQUFBOzhDQUFBOzhDQUFBLE1BRWpCRCxHQUFHOzRDQUFBOzhDQUFBOzhDQUFBLE9BR0hFLEtBQUssQ0FBQ1osSUFBSSxDQUFDOzRDQUFBOzhDQUNqQkEsSUFBSSxJQUFJLENBQUM7NENBQUM7NENBQUE7OENBQUE7MENBQUE7d0NBQUE7c0NBQUE7b0NBQUEsQ0FFakI7b0NBQUE7c0NBQUE7b0NBQUE7a0NBQUEsSUFBQztnQ0FBQTtrQ0FyQkZ1QixjQUFjO2tDQUFBLDBCQXVCVkEsY0FBYyw2Q0FBZCxpQkFBZ0J4RCxLQUFLO29DQUFBO29DQUFBO2tDQUFBO2tDQUFBO2dDQUFBO2dDQUFBO2tDQUFBOzhCQUFBOzRCQUFBOzBCQUFBO3dCQUFBO3dCQXhCcEJrQyxFQUFDLEdBQUcsQ0FBQztzQkFBQTt3QkFBQSxNQUFHQSxFQUFDLElBQUluQixXQUFXOzBCQUFBOzBCQUFBO3dCQUFBO3dCQUFBLHNDQUF4Qm1CLEVBQUM7c0JBQUE7d0JBQUE7d0JBQUE7MEJBQUE7MEJBQUE7d0JBQUE7d0JBQUE7c0JBQUE7d0JBQTBCQSxFQUFDLEVBQUU7d0JBQUE7d0JBQUE7c0JBQUE7d0JBNkJ2Q2pDLFNBQVMsQ0FBQ3JDLEdBQUcsQ0FBQzRGLGNBQWMsQ0FBQzt3QkFBQyx5QkFDMUJBLGNBQWMsNENBQWQsZ0JBQWdCeEQsS0FBSzswQkFBQTswQkFBQTt3QkFBQTt3QkFDckI7d0JBQ0FILFVBQVUsQ0FBQ3pELEtBQUssRUFBRW9ILGNBQWMsQ0FBQ3hELEtBQUssQ0FBQzt3QkFBQzt3QkFBQTtzQkFBQTt3QkFBQSxNQUVsQyxJQUFJeUQsS0FBSyxDQUFDLFNBQVMsQ0FBQztzQkFBQTtzQkFBQTt3QkFBQTtvQkFBQTtrQkFBQTtnQkFBQTtjQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7Y0FBQTtjQUFBO2NBSTlCeEQsU0FBUyxDQUFDRyxLQUFLLGNBQUs7Y0FDcEJGLFVBQVUsQ0FBQzlELEtBQUssZUFBTTtZQUFDO2NBQUE7Y0FFdkJzSCxhQUFhLENBQUNuQyxhQUFhLENBQUM7Y0FDNUJsQixXQUFXLENBQUNqRSxLQUFLLENBQUM7Y0FDbEJBLEtBQUssQ0FBQ3JCLEdBQUcsQ0FBQyxFQUFFLENBQUM7Y0FBQztZQUFBO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBLENBRXJCLElBQUc7RUFDUixDQUFDLENBQUM7QUFDTixDQUFDOzs7Ozs7Ozs7Ozs7K0NDN0tEO0FBQUE7QUFBQTtBQURBZCxNQUFNLENBQUNTLHVCQUF1QixHQUFHLFlBQU07RUFDbkMsSUFBSWlKLEdBQUcsR0FBRyxDQUFDO0VBQ1hDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUN4RixPQUFPLENBQUMsVUFBQXlGLEdBQUcsRUFBSTtJQUNyREEsR0FBRyxDQUFDQyxZQUFZLENBQUMsWUFBWSxFQUFFSixHQUFHLEVBQUUsQ0FBQztFQUN6QyxDQUFDLENBQUM7RUFDRkMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDeEYsT0FBTyxDQUFDLFVBQUF5RixHQUFHLEVBQUk7SUFDckYsSUFBTTlCLElBQUksR0FBRzhCLEdBQUcsQ0FBQ0UsWUFBWSxDQUFDLGdCQUFnQixDQUFDLEdBQUMsR0FBRyxHQUFDRixHQUFHLENBQUMzSSxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM2SSxZQUFZLENBQUMsWUFBWSxDQUFDLEdBQUMsSUFBSSxHQUFDRixHQUFHLENBQUNFLFlBQVksQ0FBQyxlQUFlLENBQUMsR0FBQyxHQUFHO0lBQ3JKRixHQUFHLENBQUNDLFlBQVksQ0FBQyxNQUFNLEVBQUUvQixJQUFJLENBQUM7RUFDbEMsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUVEekgsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMwQixFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVc7RUFDNUMsSUFBTUcsS0FBSyxHQUFHN0IsQ0FBQyxDQUFDLElBQUksQ0FBQztFQUNyQixJQUFNbUcsS0FBSyxHQUFHdEUsS0FBSyxDQUFDakIsT0FBTyxDQUFDLE1BQU0sQ0FBQztFQUNuQyxJQUFNOEksY0FBYyxHQUFHdkQsS0FBSyxDQUFDNUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztFQUUzQyxJQUFJTSxLQUFLLENBQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtJQUMzQjRFLEtBQUssQ0FBQzVFLElBQUksQ0FBQyxRQUFRLEVBQUVNLEtBQUssQ0FBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0VBQ25EO0VBQ0EsSUFBSU0sS0FBSyxDQUFDTixJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7SUFDM0I0RSxLQUFLLENBQUM1RSxJQUFJLENBQUMsUUFBUSxFQUFFTSxLQUFLLENBQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztFQUNuRDtFQUNBNEUsS0FBSyxDQUFDd0QsTUFBTSxFQUFFO0VBRWQsSUFBSUQsY0FBYyxFQUFFO0lBQ2hCdkQsS0FBSyxDQUFDNUUsSUFBSSxDQUFDLFFBQVEsRUFBRW1JLGNBQWMsQ0FBQztFQUN4QyxDQUFDLE1BQU07SUFDSHZELEtBQUssQ0FBQzlCLFVBQVUsQ0FBQyxRQUFRLENBQUM7RUFDOUI7QUFDSixDQUFDLENBQUM7QUFFRnJFLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDMEIsRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFXO0VBQzlDMUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDWSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMrSSxNQUFNLEVBQUU7QUFDcEMsQ0FBQyxDQUFDO0FBRUZqSyxNQUFNLENBQUNrSyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0VBQ2hEO0VBQ0EsSUFBTUMsV0FBVyxHQUFHUixRQUFRLENBQUNDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztFQUV6RE8sV0FBVyxDQUFDL0YsT0FBTyxDQUFDLFVBQUNnRyxVQUFVLEVBQUs7SUFDbEM7SUFDQUEsVUFBVSxDQUFDTixZQUFZLENBQUMsT0FBTyxvQkFBYU0sVUFBVSxDQUFDQyxZQUFZLFNBQU07SUFDekU7SUFDQUQsVUFBVSxDQUFDRixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVJLGlCQUFpQixDQUFDO0VBQ3pELENBQUMsQ0FBQzs7RUFFRjtFQUNBLFNBQVNBLGlCQUFpQixHQUFHO0lBQzNCLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLEdBQUcsTUFBTTtJQUMxQixJQUFJLENBQUNELEtBQUssQ0FBQ0MsTUFBTSxhQUFNLElBQUksQ0FBQ0gsWUFBWSxPQUFJO0VBQzlDO0FBQ0YsQ0FBQyxDQUFDO0FBRUZySyxNQUFNLENBQUNxRCxVQUFVO0VBQUEsc0VBQUcsaUJBQU1vRCxLQUFLO0lBQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtZQUFBLE9BQ2RuRyxDQUFDLENBQUM4SCxJQUFJLENBQUM7Y0FDaEJFLEdBQUcsRUFBRTdCLEtBQUssQ0FBQzVFLElBQUksQ0FBQyxRQUFRLENBQUM7Y0FDekJ3RyxJQUFJLEVBQUU1QixLQUFLLENBQUM1RSxJQUFJLENBQUMsUUFBUSxDQUFDO2NBQzFCekIsT0FBTyxFQUFFO2dCQUNMLGNBQWMsRUFBRUUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUN1QixJQUFJLENBQUMsU0FBUztjQUN6RCxDQUFDO2NBQ0Q0RyxJQUFJLEVBQUVoQyxLQUFLLENBQUNnRSxTQUFTO1lBQ3pCLENBQUMsQ0FBQztVQUFBO1lBQUE7VUFBQTtVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUE7RUFBQSxDQUNMO0VBQUE7SUFBQTtFQUFBO0FBQUE7O0FBRUQ7QUFDQW5LLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDMEIsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZO0VBQzlDMUIsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDcUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7RUFDeEMsSUFBSXJHLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDa0MsTUFBTSxHQUFHLENBQUMsRUFBRTtJQUNuQ2xDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDd0IsSUFBSSxFQUFFO0VBQ2pDLENBQUMsTUFBTTtJQUNIZ0IsT0FBTyxDQUFDeEMsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUN1QixJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztFQUMzRTtBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDeEVGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9pbmRpdmlzdWFsL215X3NjZW5hcmlvLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaW5kaXZpc3VhbC9zY2VuYXJpby1zaG93LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXBsb2FkLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy91dGlsaXR5LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zYXNzL2FwcC5zY3NzP2E4MGIiXSwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi9ib290c3RyYXAnKTtcbnJlcXVpcmUoJy4vdXBsb2FkJyk7XG5yZXF1aXJlKCcuL3BvcHVwJyk7XG5yZXF1aXJlKCcuL3V0aWxpdHknKTtcblxucmVxdWlyZSgnLi9pbmRpdmlzdWFsL215X3NjZW5hcmlvLWNyZWF0ZScpO1xucmVxdWlyZSgnLi9pbmRpdmlzdWFsL3NjZW5hcmlvLXNob3cnKTtcblxuIiwid2luZG93Ll8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcblxuLyoqXG4gKiBXZSdsbCBsb2FkIHRoZSBheGlvcyBIVFRQIGxpYnJhcnkgd2hpY2ggYWxsb3dzIHVzIHRvIGVhc2lseSBpc3N1ZSByZXF1ZXN0c1xuICogdG8gb3VyIExhcmF2ZWwgYmFjay1lbmQuIFRoaXMgbGlicmFyeSBhdXRvbWF0aWNhbGx5IGhhbmRsZXMgc2VuZGluZyB0aGVcbiAqIENTUkYgdG9rZW4gYXMgYSBoZWFkZXIgYmFzZWQgb24gdGhlIHZhbHVlIG9mIHRoZSBcIlhTUkZcIiB0b2tlbiBjb29raWUuXG4gKi9cblxud2luZG93LmF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuXG4vKipcbiAqIEVjaG8gZXhwb3NlcyBhbiBleHByZXNzaXZlIEFQSSBmb3Igc3Vic2NyaWJpbmcgdG8gY2hhbm5lbHMgYW5kIGxpc3RlbmluZ1xuICogZm9yIGV2ZW50cyB0aGF0IGFyZSBicm9hZGNhc3QgYnkgTGFyYXZlbC4gRWNobyBhbmQgZXZlbnQgYnJvYWRjYXN0aW5nXG4gKiBhbGxvd3MgeW91ciB0ZWFtIHRvIGVhc2lseSBidWlsZCByb2J1c3QgcmVhbC10aW1lIHdlYiBhcHBsaWNhdGlvbnMuXG4gKi9cblxuLy8gaW1wb3J0IEVjaG8gZnJvbSAnbGFyYXZlbC1lY2hvJztcblxuLy8gd2luZG93LlB1c2hlciA9IHJlcXVpcmUoJ3B1c2hlci1qcycpO1xuXG4vLyB3aW5kb3cuRWNobyA9IG5ldyBFY2hvKHtcbi8vICAgICBicm9hZGNhc3RlcjogJ3B1c2hlcicsXG4vLyAgICAga2V5OiBwcm9jZXNzLmVudi5NSVhfUFVTSEVSX0FQUF9LRVksXG4vLyAgICAgY2x1c3RlcjogcHJvY2Vzcy5lbnYuTUlYX1BVU0hFUl9BUFBfQ0xVU1RFUixcbi8vICAgICBmb3JjZVRMUzogdHJ1ZVxuLy8gfSk7XG4iLCJpZiAoJCgnYm9keScpLmhhc0NsYXNzKCdteV9zY2VuYXJpby1jcmVhdGUnKSkge1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUxpc3RzKCkge1xuICAgICAgICBzZXRJbmRleE5hbWVUb0xpc3RJdGVtcygpO1xuXG4gICAgICAgIGNvbnN0IGNyb3dkQ3JpbWluYWxMaXN0SHRtbCA9ICQoJy5jbG9uZV9iYXNlIC5qcy1jcm93ZF9jcmltaW5hbF9saXN0X2h0bWwnKTtcbiAgICAgICAgbGV0IGNyaW1pbmFsTGlzdEh0bWwgPSAnPG9wdGlvbj48L29wdGlvbj4nO1xuICAgICAgICAkKCdzZWxlY3RbZGF0YS1rZXlfbmFtZT1jaGFyYWN0ZXJfaWRdIG9wdGlvbjpzZWxlY3RlZCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCAkb3B0aW9uID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGNyaW1pbmFsTGlzdEh0bWwgKz0gJzxvcHRpb24gdmFsdWU9XCInKyRvcHRpb24udmFsKCkrJ1wiPicrJG9wdGlvbi50ZXh0KCkrJzwvb3B0aW9uPic7XG4gICAgICAgIH0pO1xuICAgICAgICAkKCdzZWxlY3QuY3JpbWluYWwnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgJHNlbGVjdCA9ICQodGhpcyk7XG4gICAgICAgICAgICBjb25zdCAkc2VsZWN0SW5jaWRlbnQgPSAkc2VsZWN0LmNsb3Nlc3QoJy5pbmNpZGVudF93cmFwcGVyJykuZmluZCgnc2VsZWN0LmluY2lkZW50Jyk7XG4gICAgICAgICAgICBjb25zdCBpbmNpZGVudElkID0gTnVtYmVyKCRzZWxlY3RJbmNpZGVudC52YWwoKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoYXJhSWQgPSAkc2VsZWN0LnZhbCgpO1xuICAgICAgICAgICAgaWYgKENST1dEX0lOQ0lERU5UX0lEUy5pbmNsdWRlcyhpbmNpZGVudElkKSkge1xuICAgICAgICAgICAgICAgICRzZWxlY3QuaHRtbChjcm93ZENyaW1pbmFsTGlzdEh0bWwuY2xvbmUoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRzZWxlY3QuaHRtbChjcmltaW5hbExpc3RIdG1sKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICRzZWxlY3QudmFsKGNoYXJhSWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAkKCgpID0+IHtcbiAgICAgICAgJCgnW25hbWU9ZGF5c10nKS5jbGljaygpO1xuICAgICAgICB1cGRhdGVMaXN0cygpO1xuICAgIH0pO1xuXG4gICAgJCgnW25hbWU9ZGF5c10nKS5vbignY2hhbmdlIGNsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGQgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAkKCcuc2NlbmFyaW9faW5jaWRlbnRfbGlzdCA+IGxpW2RhdGEtZGF5XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCAkZG9tID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGlmICgkZG9tLmF0dHIoJ2RhdGEtZGF5JykgPD0gZCkge1xuICAgICAgICAgICAgICAgICRkb20uc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZG9tLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkKCcuc2NlbmFyaW9fY2hhcmFjdGVyX2xpc3QnKS5vbignY2xpY2snLCAnLmNoYXJhY3Rlcl9yb3cgLmpzLWNoYXJhX2RlbGV0ZV9idXR0b24nLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgJHNlbGYgPSAkKHRoaXMpO1xuICAgICAgICBjb25zdCBjaGFyYU5hbWUgPSAkc2VsZi5jbG9zZXN0KCcuY2hhcmFjdGVyX3JvdycpLmZpbmQoJ3NlbGVjdFtkYXRhLWtleV9uYW1lPWNoYXJhY3Rlcl9pZF0gb3B0aW9uOnNlbGVjdGVkJykudGV4dCgpO1xuICAgICAgICBjb25zdCBtc2cgPSBDSEFSQV9ERUxFVEVfQ09ORklSTV9NRVNTQUdFLnJlcGxhY2UoJ19fX0NIQVJBX19fJywgY2hhcmFOYW1lKTtcbiAgICAgICAgaWYgKCQoJy5jaGFyYWN0ZXJfcm93JykubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgY29uc3Qge3Jlc3VsdH0gPSBhd2FpdCBteUNvbmZpcm0obXNnKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gJ29rJykge1xuICAgICAgICAgICAgICAgICRzZWxmLmNsb3Nlc3QoJy5jaGFyYWN0ZXJfcm93JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlTGlzdHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgICQoJy5zY2VuYXJpb19jaGFyYWN0ZXJfbGlzdCcpLm9uKCdjbGljayBjaGFuZ2UnLCAnc2VsZWN0W2RhdGEta2V5X25hbWU9Y2hhcmFjdGVyX2lkXScsIGZ1bmN0aW9uKCkge1xuICAgICAgICB1cGRhdGVMaXN0cygpO1xuICAgIH0pO1xuICAgICQoJy5zY2VuYXJpb19pbmNpZGVudF9saXN0IHNlbGVjdC5pbmNpZGVudCcpLm9uKCdjbGljayBjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdXBkYXRlTGlzdHMoKTtcbiAgICB9KTtcbiAgICAkKCcuc2NlbmFyaW9fY2hhcmFjdGVyX2xpc3QnKS5vbignY2hhbmdlJywgJy5jaGFyYWN0ZXJfcm93IHNlbGVjdFtkYXRhLWtleV9uYW1lPWNoYXJhY3Rlcl9pZF0nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuY2hhcmFjdGVyX3JvdycpLnJlbW92ZUNsYXNzKCdpcy1lcnJvcicpO1xuICAgIH0pO1xuICAgICQoJy5qcy1jaGFyYV9hZGRfYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0ICRkb20gPSAkKCcuY2hhcmFjdGVyX3JvdzpsYXN0JykuY2xvbmUoKTtcbiAgICAgICAgJGRvbS5yZW1vdmVDbGFzcygnaXMtZXJyb3InKTtcbiAgICAgICAgJCgnLnNjZW5hcmlvX2NoYXJhY3Rlcl9saXN0JykuYXBwZW5kKCRkb20pO1xuICAgICAgICB1cGRhdGVMaXN0cygpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gc3dpdGNoQ3JhenlUcnV0aFNlbGVjdCgpIHtcbiAgICAgICAgJCgnLmZvcl9jcmF6eV90cnV0aCcpLmhpZGUoKTtcbiAgICAgICAgJCgnc2VsZWN0LnJ1bGVfeCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PSAkKCcjY3JhenlfdHJ1dGhfcnVsZV9pZCcpLmF0dHIoJ2RhdGEtcnVsZV9pZCcpKSB7XG4gICAgICAgICAgICAgICAgJCgnLmZvcl9jcmF6eV90cnV0aCcpLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN3aXRjaENyYXp5VHJ1dGhTZWxlY3QoKTtcbiAgICAkKCdzZWxlY3QucnVsZV94Jykub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgc3dpdGNoQ3JhenlUcnV0aFNlbGVjdCgpO1xuICAgIH0pO1xuXG4gICAgJCgnLmpzLXdoYXRfaXNfcXVpeicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBteUFsZXJ0KCQoJyN3aGF0X2lzX3F1aXonKS5odG1sKCkpO1xuICAgIH0pO1xuXG4gICAgJCgnLmpzLXdoYXRfaXNfcGx1cycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBteUFsZXJ0KCQoJyN3aGF0X2lzX3BsdXNfbWVzc2FnZScpLmh0bWwoKSk7XG4gICAgfSk7XG59XG4iLCJpZiAoJCgnYm9keScpLmhhc0NsYXNzKCdzY2VuYXJpby1zaG93JykpIHtcbiAgICAkKCcuc3VtbWFyeV9xciBpbWcnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnc2NhbGVkJyk7XG4gICAgfSk7XG5cbiAgICAkKCcuanMtc2hvd19wcml2YXRlX3NoZWV0Jykub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGRpYWxvZ01lc3NhZ2UgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZGlhbG9nX21lc3NhZ2UnKTtcbiAgICAgICAgY29uc3Qge3Jlc3VsdH0gPSBhd2FpdCBteUNvbmZpcm0oZGlhbG9nTWVzc2FnZSk7XG4gICAgICAgIGlmIChyZXN1bHQgPT0gJ29rJykge1xuICAgICAgICAgICAgJCgnLnByaXZhdGVfc2hlZXRfd3JhcHBlcicpLmFkZENsYXNzKCdzaG93aW5nJyk7XG4gICAgICAgICAgICAkKCcuanMtaGlkZV9wcml2YXRlX3NoZWV0Jykuc2hvdygpO1xuICAgICAgICAgICAgJCgnLmpzLXNob3dfcHJpdmF0ZV9zaGVldCcpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgICQoJy5qcy1oaWRlX3ByaXZhdGVfc2hlZXQnKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICQoJy5wcml2YXRlX3NoZWV0X3dyYXBwZXInKS5yZW1vdmVDbGFzcygnc2hvd2luZycpO1xuICAgICAgICAkKCcuanMtaGlkZV9wcml2YXRlX3NoZWV0JykuaGlkZSgpO1xuICAgICAgICAkKCcuanMtc2hvd19wcml2YXRlX3NoZWV0Jykuc2hvdygpO1xuICAgIH0pO1xuXG4gICAgdmFyIGhhc19zaG93X2luaXRpYWxfYm9hcmQgPSBmYWxzZTtcbiAgICAkKCcuc2hvd19pbml0aWFsX2JvYXJkX3dyYXBwZXInKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmICghaGFzX3Nob3dfaW5pdGlhbF9ib2FyZCkge1xuICAgICAgICAgICAgZ3RhZygnZXZlbnQnLCAnc2hvd19pbml0aWFsX2JvYXJkJyk7XG4gICAgICAgICAgICBoYXNfc2hvd19pbml0aWFsX2JvYXJkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAkKCcuaW5pdGlhbF9ib2FyZF93cmFwcGVyJykuc2hvdygpO1xuICAgICAgICAkKCcuc2hvd19pbml0aWFsX2JvYXJkX3dyYXBwZXInKS5oaWRlKCk7XG4gICAgfSk7XG4gICAgJCgnLmhpZGVfaW5pdGlhbF9ib2FyZF93cmFwcGVyJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAkKCcuaW5pdGlhbF9ib2FyZF93cmFwcGVyJykuaGlkZSgpO1xuICAgICAgICAkKCcuc2hvd19pbml0aWFsX2JvYXJkX3dyYXBwZXInKS5zaG93KCk7XG4gICAgfSk7XG5cbiAgICAkKCcuanMtbGlrZV9idXR0b24nKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgJHAgPSAkKHRoaXMpLmNsb3Nlc3QoJ3AnKTtcbiAgICAgICAgJHAudG9nZ2xlQ2xhc3MoJ2xpa2VkJyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBhamF4U3VibWl0KCRwLmNsb3Nlc3QoJ2Zvcm0nKSk7XG4gICAgICAgICAgICAkcC5maW5kKCcuanMtY291bnQnKS50ZXh0KHJlcy5saWtlcyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICRwLnRvZ2dsZUNsYXNzKCdsaWtlZCcpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuanMtYm9va21hcmtfYnV0dG9uJykub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0ICRwID0gJCh0aGlzKS5jbG9zZXN0KCdwJyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBhamF4U3VibWl0KCRwLmNsb3Nlc3QoJ2Zvcm0nKSk7XG4gICAgICAgICAgICAkcC50b2dnbGVDbGFzcygnYm9va21hcmtlZCcpO1xuICAgICAgICAgICAgbXlBbGVydChyZXMubWVzc2FnZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnLmpzLXBsZWFzZV9sb2dpbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBteUFsZXJ0KCQodGhpcykuYXR0cignZGF0YS1tc2cnKSk7XG4gICAgfSk7XG5cbiAgICAkKCdhLmluY2lkZW50X2V4cGxhaW4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgb3BlblBvcHVwKCdqcy1wb3B1cC1pbmNpZGVudF9leHBsYWluJyk7XG4gICAgfSk7XG4gICAgJCgnLmpzLXBvcHVwLWluY2lkZW50X2V4cGxhaW4gdWwuaW5jaWRlbnRfbGlzdCA+IGxpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0ICRzZWxmID0gJCh0aGlzKTtcbiAgICAgICAgY29uc29sZS5sb2coJHNlbGYuZmluZCgncC5ub3RlJykudGV4dCgpKTtcbiAgICAgICAgbXlBbGVydCgkc2VsZi5maW5kKCdwLm5vdGUnKS5odG1sKCksICRzZWxmLmZpbmQoJ2EnKS50ZXh0KCkpO1xuICAgIH0pO1xuXG4gICAgJCgnLmZvbnRfc2l6ZV9hZGp1c3QgLmNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5mb250X3NpemVfYWRqdXN0JykuaGlkZSgpO1xuICAgIH0pO1xuICAgICQoJy5qcy1mb250X3NpemVfYWRqdXN0Jykub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0ICRzZWxmID0gJCh0aGlzKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNjZW5hcmlvRm9udFNpemUgPSAkc2VsZi52YWwoKTtcbiAgICAgICAgJCgnLnB1YmxpY19zaGVldCcpLmNzcyh7J2ZvbnQtc2l6ZSc6ICRzZWxmLnZhbCgpKydweCd9KTtcbiAgICAgICAgJCgnLndyaXRlcl93cmFwcGVyJykuY3NzKHsnZm9udC1zaXplJzogJHNlbGYudmFsKCkrJ3B4J30pO1xuICAgIH0pO1xufVxuXG5pZigkKCcjcXVpei1zdHJpbmdzX3dyYXBwZXInKS5sZW5ndGggPiAwKSB7XG4gICAgLy8g44CM6ISa5pys5a6244G444Gu5oyH6Yed44CN5b2T44Gm44Kv44Kk44K6XG4gICAgd2luZG93LmNvbmZpcm1Ub1Nob3dIaW50ID0gYXN5bmMgcyA9PiB7XG4gICAgICAgIGlmICgkKCdkZC5hZHZpY2UgPiAuY29udGVudCcpLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICAgICByZXR1cm4ge3Jlc3VsdDonb2snfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBteUNvbmZpcm0ocyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc0hpbnRMYWJlbCA9ICQoJyNxdWl6LWhpbnRfbGFiZWwnKS50ZXh0KCk7XG4gICAgY29uc3Qgc0NvbmZpcm0gPSAkKCcjcXVpei1jb25maXJtX3RvX3Nob3dfaGludCcpLnRleHQoKTtcblxuICAgIFtcbiAgICAgICAgWycuc2NlbmFyaW9fdGl0bGUnLCAnI3F1aXotbGFiZWxfdGl0bGUnXSxcbiAgICAgICAgWycucHJpdmF0ZV9zaGVldCAuZGlmZmljdWx0eScsICcjcXVpei1sYWJlbF9kaWZmJ10sXG4gICAgICAgIFsnZGQuZmVhdHVyZScsICcjcXVpei1sYWJlbF9mZWF0dXJlJ10sXG4gICAgICAgIFsnZGQuc3RvcnknLCAnI3F1aXotbGFiZWxfc3RvcnknXSxcbiAgICBdLmZvckVhY2goaXQgPT4ge1xuICAgICAgICBsZXQgJGRvbSA9ICQoaXRbMF0pO1xuICAgICAgICBpZiAoJGRvbS5sZW5ndGggPD0gMCkgcmV0dXJuO1xuICAgICAgICBsZXQgc0xhYmVsID0gJChpdFsxXSkudGV4dCgpO1xuICAgICAgICAkZG9tLmNoaWxkcmVuKCkuaGlkZSgpO1xuICAgICAgICBsZXQgJHRtcCA9ICQoJzxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+Jyk7XG4gICAgICAgICRkb20uYXBwZW5kKCR0bXApO1xuICAgICAgICAkdG1wLnRleHQoc0hpbnRMYWJlbC5yZXBsYWNlKCdfX19MQUJFTF9fXycsIHNMYWJlbCkpO1xuICAgICAgICAkdG1wLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgJHNlbGYgPSAkKHRoaXMpO1xuICAgICAgICAgICAgY29uc3QgdGhlQ29uZmlybSA9IHNDb25maXJtLnJlcGxhY2UoJ19fX0xBQkVMX19fJywgc0xhYmVsKTtcbiAgICAgICAgICAgIGNvbnN0IHtyZXN1bHR9ID0gYXdhaXQgY29uZmlybVRvU2hvd0hpbnQodGhlQ29uZmlybSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09ICdvaycpIHtcbiAgICAgICAgICAgICAgICAkc2VsZi5wYXJlbnQoKS5jaGlsZHJlbigpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgJHNlbGYucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgbGV0ICRkb20gPSAkKCdkZC5hZHZpY2UnKTtcbiAgICAkZG9tLmNoaWxkcmVuKCkuaGlkZSgpO1xuICAgIGxldCAkdG1wID0gJCgnPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj4nKTtcbiAgICAkZG9tLmFwcGVuZCgkdG1wKTtcbiAgICAkdG1wLnRleHQoJCgnI3F1aXotYW5zd2VyX2xhYmVsJykudGV4dCgpKTtcbiAgICAkdG1wLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCAkc2VsZiA9ICQodGhpcyk7XG4gICAgICAgIGNvbnN0IHtyZXN1bHR9ID0gYXdhaXQgY29uZmlybVRvU2hvd0hpbnQoJCgnI3F1aXotY29uZmlybV90b19zaG93X2Fuc3dlcicpLnRleHQoKSk7XG4gICAgICAgIGlmIChyZXN1bHQgPT0gJ29rJykge1xuICAgICAgICAgICAgJHNlbGYucGFyZW50KCkuY2hpbGRyZW4oKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgJHNlbGYucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIndpbmRvdy5vcGVuUG9wdXAgPSBhc3luYyAoY2xhc3NOYW1lLCBwcmV2ZW50SGFzaCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gJy5jLXBvcHVwLicrY2xhc3NOYW1lO1xuICAgIGNvbnN0ICRwb3B1cCA9ICQoc2VsZWN0b3IpO1xuXG4gICAgJCgnLmMtcG9wdXBbZGF0YS1vcGVuZWRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgJHNlbGYgPSAkKHRoaXMpO1xuICAgICAgICAkc2VsZi5hdHRyKCdkYXRhLW9wZW5lZCcsIE51bWJlcigkc2VsZi5hdHRyKCdkYXRhLW9wZW5lZCcpKSsxKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGlmIChwcmV2ZW50SGFzaCkge1xuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5wcmV2ZW50SGFzaCA9PSBwcmV2ZW50SGFzaCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICAncmVzdWx0JzogJ2Nsb3NlJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5wcmV2ZW50SGFzaCA9IHByZXZlbnRIYXNoO1xuICAgICAgICB9XG5cbiAgICAgICAgJHBvcHVwLmF0dHIoJ2RhdGEtb3BlbmVkJywgMSlcblxuICAgICAgICAkcG9wdXAuZmluZCgnLmZpbHRlci1hcmVhJykub2ZmKCdjbGljay5vcGVuX3BvcHVwJykub24oJ2NsaWNrLm9wZW5fcG9wdXAnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICdyZXN1bHQnOiAnY2xvc2UnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICAkcG9wdXAuZmluZCgnLmNsb3NlX2J1dHRvbicpLm9mZignY2xpY2sub3Blbl9wb3B1cCcpLm9uKCdjbGljay5vcGVuX3BvcHVwJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAncmVzdWx0JzogJ2Nsb3NlJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgJHBvcHVwLmZpbmQoJ1tkYXRhLXJlc3VsdF0nKS5vZmYoJ2NsaWNrLm9wZW5fcG9wdXAnKS5vbignY2xpY2sub3Blbl9wb3B1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgJHNlbGYgPSAkKHRoaXMpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgJ3Jlc3VsdCc6ICRzZWxmLmF0dHIoJ2RhdGEtcmVzdWx0JyksXG4gICAgICAgICAgICAgICAgJ2luZm8nOiAkc2VsZi5hdHRyKCdkYXRhLWluZm8nKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcm9taXNlO1xuICAgIH0gZmluYWxseSB7XG4gICAgICAgICQoJy5jLXBvcHVwW2RhdGEtb3BlbmVkXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCAkc2VsZiA9ICQodGhpcyk7XG4gICAgICAgICAgICBjb25zdCBvcGVuZWQgPSBOdW1iZXIoJHNlbGYuYXR0cignZGF0YS1vcGVuZWQnKSk7XG4gICAgICAgICAgICBpZiAob3BlbmVkIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAkc2VsZi5yZW1vdmVBdHRyKCdkYXRhLW9wZW5lZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkc2VsZi5hdHRyKCdkYXRhLW9wZW5lZCcsIG9wZW5lZC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxud2luZG93Lm15QWxlcnQgPSAobXNnLCB0aXRsZSA9ICcnLCBwcmV2ZW50SGFzaCA9IG51bGwpID0+IHtcbiAgICAkKCcuYy1wb3B1cC5qcy1wb3B1cC1teV9jb25maXJtIC5idXR0b25fd3JhcHBlciBbZGF0YS1yZXN1bHQ9Y2FuY2VsXScpLmhpZGUoKTtcbiAgICAkKCcuYy1wb3B1cC5qcy1wb3B1cC1teV9jb25maXJtIC5tZXNzYWdlJykuaHRtbChtc2cucmVwbGFjZShcIlxcXFxuXCIsICc8YnI+JykpO1xuICAgICQoJy5jLXBvcHVwLmpzLXBvcHVwLW15X2NvbmZpcm0gLnRpdGxlJykudGV4dCh0aXRsZSk7XG4gICAgcmV0dXJuIG9wZW5Qb3B1cCgnanMtcG9wdXAtbXlfY29uZmlybScsIHByZXZlbnRIYXNoKTtcbn07XG5cbndpbmRvdy5teUNvbmZpcm0gPSAobXNnLCB0aXRsZSA9ICcnKSA9PiB7XG4gICAgJCgnLmMtcG9wdXAuanMtcG9wdXAtbXlfY29uZmlybSAuYnV0dG9uX3dyYXBwZXIgW2RhdGEtcmVzdWx0PWNhbmNlbF0nKS5zaG93KCk7XG4gICAgJCgnLmMtcG9wdXAuanMtcG9wdXAtbXlfY29uZmlybSAubWVzc2FnZScpLmh0bWwobXNnLnJlcGxhY2UoXCJcXFxcblwiLCAnPGJyPicpKTtcbiAgICAkKCcuYy1wb3B1cC5qcy1wb3B1cC1teV9jb25maXJtIC50aXRsZScpLnRleHQodGl0bGUpO1xuICAgIHJldHVybiBvcGVuUG9wdXAoJ2pzLXBvcHVwLW15X2NvbmZpcm0nKTtcbn07XG4iLCIvKipcbiog44OV44Kh44Kk44Or44Ki44OD44OX44Ot44O844OJanNcbipcbiogQHBhcmFtIG9wdGlvbi5mb3JtQ2xhc3Mg44OV44Kh44Kk44Or44Ki44OD44OX44Ot44O844OJ44Kk44OZ44Oz44OI44KS5LuV6L6844KAZm9ybeOCv+OCsOOBruOCr+ODqeOCuVxuKiBAcGFyYW0gb3B0aW9uLm9uU3VjY2VzcygkaW5wdXQsIG1lZGlhKSDjg5XjgqHjgqTjg6vjgqLjg4Pjg5fjg63jg7zjg4nmiJDlip/mmYLjga7lh6bnkIbjgIIkaW5wdXTjga/lr77osaHjga5pbnB1dFt0eXBlPWZpbGVdXG4qIEBwYXJhbSBvcHRpb24ub25GYWlsdXJlKCRpbnB1dCwgcmVzKSDjg5XjgqHjgqTjg6vjgqLjg4Pjg5fjg63jg7zjg4nlpLHmlZfmmYLjga7lh6bnkIbjgIIkaW5wdXTjga/lr77osaHjga5pbnB1dFt0eXBlPWZpbGVdXG4qIEBwYXJhbSBvcHRpb24ub25Db21wbGV0ZSgkaW5wdXQsIHhocikg44OV44Kh44Kk44Or44Ki44OD44OX44Ot44O844OJ5a6M5LqG5pmC44Gu5Yem55CG44CCJGlucHV044Gv5a++6LGh44GuaW5wdXRbdHlwZT1maWxlXVxuKiBAcGFyYW0gb3B0aW9uLm9uUHJvZ3Jlc3MoJGlucHV0LCBwZXJjZW50KSDjg5XjgqHjgqTjg6vjgqLjg4Pjg5fjg63jg7zjg4nkuK3jga7lh6bnkIbjgIIkaW5wdXTjga/lr77osaHjga5pbnB1dFt0eXBlPWZpbGVdXG4qL1xud2luZG93LnNldEZpbGVVcGxvYWRFdmVudCA9IChvcHRpb24pID0+IHtcbiAgICBjb25zdCBfZm9ybUNsYXNzID0gKG9wdGlvbi5mb3JtQ2xhc3MgfHwgJycpLmxlbmd0aCA+IDAgPyAnLicrb3B0aW9uLmZvcm1DbGFzcyA6ICcnO1xuICAgIGNvbnN0IF9zZWxlY3RvciA9ICdmb3JtJytfZm9ybUNsYXNzKycgaW5wdXRbdHlwZT1maWxlXVtuYW1lPWZpbGVdJztcbiAgICBjb25zdCBfb25TdWNjZXNzID0gb3B0aW9uLm9uU3VjY2VzcyB8fCAoKCRpbnB1dCwgbWVkaWEpID0+IHsgbXlDb25zb2xlLmxvZyhtZWRpYSk7IH0pO1xuICAgIGNvbnN0IF9vbkZhaWx1cmUgPSBvcHRpb24ub25GYWlsdXJlIHx8ICgoJGlucHV0LCByZXMpID0+IHsgbXlDb25zb2xlLmVycm9yKHJlcyk7IH0pO1xuICAgIGNvbnN0IF9vbkNvbXBsZXRlID0gb3B0aW9uLm9uQ29tcGxldGUgfHwgKCgkaW5wdXQpID0+IHt9KTtcbiAgICBjb25zdCBfb25Qcm9ncmVzcyA9IG9wdGlvbi5vblByb2dyZXNzIHx8ICgoJGlucHV0LCBwZXJjZW50KSA9PiB7fSk7XG5cbiAgICBteUNvbnNvbGUubG9nKF9zZWxlY3Rvcik7XG5cbiAgICAkKCdib2R5Jykub24oJ2NoYW5nZScsIF9zZWxlY3RvciwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0ICRzZWxmID0gJCh0aGlzKTtcbiAgICAgICAgaWYgKCEkc2VsZi52YWwoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCAkZm9ybSA9ICRzZWxmLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgdXBsb2FkRmlsZSA9ICRzZWxmLnByb3AoJ2ZpbGVzJylbMF07XG4gICAgICAgIGNvbnN0IHRvVXNlcklkID0gJGZvcm0uZmluZCgnW25hbWU9dG9fdXNlcl9pZF0nKS52YWwoKTtcbiAgICAgICAgXG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3NUaW1lcjtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgQ0hVTktfU0laRSA9IDEyOCoxMDI0KjEwMjQ7XG4gICAgICAgICAgICAgICAgY29uc3QgUkVUUllfTElNSVQgPSA1O1xuICAgICAgICAgICAgICAgIGNvbnN0IFJFVFJZX0lOVEVSVkFMID0gMTAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IENIVU5LX1VQTE9BRF9VUkwgPSAkKCdtZXRhW25hbWU9Y2h1bmtfdXBsb2FkX3VybF0nKS5hdHRyKCdjb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgQ1NSRl9UT0tFTiA9ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHNlbnQgPSAwOyAvLyDpgIHkv6HmuIjjgb/jg5DjgqTjg4jmlbBcbiAgICAgICAgICAgICAgICBsZXQgbWF5YmVTZW50ID0gMDsgLy8g5py65LiK44Gu6YCB5L+h5riI44G/44OQ44Kk44OI5pWw44CC6KaL44GL44GR5LiK44Gu44OX44Ot44Kw44Os44K544OQ44O85pu05paw44Gu44Gf44KB44Gr5L2/44GGXG4gICAgICAgICAgICAgICAgbGV0IGNodW5rVXBsb2FkVXJsID0gQ0hVTktfVVBMT0FEX1VSTDtcbiAgICAgICAgICAgICAgICBsZXQgd2FpdDsgLy8g5oyH5pWw44OQ44OD44Kv44Kq44OV55SoXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGJwcyA9IDA7IC8vIOWQhOOCouODg+ODl+ODreODvOODieOBi+OCieioiOeul+OBleOCjOOBn0JQU1tieXRlL3NlY11cbiAgICAgICAgICAgICAgICBwcm9ncmVzc1RpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtYXliZVNlbnQgKz0gYnBzICogMC41O1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF5YmVTZW50ID4gc2VudCArIENIVU5LX1NJWkUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heWJlU2VudCA9IHNlbnQgKyBDSFVOS19TSVpFO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBwZXIgPSBtYXliZVNlbnQgKiAxMDAuMCAvIHVwbG9hZEZpbGUuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBlciA+IDk5LjkpIHBlciA9IDk5Ljk7XG4gICAgICAgICAgICAgICAgICAgIF9vblByb2dyZXNzKCRzZWxmLCBwZXIpO1xuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIF9vblByb2dyZXNzKCRzZWxmLCAwKTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoc2VudCA8IHVwbG9hZEZpbGUuc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmtFbmQgPSBzZW50ICsgQ0hVTktfU0laRTsgLy8g5LuK5Zue6YCB44KL44OB44Oj44Oz44Kv44Gu5pyr5bC+44OQ44Kk44OIXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZW50ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNodW5rRW5kID0gQ0hVTktfU0laRSAvIDQ7IC8vIOacgOWIneOBoOOBkeOBr+i7veOBhOWuuemHj+OBp+mAgeOCiuOAgeODrOOCueODneODs+OCueOCv+OCpOODoOOCkuioiOa4rOOBmeOCi1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaHVua0RhdGEgPSB1cGxvYWRGaWxlLnNsaWNlKHNlbnQsIGNodW5rRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgbXlDb25zb2xlLmxvZyhzZW50LCBjaHVua0VuZCk7XG4gICAgICAgICAgICAgICAgICAgIG15Q29uc29sZS5sb2coY2h1bmtEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZCgnZmlsZV9uYW1lJywgdXBsb2FkRmlsZS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKCdmaWxlX3NpemUnLCB1cGxvYWRGaWxlLnNpemUpO1xuICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoJ2NodW5rX2RhdGEnLCBjaHVua0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgd2FpdCA9IFJFVFJZX0lOVEVSVkFMO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMSA7IGkgPD0gUkVUUllfTElNSVQgOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwU3RhcnRBdCA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFqYXhSZXN1bHQgPSBhd2FpdCAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGNodW5rVXBsb2FkVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6IENTUkZfVE9LRU4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGZkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goYXN5bmMgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteUNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPj0gUkVUUllfTElNSVQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6KaP5a6a5Zue5pWw5aSx5pWX44GX44Gf44Gu44Gn44CB44Ki44OD44OX44Ot44O844OJ5Yem55CG5YWo5L2T44KS5aSx5pWX44Go44G/44Gq44GZXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZXJyLnN0YXR1cyA9PSA0MjIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gNDIy44Gv44OQ44Oq44OH44O844K344On44Oz44Ko44Op44O844Gq44Gu44Gn44CB5L2V5bqm57mw44KK6L+U44GX44Gm44KC44Kz44Kx44KL44Gv44GaXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmjIfmlbDjg5Djg4Pjgq/jgqrjg5VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAod2FpdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhaXQgKj0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhamF4UmVzdWx0Py5yZXN1bHQgPT0gJ09LJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOOBk+OBruODgeODo+ODs+OCr+OBr+mAgeS/oeaIkOWKn+OBl+OBn+OBruOBp+asoeOBq+ihjOOBj1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOmAgeS/oeaZgumWk+OCkuioiOa4rFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwVGltZSA9ICgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gdXBTdGFydEF0LmdldFRpbWUoKSkgLyAxMDAwLjA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnBzID0gKGNodW5rRW5kIC0gc2VudCkgLyB1cFRpbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5qyh44GuVVJM44GM5p2l44Gm44Gf44KJ5pu05paw44GZ44KLXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2h1bmtVcGxvYWRVcmwgPSBhamF4UmVzdWx0LnVybCA/PyBjaHVua1VwbG9hZFVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZW50ID0gY2h1bmtFbmQ7XG4gICAgICAgICAgICAgICAgICAgIG1heWJlU2VudCA9IGNodW5rRW5kO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MoJHNlbGYsIHNlbnQgKiAxMDAuMCAvIHVwbG9hZEZpbGUuc2l6ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIOWIhuWJsuOCouODg+ODl+ODreODvOODieWujOS6huOBl+OBn+OBruOBp+OAgeacgOW+jOOBq+ODleOCoeOCpOODq+OCkue1kOWQiOOBmeOCi1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbmlzaERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVfbmFtZTogdXBsb2FkRmlsZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBmaWxlX3NpemU6IHVwbG9hZEZpbGUuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgaXNfZmluaXNoOiB0cnVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKHRvVXNlcklkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmlzaERhdGEudG9fdXNlcl9pZCA9IHRvVXNlcklkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgbGFzdEFqYXhSZXN1bHQ7XG4gICAgICAgICAgICAgICAgd2FpdCA9IFJFVFJZX0lOVEVSVkFMO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8PSBSRVRSWV9MSU1JVCA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsYXN0QWpheFJlc3VsdCA9IGF3YWl0ICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGNodW5rVXBsb2FkVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiBDU1JGX1RPS0VOLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShmaW5pc2hEYXRhKSxcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goYXN5bmMgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG15Q29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID49IFJFVFJZX0xJTUlUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6KaP5a6a5Zue5pWw5aSx5pWX44GX44Gf44Gu44Gn44CB44Ki44OD44OX44Ot44O844OJ5Yem55CG5YWo5L2T44KS5aSx5pWX44Go44G/44Gq44GZXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGVyci5zdGF0dXMgPT0gNDIyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gNDIy44Gv44OQ44Oq44OH44O844K344On44Oz44Ko44Op44O844Gq44Gu44Gn44CB5L2V5bqm57mw44KK6L+U44GX44Gm44KC44Kz44Kx44KL44Gv44GaXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmjIfmlbDjg5Djg4Pjgq/jgqrjg5VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCh3YWl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWl0ICo9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RBamF4UmVzdWx0Py5tZWRpYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g44OV44Kh44Kk44Or57WQ5ZCIQVBJ44KC5oiQ5Yqf44GX44Gf44Gu44Gn5qyh44G4XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBteUNvbnNvbGUubG9nKGxhc3RBamF4UmVzdWx0KTtcbiAgICAgICAgICAgICAgICBpZiAobGFzdEFqYXhSZXN1bHQ/Lm1lZGlhKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWFqOmDqOe1guOCj+OBo+OBn+OBruOBp+aIkOWKn+aZguOCs+ODvOODq+ODkOODg+OCr+OCkuWPqeOBj1xuICAgICAgICAgICAgICAgICAgICBfb25TdWNjZXNzKCRzZWxmLCBsYXN0QWpheFJlc3VsdC5tZWRpYSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfntZDlkIhBUEnlpLHmlZcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBteUNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICBfb25GYWlsdXJlKCRzZWxmLCBlcnIpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHByb2dyZXNzVGltZXIpO1xuICAgICAgICAgICAgICAgIF9vbkNvbXBsZXRlKCRzZWxmKTtcbiAgICAgICAgICAgICAgICAkc2VsZi52YWwoJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgIH0pO1xufTtcblxuIiwid2luZG93LnNldEluZGV4TmFtZVRvTGlzdEl0ZW1zID0gKCkgPT4ge1xuICAgIGxldCBpZHggPSAxO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWluZGV4XScpLmZvckVhY2goZG9tID0+IHtcbiAgICAgICAgZG9tLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGlkeCsrKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pbmRleF0gW2RhdGEtbGlzdF9uYW1lXVtkYXRhLWtleV9uYW1lXScpLmZvckVhY2goZG9tID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdF9uYW1lJykrJ1snK2RvbS5jbG9zZXN0KCdbZGF0YS1pbmRleF0nKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSsnXVsnK2RvbS5nZXRBdHRyaWJ1dGUoJ2RhdGEta2V5X25hbWUnKSsnXSc7XG4gICAgICAgIGRvbS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBuYW1lKTtcbiAgICB9KTtcbn07XG5cbiQoJ2Zvcm0gLnN1Ym1pdF9idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCAkc2VsZiA9ICQodGhpcyk7XG4gICAgY29uc3QgJGZvcm0gPSAkc2VsZi5jbG9zZXN0KCdmb3JtJyk7XG4gICAgY29uc3Qgb3JpZ2luYWxUYXJnZXQgPSAkZm9ybS5hdHRyKCd0YXJnZXQnKTtcblxuICAgIGlmICgkc2VsZi5hdHRyKCdkYXRhLXRhcmdldCcpKSB7XG4gICAgICAgICRmb3JtLmF0dHIoJ3RhcmdldCcsICRzZWxmLmF0dHIoJ2RhdGEtdGFyZ2V0JykpO1xuICAgIH1cbiAgICBpZiAoJHNlbGYuYXR0cignZGF0YS1hY3Rpb24nKSkge1xuICAgICAgICAkZm9ybS5hdHRyKCdhY3Rpb24nLCAkc2VsZi5hdHRyKCdkYXRhLWFjdGlvbicpKTtcbiAgICB9XG4gICAgJGZvcm0uc3VibWl0KCk7XG5cbiAgICBpZiAob3JpZ2luYWxUYXJnZXQpIHtcbiAgICAgICAgJGZvcm0uYXR0cigndGFyZ2V0Jywgb3JpZ2luYWxUYXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRmb3JtLnJlbW92ZUF0dHIoJ3RhcmdldCcpO1xuICAgIH1cbn0pO1xuXG4kKCcuanMtbGFuZ3VhZ2Vfc2V0dGluZycpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS5zdWJtaXQoKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAvLyB0ZXh0YXJlYeOCv+OCsOOCkuWFqOOBpuWPluW+l1xuICBjb25zdCB0ZXh0YXJlYUVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZXh0YXJlYVwiKTtcblxuICB0ZXh0YXJlYUVscy5mb3JFYWNoKCh0ZXh0YXJlYUVsKSA9PiB7XG4gICAgLy8g44OH44OV44Kp44Or44OI5YCk44Go44GX44Gm44K544K/44Kk44Or5bGe5oCn44KS5LuY5LiOXG4gICAgdGV4dGFyZWFFbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgaGVpZ2h0OiAke3RleHRhcmVhRWwuc2Nyb2xsSGVpZ2h0fXB4O2ApO1xuICAgIC8vIGlucHV044Kk44OZ44Oz44OI44GM55m655Sf44GZ44KL44Gf44Gz44Gr6Zai5pWw5ZG844Gz5Ye644GXXG4gICAgdGV4dGFyZWFFbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgc2V0VGV4dGFyZWFIZWlnaHQpO1xuICB9KTtcblxuICAvLyB0ZXh0YXJlYeOBrumrmOOBleOCkuioiOeul+OBl+OBpuaMh+WumuOBmeOCi+mWouaVsFxuICBmdW5jdGlvbiBzZXRUZXh0YXJlYUhlaWdodCgpIHtcbiAgICB0aGlzLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xuICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5zY3JvbGxIZWlnaHR9cHhgO1xuICB9XG59KTtcblxud2luZG93LmFqYXhTdWJtaXQgPSBhc3luYyAkZm9ybSA9PiB7XG4gICAgcmV0dXJuIGF3YWl0ICQuYWpheCh7XG4gICAgICAgIHVybDogJGZvcm0uYXR0cignYWN0aW9uJyksXG4gICAgICAgIHR5cGU6ICRmb3JtLmF0dHIoJ21ldGhvZCcpLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogJCgnW25hbWU9Y3NyZi10b2tlbl0nKS5hdHRyKCdjb250ZW50JyksXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6ICRmb3JtLnNlcmlhbGl6ZSgpLFxuICAgIH0pO1xufTtcblxuLy8g6ISa5pys55S76Z2i44Gu44OV44Kp44Oz44OI44K144Kk44K66Kq/5pW05qmf6IO9XG4kKCcuanMtZm9udF9zaXplX2J1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAkKCcjbWVudV90b2dnbGUnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgIGlmICgkKCcuZm9udF9zaXplX2FkanVzdCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJCgnLmZvbnRfc2l6ZV9hZGp1c3QnKS5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbXlBbGVydCgkKCdbZGF0YS1vbmx5X3NjZW5hcmlvX3Nob3ddJykuYXR0cignZGF0YS1vbmx5X3NjZW5hcmlvX3Nob3cnKSk7XG4gICAgfVxufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsicmVxdWlyZSIsIndpbmRvdyIsIl8iLCJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsIiQiLCJoYXNDbGFzcyIsInVwZGF0ZUxpc3RzIiwic2V0SW5kZXhOYW1lVG9MaXN0SXRlbXMiLCJjcm93ZENyaW1pbmFsTGlzdEh0bWwiLCJjcmltaW5hbExpc3RIdG1sIiwiZWFjaCIsIiRvcHRpb24iLCJ2YWwiLCJ0ZXh0IiwiJHNlbGVjdCIsIiRzZWxlY3RJbmNpZGVudCIsImNsb3Nlc3QiLCJmaW5kIiwiaW5jaWRlbnRJZCIsIk51bWJlciIsImNoYXJhSWQiLCJDUk9XRF9JTkNJREVOVF9JRFMiLCJpbmNsdWRlcyIsImh0bWwiLCJjbG9uZSIsInN3aXRjaENyYXp5VHJ1dGhTZWxlY3QiLCJoaWRlIiwiYXR0ciIsInNob3ciLCJjbGljayIsIm9uIiwiZCIsIiRkb20iLCIkc2VsZiIsImNoYXJhTmFtZSIsIm1zZyIsIkNIQVJBX0RFTEVURV9DT05GSVJNX01FU1NBR0UiLCJyZXBsYWNlIiwibGVuZ3RoIiwibXlDb25maXJtIiwicmVzdWx0IiwicmVtb3ZlIiwicmVtb3ZlQ2xhc3MiLCJhcHBlbmQiLCJteUFsZXJ0IiwidG9nZ2xlQ2xhc3MiLCJkaWFsb2dNZXNzYWdlIiwiYWRkQ2xhc3MiLCJoYXNfc2hvd19pbml0aWFsX2JvYXJkIiwiZ3RhZyIsIiRwIiwiYWpheFN1Ym1pdCIsInJlcyIsImxpa2VzIiwibWVzc2FnZSIsIm9wZW5Qb3B1cCIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJzY2VuYXJpb0ZvbnRTaXplIiwiY3NzIiwiY29uZmlybVRvU2hvd0hpbnQiLCJzIiwiaXMiLCJzSGludExhYmVsIiwic0NvbmZpcm0iLCJmb3JFYWNoIiwiaXQiLCJzTGFiZWwiLCJjaGlsZHJlbiIsIiR0bXAiLCJ0aGVDb25maXJtIiwicGFyZW50IiwicmVtb3ZlQXR0ciIsImNsYXNzTmFtZSIsInByZXZlbnRIYXNoIiwic2VsZWN0b3IiLCIkcG9wdXAiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvZmYiLCJvcGVuZWQiLCJ0aXRsZSIsInNldEZpbGVVcGxvYWRFdmVudCIsIm9wdGlvbiIsIl9mb3JtQ2xhc3MiLCJmb3JtQ2xhc3MiLCJfc2VsZWN0b3IiLCJfb25TdWNjZXNzIiwib25TdWNjZXNzIiwiJGlucHV0IiwibWVkaWEiLCJteUNvbnNvbGUiLCJfb25GYWlsdXJlIiwib25GYWlsdXJlIiwiZXJyb3IiLCJfb25Db21wbGV0ZSIsIm9uQ29tcGxldGUiLCJfb25Qcm9ncmVzcyIsIm9uUHJvZ3Jlc3MiLCJwZXJjZW50IiwiJGZvcm0iLCJ1cGxvYWRGaWxlIiwicHJvcCIsInRvVXNlcklkIiwiQ0hVTktfU0laRSIsIlJFVFJZX0xJTUlUIiwiUkVUUllfSU5URVJWQUwiLCJDSFVOS19VUExPQURfVVJMIiwiQ1NSRl9UT0tFTiIsInNlbnQiLCJtYXliZVNlbnQiLCJjaHVua1VwbG9hZFVybCIsImJwcyIsInByb2dyZXNzVGltZXIiLCJzZXRJbnRlcnZhbCIsInBlciIsInNpemUiLCJjaHVua0VuZCIsImNodW5rRGF0YSIsInNsaWNlIiwiZmQiLCJGb3JtRGF0YSIsIm5hbWUiLCJ3YWl0IiwiaSIsInVwU3RhcnRBdCIsIkRhdGUiLCJhamF4IiwidHlwZSIsInVybCIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCJkYXRhIiwiZXJyIiwic3RhdHVzIiwic2xlZXAiLCJhamF4UmVzdWx0IiwidXBUaW1lIiwiZ2V0VGltZSIsImZpbmlzaERhdGEiLCJmaWxlX25hbWUiLCJmaWxlX3NpemUiLCJpc19maW5pc2giLCJ0b191c2VyX2lkIiwiSlNPTiIsInN0cmluZ2lmeSIsImxhc3RBamF4UmVzdWx0IiwiRXJyb3IiLCJjbGVhckludGVydmFsIiwiaWR4IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZG9tIiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwib3JpZ2luYWxUYXJnZXQiLCJzdWJtaXQiLCJhZGRFdmVudExpc3RlbmVyIiwidGV4dGFyZWFFbHMiLCJ0ZXh0YXJlYUVsIiwic2Nyb2xsSGVpZ2h0Iiwic2V0VGV4dGFyZWFIZWlnaHQiLCJzdHlsZSIsImhlaWdodCIsInNlcmlhbGl6ZSJdLCJzb3VyY2VSb290IjoiIn0=