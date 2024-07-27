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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzdFLElBQUksQ0FBQyxRQUFRLENBQUM7Y0FDMUJ6QixPQUFPLEVBQUU7Z0JBQ0wsY0FBYyxFQUFFRSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQ3VCLElBQUksQ0FBQyxTQUFTO2NBQ3pELENBQUM7Y0FDRDZHLElBQUksRUFBRWhDLEtBQUssQ0FBQ2dFLFNBQVM7WUFDekIsQ0FBQyxDQUFDO1VBQUE7WUFBQTtVQUFBO1VBQUE7WUFBQTtRQUFBO01BQUE7SUFBQTtFQUFBLENBQ0w7RUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFFRDtBQUNBcEssQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMwQixFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVk7RUFDOUMxQixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUNzRyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztFQUN4QyxJQUFJdEcsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUNrQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0lBQ25DbEMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUN3QixJQUFJLEVBQUU7RUFDakMsQ0FBQyxNQUFNO0lBQ0hnQixPQUFPLENBQUN4QyxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQ3VCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0VBQzNFO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUN4RUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2luZGl2aXN1YWwvbXlfc2NlbmFyaW8tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9pbmRpdmlzdWFsL3NjZW5hcmlvLXNob3cuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BvcHVwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy91cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3Nhc3MvYXBwLnNjc3M/YTgwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCcuL2Jvb3RzdHJhcCcpO1xucmVxdWlyZSgnLi91cGxvYWQnKTtcbnJlcXVpcmUoJy4vcG9wdXAnKTtcbnJlcXVpcmUoJy4vdXRpbGl0eScpO1xuXG5yZXF1aXJlKCcuL2luZGl2aXN1YWwvbXlfc2NlbmFyaW8tY3JlYXRlJyk7XG5yZXF1aXJlKCcuL2luZGl2aXN1YWwvc2NlbmFyaW8tc2hvdycpO1xuXG4iLCJ3aW5kb3cuXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuXG4vKipcbiAqIFdlJ2xsIGxvYWQgdGhlIGF4aW9zIEhUVFAgbGlicmFyeSB3aGljaCBhbGxvd3MgdXMgdG8gZWFzaWx5IGlzc3VlIHJlcXVlc3RzXG4gKiB0byBvdXIgTGFyYXZlbCBiYWNrLWVuZC4gVGhpcyBsaWJyYXJ5IGF1dG9tYXRpY2FsbHkgaGFuZGxlcyBzZW5kaW5nIHRoZVxuICogQ1NSRiB0b2tlbiBhcyBhIGhlYWRlciBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgdGhlIFwiWFNSRlwiIHRva2VuIGNvb2tpZS5cbiAqL1xuXG53aW5kb3cuYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbi8qKlxuICogRWNobyBleHBvc2VzIGFuIGV4cHJlc3NpdmUgQVBJIGZvciBzdWJzY3JpYmluZyB0byBjaGFubmVscyBhbmQgbGlzdGVuaW5nXG4gKiBmb3IgZXZlbnRzIHRoYXQgYXJlIGJyb2FkY2FzdCBieSBMYXJhdmVsLiBFY2hvIGFuZCBldmVudCBicm9hZGNhc3RpbmdcbiAqIGFsbG93cyB5b3VyIHRlYW0gdG8gZWFzaWx5IGJ1aWxkIHJvYnVzdCByZWFsLXRpbWUgd2ViIGFwcGxpY2F0aW9ucy5cbiAqL1xuXG4vLyBpbXBvcnQgRWNobyBmcm9tICdsYXJhdmVsLWVjaG8nO1xuXG4vLyB3aW5kb3cuUHVzaGVyID0gcmVxdWlyZSgncHVzaGVyLWpzJyk7XG5cbi8vIHdpbmRvdy5FY2hvID0gbmV3IEVjaG8oe1xuLy8gICAgIGJyb2FkY2FzdGVyOiAncHVzaGVyJyxcbi8vICAgICBrZXk6IHByb2Nlc3MuZW52Lk1JWF9QVVNIRVJfQVBQX0tFWSxcbi8vICAgICBjbHVzdGVyOiBwcm9jZXNzLmVudi5NSVhfUFVTSEVSX0FQUF9DTFVTVEVSLFxuLy8gICAgIGZvcmNlVExTOiB0cnVlXG4vLyB9KTtcbiIsImlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ215X3NjZW5hcmlvLWNyZWF0ZScpKSB7XG4gICAgZnVuY3Rpb24gdXBkYXRlTGlzdHMoKSB7XG4gICAgICAgIHNldEluZGV4TmFtZVRvTGlzdEl0ZW1zKCk7XG5cbiAgICAgICAgY29uc3QgY3Jvd2RDcmltaW5hbExpc3RIdG1sID0gJCgnLmNsb25lX2Jhc2UgLmpzLWNyb3dkX2NyaW1pbmFsX2xpc3RfaHRtbCcpO1xuICAgICAgICBsZXQgY3JpbWluYWxMaXN0SHRtbCA9ICc8b3B0aW9uPjwvb3B0aW9uPic7XG4gICAgICAgICQoJ3NlbGVjdFtkYXRhLWtleV9uYW1lPWNoYXJhY3Rlcl9pZF0gb3B0aW9uOnNlbGVjdGVkJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0ICRvcHRpb24gPSAkKHRoaXMpO1xuICAgICAgICAgICAgY3JpbWluYWxMaXN0SHRtbCArPSAnPG9wdGlvbiB2YWx1ZT1cIicrJG9wdGlvbi52YWwoKSsnXCI+Jyskb3B0aW9uLnRleHQoKSsnPC9vcHRpb24+JztcbiAgICAgICAgfSk7XG4gICAgICAgICQoJ3NlbGVjdC5jcmltaW5hbCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCAkc2VsZWN0ID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGNvbnN0ICRzZWxlY3RJbmNpZGVudCA9ICRzZWxlY3QuY2xvc2VzdCgnLmluY2lkZW50X3dyYXBwZXInKS5maW5kKCdzZWxlY3QuaW5jaWRlbnQnKTtcbiAgICAgICAgICAgIGNvbnN0IGluY2lkZW50SWQgPSBOdW1iZXIoJHNlbGVjdEluY2lkZW50LnZhbCgpKTtcblxuICAgICAgICAgICAgY29uc3QgY2hhcmFJZCA9ICRzZWxlY3QudmFsKCk7XG4gICAgICAgICAgICBpZiAoQ1JPV0RfSU5DSURFTlRfSURTLmluY2x1ZGVzKGluY2lkZW50SWQpKSB7XG4gICAgICAgICAgICAgICAgJHNlbGVjdC5odG1sKGNyb3dkQ3JpbWluYWxMaXN0SHRtbC5jbG9uZSgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHNlbGVjdC5odG1sKGNyaW1pbmFsTGlzdEh0bWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJHNlbGVjdC52YWwoY2hhcmFJZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICQoKCkgPT4ge1xuICAgICAgICAkKCdbbmFtZT1kYXlzXScpLmNsaWNrKCk7XG4gICAgICAgIHVwZGF0ZUxpc3RzKCk7XG4gICAgfSk7XG5cbiAgICAkKCdbbmFtZT1kYXlzXScpLm9uKCdjaGFuZ2UgY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZCA9ICQodGhpcykudmFsKCk7XG4gICAgICAgICQoJy5zY2VuYXJpb19pbmNpZGVudF9saXN0ID4gbGlbZGF0YS1kYXldJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0ICRkb20gPSAkKHRoaXMpO1xuICAgICAgICAgICAgaWYgKCRkb20uYXR0cignZGF0YS1kYXknKSA8PSBkKSB7XG4gICAgICAgICAgICAgICAgJGRvbS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRkb20uaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgICQoJy5zY2VuYXJpb19jaGFyYWN0ZXJfbGlzdCcpLm9uKCdjbGljaycsICcuY2hhcmFjdGVyX3JvdyAuanMtY2hhcmFfZGVsZXRlX2J1dHRvbicsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCAkc2VsZiA9ICQodGhpcyk7XG4gICAgICAgIGNvbnN0IGNoYXJhTmFtZSA9ICRzZWxmLmNsb3Nlc3QoJy5jaGFyYWN0ZXJfcm93JykuZmluZCgnc2VsZWN0W2RhdGEta2V5X25hbWU9Y2hhcmFjdGVyX2lkXSBvcHRpb246c2VsZWN0ZWQnKS50ZXh0KCk7XG4gICAgICAgIGNvbnN0IG1zZyA9IENIQVJBX0RFTEVURV9DT05GSVJNX01FU1NBR0UucmVwbGFjZSgnX19fQ0hBUkFfX18nLCBjaGFyYU5hbWUpO1xuICAgICAgICBpZiAoJCgnLmNoYXJhY3Rlcl9yb3cnKS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjb25zdCB7cmVzdWx0fSA9IGF3YWl0IG15Q29uZmlybShtc2cpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PSAnb2snKSB7XG4gICAgICAgICAgICAgICAgJHNlbGYuY2xvc2VzdCgnLmNoYXJhY3Rlcl9yb3cnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVMaXN0cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgJCgnLnNjZW5hcmlvX2NoYXJhY3Rlcl9saXN0Jykub24oJ2NsaWNrIGNoYW5nZScsICdzZWxlY3RbZGF0YS1rZXlfbmFtZT1jaGFyYWN0ZXJfaWRdJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHVwZGF0ZUxpc3RzKCk7XG4gICAgfSk7XG4gICAgJCgnLnNjZW5hcmlvX2luY2lkZW50X2xpc3Qgc2VsZWN0LmluY2lkZW50Jykub24oJ2NsaWNrIGNoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICB1cGRhdGVMaXN0cygpO1xuICAgIH0pO1xuICAgICQoJy5zY2VuYXJpb19jaGFyYWN0ZXJfbGlzdCcpLm9uKCdjaGFuZ2UnLCAnLmNoYXJhY3Rlcl9yb3cgc2VsZWN0W2RhdGEta2V5X25hbWU9Y2hhcmFjdGVyX2lkXScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5jaGFyYWN0ZXJfcm93JykucmVtb3ZlQ2xhc3MoJ2lzLWVycm9yJyk7XG4gICAgfSk7XG4gICAgJCgnLmpzLWNoYXJhX2FkZF9idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgJGRvbSA9ICQoJy5jaGFyYWN0ZXJfcm93Omxhc3QnKS5jbG9uZSgpO1xuICAgICAgICAkZG9tLnJlbW92ZUNsYXNzKCdpcy1lcnJvcicpO1xuICAgICAgICAkKCcuc2NlbmFyaW9fY2hhcmFjdGVyX2xpc3QnKS5hcHBlbmQoJGRvbSk7XG4gICAgICAgIHVwZGF0ZUxpc3RzKCk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBzd2l0Y2hDcmF6eVRydXRoU2VsZWN0KCkge1xuICAgICAgICAkKCcuZm9yX2NyYXp5X3RydXRoJykuaGlkZSgpO1xuICAgICAgICAkKCdzZWxlY3QucnVsZV94JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpID09ICQoJyNjcmF6eV90cnV0aF9ydWxlX2lkJykuYXR0cignZGF0YS1ydWxlX2lkJykpIHtcbiAgICAgICAgICAgICAgICAkKCcuZm9yX2NyYXp5X3RydXRoJykuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3dpdGNoQ3JhenlUcnV0aFNlbGVjdCgpO1xuICAgICQoJ3NlbGVjdC5ydWxlX3gnKS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBzd2l0Y2hDcmF6eVRydXRoU2VsZWN0KCk7XG4gICAgfSk7XG5cbiAgICAkKCcuanMtd2hhdF9pc19xdWl6Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIG15QWxlcnQoJCgnI3doYXRfaXNfcXVpeicpLmh0bWwoKSk7XG4gICAgfSk7XG5cbiAgICAkKCcuanMtd2hhdF9pc19wbHVzJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIG15QWxlcnQoJCgnI3doYXRfaXNfcGx1c19tZXNzYWdlJykuaHRtbCgpKTtcbiAgICB9KTtcbn1cbiIsImlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ3NjZW5hcmlvLXNob3cnKSkge1xuICAgICQoJy5zdW1tYXJ5X3FyIGltZycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdzY2FsZWQnKTtcbiAgICB9KTtcblxuICAgICQoJy5qcy1zaG93X3ByaXZhdGVfc2hlZXQnKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZGlhbG9nTWVzc2FnZSA9ICQodGhpcykuYXR0cignZGF0YS1kaWFsb2dfbWVzc2FnZScpO1xuICAgICAgICBjb25zdCB7cmVzdWx0fSA9IGF3YWl0IG15Q29uZmlybShkaWFsb2dNZXNzYWdlKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PSAnb2snKSB7XG4gICAgICAgICAgICAkKCcucHJpdmF0ZV9zaGVldF93cmFwcGVyJykuYWRkQ2xhc3MoJ3Nob3dpbmcnKTtcbiAgICAgICAgICAgICQoJy5qcy1oaWRlX3ByaXZhdGVfc2hlZXQnKS5zaG93KCk7XG4gICAgICAgICAgICAkKCcuanMtc2hvd19wcml2YXRlX3NoZWV0JykuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgJCgnLmpzLWhpZGVfcHJpdmF0ZV9zaGVldCcpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgJCgnLnByaXZhdGVfc2hlZXRfd3JhcHBlcicpLnJlbW92ZUNsYXNzKCdzaG93aW5nJyk7XG4gICAgICAgICQoJy5qcy1oaWRlX3ByaXZhdGVfc2hlZXQnKS5oaWRlKCk7XG4gICAgICAgICQoJy5qcy1zaG93X3ByaXZhdGVfc2hlZXQnKS5zaG93KCk7XG4gICAgfSk7XG5cbiAgICB2YXIgaGFzX3Nob3dfaW5pdGlhbF9ib2FyZCA9IGZhbHNlO1xuICAgICQoJy5zaG93X2luaXRpYWxfYm9hcmRfd3JhcHBlcicpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKCFoYXNfc2hvd19pbml0aWFsX2JvYXJkKSB7XG4gICAgICAgICAgICBndGFnKCdldmVudCcsICdzaG93X2luaXRpYWxfYm9hcmQnKTtcbiAgICAgICAgICAgIGhhc19zaG93X2luaXRpYWxfYm9hcmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgICQoJy5pbml0aWFsX2JvYXJkX3dyYXBwZXInKS5zaG93KCk7XG4gICAgICAgICQoJy5zaG93X2luaXRpYWxfYm9hcmRfd3JhcHBlcicpLmhpZGUoKTtcbiAgICB9KTtcbiAgICAkKCcuaGlkZV9pbml0aWFsX2JvYXJkX3dyYXBwZXInKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICQoJy5pbml0aWFsX2JvYXJkX3dyYXBwZXInKS5oaWRlKCk7XG4gICAgICAgICQoJy5zaG93X2luaXRpYWxfYm9hcmRfd3JhcHBlcicpLnNob3coKTtcbiAgICB9KTtcblxuICAgICQoJy5qcy1saWtlX2J1dHRvbicpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCAkcCA9ICQodGhpcykuY2xvc2VzdCgncCcpO1xuICAgICAgICAkcC50b2dnbGVDbGFzcygnbGlrZWQnKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFqYXhTdWJtaXQoJHAuY2xvc2VzdCgnZm9ybScpKTtcbiAgICAgICAgICAgICRwLmZpbmQoJy5qcy1jb3VudCcpLnRleHQocmVzLmxpa2VzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgJHAudG9nZ2xlQ2xhc3MoJ2xpa2VkJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5qcy1ib29rbWFya19idXR0b24nKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgJHAgPSAkKHRoaXMpLmNsb3Nlc3QoJ3AnKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFqYXhTdWJtaXQoJHAuY2xvc2VzdCgnZm9ybScpKTtcbiAgICAgICAgICAgICRwLnRvZ2dsZUNsYXNzKCdib29rbWFya2VkJyk7XG4gICAgICAgICAgICBteUFsZXJ0KHJlcy5tZXNzYWdlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuanMtcGxlYXNlX2xvZ2luJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIG15QWxlcnQoJCh0aGlzKS5hdHRyKCdkYXRhLW1zZycpKTtcbiAgICB9KTtcblxuICAgICQoJ2EuaW5jaWRlbnRfZXhwbGFpbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBvcGVuUG9wdXAoJ2pzLXBvcHVwLWluY2lkZW50X2V4cGxhaW4nKTtcbiAgICB9KTtcbiAgICAkKCcuanMtcG9wdXAtaW5jaWRlbnRfZXhwbGFpbiB1bC5pbmNpZGVudF9saXN0ID4gbGknKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgJHNlbGYgPSAkKHRoaXMpO1xuICAgICAgICBjb25zb2xlLmxvZygkc2VsZi5maW5kKCdwLm5vdGUnKS50ZXh0KCkpO1xuICAgICAgICBteUFsZXJ0KCRzZWxmLmZpbmQoJ3Aubm90ZScpLmh0bWwoKSwgJHNlbGYuZmluZCgnYScpLnRleHQoKSk7XG4gICAgfSk7XG5cbiAgICAkKCcuZm9udF9zaXplX2FkanVzdCAuY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmZvbnRfc2l6ZV9hZGp1c3QnKS5oaWRlKCk7XG4gICAgfSk7XG4gICAgJCgnLmpzLWZvbnRfc2l6ZV9hZGp1c3QnKS5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgJHNlbGYgPSAkKHRoaXMpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2NlbmFyaW9Gb250U2l6ZSA9ICRzZWxmLnZhbCgpO1xuICAgICAgICAkKCcucHVibGljX3NoZWV0JykuY3NzKHsnZm9udC1zaXplJzogJHNlbGYudmFsKCkrJ3B4J30pO1xuICAgICAgICAkKCcucHJpdmF0ZV9zaGVldCcpLmNzcyh7J2ZvbnQtc2l6ZSc6ICRzZWxmLnZhbCgpKydweCd9KTtcbiAgICB9KTtcbiAgICBpZiAoTnVtYmVyKGxvY2FsU3RvcmFnZS5zY2VuYXJpb0ZvbnRTaXplKSA+IDApIHtcbiAgICAgICAgY29uc3QgZm9udFNpemUgPSBOdW1iZXIobG9jYWxTdG9yYWdlLnNjZW5hcmlvRm9udFNpemUpO1xuICAgICAgICAkKCcuanMtZm9udF9zaXplX2FkanVzdCcpLnZhbChmb250U2l6ZSk7XG4gICAgICAgICQoJy5wdWJsaWNfc2hlZXQnKS5jc3Moeydmb250LXNpemUnOiBmb250U2l6ZSsncHgnfSk7XG4gICAgICAgICQoJy5wcml2YXRlX3NoZWV0JykuY3NzKHsnZm9udC1zaXplJzogZm9udFNpemUrJ3B4J30pO1xuICAgIH1cbn1cblxuaWYoJCgnI3F1aXotc3RyaW5nc193cmFwcGVyJykubGVuZ3RoID4gMCkge1xuICAgIC8vIOOAjOiEmuacrOWutuOBuOOBruaMh+mHneOAjeW9k+OBpuOCr+OCpOOCulxuICAgIHdpbmRvdy5jb25maXJtVG9TaG93SGludCA9IGFzeW5jIHMgPT4ge1xuICAgICAgICBpZiAoJCgnZGQuYWR2aWNlID4gLmNvbnRlbnQnKS5pcygnOnZpc2libGUnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtyZXN1bHQ6J29rJ307XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgbXlDb25maXJtKHMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNIaW50TGFiZWwgPSAkKCcjcXVpei1oaW50X2xhYmVsJykudGV4dCgpO1xuICAgIGNvbnN0IHNDb25maXJtID0gJCgnI3F1aXotY29uZmlybV90b19zaG93X2hpbnQnKS50ZXh0KCk7XG5cbiAgICBbXG4gICAgICAgIFsnLnNjZW5hcmlvX3RpdGxlJywgJyNxdWl6LWxhYmVsX3RpdGxlJ10sXG4gICAgICAgIFsnLnByaXZhdGVfc2hlZXQgLmRpZmZpY3VsdHknLCAnI3F1aXotbGFiZWxfZGlmZiddLFxuICAgICAgICBbJ2RkLmZlYXR1cmUnLCAnI3F1aXotbGFiZWxfZmVhdHVyZSddLFxuICAgICAgICBbJ2RkLnN0b3J5JywgJyNxdWl6LWxhYmVsX3N0b3J5J10sXG4gICAgXS5mb3JFYWNoKGl0ID0+IHtcbiAgICAgICAgbGV0ICRkb20gPSAkKGl0WzBdKTtcbiAgICAgICAgaWYgKCRkb20ubGVuZ3RoIDw9IDApIHJldHVybjtcbiAgICAgICAgbGV0IHNMYWJlbCA9ICQoaXRbMV0pLnRleHQoKTtcbiAgICAgICAgJGRvbS5jaGlsZHJlbigpLmhpZGUoKTtcbiAgICAgICAgbGV0ICR0bXAgPSAkKCc8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPicpO1xuICAgICAgICAkZG9tLmFwcGVuZCgkdG1wKTtcbiAgICAgICAgJHRtcC50ZXh0KHNIaW50TGFiZWwucmVwbGFjZSgnX19fTEFCRUxfX18nLCBzTGFiZWwpKTtcbiAgICAgICAgJHRtcC5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0ICRzZWxmID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGNvbnN0IHRoZUNvbmZpcm0gPSBzQ29uZmlybS5yZXBsYWNlKCdfX19MQUJFTF9fXycsIHNMYWJlbCk7XG4gICAgICAgICAgICBjb25zdCB7cmVzdWx0fSA9IGF3YWl0IGNvbmZpcm1Ub1Nob3dIaW50KHRoZUNvbmZpcm0pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PSAnb2snKSB7XG4gICAgICAgICAgICAgICAgJHNlbGYucGFyZW50KCkuY2hpbGRyZW4oKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICRzZWxmLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGxldCAkZG9tID0gJCgnZGQuYWR2aWNlJyk7XG4gICAgJGRvbS5jaGlsZHJlbigpLmhpZGUoKTtcbiAgICBsZXQgJHRtcCA9ICQoJzxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+Jyk7XG4gICAgJGRvbS5hcHBlbmQoJHRtcCk7XG4gICAgJHRtcC50ZXh0KCQoJyNxdWl6LWFuc3dlcl9sYWJlbCcpLnRleHQoKSk7XG4gICAgJHRtcC5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgJHNlbGYgPSAkKHRoaXMpO1xuICAgICAgICBjb25zdCB7cmVzdWx0fSA9IGF3YWl0IGNvbmZpcm1Ub1Nob3dIaW50KCQoJyNxdWl6LWNvbmZpcm1fdG9fc2hvd19hbnN3ZXInKS50ZXh0KCkpO1xuICAgICAgICBpZiAocmVzdWx0ID09ICdvaycpIHtcbiAgICAgICAgICAgICRzZWxmLnBhcmVudCgpLmNoaWxkcmVuKCkucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICRzZWxmLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJ3aW5kb3cub3BlblBvcHVwID0gYXN5bmMgKGNsYXNzTmFtZSwgcHJldmVudEhhc2gpID0+IHtcbiAgICBjb25zdCBzZWxlY3RvciA9ICcuYy1wb3B1cC4nK2NsYXNzTmFtZTtcbiAgICBjb25zdCAkcG9wdXAgPSAkKHNlbGVjdG9yKTtcblxuICAgICQoJy5jLXBvcHVwW2RhdGEtb3BlbmVkXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0ICRzZWxmID0gJCh0aGlzKTtcbiAgICAgICAgJHNlbGYuYXR0cignZGF0YS1vcGVuZWQnLCBOdW1iZXIoJHNlbGYuYXR0cignZGF0YS1vcGVuZWQnKSkrMSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBpZiAocHJldmVudEhhc2gpIHtcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UucHJldmVudEhhc2ggPT0gcHJldmVudEhhc2gpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdCc6ICdjbG9zZScsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucHJldmVudEhhc2ggPSBwcmV2ZW50SGFzaDtcbiAgICAgICAgfVxuXG4gICAgICAgICRwb3B1cC5hdHRyKCdkYXRhLW9wZW5lZCcsIDEpXG5cbiAgICAgICAgJHBvcHVwLmZpbmQoJy5maWx0ZXItYXJlYScpLm9mZignY2xpY2sub3Blbl9wb3B1cCcpLm9uKCdjbGljay5vcGVuX3BvcHVwJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAncmVzdWx0JzogJ2Nsb3NlJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgJHBvcHVwLmZpbmQoJy5jbG9zZV9idXR0b24nKS5vZmYoJ2NsaWNrLm9wZW5fcG9wdXAnKS5vbignY2xpY2sub3Blbl9wb3B1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgJ3Jlc3VsdCc6ICdjbG9zZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgICRwb3B1cC5maW5kKCdbZGF0YS1yZXN1bHRdJykub2ZmKCdjbGljay5vcGVuX3BvcHVwJykub24oJ2NsaWNrLm9wZW5fcG9wdXAnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0ICRzZWxmID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICdyZXN1bHQnOiAkc2VsZi5hdHRyKCdkYXRhLXJlc3VsdCcpLFxuICAgICAgICAgICAgICAgICdpbmZvJzogJHNlbGYuYXR0cignZGF0YS1pbmZvJyksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJvbWlzZTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgICAkKCcuYy1wb3B1cFtkYXRhLW9wZW5lZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgJHNlbGYgPSAkKHRoaXMpO1xuICAgICAgICAgICAgY29uc3Qgb3BlbmVkID0gTnVtYmVyKCRzZWxmLmF0dHIoJ2RhdGEtb3BlbmVkJykpO1xuICAgICAgICAgICAgaWYgKG9wZW5lZCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgJHNlbGYucmVtb3ZlQXR0cignZGF0YS1vcGVuZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHNlbGYuYXR0cignZGF0YS1vcGVuZWQnLCBvcGVuZWQtMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbndpbmRvdy5teUFsZXJ0ID0gKG1zZywgdGl0bGUgPSAnJywgcHJldmVudEhhc2ggPSBudWxsKSA9PiB7XG4gICAgJCgnLmMtcG9wdXAuanMtcG9wdXAtbXlfY29uZmlybSAuYnV0dG9uX3dyYXBwZXIgW2RhdGEtcmVzdWx0PWNhbmNlbF0nKS5oaWRlKCk7XG4gICAgJCgnLmMtcG9wdXAuanMtcG9wdXAtbXlfY29uZmlybSAubWVzc2FnZScpLmh0bWwobXNnLnJlcGxhY2UoXCJcXFxcblwiLCAnPGJyPicpKTtcbiAgICAkKCcuYy1wb3B1cC5qcy1wb3B1cC1teV9jb25maXJtIC50aXRsZScpLnRleHQodGl0bGUpO1xuICAgIHJldHVybiBvcGVuUG9wdXAoJ2pzLXBvcHVwLW15X2NvbmZpcm0nLCBwcmV2ZW50SGFzaCk7XG59O1xuXG53aW5kb3cubXlDb25maXJtID0gKG1zZywgdGl0bGUgPSAnJykgPT4ge1xuICAgICQoJy5jLXBvcHVwLmpzLXBvcHVwLW15X2NvbmZpcm0gLmJ1dHRvbl93cmFwcGVyIFtkYXRhLXJlc3VsdD1jYW5jZWxdJykuc2hvdygpO1xuICAgICQoJy5jLXBvcHVwLmpzLXBvcHVwLW15X2NvbmZpcm0gLm1lc3NhZ2UnKS5odG1sKG1zZy5yZXBsYWNlKFwiXFxcXG5cIiwgJzxicj4nKSk7XG4gICAgJCgnLmMtcG9wdXAuanMtcG9wdXAtbXlfY29uZmlybSAudGl0bGUnKS50ZXh0KHRpdGxlKTtcbiAgICByZXR1cm4gb3BlblBvcHVwKCdqcy1wb3B1cC1teV9jb25maXJtJyk7XG59O1xuIiwiLyoqXG4qIOODleOCoeOCpOODq+OCouODg+ODl+ODreODvOODiWpzXG4qXG4qIEBwYXJhbSBvcHRpb24uZm9ybUNsYXNzIOODleOCoeOCpOODq+OCouODg+ODl+ODreODvOODieOCpOODmeODs+ODiOOCkuS7lei+vOOCgGZvcm3jgr/jgrDjga7jgq/jg6njgrlcbiogQHBhcmFtIG9wdGlvbi5vblN1Y2Nlc3MoJGlucHV0LCBtZWRpYSkg44OV44Kh44Kk44Or44Ki44OD44OX44Ot44O844OJ5oiQ5Yqf5pmC44Gu5Yem55CG44CCJGlucHV044Gv5a++6LGh44GuaW5wdXRbdHlwZT1maWxlXVxuKiBAcGFyYW0gb3B0aW9uLm9uRmFpbHVyZSgkaW5wdXQsIHJlcykg44OV44Kh44Kk44Or44Ki44OD44OX44Ot44O844OJ5aSx5pWX5pmC44Gu5Yem55CG44CCJGlucHV044Gv5a++6LGh44GuaW5wdXRbdHlwZT1maWxlXVxuKiBAcGFyYW0gb3B0aW9uLm9uQ29tcGxldGUoJGlucHV0LCB4aHIpIOODleOCoeOCpOODq+OCouODg+ODl+ODreODvOODieWujOS6huaZguOBruWHpueQhuOAgiRpbnB1dOOBr+WvvuixoeOBrmlucHV0W3R5cGU9ZmlsZV1cbiogQHBhcmFtIG9wdGlvbi5vblByb2dyZXNzKCRpbnB1dCwgcGVyY2VudCkg44OV44Kh44Kk44Or44Ki44OD44OX44Ot44O844OJ5Lit44Gu5Yem55CG44CCJGlucHV044Gv5a++6LGh44GuaW5wdXRbdHlwZT1maWxlXVxuKi9cbndpbmRvdy5zZXRGaWxlVXBsb2FkRXZlbnQgPSAob3B0aW9uKSA9PiB7XG4gICAgY29uc3QgX2Zvcm1DbGFzcyA9IChvcHRpb24uZm9ybUNsYXNzIHx8ICcnKS5sZW5ndGggPiAwID8gJy4nK29wdGlvbi5mb3JtQ2xhc3MgOiAnJztcbiAgICBjb25zdCBfc2VsZWN0b3IgPSAnZm9ybScrX2Zvcm1DbGFzcysnIGlucHV0W3R5cGU9ZmlsZV1bbmFtZT1maWxlXSc7XG4gICAgY29uc3QgX29uU3VjY2VzcyA9IG9wdGlvbi5vblN1Y2Nlc3MgfHwgKCgkaW5wdXQsIG1lZGlhKSA9PiB7IG15Q29uc29sZS5sb2cobWVkaWEpOyB9KTtcbiAgICBjb25zdCBfb25GYWlsdXJlID0gb3B0aW9uLm9uRmFpbHVyZSB8fCAoKCRpbnB1dCwgcmVzKSA9PiB7IG15Q29uc29sZS5lcnJvcihyZXMpOyB9KTtcbiAgICBjb25zdCBfb25Db21wbGV0ZSA9IG9wdGlvbi5vbkNvbXBsZXRlIHx8ICgoJGlucHV0KSA9PiB7fSk7XG4gICAgY29uc3QgX29uUHJvZ3Jlc3MgPSBvcHRpb24ub25Qcm9ncmVzcyB8fCAoKCRpbnB1dCwgcGVyY2VudCkgPT4ge30pO1xuXG4gICAgbXlDb25zb2xlLmxvZyhfc2VsZWN0b3IpO1xuXG4gICAgJCgnYm9keScpLm9uKCdjaGFuZ2UnLCBfc2VsZWN0b3IsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCAkc2VsZiA9ICQodGhpcyk7XG4gICAgICAgIGlmICghJHNlbGYudmFsKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkc2VsZi5jbG9zZXN0KCdmb3JtJyk7XG4gICAgICAgIGNvbnN0IHVwbG9hZEZpbGUgPSAkc2VsZi5wcm9wKCdmaWxlcycpWzBdO1xuICAgICAgICBjb25zdCB0b1VzZXJJZCA9ICRmb3JtLmZpbmQoJ1tuYW1lPXRvX3VzZXJfaWRdJykudmFsKCk7XG4gICAgICAgIFxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHByb2dyZXNzVGltZXI7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IENIVU5LX1NJWkUgPSAxMjgqMTAyNCoxMDI0O1xuICAgICAgICAgICAgICAgIGNvbnN0IFJFVFJZX0xJTUlUID0gNTtcbiAgICAgICAgICAgICAgICBjb25zdCBSRVRSWV9JTlRFUlZBTCA9IDEwMDtcbiAgICAgICAgICAgICAgICBjb25zdCBDSFVOS19VUExPQURfVVJMID0gJCgnbWV0YVtuYW1lPWNodW5rX3VwbG9hZF91cmxdJykuYXR0cignY29udGVudCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IENTUkZfVE9LRU4gPSAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBzZW50ID0gMDsgLy8g6YCB5L+h5riI44G/44OQ44Kk44OI5pWwXG4gICAgICAgICAgICAgICAgbGV0IG1heWJlU2VudCA9IDA7IC8vIOacuuS4iuOBrumAgeS/oea4iOOBv+ODkOOCpOODiOaVsOOAguimi+OBi+OBkeS4iuOBruODl+ODreOCsOODrOOCueODkOODvOabtOaWsOOBruOBn+OCgeOBq+S9v+OBhlxuICAgICAgICAgICAgICAgIGxldCBjaHVua1VwbG9hZFVybCA9IENIVU5LX1VQTE9BRF9VUkw7XG4gICAgICAgICAgICAgICAgbGV0IHdhaXQ7IC8vIOaMh+aVsOODkOODg+OCr+OCquODleeUqFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBicHMgPSAwOyAvLyDlkITjgqLjg4Pjg5fjg63jg7zjg4njgYvjgonoqIjnrpfjgZXjgozjgZ9CUFNbYnl0ZS9zZWNdXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbWF5YmVTZW50ICs9IGJwcyAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1heWJlU2VudCA+IHNlbnQgKyBDSFVOS19TSVpFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXliZVNlbnQgPSBzZW50ICsgQ0hVTktfU0laRTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgcGVyID0gbWF5YmVTZW50ICogMTAwLjAgLyB1cGxvYWRGaWxlLnNpemU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwZXIgPiA5OS45KSBwZXIgPSA5OS45O1xuICAgICAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcygkc2VsZiwgcGVyKTtcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcygkc2VsZiwgMCk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHNlbnQgPCB1cGxvYWRGaWxlLnNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNodW5rRW5kID0gc2VudCArIENIVU5LX1NJWkU7IC8vIOS7iuWbnumAgeOCi+ODgeODo+ODs+OCr+OBruacq+WwvuODkOOCpOODiFxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaHVua0VuZCA9IENIVU5LX1NJWkUgLyA0OyAvLyDmnIDliJ3jgaDjgZHjga/ou73jgYTlrrnph4/jgafpgIHjgorjgIHjg6zjgrnjg53jg7Pjgrnjgr/jgqTjg6DjgpLoqIjmuKzjgZnjgotcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2h1bmtEYXRhID0gdXBsb2FkRmlsZS5zbGljZShzZW50LCBjaHVua0VuZCk7XG4gICAgICAgICAgICAgICAgICAgIG15Q29uc29sZS5sb2coc2VudCwgY2h1bmtFbmQpO1xuICAgICAgICAgICAgICAgICAgICBteUNvbnNvbGUubG9nKGNodW5rRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoJ2ZpbGVfbmFtZScsIHVwbG9hZEZpbGUubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZCgnZmlsZV9zaXplJywgdXBsb2FkRmlsZS5zaXplKTtcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKCdjaHVua19kYXRhJywgY2h1bmtEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHdhaXQgPSBSRVRSWV9JTlRFUlZBTDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDEgOyBpIDw9IFJFVFJZX0xJTUlUIDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cFN0YXJ0QXQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhamF4UmVzdWx0ID0gYXdhaXQgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBjaHVua1VwbG9hZFVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiBDU1JGX1RPS0VOLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBmZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGFzeW5jIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlDb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID49IFJFVFJZX0xJTUlUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOimj+WumuWbnuaVsOWkseaVl+OBl+OBn+OBruOBp+OAgeOCouODg+ODl+ODreODvOODieWHpueQhuWFqOS9k+OCkuWkseaVl+OBqOOBv+OBquOBmVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGVyci5zdGF0dXMgPT0gNDIyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDQyMuOBr+ODkOODquODh+ODvOOCt+ODp+ODs+OCqOODqeODvOOBquOBruOBp+OAgeS9leW6pue5sOOCiui/lOOBl+OBpuOCguOCs+OCseOCi+OBr+OBmlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5oyH5pWw44OQ44OD44Kv44Kq44OVXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKHdhaXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWl0ICo9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWpheFJlc3VsdD8ucmVzdWx0ID09ICdPSycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDjgZPjga7jg4Hjg6Pjg7Pjgq/jga/pgIHkv6HmiJDlip/jgZfjgZ/jga7jgafmrKHjgavooYzjgY9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDpgIHkv6HmmYLplpPjgpLoqIjmuKxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cFRpbWUgPSAoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAtIHVwU3RhcnRBdC5nZXRUaW1lKCkpIC8gMTAwMC4wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJwcyA9IChjaHVua0VuZCAtIHNlbnQpIC8gdXBUaW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOasoeOBrlVSTOOBjOadpeOBpuOBn+OCieabtOaWsOOBmeOCi1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNodW5rVXBsb2FkVXJsID0gYWpheFJlc3VsdC51cmwgPz8gY2h1bmtVcGxvYWRVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2VudCA9IGNodW5rRW5kO1xuICAgICAgICAgICAgICAgICAgICBtYXliZVNlbnQgPSBjaHVua0VuZDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIF9vblByb2dyZXNzKCRzZWxmLCBzZW50ICogMTAwLjAgLyB1cGxvYWRGaWxlLnNpemUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDliIblibLjgqLjg4Pjg5fjg63jg7zjg4nlrozkuobjgZfjgZ/jga7jgafjgIHmnIDlvozjgavjg5XjgqHjgqTjg6vjgpLntZDlkIjjgZnjgotcbiAgICAgICAgICAgICAgICBjb25zdCBmaW5pc2hEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBmaWxlX25hbWU6IHVwbG9hZEZpbGUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZmlsZV9zaXplOiB1cGxvYWRGaWxlLnNpemUsXG4gICAgICAgICAgICAgICAgICAgIGlzX2ZpbmlzaDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmICh0b1VzZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICBmaW5pc2hEYXRhLnRvX3VzZXJfaWQgPSB0b1VzZXJJZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGxhc3RBamF4UmVzdWx0O1xuICAgICAgICAgICAgICAgIHdhaXQgPSBSRVRSWV9JTlRFUlZBTDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPD0gUkVUUllfTElNSVQgOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdEFqYXhSZXN1bHQgPSBhd2FpdCAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBjaHVua1VwbG9hZFVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogQ1NSRl9UT0tFTixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoZmluaXNoRGF0YSksXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGFzeW5jIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBteUNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+PSBSRVRSWV9MSU1JVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOimj+WumuWbnuaVsOWkseaVl+OBl+OBn+OBruOBp+OAgeOCouODg+ODl+ODreODvOODieWHpueQhuWFqOS9k+OCkuWkseaVl+OBqOOBv+OBquOBmVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihlcnIuc3RhdHVzID09IDQyMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDQyMuOBr+ODkOODquODh+ODvOOCt+ODp+ODs+OCqOODqeODvOOBquOBruOBp+OAgeS9leW6pue5sOOCiui/lOOBl+OBpuOCguOCs+OCseOCi+OBr+OBmlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5oyH5pWw44OQ44OD44Kv44Kq44OVXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAod2FpdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FpdCAqPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0QWpheFJlc3VsdD8ubWVkaWEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOODleOCoeOCpOODq+e1kOWQiEFQSeOCguaIkOWKn+OBl+OBn+OBruOBp+asoeOBuFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbXlDb25zb2xlLmxvZyhsYXN0QWpheFJlc3VsdCk7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3RBamF4UmVzdWx0Py5tZWRpYSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDlhajpg6jntYLjgo/jgaPjgZ/jga7jgafmiJDlip/mmYLjgrPjg7zjg6vjg5Djg4Pjgq/jgpLlj6njgY9cbiAgICAgICAgICAgICAgICAgICAgX29uU3VjY2Vzcygkc2VsZiwgbGFzdEFqYXhSZXN1bHQubWVkaWEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcign57WQ5ZCIQVBJ5aSx5pWXJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgbXlDb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgX29uRmFpbHVyZSgkc2VsZiwgZXJyKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChwcm9ncmVzc1RpbWVyKTtcbiAgICAgICAgICAgICAgICBfb25Db21wbGV0ZSgkc2VsZik7XG4gICAgICAgICAgICAgICAgJHNlbGYudmFsKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICB9KTtcbn07XG5cbiIsIndpbmRvdy5zZXRJbmRleE5hbWVUb0xpc3RJdGVtcyA9ICgpID0+IHtcbiAgICBsZXQgaWR4ID0gMTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pbmRleF0nKS5mb3JFYWNoKGRvbSA9PiB7XG4gICAgICAgIGRvbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpZHgrKyk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtaW5kZXhdIFtkYXRhLWxpc3RfbmFtZV1bZGF0YS1rZXlfbmFtZV0nKS5mb3JFYWNoKGRvbSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb20uZ2V0QXR0cmlidXRlKCdkYXRhLWxpc3RfbmFtZScpKydbJytkb20uY2xvc2VzdCgnW2RhdGEtaW5kZXhdJykuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykrJ11bJytkb20uZ2V0QXR0cmlidXRlKCdkYXRhLWtleV9uYW1lJykrJ10nO1xuICAgICAgICBkb20uc2V0QXR0cmlidXRlKCduYW1lJywgbmFtZSk7XG4gICAgfSk7XG59O1xuXG4kKCdmb3JtIC5zdWJtaXRfYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgJHNlbGYgPSAkKHRoaXMpO1xuICAgIGNvbnN0ICRmb3JtID0gJHNlbGYuY2xvc2VzdCgnZm9ybScpO1xuICAgIGNvbnN0IG9yaWdpbmFsVGFyZ2V0ID0gJGZvcm0uYXR0cigndGFyZ2V0Jyk7XG5cbiAgICBpZiAoJHNlbGYuYXR0cignZGF0YS10YXJnZXQnKSkge1xuICAgICAgICAkZm9ybS5hdHRyKCd0YXJnZXQnLCAkc2VsZi5hdHRyKCdkYXRhLXRhcmdldCcpKTtcbiAgICB9XG4gICAgaWYgKCRzZWxmLmF0dHIoJ2RhdGEtYWN0aW9uJykpIHtcbiAgICAgICAgJGZvcm0uYXR0cignYWN0aW9uJywgJHNlbGYuYXR0cignZGF0YS1hY3Rpb24nKSk7XG4gICAgfVxuICAgICRmb3JtLnN1Ym1pdCgpO1xuXG4gICAgaWYgKG9yaWdpbmFsVGFyZ2V0KSB7XG4gICAgICAgICRmb3JtLmF0dHIoJ3RhcmdldCcsIG9yaWdpbmFsVGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkZm9ybS5yZW1vdmVBdHRyKCd0YXJnZXQnKTtcbiAgICB9XG59KTtcblxuJCgnLmpzLWxhbmd1YWdlX3NldHRpbmcnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykuc3VibWl0KCk7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgLy8gdGV4dGFyZWHjgr/jgrDjgpLlhajjgablj5blvpdcbiAgY29uc3QgdGV4dGFyZWFFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidGV4dGFyZWFcIik7XG5cbiAgdGV4dGFyZWFFbHMuZm9yRWFjaCgodGV4dGFyZWFFbCkgPT4ge1xuICAgIC8vIOODh+ODleOCqeODq+ODiOWApOOBqOOBl+OBpuOCueOCv+OCpOODq+WxnuaAp+OCkuS7mOS4jlxuICAgIHRleHRhcmVhRWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYGhlaWdodDogJHt0ZXh0YXJlYUVsLnNjcm9sbEhlaWdodH1weDtgKTtcbiAgICAvLyBpbnB1dOOCpOODmeODs+ODiOOBjOeZuueUn+OBmeOCi+OBn+OBs+OBq+mWouaVsOWRvOOBs+WHuuOBl1xuICAgIHRleHRhcmVhRWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHNldFRleHRhcmVhSGVpZ2h0KTtcbiAgfSk7XG5cbiAgLy8gdGV4dGFyZWHjga7pq5jjgZXjgpLoqIjnrpfjgZfjgabmjIflrprjgZnjgovplqLmlbBcbiAgZnVuY3Rpb24gc2V0VGV4dGFyZWFIZWlnaHQoKSB7XG4gICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIjtcbiAgICB0aGlzLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgfVxufSk7XG5cbndpbmRvdy5hamF4U3VibWl0ID0gYXN5bmMgJGZvcm0gPT4ge1xuICAgIHJldHVybiBhd2FpdCAkLmFqYXgoe1xuICAgICAgICB1cmw6ICRmb3JtLmF0dHIoJ2FjdGlvbicpLFxuICAgICAgICB0eXBlOiAkZm9ybS5hdHRyKCdtZXRob2QnKSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6ICQoJ1tuYW1lPWNzcmYtdG9rZW5dJykuYXR0cignY29udGVudCcpLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiAkZm9ybS5zZXJpYWxpemUoKSxcbiAgICB9KTtcbn07XG5cbi8vIOiEmuacrOeUu+mdouOBruODleOCqeODs+ODiOOCteOCpOOCuuiqv+aVtOapn+iDvVxuJCgnLmpzLWZvbnRfc2l6ZV9idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnI21lbnVfdG9nZ2xlJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICBpZiAoJCgnLmZvbnRfc2l6ZV9hZGp1c3QnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICQoJy5mb250X3NpemVfYWRqdXN0Jykuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG15QWxlcnQoJCgnW2RhdGEtb25seV9zY2VuYXJpb19zaG93XScpLmF0dHIoJ2RhdGEtb25seV9zY2VuYXJpb19zaG93JykpO1xuICAgIH1cbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJ3aW5kb3ciLCJfIiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCIkIiwiaGFzQ2xhc3MiLCJ1cGRhdGVMaXN0cyIsInNldEluZGV4TmFtZVRvTGlzdEl0ZW1zIiwiY3Jvd2RDcmltaW5hbExpc3RIdG1sIiwiY3JpbWluYWxMaXN0SHRtbCIsImVhY2giLCIkb3B0aW9uIiwidmFsIiwidGV4dCIsIiRzZWxlY3QiLCIkc2VsZWN0SW5jaWRlbnQiLCJjbG9zZXN0IiwiZmluZCIsImluY2lkZW50SWQiLCJOdW1iZXIiLCJjaGFyYUlkIiwiQ1JPV0RfSU5DSURFTlRfSURTIiwiaW5jbHVkZXMiLCJodG1sIiwiY2xvbmUiLCJzd2l0Y2hDcmF6eVRydXRoU2VsZWN0IiwiaGlkZSIsImF0dHIiLCJzaG93IiwiY2xpY2siLCJvbiIsImQiLCIkZG9tIiwiJHNlbGYiLCJjaGFyYU5hbWUiLCJtc2ciLCJDSEFSQV9ERUxFVEVfQ09ORklSTV9NRVNTQUdFIiwicmVwbGFjZSIsImxlbmd0aCIsIm15Q29uZmlybSIsInJlc3VsdCIsInJlbW92ZSIsInJlbW92ZUNsYXNzIiwiYXBwZW5kIiwibXlBbGVydCIsInRvZ2dsZUNsYXNzIiwiZGlhbG9nTWVzc2FnZSIsImFkZENsYXNzIiwiaGFzX3Nob3dfaW5pdGlhbF9ib2FyZCIsImd0YWciLCIkcCIsImFqYXhTdWJtaXQiLCJyZXMiLCJsaWtlcyIsIm1lc3NhZ2UiLCJvcGVuUG9wdXAiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwic2NlbmFyaW9Gb250U2l6ZSIsImNzcyIsImZvbnRTaXplIiwiY29uZmlybVRvU2hvd0hpbnQiLCJzIiwiaXMiLCJzSGludExhYmVsIiwic0NvbmZpcm0iLCJmb3JFYWNoIiwiaXQiLCJzTGFiZWwiLCJjaGlsZHJlbiIsIiR0bXAiLCJ0aGVDb25maXJtIiwicGFyZW50IiwicmVtb3ZlQXR0ciIsImNsYXNzTmFtZSIsInByZXZlbnRIYXNoIiwic2VsZWN0b3IiLCIkcG9wdXAiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvZmYiLCJvcGVuZWQiLCJ0aXRsZSIsInNldEZpbGVVcGxvYWRFdmVudCIsIm9wdGlvbiIsIl9mb3JtQ2xhc3MiLCJmb3JtQ2xhc3MiLCJfc2VsZWN0b3IiLCJfb25TdWNjZXNzIiwib25TdWNjZXNzIiwiJGlucHV0IiwibWVkaWEiLCJteUNvbnNvbGUiLCJfb25GYWlsdXJlIiwib25GYWlsdXJlIiwiZXJyb3IiLCJfb25Db21wbGV0ZSIsIm9uQ29tcGxldGUiLCJfb25Qcm9ncmVzcyIsIm9uUHJvZ3Jlc3MiLCJwZXJjZW50IiwiJGZvcm0iLCJ1cGxvYWRGaWxlIiwicHJvcCIsInRvVXNlcklkIiwiQ0hVTktfU0laRSIsIlJFVFJZX0xJTUlUIiwiUkVUUllfSU5URVJWQUwiLCJDSFVOS19VUExPQURfVVJMIiwiQ1NSRl9UT0tFTiIsInNlbnQiLCJtYXliZVNlbnQiLCJjaHVua1VwbG9hZFVybCIsImJwcyIsInByb2dyZXNzVGltZXIiLCJzZXRJbnRlcnZhbCIsInBlciIsInNpemUiLCJjaHVua0VuZCIsImNodW5rRGF0YSIsInNsaWNlIiwiZmQiLCJGb3JtRGF0YSIsIm5hbWUiLCJ3YWl0IiwiaSIsInVwU3RhcnRBdCIsIkRhdGUiLCJhamF4IiwidHlwZSIsInVybCIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCJkYXRhIiwiZXJyIiwic3RhdHVzIiwic2xlZXAiLCJhamF4UmVzdWx0IiwidXBUaW1lIiwiZ2V0VGltZSIsImZpbmlzaERhdGEiLCJmaWxlX25hbWUiLCJmaWxlX3NpemUiLCJpc19maW5pc2giLCJ0b191c2VyX2lkIiwiSlNPTiIsInN0cmluZ2lmeSIsImxhc3RBamF4UmVzdWx0IiwiRXJyb3IiLCJjbGVhckludGVydmFsIiwiaWR4IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZG9tIiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwib3JpZ2luYWxUYXJnZXQiLCJzdWJtaXQiLCJhZGRFdmVudExpc3RlbmVyIiwidGV4dGFyZWFFbHMiLCJ0ZXh0YXJlYUVsIiwic2Nyb2xsSGVpZ2h0Iiwic2V0VGV4dGFyZWFIZWlnaHQiLCJzdHlsZSIsImhlaWdodCIsInNlcmlhbGl6ZSJdLCJzb3VyY2VSb290IjoiIn0=