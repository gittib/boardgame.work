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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLENBQUM7RUFDeEMsSUFBSXJHLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDa0MsTUFBTSxHQUFHLENBQUMsRUFBRTtJQUNuQ2xDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDd0IsSUFBSSxFQUFFO0VBQ2pDLENBQUMsTUFBTTtJQUNIZ0IsT0FBTyxDQUFDeEMsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUN1QixJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztFQUMzRTtBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDeEVGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9pbmRpdmlzdWFsL215X3NjZW5hcmlvLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaW5kaXZpc3VhbC9zY2VuYXJpby1zaG93LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXBsb2FkLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy91dGlsaXR5LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zYXNzL2FwcC5zY3NzP2E4MGIiXSwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi9ib290c3RyYXAnKTtcbnJlcXVpcmUoJy4vdXBsb2FkJyk7XG5yZXF1aXJlKCcuL3BvcHVwJyk7XG5yZXF1aXJlKCcuL3V0aWxpdHknKTtcblxucmVxdWlyZSgnLi9pbmRpdmlzdWFsL215X3NjZW5hcmlvLWNyZWF0ZScpO1xucmVxdWlyZSgnLi9pbmRpdmlzdWFsL3NjZW5hcmlvLXNob3cnKTtcblxuIiwid2luZG93Ll8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcblxuLyoqXG4gKiBXZSdsbCBsb2FkIHRoZSBheGlvcyBIVFRQIGxpYnJhcnkgd2hpY2ggYWxsb3dzIHVzIHRvIGVhc2lseSBpc3N1ZSByZXF1ZXN0c1xuICogdG8gb3VyIExhcmF2ZWwgYmFjay1lbmQuIFRoaXMgbGlicmFyeSBhdXRvbWF0aWNhbGx5IGhhbmRsZXMgc2VuZGluZyB0aGVcbiAqIENTUkYgdG9rZW4gYXMgYSBoZWFkZXIgYmFzZWQgb24gdGhlIHZhbHVlIG9mIHRoZSBcIlhTUkZcIiB0b2tlbiBjb29raWUuXG4gKi9cblxud2luZG93LmF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuXG4vKipcbiAqIEVjaG8gZXhwb3NlcyBhbiBleHByZXNzaXZlIEFQSSBmb3Igc3Vic2NyaWJpbmcgdG8gY2hhbm5lbHMgYW5kIGxpc3RlbmluZ1xuICogZm9yIGV2ZW50cyB0aGF0IGFyZSBicm9hZGNhc3QgYnkgTGFyYXZlbC4gRWNobyBhbmQgZXZlbnQgYnJvYWRjYXN0aW5nXG4gKiBhbGxvd3MgeW91ciB0ZWFtIHRvIGVhc2lseSBidWlsZCByb2J1c3QgcmVhbC10aW1lIHdlYiBhcHBsaWNhdGlvbnMuXG4gKi9cblxuLy8gaW1wb3J0IEVjaG8gZnJvbSAnbGFyYXZlbC1lY2hvJztcblxuLy8gd2luZG93LlB1c2hlciA9IHJlcXVpcmUoJ3B1c2hlci1qcycpO1xuXG4vLyB3aW5kb3cuRWNobyA9IG5ldyBFY2hvKHtcbi8vICAgICBicm9hZGNhc3RlcjogJ3B1c2hlcicsXG4vLyAgICAga2V5OiBwcm9jZXNzLmVudi5NSVhfUFVTSEVSX0FQUF9LRVksXG4vLyAgICAgY2x1c3RlcjogcHJvY2Vzcy5lbnYuTUlYX1BVU0hFUl9BUFBfQ0xVU1RFUixcbi8vICAgICBmb3JjZVRMUzogdHJ1ZVxuLy8gfSk7XG4iLCJpZiAoJCgnYm9keScpLmhhc0NsYXNzKCdteV9zY2VuYXJpby1jcmVhdGUnKSkge1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUxpc3RzKCkge1xuICAgICAgICBzZXRJbmRleE5hbWVUb0xpc3RJdGVtcygpO1xuXG4gICAgICAgIGNvbnN0IGNyb3dkQ3JpbWluYWxMaXN0SHRtbCA9ICQoJy5jbG9uZV9iYXNlIC5qcy1jcm93ZF9jcmltaW5hbF9saXN0X2h0bWwnKTtcbiAgICAgICAgbGV0IGNyaW1pbmFsTGlzdEh0bWwgPSAnPG9wdGlvbj48L29wdGlvbj4nO1xuICAgICAgICAkKCdzZWxlY3RbZGF0YS1rZXlfbmFtZT1jaGFyYWN0ZXJfaWRdIG9wdGlvbjpzZWxlY3RlZCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCAkb3B0aW9uID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGNyaW1pbmFsTGlzdEh0bWwgKz0gJzxvcHRpb24gdmFsdWU9XCInKyRvcHRpb24udmFsKCkrJ1wiPicrJG9wdGlvbi50ZXh0KCkrJzwvb3B0aW9uPic7XG4gICAgICAgIH0pO1xuICAgICAgICAkKCdzZWxlY3QuY3JpbWluYWwnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgJHNlbGVjdCA9ICQodGhpcyk7XG4gICAgICAgICAgICBjb25zdCAkc2VsZWN0SW5jaWRlbnQgPSAkc2VsZWN0LmNsb3Nlc3QoJy5pbmNpZGVudF93cmFwcGVyJykuZmluZCgnc2VsZWN0LmluY2lkZW50Jyk7XG4gICAgICAgICAgICBjb25zdCBpbmNpZGVudElkID0gTnVtYmVyKCRzZWxlY3RJbmNpZGVudC52YWwoKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoYXJhSWQgPSAkc2VsZWN0LnZhbCgpO1xuICAgICAgICAgICAgaWYgKENST1dEX0lOQ0lERU5UX0lEUy5pbmNsdWRlcyhpbmNpZGVudElkKSkge1xuICAgICAgICAgICAgICAgICRzZWxlY3QuaHRtbChjcm93ZENyaW1pbmFsTGlzdEh0bWwuY2xvbmUoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRzZWxlY3QuaHRtbChjcmltaW5hbExpc3RIdG1sKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICRzZWxlY3QudmFsKGNoYXJhSWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAkKCgpID0+IHtcbiAgICAgICAgJCgnW25hbWU9ZGF5c10nKS5jbGljaygpO1xuICAgICAgICB1cGRhdGVMaXN0cygpO1xuICAgIH0pO1xuXG4gICAgJCgnW25hbWU9ZGF5c10nKS5vbignY2hhbmdlIGNsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGQgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAkKCcuc2NlbmFyaW9faW5jaWRlbnRfbGlzdCA+IGxpW2RhdGEtZGF5XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCAkZG9tID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGlmICgkZG9tLmF0dHIoJ2RhdGEtZGF5JykgPD0gZCkge1xuICAgICAgICAgICAgICAgICRkb20uc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZG9tLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkKCcuc2NlbmFyaW9fY2hhcmFjdGVyX2xpc3QnKS5vbignY2xpY2snLCAnLmNoYXJhY3Rlcl9yb3cgLmpzLWNoYXJhX2RlbGV0ZV9idXR0b24nLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgJHNlbGYgPSAkKHRoaXMpO1xuICAgICAgICBjb25zdCBjaGFyYU5hbWUgPSAkc2VsZi5jbG9zZXN0KCcuY2hhcmFjdGVyX3JvdycpLmZpbmQoJ3NlbGVjdFtkYXRhLWtleV9uYW1lPWNoYXJhY3Rlcl9pZF0gb3B0aW9uOnNlbGVjdGVkJykudGV4dCgpO1xuICAgICAgICBjb25zdCBtc2cgPSBDSEFSQV9ERUxFVEVfQ09ORklSTV9NRVNTQUdFLnJlcGxhY2UoJ19fX0NIQVJBX19fJywgY2hhcmFOYW1lKTtcbiAgICAgICAgaWYgKCQoJy5jaGFyYWN0ZXJfcm93JykubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgY29uc3Qge3Jlc3VsdH0gPSBhd2FpdCBteUNvbmZpcm0obXNnKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gJ29rJykge1xuICAgICAgICAgICAgICAgICRzZWxmLmNsb3Nlc3QoJy5jaGFyYWN0ZXJfcm93JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlTGlzdHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgICQoJy5zY2VuYXJpb19jaGFyYWN0ZXJfbGlzdCcpLm9uKCdjbGljayBjaGFuZ2UnLCAnc2VsZWN0W2RhdGEta2V5X25hbWU9Y2hhcmFjdGVyX2lkXScsIGZ1bmN0aW9uKCkge1xuICAgICAgICB1cGRhdGVMaXN0cygpO1xuICAgIH0pO1xuICAgICQoJy5zY2VuYXJpb19pbmNpZGVudF9saXN0IHNlbGVjdC5pbmNpZGVudCcpLm9uKCdjbGljayBjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdXBkYXRlTGlzdHMoKTtcbiAgICB9KTtcbiAgICAkKCcuc2NlbmFyaW9fY2hhcmFjdGVyX2xpc3QnKS5vbignY2hhbmdlJywgJy5jaGFyYWN0ZXJfcm93IHNlbGVjdFtkYXRhLWtleV9uYW1lPWNoYXJhY3Rlcl9pZF0nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuY2hhcmFjdGVyX3JvdycpLnJlbW92ZUNsYXNzKCdpcy1lcnJvcicpO1xuICAgIH0pO1xuICAgICQoJy5qcy1jaGFyYV9hZGRfYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0ICRkb20gPSAkKCcuY2hhcmFjdGVyX3JvdzpsYXN0JykuY2xvbmUoKTtcbiAgICAgICAgJGRvbS5yZW1vdmVDbGFzcygnaXMtZXJyb3InKTtcbiAgICAgICAgJCgnLnNjZW5hcmlvX2NoYXJhY3Rlcl9saXN0JykuYXBwZW5kKCRkb20pO1xuICAgICAgICB1cGRhdGVMaXN0cygpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gc3dpdGNoQ3JhenlUcnV0aFNlbGVjdCgpIHtcbiAgICAgICAgJCgnLmZvcl9jcmF6eV90cnV0aCcpLmhpZGUoKTtcbiAgICAgICAgJCgnc2VsZWN0LnJ1bGVfeCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PSAkKCcjY3JhenlfdHJ1dGhfcnVsZV9pZCcpLmF0dHIoJ2RhdGEtcnVsZV9pZCcpKSB7XG4gICAgICAgICAgICAgICAgJCgnLmZvcl9jcmF6eV90cnV0aCcpLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN3aXRjaENyYXp5VHJ1dGhTZWxlY3QoKTtcbiAgICAkKCdzZWxlY3QucnVsZV94Jykub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgc3dpdGNoQ3JhenlUcnV0aFNlbGVjdCgpO1xuICAgIH0pO1xuXG4gICAgJCgnLmpzLXdoYXRfaXNfcXVpeicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBteUFsZXJ0KCQoJyN3aGF0X2lzX3F1aXonKS5odG1sKCkpO1xuICAgIH0pO1xuXG4gICAgJCgnLmpzLXdoYXRfaXNfcGx1cycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBteUFsZXJ0KCQoJyN3aGF0X2lzX3BsdXNfbWVzc2FnZScpLmh0bWwoKSk7XG4gICAgfSk7XG59XG4iLCJpZiAoJCgnYm9keScpLmhhc0NsYXNzKCdzY2VuYXJpby1zaG93JykpIHtcbiAgICAkKCcuc3VtbWFyeV9xciBpbWcnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnc2NhbGVkJyk7XG4gICAgfSk7XG5cbiAgICAkKCcuanMtc2hvd19wcml2YXRlX3NoZWV0Jykub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGRpYWxvZ01lc3NhZ2UgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZGlhbG9nX21lc3NhZ2UnKTtcbiAgICAgICAgY29uc3Qge3Jlc3VsdH0gPSBhd2FpdCBteUNvbmZpcm0oZGlhbG9nTWVzc2FnZSk7XG4gICAgICAgIGlmIChyZXN1bHQgPT0gJ29rJykge1xuICAgICAgICAgICAgJCgnLnByaXZhdGVfc2hlZXRfd3JhcHBlcicpLmFkZENsYXNzKCdzaG93aW5nJyk7XG4gICAgICAgICAgICAkKCcuanMtaGlkZV9wcml2YXRlX3NoZWV0Jykuc2hvdygpO1xuICAgICAgICAgICAgJCgnLmpzLXNob3dfcHJpdmF0ZV9zaGVldCcpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgICQoJy5qcy1oaWRlX3ByaXZhdGVfc2hlZXQnKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICQoJy5wcml2YXRlX3NoZWV0X3dyYXBwZXInKS5yZW1vdmVDbGFzcygnc2hvd2luZycpO1xuICAgICAgICAkKCcuanMtaGlkZV9wcml2YXRlX3NoZWV0JykuaGlkZSgpO1xuICAgICAgICAkKCcuanMtc2hvd19wcml2YXRlX3NoZWV0Jykuc2hvdygpO1xuICAgIH0pO1xuXG4gICAgdmFyIGhhc19zaG93X2luaXRpYWxfYm9hcmQgPSBmYWxzZTtcbiAgICAkKCcuc2hvd19pbml0aWFsX2JvYXJkX3dyYXBwZXInKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmICghaGFzX3Nob3dfaW5pdGlhbF9ib2FyZCkge1xuICAgICAgICAgICAgZ3RhZygnZXZlbnQnLCAnc2hvd19pbml0aWFsX2JvYXJkJyk7XG4gICAgICAgICAgICBoYXNfc2hvd19pbml0aWFsX2JvYXJkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAkKCcuaW5pdGlhbF9ib2FyZF93cmFwcGVyJykuc2hvdygpO1xuICAgICAgICAkKCcuc2hvd19pbml0aWFsX2JvYXJkX3dyYXBwZXInKS5oaWRlKCk7XG4gICAgfSk7XG4gICAgJCgnLmhpZGVfaW5pdGlhbF9ib2FyZF93cmFwcGVyJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAkKCcuaW5pdGlhbF9ib2FyZF93cmFwcGVyJykuaGlkZSgpO1xuICAgICAgICAkKCcuc2hvd19pbml0aWFsX2JvYXJkX3dyYXBwZXInKS5zaG93KCk7XG4gICAgfSk7XG5cbiAgICAkKCcuanMtbGlrZV9idXR0b24nKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgJHAgPSAkKHRoaXMpLmNsb3Nlc3QoJ3AnKTtcbiAgICAgICAgJHAudG9nZ2xlQ2xhc3MoJ2xpa2VkJyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBhamF4U3VibWl0KCRwLmNsb3Nlc3QoJ2Zvcm0nKSk7XG4gICAgICAgICAgICAkcC5maW5kKCcuanMtY291bnQnKS50ZXh0KHJlcy5saWtlcyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICRwLnRvZ2dsZUNsYXNzKCdsaWtlZCcpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuanMtYm9va21hcmtfYnV0dG9uJykub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0ICRwID0gJCh0aGlzKS5jbG9zZXN0KCdwJyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBhamF4U3VibWl0KCRwLmNsb3Nlc3QoJ2Zvcm0nKSk7XG4gICAgICAgICAgICAkcC50b2dnbGVDbGFzcygnYm9va21hcmtlZCcpO1xuICAgICAgICAgICAgbXlBbGVydChyZXMubWVzc2FnZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnLmpzLXBsZWFzZV9sb2dpbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBteUFsZXJ0KCQodGhpcykuYXR0cignZGF0YS1tc2cnKSk7XG4gICAgfSk7XG5cbiAgICAkKCdhLmluY2lkZW50X2V4cGxhaW4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgb3BlblBvcHVwKCdqcy1wb3B1cC1pbmNpZGVudF9leHBsYWluJyk7XG4gICAgfSk7XG4gICAgJCgnLmpzLXBvcHVwLWluY2lkZW50X2V4cGxhaW4gdWwuaW5jaWRlbnRfbGlzdCA+IGxpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0ICRzZWxmID0gJCh0aGlzKTtcbiAgICAgICAgY29uc29sZS5sb2coJHNlbGYuZmluZCgncC5ub3RlJykudGV4dCgpKTtcbiAgICAgICAgbXlBbGVydCgkc2VsZi5maW5kKCdwLm5vdGUnKS5odG1sKCksICRzZWxmLmZpbmQoJ2EnKS50ZXh0KCkpO1xuICAgIH0pO1xuXG4gICAgJCgnLmZvbnRfc2l6ZV9hZGp1c3QgLmNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5mb250X3NpemVfYWRqdXN0JykuaGlkZSgpO1xuICAgIH0pO1xuICAgICQoJy5qcy1mb250X3NpemVfYWRqdXN0Jykub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0ICRzZWxmID0gJCh0aGlzKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNjZW5hcmlvRm9udFNpemUgPSAkc2VsZi52YWwoKTtcbiAgICAgICAgJCgnLnB1YmxpY19zaGVldCcpLmNzcyh7J2ZvbnQtc2l6ZSc6ICRzZWxmLnZhbCgpKydweCd9KTtcbiAgICAgICAgJCgnLnByaXZhdGVfc2hlZXQnKS5jc3Moeydmb250LXNpemUnOiAkc2VsZi52YWwoKSsncHgnfSk7XG4gICAgfSk7XG59XG5cbmlmKCQoJyNxdWl6LXN0cmluZ3Nfd3JhcHBlcicpLmxlbmd0aCA+IDApIHtcbiAgICAvLyDjgIzohJrmnKzlrrbjgbjjga7mjIfph53jgI3lvZPjgabjgq/jgqTjgrpcbiAgICB3aW5kb3cuY29uZmlybVRvU2hvd0hpbnQgPSBhc3luYyBzID0+IHtcbiAgICAgICAgaWYgKCQoJ2RkLmFkdmljZSA+IC5jb250ZW50JykuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgICAgIHJldHVybiB7cmVzdWx0Oidvayd9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IG15Q29uZmlybShzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzSGludExhYmVsID0gJCgnI3F1aXotaGludF9sYWJlbCcpLnRleHQoKTtcbiAgICBjb25zdCBzQ29uZmlybSA9ICQoJyNxdWl6LWNvbmZpcm1fdG9fc2hvd19oaW50JykudGV4dCgpO1xuXG4gICAgW1xuICAgICAgICBbJy5zY2VuYXJpb190aXRsZScsICcjcXVpei1sYWJlbF90aXRsZSddLFxuICAgICAgICBbJy5wcml2YXRlX3NoZWV0IC5kaWZmaWN1bHR5JywgJyNxdWl6LWxhYmVsX2RpZmYnXSxcbiAgICAgICAgWydkZC5mZWF0dXJlJywgJyNxdWl6LWxhYmVsX2ZlYXR1cmUnXSxcbiAgICAgICAgWydkZC5zdG9yeScsICcjcXVpei1sYWJlbF9zdG9yeSddLFxuICAgIF0uZm9yRWFjaChpdCA9PiB7XG4gICAgICAgIGxldCAkZG9tID0gJChpdFswXSk7XG4gICAgICAgIGlmICgkZG9tLmxlbmd0aCA8PSAwKSByZXR1cm47XG4gICAgICAgIGxldCBzTGFiZWwgPSAkKGl0WzFdKS50ZXh0KCk7XG4gICAgICAgICRkb20uY2hpbGRyZW4oKS5oaWRlKCk7XG4gICAgICAgIGxldCAkdG1wID0gJCgnPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj4nKTtcbiAgICAgICAgJGRvbS5hcHBlbmQoJHRtcCk7XG4gICAgICAgICR0bXAudGV4dChzSGludExhYmVsLnJlcGxhY2UoJ19fX0xBQkVMX19fJywgc0xhYmVsKSk7XG4gICAgICAgICR0bXAub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCAkc2VsZiA9ICQodGhpcyk7XG4gICAgICAgICAgICBjb25zdCB0aGVDb25maXJtID0gc0NvbmZpcm0ucmVwbGFjZSgnX19fTEFCRUxfX18nLCBzTGFiZWwpO1xuICAgICAgICAgICAgY29uc3Qge3Jlc3VsdH0gPSBhd2FpdCBjb25maXJtVG9TaG93SGludCh0aGVDb25maXJtKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gJ29rJykge1xuICAgICAgICAgICAgICAgICRzZWxmLnBhcmVudCgpLmNoaWxkcmVuKCkucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAkc2VsZi5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBsZXQgJGRvbSA9ICQoJ2RkLmFkdmljZScpO1xuICAgICRkb20uY2hpbGRyZW4oKS5oaWRlKCk7XG4gICAgbGV0ICR0bXAgPSAkKCc8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPicpO1xuICAgICRkb20uYXBwZW5kKCR0bXApO1xuICAgICR0bXAudGV4dCgkKCcjcXVpei1hbnN3ZXJfbGFiZWwnKS50ZXh0KCkpO1xuICAgICR0bXAub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0ICRzZWxmID0gJCh0aGlzKTtcbiAgICAgICAgY29uc3Qge3Jlc3VsdH0gPSBhd2FpdCBjb25maXJtVG9TaG93SGludCgkKCcjcXVpei1jb25maXJtX3RvX3Nob3dfYW5zd2VyJykudGV4dCgpKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PSAnb2snKSB7XG4gICAgICAgICAgICAkc2VsZi5wYXJlbnQoKS5jaGlsZHJlbigpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAkc2VsZi5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwid2luZG93Lm9wZW5Qb3B1cCA9IGFzeW5jIChjbGFzc05hbWUsIHByZXZlbnRIYXNoKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSAnLmMtcG9wdXAuJytjbGFzc05hbWU7XG4gICAgY29uc3QgJHBvcHVwID0gJChzZWxlY3Rvcik7XG5cbiAgICAkKCcuYy1wb3B1cFtkYXRhLW9wZW5lZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCAkc2VsZiA9ICQodGhpcyk7XG4gICAgICAgICRzZWxmLmF0dHIoJ2RhdGEtb3BlbmVkJywgTnVtYmVyKCRzZWxmLmF0dHIoJ2RhdGEtb3BlbmVkJykpKzEpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgaWYgKHByZXZlbnRIYXNoKSB7XG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLnByZXZlbnRIYXNoID09IHByZXZlbnRIYXNoKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICdyZXN1bHQnOiAnY2xvc2UnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnByZXZlbnRIYXNoID0gcHJldmVudEhhc2g7XG4gICAgICAgIH1cblxuICAgICAgICAkcG9wdXAuYXR0cignZGF0YS1vcGVuZWQnLCAxKVxuXG4gICAgICAgICRwb3B1cC5maW5kKCcuZmlsdGVyLWFyZWEnKS5vZmYoJ2NsaWNrLm9wZW5fcG9wdXAnKS5vbignY2xpY2sub3Blbl9wb3B1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgJ3Jlc3VsdCc6ICdjbG9zZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgICRwb3B1cC5maW5kKCcuY2xvc2VfYnV0dG9uJykub2ZmKCdjbGljay5vcGVuX3BvcHVwJykub24oJ2NsaWNrLm9wZW5fcG9wdXAnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICdyZXN1bHQnOiAnY2xvc2UnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICAkcG9wdXAuZmluZCgnW2RhdGEtcmVzdWx0XScpLm9mZignY2xpY2sub3Blbl9wb3B1cCcpLm9uKCdjbGljay5vcGVuX3BvcHVwJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCAkc2VsZiA9ICQodGhpcyk7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAncmVzdWx0JzogJHNlbGYuYXR0cignZGF0YS1yZXN1bHQnKSxcbiAgICAgICAgICAgICAgICAnaW5mbyc6ICRzZWxmLmF0dHIoJ2RhdGEtaW5mbycpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByb21pc2U7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgJCgnLmMtcG9wdXBbZGF0YS1vcGVuZWRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0ICRzZWxmID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGNvbnN0IG9wZW5lZCA9IE51bWJlcigkc2VsZi5hdHRyKCdkYXRhLW9wZW5lZCcpKTtcbiAgICAgICAgICAgIGlmIChvcGVuZWQgPD0gMSkge1xuICAgICAgICAgICAgICAgICRzZWxmLnJlbW92ZUF0dHIoJ2RhdGEtb3BlbmVkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRzZWxmLmF0dHIoJ2RhdGEtb3BlbmVkJywgb3BlbmVkLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG53aW5kb3cubXlBbGVydCA9IChtc2csIHRpdGxlID0gJycsIHByZXZlbnRIYXNoID0gbnVsbCkgPT4ge1xuICAgICQoJy5jLXBvcHVwLmpzLXBvcHVwLW15X2NvbmZpcm0gLmJ1dHRvbl93cmFwcGVyIFtkYXRhLXJlc3VsdD1jYW5jZWxdJykuaGlkZSgpO1xuICAgICQoJy5jLXBvcHVwLmpzLXBvcHVwLW15X2NvbmZpcm0gLm1lc3NhZ2UnKS5odG1sKG1zZy5yZXBsYWNlKFwiXFxcXG5cIiwgJzxicj4nKSk7XG4gICAgJCgnLmMtcG9wdXAuanMtcG9wdXAtbXlfY29uZmlybSAudGl0bGUnKS50ZXh0KHRpdGxlKTtcbiAgICByZXR1cm4gb3BlblBvcHVwKCdqcy1wb3B1cC1teV9jb25maXJtJywgcHJldmVudEhhc2gpO1xufTtcblxud2luZG93Lm15Q29uZmlybSA9IChtc2csIHRpdGxlID0gJycpID0+IHtcbiAgICAkKCcuYy1wb3B1cC5qcy1wb3B1cC1teV9jb25maXJtIC5idXR0b25fd3JhcHBlciBbZGF0YS1yZXN1bHQ9Y2FuY2VsXScpLnNob3coKTtcbiAgICAkKCcuYy1wb3B1cC5qcy1wb3B1cC1teV9jb25maXJtIC5tZXNzYWdlJykuaHRtbChtc2cucmVwbGFjZShcIlxcXFxuXCIsICc8YnI+JykpO1xuICAgICQoJy5jLXBvcHVwLmpzLXBvcHVwLW15X2NvbmZpcm0gLnRpdGxlJykudGV4dCh0aXRsZSk7XG4gICAgcmV0dXJuIG9wZW5Qb3B1cCgnanMtcG9wdXAtbXlfY29uZmlybScpO1xufTtcbiIsIi8qKlxuKiDjg5XjgqHjgqTjg6vjgqLjg4Pjg5fjg63jg7zjg4lqc1xuKlxuKiBAcGFyYW0gb3B0aW9uLmZvcm1DbGFzcyDjg5XjgqHjgqTjg6vjgqLjg4Pjg5fjg63jg7zjg4njgqTjg5njg7Pjg4jjgpLku5XovrzjgoBmb3Jt44K/44Kw44Gu44Kv44Op44K5XG4qIEBwYXJhbSBvcHRpb24ub25TdWNjZXNzKCRpbnB1dCwgbWVkaWEpIOODleOCoeOCpOODq+OCouODg+ODl+ODreODvOODieaIkOWKn+aZguOBruWHpueQhuOAgiRpbnB1dOOBr+WvvuixoeOBrmlucHV0W3R5cGU9ZmlsZV1cbiogQHBhcmFtIG9wdGlvbi5vbkZhaWx1cmUoJGlucHV0LCByZXMpIOODleOCoeOCpOODq+OCouODg+ODl+ODreODvOODieWkseaVl+aZguOBruWHpueQhuOAgiRpbnB1dOOBr+WvvuixoeOBrmlucHV0W3R5cGU9ZmlsZV1cbiogQHBhcmFtIG9wdGlvbi5vbkNvbXBsZXRlKCRpbnB1dCwgeGhyKSDjg5XjgqHjgqTjg6vjgqLjg4Pjg5fjg63jg7zjg4nlrozkuobmmYLjga7lh6bnkIbjgIIkaW5wdXTjga/lr77osaHjga5pbnB1dFt0eXBlPWZpbGVdXG4qIEBwYXJhbSBvcHRpb24ub25Qcm9ncmVzcygkaW5wdXQsIHBlcmNlbnQpIOODleOCoeOCpOODq+OCouODg+ODl+ODreODvOODieS4reOBruWHpueQhuOAgiRpbnB1dOOBr+WvvuixoeOBrmlucHV0W3R5cGU9ZmlsZV1cbiovXG53aW5kb3cuc2V0RmlsZVVwbG9hZEV2ZW50ID0gKG9wdGlvbikgPT4ge1xuICAgIGNvbnN0IF9mb3JtQ2xhc3MgPSAob3B0aW9uLmZvcm1DbGFzcyB8fCAnJykubGVuZ3RoID4gMCA/ICcuJytvcHRpb24uZm9ybUNsYXNzIDogJyc7XG4gICAgY29uc3QgX3NlbGVjdG9yID0gJ2Zvcm0nK19mb3JtQ2xhc3MrJyBpbnB1dFt0eXBlPWZpbGVdW25hbWU9ZmlsZV0nO1xuICAgIGNvbnN0IF9vblN1Y2Nlc3MgPSBvcHRpb24ub25TdWNjZXNzIHx8ICgoJGlucHV0LCBtZWRpYSkgPT4geyBteUNvbnNvbGUubG9nKG1lZGlhKTsgfSk7XG4gICAgY29uc3QgX29uRmFpbHVyZSA9IG9wdGlvbi5vbkZhaWx1cmUgfHwgKCgkaW5wdXQsIHJlcykgPT4geyBteUNvbnNvbGUuZXJyb3IocmVzKTsgfSk7XG4gICAgY29uc3QgX29uQ29tcGxldGUgPSBvcHRpb24ub25Db21wbGV0ZSB8fCAoKCRpbnB1dCkgPT4ge30pO1xuICAgIGNvbnN0IF9vblByb2dyZXNzID0gb3B0aW9uLm9uUHJvZ3Jlc3MgfHwgKCgkaW5wdXQsIHBlcmNlbnQpID0+IHt9KTtcblxuICAgIG15Q29uc29sZS5sb2coX3NlbGVjdG9yKTtcblxuICAgICQoJ2JvZHknKS5vbignY2hhbmdlJywgX3NlbGVjdG9yLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgJHNlbGYgPSAkKHRoaXMpO1xuICAgICAgICBpZiAoISRzZWxmLnZhbCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJHNlbGYuY2xvc2VzdCgnZm9ybScpO1xuICAgICAgICBjb25zdCB1cGxvYWRGaWxlID0gJHNlbGYucHJvcCgnZmlsZXMnKVswXTtcbiAgICAgICAgY29uc3QgdG9Vc2VySWQgPSAkZm9ybS5maW5kKCdbbmFtZT10b191c2VyX2lkXScpLnZhbCgpO1xuICAgICAgICBcbiAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGxldCBwcm9ncmVzc1RpbWVyO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBDSFVOS19TSVpFID0gMTI4KjEwMjQqMTAyNDtcbiAgICAgICAgICAgICAgICBjb25zdCBSRVRSWV9MSU1JVCA9IDU7XG4gICAgICAgICAgICAgICAgY29uc3QgUkVUUllfSU5URVJWQUwgPSAxMDA7XG4gICAgICAgICAgICAgICAgY29uc3QgQ0hVTktfVVBMT0FEX1VSTCA9ICQoJ21ldGFbbmFtZT1jaHVua191cGxvYWRfdXJsXScpLmF0dHIoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBDU1JGX1RPS0VOID0gJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgc2VudCA9IDA7IC8vIOmAgeS/oea4iOOBv+ODkOOCpOODiOaVsFxuICAgICAgICAgICAgICAgIGxldCBtYXliZVNlbnQgPSAwOyAvLyDmnLrkuIrjga7pgIHkv6HmuIjjgb/jg5DjgqTjg4jmlbDjgILopovjgYvjgZHkuIrjga7jg5fjg63jgrDjg6zjgrnjg5Djg7zmm7TmlrDjga7jgZ/jgoHjgavkvb/jgYZcbiAgICAgICAgICAgICAgICBsZXQgY2h1bmtVcGxvYWRVcmwgPSBDSFVOS19VUExPQURfVVJMO1xuICAgICAgICAgICAgICAgIGxldCB3YWl0OyAvLyDmjIfmlbDjg5Djg4Pjgq/jgqrjg5XnlKhcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgYnBzID0gMDsgLy8g5ZCE44Ki44OD44OX44Ot44O844OJ44GL44KJ6KiI566X44GV44KM44GfQlBTW2J5dGUvc2VjXVxuICAgICAgICAgICAgICAgIHByb2dyZXNzVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1heWJlU2VudCArPSBicHMgKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXliZVNlbnQgPiBzZW50ICsgQ0hVTktfU0laRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF5YmVTZW50ID0gc2VudCArIENIVU5LX1NJWkU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IHBlciA9IG1heWJlU2VudCAqIDEwMC4wIC8gdXBsb2FkRmlsZS5zaXplO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGVyID4gOTkuOSkgcGVyID0gOTkuOTtcbiAgICAgICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MoJHNlbGYsIHBlcik7XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MoJHNlbGYsIDApO1xuICAgICAgICAgICAgICAgIHdoaWxlIChzZW50IDwgdXBsb2FkRmlsZS5zaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaHVua0VuZCA9IHNlbnQgKyBDSFVOS19TSVpFOyAvLyDku4rlm57pgIHjgovjg4Hjg6Pjg7Pjgq/jga7mnKvlsL7jg5DjgqTjg4hcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbnQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2h1bmtFbmQgPSBDSFVOS19TSVpFIC8gNDsgLy8g5pyA5Yid44Gg44GR44Gv6Lu944GE5a656YeP44Gn6YCB44KK44CB44Os44K544Od44Oz44K544K/44Kk44Og44KS6KiI5ris44GZ44KLXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNodW5rRGF0YSA9IHVwbG9hZEZpbGUuc2xpY2Uoc2VudCwgY2h1bmtFbmQpO1xuICAgICAgICAgICAgICAgICAgICBteUNvbnNvbGUubG9nKHNlbnQsIGNodW5rRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgbXlDb25zb2xlLmxvZyhjaHVua0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKCdmaWxlX25hbWUnLCB1cGxvYWRGaWxlLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoJ2ZpbGVfc2l6ZScsIHVwbG9hZEZpbGUuc2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZCgnY2h1bmtfZGF0YScsIGNodW5rRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB3YWl0ID0gUkVUUllfSU5URVJWQUw7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxIDsgaSA8PSBSRVRSWV9MSU1JVCA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBTdGFydEF0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWpheFJlc3VsdCA9IGF3YWl0ICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogY2h1bmtVcGxvYWRVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogQ1NSRl9UT0tFTixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZmQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChhc3luYyBlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15Q29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+PSBSRVRSWV9MSU1JVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDopo/lrprlm57mlbDlpLHmlZfjgZfjgZ/jga7jgafjgIHjgqLjg4Pjg5fjg63jg7zjg4nlh6bnkIblhajkvZPjgpLlpLHmlZfjgajjgb/jgarjgZlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihlcnIuc3RhdHVzID09IDQyMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA0MjLjga/jg5Djg6rjg4fjg7zjgrfjg6fjg7Pjgqjjg6njg7zjgarjga7jgafjgIHkvZXluqbnubDjgorov5TjgZfjgabjgoLjgrPjgrHjgovjga/jgZpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaMh+aVsOODkOODg+OCr+OCquODlVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCh3YWl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FpdCAqPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFqYXhSZXN1bHQ/LnJlc3VsdCA9PSAnT0snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g44GT44Gu44OB44Oj44Oz44Kv44Gv6YCB5L+h5oiQ5Yqf44GX44Gf44Gu44Gn5qyh44Gr6KGM44GPXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6YCB5L+h5pmC6ZaT44KS6KiI5risXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBUaW1lID0gKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSB1cFN0YXJ0QXQuZ2V0VGltZSgpKSAvIDEwMDAuMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicHMgPSAoY2h1bmtFbmQgLSBzZW50KSAvIHVwVGltZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmrKHjga5VUkzjgYzmnaXjgabjgZ/jgonmm7TmlrDjgZnjgotcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaHVua1VwbG9hZFVybCA9IGFqYXhSZXN1bHQudXJsID8/IGNodW5rVXBsb2FkVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNlbnQgPSBjaHVua0VuZDtcbiAgICAgICAgICAgICAgICAgICAgbWF5YmVTZW50ID0gY2h1bmtFbmQ7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcygkc2VsZiwgc2VudCAqIDEwMC4wIC8gdXBsb2FkRmlsZS5zaXplKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g5YiG5Ymy44Ki44OD44OX44Ot44O844OJ5a6M5LqG44GX44Gf44Gu44Gn44CB5pyA5b6M44Gr44OV44Kh44Kk44Or44KS57WQ5ZCI44GZ44KLXG4gICAgICAgICAgICAgICAgY29uc3QgZmluaXNoRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZV9uYW1lOiB1cGxvYWRGaWxlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGZpbGVfc2l6ZTogdXBsb2FkRmlsZS5zaXplLFxuICAgICAgICAgICAgICAgICAgICBpc19maW5pc2g6IHRydWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAodG9Vc2VySWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmluaXNoRGF0YS50b191c2VyX2lkID0gdG9Vc2VySWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBsYXN0QWpheFJlc3VsdDtcbiAgICAgICAgICAgICAgICB3YWl0ID0gUkVUUllfSU5URVJWQUw7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDw9IFJFVFJZX0xJTUlUIDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RBamF4UmVzdWx0ID0gYXdhaXQgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogY2h1bmtVcGxvYWRVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6IENTUkZfVE9LRU4sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGZpbmlzaERhdGEpLFxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChhc3luYyBlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXlDb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPj0gUkVUUllfTElNSVQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDopo/lrprlm57mlbDlpLHmlZfjgZfjgZ/jga7jgafjgIHjgqLjg4Pjg5fjg63jg7zjg4nlh6bnkIblhajkvZPjgpLlpLHmlZfjgajjgb/jgarjgZlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZXJyLnN0YXR1cyA9PSA0MjIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA0MjLjga/jg5Djg6rjg4fjg7zjgrfjg6fjg7Pjgqjjg6njg7zjgarjga7jgafjgIHkvZXluqbnubDjgorov5TjgZfjgabjgoLjgrPjgrHjgovjga/jgZpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaMh+aVsOODkOODg+OCr+OCquODlVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKHdhaXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhaXQgKj0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEFqYXhSZXN1bHQ/Lm1lZGlhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDjg5XjgqHjgqTjg6vntZDlkIhBUEnjgoLmiJDlip/jgZfjgZ/jga7jgafmrKHjgbhcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG15Q29uc29sZS5sb2cobGFzdEFqYXhSZXN1bHQpO1xuICAgICAgICAgICAgICAgIGlmIChsYXN0QWpheFJlc3VsdD8ubWVkaWEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5YWo6YOo57WC44KP44Gj44Gf44Gu44Gn5oiQ5Yqf5pmC44Kz44O844Or44OQ44OD44Kv44KS5Y+p44GPXG4gICAgICAgICAgICAgICAgICAgIF9vblN1Y2Nlc3MoJHNlbGYsIGxhc3RBamF4UmVzdWx0Lm1lZGlhKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ+e1kOWQiEFQSeWkseaVlycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIG15Q29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIF9vbkZhaWx1cmUoJHNlbGYsIGVycik7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwocHJvZ3Jlc3NUaW1lcik7XG4gICAgICAgICAgICAgICAgX29uQ29tcGxldGUoJHNlbGYpO1xuICAgICAgICAgICAgICAgICRzZWxmLnZhbCgnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgfSk7XG59O1xuXG4iLCJ3aW5kb3cuc2V0SW5kZXhOYW1lVG9MaXN0SXRlbXMgPSAoKSA9PiB7XG4gICAgbGV0IGlkeCA9IDE7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtaW5kZXhdJykuZm9yRWFjaChkb20gPT4ge1xuICAgICAgICBkb20uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaWR4KyspO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWluZGV4XSBbZGF0YS1saXN0X25hbWVdW2RhdGEta2V5X25hbWVdJykuZm9yRWFjaChkb20gPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gZG9tLmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0X25hbWUnKSsnWycrZG9tLmNsb3Nlc3QoJ1tkYXRhLWluZGV4XScpLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKyddWycrZG9tLmdldEF0dHJpYnV0ZSgnZGF0YS1rZXlfbmFtZScpKyddJztcbiAgICAgICAgZG9tLnNldEF0dHJpYnV0ZSgnbmFtZScsIG5hbWUpO1xuICAgIH0pO1xufTtcblxuJCgnZm9ybSAuc3VibWl0X2J1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0ICRzZWxmID0gJCh0aGlzKTtcbiAgICBjb25zdCAkZm9ybSA9ICRzZWxmLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICBjb25zdCBvcmlnaW5hbFRhcmdldCA9ICRmb3JtLmF0dHIoJ3RhcmdldCcpO1xuXG4gICAgaWYgKCRzZWxmLmF0dHIoJ2RhdGEtdGFyZ2V0JykpIHtcbiAgICAgICAgJGZvcm0uYXR0cigndGFyZ2V0JywgJHNlbGYuYXR0cignZGF0YS10YXJnZXQnKSk7XG4gICAgfVxuICAgIGlmICgkc2VsZi5hdHRyKCdkYXRhLWFjdGlvbicpKSB7XG4gICAgICAgICRmb3JtLmF0dHIoJ2FjdGlvbicsICRzZWxmLmF0dHIoJ2RhdGEtYWN0aW9uJykpO1xuICAgIH1cbiAgICAkZm9ybS5zdWJtaXQoKTtcblxuICAgIGlmIChvcmlnaW5hbFRhcmdldCkge1xuICAgICAgICAkZm9ybS5hdHRyKCd0YXJnZXQnLCBvcmlnaW5hbFRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGZvcm0ucmVtb3ZlQXR0cigndGFyZ2V0Jyk7XG4gICAgfVxufSk7XG5cbiQoJy5qcy1sYW5ndWFnZV9zZXR0aW5nJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgnZm9ybScpLnN1Ym1pdCgpO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIC8vIHRleHRhcmVh44K/44Kw44KS5YWo44Gm5Y+W5b6XXG4gIGNvbnN0IHRleHRhcmVhRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInRleHRhcmVhXCIpO1xuXG4gIHRleHRhcmVhRWxzLmZvckVhY2goKHRleHRhcmVhRWwpID0+IHtcbiAgICAvLyDjg4fjg5Xjgqnjg6vjg4jlgKTjgajjgZfjgabjgrnjgr/jgqTjg6vlsZ7mgKfjgpLku5jkuI5cbiAgICB0ZXh0YXJlYUVsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGBoZWlnaHQ6ICR7dGV4dGFyZWFFbC5zY3JvbGxIZWlnaHR9cHg7YCk7XG4gICAgLy8gaW5wdXTjgqTjg5njg7Pjg4jjgYznmbrnlJ/jgZnjgovjgZ/jgbPjgavplqLmlbDlkbzjgbPlh7rjgZdcbiAgICB0ZXh0YXJlYUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBzZXRUZXh0YXJlYUhlaWdodCk7XG4gIH0pO1xuXG4gIC8vIHRleHRhcmVh44Gu6auY44GV44KS6KiI566X44GX44Gm5oyH5a6a44GZ44KL6Zai5pWwXG4gIGZ1bmN0aW9uIHNldFRleHRhcmVhSGVpZ2h0KCkge1xuICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7XG4gICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLnNjcm9sbEhlaWdodH1weGA7XG4gIH1cbn0pO1xuXG53aW5kb3cuYWpheFN1Ym1pdCA9IGFzeW5jICRmb3JtID0+IHtcbiAgICByZXR1cm4gYXdhaXQgJC5hamF4KHtcbiAgICAgICAgdXJsOiAkZm9ybS5hdHRyKCdhY3Rpb24nKSxcbiAgICAgICAgdHlwZTogJGZvcm0uYXR0cignbWV0aG9kJyksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiAkKCdbbmFtZT1jc3JmLXRva2VuXScpLmF0dHIoJ2NvbnRlbnQnKSxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogJGZvcm0uc2VyaWFsaXplKCksXG4gICAgfSk7XG59O1xuXG4vLyDohJrmnKznlLvpnaLjga7jg5Xjgqnjg7Pjg4jjgrXjgqTjgrroqr/mlbTmqZ/og71cbiQoJy5qcy1mb250X3NpemVfYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICQoJyNtZW51X3RvZ2dsZScpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgaWYgKCQoJy5mb250X3NpemVfYWRqdXN0JykubGVuZ3RoID4gMCkge1xuICAgICAgICAkKCcuZm9udF9zaXplX2FkanVzdCcpLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBteUFsZXJ0KCQoJ1tkYXRhLW9ubHlfc2NlbmFyaW9fc2hvd10nKS5hdHRyKCdkYXRhLW9ubHlfc2NlbmFyaW9fc2hvdycpKTtcbiAgICB9XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwid2luZG93IiwiXyIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiJCIsImhhc0NsYXNzIiwidXBkYXRlTGlzdHMiLCJzZXRJbmRleE5hbWVUb0xpc3RJdGVtcyIsImNyb3dkQ3JpbWluYWxMaXN0SHRtbCIsImNyaW1pbmFsTGlzdEh0bWwiLCJlYWNoIiwiJG9wdGlvbiIsInZhbCIsInRleHQiLCIkc2VsZWN0IiwiJHNlbGVjdEluY2lkZW50IiwiY2xvc2VzdCIsImZpbmQiLCJpbmNpZGVudElkIiwiTnVtYmVyIiwiY2hhcmFJZCIsIkNST1dEX0lOQ0lERU5UX0lEUyIsImluY2x1ZGVzIiwiaHRtbCIsImNsb25lIiwic3dpdGNoQ3JhenlUcnV0aFNlbGVjdCIsImhpZGUiLCJhdHRyIiwic2hvdyIsImNsaWNrIiwib24iLCJkIiwiJGRvbSIsIiRzZWxmIiwiY2hhcmFOYW1lIiwibXNnIiwiQ0hBUkFfREVMRVRFX0NPTkZJUk1fTUVTU0FHRSIsInJlcGxhY2UiLCJsZW5ndGgiLCJteUNvbmZpcm0iLCJyZXN1bHQiLCJyZW1vdmUiLCJyZW1vdmVDbGFzcyIsImFwcGVuZCIsIm15QWxlcnQiLCJ0b2dnbGVDbGFzcyIsImRpYWxvZ01lc3NhZ2UiLCJhZGRDbGFzcyIsImhhc19zaG93X2luaXRpYWxfYm9hcmQiLCJndGFnIiwiJHAiLCJhamF4U3VibWl0IiwicmVzIiwibGlrZXMiLCJtZXNzYWdlIiwib3BlblBvcHVwIiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsInNjZW5hcmlvRm9udFNpemUiLCJjc3MiLCJjb25maXJtVG9TaG93SGludCIsInMiLCJpcyIsInNIaW50TGFiZWwiLCJzQ29uZmlybSIsImZvckVhY2giLCJpdCIsInNMYWJlbCIsImNoaWxkcmVuIiwiJHRtcCIsInRoZUNvbmZpcm0iLCJwYXJlbnQiLCJyZW1vdmVBdHRyIiwiY2xhc3NOYW1lIiwicHJldmVudEhhc2giLCJzZWxlY3RvciIsIiRwb3B1cCIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9mZiIsIm9wZW5lZCIsInRpdGxlIiwic2V0RmlsZVVwbG9hZEV2ZW50Iiwib3B0aW9uIiwiX2Zvcm1DbGFzcyIsImZvcm1DbGFzcyIsIl9zZWxlY3RvciIsIl9vblN1Y2Nlc3MiLCJvblN1Y2Nlc3MiLCIkaW5wdXQiLCJtZWRpYSIsIm15Q29uc29sZSIsIl9vbkZhaWx1cmUiLCJvbkZhaWx1cmUiLCJlcnJvciIsIl9vbkNvbXBsZXRlIiwib25Db21wbGV0ZSIsIl9vblByb2dyZXNzIiwib25Qcm9ncmVzcyIsInBlcmNlbnQiLCIkZm9ybSIsInVwbG9hZEZpbGUiLCJwcm9wIiwidG9Vc2VySWQiLCJDSFVOS19TSVpFIiwiUkVUUllfTElNSVQiLCJSRVRSWV9JTlRFUlZBTCIsIkNIVU5LX1VQTE9BRF9VUkwiLCJDU1JGX1RPS0VOIiwic2VudCIsIm1heWJlU2VudCIsImNodW5rVXBsb2FkVXJsIiwiYnBzIiwicHJvZ3Jlc3NUaW1lciIsInNldEludGVydmFsIiwicGVyIiwic2l6ZSIsImNodW5rRW5kIiwiY2h1bmtEYXRhIiwic2xpY2UiLCJmZCIsIkZvcm1EYXRhIiwibmFtZSIsIndhaXQiLCJpIiwidXBTdGFydEF0IiwiRGF0ZSIsImFqYXgiLCJ0eXBlIiwidXJsIiwiY29udGVudFR5cGUiLCJwcm9jZXNzRGF0YSIsImRhdGEiLCJlcnIiLCJzdGF0dXMiLCJzbGVlcCIsImFqYXhSZXN1bHQiLCJ1cFRpbWUiLCJnZXRUaW1lIiwiZmluaXNoRGF0YSIsImZpbGVfbmFtZSIsImZpbGVfc2l6ZSIsImlzX2ZpbmlzaCIsInRvX3VzZXJfaWQiLCJKU09OIiwic3RyaW5naWZ5IiwibGFzdEFqYXhSZXN1bHQiLCJFcnJvciIsImNsZWFySW50ZXJ2YWwiLCJpZHgiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkb20iLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJvcmlnaW5hbFRhcmdldCIsInN1Ym1pdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZXh0YXJlYUVscyIsInRleHRhcmVhRWwiLCJzY3JvbGxIZWlnaHQiLCJzZXRUZXh0YXJlYUhlaWdodCIsInN0eWxlIiwiaGVpZ2h0Iiwic2VyaWFsaXplIl0sInNvdXJjZVJvb3QiOiIifQ==