(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");
__webpack_require__(/*! ./upload */ "./resources/js/upload.js");
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
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

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

/***/ "./resources/js/upload.js":
/*!********************************!*\
  !*** ./resources/js/upload.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/sass/app.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RWxDLElBQUlnRSxLQUFLLENBQUMsU0FBUyxDQUFDO3NCQUFBO3NCQUFBO3dCQUFBO29CQUFBO2tCQUFBO2dCQUFBO2NBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtjQUFBO2NBQUE7Y0FJOUIvRCxTQUFTLENBQUNLLEtBQUssY0FBSztjQUNwQkgsVUFBVSxDQUFDUyxLQUFLLGVBQU07WUFBQztjQUFBO2NBRXZCcUQsYUFBYSxDQUFDcEMsYUFBYSxDQUFDO2NBQzVCdEIsV0FBVyxDQUFDSyxLQUFLLENBQUM7Y0FDbEJBLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLEVBQUUsQ0FBQztjQUFDO1lBQUE7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUEsQ0FFckIsSUFBRztFQUNSLENBQUMsQ0FBQztBQUNOLENBQUM7Ozs7Ozs7Ozs7OztBQzlLRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXBsb2FkLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zYXNzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4vYm9vdHN0cmFwJyk7XHJcbnJlcXVpcmUoJy4vdXBsb2FkJyk7XHJcblxyXG53aW5kb3cuc2V0SW5kZXhOYW1lVG9MaXN0SXRlbXMgPSAoKSA9PiB7XHJcbiAgICBsZXQgaWR4ID0gMTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWluZGV4XScpLmZvckVhY2goZG9tID0+IHtcclxuICAgICAgICBkb20uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaWR4KyspO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pbmRleF0gW2RhdGEtbGlzdF9uYW1lXVtkYXRhLWtleV9uYW1lXScpLmZvckVhY2goZG9tID0+IHtcclxuICAgICAgICBjb25zdCBuYW1lID0gZG9tLmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0X25hbWUnKSsnWycrZG9tLmNsb3Nlc3QoJ1tkYXRhLWluZGV4XScpLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKyddWycrZG9tLmdldEF0dHJpYnV0ZSgnZGF0YS1rZXlfbmFtZScpKyddJztcclxuICAgICAgICBkb20uc2V0QXR0cmlidXRlKCduYW1lJywgbmFtZSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbiQoJ2Zvcm0gLnN1Ym1pdF9idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICQodGhpcykuY2xvc2VzdCgnZm9ybScpLnN1Ym1pdCgpO1xyXG59KTtcclxuIiwid2luZG93Ll8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcclxuXHJcbi8qKlxyXG4gKiBXZSdsbCBsb2FkIHRoZSBheGlvcyBIVFRQIGxpYnJhcnkgd2hpY2ggYWxsb3dzIHVzIHRvIGVhc2lseSBpc3N1ZSByZXF1ZXN0c1xyXG4gKiB0byBvdXIgTGFyYXZlbCBiYWNrLWVuZC4gVGhpcyBsaWJyYXJ5IGF1dG9tYXRpY2FsbHkgaGFuZGxlcyBzZW5kaW5nIHRoZVxyXG4gKiBDU1JGIHRva2VuIGFzIGEgaGVhZGVyIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiB0aGUgXCJYU1JGXCIgdG9rZW4gY29va2llLlxyXG4gKi9cclxuXHJcbndpbmRvdy5heGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcblxyXG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XHJcblxyXG4vKipcclxuICogRWNobyBleHBvc2VzIGFuIGV4cHJlc3NpdmUgQVBJIGZvciBzdWJzY3JpYmluZyB0byBjaGFubmVscyBhbmQgbGlzdGVuaW5nXHJcbiAqIGZvciBldmVudHMgdGhhdCBhcmUgYnJvYWRjYXN0IGJ5IExhcmF2ZWwuIEVjaG8gYW5kIGV2ZW50IGJyb2FkY2FzdGluZ1xyXG4gKiBhbGxvd3MgeW91ciB0ZWFtIHRvIGVhc2lseSBidWlsZCByb2J1c3QgcmVhbC10aW1lIHdlYiBhcHBsaWNhdGlvbnMuXHJcbiAqL1xyXG5cclxuLy8gaW1wb3J0IEVjaG8gZnJvbSAnbGFyYXZlbC1lY2hvJztcclxuXHJcbi8vIHdpbmRvdy5QdXNoZXIgPSByZXF1aXJlKCdwdXNoZXItanMnKTtcclxuXHJcbi8vIHdpbmRvdy5FY2hvID0gbmV3IEVjaG8oe1xyXG4vLyAgICAgYnJvYWRjYXN0ZXI6ICdwdXNoZXInLFxyXG4vLyAgICAga2V5OiBwcm9jZXNzLmVudi5NSVhfUFVTSEVSX0FQUF9LRVksXHJcbi8vICAgICBjbHVzdGVyOiBwcm9jZXNzLmVudi5NSVhfUFVTSEVSX0FQUF9DTFVTVEVSLFxyXG4vLyAgICAgZm9yY2VUTFM6IHRydWVcclxuLy8gfSk7XHJcbiIsIi8qKlxyXG4qIOODleOCoeOCpOODq+OCouODg+ODl+ODreODvOODiWpzXHJcbipcclxuKiBAcGFyYW0gb3B0aW9uLmZvcm1DbGFzcyDjg5XjgqHjgqTjg6vjgqLjg4Pjg5fjg63jg7zjg4njgqTjg5njg7Pjg4jjgpLku5XovrzjgoBmb3Jt44K/44Kw44Gu44Kv44Op44K5XHJcbiogQHBhcmFtIG9wdGlvbi5vblN1Y2Nlc3MoJGlucHV0LCBtZWRpYSkg44OV44Kh44Kk44Or44Ki44OD44OX44Ot44O844OJ5oiQ5Yqf5pmC44Gu5Yem55CG44CCJGlucHV044Gv5a++6LGh44GuaW5wdXRbdHlwZT1maWxlXVxyXG4qIEBwYXJhbSBvcHRpb24ub25GYWlsdXJlKCRpbnB1dCwgcmVzKSDjg5XjgqHjgqTjg6vjgqLjg4Pjg5fjg63jg7zjg4nlpLHmlZfmmYLjga7lh6bnkIbjgIIkaW5wdXTjga/lr77osaHjga5pbnB1dFt0eXBlPWZpbGVdXHJcbiogQHBhcmFtIG9wdGlvbi5vbkNvbXBsZXRlKCRpbnB1dCwgeGhyKSDjg5XjgqHjgqTjg6vjgqLjg4Pjg5fjg63jg7zjg4nlrozkuobmmYLjga7lh6bnkIbjgIIkaW5wdXTjga/lr77osaHjga5pbnB1dFt0eXBlPWZpbGVdXHJcbiogQHBhcmFtIG9wdGlvbi5vblByb2dyZXNzKCRpbnB1dCwgcGVyY2VudCkg44OV44Kh44Kk44Or44Ki44OD44OX44Ot44O844OJ5Lit44Gu5Yem55CG44CCJGlucHV044Gv5a++6LGh44GuaW5wdXRbdHlwZT1maWxlXVxyXG4qL1xyXG53aW5kb3cuc2V0RmlsZVVwbG9hZEV2ZW50ID0gKG9wdGlvbikgPT4ge1xyXG4gICAgY29uc3QgX2Zvcm1DbGFzcyA9IChvcHRpb24uZm9ybUNsYXNzIHx8ICcnKS5sZW5ndGggPiAwID8gJy4nK29wdGlvbi5mb3JtQ2xhc3MgOiAnJztcclxuICAgIGNvbnN0IF9zZWxlY3RvciA9ICdmb3JtJytfZm9ybUNsYXNzKycgaW5wdXRbdHlwZT1maWxlXVtuYW1lPWZpbGVdJztcclxuICAgIGNvbnN0IF9vblN1Y2Nlc3MgPSBvcHRpb24ub25TdWNjZXNzIHx8ICgoJGlucHV0LCBtZWRpYSkgPT4geyBteUNvbnNvbGUubG9nKG1lZGlhKTsgfSk7XHJcbiAgICBjb25zdCBfb25GYWlsdXJlID0gb3B0aW9uLm9uRmFpbHVyZSB8fCAoKCRpbnB1dCwgcmVzKSA9PiB7IG15Q29uc29sZS5lcnJvcihyZXMpOyB9KTtcclxuICAgIGNvbnN0IF9vbkNvbXBsZXRlID0gb3B0aW9uLm9uQ29tcGxldGUgfHwgKCgkaW5wdXQpID0+IHt9KTtcclxuICAgIGNvbnN0IF9vblByb2dyZXNzID0gb3B0aW9uLm9uUHJvZ3Jlc3MgfHwgKCgkaW5wdXQsIHBlcmNlbnQpID0+IHt9KTtcclxuXHJcbiAgICBteUNvbnNvbGUubG9nKF9zZWxlY3Rvcik7XHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjaGFuZ2UnLCBfc2VsZWN0b3IsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0ICRzZWxmID0gJCh0aGlzKTtcclxuICAgICAgICBpZiAoISRzZWxmLnZhbCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkc2VsZi5jbG9zZXN0KCdmb3JtJyk7XHJcbiAgICAgICAgY29uc3QgdXBsb2FkRmlsZSA9ICRzZWxmLnByb3AoJ2ZpbGVzJylbMF07XHJcbiAgICAgICAgY29uc3QgdG9Vc2VySWQgPSAkZm9ybS5maW5kKCdbbmFtZT10b191c2VyX2lkXScpLnZhbCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwcm9ncmVzc1RpbWVyO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgQ0hVTktfU0laRSA9IDEyOCoxMDI0KjEwMjQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBSRVRSWV9MSU1JVCA9IDU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBSRVRSWV9JTlRFUlZBTCA9IDEwMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IENIVU5LX1VQTE9BRF9VUkwgPSAkKCdtZXRhW25hbWU9Y2h1bmtfdXBsb2FkX3VybF0nKS5hdHRyKCdjb250ZW50Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBDU1JGX1RPS0VOID0gJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IHNlbnQgPSAwOyAvLyDpgIHkv6HmuIjjgb/jg5DjgqTjg4jmlbBcclxuICAgICAgICAgICAgICAgIGxldCBtYXliZVNlbnQgPSAwOyAvLyDmnLrkuIrjga7pgIHkv6HmuIjjgb/jg5DjgqTjg4jmlbDjgILopovjgYvjgZHkuIrjga7jg5fjg63jgrDjg6zjgrnjg5Djg7zmm7TmlrDjga7jgZ/jgoHjgavkvb/jgYZcclxuICAgICAgICAgICAgICAgIGxldCBjaHVua1VwbG9hZFVybCA9IENIVU5LX1VQTE9BRF9VUkw7XHJcbiAgICAgICAgICAgICAgICBsZXQgd2FpdDsgLy8g5oyH5pWw44OQ44OD44Kv44Kq44OV55SoXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBicHMgPSAwOyAvLyDlkITjgqLjg4Pjg5fjg63jg7zjg4njgYvjgonoqIjnrpfjgZXjgozjgZ9CUFNbYnl0ZS9zZWNdXHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzc1RpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heWJlU2VudCArPSBicHMgKiAwLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1heWJlU2VudCA+IHNlbnQgKyBDSFVOS19TSVpFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heWJlU2VudCA9IHNlbnQgKyBDSFVOS19TSVpFO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGVyID0gbWF5YmVTZW50ICogMTAwLjAgLyB1cGxvYWRGaWxlLnNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBlciA+IDk5LjkpIHBlciA9IDk5Ljk7XHJcbiAgICAgICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MoJHNlbGYsIHBlcik7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgX29uUHJvZ3Jlc3MoJHNlbGYsIDApO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHNlbnQgPCB1cGxvYWRGaWxlLnNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmtFbmQgPSBzZW50ICsgQ0hVTktfU0laRTsgLy8g5LuK5Zue6YCB44KL44OB44Oj44Oz44Kv44Gu5pyr5bC+44OQ44Kk44OIXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbnQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaHVua0VuZCA9IENIVU5LX1NJWkUgLyA0OyAvLyDmnIDliJ3jgaDjgZHjga/ou73jgYTlrrnph4/jgafpgIHjgorjgIHjg6zjgrnjg53jg7Pjgrnjgr/jgqTjg6DjgpLoqIjmuKzjgZnjgotcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2h1bmtEYXRhID0gdXBsb2FkRmlsZS5zbGljZShzZW50LCBjaHVua0VuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbXlDb25zb2xlLmxvZyhzZW50LCBjaHVua0VuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbXlDb25zb2xlLmxvZyhjaHVua0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKCdmaWxlX25hbWUnLCB1cGxvYWRGaWxlLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZCgnZmlsZV9zaXplJywgdXBsb2FkRmlsZS5zaXplKTtcclxuICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoJ2NodW5rX2RhdGEnLCBjaHVua0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHdhaXQgPSBSRVRSWV9JTlRFUlZBTDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMSA7IGkgPD0gUkVUUllfTElNSVQgOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBTdGFydEF0ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFqYXhSZXN1bHQgPSBhd2FpdCAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBjaHVua1VwbG9hZFVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogQ1NSRl9UT0tFTixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBmZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goYXN5bmMgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15Q29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID49IFJFVFJZX0xJTUlUKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6KaP5a6a5Zue5pWw5aSx5pWX44GX44Gf44Gu44Gn44CB44Ki44OD44OX44Ot44O844OJ5Yem55CG5YWo5L2T44KS5aSx5pWX44Go44G/44Gq44GZXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGVyci5zdGF0dXMgPT0gNDIyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gNDIy44Gv44OQ44Oq44OH44O844K344On44Oz44Ko44Op44O844Gq44Gu44Gn44CB5L2V5bqm57mw44KK6L+U44GX44Gm44KC44Kz44Kx44KL44Gv44GaXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmjIfmlbDjg5Djg4Pjgq/jgqrjg5VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCh3YWl0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWl0ICo9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWpheFJlc3VsdD8ucmVzdWx0ID09ICdPSycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOOBk+OBruODgeODo+ODs+OCr+OBr+mAgeS/oeaIkOWKn+OBl+OBn+OBruOBp+asoeOBq+ihjOOBj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDpgIHkv6HmmYLplpPjgpLoqIjmuKxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwVGltZSA9ICgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gdXBTdGFydEF0LmdldFRpbWUoKSkgLyAxMDAwLjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicHMgPSAoY2h1bmtFbmQgLSBzZW50KSAvIHVwVGltZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5qyh44GuVVJM44GM5p2l44Gm44Gf44KJ5pu05paw44GZ44KLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaHVua1VwbG9hZFVybCA9IGFqYXhSZXN1bHQudXJsID8/IGNodW5rVXBsb2FkVXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VudCA9IGNodW5rRW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heWJlU2VudCA9IGNodW5rRW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIF9vblByb2dyZXNzKCRzZWxmLCBzZW50ICogMTAwLjAgLyB1cGxvYWRGaWxlLnNpemUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyDliIblibLjgqLjg4Pjg5fjg63jg7zjg4nlrozkuobjgZfjgZ/jga7jgafjgIHmnIDlvozjgavjg5XjgqHjgqTjg6vjgpLntZDlkIjjgZnjgotcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbmlzaERhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZV9uYW1lOiB1cGxvYWRGaWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZV9zaXplOiB1cGxvYWRGaWxlLnNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNfZmluaXNoOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGlmICh0b1VzZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmlzaERhdGEudG9fdXNlcl9pZCA9IHRvVXNlcklkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgbGFzdEFqYXhSZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB3YWl0ID0gUkVUUllfSU5URVJWQUw7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPD0gUkVUUllfTElNSVQgOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0QWpheFJlc3VsdCA9IGF3YWl0ICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBjaHVua1VwbG9hZFVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6IENTUkZfVE9LRU4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGZpbmlzaERhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGFzeW5jIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15Q29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPj0gUkVUUllfTElNSVQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOimj+WumuWbnuaVsOWkseaVl+OBl+OBn+OBruOBp+OAgeOCouODg+ODl+ODreODvOODieWHpueQhuWFqOS9k+OCkuWkseaVl+OBqOOBv+OBquOBmVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZXJyLnN0YXR1cyA9PSA0MjIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDQyMuOBr+ODkOODquODh+ODvOOCt+ODp+ODs+OCqOODqeODvOOBquOBruOBp+OAgeS9leW6pue5sOOCiui/lOOBl+OBpuOCguOCs+OCseOCi+OBr+OBmlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5oyH5pWw44OQ44OD44Kv44Kq44OVXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCh3YWl0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhaXQgKj0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0QWpheFJlc3VsdD8ubWVkaWEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g44OV44Kh44Kk44Or57WQ5ZCIQVBJ44KC5oiQ5Yqf44GX44Gf44Gu44Gn5qyh44G4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG15Q29uc29sZS5sb2cobGFzdEFqYXhSZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxhc3RBamF4UmVzdWx0Py5tZWRpYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWFqOmDqOe1guOCj+OBo+OBn+OBruOBp+aIkOWKn+aZguOCs+ODvOODq+ODkOODg+OCr+OCkuWPqeOBj1xyXG4gICAgICAgICAgICAgICAgICAgIF9vblN1Y2Nlc3MoJHNlbGYsIGxhc3RBamF4UmVzdWx0Lm1lZGlhKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfntZDlkIhBUEnlpLHmlZcnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIG15Q29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgX29uRmFpbHVyZSgkc2VsZiwgZXJyKTtcclxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwocHJvZ3Jlc3NUaW1lcik7XHJcbiAgICAgICAgICAgICAgICBfb25Db21wbGV0ZSgkc2VsZik7XHJcbiAgICAgICAgICAgICAgICAkc2VsZi52YWwoJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkoKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJ3aW5kb3ciLCJzZXRJbmRleE5hbWVUb0xpc3RJdGVtcyIsImlkeCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJkb20iLCJzZXRBdHRyaWJ1dGUiLCJuYW1lIiwiZ2V0QXR0cmlidXRlIiwiY2xvc2VzdCIsIiQiLCJvbiIsInN1Ym1pdCIsIl8iLCJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsInNldEZpbGVVcGxvYWRFdmVudCIsIm9wdGlvbiIsIl9mb3JtQ2xhc3MiLCJmb3JtQ2xhc3MiLCJsZW5ndGgiLCJfc2VsZWN0b3IiLCJfb25TdWNjZXNzIiwib25TdWNjZXNzIiwiJGlucHV0IiwibWVkaWEiLCJteUNvbnNvbGUiLCJsb2ciLCJfb25GYWlsdXJlIiwib25GYWlsdXJlIiwicmVzIiwiZXJyb3IiLCJfb25Db21wbGV0ZSIsIm9uQ29tcGxldGUiLCJfb25Qcm9ncmVzcyIsIm9uUHJvZ3Jlc3MiLCJwZXJjZW50IiwiJHNlbGYiLCJ2YWwiLCIkZm9ybSIsInVwbG9hZEZpbGUiLCJwcm9wIiwidG9Vc2VySWQiLCJmaW5kIiwiQ0hVTktfU0laRSIsIlJFVFJZX0xJTUlUIiwiUkVUUllfSU5URVJWQUwiLCJDSFVOS19VUExPQURfVVJMIiwiYXR0ciIsIkNTUkZfVE9LRU4iLCJzZW50IiwibWF5YmVTZW50IiwiY2h1bmtVcGxvYWRVcmwiLCJicHMiLCJwcm9ncmVzc1RpbWVyIiwic2V0SW50ZXJ2YWwiLCJwZXIiLCJzaXplIiwiY2h1bmtFbmQiLCJjaHVua0RhdGEiLCJzbGljZSIsImZkIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ3YWl0IiwiaSIsInVwU3RhcnRBdCIsIkRhdGUiLCJhamF4IiwidHlwZSIsInVybCIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCJkYXRhIiwiZXJyIiwic3RhdHVzIiwic2xlZXAiLCJhamF4UmVzdWx0IiwicmVzdWx0IiwidXBUaW1lIiwiZ2V0VGltZSIsImZpbmlzaERhdGEiLCJmaWxlX25hbWUiLCJmaWxlX3NpemUiLCJpc19maW5pc2giLCJ0b191c2VyX2lkIiwiSlNPTiIsInN0cmluZ2lmeSIsImxhc3RBamF4UmVzdWx0IiwiRXJyb3IiLCJjbGVhckludGVydmFsIl0sInNvdXJjZVJvb3QiOiIifQ==