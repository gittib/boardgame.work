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
  $('.scenario_character_list').on('click', '.character_row .js-chara_delete_button', function () {
    var $self = $(this);
    var charaName = $self.closest('.character_row').find('select[data-key_name=character_id] option:selected').text();
    var msg = CHARA_DELETE_CONFIRM_MESSAGE.replace('___CHARA___', charaName);
    if ($('.character_row').length > 1 && confirm(msg)) {
      $self.closest('.character_row').remove();
      updateLists();
    }
  });
  $('.scenario_character_list').on('click change', 'select[data-key_name=character_id]', function () {
    updateLists();
  });
  $('.js-chara_add_button').on('click', function () {
    var $dom = $('.character_row:last').clone();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RztJQUMzQixJQUFJLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLE1BQU07SUFDMUIsSUFBSSxDQUFDRCxLQUFLLENBQUNDLE1BQU0sYUFBTSxJQUFJLENBQUNILFlBQVksT0FBSTtFQUM5QztBQUNGLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDL0JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9pbmRpdmlzdWFsL215X3NjZW5hcmlvLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3VwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCcuL2Jvb3RzdHJhcCcpO1xucmVxdWlyZSgnLi91cGxvYWQnKTtcbnJlcXVpcmUoJy4vcG9wdXAnKTtcbnJlcXVpcmUoJy4vdXRpbGl0eScpO1xuXG5yZXF1aXJlKCcuL2luZGl2aXN1YWwvbXlfc2NlbmFyaW8tY3JlYXRlJyk7XG5cbiIsIndpbmRvdy5fID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbi8qKlxuICogV2UnbGwgbG9hZCB0aGUgYXhpb3MgSFRUUCBsaWJyYXJ5IHdoaWNoIGFsbG93cyB1cyB0byBlYXNpbHkgaXNzdWUgcmVxdWVzdHNcbiAqIHRvIG91ciBMYXJhdmVsIGJhY2stZW5kLiBUaGlzIGxpYnJhcnkgYXV0b21hdGljYWxseSBoYW5kbGVzIHNlbmRpbmcgdGhlXG4gKiBDU1JGIHRva2VuIGFzIGEgaGVhZGVyIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiB0aGUgXCJYU1JGXCIgdG9rZW4gY29va2llLlxuICovXG5cbndpbmRvdy5heGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5cbndpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcblxuLyoqXG4gKiBFY2hvIGV4cG9zZXMgYW4gZXhwcmVzc2l2ZSBBUEkgZm9yIHN1YnNjcmliaW5nIHRvIGNoYW5uZWxzIGFuZCBsaXN0ZW5pbmdcbiAqIGZvciBldmVudHMgdGhhdCBhcmUgYnJvYWRjYXN0IGJ5IExhcmF2ZWwuIEVjaG8gYW5kIGV2ZW50IGJyb2FkY2FzdGluZ1xuICogYWxsb3dzIHlvdXIgdGVhbSB0byBlYXNpbHkgYnVpbGQgcm9idXN0IHJlYWwtdGltZSB3ZWIgYXBwbGljYXRpb25zLlxuICovXG5cbi8vIGltcG9ydCBFY2hvIGZyb20gJ2xhcmF2ZWwtZWNobyc7XG5cbi8vIHdpbmRvdy5QdXNoZXIgPSByZXF1aXJlKCdwdXNoZXItanMnKTtcblxuLy8gd2luZG93LkVjaG8gPSBuZXcgRWNobyh7XG4vLyAgICAgYnJvYWRjYXN0ZXI6ICdwdXNoZXInLFxuLy8gICAgIGtleTogcHJvY2Vzcy5lbnYuTUlYX1BVU0hFUl9BUFBfS0VZLFxuLy8gICAgIGNsdXN0ZXI6IHByb2Nlc3MuZW52Lk1JWF9QVVNIRVJfQVBQX0NMVVNURVIsXG4vLyAgICAgZm9yY2VUTFM6IHRydWVcbi8vIH0pO1xuIiwiaWYgKCQoJ2JvZHknKS5oYXNDbGFzcygnbXlfc2NlbmFyaW8tY3JlYXRlJykpIHtcbiAgICBmdW5jdGlvbiB1cGRhdGVMaXN0cygpIHtcbiAgICAgICAgc2V0SW5kZXhOYW1lVG9MaXN0SXRlbXMoKTtcblxuICAgICAgICBsZXQgY3JpbWluYWxMaXN0SHRtbCA9ICc8b3B0aW9uPjwvb3B0aW9uPic7XG4gICAgICAgICQoJ3NlbGVjdFtkYXRhLWtleV9uYW1lPWNoYXJhY3Rlcl9pZF0gb3B0aW9uOnNlbGVjdGVkJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0ICRvcHRpb24gPSAkKHRoaXMpO1xuICAgICAgICAgICAgY3JpbWluYWxMaXN0SHRtbCArPSAnPG9wdGlvbiB2YWx1ZT1cIicrJG9wdGlvbi52YWwoKSsnXCI+Jyskb3B0aW9uLnRleHQoKSsnPC9vcHRpb24+JztcbiAgICAgICAgfSk7XG4gICAgICAgICQoJ3NlbGVjdC5jcmltaW5hbCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCAkc2VsZWN0ID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGNvbnN0IGNoYXJhSWQgPSAkc2VsZWN0LnZhbCgpO1xuICAgICAgICAgICAgJHNlbGVjdC5odG1sKGNyaW1pbmFsTGlzdEh0bWwpO1xuICAgICAgICAgICAgJHNlbGVjdC52YWwoY2hhcmFJZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZUxpc3RzKCk7XG5cbiAgICAkKCdbbmFtZT1kYXlzXScpLm9uKCdjaGFuZ2UgY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZCA9ICQodGhpcykudmFsKCk7XG4gICAgICAgICQoJy5zY2VuYXJpb19pbmNpZGVudF9saXN0ID4gbGlbZGF0YS1kYXldJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0ICRkb20gPSAkKHRoaXMpO1xuICAgICAgICAgICAgaWYgKCRkb20uYXR0cignZGF0YS1kYXknKSA8PSBkKSB7XG4gICAgICAgICAgICAgICAgJGRvbS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRkb20uaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICAkKCdbbmFtZT1kYXlzXScpLmNsaWNrKCk7XG5cbiAgICAkKCcuc2NlbmFyaW9fY2hhcmFjdGVyX2xpc3QnKS5vbignY2xpY2snLCAnLmNoYXJhY3Rlcl9yb3cgLmpzLWNoYXJhX2RlbGV0ZV9idXR0b24nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgJHNlbGYgPSAkKHRoaXMpO1xuICAgICAgICBjb25zdCBjaGFyYU5hbWUgPSAkc2VsZi5jbG9zZXN0KCcuY2hhcmFjdGVyX3JvdycpLmZpbmQoJ3NlbGVjdFtkYXRhLWtleV9uYW1lPWNoYXJhY3Rlcl9pZF0gb3B0aW9uOnNlbGVjdGVkJykudGV4dCgpO1xuICAgICAgICBjb25zdCBtc2cgPSBDSEFSQV9ERUxFVEVfQ09ORklSTV9NRVNTQUdFLnJlcGxhY2UoJ19fX0NIQVJBX19fJywgY2hhcmFOYW1lKTtcbiAgICAgICAgaWYgKCQoJy5jaGFyYWN0ZXJfcm93JykubGVuZ3RoID4gMSAmJiBjb25maXJtKG1zZykpIHtcbiAgICAgICAgICAgICRzZWxmLmNsb3Nlc3QoJy5jaGFyYWN0ZXJfcm93JykucmVtb3ZlKCk7XG4gICAgICAgICAgICB1cGRhdGVMaXN0cygpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgJCgnLnNjZW5hcmlvX2NoYXJhY3Rlcl9saXN0Jykub24oJ2NsaWNrIGNoYW5nZScsICdzZWxlY3RbZGF0YS1rZXlfbmFtZT1jaGFyYWN0ZXJfaWRdJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHVwZGF0ZUxpc3RzKCk7XG4gICAgfSk7XG4gICAgJCgnLmpzLWNoYXJhX2FkZF9idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgJGRvbSA9ICQoJy5jaGFyYWN0ZXJfcm93Omxhc3QnKS5jbG9uZSgpO1xuICAgICAgICAkKCcuc2NlbmFyaW9fY2hhcmFjdGVyX2xpc3QnKS5hcHBlbmQoJGRvbSk7XG4gICAgICAgIHVwZGF0ZUxpc3RzKCk7XG4gICAgfSk7XG59XG4iLCJ3aW5kb3cub3BlblBvcHVwID0gY2xhc3NOYW1lID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9ICcuYy1wb3B1cC4nK2NsYXNzTmFtZTtcbiAgICAgICAgY29uc3QgJHBvcHVwID0gJChzZWxlY3Rvcik7XG5cbiAgICAgICAgJHBvcHVwLmFkZENsYXNzKCdvcGVuJyk7XG5cbiAgICAgICAgJHBvcHVwLmZpbmQoJy5maWx0ZXItYXJlYScpLm9mZignY2xpY2sub3Blbl9wb3B1cCcpLm9uKCdjbGljay5vcGVuX3BvcHVwJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkcG9wdXAucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICdyZXN1bHQnOiAnY2xvc2UnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICAkcG9wdXAuZmluZCgnLmNsb3NlX2J1dHRvbicpLm9mZignY2xpY2sub3Blbl9wb3B1cCcpLm9uKCdjbGljay5vcGVuX3BvcHVwJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkcG9wdXAucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICdyZXN1bHQnOiAnY2xvc2UnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICAkcG9wdXAuZmluZCgnW2RhdGEtcmVzdWx0XScpLm9mZignY2xpY2sub3Blbl9wb3B1cCcpLm9uKCdjbGljay5vcGVuX3BvcHVwJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCAkc2VsZiA9ICQodGhpcyk7XG4gICAgICAgICAgICAkcG9wdXAucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICdyZXN1bHQnOiAkc2VsZi5hdHRyKCdkYXRhLXJlc3VsdCcpLFxuICAgICAgICAgICAgICAgICdpbmZvJzogJHNlbGYuYXR0cignZGF0YS1pbmZvJyksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuIiwiLyoqXG4qIOODleOCoeOCpOODq+OCouODg+ODl+ODreODvOODiWpzXG4qXG4qIEBwYXJhbSBvcHRpb24uZm9ybUNsYXNzIOODleOCoeOCpOODq+OCouODg+ODl+ODreODvOODieOCpOODmeODs+ODiOOCkuS7lei+vOOCgGZvcm3jgr/jgrDjga7jgq/jg6njgrlcbiogQHBhcmFtIG9wdGlvbi5vblN1Y2Nlc3MoJGlucHV0LCBtZWRpYSkg44OV44Kh44Kk44Or44Ki44OD44OX44Ot44O844OJ5oiQ5Yqf5pmC44Gu5Yem55CG44CCJGlucHV044Gv5a++6LGh44GuaW5wdXRbdHlwZT1maWxlXVxuKiBAcGFyYW0gb3B0aW9uLm9uRmFpbHVyZSgkaW5wdXQsIHJlcykg44OV44Kh44Kk44Or44Ki44OD44OX44Ot44O844OJ5aSx5pWX5pmC44Gu5Yem55CG44CCJGlucHV044Gv5a++6LGh44GuaW5wdXRbdHlwZT1maWxlXVxuKiBAcGFyYW0gb3B0aW9uLm9uQ29tcGxldGUoJGlucHV0LCB4aHIpIOODleOCoeOCpOODq+OCouODg+ODl+ODreODvOODieWujOS6huaZguOBruWHpueQhuOAgiRpbnB1dOOBr+WvvuixoeOBrmlucHV0W3R5cGU9ZmlsZV1cbiogQHBhcmFtIG9wdGlvbi5vblByb2dyZXNzKCRpbnB1dCwgcGVyY2VudCkg44OV44Kh44Kk44Or44Ki44OD44OX44Ot44O844OJ5Lit44Gu5Yem55CG44CCJGlucHV044Gv5a++6LGh44GuaW5wdXRbdHlwZT1maWxlXVxuKi9cbndpbmRvdy5zZXRGaWxlVXBsb2FkRXZlbnQgPSAob3B0aW9uKSA9PiB7XG4gICAgY29uc3QgX2Zvcm1DbGFzcyA9IChvcHRpb24uZm9ybUNsYXNzIHx8ICcnKS5sZW5ndGggPiAwID8gJy4nK29wdGlvbi5mb3JtQ2xhc3MgOiAnJztcbiAgICBjb25zdCBfc2VsZWN0b3IgPSAnZm9ybScrX2Zvcm1DbGFzcysnIGlucHV0W3R5cGU9ZmlsZV1bbmFtZT1maWxlXSc7XG4gICAgY29uc3QgX29uU3VjY2VzcyA9IG9wdGlvbi5vblN1Y2Nlc3MgfHwgKCgkaW5wdXQsIG1lZGlhKSA9PiB7IG15Q29uc29sZS5sb2cobWVkaWEpOyB9KTtcbiAgICBjb25zdCBfb25GYWlsdXJlID0gb3B0aW9uLm9uRmFpbHVyZSB8fCAoKCRpbnB1dCwgcmVzKSA9PiB7IG15Q29uc29sZS5lcnJvcihyZXMpOyB9KTtcbiAgICBjb25zdCBfb25Db21wbGV0ZSA9IG9wdGlvbi5vbkNvbXBsZXRlIHx8ICgoJGlucHV0KSA9PiB7fSk7XG4gICAgY29uc3QgX29uUHJvZ3Jlc3MgPSBvcHRpb24ub25Qcm9ncmVzcyB8fCAoKCRpbnB1dCwgcGVyY2VudCkgPT4ge30pO1xuXG4gICAgbXlDb25zb2xlLmxvZyhfc2VsZWN0b3IpO1xuXG4gICAgJCgnYm9keScpLm9uKCdjaGFuZ2UnLCBfc2VsZWN0b3IsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCAkc2VsZiA9ICQodGhpcyk7XG4gICAgICAgIGlmICghJHNlbGYudmFsKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkc2VsZi5jbG9zZXN0KCdmb3JtJyk7XG4gICAgICAgIGNvbnN0IHVwbG9hZEZpbGUgPSAkc2VsZi5wcm9wKCdmaWxlcycpWzBdO1xuICAgICAgICBjb25zdCB0b1VzZXJJZCA9ICRmb3JtLmZpbmQoJ1tuYW1lPXRvX3VzZXJfaWRdJykudmFsKCk7XG4gICAgICAgIFxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHByb2dyZXNzVGltZXI7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IENIVU5LX1NJWkUgPSAxMjgqMTAyNCoxMDI0O1xuICAgICAgICAgICAgICAgIGNvbnN0IFJFVFJZX0xJTUlUID0gNTtcbiAgICAgICAgICAgICAgICBjb25zdCBSRVRSWV9JTlRFUlZBTCA9IDEwMDtcbiAgICAgICAgICAgICAgICBjb25zdCBDSFVOS19VUExPQURfVVJMID0gJCgnbWV0YVtuYW1lPWNodW5rX3VwbG9hZF91cmxdJykuYXR0cignY29udGVudCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IENTUkZfVE9LRU4gPSAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBzZW50ID0gMDsgLy8g6YCB5L+h5riI44G/44OQ44Kk44OI5pWwXG4gICAgICAgICAgICAgICAgbGV0IG1heWJlU2VudCA9IDA7IC8vIOacuuS4iuOBrumAgeS/oea4iOOBv+ODkOOCpOODiOaVsOOAguimi+OBi+OBkeS4iuOBruODl+ODreOCsOODrOOCueODkOODvOabtOaWsOOBruOBn+OCgeOBq+S9v+OBhlxuICAgICAgICAgICAgICAgIGxldCBjaHVua1VwbG9hZFVybCA9IENIVU5LX1VQTE9BRF9VUkw7XG4gICAgICAgICAgICAgICAgbGV0IHdhaXQ7IC8vIOaMh+aVsOODkOODg+OCr+OCquODleeUqFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBicHMgPSAwOyAvLyDlkITjgqLjg4Pjg5fjg63jg7zjg4njgYvjgonoqIjnrpfjgZXjgozjgZ9CUFNbYnl0ZS9zZWNdXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbWF5YmVTZW50ICs9IGJwcyAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1heWJlU2VudCA+IHNlbnQgKyBDSFVOS19TSVpFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXliZVNlbnQgPSBzZW50ICsgQ0hVTktfU0laRTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgcGVyID0gbWF5YmVTZW50ICogMTAwLjAgLyB1cGxvYWRGaWxlLnNpemU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwZXIgPiA5OS45KSBwZXIgPSA5OS45O1xuICAgICAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcygkc2VsZiwgcGVyKTtcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBfb25Qcm9ncmVzcygkc2VsZiwgMCk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHNlbnQgPCB1cGxvYWRGaWxlLnNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNodW5rRW5kID0gc2VudCArIENIVU5LX1NJWkU7IC8vIOS7iuWbnumAgeOCi+ODgeODo+ODs+OCr+OBruacq+WwvuODkOOCpOODiFxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaHVua0VuZCA9IENIVU5LX1NJWkUgLyA0OyAvLyDmnIDliJ3jgaDjgZHjga/ou73jgYTlrrnph4/jgafpgIHjgorjgIHjg6zjgrnjg53jg7Pjgrnjgr/jgqTjg6DjgpLoqIjmuKzjgZnjgotcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2h1bmtEYXRhID0gdXBsb2FkRmlsZS5zbGljZShzZW50LCBjaHVua0VuZCk7XG4gICAgICAgICAgICAgICAgICAgIG15Q29uc29sZS5sb2coc2VudCwgY2h1bmtFbmQpO1xuICAgICAgICAgICAgICAgICAgICBteUNvbnNvbGUubG9nKGNodW5rRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoJ2ZpbGVfbmFtZScsIHVwbG9hZEZpbGUubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZCgnZmlsZV9zaXplJywgdXBsb2FkRmlsZS5zaXplKTtcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKCdjaHVua19kYXRhJywgY2h1bmtEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHdhaXQgPSBSRVRSWV9JTlRFUlZBTDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDEgOyBpIDw9IFJFVFJZX0xJTUlUIDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cFN0YXJ0QXQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhamF4UmVzdWx0ID0gYXdhaXQgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBjaHVua1VwbG9hZFVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiBDU1JGX1RPS0VOLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBmZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGFzeW5jIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlDb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID49IFJFVFJZX0xJTUlUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOimj+WumuWbnuaVsOWkseaVl+OBl+OBn+OBruOBp+OAgeOCouODg+ODl+ODreODvOODieWHpueQhuWFqOS9k+OCkuWkseaVl+OBqOOBv+OBquOBmVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGVyci5zdGF0dXMgPT0gNDIyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDQyMuOBr+ODkOODquODh+ODvOOCt+ODp+ODs+OCqOODqeODvOOBquOBruOBp+OAgeS9leW6pue5sOOCiui/lOOBl+OBpuOCguOCs+OCseOCi+OBr+OBmlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5oyH5pWw44OQ44OD44Kv44Kq44OVXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKHdhaXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWl0ICo9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWpheFJlc3VsdD8ucmVzdWx0ID09ICdPSycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDjgZPjga7jg4Hjg6Pjg7Pjgq/jga/pgIHkv6HmiJDlip/jgZfjgZ/jga7jgafmrKHjgavooYzjgY9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDpgIHkv6HmmYLplpPjgpLoqIjmuKxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cFRpbWUgPSAoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAtIHVwU3RhcnRBdC5nZXRUaW1lKCkpIC8gMTAwMC4wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJwcyA9IChjaHVua0VuZCAtIHNlbnQpIC8gdXBUaW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOasoeOBrlVSTOOBjOadpeOBpuOBn+OCieabtOaWsOOBmeOCi1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNodW5rVXBsb2FkVXJsID0gYWpheFJlc3VsdC51cmwgPz8gY2h1bmtVcGxvYWRVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2VudCA9IGNodW5rRW5kO1xuICAgICAgICAgICAgICAgICAgICBtYXliZVNlbnQgPSBjaHVua0VuZDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIF9vblByb2dyZXNzKCRzZWxmLCBzZW50ICogMTAwLjAgLyB1cGxvYWRGaWxlLnNpemUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDliIblibLjgqLjg4Pjg5fjg63jg7zjg4nlrozkuobjgZfjgZ/jga7jgafjgIHmnIDlvozjgavjg5XjgqHjgqTjg6vjgpLntZDlkIjjgZnjgotcbiAgICAgICAgICAgICAgICBjb25zdCBmaW5pc2hEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBmaWxlX25hbWU6IHVwbG9hZEZpbGUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZmlsZV9zaXplOiB1cGxvYWRGaWxlLnNpemUsXG4gICAgICAgICAgICAgICAgICAgIGlzX2ZpbmlzaDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmICh0b1VzZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICBmaW5pc2hEYXRhLnRvX3VzZXJfaWQgPSB0b1VzZXJJZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGxhc3RBamF4UmVzdWx0O1xuICAgICAgICAgICAgICAgIHdhaXQgPSBSRVRSWV9JTlRFUlZBTDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPD0gUkVUUllfTElNSVQgOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdEFqYXhSZXN1bHQgPSBhd2FpdCAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBjaHVua1VwbG9hZFVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogQ1NSRl9UT0tFTixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoZmluaXNoRGF0YSksXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGFzeW5jIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBteUNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+PSBSRVRSWV9MSU1JVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOimj+WumuWbnuaVsOWkseaVl+OBl+OBn+OBruOBp+OAgeOCouODg+ODl+ODreODvOODieWHpueQhuWFqOS9k+OCkuWkseaVl+OBqOOBv+OBquOBmVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihlcnIuc3RhdHVzID09IDQyMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDQyMuOBr+ODkOODquODh+ODvOOCt+ODp+ODs+OCqOODqeODvOOBquOBruOBp+OAgeS9leW6pue5sOOCiui/lOOBl+OBpuOCguOCs+OCseOCi+OBr+OBmlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5oyH5pWw44OQ44OD44Kv44Kq44OVXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAod2FpdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FpdCAqPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0QWpheFJlc3VsdD8ubWVkaWEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOODleOCoeOCpOODq+e1kOWQiEFQSeOCguaIkOWKn+OBl+OBn+OBruOBp+asoeOBuFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbXlDb25zb2xlLmxvZyhsYXN0QWpheFJlc3VsdCk7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3RBamF4UmVzdWx0Py5tZWRpYSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDlhajpg6jntYLjgo/jgaPjgZ/jga7jgafmiJDlip/mmYLjgrPjg7zjg6vjg5Djg4Pjgq/jgpLlj6njgY9cbiAgICAgICAgICAgICAgICAgICAgX29uU3VjY2Vzcygkc2VsZiwgbGFzdEFqYXhSZXN1bHQubWVkaWEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcign57WQ5ZCIQVBJ5aSx5pWXJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgbXlDb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgX29uRmFpbHVyZSgkc2VsZiwgZXJyKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChwcm9ncmVzc1RpbWVyKTtcbiAgICAgICAgICAgICAgICBfb25Db21wbGV0ZSgkc2VsZik7XG4gICAgICAgICAgICAgICAgJHNlbGYudmFsKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICB9KTtcbn07XG5cbiIsIndpbmRvdy5zZXRJbmRleE5hbWVUb0xpc3RJdGVtcyA9ICgpID0+IHtcbiAgICBsZXQgaWR4ID0gMTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pbmRleF0nKS5mb3JFYWNoKGRvbSA9PiB7XG4gICAgICAgIGRvbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpZHgrKyk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtaW5kZXhdIFtkYXRhLWxpc3RfbmFtZV1bZGF0YS1rZXlfbmFtZV0nKS5mb3JFYWNoKGRvbSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb20uZ2V0QXR0cmlidXRlKCdkYXRhLWxpc3RfbmFtZScpKydbJytkb20uY2xvc2VzdCgnW2RhdGEtaW5kZXhdJykuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykrJ11bJytkb20uZ2V0QXR0cmlidXRlKCdkYXRhLWtleV9uYW1lJykrJ10nO1xuICAgICAgICBkb20uc2V0QXR0cmlidXRlKCduYW1lJywgbmFtZSk7XG4gICAgfSk7XG59O1xuXG4kKCdmb3JtIC5zdWJtaXRfYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykuc3VibWl0KCk7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgLy8gdGV4dGFyZWHjgr/jgrDjgpLlhajjgablj5blvpdcbiAgY29uc3QgdGV4dGFyZWFFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidGV4dGFyZWFcIik7XG5cbiAgdGV4dGFyZWFFbHMuZm9yRWFjaCgodGV4dGFyZWFFbCkgPT4ge1xuICAgIC8vIOODh+ODleOCqeODq+ODiOWApOOBqOOBl+OBpuOCueOCv+OCpOODq+WxnuaAp+OCkuS7mOS4jlxuICAgIHRleHRhcmVhRWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYGhlaWdodDogJHt0ZXh0YXJlYUVsLnNjcm9sbEhlaWdodH1weDtgKTtcbiAgICAvLyBpbnB1dOOCpOODmeODs+ODiOOBjOeZuueUn+OBmeOCi+OBn+OBs+OBq+mWouaVsOWRvOOBs+WHuuOBl1xuICAgIHRleHRhcmVhRWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHNldFRleHRhcmVhSGVpZ2h0KTtcbiAgfSk7XG5cbiAgLy8gdGV4dGFyZWHjga7pq5jjgZXjgpLoqIjnrpfjgZfjgabmjIflrprjgZnjgovplqLmlbBcbiAgZnVuY3Rpb24gc2V0VGV4dGFyZWFIZWlnaHQoKSB7XG4gICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIjtcbiAgICB0aGlzLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgfVxufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsicmVxdWlyZSIsIndpbmRvdyIsIl8iLCJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsIiQiLCJoYXNDbGFzcyIsInVwZGF0ZUxpc3RzIiwic2V0SW5kZXhOYW1lVG9MaXN0SXRlbXMiLCJjcmltaW5hbExpc3RIdG1sIiwiZWFjaCIsIiRvcHRpb24iLCJ2YWwiLCJ0ZXh0IiwiJHNlbGVjdCIsImNoYXJhSWQiLCJodG1sIiwib24iLCJkIiwiJGRvbSIsImF0dHIiLCJzaG93IiwiaGlkZSIsImNsaWNrIiwiJHNlbGYiLCJjaGFyYU5hbWUiLCJjbG9zZXN0IiwiZmluZCIsIm1zZyIsIkNIQVJBX0RFTEVURV9DT05GSVJNX01FU1NBR0UiLCJyZXBsYWNlIiwibGVuZ3RoIiwiY29uZmlybSIsInJlbW92ZSIsImNsb25lIiwiYXBwZW5kIiwib3BlblBvcHVwIiwiY2xhc3NOYW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZWxlY3RvciIsIiRwb3B1cCIsImFkZENsYXNzIiwib2ZmIiwicmVtb3ZlQ2xhc3MiLCJzZXRGaWxlVXBsb2FkRXZlbnQiLCJvcHRpb24iLCJfZm9ybUNsYXNzIiwiZm9ybUNsYXNzIiwiX3NlbGVjdG9yIiwiX29uU3VjY2VzcyIsIm9uU3VjY2VzcyIsIiRpbnB1dCIsIm1lZGlhIiwibXlDb25zb2xlIiwibG9nIiwiX29uRmFpbHVyZSIsIm9uRmFpbHVyZSIsInJlcyIsImVycm9yIiwiX29uQ29tcGxldGUiLCJvbkNvbXBsZXRlIiwiX29uUHJvZ3Jlc3MiLCJvblByb2dyZXNzIiwicGVyY2VudCIsIiRmb3JtIiwidXBsb2FkRmlsZSIsInByb3AiLCJ0b1VzZXJJZCIsIkNIVU5LX1NJWkUiLCJSRVRSWV9MSU1JVCIsIlJFVFJZX0lOVEVSVkFMIiwiQ0hVTktfVVBMT0FEX1VSTCIsIkNTUkZfVE9LRU4iLCJzZW50IiwibWF5YmVTZW50IiwiY2h1bmtVcGxvYWRVcmwiLCJicHMiLCJwcm9ncmVzc1RpbWVyIiwic2V0SW50ZXJ2YWwiLCJwZXIiLCJzaXplIiwiY2h1bmtFbmQiLCJjaHVua0RhdGEiLCJzbGljZSIsImZkIiwiRm9ybURhdGEiLCJuYW1lIiwid2FpdCIsImkiLCJ1cFN0YXJ0QXQiLCJEYXRlIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJjb250ZW50VHlwZSIsInByb2Nlc3NEYXRhIiwiZGF0YSIsImVyciIsInN0YXR1cyIsInNsZWVwIiwiYWpheFJlc3VsdCIsInJlc3VsdCIsInVwVGltZSIsImdldFRpbWUiLCJmaW5pc2hEYXRhIiwiZmlsZV9uYW1lIiwiZmlsZV9zaXplIiwiaXNfZmluaXNoIiwidG9fdXNlcl9pZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJsYXN0QWpheFJlc3VsdCIsIkVycm9yIiwiY2xlYXJJbnRlcnZhbCIsImlkeCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJkb20iLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJzdWJtaXQiLCJhZGRFdmVudExpc3RlbmVyIiwidGV4dGFyZWFFbHMiLCJ0ZXh0YXJlYUVsIiwic2Nyb2xsSGVpZ2h0Iiwic2V0VGV4dGFyZWFIZWlnaHQiLCJzdHlsZSIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=