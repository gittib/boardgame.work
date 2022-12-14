(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");
__webpack_require__(/*! ./upload */ "./resources/js/upload.js");
__webpack_require__(/*! ./popup */ "./resources/js/popup.js");
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
    $('.c-popup').removeClass('open');
    $popup.addClass('open');
    $popup.find('.popup-filter-area').off('click').on('click', function () {
      $popup.removeClass('open');
      resolve({
        'result': 'close'
      });
    });
    $popup.find('.close_button').off('click').on('click', function () {
      $popup.removeClass('open');
      resolve({
        'result': 'close'
      });
    });
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7Y0FFdkJvRCxhQUFhLENBQUNwQyxhQUFhLENBQUM7Y0FDNUJyQixXQUFXLENBQUNLLEtBQUssQ0FBQztjQUNsQkEsS0FBSyxDQUFDQyxHQUFHLENBQUMsRUFBRSxDQUFDO2NBQUM7WUFBQTtZQUFBO2NBQUE7VUFBQTtRQUFBO01BQUE7SUFBQSxDQUVyQixJQUFHO0VBQ1IsQ0FBQyxDQUFDO0FBQ04sQ0FBQzs7Ozs7Ozs7Ozs7O0FDOUtEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXBsb2FkLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zYXNzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4vYm9vdHN0cmFwJyk7XG5yZXF1aXJlKCcuL3VwbG9hZCcpO1xucmVxdWlyZSgnLi9wb3B1cCcpO1xuXG53aW5kb3cuc2V0SW5kZXhOYW1lVG9MaXN0SXRlbXMgPSAoKSA9PiB7XG4gICAgbGV0IGlkeCA9IDE7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtaW5kZXhdJykuZm9yRWFjaChkb20gPT4ge1xuICAgICAgICBkb20uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaWR4KyspO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWluZGV4XSBbZGF0YS1saXN0X25hbWVdW2RhdGEta2V5X25hbWVdJykuZm9yRWFjaChkb20gPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gZG9tLmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0X25hbWUnKSsnWycrZG9tLmNsb3Nlc3QoJ1tkYXRhLWluZGV4XScpLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKyddWycrZG9tLmdldEF0dHJpYnV0ZSgnZGF0YS1rZXlfbmFtZScpKyddJztcbiAgICAgICAgZG9tLnNldEF0dHJpYnV0ZSgnbmFtZScsIG5hbWUpO1xuICAgIH0pO1xufTtcblxuJCgnZm9ybSAuc3VibWl0X2J1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgnZm9ybScpLnN1Ym1pdCgpO1xufSk7XG4iLCJ3aW5kb3cuXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuXG4vKipcbiAqIFdlJ2xsIGxvYWQgdGhlIGF4aW9zIEhUVFAgbGlicmFyeSB3aGljaCBhbGxvd3MgdXMgdG8gZWFzaWx5IGlzc3VlIHJlcXVlc3RzXG4gKiB0byBvdXIgTGFyYXZlbCBiYWNrLWVuZC4gVGhpcyBsaWJyYXJ5IGF1dG9tYXRpY2FsbHkgaGFuZGxlcyBzZW5kaW5nIHRoZVxuICogQ1NSRiB0b2tlbiBhcyBhIGhlYWRlciBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgdGhlIFwiWFNSRlwiIHRva2VuIGNvb2tpZS5cbiAqL1xuXG53aW5kb3cuYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbi8qKlxuICogRWNobyBleHBvc2VzIGFuIGV4cHJlc3NpdmUgQVBJIGZvciBzdWJzY3JpYmluZyB0byBjaGFubmVscyBhbmQgbGlzdGVuaW5nXG4gKiBmb3IgZXZlbnRzIHRoYXQgYXJlIGJyb2FkY2FzdCBieSBMYXJhdmVsLiBFY2hvIGFuZCBldmVudCBicm9hZGNhc3RpbmdcbiAqIGFsbG93cyB5b3VyIHRlYW0gdG8gZWFzaWx5IGJ1aWxkIHJvYnVzdCByZWFsLXRpbWUgd2ViIGFwcGxpY2F0aW9ucy5cbiAqL1xuXG4vLyBpbXBvcnQgRWNobyBmcm9tICdsYXJhdmVsLWVjaG8nO1xuXG4vLyB3aW5kb3cuUHVzaGVyID0gcmVxdWlyZSgncHVzaGVyLWpzJyk7XG5cbi8vIHdpbmRvdy5FY2hvID0gbmV3IEVjaG8oe1xuLy8gICAgIGJyb2FkY2FzdGVyOiAncHVzaGVyJyxcbi8vICAgICBrZXk6IHByb2Nlc3MuZW52Lk1JWF9QVVNIRVJfQVBQX0tFWSxcbi8vICAgICBjbHVzdGVyOiBwcm9jZXNzLmVudi5NSVhfUFVTSEVSX0FQUF9DTFVTVEVSLFxuLy8gICAgIGZvcmNlVExTOiB0cnVlXG4vLyB9KTtcbiIsIndpbmRvdy5vcGVuUG9wdXAgPSBjbGFzc05hbWUgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gJy5jLXBvcHVwLicrY2xhc3NOYW1lO1xuICAgICAgICBjb25zdCAkcG9wdXAgPSAkKHNlbGVjdG9yKTtcblxuICAgICAgICAkKCcuYy1wb3B1cCcpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICRwb3B1cC5hZGRDbGFzcygnb3BlbicpO1xuXG4gICAgICAgICRwb3B1cC5maW5kKCcucG9wdXAtZmlsdGVyLWFyZWEnKS5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkcG9wdXAucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICdyZXN1bHQnOiAnY2xvc2UnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICAkcG9wdXAuZmluZCgnLmNsb3NlX2J1dHRvbicpLm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRwb3B1cC5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgJ3Jlc3VsdCc6ICdjbG9zZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuIiwiLyoqXG4qIOODleOCoeOCpOODq+OCouODg+ODl+ODreODvOODiWpzXG4qXG4qIEBwYXJhbSBvcHRpb24uZm9ybUNsYXNzIOODleOCoeOCpOODq+OCouODg+ODl+ODreODvOODieOCpOODmeODs+ODiOOCkuS7lei+vOOCgGZvcm3jgr/jgrDjga7jgq/jg6njgrlcbiogQHBhcmFtIG9wdGlvbi5vblN1Y2Nlc3MoJGlucHV0LCBtZWRpYSkg44OV44Kh44Kk44Or44Ki44OD44OX44Ot44O844OJ5oiQ5Yqf5pmC44Gu5Yem55CG44CCJGlucHV044Gv5a++6LGh44GuaW5wdXRbdHlwZT1maWxlXVxuKiBAcGFyYW0gb3B0aW9uLm9uRmFpbHVyZSgkaW5wdXQsIHJlcykg44OV44Kh44Kk44Or44Ki44OD44OX44Ot44O844OJ5aSx5pWX5pmC44Gu5Yem55CG44CCJGlucHV044Gv5a++6LGh44GuaW5wdXRbdHlwZT1maWxlXVxuKiBAcGFyYW0gb3B0aW9uLm9uQ29tcGxldGUoJGlucHV0LCB4aHIpIOODleOCoeOCpOODq+OCouODg+ODl+ODreODvOODieWujOS6huaZguOBruWHpueQhuOAgiRpbnB1dOOBr+WvvuixoeOBrmlucHV0W3R5cGU9ZmlsZV1cbiogQHBhcmFtIG9wdGlvbi5vblByb2dyZXNzKCRpbnB1dCwgcGVyY2VudCkg44OV44Kh44Kk44Or44Ki44OD44OX44Ot44O844OJ5Lit44Gu5Yem55CG44CCJGlucHV044Gv5a++6LGh44GuaW5wdXRbdHlwZT1maWxlXVxuKi9cbndpbmRvdy5zZXRGaWxlVXBsb2FkRXZlbnQgPSAob3B0aW9uKSA9PiB7XG4gICAgY29uc3QgX2Zvcm1DbGFzcyA9IChvcHRpb24uZm9ybUNsYXNzIHx8ICcnKS5sZW5ndGggPiAwID8gJy4nK29wdGlvbi5mb3JtQ2xhc3MgOiAnJztcbiAgICBjb25zdCBfc2VsZWN0b3IgPSAnZm9ybScrX2Zvcm1DbGFzcysnIGlucHV0W3R5cGU9ZmlsZV1bbmFtZT1maWxlXSc7XG4gICAgY29uc3QgX29uU3VjY2VzcyA9IG9wdGlvbi5vblN1Y2Nlc3MgfHwgKCgkaW5wdXQsIG1lZGlhKSA9PiB7IG15Q29uc29sZS5sb2cobWVkaWEpOyB9KTtcbiAgICBjb25zdCBfb25GYWlsdXJlID0gb3B0aW9uLm9uRmFpbHVyZSB8fCAoKCRpbnB1dCwgcmVzKSA9PiB7IG15Q29uc29sZS5lcnJvcihyZXMpOyB9KTtcbiAgICBjb25zdCBfb25Db21wbGV0ZSA9IG9wdGlvbi5vbkNvbXBsZXRlIHx8ICgoJGlucHV0KSA9PiB7fSk7XG4gICAgY29uc3QgX29uUHJvZ3Jlc3MgPSBvcHRpb24ub25Qcm9ncmVzcyB8fCAoKCRpbnB1dCwgcGVyY2VudCkgPT4ge30pO1xuXG4gICAgbXlDb25zb2xlLmxvZyhfc2VsZWN0b3IpO1xuXG4gICAgJCgnYm9keScpLm9uKCdjaGFuZ2UnLCBfc2VsZWN0b3IsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCAkc2VsZiA9ICQodGhpcyk7XG4gICAgICAgIGlmICghJHNlbGYudmFsKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkc2VsZi5jbG9zZXN0KCdmb3JtJyk7XG4gICAgICAgIGNvbnN0IHVwbG9hZEZpbGUgPSAkc2VsZi5wcm9wKCdmaWxlcycpWzBdO1xuICAgICAgICBjb25zdCB0b1VzZXJJZCA9ICRmb3JtLmZpbmQoJ1tuYW1lPXRvX3VzZXJfaWRdJykudmFsKCk7XG4gICAgICAgIFxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHByb2dyZXNzVGltZXI7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IENIVU5LX1NJWkUgPSAxMjgqMTAyNCoxMDI0O1xuICAgICAgICAgICAgICAgIGNvbnN0IFJFVFJZX0xJTUlUID0gNTtcbiAgICAgICAgICAgICAgICBjb25zdCBSRVRSWV9JTlRFUlZBTCA9IDEwMDtcbiAgICAgICAgICAgICAgICBjb25zdCBDSFVOS19VUExPQURfVVJMID0gJCgnbWV0YVtuYW1lPWNodW5rX3VwbG9hZF91cmxdJykuYXR0cignY29udGVudCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IENTUkZfVE9LRU4gPSAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBzZW50ID0gMDsgLy8g6YCB5L+h5riI44G/44OQ44Kk44OI5pWwXG4gICAgICAgICAgICAgICAgbGV0IG1heWJlU2VudCA9IDA7IC8vIOacuuS4iuOBrumAgeS/oea4iOOBv+ODkOOCpOODiOaVsOOAguimi+OBi+OBkeS4iuOBruODl+ODreOCsOODrOOCueODkOODvOabtOaWsOOBruOBn+OCgeOBq+S9v+OBhlxuICAgICAgICAgICAgICAgIGxldCBjaHVua1VwbG9hZFVybCA9IENIVU5LX1VQTE9BRF9VUkw7XG4gICAgICAgICAgICAgICAgbGV0IHdhaXQ7IC8vIOaMh+aVsOODkOODg+OCr+OCquODleeUqFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBicHMgPSAwOyAvLyDlkITjgqLjg4Pjg5fjg63jg7zjg4njgYvjgonoqIjnrpfjgZXjgozjgZ9CUFNbYnl0ZS9zZWNdXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbWF5YmVTZW50ICs9IGJwcyAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1heWJlU2VudCA+IHNlbnQgKyBDSFVOS19TSVpFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXliZVNlbnQgPSBzZW50ICsgQ0hVTktfU0laRTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgcGVyID0gbWF5YmVTZW50ICogMTAwLjAgLyB1cGxvYWRGaWxlLnNpemU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwZXIgPiA5OS45KSBwZXIgPSA5OS45O1xuICAgICAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcygkc2VsZiwgcGVyKTtcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcygkc2VsZiwgMCk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHNlbnQgPCB1cGxvYWRGaWxlLnNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNodW5rRW5kID0gc2VudCArIENIVU5LX1NJWkU7IC8vIOS7iuWbnumAgeOCi+ODgeODo+ODs+OCr+OBruacq+WwvuODkOOCpOODiFxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaHVua0VuZCA9IENIVU5LX1NJWkUgLyA0OyAvLyDmnIDliJ3jgaDjgZHjga/ou73jgYTlrrnph4/jgafpgIHjgorjgIHjg6zjgrnjg53jg7Pjgrnjgr/jgqTjg6DjgpLoqIjmuKzjgZnjgotcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2h1bmtEYXRhID0gdXBsb2FkRmlsZS5zbGljZShzZW50LCBjaHVua0VuZCk7XG4gICAgICAgICAgICAgICAgICAgIG15Q29uc29sZS5sb2coc2VudCwgY2h1bmtFbmQpO1xuICAgICAgICAgICAgICAgICAgICBteUNvbnNvbGUubG9nKGNodW5rRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoJ2ZpbGVfbmFtZScsIHVwbG9hZEZpbGUubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZCgnZmlsZV9zaXplJywgdXBsb2FkRmlsZS5zaXplKTtcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKCdjaHVua19kYXRhJywgY2h1bmtEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHdhaXQgPSBSRVRSWV9JTlRFUlZBTDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDEgOyBpIDw9IFJFVFJZX0xJTUlUIDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cFN0YXJ0QXQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhamF4UmVzdWx0ID0gYXdhaXQgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBjaHVua1VwbG9hZFVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiBDU1JGX1RPS0VOLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBmZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGFzeW5jIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlDb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID49IFJFVFJZX0xJTUlUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOimj+WumuWbnuaVsOWkseaVl+OBl+OBn+OBruOBp+OAgeOCouODg+ODl+ODreODvOODieWHpueQhuWFqOS9k+OCkuWkseaVl+OBqOOBv+OBquOBmVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGVyci5zdGF0dXMgPT0gNDIyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDQyMuOBr+ODkOODquODh+ODvOOCt+ODp+ODs+OCqOODqeODvOOBquOBruOBp+OAgeS9leW6pue5sOOCiui/lOOBl+OBpuOCguOCs+OCseOCi+OBr+OBmlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5oyH5pWw44OQ44OD44Kv44Kq44OVXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKHdhaXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWl0ICo9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWpheFJlc3VsdD8ucmVzdWx0ID09ICdPSycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDjgZPjga7jg4Hjg6Pjg7Pjgq/jga/pgIHkv6HmiJDlip/jgZfjgZ/jga7jgafmrKHjgavooYzjgY9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDpgIHkv6HmmYLplpPjgpLoqIjmuKxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cFRpbWUgPSAoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAtIHVwU3RhcnRBdC5nZXRUaW1lKCkpIC8gMTAwMC4wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJwcyA9IChjaHVua0VuZCAtIHNlbnQpIC8gdXBUaW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOasoeOBrlVSTOOBjOadpeOBpuOBn+OCieabtOaWsOOBmeOCi1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNodW5rVXBsb2FkVXJsID0gYWpheFJlc3VsdC51cmwgPz8gY2h1bmtVcGxvYWRVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2VudCA9IGNodW5rRW5kO1xuICAgICAgICAgICAgICAgICAgICBtYXliZVNlbnQgPSBjaHVua0VuZDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIF9vblByb2dyZXNzKCRzZWxmLCBzZW50ICogMTAwLjAgLyB1cGxvYWRGaWxlLnNpemUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDliIblibLjgqLjg4Pjg5fjg63jg7zjg4nlrozkuobjgZfjgZ/jga7jgafjgIHmnIDlvozjgavjg5XjgqHjgqTjg6vjgpLntZDlkIjjgZnjgotcbiAgICAgICAgICAgICAgICBjb25zdCBmaW5pc2hEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBmaWxlX25hbWU6IHVwbG9hZEZpbGUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZmlsZV9zaXplOiB1cGxvYWRGaWxlLnNpemUsXG4gICAgICAgICAgICAgICAgICAgIGlzX2ZpbmlzaDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmICh0b1VzZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICBmaW5pc2hEYXRhLnRvX3VzZXJfaWQgPSB0b1VzZXJJZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGxhc3RBamF4UmVzdWx0O1xuICAgICAgICAgICAgICAgIHdhaXQgPSBSRVRSWV9JTlRFUlZBTDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPD0gUkVUUllfTElNSVQgOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdEFqYXhSZXN1bHQgPSBhd2FpdCAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBjaHVua1VwbG9hZFVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogQ1NSRl9UT0tFTixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoZmluaXNoRGF0YSksXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGFzeW5jIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBteUNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+PSBSRVRSWV9MSU1JVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOimj+WumuWbnuaVsOWkseaVl+OBl+OBn+OBruOBp+OAgeOCouODg+ODl+ODreODvOODieWHpueQhuWFqOS9k+OCkuWkseaVl+OBqOOBv+OBquOBmVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihlcnIuc3RhdHVzID09IDQyMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDQyMuOBr+ODkOODquODh+ODvOOCt+ODp+ODs+OCqOODqeODvOOBquOBruOBp+OAgeS9leW6pue5sOOCiui/lOOBl+OBpuOCguOCs+OCseOCi+OBr+OBmlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5oyH5pWw44OQ44OD44Kv44Kq44OVXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAod2FpdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FpdCAqPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0QWpheFJlc3VsdD8ubWVkaWEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOODleOCoeOCpOODq+e1kOWQiEFQSeOCguaIkOWKn+OBl+OBn+OBruOBp+asoeOBuFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbXlDb25zb2xlLmxvZyhsYXN0QWpheFJlc3VsdCk7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3RBamF4UmVzdWx0Py5tZWRpYSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDlhajpg6jntYLjgo/jgaPjgZ/jga7jgafmiJDlip/mmYLjgrPjg7zjg6vjg5Djg4Pjgq/jgpLlj6njgY9cbiAgICAgICAgICAgICAgICAgICAgX29uU3VjY2Vzcygkc2VsZiwgbGFzdEFqYXhSZXN1bHQubWVkaWEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcign57WQ5ZCIQVBJ5aSx5pWXJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgbXlDb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgX29uRmFpbHVyZSgkc2VsZiwgZXJyKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChwcm9ncmVzc1RpbWVyKTtcbiAgICAgICAgICAgICAgICBfb25Db21wbGV0ZSgkc2VsZik7XG4gICAgICAgICAgICAgICAgJHNlbGYudmFsKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICB9KTtcbn07XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwid2luZG93Iiwic2V0SW5kZXhOYW1lVG9MaXN0SXRlbXMiLCJpZHgiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZG9tIiwic2V0QXR0cmlidXRlIiwibmFtZSIsImdldEF0dHJpYnV0ZSIsImNsb3Nlc3QiLCIkIiwib24iLCJzdWJtaXQiLCJfIiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJvcGVuUG9wdXAiLCJjbGFzc05hbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNlbGVjdG9yIiwiJHBvcHVwIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImZpbmQiLCJvZmYiLCJzZXRGaWxlVXBsb2FkRXZlbnQiLCJvcHRpb24iLCJfZm9ybUNsYXNzIiwiZm9ybUNsYXNzIiwibGVuZ3RoIiwiX3NlbGVjdG9yIiwiX29uU3VjY2VzcyIsIm9uU3VjY2VzcyIsIiRpbnB1dCIsIm1lZGlhIiwibXlDb25zb2xlIiwibG9nIiwiX29uRmFpbHVyZSIsIm9uRmFpbHVyZSIsInJlcyIsImVycm9yIiwiX29uQ29tcGxldGUiLCJvbkNvbXBsZXRlIiwiX29uUHJvZ3Jlc3MiLCJvblByb2dyZXNzIiwicGVyY2VudCIsIiRzZWxmIiwidmFsIiwiJGZvcm0iLCJ1cGxvYWRGaWxlIiwicHJvcCIsInRvVXNlcklkIiwiQ0hVTktfU0laRSIsIlJFVFJZX0xJTUlUIiwiUkVUUllfSU5URVJWQUwiLCJDSFVOS19VUExPQURfVVJMIiwiYXR0ciIsIkNTUkZfVE9LRU4iLCJzZW50IiwibWF5YmVTZW50IiwiY2h1bmtVcGxvYWRVcmwiLCJicHMiLCJwcm9ncmVzc1RpbWVyIiwic2V0SW50ZXJ2YWwiLCJwZXIiLCJzaXplIiwiY2h1bmtFbmQiLCJjaHVua0RhdGEiLCJzbGljZSIsImZkIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ3YWl0IiwiaSIsInVwU3RhcnRBdCIsIkRhdGUiLCJhamF4IiwidHlwZSIsInVybCIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCJkYXRhIiwiZXJyIiwic3RhdHVzIiwic2xlZXAiLCJhamF4UmVzdWx0IiwicmVzdWx0IiwidXBUaW1lIiwiZ2V0VGltZSIsImZpbmlzaERhdGEiLCJmaWxlX25hbWUiLCJmaWxlX3NpemUiLCJpc19maW5pc2giLCJ0b191c2VyX2lkIiwiSlNPTiIsInN0cmluZ2lmeSIsImxhc3RBamF4UmVzdWx0IiwiRXJyb3IiLCJjbGVhckludGVydmFsIl0sInNvdXJjZVJvb3QiOiIifQ==