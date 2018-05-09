webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__web_dev_web_dev_component__ = __webpack_require__("../../../../../src/app/web-dev/web-dev.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_science_data_science_component__ = __webpack_require__("../../../../../src/app/data-science/data-science.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lifelog_lifelog_component__ = __webpack_require__("../../../../../src/app/lifelog/lifelog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resources_resources_component__ = __webpack_require__("../../../../../src/app/resources/resources.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_article_article_component__ = __webpack_require__("../../../../../src/app/shared/article/article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_sub_home_sub_home_component__ = __webpack_require__("../../../../../src/app/shared/sub-home/sub-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/shared/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__web_dev_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/web-dev/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__web_dev_d3_chart_d3_chart_component__ = __webpack_require__("../../../../../src/app/web-dev/d3-chart/d3-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__web_dev_chart_js_chart_js_component__ = __webpack_require__("../../../../../src/app/web-dev/chart-js/chart-js.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__web_dev_code_tricks_code_tricks_component__ = __webpack_require__("../../../../../src/app/web-dev/code-tricks/code-tricks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__data_science_python_python_component__ = __webpack_require__("../../../../../src/app/data-science/python/python.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__data_science_algorithm_algorithm_component__ = __webpack_require__("../../../../../src/app/data-science/algorithm/algorithm.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'home', redirectTo: '' },
    { path: 'web', component: __WEBPACK_IMPORTED_MODULE_3__web_dev_web_dev_component__["a" /* WebDevComponent */],
        children: [
            {
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_10__web_dev_dashboard_dashboard_component__["a" /* DashboardComponent */],
            },
            {
                path: 'd3-chart',
                component: __WEBPACK_IMPORTED_MODULE_11__web_dev_d3_chart_d3_chart_component__["a" /* D3ChartComponent */],
            },
            {
                path: 'chart-js',
                component: __WEBPACK_IMPORTED_MODULE_12__web_dev_chart_js_chart_js_component__["a" /* ChartJsComponent */],
            },
            {
                path: '30s-of-css',
                component: __WEBPACK_IMPORTED_MODULE_13__web_dev_code_tricks_code_tricks_component__["a" /* CodeTricksComponent */],
            },
            {
                path: '**',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            }
        ],
    },
    { path: 'data', component: __WEBPACK_IMPORTED_MODULE_4__data_science_data_science_component__["a" /* DataScienceComponent */],
        children: [
            {
                path: 'python',
                component: __WEBPACK_IMPORTED_MODULE_14__data_science_python_python_component__["a" /* PythonComponent */],
            },
            {
                path: 'algorithm',
                component: __WEBPACK_IMPORTED_MODULE_15__data_science_algorithm_algorithm_component__["a" /* AlgorithmComponent */],
            },
            {
                path: '**',
                redirectTo: 'python',
                pathMatch: 'full',
            }
        ],
    },
    {
        path: 'resources', component: __WEBPACK_IMPORTED_MODULE_6__resources_resources_component__["a" /* ResourcesComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_8__shared_sub_home_sub_home_component__["a" /* SubHomeComponent */] },
            { path: 'article/:src/:id', component: __WEBPACK_IMPORTED_MODULE_7__shared_article_article_component__["a" /* ArticleComponent */] }
        ]
    },
    {
        path: 'lifelog', component: __WEBPACK_IMPORTED_MODULE_5__lifelog_lifelog_component__["a" /* LifelogComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_8__shared_sub_home_sub_home_component__["a" /* SubHomeComponent */] },
            { path: 'article/:src/:id', component: __WEBPACK_IMPORTED_MODULE_7__shared_article_article_component__["a" /* ArticleComponent */] }
        ]
    },
    {
        path: 'page-not-found', component: __WEBPACK_IMPORTED_MODULE_9__shared_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
    },
    { path: '**', redirectTo: 'page-not-found' },
];
var config = {
    useHash: true,
};
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes, config)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_md__ = __webpack_require__("../../../../ngx-md/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__web_dev_web_dev_component__ = __webpack_require__("../../../../../src/app/web-dev/web-dev.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__data_science_data_science_component__ = __webpack_require__("../../../../../src/app/data-science/data-science.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lifelog_lifelog_component__ = __webpack_require__("../../../../../src/app/lifelog/lifelog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__resources_resources_component__ = __webpack_require__("../../../../../src/app/resources/resources.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_header_header_component__ = __webpack_require__("../../../../../src/app/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_article_article_component__ = __webpack_require__("../../../../../src/app/shared/article/article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/shared/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_codeHighlighter_codeHighlighter__ = __webpack_require__("../../../../../src/app/shared/codeHighlighter/codeHighlighter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_sub_home_sub_home_component__ = __webpack_require__("../../../../../src/app/shared/sub-home/sub-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_tags_tags_component__ = __webpack_require__("../../../../../src/app/shared/tags/tags.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_gadget_gadget_component__ = __webpack_require__("../../../../../src/app/shared/gadget/gadget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_gadget_gadget_one_gadget_one_component__ = __webpack_require__("../../../../../src/app/shared/gadget/gadget-one/gadget-one.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_gadget_gadget_two_gadget_two_component__ = __webpack_require__("../../../../../src/app/shared/gadget/gadget-two/gadget-two.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_gadget_gadget_three_gadget_three_component__ = __webpack_require__("../../../../../src/app/shared/gadget/gadget-three/gadget-three.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_gadget_gadget_container_gadget_container_component__ = __webpack_require__("../../../../../src/app/shared/gadget/gadget-container/gadget-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__web_dev_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/web-dev/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__web_dev_d3_chart_d3_chart_component__ = __webpack_require__("../../../../../src/app/web-dev/d3-chart/d3-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__data_science_python_python_component__ = __webpack_require__("../../../../../src/app/data-science/python/python.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__data_science_algorithm_algorithm_component__ = __webpack_require__("../../../../../src/app/data-science/algorithm/algorithm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__web_dev_chart_js_chart_js_component__ = __webpack_require__("../../../../../src/app/web-dev/chart-js/chart-js.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_get_src_service__ = __webpack_require__("../../../../../src/app/services/get-src.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_gadget_message_service__ = __webpack_require__("../../../../../src/app/services/gadget-message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__shared_add_gadget_add_gadget_directive__ = __webpack_require__("../../../../../src/app/shared/add-gadget/add-gadget.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__web_dev_code_tricks_code_tricks_component__ = __webpack_require__("../../../../../src/app/web-dev/code-tricks/code-tricks.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__web_dev_web_dev_component__["a" /* WebDevComponent */],
                __WEBPACK_IMPORTED_MODULE_10__data_science_data_science_component__["a" /* DataScienceComponent */],
                __WEBPACK_IMPORTED_MODULE_11__lifelog_lifelog_component__["a" /* LifelogComponent */],
                __WEBPACK_IMPORTED_MODULE_12__resources_resources_component__["a" /* ResourcesComponent */],
                __WEBPACK_IMPORTED_MODULE_26__web_dev_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_27__web_dev_d3_chart_d3_chart_component__["a" /* D3ChartComponent */],
                __WEBPACK_IMPORTED_MODULE_28__data_science_python_python_component__["a" /* PythonComponent */],
                __WEBPACK_IMPORTED_MODULE_29__data_science_algorithm_algorithm_component__["a" /* AlgorithmComponent */],
                __WEBPACK_IMPORTED_MODULE_30__web_dev_chart_js_chart_js_component__["a" /* ChartJsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__shared_sub_home_sub_home_component__["a" /* SubHomeComponent */],
                /** shared component */
                __WEBPACK_IMPORTED_MODULE_20__shared_tags_tags_component__["a" /* TagsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__shared_gadget_gadget_component__["a" /* GadgetComponent */],
                __WEBPACK_IMPORTED_MODULE_13__shared_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__shared_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__shared_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__shared_article_article_component__["a" /* ArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_17__shared_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_22__shared_gadget_gadget_one_gadget_one_component__["a" /* GadgetOneComponent */],
                __WEBPACK_IMPORTED_MODULE_23__shared_gadget_gadget_two_gadget_two_component__["a" /* GadgetTwoComponent */],
                __WEBPACK_IMPORTED_MODULE_24__shared_gadget_gadget_three_gadget_three_component__["a" /* GadgetThreeComponent */],
                __WEBPACK_IMPORTED_MODULE_25__shared_gadget_gadget_container_gadget_container_component__["a" /* GadgetContainerComponent */],
                /** directives */
                __WEBPACK_IMPORTED_MODULE_33__shared_add_gadget_add_gadget_directive__["a" /* AddGadgetDirective */],
                __WEBPACK_IMPORTED_MODULE_34__web_dev_code_tricks_code_tricks_component__["a" /* CodeTricksComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_22__shared_gadget_gadget_one_gadget_one_component__["a" /* GadgetOneComponent */],
                __WEBPACK_IMPORTED_MODULE_23__shared_gadget_gadget_two_gadget_two_component__["a" /* GadgetTwoComponent */],
                __WEBPACK_IMPORTED_MODULE_24__shared_gadget_gadget_three_gadget_three_component__["a" /* GadgetThreeComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_md__["a" /* MarkdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_18__shared_codeHighlighter_codeHighlighter__["a" /* CodeHighlighterModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_31__services_get_src_service__["a" /* GetSrcService */],
                __WEBPACK_IMPORTED_MODULE_32__services_gadget_message_service__["a" /* GadgetMessageService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/data-science/algorithm/algorithm.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  algorithm works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/data-science/algorithm/algorithm.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/data-science/algorithm/algorithm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlgorithmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlgorithmComponent = (function () {
    function AlgorithmComponent() {
    }
    AlgorithmComponent.prototype.ngOnInit = function () {
    };
    AlgorithmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-algorithm',
            template: __webpack_require__("../../../../../src/app/data-science/algorithm/algorithm.component.html"),
            styles: [__webpack_require__("../../../../../src/app/data-science/algorithm/algorithm.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AlgorithmComponent);
    return AlgorithmComponent;
}());



/***/ }),

/***/ "../../../../../src/app/data-science/data-science.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <div class=\"row no-gutters main-page\">\r\n    <div class=\"\" [ngClass]=\"{'col-10':showSidebar == true,'col-12':showSidebar == false}\">\r\n        <div class=\"row no-gutters header\">\r\n            <div class=\"col-8\">\r\n                <div class=\"web-icon\"><span><i class=\"fa fa-github-alt\"></i></span></div>\r\n                <app-header [title]=\"title\" class=\"header-title\"></app-header>\r\n                <div class=\"right-icon link-item\" (click)=\"gotoGithub()\"><span><i class=\"fa fa-github\"></i></span></div>\r\n                <div class=\"right-icon link-item\"routerLink=\"/\"><span><i class=\"fa fa-home\"></i></span></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row no-gutters wraper\">\r\n            <div class=\"col-8 content\">\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n        </div>\r\n        <div class=\"footer\">\r\n            <div class=\"row no-gutters wraper\">\r\n                <div class=\"col-8\">\r\n                    <app-footer></app-footer>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"sidebar\" [ngClass]=\"{'col-2':showSidebar == true,'hideSidebar':showSidebar == false}\">\r\n        <app-sidebar [items]=\"items\"></app-sidebar>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"sidebar-icon\" (click)=\"toggle()\">\r\n    <i *ngIf = \"!showSidebar\" class=\"fa fa-bars\"></i>\r\n    <i *ngIf = \"showSidebar\" class=\"fa fa-close\"></i>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/data-science/data-science.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n  width: 100%;\n  background: #fafafa;\n  height: 100%;\n  margin: 0;\n  position: relative; }\n\n.main-page {\n  height: 100%; }\n\n.hideSidebar {\n  display: none; }\n\n.header {\n  width: 100%;\n  height: 55px;\n  line-height: 55px;\n  box-sizing: border-box;\n  border-bottom: 3px solid #a60800;\n  background: #ffffff;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.header-title {\n  font-size: 1.4rem;\n  float: left;\n  color: #24292e; }\n\n.wraper {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%; }\n\n.content {\n  background-color: #ffffff;\n  border: 1px solid #efefef;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e2e2e2;\n  margin: 1.5rem 0;\n  padding: 1rem 1rem; }\n\n.sidebar {\n  width: 100%;\n  height: 100%;\n  background: #29363d;\n  z-index: 1000;\n  position: fixed;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n\n.footer {\n  width: 100%;\n  display: block;\n  padding: 1.5rem 0;\n  min-height: 50px;\n  background: #f5f5f5; }\n\n.right-icon {\n  float: right;\n  margin: 0 1rem 0 0.5rem;\n  font-size: 1.2rem;\n  cursor: pointer; }\n\n.web-icon {\n  float: left;\n  margin: 0 0.5rem;\n  color: #a60800;\n  font-size: 1.5rem; }\n\n.link-item {\n  outline: none;\n  color: #333;\n  cursor: pointer; }\n\n.link-item:hover {\n  color: #e37f7f;\n  font-weight: 450;\n  transition: color 0.2s ease; }\n\n.sidebar-icon {\n  position: fixed;\n  background: #29363d;\n  color: #e37f7f;\n  z-index: 1050;\n  right: 3rem;\n  bottom: 3rem;\n  cursor: pointer;\n  line-height: 0;\n  padding: 2px 4px;\n  border-radius: 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/data-science/data-science.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataScienceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataScienceComponent = (function () {
    function DataScienceComponent() {
        this.title = "Data Science";
        this.showSidebar = true;
        this.items = [
            { name: 'Python', isChildren: false, open: false, url: '/data/python', children: [] },
            { name: 'Algorithm', isChildren: false, open: false, url: '/data/algorithm', children: [] },
        ];
    }
    DataScienceComponent.prototype.ngOnInit = function () {
    };
    DataScienceComponent.prototype.toggle = function () {
        this.showSidebar = !this.showSidebar;
    };
    DataScienceComponent.prototype.gotoGithub = function () {
        window.open('https://github.com/StartE');
    };
    DataScienceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-data-science',
            template: __webpack_require__("../../../../../src/app/data-science/data-science.component.html"),
            styles: [__webpack_require__("../../../../../src/app/data-science/data-science.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DataScienceComponent);
    return DataScienceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/data-science/python/python.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  python works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/data-science/python/python.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/data-science/python/python.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PythonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PythonComponent = (function () {
    function PythonComponent() {
    }
    PythonComponent.prototype.ngOnInit = function () {
    };
    PythonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-python',
            template: __webpack_require__("../../../../../src/app/data-science/python/python.component.html"),
            styles: [__webpack_require__("../../../../../src/app/data-science/python/python.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PythonComponent);
    return PythonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background d-flex  justify-content-center align-items-center\">\r\n    <div class=\"main-page\">\r\n        <div class=\"row no-gutters page-img\">\r\n            <div class=\"\" title=\"Go to Github\" (click)=\"gotoGithub()\">\r\n                <img class=\"img\" src=\"./../../assets/img/photo.jpg\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row no-gutters page-title\">\r\n            <span>Start<i class = \"icon fa fa-etsy\"></i>'s Blog</span>\r\n        </div>\r\n        <div class=\"row no-gutters page-intro\">\r\n            <span>{{'Adversity reveals genius'|uppercase}}</span>\r\n        </div>\r\n        <div class=\"row no-gutters\">\r\n            <div class=\"col-3 link-item\" title=\"Web and Design\" routerLink=\"/web\">\r\n                <span>Web & Design</span>\r\n            </div>\r\n            <div class=\"col-3 link-item\" title=\"Data Science\" routerLink=\"/data\">\r\n                <span>Data Science</span>\r\n            </div>\r\n            <div class=\"col-3 link-item\" title=\"Resources\" routerLink=\"/resources/\">\r\n                <span>Rescources</span>\r\n            </div>\r\n            <div class=\"col-3 link-item\" title= \"LifeLog\" routerLink=\"/lifelog\">\r\n                <span>Lifelog</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-page {\n  width: 38rem;\n  height: 25rem;\n  padding: 0.5rem 2rem;\n  background: white;\n  border-radius: 0.5rem;\n  box-sizing: border-box; }\n\n.background {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  background: #ffffff; }\n\n.page-title {\n  font-size: 1.4rem;\n  font-weight: 500;\n  margin: 0.5rem 0;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  color: #24292e; }\n\n.page-intro {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  color: #999;\n  font-weight: 450;\n  padding: 0rem 0 1rem 0; }\n\n.page-img {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  cursor: pointer; }\n\n.img {\n  border-radius: 50%;\n  width: 5rem;\n  height: 5rem;\n  padding: 5px;\n  border: 1px dashed #333; }\n\n.icon {\n  color: #a60800; }\n\n.link-item {\n  text-align: center;\n  outline: none;\n  font-style: italic;\n  color: #738792;\n  cursor: pointer; }\n\n.link-item:hover {\n  color: #e37f7f;\n  font-weight: 550;\n  transition: color 0.2s ease; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.navigate = function (item) {
        console.log(item);
    };
    HomeComponent.prototype.gotoGithub = function () {
        window.open('https://github.com/StartE');
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lifelog/lifelog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters resource\">\r\n    <div class = \"col-9\" >\r\n        <div class = \"resource-title\">\r\n            <div class= \"header-title\">This is My Life</div>\r\n            <div class=\"right-icon link-item\" (click)=\"gotoGithub()\"><span><i class=\"fa fa-github\"></i></span></div>\r\n            <div class=\"right-icon link-item\" routerLink=\"/\"><span><i class=\"fa fa-home\"></i></span></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row no-gutters\">\r\n    <div class=\"col-9\">\r\n        <div class=\"article-content\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n        <div class=\"tag-list\">\r\n            <app-tags [currentTages] = \"currentTages\"></app-tags>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-3\">\r\n        <div class=\"article-list\">\r\n            <div *ngFor =\"let article of articles\" class=\"list-item\"(click)= \"onSelect(article)\" [routerLink]=\"['article',article.src]\"\r\n            [routerLinkActive]=\"['selected']\"><span>{{article.name}}-------</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/lifelog/lifelog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".resource {\n  box-sizing: border-box;\n  border-bottom: 3px solid #a60800;\n  height: 55px;\n  line-height: 55px; }\n\n.resource-title {\n  padding-left: 10%; }\n\n.article-content {\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-top: 2rem; }\n\n.article-list {\n  margin: 2rem 0.5rem 2rem 0; }\n\n.list-item {\n  padding: 0.5rem 1rem;\n  border-left: 1px solid #e2e2e2;\n  outline: none;\n  box-sizing: border-box; }\n\n.list-item:hover {\n  color: #e37f7f; }\n\n.list-item.selected {\n  font-weight: 500;\n  color: #a60800; }\n\n.list-item:hover::before {\n  background: #e37f7f; }\n\n.list-item.selected ::before {\n  background: #a60800; }\n\n.before, .list-item:hover::before, .list-item.selected ::before {\n  font-weight: 500;\n  border-radius: 50%;\n  content: \"\";\n  position: absolute;\n  margin-left: -1.25rem;\n  margin-top: 0.5rem;\n  height: 0.5rem;\n  width: 0.5rem; }\n\n.right-icon {\n  float: right;\n  margin: 0 1rem 0 0.5rem;\n  font-size: 1.2rem;\n  cursor: pointer; }\n\n.link-item {\n  outline: none;\n  color: #333;\n  cursor: pointer; }\n\n.link-item:hover {\n  color: #e37f7f;\n  font-weight: 450;\n  transition: color 0.2s ease; }\n\n.header-title {\n  font-size: 1.4rem;\n  float: left;\n  color: #24292e; }\n\n.tag-list {\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-top: -1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lifelog/lifelog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LifelogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_get_src_service__ = __webpack_require__("../../../../../src/app/services/get-src.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LifelogComponent = (function () {
    function LifelogComponent(getSrcService) {
        this.getSrcService = getSrcService;
        this.articles = [];
        this.tags = [];
        this.currentTages = [];
        this.selectedArticle = null;
    }
    LifelogComponent_1 = LifelogComponent;
    LifelogComponent.prototype.ngOnInit = function () {
        this.getArticleList();
    };
    LifelogComponent.prototype.ngOnDestroy = function () {
        this.cancelRequest();
    };
    LifelogComponent.prototype.setDefault = function () {
        if (this.articles.length > 0) {
            this.selectedArticle = this.articles[0];
            this.getTags();
        }
    };
    LifelogComponent.prototype.cancelRequest = function () {
        if (this.subscribe != undefined) {
            this.subscribe.unsubscribe();
        }
    };
    LifelogComponent.prototype.getArticleList = function () {
        var _this = this;
        this.cancelRequest();
        this.subscribe = this.getSrcService.getSource('./../../assets/file/article-list.json').subscribe(function (res) {
            _this.articles = JSON.parse(res).articleList.filter(function (d) { return d.type == LifelogComponent_1.lifelogType; });
            _this.tags = JSON.parse(res).tags;
            _this.setDefault();
        }, function (error) {
            console.log(error);
        });
    };
    LifelogComponent.prototype.onSelect = function (article) {
        this.selectedArticle = article;
        this.getTags();
    };
    LifelogComponent.prototype.gotoGithub = function () {
        window.open('https://github.com/StartE');
    };
    LifelogComponent.prototype.getTags = function () {
        this.currentTages = [];
        for (var i = 0; i < this.selectedArticle.tags.length; i++) {
            var id = this.selectedArticle.tags[i];
            this.currentTages.push(this.tags[id]);
        }
    };
    LifelogComponent.lifelogType = 2;
    LifelogComponent = LifelogComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-lifelog',
            template: __webpack_require__("../../../../../src/app/lifelog/lifelog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lifelog/lifelog.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_get_src_service__["a" /* GetSrcService */]])
    ], LifelogComponent);
    return LifelogComponent;
    var LifelogComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/resources/resources.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters resource\">\r\n    <div class = \"col-9\" >\r\n        <div class = \"resource-title\">\r\n            <div class= \"header-title\">Resources and Collections</div>\r\n            <div class=\"right-icon link-item\" (click)=\"gotoGithub()\"><span><i class=\"fa fa-github\"></i></span></div>\r\n            <div class=\"right-icon link-item\" routerLink=\"/\"><span><i class=\"fa fa-home\"></i></span></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row no-gutters\">\r\n    <div class=\"col-9\">\r\n        <div class=\"article-content\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n        <div class=\"tag-list\">\r\n            <app-tags [currentTages] = \"currentTages\"></app-tags>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-3\">\r\n        <div class=\"article-list\">\r\n            <div *ngFor =\"let article of articles\" class=\"list-item\"(click)= \"onSelect(article)\" [routerLink]=\"['article',article.src,article.id]\"\r\n            [routerLinkActive]=\"['selected']\"><span>{{article.name}}-------</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/resources/resources.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".resource {\n  box-sizing: border-box;\n  border-bottom: 3px solid #a60800;\n  height: 55px;\n  line-height: 55px; }\n\n.resource-title {\n  padding-left: 10%; }\n\n.article-content {\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-top: 2rem; }\n\n.article-list {\n  margin: 2rem 0.5rem 1rem 0; }\n\n.list-item {\n  padding: 0.5rem 1rem;\n  border-left: 1px solid #e2e2e2;\n  outline: none;\n  box-sizing: border-box; }\n\n.list-item:hover {\n  color: #e37f7f; }\n\n.list-item.selected {\n  font-weight: 500;\n  color: #a60800; }\n\n.list-item:hover::before {\n  background: #e37f7f; }\n\n.list-item.selected ::before {\n  background: #a60800; }\n\n.before, .list-item:hover::before, .list-item.selected ::before {\n  font-weight: 500;\n  border-radius: 50%;\n  content: \"\";\n  position: absolute;\n  margin-left: -1.25rem;\n  margin-top: 0.5rem;\n  height: 0.5rem;\n  width: 0.5rem; }\n\n.right-icon {\n  float: right;\n  margin: 0 1rem 0 0.5rem;\n  font-size: 1.2rem;\n  cursor: pointer; }\n\n.link-item {\n  outline: none;\n  color: #333;\n  cursor: pointer; }\n\n.link-item:hover {\n  color: #e37f7f;\n  font-weight: 450;\n  transition: color 0.2s ease; }\n\n.header-title {\n  font-size: 1.4rem;\n  float: left;\n  color: #24292e; }\n\n.tag-list {\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-top: -1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/resources/resources.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_get_src_service__ = __webpack_require__("../../../../../src/app/services/get-src.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResourcesComponent = (function () {
    function ResourcesComponent(getSrcService) {
        this.getSrcService = getSrcService;
        this.articles = [];
        this.tags = [];
        this.selectedArticle = null;
        this.currentTages = [];
    }
    ResourcesComponent_1 = ResourcesComponent;
    ResourcesComponent.prototype.ngOnInit = function () {
        this.getArticleList();
    };
    ResourcesComponent.prototype.ngOnDestroy = function () {
        this.cancelRequest();
    };
    ResourcesComponent.prototype.setDefault = function () {
        if (this.articles.length > 0) {
            this.selectedArticle = this.articles[0];
            this.getTags();
        }
    };
    ResourcesComponent.prototype.cancelRequest = function () {
        if (this.subscribe != undefined) {
            this.subscribe.unsubscribe();
        }
    };
    ResourcesComponent.prototype.getArticleList = function () {
        var _this = this;
        this.cancelRequest();
        this.subscribe = this.getSrcService.getSource('./../../assets/file/article-list.json').subscribe(function (res) {
            _this.articles = JSON.parse(res).articleList.filter(function (d) { return d.type == ResourcesComponent_1.resourcesType; });
            _this.tags = JSON.parse(res).tags;
            _this.setDefault();
        }, function (error) {
            console.log(error);
        });
    };
    ResourcesComponent.prototype.onSelect = function (article) {
        this.selectedArticle = article;
        this.getTags();
    };
    ResourcesComponent.prototype.gotoGithub = function () {
        window.open('https://github.com/StartE');
    };
    ResourcesComponent.prototype.getTags = function () {
        this.currentTages = [];
        for (var i = 0; i < this.selectedArticle.tags.length; i++) {
            var id = this.selectedArticle.tags[i];
            this.currentTages.push(this.tags[id]);
        }
    };
    ResourcesComponent.resourcesType = 1;
    ResourcesComponent = ResourcesComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-resources',
            template: __webpack_require__("../../../../../src/app/resources/resources.component.html"),
            styles: [__webpack_require__("../../../../../src/app/resources/resources.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_get_src_service__["a" /* GetSrcService */]])
    ], ResourcesComponent);
    return ResourcesComponent;
    var ResourcesComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/services/gadget-message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GadgetMessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GadgetMessageService = (function () {
    function GadgetMessageService() {
        this.closeGadgetSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.closeGadgetSource$ = this.closeGadgetSource.asObservable();
    }
    GadgetMessageService.prototype.announceGadgetClose = function (id) {
        this.closeGadgetSource.next(id);
    };
    GadgetMessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GadgetMessageService);
    return GadgetMessageService;
}());



/***/ }),

/***/ "../../../../../src/app/services/get-src.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetSrcService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GetSrcService = (function () {
    function GetSrcService(http) {
        this.http = http;
    }
    GetSrcService.prototype.getSource = function (src) {
        return this.http.get(src)
            .map(this.extractData)
            .catch(this.handleError);
    };
    GetSrcService.prototype.extractData = function (response) {
        return response.text() || '';
    };
    GetSrcService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        //console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    GetSrcService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], GetSrcService);
    return GetSrcService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/add-gadget/add-gadget.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGadgetDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddGadgetDirective = (function () {
    function AddGadgetDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    AddGadgetDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appAddGadget]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */]])
    ], AddGadgetDirective);
    return AddGadgetDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/article/article.component.html":
/***/ (function(module, exports) {

module.exports = "<markdown [path]=\"mdPath\"></markdown>"

/***/ }),

/***/ "../../../../../src/app/shared/article/article.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/article/article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleComponent = (function () {
    function ArticleComponent(route, router) {
        this.route = route;
        this.router = router;
        this.mdPath = '';
    }
    ArticleComponent.prototype.ngOnInit = function () {
        this.src = this.route.paramMap.switchMap(function (params) { return params.getAll('src'); });
        this.fileId = this.route.paramMap.switchMap(function (params) { return params.getAll('id'); });
        this.getFilePath();
        this.getFileTags();
    };
    ArticleComponent.prototype.ngOnChanges = function () {
    };
    ArticleComponent.prototype.getFileTags = function () {
        this.getTag = this.fileId.subscribe(function (res) {
            var id = +res;
        });
    };
    ArticleComponent.prototype.getFilePath = function () {
        var _this = this;
        this.getPath = this.src.subscribe(function (res) {
            _this.mdPath = "./../../../assets/file/" + res + ".md";
        }, function (err) {
            console.log(err);
        });
    };
    ArticleComponent.prototype.ngOnDestroy = function () {
        this.getPath.unsubscribe();
    };
    ArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-article',
            template: __webpack_require__("../../../../../src/app/shared/article/article.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/article/article.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/codeHighlighter/codeHighlighter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CodeHighlighter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeHighlighterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CodeHighlighter = (function () {
    function CodeHighlighter(el) {
        this.el = el;
    }
    CodeHighlighter.prototype.ngOnInit = function () {
        if (window['Prism']) {
            window['Prism'].highlightElement(this.el.nativeElement);
        }
    };
    CodeHighlighter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[highlightCode]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], CodeHighlighter);
    return CodeHighlighter;
}());

var CodeHighlighterModule = (function () {
    function CodeHighlighterModule() {
    }
    CodeHighlighterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            exports: [CodeHighlighter],
            declarations: [CodeHighlighter]
        })
    ], CodeHighlighterModule);
    return CodeHighlighterModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>footer works!</p>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/gadget/gadget-container/gadget-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]= \"style\" draggable =\"true\" (mouseover)=\"showToolBar = true\" (mouseleave)=\"showToolBar = false\">\n    <div class=\"gadget-content\">\n        <div class=\"row no-gutters gadget-title\">\n            <div *ngIf = \"showToolBar\" class=\"right-close\" (click)=\"closeGadget()\"><span class=\"fa fa-close\"></span></div>\n        </div>\n        <ng-content></ng-content>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/gadget/gadget-container/gadget-container.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gadget-container, .gadgetTwo, .gadgetOne, .gadgetThree {\n  padding: 0.5rem;\n  display: inline-block; }\n\n.gadget-title {\n  color: white;\n  background: #e37f7f;\n  width: 100%;\n  height: 25px; }\n\n.gadgetTwo {\n  width: 40%;\n  height: 200px; }\n\n.gadgetOne {\n  width: 60%;\n  height: 200px; }\n\n.gadgetThree {\n  width: 50%;\n  height: 150px; }\n\n.right-close {\n  margin-right: 0.5rem;\n  cursor: pointer;\n  float: right; }\n\n.gadget-content {\n  width: 100%;\n  height: 100%;\n  border: 2px solid #a60800;\n  box-sizing: border-box; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/gadget/gadget-container/gadget-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GadgetContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gadget_message_service__ = __webpack_require__("../../../../../src/app/services/gadget-message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GadgetContainerComponent = (function () {
    function GadgetContainerComponent(gadgetMessageService) {
        this.gadgetMessageService = gadgetMessageService;
        this.showToolbar = false;
    }
    GadgetContainerComponent.prototype.ngOnInit = function () {
    };
    GadgetContainerComponent.prototype.closeGadget = function () {
        this.gadgetMessageService.announceGadgetClose(this.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], GadgetContainerComponent.prototype, "style", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], GadgetContainerComponent.prototype, "widthType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], GadgetContainerComponent.prototype, "id", void 0);
    GadgetContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-gadget-container',
            template: __webpack_require__("../../../../../src/app/shared/gadget/gadget-container/gadget-container.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/gadget/gadget-container/gadget-container.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_gadget_message_service__["a" /* GadgetMessageService */]])
    ], GadgetContainerComponent);
    return GadgetContainerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/gadget/gadget-one/gadget-one.component.html":
/***/ (function(module, exports) {

module.exports = "<app-gadget-container [style]= \"data.style\" [id]=\"id\" [widthType]=\"'one'\">\n    <p>gadget-{{id}} works</p>\n    <p>{{data}}</p>\n</app-gadget-container>"

/***/ }),

/***/ "../../../../../src/app/shared/gadget/gadget-one/gadget-one.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/gadget/gadget-one/gadget-one.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GadgetOneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gadget_component__ = __webpack_require__("../../../../../src/app/shared/gadget/gadget.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GadgetOneComponent = (function (_super) {
    __extends(GadgetOneComponent, _super);
    function GadgetOneComponent() {
        return _super.call(this) || this;
    }
    GadgetOneComponent.prototype.ngOnInit = function () {
    };
    GadgetOneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-gadget-one',
            template: __webpack_require__("../../../../../src/app/shared/gadget/gadget-one/gadget-one.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/gadget/gadget-one/gadget-one.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GadgetOneComponent);
    return GadgetOneComponent;
}(__WEBPACK_IMPORTED_MODULE_1__gadget_component__["a" /* GadgetComponent */]));



/***/ }),

/***/ "../../../../../src/app/shared/gadget/gadget-three/gadget-three.component.html":
/***/ (function(module, exports) {

module.exports = "<app-gadget-container [style]= \"data.style\" [id]=\"id\" [widthType]=\"'three'\">\n    <p>gadget-{{id}} works</p>\n    <p>{{id}}3333</p>\n</app-gadget-container>"

/***/ }),

/***/ "../../../../../src/app/shared/gadget/gadget-three/gadget-three.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/gadget/gadget-three/gadget-three.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GadgetThreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gadget_component__ = __webpack_require__("../../../../../src/app/shared/gadget/gadget.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GadgetThreeComponent = (function (_super) {
    __extends(GadgetThreeComponent, _super);
    function GadgetThreeComponent() {
        return _super.call(this) || this;
    }
    GadgetThreeComponent.prototype.ngOnInit = function () {
    };
    GadgetThreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-gadget-three',
            template: __webpack_require__("../../../../../src/app/shared/gadget/gadget-three/gadget-three.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/gadget/gadget-three/gadget-three.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GadgetThreeComponent);
    return GadgetThreeComponent;
}(__WEBPACK_IMPORTED_MODULE_1__gadget_component__["a" /* GadgetComponent */]));



/***/ }),

/***/ "../../../../../src/app/shared/gadget/gadget-two/gadget-two.component.html":
/***/ (function(module, exports) {

module.exports = "<app-gadget-container [style]= \"data.style\"  [id]=\"id\" [widthType]=\"'two'\">\n    <div class=\"row no-gutters\">\n        <div>gadget-{{id}} works</div>\n        <div>{{id}}HHH</div>\n    </div>\n</app-gadget-container>"

/***/ }),

/***/ "../../../../../src/app/shared/gadget/gadget-two/gadget-two.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".g2 {\n  width: 100%;\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/gadget/gadget-two/gadget-two.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GadgetTwoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gadget_component__ = __webpack_require__("../../../../../src/app/shared/gadget/gadget.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GadgetTwoComponent = (function (_super) {
    __extends(GadgetTwoComponent, _super);
    function GadgetTwoComponent() {
        return _super.call(this) || this;
    }
    GadgetTwoComponent.prototype.ngOnInit = function () {
    };
    GadgetTwoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-gadget-two',
            template: __webpack_require__("../../../../../src/app/shared/gadget/gadget-two/gadget-two.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/gadget/gadget-two/gadget-two.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GadgetTwoComponent);
    return GadgetTwoComponent;
}(__WEBPACK_IMPORTED_MODULE_1__gadget_component__["a" /* GadgetComponent */]));



/***/ }),

/***/ "../../../../../src/app/shared/gadget/gadget.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"gadget\">\n    {{id}}\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/gadget/gadget.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gadget {\n  width: 300px;\n  height: 100px;\n  border: 1px solid gray; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/gadget/gadget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GadgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GadgetComponent = (function () {
    function GadgetComponent() {
        this.onDragStartGadget = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onDragOverGadget = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    GadgetComponent.prototype.ngOnInit = function () {
    };
    GadgetComponent.prototype.onDragStart = function (event) {
        this.onDragStartGadget.emit(this.id);
    };
    GadgetComponent.prototype.onDragOver = function (event) {
        event.preventDefault();
        this.onDragOverGadget.emit(this.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], GadgetComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], GadgetComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], GadgetComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], GadgetComponent.prototype, "onDragStartGadget", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], GadgetComponent.prototype, "onDragOverGadget", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('dragstart', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DragEvent]),
        __metadata("design:returntype", void 0)
    ], GadgetComponent.prototype, "onDragStart", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('dragover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DragEvent]),
        __metadata("design:returntype", void 0)
    ], GadgetComponent.prototype, "onDragOver", null);
    GadgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-gadget',
            template: __webpack_require__("../../../../../src/app/shared/gadget/gadget.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/gadget/gadget.component.scss")],
            host: {
                '(dragstart)': "onDragStart($event)",
                '(dragenter)': 'onDragEnter($event)',
                '(dragover)': 'onDragOver($event)',
                '(drop)': 'onDrop($event)',
            }
        }),
        __metadata("design:paramtypes", [])
    ], GadgetComponent);
    return GadgetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div><span>{{title}}</span></div>"

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/shared/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-not-fond d-flex justify-content-center align-items-center\">\r\n    <div class=\"warn\">\r\n        <div class=\"row no-gutters\">\r\n            <span><i class=\"fa fa-close warn-alert\"></i>{{'page not found' |uppercase}}</span>\r\n        </div>\r\n        <div class=\"row no-gutters warn-info\">\r\n            We searched everywhere but couldn't find the page you were looking for.\r\n        </div>\r\n        <div class=\"row no-gutters\">\r\n            <span>Go Back Home <i class=\"fa fa-home back-home\" routerLink=\"/\"></i></span>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/page-not-found/page-not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".warn {\n  width: 20rem;\n  height: 10rem; }\n\n.warn-alert {\n  color: #a60800;\n  font-size: 1.2rem;\n  margin-right: 0.5rem; }\n\n.page-not-fond {\n  margin: 0;\n  width: 100%;\n  height: 100%; }\n\n.warn-info {\n  padding: 0.5rem 0; }\n\n.back-home {\n  cursor: pointer;\n  font-size: 1.2rem;\n  color: #333; }\n\n.back-home:hover {\n  color: #e37f7f; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/shared/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"nav-items\">\r\n    <div *ngFor =\"let item of items\">\r\n        <div *ngIf =\"!isChildren\" class=\"nav-title\" [routerLink]=\"item.url\" (click) = \"onClick(item)\" [ngClass]=\"{'selected':currentSelected == item}\">\r\n            <span class=\"line\">\r\n                <i class=\" left-icon fa fa-star\"></i>\r\n                {{item.name}}\r\n                <i class=\" right-icon fa\" [ngClass]=\"{'fa-chevron-left':!item.open,'fa-chevron-down':item.open}\"></i>\r\n            </span>\r\n        </div>\r\n        <div *ngIf =\"item.open\" >\r\n            <div *ngFor = \"let d of item.children\"  [routerLink]=\"d.url\" (click) = \"onClick(d)\" [ngClass]=\"{'selected':currentSelected == d}\" class=\"nav-item\">\r\n                <span class=\"line\">\r\n                    <i class=\" left-icon fa fa-minus\"></i>\r\n                    {{d.name}}\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-items {\n  width: 100%;\n  height: 100%;\n  padding: 5rem 0; }\n\n.nav-title {\n  width: 100%;\n  height: 2.5rem;\n  padding: 0.5rem 1rem;\n  cursor: pointer;\n  font-size: 0.95rem;\n  outline: none;\n  color: #ffffff;\n  font-weight: 550; }\n\n.nav-item {\n  height: 2.5rem;\n  padding: 0.5rem 2rem;\n  font-size: 0.8rem;\n  cursor: pointer;\n  outline: none;\n  color: #ffffff;\n  font-weight: 500; }\n\n.nav-title:hover {\n  background: #e37f7f;\n  color: white; }\n\n.nav-item:hover {\n  background: #e37f7f;\n  color: white; }\n\n.selected {\n  color: #e37f7f;\n  background: #33444c; }\n\n.line {\n  height: 1.5rem;\n  line-height: 1.5rem; }\n\n.right-icon {\n  float: right;\n  font-size: 0.2rem;\n  height: 1.5rem;\n  line-height: 1.5rem;\n  color: #415a66; }\n\n.left-icon {\n  float: left;\n  font-size: 0.2rem;\n  height: 1.5rem;\n  line-height: 1.5rem;\n  color: #415a66;\n  margin: 0 0.8rem 0 0.3rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
        this.currentSelected = null;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        if (this.items.length > 0) {
            this.currentSelected = this.items[0];
        }
    };
    SidebarComponent.prototype.onClick = function (item) {
        this.currentSelected = item;
        if (this.currentSelected.open != null && this.currentSelected.open != undefined) {
            this.currentSelected.open = !this.currentSelected.open;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], SidebarComponent.prototype, "items", void 0);
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/shared/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/sub-home/sub-home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  sub-home works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/shared/sub-home/sub-home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/sub-home/sub-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubHomeComponent = (function () {
    function SubHomeComponent() {
    }
    SubHomeComponent.prototype.ngOnInit = function () {
    };
    SubHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sub-home',
            template: __webpack_require__("../../../../../src/app/shared/sub-home/sub-home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/sub-home/sub-home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SubHomeComponent);
    return SubHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/tags/tags.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"tag-icon\">\n        <span class=\"tag fa fa-tags\"></span>\n    </div>\n    <div *ngFor = \"let tag of currentTages\" class=\"tag-item\">\n        <span class=\"tag\">{{tag.name}}</span>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/tags/tags.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tag-item {\n  float: left;\n  margin: 1rem 0.5rem;\n  background: #fafafa;\n  color: #e37f7f;\n  border-radius: 0.25rem;\n  padding: 0 0.25rem;\n  border: 1px dashed #e37f7f;\n  box-sizing: border-box;\n  cursor: pointer; }\n\n.tag-icon {\n  float: left;\n  color: #e37f7f;\n  border-radius: 0.25rem;\n  padding: 0 0.25rem;\n  margin: 1rem 0; }\n\nspan.tag {\n  height: 1rem;\n  line-height: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/tags/tags.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TagsComponent = (function () {
    function TagsComponent() {
        this.currentTages = [];
    }
    TagsComponent.prototype.ngOnInit = function () {
    };
    TagsComponent.prototype.ngOnChanges = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], TagsComponent.prototype, "currentTages", void 0);
    TagsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tags',
            template: __webpack_require__("../../../../../src/app/shared/tags/tags.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/tags/tags.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TagsComponent);
    return TagsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/web-dev/chart-js/chart-js.component.html":
/***/ (function(module, exports) {

module.exports = "<div #myTree ></div>"

/***/ }),

/***/ "../../../../../src/app/web-dev/chart-js/chart-js.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".node {\n  cursor: pointer; }\n\n.overlay {\n  background-color: #EEE; }\n\n.node circle {\n  fill: #fff;\n  stroke: steelblue;\n  stroke-width: 1.5px; }\n\n.node text {\n  font-size: 10px;\n  font-family: sans-serif; }\n\n.link {\n  fill: none;\n  stroke: #ccc;\n  stroke-width: 1.5px; }\n\ncircle.active {\n  stroke: #000;\n  stroke-width: 2px; }\n\ng.active {\n  stroke: #000;\n  stroke-width: 2px; }\n\n.nodelink {\n  fill: none;\n  stroke: #ccc;\n  stroke-width: 2px; }\n\n.templink {\n  fill: none;\n  stroke: red;\n  stroke-width: 3px; }\n\n.ghostCircle.show {\n  display: block; }\n\n.ghostCircle, .activeDrag .ghostCircle {\n  display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web-dev/chart-js/chart-js.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartJsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartJsComponent = (function () {
    function ChartJsComponent() {
        this.viewHeight = 600;
        this.viewWidth = 400;
    }
    ChartJsComponent.prototype.ngOnInit = function () {
        this.tree = __WEBPACK_IMPORTED_MODULE_1_d3__["l" /* tree */]().size([this.viewHeight, this.viewWidth]);
        this.getJSON();
    };
    ChartJsComponent.prototype.updateTree = function (root) {
        console.log(root);
        var levelWidth = [1];
        var childCount = function (level, n) {
            if (n.children && n.children.length > 0) {
                if (levelWidth.length <= level + 1)
                    levelWidth.push(0);
                levelWidth[level + 1] += n.children.length;
                n.children.forEach(function (n) {
                    childCount(level + 1, n);
                });
            }
        };
        childCount(0, root);
        console.log(levelWidth);
        var newHeight = __WEBPACK_IMPORTED_MODULE_1_d3__["h" /* max */](levelWidth) * 25; //25pixel per line
        var tree = __WEBPACK_IMPORTED_MODULE_1_d3__["c" /* cluster */]().size([this.viewHeight, this.viewWidth]);
        tree(root); // Assigns the x and y coordinates for the nodes.
        var nodeArray = root.descendants(); // Returns array of link objects between nodes.
        var dragListerner = __WEBPACK_IMPORTED_MODULE_1_d3__["d" /* drag */]()
            .on("start", function (d) {
            __WEBPACK_IMPORTED_MODULE_1_d3__["k" /* select */](this).raise().classed("active", true);
        })
            .on("drag", function (d) {
            console.log(__WEBPACK_IMPORTED_MODULE_1_d3__["e" /* event */]);
            __WEBPACK_IMPORTED_MODULE_1_d3__["k" /* select */](this).attr("cx", d.x = __WEBPACK_IMPORTED_MODULE_1_d3__["e" /* event */].x).attr("cy", d.y = __WEBPACK_IMPORTED_MODULE_1_d3__["e" /* event */].y);
        })
            .on("end", function (d) {
            __WEBPACK_IMPORTED_MODULE_1_d3__["k" /* select */](this).classed("active", false);
            console.log(__WEBPACK_IMPORTED_MODULE_1_d3__["e" /* event */]);
            //d3.select(this).attr("transform", "translate(" + d3.event.x + "," + d3.event.y + ")");
        });
        var updateLink = this.svgGroup.selectAll('.link').data(nodeArray.slice(1));
        updateLink.exit().remove(); //remove old;
        updateLink.selectAll('.link')
            .attr('d', function (d) { return "M" + d.y + "," + d.x + ",C" + d.y + "," + (d.x + d.parent.x) / 2 + " " + d.parent.y + "," + (d.x + d.parent.x) / 2 + " " + d.parent.y + "," + d.parent.x; });
        var links = updateLink.enter().append('g')
            .attr('class', 'link')
            .append('path')
            .attr('d', function (d) { return "M" + d.y + "," + d.x + ",C" + d.y + "," + (d.x + d.parent.x) / 2 + " " + d.parent.y + "," + (d.x + d.parent.x) / 2 + " " + d.parent.y + "," + d.parent.x; })
            .attr('fill', 'none')
            .attr('stroke', '#ccc')
            .attr('stroke-width', '2px');
        var updateNode = this.svgGroup.selectAll('.node').data(nodeArray); // Returns array of node objects.
        updateNode.exit().remove();
        updateNode.selectAll('.node')
            .attr('transform', function (d) { return "translate(" + d.y + "," + d.x + ")"; });
        var nodes = updateNode.enter().append('g')
            .attr('class', 'node')
            .attr('transform', function (d) { return "translate(" + d.y + "," + d.x + ")"; })
            .append('circle')
            .attr('fill', 'blue')
            .attr('stroke', 'red')
            .attr('stroke-width', '2px')
            .attr("r", 20)
            .call(dragListerner);
    };
    ChartJsComponent.prototype.getJSON = function () {
        var _this = this;
        var element = this.treeContainer.nativeElement;
        this.baseSvg = __WEBPACK_IMPORTED_MODULE_1_d3__["k" /* select */](element).append('svg')
            .attr('width', this.viewWidth)
            .attr('height', this.viewHeight)
            .attr('class', 'overlay');
        this.svgGroup = this.baseSvg.append('g');
        __WEBPACK_IMPORTED_MODULE_1_d3__["g" /* json */]("./../../../assets/data/new.json", function (treeData) {
            var rootTree = __WEBPACK_IMPORTED_MODULE_1_d3__["f" /* hierarchy */](treeData); //// Assigns parent, children, height, depth, etc..
            _this.updateTree(rootTree);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('myTree'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ChartJsComponent.prototype, "treeContainer", void 0);
    ChartJsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chart-js',
            template: __webpack_require__("../../../../../src/app/web-dev/chart-js/chart-js.component.html"),
            styles: [__webpack_require__("../../../../../src/app/web-dev/chart-js/chart-js.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChartJsComponent);
    return ChartJsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/web-dev/code-tricks/code-tricks.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>30s of CSS</h1>\n<p>主要参考 <a href=\"https://atomiks.github.io/30-seconds-of-css/#horizontal-and-vertical-centering\">30 seconds of css</a> </p>\n<h2>1. Clearfix </h2>\n<pre><code class=\"language-markup\" highlightCode>\n&lt;div class=\"\"&gt;\n  &lt;div class=\"floated\"&gt;float a&lt;/div&gt;\n  &lt;div class=\"floated\"&gt;float b&lt;/div&gt;\n  &lt;div class=\"floated\"&gt;float c&lt;/div&gt;\n&lt;/div&gt;\n&lt;div&gt;Test1 clearfix&lt;/div&gt;\n&lt;div class=\"clearfix\"&gt;\n  &lt;div class=\"floated\"&gt;float a&lt;/div&gt;\n  &lt;div class=\"floated\"&gt;float b&lt;/div&gt;\n  &lt;div class=\"floated\"&gt;float c&lt;/div&gt;\n&lt;/div&gt;\n&lt;div&gt;Test2 clearfix&lt;/div&gt;\n</code></pre>\n\n<pre><code class=\"language-css\" highlightCode>\n.clearfix::after &#123;\n  content: \"\";\n  display: block;\n  clear: both;\n&#125;\n.floated &#123;\n  float: left;\n&#125;\n</code></pre>\n<div class=\"\">\n    <div class=\"floated\">float a</div>\n    <div class=\"floated\">float b</div>\n    <div class=\"floated\">float c</div>\n</div>\n<div>Test1 clearfix</div>\n<div class=\"clearfix\">\n    <div class=\"floated\">float a</div>\n    <div class=\"floated\">float b</div>\n    <div class=\"floated\">float c</div>\n</div>\n<div>Test2 clearfix</div>\n<p>可以看出，test1没有清除浮动，test2使用clearfix清除了float,这里把display默认的inline改为block，因为inline 不支持clear.\n</p>\n\n\n<h2>2. Constant width to height ratio 固定长宽比例</h2>\n<pre>\n<code class=\"language-markup\" highlightCode>&lt;div class=\"constant-width-to-height-ratio\"&gt;&lt;/div&gt;\n</code></pre>\n<div class=\"constant-width-to-height-ratio\"></div>\n<pre><code class=\"language-css\" highlightCode>\n.constant-width-to-height-ratio &#123;\n  background: #333;\n  width: 20%;\n  padding-top: 20%;\n&#125;\n</code></pre>\n<p>只要保持width 和padding-top的比例 等于div的长宽比就可以固定</p>\n\n\n<h2>3. Custom text selection 自定义文字选择样式</h2>\n<pre><code class=\"language-markup\" highlightCode>\n&lt;p&gt;text with default; selection&lt;/p&gt;\n&lt;p class=\"custom-text-selection\"&gt;text with customize selection&lt;/p&gt;\n</code></pre>\n<pre><code class=\"language-css\" highlightCode>\n.custom-text-selection::selection &#123;\n  background: deeppink;\n  color: white;\n&#125;\n</code></pre>\n<p>text with default selection</p>\n<p class=\"custom-text-selection\">text with customize selection</p>\n\n\n<h2>4. Disable Selection 不允许选中文字 </h2>\n<pre><code class=\"language-markup\" highlightCode>\n&lt;p&gt;You can select me&lt;/p&gt;\n&lt;p class=\"unselectable\"&gt;You can't select me!&lt;/p&gt;\n</code></pre>\n<pre><code class=\"language-css\" highlightCode>\n.unselectable&#123;\n    user-select: none;\n&#125;\n</code></pre>\n<p>You can select me</p>\n<p class=\"unselectable\">You can't select me!</p>\n\n\n<h2>5. Donut spinner 转圈圈效果</h2>\n<pre><code class=\"language-markup\" highlightCode>\n&lt;div class=\"donut\"&gt;&lt;/div&gt;\n</code></pre>\n<pre><code class=\"language-css\" highlightCode>\n@keyframes donut-spin&#123;\n    0%&#123; transform: rotate(0deg);&#125;\n    100%&#123; transform: rotate(360deg);&#125;\n&#125;\n.donut&#123;\n    display: inline-block;\n    border: 4px solid rgba(0,0,0,0.25);\n    border-left-color: blue;\n    border-radius: 50%; //transfer square to circle\n    width: 30px;\n    height: 30px;\n    animation: donut-spin 1.2s linear infinite;\n&#125;\n</code></pre>\n<div class=\"donut\"></div>\n\n\n<h2>6. Easing variables 更强大的Ease设置</h2>\n<pre><code class=\"language-markup\" highlightCode>\n&lt;div class=\"easing-variables\"&gt;&lt;/div&gt;\n</code></pre>\n<pre><code class=\"language-css\" highlightCode>\n:root &#123;\n  --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);\n  --ease-in-cubic: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  --ease-in-quint: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  --ease-in-expo: cubic-bezier(0.95, 0.05, 0.795, 0.035);\n  --ease-in-circ: cubic-bezier(0.6, 0.04, 0.98, 0.335);\n  --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  --ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);\n  --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);\n  --ease-out-quint: cubic-bezier(0.23, 1, 0.32, 1);\n  --ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);\n  --ease-out-circ: cubic-bezier(0.075, 0.82, 0.165, 1);\n  --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);\n  --ease-in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1);\n  --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);\n  --ease-in-out-quint: cubic-bezier(0.86, 0, 0.07, 1);\n  --ease-in-out-expo: cubic-bezier(1, 0, 0, 1);\n  --ease-in-out-circ: cubic-bezier(0.785, 0.135, 0.15, 0.86);\n&#125;\n.easing-variables &#123;\n  width: 50px;\n  height: 50px;\n  background: #333;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: transform 1s var(--ease-out-quart);\n&#125;\n.easing-variables:hover &#123;\n  transform: rotate(45deg);\n&#125;\n</code></pre>\n<div class=\"easing-variables\"><span>Hover</span></div>\n<p><code>cubic-bezier</code>又称三次贝塞尔，是控制<code>animation</code>生成速度曲线的函数， 规定是\n    <code>cubic-bezier(&lt;x1&gt;,&lt;y1&gt;,&lt;x2&gt;&lt;y2&gt;)</code>,其中起点是(0,0)终点是(1,1),(x1,y1)和(x2,y2)是途中 经过的两个点,这两个点拟合贝塞尔曲线\n</p>\n<p>参考： <a href=\"http://www.cnblogs.com/Mr-liyang/p/6762998.html\">Ease linear ease-in ease-out ease-in-out的区别</a></p>\n<p>参考： <a href=\"https://www.jianshu.com/p/d999f090d333\">贝塞尔曲线(cubic-bezier)</a></p>\n\n\n\n\n<h2>7. Etched text 嵌入式文字</h2>\n<p class=\"etched-text\">I appear etched into the background.</p>\n<p><code>text-shadow: 0 5px white</code>创建一个和原位置相比水平偏移0px 垂直偏移2px的阴影，为了让阴影工作，背景颜色必须比阴影颜色深，文字颜色必须slightly faded,这样才有雕刻感</p>\n\n<h2>8. Gradient text渐变色文字</h2>\n<p class=\"gradient-text\">Gradient text</p>\n<p> <code>webkit-background-clip: text</code> clips the background with the text, filling the text with the gradient background\n    as the color.</p>\n\n<h2>9.Hairline border 极细的边</h2>\n<div class=\"hairline-border\">text</div>\n\n<h2>10. Horizontal and vertical centering 垂直水平居中</h2>\n<pre><code class=\"language-markup\" highlightCode>\n&lt;div class=\"horizontal-and-vertical-centering\"&gt;\n    &lt;div class=\"child\"&gt;&lt;/div&gt;\n&lt;/div&gt;\n</code></pre>\n<pre><code class=\"language-css\" highlightCode>\n.horizontal-and-vertical-centering&#123;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: #333;\n    height: 80px;\n&#125;\n.child&#123;\n    background: #ee1;\n    height: 20px;\n    width: 30px;\n&#125;\n</code></pre>\n<div class=\"horizontal-and-vertical-centering\">\n    <div class=\"child\"></div>\n</div>\n\n\n\n<h2>11. Hover underline animation</h2>\n<pre><code class=\"language-markup\" highlightCode>\n&lt;p class=\"hover-underline-animation\"&gt;Hover this text to see the effect!&lt;/p&gt;\n</code></pre>\n<pre><code class=\"language-css\" highlightCode>\n.hover-underline-animation&#123;\n    display: inline-block;\n    position: relative;\n    color: #0097ca;\n&#125;\n.hover-underline-animation::after&#123;\n    content: '';\n    position: absolute;\n    width: 100%;\n    transform: scaleX(0);\n    height: 2px;\n    bottom: 0;\n    left:0;\n    background-color: #0087ca;\n    transform-origin: bottom left;\n    transition: transform 0.25s ease-out;\n&#125;\n.hover-underline-animation:hover::after&#123;\n    transform: scaleX(1);\n&#125;\n</code></pre>\n<p class=\"hover-underline-animation\">Hover this text to see the effect!</p>\n\n\n\n<h2>12. Mouse cursor gradient tracking 随着鼠标位置追踪梯度变化效果</h2>\n\n<h2>13. Overflow scroll gradient 溢出控制梯度变化效果</h2>\n<div class=\"overflow-scroll-gradient\">\n    <div class=\"overflow-scroll-gradient__scroller\">\n        kkkkkkkkkkkkk kkkkkkkkkkkkk kkkkkkkkkkkkk kkkkkkkkkkkkk kkkkkkkkkkkkk kkkkkkkkkkkkk kkkkkkkkkkkkk kkkkkkkkkkkkk kkkkkkkkkkkkk\n        kkkkkkkkkkkkk kkkkkkkkkkkkk kkkkkkkkkkkkk kkkkkkkkkkkkk kkkkkkkkkkkkk\n    </div>\n</div>\n\n\n<h2>14. popout menu弹出菜单</h2>\n<pre><code class=\"language-markup\" highlightCode>\n&lt;div class=\"reference\"&gt;\n    &lt;div class=\"popout-menu\"&gt;\n        Popout menu\n    &lt;/div&gt;\n&lt;/div&gt;</code></pre>\n<pre><code class=\"language-css\" highlightCode>\n.reference &#123;\n  position: relative;\n  width: 200px;\n  height: 50px;\n  background: #333;\n&#125;\n.popout-menu &#123;\n  position: absolute;\n  visibility: hidden;\n  left: 100%;\n  width: 200px;\n  height: 40px;\n  background: red;\n&#125;\n.reference:hover > .popout-menu &#123;\n  visibility: visible;\n&#125;\n</code></pre>\n<div class=\"reference\">\n    <div class=\"popout-menu\">\n        Popout menu\n    </div>\n</div>\n\n\n\n<h2>15. Pretty text underline</h2>\n\n<h2>16. Shape separator</h2>\n\n<h2>17. System font stack 系统原生字体</h2>\n<pre class=\"language-css\"><code>\n.system-font-stack &#123;\n  font-family: -apple-system,\n   BlinkMacSystemFont, \n   \"Segoe UI\", \n   Roboto, \n   Oxygen-Sans,\n   Ubuntu,\n   Cantarell,\n   \"Helvetica Neue\",\n   Helvetica, Arial,\n   sans-serif;\n&#125;\n</code></pre>\n<pre>\n浏览器会在这些字体中查找第一个符合条件的。\n1. -apple-system 是San Francisco 用在iOS和macOS(非chrome浏览器上)\n2. BlinkMacSystemFont 是San Francisco,用在MacOS chrome\n3. \"Segoe UI\" 用于win10，“” 是因为有空格\n4. Roboto 用于安卓\n5. Oxygen-Sans 用于GNU+Linux\n6. Ubuntu用于Linux\n7.\"Helvetica Neue\" 和\"Helvetica\" 用于macOS 10.10 及之下版本，“”是因为有空格\n8. Arial 是广泛支持所有系统的字体\n9. sans-serif 是sans-serif 字体的退路，如果所有其他字体都不支持的话\n</pre>\n\n<h2>18. Create a triangle shape with pure CSS 纯CSS创建三角形</h2>\n<pre><code class=\"language-markup\" highlightCode>\n&lt;div class=\"triangle1\"&gt;&lt;/div&gt;\n&lt;div class=\"triangle2\"&gt;&lt;/div&gt;\n&lt;div class=\"triangle3\"&gt;&lt;/div&gt;\n&lt;div class=\"triangle4\"&gt;&lt;/div&gt;\n</code></pre>\n<pre><code class=\"language-css\" highlightCode>\n.triangle&#123;\n    width: 0;\n    height: 0;\n    border: 20px solid;\n&#125;\n.triangle1&#123;\n    @extend .triangle;\n    border-color: #333 transparent transparent transparent;\n&#125;\n.triangle2&#123;\n    @extend .triangle;\n    border-color: transparent #333 transparent transparent;\n&#125;\n.triangle3&#123;\n    @extend .triangle;\n    border-color:  transparent  transparent #333 transparent;\n&#125;\n.triangle4&#123;\n    @extend .triangle;\n    border-color: transparent transparent transparent #333;\n&#125;\n</code></pre>\n<div class=\"triangle1\"></div>\n<div class=\"triangle2\"></div>\n<div class=\"triangle3\"></div>\n<div class=\"triangle4\"></div>\n<p>上 右 下 左</p>\n\n<h2>19. Truncate text长文字省略号</h2>\n<pre><code class=\"language-markup\" highlightCode>\n&lt;p&gt;If I exceed one line's width,I will be Truncated&lt;p&gt;\n&lt;p class=\"truncate-text\"&gt;If I exceed one line's width,I will be Truncated&lt;p&gt;\n</code></pre>\n<pre><code class=\"language-css\" highlightCode>\n.truncate-text&#123;\n    width: 185px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n&#125;\n</code></pre>\n<p>If I exceed one line's width,I will be Truncated<p>\n<p class=\"truncate-text\">If I exceed one line's width,I will be Truncated<p>"

/***/ }),

/***/ "../../../../../src/app/web-dev/code-tricks/code-tricks.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".floated {\n  float: left; }\n\n.clearfix::after {\n  content: \"\";\n  display: block;\n  clear: both; }\n\n.constant-width-to-height-ratio {\n  background: #333;\n  width: 20%;\n  padding-top: 20%; }\n\n.custom-text-selection::-moz-selection {\n  background: deeppink;\n  color: white; }\n\n.custom-text-selection::selection {\n  background: deeppink;\n  color: white; }\n\n.unselectable {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n@-webkit-keyframes donut-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes donut-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.donut {\n  display: inline-block;\n  border: 4px solid rgba(0, 0, 0, 0.25);\n  border-left-color: blue;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  -webkit-animation: donut-spin 1.2s linear infinite;\n          animation: donut-spin 1.2s linear infinite; }\n\n:root {\n  --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);\n  --ease-in-cubic: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  --ease-in-quint: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  --ease-in-expo: cubic-bezier(0.95, 0.05, 0.795, 0.035);\n  --ease-in-circ: cubic-bezier(0.6, 0.04, 0.98, 0.335);\n  --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  --ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);\n  --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);\n  --ease-out-quint: cubic-bezier(0.23, 1, 0.32, 1);\n  --ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);\n  --ease-out-circ: cubic-bezier(0.075, 0.82, 0.165, 1);\n  --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);\n  --ease-in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1);\n  --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);\n  --ease-in-out-quint: cubic-bezier(0.86, 0, 0.07, 1);\n  --ease-in-out-expo: cubic-bezier(1, 0, 0, 1);\n  --ease-in-out-circ: cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n\n.easing-variables {\n  width: 50px;\n  height: 50px;\n  background: #333;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  transition: -webkit-transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: -webkit-transform 1s var(--ease-out-quart);\n  transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: transform 1s var(--ease-out-quart);\n  transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: transform 1s var(--ease-out-quart), -webkit-transform 1s var(--ease-out-quart); }\n\n.easing-variables:hover {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n\n.etched-text {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #b8bec5;\n  background: #f5f6f9;\n  text-shadow: 0 2px white; }\n\n.gradient-text {\n  font-size: 2rem;\n  font-weight: bold;\n  background: -webkit-linear-gradient(green, yellow);\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text; }\n\n.hairline-border {\n  box-shadow: 0 0 0 1px; }\n\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  .hairline-border {\n    box-shadow: 0 0 0 0.5px; } }\n\n@media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 3dppx) {\n  .hairline-border {\n    box-shadow: 0 0 0 0.33333333px; } }\n\n@media (-webkit-min-device-pixel-ratio: 4), (min-resolution: 4dppx) {\n  .hairline-border {\n    box-shadow: 0 0 0 0.25px; } }\n\n.horizontal-and-vertical-centering {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #333;\n  height: 80px; }\n\n.child {\n  background: #ee1;\n  height: 20px;\n  width: 30px; }\n\n.hover-underline-animation {\n  display: inline-block;\n  position: relative;\n  color: #0097ca; }\n\n.hover-underline-animation::after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  -webkit-transform: scaleX(0);\n          transform: scaleX(0);\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: #0087ca;\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n  transition: -webkit-transform 0.25s ease-out;\n  transition: transform 0.25s ease-out;\n  transition: transform 0.25s ease-out, -webkit-transform 0.25s ease-out; }\n\n.hover-underline-animation:hover::after {\n  -webkit-transform: scaleX(1);\n          transform: scaleX(1); }\n\n.overflow-scroll-gradient {\n  position: relative; }\n\n.overflow-scroll-gradient::after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  width: 300px;\n  height: 100px;\n  background: linear-gradient(rgba(255, 255, 255, 0.001), white);\n  pointer-events: none; }\n\n.overflow-scroll-gradient__scroller {\n  overflow-y: scroll;\n  background: white;\n  width: 150px;\n  height: 250px;\n  padding: 15px 0;\n  line-height: 1.2;\n  text-align: center; }\n\n.reference {\n  position: relative;\n  width: 200px;\n  height: 50px;\n  background: #333; }\n\n.popout-menu {\n  position: absolute;\n  visibility: hidden;\n  left: 100%;\n  width: 200px;\n  height: 40px;\n  background: red; }\n\n.reference:hover > .popout-menu {\n  visibility: visible; }\n\n.triangle, .triangle1, .triangle2, .triangle3, .triangle4 {\n  width: 0;\n  height: 0;\n  border: 20px solid; }\n\n.triangle1 {\n  border-color: #333 transparent transparent transparent; }\n\n.triangle2 {\n  border-color: transparent #333 transparent transparent; }\n\n.triangle3 {\n  border-color: transparent  transparent #333 transparent; }\n\n.triangle4 {\n  border-color: transparent transparent transparent #333; }\n\n.truncate-text {\n  width: 185px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web-dev/code-tricks/code-tricks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeTricksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CodeTricksComponent = (function () {
    function CodeTricksComponent() {
    }
    CodeTricksComponent.prototype.ngOnInit = function () {
    };
    CodeTricksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-code-tricks',
            template: __webpack_require__("../../../../../src/app/web-dev/code-tricks/code-tricks.component.html"),
            styles: [__webpack_require__("../../../../../src/app/web-dev/code-tricks/code-tricks.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CodeTricksComponent);
    return CodeTricksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/web-dev/d3-chart/d3-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Angular5: Responsive Chart by D3-V4 </h1>\r\n<p>Now I will show how to dram a responsive chart by d3-v4 under angular5.</p>\r\n<h2>1. draw a simple chart</h2>\r\n<p>First,prepare a div as chart container</p>\r\n\r\n<h3>d3-chart.component.html</h3>\r\n<pre class=\"language-markup\">\r\n<code class=\"language-markup\" highlightCode >&lt;div #chart1 class = \"drawChart\"&gt; &lt;/div&gt;\r\n</code></pre>\r\n\r\n<h3>d3-chart.component.ts</h3>\r\n<pre class=\"language-typescript\">\r\n<code class=\"language-typescript\" highlightCode >import &#123; Component, OnInit, ViewChild, ElementRef &#125; from '@angular/core';\r\nimport * as d3 from 'd3';\r\n\r\n    @ViewChild('chart1') private chartContainer1:ElementRef;\r\n    xScale:any;\r\n    yScale:any;\r\n    svg1:any;\r\n    chart1:any;\r\n    xAxis1:any;\r\n    yAxis1:any;\r\n    width:number = 800;\r\n    height:number = 400;\r\n    marginTop:number = 50;\r\n    marginLeft:number = 50;\r\n    marginBottom:number = 50;\r\n    marginRight:number = 50;\r\n    data = [\r\n            [10,10],\r\n            [20,15],\r\n            [40,20]\r\n    ];\r\n    chartWidth = this.width-this.marginLeft - this.marginRight;\r\n    chartHeight = this.height - this.marginTop - this.marginBottom;\r\n    ngOnInit() &#123;\r\n        this.initChart();\r\n        this.setScale();\r\n        this.drawChart();\r\n    &#125;\r\n    initChart()&#123;\r\n        let element = this.chartContainer1.nativeElement;\r\n        this.svg1 = d3.select(element).append('svg')\r\n            .attr('width',this.width)\r\n            .attr('height',this.height)\r\n\r\n        this.chart1 = this.setChart(this.svg1)\r\n        this.xAxis1 = this.setAxisX(this.svg1)\r\n        this.yAxis1 = this.setAxisY(this.svg1)\r\n    &#125;\r\n    setChart(svg:any)&#123;\r\n        return svg.append('g')\r\n            .attr('class','chart1')\r\n            .attr('width',this.width -this.marginLeft - this.marginRight)\r\n            .attr('height',this.height - this.marginTop - this.marginBottom)\r\n    &#125;\r\n    setAxisX(svg:any)&#123;\r\n        return svg.append('g')\r\n            .attr('class','axis axis-x')\r\n            .attr('transform',`translate($&#123;this.marginLeft&#125;,$&#123;this.height-this.marginBottom&#125;)`);\r\n    &#125;\r\n    setAxisY(svg:any)&#123;\r\n        return svg.append('g')\r\n            .attr('class','axis axis-y')\r\n            .attr('transform',`translate($&#123;this.marginLeft&#125;,$&#123;this.marginTop&#125;)`)\r\n    &#125;\r\n    setScale()&#123;\r\n        let xDomain = this.data.map(d => d[0]);\r\n        let yMax = d3.max(this.data,d=> d[1]);\r\n        this.xScale = d3.scaleBand().padding(1).domain(xDomain).rangeRound([0,this.chartWidth]);\r\n        this.yScale = d3.scaleLinear().domain([0,yMax]).range([this.chartHeight,0]);\r\n    &#125;\r\n    drawChart()&#123;\r\n        let barWidth = 10;\r\n        this.xAxis1.transition().call(d3.axisBottom(this.xScale));\r\n        this.yAxis1.transition().call(d3.axisLeft(this.yScale));\r\n        let update = this.chart1.selectAll('.chart1').data(this.data);\r\n        update.enter().append('rect')\r\n            .attr('class','bar')\r\n            .attr('x',d => this.marginLeft + this.xScale(d[0])-barWidth/2)\r\n            .attr('y',d => this.marginBottom + this.yScale(d[1]))\r\n            .attr('width',barWidth)\r\n            .attr('height',d => this.chartHeight - this.yScale(d[1]))\r\n            .style('fill','#e37f7f')\r\n    &#125;</code></pre>\r\n\r\n<div class = \"drawChart\" #chart1></div>\r\n<h2>2. make chart responsive</h2>\r\n\r\n<h3>d3-chart.component.scss</h3>\r\n<pre class=\"language-scss\">\r\n<code class=\"language-scss\" highlightCode>.svg-container&#123;\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 100%;\r\n    padding-bottom: 50%;//400:800 = 50%;\r\n    vertical-align: top;\r\n    overflow: hidden;\r\n&#125;\r\n.svg-content-responsive&#123;\r\n    display: inline-block;\r\n    position: absolute;\r\n    left:0;\r\n    top:0;\r\n&#125;\r\n</code></pre>\r\n\r\n<h3>d3-chart.component.ts</h3>\r\n<pre><code class=\"language-typescript\" highlightCode >this.svg2 = d3.select(element)\r\n    .append('div')\r\n    .classed('svg-container',true)\r\n    .append('svg')\r\n    .attr('preserveAspectRatio','xMinYMin meet')\r\n    .attr('viewBox','0 0 800 400')\r\n    .classed('svg-content-responsive',true)\r\n</code></pre>\r\n\r\n<div class = \"drawChart\" #chart2></div>\r\n<p>Now you can zoom your browser, and you will find the second chart resize when the browser size changes, however the first chart remains same</p>\r\n<h2>3. dynamic update chart with transition effect when data changes</h2>\r\n\r\n<h3>d3-chart.component.html</h3>\r\n<pre><code class=\"language-markup\" highlightCode >&lt;button type=\"button\" (click)=\"updateData()\"&gt;Refresh&lt;/button&gt;\r\n</code></pre>\r\n\r\n<h3>d3-chart.component.ts</h3>\r\n<pre><code  class=\"language-typescript\" highlightCode >refresh: boolean = false;\r\nupdateData()&#123;\r\n\tlet data2 = [\r\n\t[10,50],\r\n\t[20,15],\r\n\t[30,35],\r\n\t[40,10],\r\n\t[50,40]\r\n\t]\r\n\tthis.refresh = !this.refresh;\r\n\tif(this.refresh)&#123;\r\n\tthis.setScale(data2);\r\n\tthis.drawChart3(data2);\r\n\t&#125;else&#123;\r\n\tthis.setScale(this.data);\r\n\tthis.drawChart3(this.data);\r\n\t&#125;\r\n&#125;\r\ndrawChart3(data)&#123;\r\n\tlet barWidth = 20;\r\n\tthis.xAxis3.transition().call(d3.axisBottom(this.xScale));\r\n\tthis.yAxis3.transition().call(d3.axisLeft(this.yScale));\r\n\tlet update = this.chart3.selectAll('.bar').data(data);\r\n\tupdate.exit().remove();//remove old;\r\n\tthis.chart3.selectAll('.bar')//update exist\r\n\t.attr('x',d => this.marginLeft + this.xScale(d[0])-barWidth/2)\r\n\t.attr('y',this.chartHeight + this.marginTop)// the y position of xAxis\r\n\t.attr('width',barWidth)\r\n\t.attr('height',0)\r\n\t.style('fill','#87CEFA')//blue\r\n\t.transition()\r\n\t.duration(2000)\r\n\t.attr('y',d => this.marginTop + this.yScale(d[1]))\r\n\t.attr('height',d => this.chartHeight - this.yScale(d[1]))\r\n\t.style('fill','#7CCD7C')//green\r\n\r\n\tupdate.enter().append('rect')//add new\r\n\t.attr('class','bar')\r\n\t.attr('x',d => this.marginLeft + this.xScale(d[0])-barWidth/2)\r\n\t.attr('y',this.chartHeight + this.marginTop)// the y position of xAxis\r\n\t.attr('width',barWidth)\r\n\t.attr('height',0)\r\n\t.style('fill','#87CEFA')//blue\r\n\t.transition()\r\n\t.duration(2000)\r\n\t.attr('y',d => this.marginTop + this.yScale(d[1]))\r\n\t.attr('height',d => this.chartHeight - this.yScale(d[1]))\r\n\t.style('fill','#e37f7f')//red\r\n&#125;\r\n</code></pre>\r\nwhen you click the button, you can see the transition effect with data changes.\r\n<button type=\"button\" (click)=\"updateData()\">Refresh</button>\r\n<div class = \"drawChart\" #chart3></div>\r\n<h2>4. add text and tooltip for chart</h2>\r\n\r\n<h3>d3-chart.component.scss</h3>\r\n<pre><code class=\"language-scss\" highlightCode >div.tooltip&#123;\r\n    min-width: 20px;\r\n    position: absolute;\r\n    padding: 2px 8px;\r\n    background: none repeat scroll 0 0 $grey-dark;\r\n    border-radius: 3px;\r\n    pointer-events: none;\r\n    color: $white;\r\n    box-sizing: border-box;\r\n    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px 0px;\r\n    display: block;\r\n    font-size: 0.8rem;\r\n    white-space: pre-line;\r\n&#125;\r\ndiv.tooltip::after&#123;\r\n    position: absolute;\r\n    bottom: auto;\r\n    border-color: $grey-dark transparent transparent transparent ;\r\n    content: '';\r\n    display: block;\r\n    border-style: solid;\r\n    border-width: 4px;\r\n    top:23px;\r\n    left:20px;\r\n&#125;\r\n</code></pre>\r\n<h3>d3-chart.component.ts</h3>\r\n<pre><code class=\"language-typescript\" highlightCode>drawChart4(data)&#123;\r\n\tlet barWidth = 50;\r\n\tthis.xAxis4.transition().call(d3.axisBottom(this.xScale));\r\n\tthis.yAxis4.transition().call(d3.axisLeft(this.yScale));\r\n\tlet update = this.chart4.selectAll('g').data(data);\r\n\tlet toolTip = d3.select('body').append('div')\r\n\t\t.attr('class','tooltip')\r\n\t\t.style('opacity',0);\r\n\tupdate.enter().append('rect')\r\n\t\t.attr('class','bar')\r\n\t\t.attr('x',d => this.marginLeft + this.xScale(d[0])-barWidth/2)\r\n\t\t.attr('y',d => this.marginTop + this.yScale(d[1]))\r\n\t\t.attr('width',barWidth)\r\n\t\t.attr('height',d => this.chartHeight - this.yScale(d[1]))\r\n\t\t.style('fill','#e37f7f')\r\n\t\t.on('mouseover',function(d)&#123;\r\n\t\t\ttoolTip.transition()\r\n\t\t\t.style('opacity',1);//show tooltip\r\n\t\t\ttoolTip.html('d3-chart: '+d[1])// tooltip content\r\n\t\t\t.style('left',(d3.event.pageX)+'px')\r\n\t\t\t.style('top',(d3.event.pageY)+'px');\r\n\t\t\td3.select(this).style('cursor','pointer');\r\n\r\n\t\t&#125;)\r\n\t\t.on('mouseout',function(d)&#123;\r\n\t\t\ttoolTip.transition()\r\n\t\t\t.style('opacity',0);//hide tooltip\r\n\t\t\t&#125;);\r\n\r\n\tlet textHeight = 10;\r\n\tupdate.enter().append('text')\r\n\t\t.attr('class','tt')\r\n\t\t.attr('x',d => this.marginLeft + this.xScale(d[0]))\r\n\t\t.attr('y',d => this.marginTop + this.yScale(d[1]) - textHeight)\r\n\t\t.attr('text-anchor','middle')\r\n\t\t.style('fill','#444')\r\n\t\t.text(d => d[1]);\r\n&#125;\r\n</code></pre>\r\n<div class = \"drawChart\" #chart4></div>\r\n<p>when you move your mouse over the rect, the tooltip shows, and when you moveout, tooltip hides</p>"

/***/ }),

/***/ "../../../../../src/app/web-dev/d3-chart/d3-chart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".svg-container {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  padding-bottom: 50%;\n  vertical-align: top;\n  overflow: hidden; }\n\n.svg-content-responsive {\n  display: inline-block;\n  position: absolute;\n  left: 0;\n  top: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web-dev/d3-chart/d3-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var D3ChartComponent = (function () {
    function D3ChartComponent() {
        this.width = 800;
        this.height = 400;
        this.marginTop = 50;
        this.marginLeft = 50;
        this.marginBottom = 50;
        this.marginRight = 50;
        this.data = [
            [10, 10],
            [20, 15],
            [40, 20]
        ];
        this.refresh = false;
        this.chartWidth = this.width - this.marginLeft - this.marginRight;
        this.chartHeight = this.height - this.marginTop - this.marginBottom;
        this.htmlCode1 = '';
        this.tsCode1 = '';
        this.cssCode2 = '';
        this.tsCode2 = '';
    }
    D3ChartComponent.prototype.ngOnInit = function () {
        this.initChart();
        this.setScale(this.data);
        this.drawChart1(this.data);
        this.drawChart2(this.data);
        this.drawChart3(this.data);
        this.drawChart4(this.data);
    };
    D3ChartComponent.prototype.ngAfterViewInit = function () {
    };
    D3ChartComponent.prototype.initChart = function () {
        var element1 = this.chartContainer1.nativeElement;
        var element2 = this.chartContainer2.nativeElement;
        var element3 = this.chartContainer3.nativeElement;
        var element4 = this.chartContainer4.nativeElement;
        this.svg1 = __WEBPACK_IMPORTED_MODULE_1_d3__["k" /* select */](element1).append('svg')
            .attr('width', this.width)
            .attr('height', this.height);
        this.chart1 = this.setChart(this.svg1);
        this.xAxis1 = this.setAxisX(this.svg1);
        this.yAxis1 = this.setAxisY(this.svg1);
        this.svg2 = __WEBPACK_IMPORTED_MODULE_1_d3__["k" /* select */](element2)
            .append('div')
            .classed('svg-container', true)
            .append('svg')
            .attr('preserveAspectRatio', 'xMinYMin meet')
            .attr('viewBox', '0 0 800 400')
            .classed('svg-content-responsive', true);
        this.chart2 = this.setChart(this.svg2);
        this.xAxis2 = this.setAxisX(this.svg2);
        this.yAxis2 = this.setAxisY(this.svg2);
        this.svg3 = __WEBPACK_IMPORTED_MODULE_1_d3__["k" /* select */](element3)
            .append('div')
            .classed('svg-container', true)
            .append('svg')
            .attr('preserveAspectRatio', 'xMinYMin meet')
            .attr('viewBox', '0 0 800 400')
            .classed('svg-content-responsive', true);
        this.chart3 = this.setChart(this.svg3);
        this.xAxis3 = this.setAxisX(this.svg3);
        this.yAxis3 = this.setAxisY(this.svg3);
        this.svg4 = __WEBPACK_IMPORTED_MODULE_1_d3__["k" /* select */](element4)
            .append('div')
            .classed('svg-container', true)
            .append('svg')
            .attr('id', 'svg4')
            .attr('preserveAspectRatio', 'xMinYMin meet')
            .attr('viewBox', '0 0 800 400')
            .classed('svg-content-responsive', true);
        this.chart4 = this.setChart(this.svg4);
        this.xAxis4 = this.setAxisX(this.svg4);
        this.yAxis4 = this.setAxisY(this.svg4);
    };
    D3ChartComponent.prototype.setChart = function (svg) {
        return svg.append('g')
            .attr('class', 'chart')
            .attr('width', this.width - this.marginLeft - this.marginRight)
            .attr('height', this.height - this.marginTop - this.marginBottom);
    };
    D3ChartComponent.prototype.setAxisX = function (svg) {
        return svg.append('g')
            .attr('class', 'axis axis-x')
            .attr('transform', "translate(" + this.marginLeft + "," + (this.height - this.marginBottom) + ")");
    };
    D3ChartComponent.prototype.setAxisY = function (svg) {
        return svg.append('g')
            .attr('class', 'axis axis-y')
            .attr('transform', "translate(" + this.marginLeft + "," + this.marginTop + ")");
    };
    D3ChartComponent.prototype.setScale = function (data) {
        var xDomain = data.map(function (d) { return d[0]; });
        var yMax = __WEBPACK_IMPORTED_MODULE_1_d3__["h" /* max */](data, function (d) { return d[1]; });
        this.xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["i" /* scaleBand */]().padding(1).domain(xDomain).rangeRound([0, this.chartWidth]);
        this.yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["j" /* scaleLinear */]().domain([0, yMax]).range([this.chartHeight, 0]);
    };
    D3ChartComponent.prototype.drawChart1 = function (data) {
        var _this = this;
        var barWidth = 20;
        this.xAxis1.transition().call(__WEBPACK_IMPORTED_MODULE_1_d3__["a" /* axisBottom */](this.xScale));
        this.yAxis1.transition().call(__WEBPACK_IMPORTED_MODULE_1_d3__["b" /* axisLeft */](this.yScale));
        var update = this.chart1.selectAll('g').data(data);
        update.enter().append('rect')
            .attr('class', 'bar')
            .attr('x', function (d) { return _this.marginLeft + _this.xScale(d[0]) - barWidth / 2; })
            .attr('y', function (d) { return _this.marginTop + _this.yScale(d[1]); })
            .attr('width', barWidth)
            .attr('height', function (d) { return _this.chartHeight - _this.yScale(d[1]); })
            .style('fill', '#e37f7f');
    };
    D3ChartComponent.prototype.drawChart2 = function (data) {
        var _this = this;
        var barWidth = 20;
        this.xAxis2.transition().call(__WEBPACK_IMPORTED_MODULE_1_d3__["a" /* axisBottom */](this.xScale));
        this.yAxis2.transition().call(__WEBPACK_IMPORTED_MODULE_1_d3__["b" /* axisLeft */](this.yScale));
        var update = this.chart2.selectAll('g').data(data);
        update.enter().append('rect')
            .attr('class', 'bar')
            .attr('x', function (d) { return _this.marginLeft + _this.xScale(d[0]) - barWidth / 2; })
            .attr('y', function (d) { return _this.marginTop + _this.yScale(d[1]); })
            .attr('width', barWidth)
            .attr('height', function (d) { return _this.chartHeight - _this.yScale(d[1]); })
            .style('fill', '#e37f7f');
    };
    D3ChartComponent.prototype.drawChart3 = function (data) {
        var _this = this;
        var barWidth = 20;
        this.xAxis3.transition().call(__WEBPACK_IMPORTED_MODULE_1_d3__["a" /* axisBottom */](this.xScale));
        this.yAxis3.transition().call(__WEBPACK_IMPORTED_MODULE_1_d3__["b" /* axisLeft */](this.yScale));
        var update = this.chart3.selectAll('.bar').data(data);
        update.exit().remove(); //remove old;
        this.chart3.selectAll('.bar') //update exist
            .attr('x', function (d) { return _this.marginLeft + _this.xScale(d[0]) - barWidth / 2; })
            .attr('y', this.chartHeight + this.marginTop) // the y position of xAxis
            .attr('width', barWidth)
            .attr('height', 0)
            .style('fill', '#87CEFA') //blue
            .transition()
            .duration(2000)
            .attr('y', function (d) { return _this.marginTop + _this.yScale(d[1]); })
            .attr('height', function (d) { return _this.chartHeight - _this.yScale(d[1]); })
            .style('fill', '#7CCD7C'); //green
        update.enter().append('rect') //add new
            .attr('class', 'bar')
            .attr('x', function (d) { return _this.marginLeft + _this.xScale(d[0]) - barWidth / 2; })
            .attr('y', this.chartHeight + this.marginTop) // the y position of xAxis
            .attr('width', barWidth)
            .attr('height', 0)
            .style('fill', '#87CEFA') //blue
            .transition()
            .duration(2000)
            .attr('y', function (d) { return _this.marginTop + _this.yScale(d[1]); })
            .attr('height', function (d) { return _this.chartHeight - _this.yScale(d[1]); })
            .style('fill', '#e37f7f'); //red
    };
    D3ChartComponent.prototype.updateData = function () {
        var data2 = [
            [10, 50],
            [20, 15],
            [30, 35],
            [40, 10],
            [50, 40]
        ];
        this.refresh = !this.refresh;
        if (this.refresh) {
            this.setScale(data2);
            this.drawChart3(data2);
        }
        else {
            this.setScale(this.data);
            this.drawChart3(this.data);
        }
    };
    D3ChartComponent.prototype.drawChart4 = function (data) {
        var _this = this;
        var barWidth = 50;
        this.xAxis4.transition().call(__WEBPACK_IMPORTED_MODULE_1_d3__["a" /* axisBottom */](this.xScale));
        this.yAxis4.transition().call(__WEBPACK_IMPORTED_MODULE_1_d3__["b" /* axisLeft */](this.yScale));
        var update = this.chart4.selectAll('g').data(data);
        var toolTip = __WEBPACK_IMPORTED_MODULE_1_d3__["k" /* select */]('body').append('div')
            .attr('class', 'tooltip')
            .style('opacity', 0);
        update.enter().append('rect')
            .attr('class', 'bar')
            .attr('x', function (d) { return _this.marginLeft + _this.xScale(d[0]) - barWidth / 2; })
            .attr('y', function (d) { return _this.marginTop + _this.yScale(d[1]); })
            .attr('width', barWidth)
            .attr('height', function (d) { return _this.chartHeight - _this.yScale(d[1]); })
            .style('fill', '#e37f7f')
            .on('mouseover', function (d) {
            toolTip.transition()
                .style('opacity', 1);
            toolTip.html('d3-chart: ' + d[1])
                .style('left', (__WEBPACK_IMPORTED_MODULE_1_d3__["e" /* event */].pageX) + 'px')
                .style('top', (__WEBPACK_IMPORTED_MODULE_1_d3__["e" /* event */].pageY) + 'px');
            __WEBPACK_IMPORTED_MODULE_1_d3__["k" /* select */](this).style('cursor', 'pointer');
        })
            .on('mouseout', function (d) {
            toolTip.transition()
                .style('opacity', 0);
        });
        var textHeight = 10;
        update.enter().append('text')
            .attr('class', 'tt')
            .attr('x', function (d) { return _this.marginLeft + _this.xScale(d[0]); })
            .attr('y', function (d) { return _this.marginTop + _this.yScale(d[1]) - textHeight; })
            .attr('text-anchor', 'middle')
            .style('fill', '#444')
            .text(function (d) { return d[1]; });
    };
    D3ChartComponent.prototype.ngOnDestroy = function () {
        __WEBPACK_IMPORTED_MODULE_1_d3__["k" /* select */]('.tooltip').remove();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('chart1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], D3ChartComponent.prototype, "chartContainer1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('chart2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], D3ChartComponent.prototype, "chartContainer2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('chart3'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], D3ChartComponent.prototype, "chartContainer3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('chart4'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], D3ChartComponent.prototype, "chartContainer4", void 0);
    D3ChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-d3-chart',
            template: __webpack_require__("../../../../../src/app/web-dev/d3-chart/d3-chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/web-dev/d3-chart/d3-chart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], D3ChartComponent);
    return D3ChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/web-dev/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\">\r\n   <ng-template appAddGadget></ng-template>\r\n</div>\r\n<div class=\"another\">\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/web-dev/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard {\n  width: 100%;\n  height: 900px; }\n\n.another {\n  width: 100%;\n  height: 300px;\n  background: gray; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web-dev/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_add_gadget_add_gadget_directive__ = __webpack_require__("../../../../../src/app/shared/add-gadget/add-gadget.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_gadget_gadget_one_gadget_one_component__ = __webpack_require__("../../../../../src/app/shared/gadget/gadget-one/gadget-one.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_gadget_gadget_two_gadget_two_component__ = __webpack_require__("../../../../../src/app/shared/gadget/gadget-two/gadget-two.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_gadget_gadget_three_gadget_three_component__ = __webpack_require__("../../../../../src/app/shared/gadget/gadget-three/gadget-three.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_gadget_message_service__ = __webpack_require__("../../../../../src/app/services/gadget-message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = (function () {
    function DashboardComponent(componentFactoryResolver, gadgetMessageService) {
        var _this = this;
        this.componentFactoryResolver = componentFactoryResolver;
        this.gadgetMessageService = gadgetMessageService;
        this.currentAddIndex = -1;
        this.gadgetViewIndexMap = new Map();
        this.gadgetComponentIndexMap = new Map();
        this.gadgetIndexList = [];
        this.closeGadgetSubscription = this.gadgetMessageService.closeGadgetSource$.subscribe(function (id) {
            _this.closeGadget(id);
        }, function (error) {
            console.log(error);
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.gadgets = [
            { id: 1, name: "gadget-one", data: { style: 'gadgetOne' }, component: __WEBPACK_IMPORTED_MODULE_2__shared_gadget_gadget_one_gadget_one_component__["a" /* GadgetOneComponent */] },
            { id: 2, name: "gadget-two", data: { style: 'gadgetTwo' }, component: __WEBPACK_IMPORTED_MODULE_3__shared_gadget_gadget_two_gadget_two_component__["a" /* GadgetTwoComponent */] },
            { id: 3, name: "gadget-3", data: { style: 'gadgetOne' }, component: __WEBPACK_IMPORTED_MODULE_2__shared_gadget_gadget_one_gadget_one_component__["a" /* GadgetOneComponent */] },
            { id: 4, name: "gadget-4", data: { style: 'gadgetTwo' }, component: __WEBPACK_IMPORTED_MODULE_3__shared_gadget_gadget_two_gadget_two_component__["a" /* GadgetTwoComponent */] },
            { id: 5, name: "gadget-5", data: { style: 'gadgetTwo' }, component: __WEBPACK_IMPORTED_MODULE_3__shared_gadget_gadget_two_gadget_two_component__["a" /* GadgetTwoComponent */] },
            { id: 6, name: "gadget-6", data: { style: 'gadgetOne' }, component: __WEBPACK_IMPORTED_MODULE_2__shared_gadget_gadget_one_gadget_one_component__["a" /* GadgetOneComponent */] },
            { id: 7, name: "gadget-7", data: { style: 'gadgetThree' }, component: __WEBPACK_IMPORTED_MODULE_4__shared_gadget_gadget_three_gadget_three_component__["a" /* GadgetThreeComponent */] },
            { id: 8, name: "gadget-8", data: { style: 'gadgetThree' }, component: __WEBPACK_IMPORTED_MODULE_4__shared_gadget_gadget_three_gadget_three_component__["a" /* GadgetThreeComponent */] },
        ];
        this.loadComponent();
        this.logGadgetIndex();
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.closeGadgetSubscription.unsubscribe();
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
    };
    DashboardComponent.prototype.loadComponent = function () {
        var _this = this;
        var viewContainerRef = this.gadgetContainer.viewContainerRef;
        viewContainerRef.clear();
        this.gadgets.forEach(function (gadgetItem) {
            var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(gadgetItem.component);
            var componentRef = viewContainerRef.createComponent(componentFactory);
            componentRef.instance.data = gadgetItem.data;
            componentRef.instance.id = gadgetItem.id;
            componentRef.instance.name = gadgetItem.name;
            componentRef.instance.onDragStartGadget.subscribe(function (val) { return _this.currentMoverId = val; });
            componentRef.instance.onDragOverGadget.subscribe(function (val) {
                _this.currentOverId = val;
            });
            _this.gadgetViewIndexMap.set(gadgetItem.id, componentRef.hostView);
            _this.gadgetComponentIndexMap.set(gadgetItem.id, componentRef);
            var location = componentRef.location.nativeElement.clientWidth;
            console.log(gadgetItem.id, location);
        });
    };
    DashboardComponent.prototype.closeGadget = function (id) {
        var viewContainerRef = this.gadgetContainer.viewContainerRef;
        var index = viewContainerRef.indexOf(this.gadgetViewIndexMap.get(id));
        viewContainerRef.remove(index);
        this.logGadgetIndex();
    };
    DashboardComponent.prototype.onDragOver = function (event) {
        event.preventDefault();
    };
    DashboardComponent.prototype.onDrop = function (event) {
        event.preventDefault();
        var id = this.currentMoverId;
        var overId = this.currentOverId;
        this.doDrop(event.clientX, event.clientY, id, overId);
    };
    DashboardComponent.prototype.doDrop = function (x, y, id, overId) {
        var viewContainerRef = this.gadgetContainer.viewContainerRef;
        var sourceView = this.gadgetViewIndexMap.get(id);
        this.getNearestViewRef(x, y);
        var targetId = viewContainerRef.indexOf(this.gadgetViewIndexMap.get(overId));
        console.log(targetId, 'target');
        if (targetId < this.gadgets.length - 1) {
            viewContainerRef.move(sourceView, targetId);
        }
        else {
            //do nothing
        }
        this.logGadgetIndex();
    };
    DashboardComponent.prototype.logGadgetIndex = function () {
        var _this = this;
        this.gadgetIndexList = [];
        var viewContainerRef = this.gadgetContainer.viewContainerRef;
        this.gadgets.forEach(function (g) {
            var id = g.id;
            var index = viewContainerRef.indexOf(_this.gadgetViewIndexMap.get(id));
            if (index != -1) {
                _this.gadgetIndexList.push({ id: id, index: index });
            }
        });
    };
    DashboardComponent.prototype.getNearestViewRef = function (x, y) {
        var viewContainerRef = this.gadgetContainer.viewContainerRef;
        console.log(this.gadgetComponentIndexMap.get(this.currentMoverId).location);
        var sourceLocation = this.gadgetComponentIndexMap.get(this.currentMoverId).location.nativeElement.getBoundingClientRect();
        console.log(this.currentMoverId);
        console.log(sourceLocation);
        /**
        for(let i = 0; i< this.gadgetIndexList.length; i++){
            let id = this.gadgetIndexList[i].id;
            let view = this.gadgetComponentIndexMap.get(id).location.nativeElement.getBoundingClientRect();
        }
        */
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_add_gadget_add_gadget_directive__["a" /* AddGadgetDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_add_gadget_add_gadget_directive__["a" /* AddGadgetDirective */])
    ], DashboardComponent.prototype, "gadgetContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('dragover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DragEvent]),
        __metadata("design:returntype", void 0)
    ], DashboardComponent.prototype, "onDragOver", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DragEvent]),
        __metadata("design:returntype", void 0)
    ], DashboardComponent.prototype, "onDrop", null);
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/web-dev/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/web-dev/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_5__services_gadget_message_service__["a" /* GadgetMessageService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/web-dev/web-dev.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <div class=\"row no-gutters main-page\">\r\n    <div class=\"\" [ngClass]=\"{'col-10':showSidebar == true,'col-12':showSidebar == false}\">\r\n        <div class=\"row no-gutters header\">\r\n            <div class=\"col-8\">\r\n                <div class=\"web-icon\"><span><i class=\"fa fa-github-alt\"></i></span></div>\r\n                <app-header [title]=\"title\" class=\"header-title\"></app-header>\r\n                <div class=\"right-icon link-item\" (click)=\"gotoGithub()\"><span><i class=\"fa fa-github\"></i></span></div>\r\n                <div class=\"right-icon link-item\"routerLink=\"/\"><span><i class=\"fa fa-home\"></i></span></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row no-gutters wraper\">\r\n            <div class=\"col-8 content\">\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n        </div>\r\n        <div class=\"footer\">\r\n            <div class=\"row no-gutters wraper\">\r\n                <div class=\"col-8\">\r\n                    <app-footer></app-footer>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"sidebar\" [ngClass]=\"{'col-2':showSidebar == true,'hideSidebar':showSidebar == false}\">\r\n        <app-sidebar [items]=\"items\"></app-sidebar>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"sidebar-icon\" (click)=\"toggle()\">\r\n    <i *ngIf = \"!showSidebar\" class=\"fa fa-bars\"></i>\r\n    <i *ngIf = \"showSidebar\" class=\"fa fa-close\"></i>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/web-dev/web-dev.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n  width: 100%;\n  background: #fafafa;\n  height: 100%;\n  margin: 0;\n  position: relative; }\n\n.main-page {\n  height: 100%; }\n\n.hideSidebar {\n  display: none; }\n\n.header {\n  width: 100%;\n  height: 55px;\n  line-height: 55px;\n  box-sizing: border-box;\n  border-bottom: 3px solid #a60800;\n  background: #ffffff;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.header-title {\n  font-size: 1.4rem;\n  float: left;\n  color: #24292e; }\n\n.wraper {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%; }\n\n.content {\n  background-color: #ffffff;\n  border: 1px solid #efefef;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e2e2e2;\n  margin: 1.5rem 0;\n  padding: 1rem 1rem; }\n\n.sidebar {\n  width: 100%;\n  height: 100%;\n  background: #29363d;\n  z-index: 1000;\n  position: fixed;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n\n.footer {\n  width: 100%;\n  display: block;\n  padding: 1.5rem 0;\n  min-height: 50px;\n  background: #f5f5f5; }\n\n.right-icon {\n  float: right;\n  margin: 0 1rem 0 0.5rem;\n  font-size: 1.2rem;\n  cursor: pointer; }\n\n.web-icon {\n  float: left;\n  margin: 0 0.5rem;\n  color: #a60800;\n  font-size: 1.5rem; }\n\n.link-item {\n  outline: none;\n  color: #333;\n  cursor: pointer; }\n\n.link-item:hover {\n  color: #e37f7f;\n  font-weight: 450;\n  transition: color 0.2s ease; }\n\n.sidebar-icon {\n  position: fixed;\n  background: #29363d;\n  color: #e37f7f;\n  z-index: 1050;\n  right: 3rem;\n  bottom: 3rem;\n  cursor: pointer;\n  line-height: 0;\n  padding: 2px 4px;\n  border-radius: 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web-dev/web-dev.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebDevComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebDevComponent = (function () {
    function WebDevComponent() {
        this.title = "Web Development";
        this.showSidebar = true;
        this.items = [
            { name: 'Dashboard', isChildren: false, open: false, url: '/web/dashboard', children: [] },
            { name: 'Chart', isChildren: false, open: false, url: null, children: [
                    { name: 'D3-Chart', isChildren: true, url: '/web/d3-chart' },
                    { name: 'Chart.js', isChildren: true, url: '/web/chart-js' }
                ]
            },
            { name: 'Code Tricks', isChildren: false, open: false, url: null, children: [
                    { name: '30 Seconds of CSS', isChildren: true, url: '/web/30s-of-css' },
                ]
            }
        ];
    }
    WebDevComponent.prototype.ngOnInit = function () {
    };
    WebDevComponent.prototype.toggle = function () {
        this.showSidebar = !this.showSidebar;
    };
    WebDevComponent.prototype.gotoGithub = function () {
        window.open('https://github.com/StartE');
    };
    WebDevComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-web-dev',
            template: __webpack_require__("../../../../../src/app/web-dev/web-dev.component.html"),
            styles: [__webpack_require__("../../../../../src/app/web-dev/web-dev.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WebDevComponent);
    return WebDevComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map