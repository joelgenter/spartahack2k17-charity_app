/*! angular2-onsenui v1.0.0-rc.5 - Wed Jan 18 2017 05:26:14 GMT+0000 (UTC) */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("process/browser.js"), require("@angular/common"), require("@angular/platform-browser"));
	else if(typeof define === 'function' && define.amd)
		define("Angular2-OnsenUI", ["@angular/core", "process/browser.js", "@angular/common", "@angular/platform-browser"], factory);
	else if(typeof exports === 'object')
		exports["Angular2-OnsenUI"] = factory(require("@angular/core"), require("process/browser.js"), require("@angular/common"), require("@angular/platform-browser"));
	else
		root["Angular2-OnsenUI"] = factory(root["@angular/core"], root["process/browser.js"], root["@angular/common"], root["@angular/platform-browser"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_21__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../dist/onsenui.d.ts" />
	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(1));
	__export(__webpack_require__(2));
	__export(__webpack_require__(4));
	__export(__webpack_require__(5));
	__export(__webpack_require__(6));
	__export(__webpack_require__(7));
	__export(__webpack_require__(8));
	__export(__webpack_require__(9));
	__export(__webpack_require__(10));
	__export(__webpack_require__(11));
	__export(__webpack_require__(12));
	__export(__webpack_require__(13));
	__export(__webpack_require__(17));
	__export(__webpack_require__(18));
	__export(__webpack_require__(19));
	__export(__webpack_require__(3));
	var core_2 = __webpack_require__(1);
	var common_1 = __webpack_require__(20);
	var platform_browser_1 = __webpack_require__(21);
	var ons_navigator_2 = __webpack_require__(2);
	var ons_tabbar_2 = __webpack_require__(4);
	var ons_switch_2 = __webpack_require__(5);
	var ons_range_2 = __webpack_require__(6);
	var ons_input_2 = __webpack_require__(7);
	var ons_pull_hook_2 = __webpack_require__(8);
	var ons_lazy_repeat_2 = __webpack_require__(9);
	var ons_splitter_2 = __webpack_require__(10);
	var alert_dialog_factory_2 = __webpack_require__(13);
	var popover_factory_2 = __webpack_require__(17);
	var dialog_factory_2 = __webpack_require__(18);
	var modal_factory_2 = __webpack_require__(19);
	var component_loader_1 = __webpack_require__(16);
	var directives = [
	    ons_navigator_2.OnsNavigator,
	    ons_tabbar_2.OnsTab,
	    ons_switch_2.OnsSwitch,
	    ons_range_2.OnsRange,
	    ons_input_2.OnsInput,
	    ons_pull_hook_2.OnsPullHook,
	    ons_lazy_repeat_2.OnsLazyRepeat,
	    ons_splitter_2.OnsSplitterSide,
	    ons_splitter_2.OnsSplitterContent
	];
	var OnsenModule = (function () {
	    function OnsenModule() {
	    }
	    OnsenModule = __decorate([
	        core_2.NgModule({
	            imports: [platform_browser_1.BrowserModule, common_1.CommonModule],
	            declarations: [directives],
	            exports: [
	                directives,
	                platform_browser_1.BrowserModule
	            ],
	            providers: [
	                alert_dialog_factory_2.AlertDialogFactory,
	                popover_factory_2.PopoverFactory,
	                dialog_factory_2.DialogFactory,
	                modal_factory_2.ModalFactory,
	                component_loader_1.ComponentLoader
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], OnsenModule);
	    return OnsenModule;
	}());
	exports.OnsenModule = OnsenModule;
	//# sourceMappingURL=angular2-onsenui.js.map

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var params_1 = __webpack_require__(3);
	var NavigatorPage = (function () {
	    function NavigatorPage(elementRef, destroy, animator, params) {
	        if (elementRef === void 0) { elementRef = null; }
	        if (destroy === void 0) { destroy = function () { }; }
	        if (animator === void 0) { animator = null; }
	        if (params === void 0) { params = new params_1.Params(); }
	        this.elementRef = elementRef;
	        this.destroy = destroy;
	        this.animator = animator;
	        this.params = params;
	    }
	    return NavigatorPage;
	}());
	exports.NavigatorPage = NavigatorPage;
	/**
	 * @element ons-navigator
	 * @directive OnsNavigator
	 * @selector ons-navigator
	 * @codpen KgvAvx
	 * @description
	 *   [en]Angular 2 directive for `<ons-navigator>` component.[/en]
	 *   [ja]`<ons-navigator>`要素のAngular 2ディレクティブです。[/ja]
	 * @example
	 *   @Component({
	 *     selector: 'ons-page',
	 *     template: `
	 *       <ons-toolbar>
	 *         <div class="center">Page</div>
	 *       </ons-toolbar>
	 *       <div class="content">...</div>
	 *     `
	 *   })
	 *   class DefaultPageComponent { }
	 *
	 *   @Component({
	 *     selector: 'navigator-app',
	 *     template: `
	 *     <ons-navigator [page]="page"></ons-navigator>
	 *     `
	 *   })
	 *   export class AppComponent {
	 *     page = DefaultPageComponent
	 *   }
	 */
	var OnsNavigator = (function () {
	    function OnsNavigator(_elementRef, _resolver, _viewContainer, _injector, _zone) {
	        this._elementRef = _elementRef;
	        this._resolver = _resolver;
	        this._viewContainer = _viewContainer;
	        this._injector = _injector;
	        this._zone = _zone;
	        this._lastPageLoader = this.element.pageLoader;
	        this.element.pageLoader = this._createPageLoader();
	    }
	    Object.defineProperty(OnsNavigator.prototype, "pageComponentType", {
	        /**
	         * @input page
	         * @type {Type<any>}
	         * @desc
	         *   [en]Type of the page component.[/en]
	         *   [ja]ページコンポーネントのクラスを指定します。[/ja]
	         */
	        set: function (page) {
	            this.element.page = page;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(OnsNavigator.prototype, "element", {
	        get: function () {
	            return this._elementRef.nativeElement;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OnsNavigator.prototype._createPageLoader = function () {
	        var _this = this;
	        var componentRefMap = new WeakMap();
	        return new ons.PageLoader(function (_a, done) {
	            var page = _a.page, parent = _a.parent, params = _a.params;
	            _this._zone.run(function () {
	                var pageParams = new params_1.Params(params || {});
	                var injector = core_1.ReflectiveInjector.resolveAndCreate([
	                    { provide: params_1.Params, useValue: pageParams },
	                    { provide: OnsNavigator, useValue: _this }
	                ], _this._injector);
	                var factory = _this._resolver.resolveComponentFactory(page);
	                var selector = 'ons-navigator';
	                var pageComponentRef = factory.create(injector, null);
	                _this._viewContainer.insert(pageComponentRef.hostView);
	                var pageElement = pageComponentRef.location.nativeElement;
	                componentRefMap.set(pageElement, pageComponentRef);
	                _this.element.appendChild(pageElement); // dirty fix to insert in correct position
	                done(pageElement);
	            });
	        }, function (element) {
	            if (componentRefMap.has(element)) {
	                componentRefMap.get(element).destroy();
	                componentRefMap.delete(element);
	            }
	        });
	    };
	    OnsNavigator.prototype.ngOnDestroy = function () {
	        this.element.pageLoader = this._lastPageLoader;
	    };
	    __decorate([
	        core_1.Input('page'), 
	        __metadata('design:type', core_1.Type), 
	        __metadata('design:paramtypes', [core_1.Type])
	    ], OnsNavigator.prototype, "pageComponentType", null);
	    OnsNavigator = __decorate([
	        core_1.Directive({
	            selector: 'ons-navigator'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef, core_1.Injector, core_1.NgZone])
	    ], OnsNavigator);
	    return OnsNavigator;
	}());
	exports.OnsNavigator = OnsNavigator;
	//# sourceMappingURL=ons-navigator.js.map

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	var Params = (function () {
	    function Params(_data) {
	        if (_data === void 0) { _data = {}; }
	        this._data = _data;
	    }
	    Params.prototype.at = function (key) {
	        return this._data[key];
	    };
	    Object.defineProperty(Params.prototype, "data", {
	        get: function () {
	            return this._data;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Params;
	}());
	exports.Params = Params;
	//# sourceMappingURL=params.js.map

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	/**
	 * @element ons-tab
	 * @directive OnsTab
	 * @selector ons-tab
	 * @description
	 *   [en]Angular 2 directive for `<ons-tab>` component.[/en]
	 *   [ja]`<ons-tab>`要素のためのディレクティブです。[/ja]
	 * @example
	 *   @Component({
	 *     selector: 'ons-page',
	 *     template: `
	 *       <ons-toolbar>
	 *         <div class="center">Page</div>
	 *       </ons-toolbar>
	 *       <div class="content">...</div>
	 *     `
	 *   })
	 *   class PageComponent {
	 *   }
	 *
	 *   @Component({
	 *     selector: 'app',
	 *     template: `
	 *     <ons-tabbar>
	 *       <div class="tab-bar__content"></div>
	 *       <div class="tab-bar">
	 *         <ons-tab label="Page1" icon="ion-home" [page]="page" active></ons-tab>
	 *         <ons-tab label="Page2" icon="ion-help" [page]="page"></ons-tab>
	 *         <ons-tab label="Page3" icon="ion-stop" [page]="page"></ons-tab>
	 *       </div>
	 *     </ons-tabbar>
	 *     `
	 *   })
	 *   export class AppComponent {
	 *     page = PageComponent
	 *   }
	 */
	var OnsTab = (function () {
	    function OnsTab(_elementRef, _viewContainer, _resolver, _zone) {
	        this._elementRef = _elementRef;
	        this._viewContainer = _viewContainer;
	        this._resolver = _resolver;
	        this._zone = _zone;
	        this._pageComponent = null;
	        // set up ons-tab's page loader
	        this._elementRef.nativeElement.pageLoader = this._createPageLoader();
	    }
	    Object.defineProperty(OnsTab.prototype, "page", {
	        /**
	         * @input page
	         * @type {Type<any>}
	         * @desc
	         *   [en]Specify the page component that is displayed when the tab is active.[/en]
	         *   [ja]読み込むページコンポーネントを指定します。[/ja]
	         */
	        set: function (pageComponentType) {
	            this._elementRef.nativeElement.page = pageComponentType;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OnsTab.prototype._createPageLoader = function () {
	        var _this = this;
	        var PageLoader = ons.PageLoader;
	        return new PageLoader(function (_a, done) {
	            var page = _a.page, parent = _a.parent;
	            _this._zone.run(function () {
	                var factory = _this._resolver.resolveComponentFactory(page);
	                var pageComponentRef = _this._viewContainer.createComponent(factory, 0);
	                if (_this._pageComponent) {
	                    _this._pageComponent.destroy();
	                }
	                _this._pageComponent = pageComponentRef;
	                var pageElement = pageComponentRef.location.nativeElement;
	                parent.appendChild(pageElement); // dirty fix to insert in correct position
	                done(pageElement);
	            });
	        }, function () {
	            if (_this.hasOwnProperty('_pageComponent')) {
	                _this._pageComponent.destroy();
	                _this._pageComponent = null;
	            }
	        });
	    };
	    OnsTab.prototype.ngOnDestroy = function () {
	        if (this._pageComponent) {
	            this._pageComponent.destroy();
	            this._pageComponent = null;
	        }
	    };
	    __decorate([
	        core_1.Input('page'), 
	        __metadata('design:type', core_1.Type), 
	        __metadata('design:paramtypes', [core_1.Type])
	    ], OnsTab.prototype, "page", null);
	    OnsTab = __decorate([
	        core_1.Directive({
	            selector: 'ons-tab'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ViewContainerRef, core_1.ComponentFactoryResolver, core_1.NgZone])
	    ], OnsTab);
	    return OnsTab;
	}());
	exports.OnsTab = OnsTab;
	//# sourceMappingURL=ons-tabbar.js.map

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	/**
	 * @element ons-switch
	 * @directive OnsSwitch
	 * @selector ons-switch
	 * @description
	 *   [en]Angular 2 directive for `<ons-switch>` component.[/en]
	 *   [ja]`<ons-switch>`要素のAngular 2ディレクティブです。[/ja]
	 * @example
	 *   <ons-switch [(value)]="target"></ons-switch>
	 */
	var OnsSwitch = (function () {
	    function OnsSwitch(_elementRef) {
	        this._elementRef = _elementRef;
	        /**
	         * @output valueChange
	         * @type {string}
	         * @desc
	         *   [en]Triggers when the value is changed.[/en]
	         *   [ja]値が変更された時に発火します。[/ja]
	         */
	        this._valueChange = new core_1.EventEmitter();
	        this._boundOnChange = this._onChange.bind(this);
	        this._element = _elementRef.nativeElement;
	        this._element.addEventListener('change', this._boundOnChange);
	    }
	    Object.defineProperty(OnsSwitch.prototype, "value", {
	        /**
	         * @input value
	         * @type {boolean}
	         * @desc
	         *   [en]Specify the value of the `<ons-switch>` component.[/en]
	         *   [ja]`ons-switch`コンポーネントに設定する値を指定します。[/ja]
	         */
	        set: function (target) {
	            this._element.checked = !!target;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OnsSwitch.prototype._onChange = function (event) {
	        this._valueChange.emit(this._element.checked);
	    };
	    OnsSwitch.prototype.ngOnChanges = function (changeRecord) {
	        var value = !!changeRecord.value.currentValue;
	        this._element.checked = value;
	    };
	    Object.defineProperty(OnsSwitch.prototype, "element", {
	        get: function () {
	            return this._element;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OnsSwitch.prototype.ngOnDestroy = function () {
	        this._element.removeEventListener('change', this._boundOnChange);
	        this._element = null;
	    };
	    __decorate([
	        core_1.Input('value'), 
	        __metadata('design:type', Boolean), 
	        __metadata('design:paramtypes', [Boolean])
	    ], OnsSwitch.prototype, "value", null);
	    __decorate([
	        core_1.Output('valueChange'), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], OnsSwitch.prototype, "_valueChange", void 0);
	    OnsSwitch = __decorate([
	        core_1.Directive({
	            selector: 'ons-switch'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], OnsSwitch);
	    return OnsSwitch;
	}());
	exports.OnsSwitch = OnsSwitch;
	//# sourceMappingURL=ons-switch.js.map

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	/**
	 * @element ons-range
	 * @directive OnsRange
	 * @selector ons-range
	 * @description
	 *   [en]Angular 2 directive for `<ons-range>` component.[/en]
	 *   [ja]`<ons-range>`要素のAngular 2ディレクティブです。[/en]
	 * @example
	 *   <ons-range [(value)]="foo"></ons-range><br>
	 *
	 *   <!-- Add (input) to change immediately on dragging range component -->
	 *   <ons-range [(value)]="bar" (input)="bar = $event.target.value"></ons-range>
	 */
	var OnsRange = (function () {
	    function OnsRange(_elementRef) {
	        this._elementRef = _elementRef;
	        /**
	         * @output valueChange
	         * @type {string}
	         * @desc
	         *   [en]Triggers when the value is changed.[/en]
	         *   [ja]値が変更された時に発火します。[/ja]
	         */
	        this._valueChange = new core_1.EventEmitter();
	        this._boundOnChange = this._onChange.bind(this);
	        this._element = _elementRef.nativeElement;
	        this._element.addEventListener('change', this._boundOnChange);
	    }
	    OnsRange.prototype._onChange = function (event) {
	        this._valueChange.emit(this._element.value);
	    };
	    OnsRange.prototype.ngOnChanges = function (changeRecord) {
	        var value = changeRecord['_value'].currentValue;
	        this._element.value = value;
	    };
	    Object.defineProperty(OnsRange.prototype, "element", {
	        get: function () {
	            return this._element;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OnsRange.prototype.ngOnDestroy = function () {
	        this._element.removeEventListener('change', this._boundOnChange);
	        this._element = null;
	    };
	    __decorate([
	        core_1.Input('value'), 
	        __metadata('design:type', String)
	    ], OnsRange.prototype, "_value", void 0);
	    __decorate([
	        core_1.Output('valueChange'), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], OnsRange.prototype, "_valueChange", void 0);
	    OnsRange = __decorate([
	        core_1.Directive({
	            selector: 'ons-range'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], OnsRange);
	    return OnsRange;
	}());
	exports.OnsRange = OnsRange;
	//# sourceMappingURL=ons-range.js.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	/**
	 * @element ons-input
	 * @directive OnsInput
	 * @selector ons-input
	 * @description
	 *   [en]Angular 2 directive for `<ons-input>` component.[/en]
	 *   [ja]`<ons-input>`要素のAngular 2ディレクティブです。[/ja]
	 * @example
	 *   <ons-input [(value)]="value"></ons-input>
	 */
	var OnsInput = (function () {
	    function OnsInput(_elementRef) {
	        this._elementRef = _elementRef;
	        /**
	         * @output valueChange
	         * @type {string}
	         * @desc
	         *   [en]Triggers when the value is changed.[/en]
	         *   [ja]内部の`input`要素の値が変更された時に発火します。[/ja]
	         */
	        this._valueChange = new core_1.EventEmitter();
	        this._boundOnChange = this._onChange.bind(this);
	        this._element = _elementRef.nativeElement;
	        this._element.addEventListener('input', this._boundOnChange);
	    }
	    OnsInput.prototype._onChange = function (event) {
	        this._valueChange.emit(this._element.value);
	    };
	    OnsInput.prototype.ngOnChanges = function (changeRecord) {
	        var value = changeRecord['_value'].currentValue;
	        this._element.value = value;
	    };
	    Object.defineProperty(OnsInput.prototype, "element", {
	        get: function () {
	            return this._element;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OnsInput.prototype.ngOnDestroy = function () {
	        this._element.removeEventListener('change', this._boundOnChange);
	        this._element = null;
	    };
	    __decorate([
	        core_1.Input('value'), 
	        __metadata('design:type', String)
	    ], OnsInput.prototype, "_value", void 0);
	    __decorate([
	        core_1.Output('valueChange'), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], OnsInput.prototype, "_valueChange", void 0);
	    OnsInput = __decorate([
	        core_1.Directive({
	            selector: 'ons-input'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], OnsInput);
	    return OnsInput;
	}());
	exports.OnsInput = OnsInput;
	//# sourceMappingURL=ons-input.js.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	/**
	 * @element ons-pull-hook
	 * @directive OnsPullHook
	 * @selector ons-pull-hook
	 * @description
	 *   [en]Angular 2 directive for `<ons-pull-hook>` component.[/en]
	 *   [ja]`<ons-pull-hook>`要素のためのAngular2ディレクティブです。[/ja]
	 * @example
	 *   @Component({
	 *     selector: 'app',
	 *     template: `
	 *     <ons-page>
	 *       <ons-toolbar>
	 *         <div class="center">Pull Hook</div>
	 *       </ons-toolbar>
	 *       <div class="content">
	 *         <ons-pull-hook height="64px" threshold-height="128px"
	 *           (changestate)="onChangeState($event)" (action)="onAction($event)">
	 *           {{message}}
	 *         </ons-pull-hook>
	 *       </div>
	 *     </ons-page>
	 *     `
	 *   })
	 *   export class AppComponent {
	 *     message: string = 'Pull down to refresh';
	 *
	 *     onAction($event) {
	 *       setTimeout(() => {
	 *         $event.done();
	 *       }, 1000);
	 *     }
	 *
	 *     onChangeState($event) {
	 *       switch ($event.state) {
	 *         case 'initial':
	 *           this.message = 'Pull down to refresh';
	 *           break;
	 *         case 'preaction':
	 *           this.message = 'Release to refresh';
	 *           break;
	 *         case 'action':
	 *           this.message = 'Loading data...';
	 *           break;
	 *       }
	 *     }
	 *   }
	 */
	var OnsPullHook = (function () {
	    /**
	     * @output changestate
	     * @param {Object} $event
	     * @param {String} $event.state
	     * @desc
	     *   [en][/en]
	     *   [ja]`ons-pull-hook`要素の状態が変わった時に呼び出されます。[/ja]
	     */
	    function OnsPullHook(_elementRef) {
	        var _this = this;
	        this._elementRef = _elementRef;
	        /**
	         * @output action
	         * @param {Object} $event
	         * @param {Function} $event.done
	         * @desc
	         *   [en]Action to trigger.[/en]
	         *   [ja]`ons-pull-hook`要素のアクションが必要なときに呼び出されます。[/ja]
	         */
	        this.action = new core_1.EventEmitter();
	        this._element = _elementRef.nativeElement;
	        this._element.onAction = function (done) { return _this.action.emit({ done: done }); };
	    }
	    OnsPullHook.prototype.ngOnDestroy = function () {
	        this._element.onAction = null;
	        this._element = null;
	    };
	    __decorate([
	        core_1.Output('action'), 
	        __metadata('design:type', Object)
	    ], OnsPullHook.prototype, "action", void 0);
	    OnsPullHook = __decorate([
	        core_1.Directive({
	            selector: 'ons-pull-hook'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], OnsPullHook);
	    return OnsPullHook;
	}());
	exports.OnsPullHook = OnsPullHook;
	//# sourceMappingURL=ons-pull-hook.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var ItemContext = (function () {
	    function ItemContext($implicit, index, count) {
	        this.$implicit = $implicit;
	        this.index = index;
	        this.count = count;
	    }
	    return ItemContext;
	}());
	exports.ItemContext = ItemContext;
	/**
	 * @element ons-lazy-repeat
	 * @directive OnsLazyRepeat
	 * @selector [ons-lazy-repeat]
	 * @description
	 *   [en]Angular 2 directive for `<ons-lazy-repeat>` component.[/en]
	 *   [en]`<ons-lazy-repeat>`要素と同じ機能を提供するAngular 2ディレクティブです。[/en]
	 * @example
	 *   <ons-list>
	 *     <ons-list-item *onsLazyRepeat="let item of items; let i = index">
	 *       #{{i}} {{item.msg}}
	 *     </ons-list-item>
	 *   </ons-list>
	 */
	var OnsLazyRepeat = (function () {
	    function OnsLazyRepeat(_elementRef, _templateRef, _viewContainer) {
	        this._elementRef = _elementRef;
	        this._templateRef = _templateRef;
	        this._viewContainer = _viewContainer;
	    }
	    Object.defineProperty(OnsLazyRepeat.prototype, "onsLazyRepeatOf", {
	        /**
	         * @input onsLazyRepeat
	         * @desc
	         *   [en]Render infinite lists with "let of" syntax in Angular 2.[/en]
	         *   [ja]let of式を指定します。[/ja]
	         * @example
	         *  <ons-list>
	         *    <ons-list-item *onsLazyRepeat="let message of messages">
	         *      {{message}}
	         *    </ons-list-item>
	         *  </ons-list>
	         */
	        set: function (value) {
	            var _this = this;
	            this._onsLazyRepeatOf = value;
	            this._provider = new ons._internal.LazyRepeatProvider(this._elementRef.nativeElement.parentElement, new ons._internal.LazyRepeatDelegate({
	                loadItemElement: function (index, parent, done) {
	                    _this._loadItemTemplate(index, parent, done);
	                },
	                countItems: function () {
	                    return _this._onsLazyRepeatOf.length;
	                }
	            }));
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OnsLazyRepeat.prototype._loadItemTemplate = function (index, parent, done) {
	        var context = new ItemContext(this._onsLazyRepeatOf[index], index, this._onsLazyRepeatOf.length);
	        var view = this._viewContainer.createEmbeddedView(this._templateRef, context);
	        // dirty fix on createEmbeddedView() does not insert DOM element randomly.
	        parent.appendChild(view.rootNodes[0]);
	        done(view.rootNodes[0]);
	    };
	    OnsLazyRepeat.prototype.refresh = function () {
	        if (this._provider) {
	            this._viewContainer.clear();
	            this._provider.refresh();
	        }
	    };
	    OnsLazyRepeat.prototype.ngOnDestroy = function () {
	        if (this._provider) {
	            this._provider.destroy();
	        }
	        this._viewContainer.clear();
	        this._provider = null;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object), 
	        __metadata('design:paramtypes', [Object])
	    ], OnsLazyRepeat.prototype, "onsLazyRepeatOf", null);
	    OnsLazyRepeat = __decorate([
	        core_1.Directive({
	            selector: '[onsLazyRepeat]'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.TemplateRef, core_1.ViewContainerRef])
	    ], OnsLazyRepeat);
	    return OnsLazyRepeat;
	}());
	exports.OnsLazyRepeat = OnsLazyRepeat;
	//# sourceMappingURL=ons-lazy-repeat.js.map

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var params_1 = __webpack_require__(3);
	/**
	 * @element ons-splitter-side
	 * @directive OnsSplitterSide
	 * @selector ons-splitter-side
	 * @description
	 *   [ja]`<ons-splitter-side>`要素のAngular 2ディレクティブです。[/ja]
	 *   [en]Angular 2 directive for `<ons-splitter-side>` component.[/en]
	 * @example
	 *   @Component({
	 *     selector: 'ons-page',
	 *     template: `
	 *       <ons-toolbar>
	 *         <div class="center">Left Page</div>
	 *       </ons-toolbar>
	 *       <div class="background"></div>
	 *       <div class="content">
	 *         Left
	 *       </div>
	 *     `
	 *   })
	 *   class SidePageComponent { }
	 *
	 *   @Component({
	 *     selector: 'app',
	 *     template: `
	 *     <ons-splitter>
	 *       <ons-splitter-side [page]="sidePage" side="left" width="200px">
	 *       </ons-splitter-side>
	 *       <ons-splitter-content>...</ons-splitter-content>
	 *     </ons-splitter>
	 *     `
	 *   })
	 *   export class AppComponent {
	 *     sidePage = SidePageComponent;
	 *   }
	 */
	var OnsSplitterSide = (function () {
	    function OnsSplitterSide(_elementRef, _viewContainer, _resolver, _injector, _zone) {
	        this._elementRef = _elementRef;
	        this._viewContainer = _viewContainer;
	        this._resolver = _resolver;
	        this._injector = _injector;
	        this._zone = _zone;
	        this.element.pageLoader = this._createPageLoader();
	    }
	    Object.defineProperty(OnsSplitterSide.prototype, "page", {
	        /**
	         * @input page
	         * @type {Type<any>}
	         * @desc
	         *   [en]Page content.[/en]
	         *   [ja]表示するページコンポーネントのクラスを指定します。[/en]
	         */
	        set: function (page) {
	            this.element.page = page;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(OnsSplitterSide.prototype, "element", {
	        get: function () {
	            return this._elementRef.nativeElement;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OnsSplitterSide.prototype._createPageLoader = function () {
	        var _this = this;
	        var componentRefMap = new WeakMap();
	        return new ons.PageLoader(function (_a, done) {
	            var page = _a.page, parent = _a.parent, params = _a.params;
	            _this._zone.run(function () {
	                var injector = core_1.ReflectiveInjector.resolveAndCreate([
	                    { provide: params_1.Params, useValue: new params_1.Params(params || {}) },
	                    { provide: OnsSplitterSide, useValue: _this }
	                ], _this._injector);
	                var factory = _this._resolver.resolveComponentFactory(page);
	                var pageComponentRef = _this._viewContainer.createComponent(factory, 0, injector);
	                var pageElement = pageComponentRef.location.nativeElement;
	                componentRefMap.set(pageElement, pageComponentRef);
	                _this.element.appendChild(pageElement); // dirty fix to insert in correct position
	                done(pageElement);
	            });
	        }, function (element) {
	            if (componentRefMap.has(element)) {
	                componentRefMap.get(element).destroy();
	                componentRefMap.delete(element);
	            }
	        });
	    };
	    __decorate([
	        core_1.Input('page'), 
	        __metadata('design:type', core_1.Type), 
	        __metadata('design:paramtypes', [core_1.Type])
	    ], OnsSplitterSide.prototype, "page", null);
	    OnsSplitterSide = __decorate([
	        core_1.Directive({
	            selector: 'ons-splitter-side'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ViewContainerRef, core_1.ComponentFactoryResolver, core_1.Injector, core_1.NgZone])
	    ], OnsSplitterSide);
	    return OnsSplitterSide;
	}());
	exports.OnsSplitterSide = OnsSplitterSide;
	/**
	 * @element ons-splitter-content
	 * @directive OnsSplitterContent
	 * @selector ons-splitter-content
	 * @description
	 *    [ja]`<ons-splitter-content>`要素のためのAngular2 ディレクティブです。[/ja]
	 *    [en]Angular 2 directive for `<ons-splitter-content>` component.[/en]
	 */
	var OnsSplitterContent = (function () {
	    function OnsSplitterContent(_elementRef, _viewContainer, _resolver, _injector) {
	        this._elementRef = _elementRef;
	        this._viewContainer = _viewContainer;
	        this._resolver = _resolver;
	        this._injector = _injector;
	        this.element.pageLoader = this._createPageLoader();
	    }
	    Object.defineProperty(OnsSplitterContent.prototype, "page", {
	        /**
	         * @input page
	         * @type {Type<any>}
	         * @desc
	         *   [en]Specify the page component.[/en]
	         *   [ja]表示するページコンポーネントのクラスを指定します。[/en]
	         */
	        set: function (page) {
	            this.element.page = page;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(OnsSplitterContent.prototype, "element", {
	        get: function () {
	            return this._elementRef.nativeElement;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OnsSplitterContent.prototype._createPageLoader = function () {
	        var _this = this;
	        var componentRefMap = new WeakMap();
	        return new ons.PageLoader(function (_a, done) {
	            var page = _a.page, parent = _a.parent, params = _a.params;
	            var injector = core_1.ReflectiveInjector.resolveAndCreate([
	                { provide: params_1.Params, useValue: new params_1.Params(params || {}) },
	                { provide: OnsSplitterContent, useValue: _this }
	            ], _this._injector);
	            var factory = _this._resolver.resolveComponentFactory(page);
	            var pageComponentRef = _this._viewContainer.createComponent(factory, 0, injector);
	            var pageElement = pageComponentRef.location.nativeElement;
	            componentRefMap.set(pageElement, pageComponentRef);
	            _this.element.appendChild(pageElement); // dirty fix to insert in correct position
	            done(pageElement);
	        }, function (element) {
	            if (componentRefMap.has(element)) {
	                componentRefMap.get(element).destroy();
	                componentRefMap.delete(element);
	            }
	        });
	    };
	    __decorate([
	        core_1.Input('page'), 
	        __metadata('design:type', core_1.Type), 
	        __metadata('design:paramtypes', [core_1.Type])
	    ], OnsSplitterContent.prototype, "page", null);
	    OnsSplitterContent = __decorate([
	        core_1.Directive({
	            selector: 'ons-splitter-content'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ViewContainerRef, core_1.ComponentFactoryResolver, core_1.Injector])
	    ], OnsSplitterContent);
	    return OnsSplitterContent;
	}());
	exports.OnsSplitterContent = OnsSplitterContent;
	//# sourceMappingURL=ons-splitter.js.map

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * @object onsNotification
	 */
	exports.onsNotification = ons.notification;
	//# sourceMappingURL=notification.js.map

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	exports.onsPlatform = ons.platform;
	//# sourceMappingURL=platform.js.map

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var params_1 = __webpack_require__(3);
	var component_loader_1 = __webpack_require__(16);
	/**
	 * @object AlertDialogFactory
	 */
	var AlertDialogFactory = (function () {
	    function AlertDialogFactory(_injector, _resolver, _appRef, _componentLoader, _zone) {
	        this._injector = _injector;
	        this._resolver = _resolver;
	        this._appRef = _appRef;
	        this._componentLoader = _componentLoader;
	        this._zone = _zone;
	    }
	    AlertDialogFactory.prototype.createAlertDialog = function (componentType, params) {
	        var _this = this;
	        if (params === void 0) { params = {}; }
	        return new Promise(function (resolve) {
	            setImmediate(function () {
	                _this._zone.run(function () {
	                    var factory = _this._resolver.resolveComponentFactory(componentType);
	                    var injector = core_1.ReflectiveInjector.resolveAndCreate([
	                        { provide: params_1.Params, useValue: new params_1.Params(params) }
	                    ], _this._injector);
	                    var componentRef = factory.create(injector);
	                    var rootElement = componentRef.location.nativeElement;
	                    _this._componentLoader.load(componentRef);
	                    var element = rootElement.children[0];
	                    var alertDialogElement = element.tagName === 'ONS-ALERT-DIALOG' ? element : element.querySelector('ons-alert-dialog');
	                    if (!alertDialogElement) {
	                        throw Error('<ons-alert-dialog> element is not found in component\'s template.');
	                    }
	                    resolve({ alertDialog: alertDialogElement, destroy: function () { return componentRef.destroy(); } });
	                });
	            });
	        });
	    };
	    AlertDialogFactory = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [core_1.Injector, core_1.ComponentFactoryResolver, core_1.ApplicationRef, component_loader_1.ComponentLoader, core_1.NgZone])
	    ], AlertDialogFactory);
	    return AlertDialogFactory;
	}());
	exports.AlertDialogFactory = AlertDialogFactory;
	//# sourceMappingURL=alert-dialog-factory.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14).setImmediate))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(15).nextTick;
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14).setImmediate, __webpack_require__(14).clearImmediate))

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("process/browser.js");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var ComponentLoader = (function () {
	    function ComponentLoader(appRef) {
	        this.appRef = appRef;
	    }
	    // Load an instance of ComponentRef in app view.
	    ComponentLoader.prototype.load = function (componentRef) {
	        var _this = this;
	        var rootElement = componentRef.location.nativeElement;
	        if (this.appRef['attachView']) {
	            // angular2.3.x has `attachView` and `detachView` methods.
	            this.appRef['attachView'](componentRef.hostView);
	            componentRef.onDestroy(function () {
	                _this.appRef['detachView'](componentRef.hostView);
	                if (rootElement.parentNode) {
	                    rootElement.parentNode.removeChild(rootElement);
	                }
	            });
	        }
	        else {
	            if (this.appRef['registerChangeDetector']) {
	                this.appRef['registerChangeDetector'](componentRef.changeDetectorRef);
	            }
	            componentRef.onDestroy(function () {
	                if (_this.appRef['unregisterChangeDetector']) {
	                    _this.appRef['unregisterChangeDetector'](componentRef.changeDetectorRef);
	                }
	                if (rootElement.parentNode) {
	                    rootElement.parentNode.removeChild(rootElement);
	                }
	            });
	        }
	        var rootContainer = this.appRef['_rootComponents'][0].location.nativeElement;
	        rootContainer.appendChild(rootElement);
	    };
	    ComponentLoader = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [core_1.ApplicationRef])
	    ], ComponentLoader);
	    return ComponentLoader;
	}());
	exports.ComponentLoader = ComponentLoader;
	//# sourceMappingURL=component-loader.js.map

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var params_1 = __webpack_require__(3);
	var component_loader_1 = __webpack_require__(16);
	/**
	 * @object PopoverFactory
	 */
	var PopoverFactory = (function () {
	    function PopoverFactory(_injector, _resolver, _appRef, _componentLoader, _zone) {
	        this._injector = _injector;
	        this._resolver = _resolver;
	        this._appRef = _appRef;
	        this._componentLoader = _componentLoader;
	        this._zone = _zone;
	    }
	    PopoverFactory.prototype.createPopover = function (componentType, params) {
	        var _this = this;
	        if (params === void 0) { params = {}; }
	        return new Promise(function (resolve) {
	            setImmediate(function () {
	                _this._zone.run(function () {
	                    var factory = _this._resolver.resolveComponentFactory(componentType);
	                    var injector = core_1.ReflectiveInjector.resolveAndCreate([
	                        { provide: params_1.Params, useValue: new params_1.Params(params) }
	                    ], _this._injector);
	                    var componentRef = factory.create(injector);
	                    var rootElement = componentRef.location.nativeElement;
	                    _this._componentLoader.load(componentRef);
	                    var element = rootElement.children[0];
	                    var popoverElement = element.tagName === 'ONS-POPOVER' ? element : element.querySelector('ons-popover');
	                    if (!popoverElement) {
	                        throw Error('<ons-popover> element is not found in component\'s template.');
	                    }
	                    resolve({ popover: popoverElement, destroy: function () { return componentRef.destroy(); } });
	                });
	            });
	        });
	    };
	    PopoverFactory = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [core_1.Injector, core_1.ComponentFactoryResolver, core_1.ApplicationRef, component_loader_1.ComponentLoader, core_1.NgZone])
	    ], PopoverFactory);
	    return PopoverFactory;
	}());
	exports.PopoverFactory = PopoverFactory;
	//# sourceMappingURL=popover-factory.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14).setImmediate))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var params_1 = __webpack_require__(3);
	var component_loader_1 = __webpack_require__(16);
	/**
	 * @object DialogFactory
	 */
	var DialogFactory = (function () {
	    function DialogFactory(_injector, _resolver, _appRef, _componentLoader, _zone) {
	        this._injector = _injector;
	        this._resolver = _resolver;
	        this._appRef = _appRef;
	        this._componentLoader = _componentLoader;
	        this._zone = _zone;
	    }
	    DialogFactory.prototype.createDialog = function (componentType, params) {
	        var _this = this;
	        if (params === void 0) { params = {}; }
	        return new Promise(function (resolve) {
	            setImmediate(function () {
	                _this._zone.run(function () {
	                    var factory = _this._resolver.resolveComponentFactory(componentType);
	                    var injector = core_1.ReflectiveInjector.resolveAndCreate([
	                        { provide: params_1.Params, useValue: new params_1.Params(params) }
	                    ], _this._injector);
	                    var componentRef = factory.create(injector);
	                    var rootElement = componentRef.location.nativeElement;
	                    _this._componentLoader.load(componentRef);
	                    var element = rootElement.children[0];
	                    var dialogElement = element.tagName === 'ONS-DIALOG' ? element : element.querySelector('ons-dialog');
	                    if (!dialogElement) {
	                        throw Error('<ons-dialog> element is not found in component\'s template.');
	                    }
	                    resolve({ dialog: dialogElement, destroy: function () { return componentRef.destroy(); } });
	                });
	            });
	        });
	    };
	    DialogFactory = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [core_1.Injector, core_1.ComponentFactoryResolver, core_1.ApplicationRef, component_loader_1.ComponentLoader, core_1.NgZone])
	    ], DialogFactory);
	    return DialogFactory;
	}());
	exports.DialogFactory = DialogFactory;
	//# sourceMappingURL=dialog-factory.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14).setImmediate))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var params_1 = __webpack_require__(3);
	var component_loader_1 = __webpack_require__(16);
	/**
	 * @object ModalFactory
	 */
	var ModalFactory = (function () {
	    function ModalFactory(_injector, _resolver, _appRef, _componentLoader, _zone) {
	        this._injector = _injector;
	        this._resolver = _resolver;
	        this._appRef = _appRef;
	        this._componentLoader = _componentLoader;
	        this._zone = _zone;
	    }
	    ModalFactory.prototype.createModal = function (componentType, params) {
	        var _this = this;
	        if (params === void 0) { params = {}; }
	        return new Promise(function (resolve) {
	            setImmediate(function () {
	                _this._zone.run(function () {
	                    var factory = _this._resolver.resolveComponentFactory(componentType);
	                    var injector = core_1.ReflectiveInjector.resolveAndCreate([
	                        { provide: params_1.Params, useValue: new params_1.Params(params) }
	                    ], _this._injector);
	                    var componentRef = factory.create(injector);
	                    var rootElement = componentRef.location.nativeElement;
	                    _this._componentLoader.load(componentRef);
	                    var element = rootElement.children[0];
	                    var modalElement = element.tagName === 'ONS-MODAL' ? element : element.querySelector('ons-modal');
	                    if (!modalElement) {
	                        throw Error('<ons-modal> element is not found in component\'s template.');
	                    }
	                    resolve({ modal: modalElement, destroy: function () { return componentRef.destroy(); } });
	                });
	            });
	        });
	    };
	    ModalFactory = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [core_1.Injector, core_1.ComponentFactoryResolver, core_1.ApplicationRef, component_loader_1.ComponentLoader, core_1.NgZone])
	    ], ModalFactory);
	    return ModalFactory;
	}());
	exports.ModalFactory = ModalFactory;
	//# sourceMappingURL=modal-factory.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14).setImmediate))

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("@angular/common");

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("@angular/platform-browser");

/***/ }
/******/ ])
});
;
//# sourceMappingURL=angular2-onsenui.umd.js.map