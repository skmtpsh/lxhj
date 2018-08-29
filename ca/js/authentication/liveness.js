/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "javascripts/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _liveness = __webpack_require__(3);

	var _liveness2 = _interopRequireDefault(_liveness);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function (global, factory) {

		"use strict";

		if (( false ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {

			module.exports = global.Liveness = global.document ? factory(global, true) : function (w) {
				if (!w.document) {
					throw new Error("Liveness requires a window with a document");
				}
				return factory(w);
			};
		} else {
			global.Liveness = factory(global);
		}

		// Pass this if window is not defined yet
	})(typeof window !== "undefined" ? window : undefined, function (window, noGlobal) {

		"use strict";

		return _liveness2.default;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _config = __webpack_require__(4);

	var _config2 = _interopRequireDefault(_config);

	var _constants = __webpack_require__(6);

	var _compatible = __webpack_require__(7);

	var _support = __webpack_require__(8);

	__webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var alert = window.alert;

	/**
	 * 该方法用于将对象转换为使用[]表示的字符串形式。
	 * 比如，对象为：
	 * {
	 *  a:'a',
	 *  b:[{
	 *    c:'c'
	 *  }, 1]
	 * }
	 *
	 * 如果在objectToQueryString方法的add中不使用encodeURIComponent，则最终的结果为：
	 * 'a=a&b[0][c]=c&b[]=1'
	 */
	function buildParams(prefix, obj, add) {
	  var name, i, l, rbracket;
	  rbracket = /\[\]$/;
	  if (obj instanceof Array) {
	    for (i = 0, l = obj.length; i < l; i++) {
	      if (rbracket.test(prefix)) {
	        add(prefix, obj[i]);
	      } else {
	        buildParams(prefix + "[" + (_typeof(obj[i]) === "object" ? i : "") + "]", obj[i], add);
	      }
	    }
	  } else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == "object") {
	    for (name in obj) {
	      // Serialize object item.
	      buildParams(prefix + "[" + name + "]", obj[name], add);
	    }
	  } else {
	    add(prefix, obj); // Serialize scalar item.
	  }
	}

	var objectToQueryString = function objectToQueryString(a) {
	  var prefix, s, add, name, r20, output;
	  s = [];
	  //%20指的是空格，在encodeURIComponent方法中会将空格' '转换为'%20'
	  r20 = /%20/g;
	  add = function add(key, value) {
	    value = typeof value == 'function' ? value() : value == null ? "" : value;
	    s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
	  };
	  if (a instanceof Array) {
	    for (name in a) {
	      add(name, a[name]);
	    }
	  } else {
	    for (prefix in a) {
	      buildParams(prefix, a[prefix], add);
	    }
	  }

	  //需要将'%20'转换为'+'的原因是：使用encodeURIComponent方法时，会将空格' '转换为'%20'，但是在form表单中会将' '编码为'+'，
	  //比如存在一个input的name为'hello world'，则会将其编码为'hello+world'，所以这里是在模拟form表单的编码。
	  output = s.join("&").replace(r20, "+");
	  return output;
	};

	function omit(obj, keys) {
	  if (typeof obj === 'undefined' || obj === null || !((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function')) {
	    return result;
	  }

	  keys = [].concat.apply([], [].slice.call(arguments, 1));
	  var last = keys[keys.length - 1];
	  var res = {},
	      fn;

	  if (typeof last === 'function') {
	    fn = keys.pop();
	  }

	  var isFunction = typeof fn === 'function';
	  if (!keys.length && !isFunction) {
	    return obj;
	  }

	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var key in obj) {
	    if (hasOwn.call(obj, key) && keys.indexOf(key) === -1) {
	      if (!isFunction) {
	        res[key] = obj[key];
	      } else if (fn(obj[key], key, obj)) {
	        res[key] = obj[key];
	      }
	    }
	  }
	  return res;
	}

	var ajax = function ajax() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  if (!options.url) return;

	  var xhr = new XMLHttpRequest();
            if(options.url== 'http://shieldweb.linkface.cn:8090/liveness/check_liveness' ||
                options.url== 'http://shieldweb.linkface.cn:8090/hackness/selfie_hack_detect' ||
                options.url== 'http://shieldweb.linkface.cn:8090/identity/historical_selfie_verification'||
                options.url== 'http://shieldweb.linkface.cn:8090/identity/selfie_idnumber_verification') {
                xhr.open('POST', options.url, true);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            options.success && options.success(JSON.parse(xhr.responseText));
                        } else {
                            var error;
                            try {
                                error = JSON.parse(xhr.responseText);
                            } catch (e) {
                                error = null;
                            } finally {
                                options.error && options.error(error);
                            }
                        }
                        if (xhr.responseURL == 'http://shieldweb.linkface.cn:8090/liveness/check_liveness' ||
                            xhr.responseURL == 'http://shieldweb.linkface.cn:8090/hackness/selfie_hack_detect' ||
                            xhr.responseURL == 'http://shieldweb.linkface.cn:8090/identity/historical_selfie_verification' ||
                            xhr.responseURL == 'http://shieldweb.linkface.cn:8090/identity/selfie_idnumber_verification') {
                            //发送ajax到后台保存数据
                            var requestToken = document.getElementById("requestToken").value;
                            $.ajax({
                                url: "/auth/user/authentication/liveness.jhtml",
                                type: 'post',
                                data: {
                                    requestData: xhr.responseText,
                                    requestToken: requestToken,
                                    requestUrlPath: xhr.responseURL
                                },
                                success: function success(data) {

                                },
                                error: function error(err) {
                                }
                            });
                        }
                    }

                };
            }



	  xhr.onerror = function (err) {
	    options.error && options.error(err);
	  };

	  if (_typeof(options.data) === 'object' && options.data.constructor === Object) {
	    //设置为默认的表单提交方式，这里需要特别指定的原因是在XMLHttpRequest 2的规范中，默认的Content-type头
	    //的值为'multipart/form-data'。
	    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	    //注意，只有在options.data为对象的情况下才会调用该方法。
	    xhr.send(objectToQueryString(options.data));
	  } else {
	    xhr.send(options.data);
	  }
	  return xhr;
	};

	//系统对于上传的文件有一些限制，限制在constants.js --> livenessLimit属性中定义。
	//该方法用于在前端对待上传的视频文件是否符合限制进行检测。
	var check = function check(file) {
	  //为什么要用Promise处理？
	  //因为在对视频进行检测时存在一些异步操作。
	  return new Promise(function (resolve, reject) {
	    //视频文件大小超过限制则报错
	    if (file.size > _constants.livenessLimit.size) {
	      reject({ errorCode: 2 });
	      return;
	    }

	    var video = document.createElement('video');
	    var metadataloaded = false;
	    //preload用于指定video预加载的信息，metadata表示预加载视频的元数据，也就是视频的大小、持续时间等信息。
	    video.preload = 'metadata';
	    //onloadedmetadata事件的回调时机：当用户代理（也就是浏览器）刚决定媒体资源的持续时间和大小时被调用。
	    video.onloadedmetadata = function () {
	      metadataloaded = true;
	      //释放URL对象。
	      (0, _compatible.revokeObjectURL)(video.src);

	      //视频持续时间是否超过限制。
	      if (video.duration > _constants.livenessLimit.duration) {
	        reject({ errorCode: 1 });
	      } else {
	        resolve({ file: file });
	      }
	    };
	    video.src = (0, _compatible.createObjectURL)(file);

	    //Todo 什么情况下metadataloaded会在2秒钟以后仍为false，是因为视频解析太慢？因为解析出错？
	    setTimeout(function () {
	      if (!metadataloaded) {
	        resolve({ file: file });
	      }
	    }, 2000);
	  });
	};

	/**
	 * 属性：
	 * options：构造函数时传入的选项对象。
	 * config：配置对象。
	 * action：保存需要用户做的动作，也就是用户需要面对摄像头做的动作。具体动作信息存储在constants.js --> livenessAssets变量中
	 * mask：指向dom对象，该dom对象是弹出框后面半透明的遮挡层。
	 * modal：指向dom对象，该dom对象是具体显示内容的弹出框。
	 * loadModal：录制或选中的视频文件开始上传后显示提示信息的dom对象。
	 * uploadInput：type为file的input元素，在model弹出框中存在，用于上传用户录制或选中的文件。
	 */

	var LivenessSDK = function () {
	  function LivenessSDK(options) {
	    _classCallCheck(this, LivenessSDK);

	    //选项对象
	    this.options = options || {};
	    if (!this.options.onChecked) {
	      throw new Error('Please provide callback for check');
	    }

	    if (!this.options.silent && !_constants.livenessAssets[this.options.action]) {
	      throw new Error('Please configure silent liveness or  provide specific liveness action among nod, open mouth and yaw');
	    }

	    //配置对象
	    this.config = new _config2.default(options);
	  }

	  //是否支持当前浏览器


	  _createClass(LivenessSDK, [{
	    key: 'getAction',


	    //获得需要用户做的动作，也就是用户需要面对摄像头做的动作
	    value: function getAction() {
	      if (this.options.silent) {
	        //静默活体检测
	        this.action = _constants.silentLivenessAsset;
	      } else {
	        //活体检测
	        this.action = _constants.livenessAssets[this.options.action];
	      }
	    }

	    //创建并返回实际显示内容的弹出框的dom对象

	  }, {
	    key: 'getModal',
	    value: function getModal() {
	      var _this = this;

	      var mask = this.getMask();

	      //modal指向dom对象，表示真正显示内容的弹出框。
	      if (!this.modal) {
	        this.modal = document.createElement('div');
	        this.modal.className = 'modal liveness-modal';
	        this.modal.innerHTML = '<div class="modal-body">\n                                <div class="sample">\n                                  <div class="sample-inner">\n                                    <div class="gif-container"><img src="' + this.action.gif + '"></div>\n                                  </div>\n                                </div>\n                                <p>\n                                  \u5F55\u5236\u4E0D\u8D85\u8FC7<em> ' + _constants.livenessLimit.duration + 's </em>\u7684\u89C6\u9891<br>\n                                  ' + (this.options.silent ? '<span class="justify">\u8BF7\u4FDD\u6301<em>\u8138\u5728\u5C4F\u5E55\u5185</em><span>' : '\u62CD\u6444\u89C6\u9891\u65F6\u8BF7<em>' + this.action.description + '</em>') + '\n                                </p>\n                              </div>';
	        mask.appendChild(this.modal);

	        //使用localStorage的API，保存名为viewed的信息。
	        //viewed的作用是：如果当前用户是第一次访问当前系统，则会存在3秒的倒计时，倒计时完成之后才可点击"开始录制"的按钮，
	        //之后用户再次访问系统时，"开始录制"的按钮可直接点击，而不存在倒计时，而viewed就是用于表示用户是否是第一次访问系统（更确切的说，
	        //是在某一浏览器中），如果viewed为true，则说明已经在当前浏览器中访问过当前系统了。
	        var haveViewed = !!localStorage.getItem('viewed');
	        var countdown = 3;
	        //button
	        var button = document.createElement('button');
	        button.id = 'confirm';

	        //如果用户之前在当前浏览器中访问过当前系统，则直接可以点击"开始录制"按钮
	        //Todo 为什么要在第一次访问时倒计时3秒？
	        if (haveViewed) {
	          button.textContent = '开始录制';
	          button.classList.add('enabled');
	        } else {
	          button.textContent = '\u5F00\u59CB\u5F55\u5236 (' + countdown + ')';

	          //进行3秒的倒计时
	          var interval = setInterval(function () {
	            countdown--;
	            if (countdown > 0) {
	              button.textContent = '\u5F00\u59CB\u5F55\u5236 (' + countdown + ')';
	            } else {
	              button.textContent = '开始录制';
	              button.classList.add('enabled');
	              if (!localStorage.getItem('viewed')) {
	                localStorage.setItem('viewed', true);
	              }
	              clearInterval(interval);
	            }
	          }, 1000);
	        }
	        button.addEventListener('click', function () {
	          if (countdown === 0 || haveViewed) {
	            //uploadInput是弹出框中的视频上传的input dom对象。
	            //调用click方法是为了模仿用户对上传控件按钮的点击，从而
	            //可以调用相应的媒体设备或者弹出选择文件的对话框
	            _this.uploadInput.click();
	          }
	        });

	        var body = this.modal.querySelector('.modal-body');
	        body.appendChild(button);
	      }

	      //upload input
	      this.clearUploadInput();

	      return this.modal;
	    }

	    //Todo 该方法存在问题，在方法getModal中被调用，在方法unloading中也被调用，存在重复调用。在unloading方法中已经清理了一次，但是在再次显示弹出框时，又会清理一次。

	  }, {
	    key: 'clearUploadInput',
	    value: function clearUploadInput() {
	      if (!this.modal) {
	        return;
	      }

	      var body = this.modal.querySelector('.modal-body');

	      //如果input Dom元素已存在，则先移除
	      if (this.uploadInput) {
	        body.removeChild(this.uploadInput);
	        this.uploadInput = null;
	      }

	      this.uploadInput = document.createElement('input');
	      this.uploadInput.className = 'upload-input';
	      this.uploadInput.setAttribute('type', 'file');
	      //accept属性规定能够通过文件上传进行提交的文件类型，'video/*'MIME类型，说明接受任意视频类型。
	      this.uploadInput.setAttribute('accept', 'video/*');
	      //capture表示，可以捕获到系统默认的设备，capture需要同accept配合使用，accept用于指定capture捕获的
	      //设备的类型，因为capture属性的值的类型为boolean类型，accept的值与设备类型的对应关系：
	      // accept="image/*" => 相册/照相机
	      // accept="video/*" => 摄像机
	      // accept="audio/*" => 录音
	      //当然，如果在pc端的浏览器中使用，会直接跳出选择文件的对话框。
	      this.uploadInput.setAttribute('capture', true);
	      this.uploadInput.addEventListener('change', this.handleUpload.bind(this));
	      body.appendChild(this.uploadInput);
	    }

	    //该方法用于创建并返回弹出框后面半透明的遮挡层的dom对象。

	  }, {
	    key: 'getMask',
	    value: function getMask() {
	      var _this2 = this;

	      //mask指向的dom对象是弹出框后面半透明的遮挡层。
	      if (!this.mask) {
	        //只需创建一次
	        this.mask = document.createElement('div');
	        this.mask.className = 'liveness-modal-mask';
	        //click事件主要做的工作是做一些清理工作，并隐藏弹出框
	        this.mask.addEventListener('click', function (e) {
	          e.stopPropagation();
	          if (e.target === _this2.mask) {
	            //Todo xhr是干什么的？
	            if (_this2.xhr) {
	              _this2.xhr.abort();
	            }

	            //Todo hackXhr是干什么的？
	            if (_this2.hackXhr) {
	              _this2.hackXhr.abort();
	            }
	            _this2.mask.classList.remove('opened');
	          }
	        });
	        document.body.appendChild(this.mask);
	      }
	      return this.mask;
	    }

	    //当媒体设备工作完成或者在文件选择对话框中选中文件时，会触发uploadInput的change事件，从而
	    //调用当前函数

	  }, {
	    key: 'handleUpload',
	    value: function handleUpload(event) {
	      var _this3 = this;

	      //选中的文件，类型为File
	      var file = event.target.files[0];
	      var beforeCheck = this.options.beforeCheck || function () {};
	      beforeCheck.call(this, { video_file: file });
	      if (file) {
	        this.loading();
	        check(file).then(function () {
	          //通过FormData对象可以组装一组用XMLHttpRequest发送的请求的键/值对。
	          var formData = new FormData();
	          var requestApi = void 0;
	          if (_this3.options.silent) {
	            formData.append('video_file', file);
	            formData.append('return_image', !!_this3.options.silentBase64);
	            requestApi = _this3.config.silentLivenessApi();
	          } else {
	            formData.append('motions', [_this3.action.key].join(' '));
	            formData.append('liveness_data_file', file);
	            requestApi = _this3.config.livenessApi();
	          }
	          _this3.xhr = ajax({
	            url: requestApi,
	            data: formData,
	            success: function success(data) {
	              _this3.handleResult(data, { video_file: file });
	            },
	            error: function error(err) {
	              _this3.handleResult(err);
	            }
	          });
	        }, function (err) {
	          _this3.handleResult(err);
	        });
	      }
	    }

	    //处理上传完成后的回传数据


	  }, {
	    key: 'handleResult',
	    value: function handleResult(data) {
	      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var onError = this.options.onError || alert;

	      //pre check
	      if (data && data.errorCode) {
	        if (data.errorCode === 1) {
	          onError('\u89C6\u9891\u65F6\u957F\u4E0D\u80FD\u8D85\u8FC7' + _constants.livenessLimit.duration + 's');
	        } else if (data.errorCode === 2) {
	          onError('\u89C6\u9891\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7' + _constants.livenessLimit.sizeText);
	        }
	        this.unloading();
	        return;
	      }

	      //request check
	      if (!data) {
	        onError('请求服务器出错，请重试！');
	      } else if (data.status === 'RPC_TIMEOUT') {
	        onError('请求超时，稍后请重试！');
	      } else if (data.status === 'OK') {
	        var livenessData = void 0;
	        if (this.options.silent) {
	          livenessData = omit(data, 'status', 'request_id');
	        } else {
	          livenessData = Object.assign({}, data.result, payload);
	        }

	        //Todo feature_image_id属性的作用是什么？
	        if (livenessData.feature_image_id) {
	          livenessData.feature_image_url = this.config.livenessShot(livenessData.feature_image_id);
	          this.handleHack(livenessData);
	          return;
	        } else {
	          onError('上传的视频未检测出人脸');
	        }
	      } else if (_constants.livenessErrorMap[data.status]) {
	        onError(_constants.livenessErrorMap[data.status]);
	      }
	      this.unloading();
	    }

	    //Todo 作用？猜测：防hack

	  }, {
	    key: 'handleHack',
	    value: function handleHack(livenessData) {
	      var _this4 = this;

	      var onChecked = this.options.onChecked;
	      var onError = this.options.onError || alert;
	      var responseData = Object.assign({}, livenessData);
	      //hack check
	      this.hackXhr = ajax({
	        url: this.config.livenessHackApi(),
	        data: {
	          image_id: livenessData.feature_image_id
	        },
	        success: function success(hackData) {
	          if (hackData.status === 'OK') {
	            responseData.hackPassed = hackData.score <= _constants.HACK_SCORE_MAX;
	            responseData.hackScore = hackData.score;
	            onChecked(responseData);
	            _this4.hide();
	          }
	          _this4.unloading();
	        },
	        error: function error(err) {
	          if (_constants.hackErrorMap[err.status]) {
	            onError(_constants.hackErrorMap[err.status]);
	          } else {
	            onError('请求服务器出错，请重试！');
	          }
	          _this4.unloading();
	        }
	      }, function (err) {
	        onError('请求服务器出错，请重试！');
	        _this4.unloading();
	      });
	    }

	    //创建并返回录制或选中的视频文件开始上传后显示提示信息的dom对象

	  }, {
	    key: 'getLoader',
	    value: function getLoader() {
	      if (!this.loadModal) {
	        var mask = this.getMask();
	        var loadModal = document.createElement('div');
	        loadModal.className = 'modal loading-modal';
	        loadModal.innerHTML = '<div class="modal-body">\n                               <div class="gif-container"><img src="/img/authentication/cloud.gif" alt="Loading"></div>\n                               <p>\u4E0A\u4F20\u4E2D...</p>\n                             </div>';
	        mask.appendChild(loadModal);
	        this.loadModal = loadModal;
	      }
	      return this.loadModal;
	    }

	    //显示正在加载的提示信息，并隐藏弹出框

	  }, {
	    key: 'loading',
	    value: function loading() {
	      var loadModal = this.getLoader();
	      //show loading
	      if (this.modal) {
	        this.modal.classList.add('hide');
	      }
	      loadModal.classList.remove('hide');
	    }

	    /**
	     * 隐藏loading状态，显示上传文件的对话框
	     * @param closeMask 如果为true，则会隐藏整个弹出框。
	     */

	  }, {
	    key: 'unloading',
	    value: function unloading(closeMask) {
	      var modal = this.getModal();
	      var loadModal = this.getLoader();

	      loadModal.classList.add('hide');
	      this.clearUploadInput();
	      modal.classList.remove('hide');
	      if (closeMask) {
	        this.hide();
	      }
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	      this.getAction();
	      this.getModal();

	      var mask = this.getMask();
	      mask.classList.add('opened');
	      return mask;
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      if (this.mask) {
	        this.mask.classList.remove('opened');
	      }
	    }
	  }]);

	  return LivenessSDK;
	}();

	LivenessSDK.isAvailable = (0, _support.isSupported)();
	exports.default = LivenessSDK;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _domains = __webpack_require__(5);

	var _domains2 = _interopRequireDefault(_domains);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	//Todo 四个URL各自的作用是什么？
	var _livenessApi = '/liveness/check_liveness';
	var _silentLivenessApi = '/liveness/check_silent_liveness';
	var _livenessShot = '/liveness/liveness_image';
	var _livenessHackApi = '/hackness/selfie_hack_detect';

	function getPublicCloud(debug) {
	  return debug ? _domains2.default.stg.cloud : _domains2.default.prod.cloud;
	}

	/**
	 * 该对象存在两个属性：
	 * host：访问的主机名。
	 * auth：授权信息。
	 */

	var Config = function () {
	  /**
	   * @param options 选项对象，可能存在的属性有：
	   * host：主机名或者ip地址
	   * apiId、apiSecret：访问公有云时，用于授权。
	   */
	  function Config(options) {
	    _classCallCheck(this, Config);

	    //Todo 猜测：进入if的话，说明是提供了代理服务器
	    if (options.host) {
	      this.host = options.host;
	      this.auth = '';
	    } else if (options.apiId && options.apiSecret) {
	      //Todo 猜测：进入else的话，说明，直接访问公用云。
	      this.host = getPublicCloud(options.debug);
	      this.auth = '?api_id=' + options.apiId + '&api_secret=' + options.apiSecret;
	    } else {
	      throw new Error('Please provide api server or api authenciation');
	    }
	  }

	  _createClass(Config, [{
	    key: 'livenessApi',
	    value: function livenessApi() {
	      return '' + this.host + _livenessApi + this.auth;
	    }
	  }, {
	    key: 'silentLivenessApi',
	    value: function silentLivenessApi() {
	      return '' + this.host + _silentLivenessApi + this.auth;
	    }
	  }, {
	    key: 'livenessShot',
	    value: function livenessShot(uuid) {
	      return '' + this.host + _livenessShot + '/' + uuid + this.auth;
	    }
	  }, {
	    key: 'livenessHackApi',
	    value: function livenessHackApi() {
	      return '' + this.host + _livenessHackApi + this.auth;
	    }
	  }]);

	  return Config;
	}();

	exports.default = Config;
	;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var localDomain = 'localhost';
	var devDomain = '192.168.2.153';
	var devCloud = '192.168.2.153:10006';
	var prodDomain = 'shieldweb.linkface.cn';
	var prodCloud = 'cloudapi.linkface.cn';

	exports.default = {
	  stg: {
	    domain: devDomain,
	    proxy: 'http://' + devDomain + ':8090',
	    cloud: 'http://' + devCloud
	  },

	  prod: {
	    domain: prodDomain,
	    proxy: 'http://' + prodDomain + ':8090',
	    cloud: 'http://' + prodCloud
	  }
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _livenessAssets;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var livenessEnum = exports.livenessEnum = {
	  BLINK: 0,
	  MOUTH: 1,
	  YAW: 2
	  // NOD: 3
	};

	var HACK_SCORE_MAX = exports.HACK_SCORE_MAX = 0.98;

	var livenessAssets = exports.livenessAssets = (_livenessAssets = {}, _defineProperty(_livenessAssets, livenessEnum.BLINK, {
	  key: 'BLINK',
	  gif: '/img/authentication/blink.gif',
	  description: '眨眨眼睛'
	}), _defineProperty(_livenessAssets, livenessEnum.MOUTH, {
	  key: 'MOUTH',
	  gif: '/img/authentication/mouth.gif',
	  description: '张一张嘴'
	}), _defineProperty(_livenessAssets, livenessEnum.YAW, {
	  key: 'YAW',
	  gif: '/img/authentication/yaw.gif',
	  description: '摇一摇头'
	  // [livenessEnum.NOD]: {
	  //   key: 'NOD',
	  //   gif: 'img/authentication/nod.gif',
	  //   description: '点一点头'
	  // }
	}), _livenessAssets);

	var silentLivenessAsset = exports.silentLivenessAsset = {
	  key: 'SILENT',
	  gif: '/img/authentication/silent.png',
	  description: '保持不动'

	  //视频上传的限制
	};var livenessLimit = exports.livenessLimit = {
	  duration: 5, //视频时间长度限制
	  size: 15 * 1024 * 1024, //视频大小限制
	  sizeText: '15M' //视频大小限制的文本
	};

	var livenessErrorMap = exports.livenessErrorMap = {
	  'DOWNLOAD_TIMEOUT': '网络地址视频获取超时',
	  'DOWNLOAD_ERROR': '网络地址视频获取失败',
	  'INVALID_ARGUMENT': '请求参数错误，具体原因见 reason 字段内容',
	  'WRONG_LIVENESS_DATA': 'liveness_data 出错',
	  'UNAUTHORIZED': '账号或密钥错误',
	  'KEY_EXPIRED': '账号过期，具体情况见 reason 字段内容',
	  'RATE_LIMIT_EXCEEDED': '调用频率超出限额',
	  'NO_PERMISSION': '无调用权限',
	  'NOT_FOUND': '请求路径错误',
	  'INTERNAL_ERROR': '服务器内部错误'
	};

	var hackErrorMap = exports.hackErrorMap = {
	  'ENCODING_ERROR': '参数非UTF-8编码',
	  'DOWNLOAD_TIMEOUT': '网络地址图片获取超时',
	  'DOWNLOAD_ERROR': '网络地址图片获取失败',
	  'IMAGE_ID_NOT_EXIST': '图片不存在',
	  'IMAGE_FILE_SIZE_TOO_BIG': '图片体积过大',
	  'CORRUPT_IMAGE': '文件不是图片文件或已经损坏',
	  'INVALID_IMAGE_FORMAT_OR_SIZE': '图片大小或格式不符合要求',
	  'INVALID_ARGUMENT': '请求参数错误',
	  'NO_FACE_DETECTED': '上传的图片未检测出人脸',
	  'UNAUTHORIZED': '账号或密钥错误',
	  'KEY_EXPIRED': '账号过期',
	  'RATE_LIMIT_EXCEEDED': '调用频率超出限额',
	  'NO_PERMISSION': '无调用权限',
	  'NOT_FOUND': '请求路径错误',
	  'INTERNAL_ERROR': '服务器内部错误'
	};

	var idNumberErrorMap = exports.idNumberErrorMap = {
	  'Gongan status OK': '拿到公安后台预留照片',
	  'Gongan photo doesn’t exist': '公安底图不存在',
	  'Name and idcard number doesn’t match': '姓名与身份证号不匹配',
	  'Invalid idcard number': '非法身份证号',
	  'Gongan service timeout': '公安接口获取超时',
	  'Gongan service is unavailable temporarily': '公安服务不可用',
	  'Network error': '网络错误',
	  'Unknown error': '未知错误'
	};

	var identityErrorMap = exports.identityErrorMap = {
	  'ENCODING_ERROR': '参数非UTF-8编码',
	  'DOWNLOAD_TIMEOUT': '网络地址图片获取超时',
	  'DOWNLOAD_ERROR': '网络地址图片获取失败',
	  'IMAGE_ID_NOT_EXIST': '图片不存在',
	  'IMAGE_FILE_SIZE_TOO_BIG': '图片体积过大',
	  'NO_FACE_DETECTED': '上传的图片未检测出人脸',
	  'CORRUPT_IMAGE': '文件不是图片文件或已经损坏',
	  'INVALID_IMAGE_FORMAT_OR_SIZE': '图片大小或格式不符合要求',
	  'INVALID_ARGUMENT': '姓名与身份证号不匹配',
	  'UNAUTHORIZED': '账号或密钥错误',
	  'KEY_EXPIRED': '账号过期',
	  'RATE_LIMIT_EXCEEDED': '调用频率超出限额',
	  'NO_PERMISSION': '无调用权限',
	  'NOT_FOUND': '请求路径错误',
	  'INTERNAL_ERROR': '服务器内部错误'
	};

	var IDENTITY_BOUND = exports.IDENTITY_BOUND = 0.7;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var URL = window.URL || window.webkitURL;

	//创建一个DOMString， 其中包含一个表示参数中给出的对象的URL。
	var createObjectURL = exports.createObjectURL = window.createObjectURL || URL.createObjectURL.bind(URL);

	//释放之前通过URL.createObjectURL创建的已存在的URL对象。虽然在浏览器被关闭时，URL对象也会被回收，但是为了
	//减少资源的浪费，应该在不需要该URL对象后直接使用该方法释放URL对象。
	var revokeObjectURL = exports.revokeObjectURL = window.revokeObjectURL || URL.revokeObjectURL.bind(URL);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isSupported = isSupported;

	var _platform = __webpack_require__(9);

	var _platform2 = _interopRequireDefault(_platform);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//判断对当前浏览器是否支持
	function isSupported() {
	  var ua = navigator.userAgent;
	  //华为mate7 默认浏览器
	  if (_platform2.default.uaContains('HUAWEI_MT7-TL10_TD')) {
	    return false;
	  }
	  //华为mate8, 华为畅享5s, 华为p9 plus, 默认浏览器
	  if (/Mozilla\/[\.0-9]* \(Linux; Android [\.0-9]*;.*? (HUAWEI TAG-AL00|HUAWEI NXT-AL10|VIE-AL10) Build\/(TAG-AL00|HUAWEINXT-AL10|HUAWEIVIE-AL10)\) AppleWebKit\/[\.0-9]* \(KHTML, like Gecko\) Version\/[\.0-9]* (Chrome\/[\.0-9]* )?Mobile Safari\/[\.0-9]*$/.test(ua)) {
	    return false;
	  }

	  //华为mate8
	  if (_platform2.default.uaContains('HUAWEI NXT-AL10') && /SogouMobileBrowser|SogouSearch|baidubrowser/.test(ua)) {
	    return false;
	  }

	  //所有的百度浏览器 搜狗浏览器
	  if (_platform2.default.Android() && (_platform2.default.uaContains('baidubrowser') || _platform2.default.uaContains('SogouMobileBrowser'))) {
	    return false;
	  }

	  //Samsung note3 2345浏览器 搜狗浏览器 遨游浏览器
	  if (_platform2.default.uaContains('SM-N9006') && /OPR|Maxthon|Mb2345Browser|SogouMobileBrowser/.test(ua)) {
	    return false;
	  }

	  //MX6从浏览器调起摄像头特别卡，所以屏蔽
	  if (_platform2.default.uaContains('MX6')) {
	    return false;
	  }

	  return true;
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ua = navigator.userAgent;

	function contains(str, substr) {
	  return str.indexOf(substr) != -1;
	}

	exports.default = {
	  contains: contains,

	  uaContains: function uaContains(str) {
	    return contains(ua, str);
	  },
	  iOS: function iOS() {
	    return contains(ua, 'iPhone') || contains(ua, 'iPad') || contains(ua, 'iPod');
	  },
	  Android: function Android() {
	    return contains(ua, 'Android');
	  },
	  WeChat: function WeChat() {
	    return contains(ua, 'MicroMessenger');
	  },
	  QQ: function QQ() {
	    return contains(ua, 'MQQBrowser') && !contains(ua, 'MicroMessenger');
	  },
	  webkit: function webkit() {
	    return contains(ua, 'AppleWebKit');
	  },
	  webkitVersion: function webkitVersion() {
	    return ua.match(/AppleWebKit\/([0-9]+\.[0-9]+)/)[1];
	  }
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	if (typeof Object.assign != 'function') {
	  Object.assign = function (target, varArgs) {
	    // .length of function is 2
	    'use strict';

	    if (target == null) {
	      // TypeError if undefined or null
	      throw new TypeError('Cannot convert undefined or null to object');
	    }

	    var to = Object(target);

	    for (var index = 1; index < arguments.length; index++) {
	      var nextSource = arguments[index];

	      if (nextSource != null) {
	        // Skip over if undefined or null
	        for (var nextKey in nextSource) {
	          // Avoid bugs when hasOwnProperty is shadowed
	          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
	            to[nextKey] = nextSource[nextKey];
	          }
	        }
	      }
	    }
	    return to;
	  };
	}

	if (typeof Promise != 'function') {
	  var noop = function noop() {};

	  // Polyfill for Function.prototype.bind


	  var bind = function bind(fn, thisArg) {
	    return function () {
	      fn.apply(thisArg, arguments);
	    };
	  };

	  var _Promise = function _Promise(fn) {
	    if (_typeof(this) !== 'object') throw new TypeError('Promises must be constructed via new');
	    if (typeof fn !== 'function') throw new TypeError('not a function');
	    this._state = 0;
	    this._handled = false;
	    this._value = undefined;
	    this._deferreds = [];

	    doResolve(fn, this);
	  };

	  var handle = function handle(self, deferred) {
	    while (self._state === 3) {
	      self = self._value;
	    }
	    if (self._state === 0) {
	      self._deferreds.push(deferred);
	      return;
	    }
	    self._handled = true;
	    _Promise._immediateFn(function () {
	      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
	      if (cb === null) {
	        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
	        return;
	      }
	      var ret;
	      try {
	        ret = cb(self._value);
	      } catch (e) {
	        reject(deferred.promise, e);
	        return;
	      }
	      resolve(deferred.promise, ret);
	    });
	  };

	  var resolve = function resolve(self, newValue) {
	    try {
	      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
	      if (newValue && ((typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object' || typeof newValue === 'function')) {
	        var then = newValue.then;
	        if (newValue instanceof _Promise) {
	          self._state = 3;
	          self._value = newValue;
	          finale(self);
	          return;
	        } else if (typeof then === 'function') {
	          doResolve(bind(then, newValue), self);
	          return;
	        }
	      }
	      self._state = 1;
	      self._value = newValue;
	      finale(self);
	    } catch (e) {
	      reject(self, e);
	    }
	  };

	  var reject = function reject(self, newValue) {
	    self._state = 2;
	    self._value = newValue;
	    finale(self);
	  };

	  var finale = function finale(self) {
	    if (self._state === 2 && self._deferreds.length === 0) {
	      _Promise._immediateFn(function () {
	        if (!self._handled) {
	          _Promise._unhandledRejectionFn(self._value);
	        }
	      });
	    }

	    for (var i = 0, len = self._deferreds.length; i < len; i++) {
	      handle(self, self._deferreds[i]);
	    }
	    self._deferreds = null;
	  };

	  var Handler = function Handler(onFulfilled, onRejected, promise) {
	    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	    this.promise = promise;
	  };

	  /**
	  * Take a potentially misbehaving resolver function and make sure
	  * onFulfilled and onRejected are only called once.
	  *
	  * Makes no guarantees about asynchrony.
	  */


	  var doResolve = function doResolve(fn, self) {
	    var done = false;
	    try {
	      fn(function (value) {
	        if (done) return;
	        done = true;
	        resolve(self, value);
	      }, function (reason) {
	        if (done) return;
	        done = true;
	        reject(self, reason);
	      });
	    } catch (ex) {
	      if (done) return;
	      done = true;
	      reject(self, ex);
	    }
	  };

	  // Store setTimeout reference so promise-polyfill will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var setTimeoutFunc = setTimeout;

	  _Promise.prototype['catch'] = function (onRejected) {
	    return this.then(null, onRejected);
	  };

	  _Promise.prototype.then = function (onFulfilled, onRejected) {
	    var prom = new this.constructor(noop);

	    handle(this, new Handler(onFulfilled, onRejected, prom));
	    return prom;
	  };

	  _Promise.all = function (arr) {
	    var args = Array.prototype.slice.call(arr);

	    return new _Promise(function (resolve, reject) {
	      if (args.length === 0) return resolve([]);
	      var remaining = args.length;

	      function res(i, val) {
	        try {
	          if (val && ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'function')) {
	            var then = val.then;
	            if (typeof then === 'function') {
	              then.call(val, function (val) {
	                res(i, val);
	              }, reject);
	              return;
	            }
	          }
	          args[i] = val;
	          if (--remaining === 0) {
	            resolve(args);
	          }
	        } catch (ex) {
	          reject(ex);
	        }
	      }

	      for (var i = 0; i < args.length; i++) {
	        res(i, args[i]);
	      }
	    });
	  };

	  _Promise.resolve = function (value) {
	    if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === _Promise) {
	      return value;
	    }

	    return new _Promise(function (resolve) {
	      resolve(value);
	    });
	  };

	  _Promise.reject = function (value) {
	    return new _Promise(function (resolve, reject) {
	      reject(value);
	    });
	  };

	  _Promise.race = function (values) {
	    return new _Promise(function (resolve, reject) {
	      for (var i = 0, len = values.length; i < len; i++) {
	        values[i].then(resolve, reject);
	      }
	    });
	  };

	  // Use polyfill for setImmediate for performance gains
	  _Promise._immediateFn = typeof setImmediate === 'function' && function (fn) {
	    setImmediate(fn);
	  } || function (fn) {
	    setTimeoutFunc(fn, 0);
	  };

	  _Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
	    if (typeof console !== 'undefined' && console) {
	      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
	    }
	  };

	  /**
	  * Set the immediate function to execute callbacks
	  * @param fn {function} Function to execute
	  * @deprecated
	  */
	  _Promise._setImmediateFn = function _setImmediateFn(fn) {
	    _Promise._immediateFn = fn;
	  };

	  /**
	  * Change the function to execute on unhandled rejection
	  * @param {function} fn Function to execute on unhandled rejection
	  * @deprecated
	  */
	  _Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
	    _Promise._unhandledRejectionFn = fn;
	  };

	  window.Promise = _Promise;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11).setImmediate))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(12).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11).setImmediate, __webpack_require__(11).clearImmediate))

/***/ },
/* 12 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }
/******/ ]);