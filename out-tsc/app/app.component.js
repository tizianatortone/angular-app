import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
import * as i3 from "./signup-form/signup-form.component";
import * as i4 from "./authors.component";
import * as i5 from "./favourite/favourite.component";
import * as i6 from "./panel/panel.component";
import * as i7 from "./like/like.component";
import * as i8 from "./input-format.directive";
import * as i9 from "./zippy/zippy.component";
import * as i10 from "./contact-form/contact-form.component";
import * as i11 from "./new-course-form/new-course-form.component";
import * as i12 from "./change-password/change-password.component";
import * as i13 from "./posts/posts.component";
import * as i14 from "./github-followers/github-followers.component";
import * as i15 from "./navbar/navbar.component";
function AppComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
function AppComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " List of courses");
} }
function AppComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "No courses yet");
} }
function AppComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Map view content");
    i0.ɵɵelementEnd();
} }
function AppComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "List view content");
    i0.ɵɵelementEnd();
} }
function AppComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Otherwise");
    i0.ɵɵelementEnd();
} }
function AppComponent_li_61_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, " (EVEN)");
    i0.ɵɵelementEnd();
} }
function AppComponent_li_61_Template(rf, ctx) { if (rf & 1) {
    var _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, AppComponent_li_61_span_2_Template, 2, 0, "span", 29);
    i0.ɵɵelementStart(3, "button", 20);
    i0.ɵɵlistener("click", function AppComponent_li_61_Template_button_click_3_listener() { var restoredCtx = i0.ɵɵrestoreView(_r13); var course_r9 = restoredCtx.$implicit; var ctx_r12 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r12.onChange(course_r9)); });
    i0.ɵɵtext(4, "Remove");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    var course_r9 = ctx.$implicit;
    var isEven_r10 = ctx.even;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", course_r9.name, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", isEven_r10);
} }
var _c0 = function (a0, a1, a2) { return { backgroundColor: a0, color: a1, fontWeight: a2 }; };
export var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.post = {
            title: 'Title',
            isFavourite: true,
        };
        this.tweet = {
            body: '...',
            likesCount: 10,
            isLiked: true,
        };
        this.courses = [];
        this.viewMode = 'somethingElse';
        this.canSave = true;
        this.task = {
            title: 'Review Applications',
            assignee: {
                name: 'John Smith',
            },
        };
    }
    AppComponent.prototype.loadCourses = function () {
        this.coursess = [
            { id: 1, name: 'course1' },
            { id: 2, name: 'course2' },
            { id: 3, name: 'course3' },
        ];
    };
    AppComponent.prototype.onChange = function (course) {
        course.name = 'UPDATED';
    };
    AppComponent.prototype.trackCourse = function (index, course) {
        return course ? course.id : undefined;
    };
    AppComponent.prototype.onFavouriteChanged = function (eventArgs) {
        console.log('Favourite Changed: ', eventArgs);
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 94, vars: 24, consts: [["role", "main", 1, "content"], [1, "card", "highlight-card", "card-small"], ["id", "rocket", "xmlns", "http://www.w3.org/2000/svg", "width", "101.678", "height", "101.678", "viewBox", "0 0 101.678 101.678"], ["id", "Group_83", "data-name", "Group 83", "transform", "translate(-141 -696)"], ["id", "Ellipse_8", "data-name", "Ellipse 8", "cx", "50.839", "cy", "50.839", "r", "50.839", "transform", "translate(141 696)", "fill", "#dd0031"], ["id", "Group_47", "data-name", "Group 47", "transform", "translate(165.185 720.185)"], ["id", "Path_33", "data-name", "Path 33", "d", "M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z", "transform", "translate(0.371 3.363)", "fill", "#fff"], ["id", "Path_34", "data-name", "Path 34", "d", "M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z", "transform", "translate(0 0.005)", "fill", "#fff"], ["id", "rocket-smoke", "xmlns", "http://www.w3.org/2000/svg", "width", "516.119", "height", "1083.632", "viewBox", "0 0 516.119 1083.632"], ["id", "Path_40", "data-name", "Path 40", "d", "M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z", "transform", "translate(-147.025 -140.939)", "fill", "#f5f5f5"], [3, "isFavourite", "change"], [1, "heading"], [1, "body"], [3, "likesCount", "isActive"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["coursesList", ""], ["noCourses", ""], [3, "hidden"], [1, "nav", "nav-pills"], [1, "nav-item"], [3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["type", "text", 3, "appInputFormat"], ["title", "Shipping Details"], ["title", "Billing Details"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(2, "svg", 2)(3, "title");
            i0.ɵɵtext(4, "Rocket Ship");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "g", 3);
            i0.ɵɵelement(6, "circle", 4);
            i0.ɵɵelementStart(7, "g", 5);
            i0.ɵɵelement(8, "path", 6)(9, "path", 7);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "svg", 8)(11, "title");
            i0.ɵɵtext(12, "Rocket Ship Smoke");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(13, "path", 9);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(14, "div");
            i0.ɵɵelement(15, "navbar")(16, "router-outlet");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "h1");
            i0.ɵɵtext(18, "Hello World");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(19, "authors")(20, "br");
            i0.ɵɵelementStart(21, "app-favourite", 10);
            i0.ɵɵlistener("change", function AppComponent_Template_app_favourite_change_21_listener($event) { return ctx.onFavouriteChanged($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(22, "br");
            i0.ɵɵelementStart(23, "bootstrap-panel");
            i0.ɵɵelementContainerStart(24, 11);
            i0.ɵɵtext(25, "Heading");
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementStart(26, "div", 12)(27, "h2");
            i0.ɵɵtext(28, "Body");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "p");
            i0.ɵɵtext(30, "Some content here...");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(31, "br")(32, "app-like", 13)(33, "br")(34, "br");
            i0.ɵɵtemplate(35, AppComponent_div_35_Template, 1, 0, "div", 14);
            i0.ɵɵtemplate(36, AppComponent_ng_template_36_Template, 1, 0, "ng-template", null, 15, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(38, AppComponent_ng_template_38_Template, 1, 0, "ng-template", null, 16, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(40, "div", 17);
            i0.ɵɵtext(41, "List of courses");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "div", 17);
            i0.ɵɵtext(43, "No courses yet");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(44, "br")(45, "br");
            i0.ɵɵelementStart(46, "ul", 18)(47, "li", 19)(48, "a", 20);
            i0.ɵɵlistener("click", function AppComponent_Template_a_click_48_listener() { return ctx.viewMode = "map"; });
            i0.ɵɵtext(49, "Map View");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(50, "li", 19)(51, "a", 20);
            i0.ɵɵlistener("click", function AppComponent_Template_a_click_51_listener() { return ctx.viewMode = "list"; });
            i0.ɵɵtext(52, "List View");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(53, "div", 21);
            i0.ɵɵtemplate(54, AppComponent_div_54_Template, 2, 0, "div", 22);
            i0.ɵɵtemplate(55, AppComponent_div_55_Template, 2, 0, "div", 22);
            i0.ɵɵtemplate(56, AppComponent_div_56_Template, 2, 0, "div", 23);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(57, "br");
            i0.ɵɵelementStart(58, "button", 20);
            i0.ɵɵlistener("click", function AppComponent_Template_button_click_58_listener() { return ctx.loadCourses(); });
            i0.ɵɵtext(59, "Load Courses");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "ul");
            i0.ɵɵtemplate(61, AppComponent_li_61_Template, 5, 2, "li", 24);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(62, "div")(63, "button", 25);
            i0.ɵɵtext(64, " Save ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(65, "br");
            i0.ɵɵelementStart(66, "div")(67, "span");
            i0.ɵɵtext(68);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(69, "br");
            i0.ɵɵelementStart(70, "div");
            i0.ɵɵelement(71, "input", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(72, "br");
            i0.ɵɵelementStart(73, "div")(74, "zippy", 27);
            i0.ɵɵtext(75, "Shipping Details content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(76, "zippy", 28);
            i0.ɵɵtext(77, "Billing Details content");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(78, "br");
            i0.ɵɵelementStart(79, "div");
            i0.ɵɵelement(80, "contact-form");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(81, "br");
            i0.ɵɵelementStart(82, "div");
            i0.ɵɵelement(83, "signup-form");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(84, "br");
            i0.ɵɵelementStart(85, "div");
            i0.ɵɵelement(86, "new-course-form");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(87, "div");
            i0.ɵɵelement(88, "change-password");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(89, "div");
            i0.ɵɵelement(90, "github-followers");
            i0.ɵɵtext(91, ">");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(92, "div");
            i0.ɵɵelement(93, "posts");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r1 = i0.ɵɵreference(37);
            var _r3 = i0.ɵɵreference(39);
            i0.ɵɵadvance(21);
            i0.ɵɵproperty("isFavourite", ctx.post.isFavourite);
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("likesCount", ctx.tweet.likesCount)("isActive", ctx.tweet.isLiked);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.courses.length > 0)("ngIfThen", _r1)("ngIfElse", _r3);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("hidden", ctx.courses.length == 0);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("hidden", ctx.courses.length > 0);
            i0.ɵɵadvance(6);
            i0.ɵɵclassProp("nav-item", ctx.viewMode == "map");
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("nav-link", ctx.viewMode == "list");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngSwitch", ctx.viewMode);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "map");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "list");
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngForOf", ctx.coursess)("ngForTrackBy", ctx.trackCourse);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction3(20, _c0, ctx.canSave ? "blue" : "gray", ctx.canSave ? "white" : "black", ctx.canSave ? "bold" : "normal"));
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.task.assignee.name);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("appInputFormat", "uppercase");
        } }, dependencies: [i1.NgForOf, i1.NgIf, i1.NgStyle, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.RouterOutlet, i3.SignupFormComponent, i4.AuthorsComponent, i5.FavouriteComponent, i6.PanelComponent, i7.LikeComponent, i8.InputFormatDirective, i9.ZippyComponent, i10.ContactFormComponent, i11.NewCourseFormComponent, i12.ChangePasswordComponent, i13.PostsComponent, i14.GithubFollowersComponent, i15.NavbarComponent], styles: ["[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n      Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\",\n      \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  .toolbar[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n    height: 40px;\n    margin: 0 8px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%] {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover, .toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 82px auto 32px;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%] {\n    height: 24px;\n    width: auto;\n  }\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #888;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    all: unset;\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%] {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 60px;\n  }\n\n  svg#rocket[_ngcontent-%COMP%] {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: #125699;\n  }\n\n  .terminal[_ngcontent-%COMP%] {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal[_ngcontent-%COMP%]::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link[_ngcontent-%COMP%]:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%] {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27, 31, 35, 0.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]:hover {\n    background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n    border-color: rgba(27, 31, 35, 0.35);\n    background-position: -0.5em;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n  \n  @media screen and (max-width: 767px) {\n    .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  }"] });
    return AppComponent;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', template: "<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<style>\n  :host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n      Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\",\n      \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 8px 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .spacer {\n    flex: 1;\n  }\n\n  .toolbar {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar img {\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 8px;\n  }\n\n  .toolbar #youtube-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo:hover,\n  .toolbar #youtube-logo:hover {\n    opacity: 0.8;\n  }\n\n  .content {\n    display: flex;\n    margin: 82px auto 32px;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons {\n    height: 24px;\n    width: auto;\n  }\n  svg.material-icons:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card svg.material-icons path {\n    fill: #888;\n  }\n\n  .card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card {\n    all: unset;\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container .card:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container .card:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container .card:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .card-container .card:not(.highlight-card):hover .material-icons path {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card span {\n    margin-left: 60px;\n  }\n\n  svg#rocket {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a,\n  a:visited,\n  a:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #125699;\n  }\n\n  .terminal {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal pre {\n    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer a {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27, 31, 35, 0.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n  }\n\n  .github-star-badge:hover {\n    background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n    border-color: rgba(27, 31, 35, 0.35);\n    background-position: -0.5em;\n  }\n\n  .github-star-badge .material-icons {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n  /* Responsive Styles */\n  @media screen and (max-width: 767px) {\n    .card-container > *:not(.circle-link),\n    .terminal {\n      width: 100%;\n    }\n\n    .card:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card span {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n      display: none;\n      visibility: hidden;\n    }\n  }\n</style>\n\n<div class=\"content\" role=\"main\">\n  <!-- Highlight Card -->\n  <div class=\"card highlight-card card-small\">\n    <svg\n      id=\"rocket\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"101.678\"\n      height=\"101.678\"\n      viewBox=\"0 0 101.678 101.678\"\n    >\n      <title>Rocket Ship</title>\n      <g id=\"Group_83\" data-name=\"Group 83\" transform=\"translate(-141 -696)\">\n        <circle\n          id=\"Ellipse_8\"\n          data-name=\"Ellipse 8\"\n          cx=\"50.839\"\n          cy=\"50.839\"\n          r=\"50.839\"\n          transform=\"translate(141 696)\"\n          fill=\"#dd0031\"\n        />\n        <g\n          id=\"Group_47\"\n          data-name=\"Group 47\"\n          transform=\"translate(165.185 720.185)\"\n        >\n          <path\n            id=\"Path_33\"\n            data-name=\"Path 33\"\n            d=\"M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z\"\n            transform=\"translate(0.371 3.363)\"\n            fill=\"#fff\"\n          />\n          <path\n            id=\"Path_34\"\n            data-name=\"Path 34\"\n            d=\"M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z\"\n            transform=\"translate(0 0.005)\"\n            fill=\"#fff\"\n          />\n        </g>\n      </g>\n    </svg>\n\n    <svg\n      id=\"rocket-smoke\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"516.119\"\n      height=\"1083.632\"\n      viewBox=\"0 0 516.119 1083.632\"\n    >\n      <title>Rocket Ship Smoke</title>\n      <path\n        id=\"Path_40\"\n        data-name=\"Path 40\"\n        d=\"M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z\"\n        transform=\"translate(-147.025 -140.939)\"\n        fill=\"#f5f5f5\"\n      />\n    </svg>\n  </div>\n\n  <div>\n    <navbar></navbar>\n    <router-outlet></router-outlet>\n  </div>\n\n  <h1>Hello World</h1>\n  <authors></authors>\n  <br />\n  <app-favourite\n    [isFavourite]=\"post.isFavourite\"\n    (change)=\"onFavouriteChanged($event)\"\n  ></app-favourite>\n  <br />\n\n  <bootstrap-panel>\n    <ng-container class=\"heading\">Heading</ng-container>\n    <div class=\"body\">\n      <h2>Body</h2>\n      <p>Some content here...</p>\n    </div>\n  </bootstrap-panel>\n  <br />\n  <app-like\n    [likesCount]=\"tweet.likesCount\"\n    [isActive]=\"tweet.isLiked\"\n  ></app-like>\n\n  <br />\n  <br />\n  <div *ngIf=\"courses.length > 0; then coursesList; else noCourses\"></div>\n  <ng-template #coursesList> List of courses</ng-template>\n  <ng-template #noCourses>No courses yet</ng-template>\n  <div [hidden]=\"courses.length == 0\">List of courses</div>\n  <div [hidden]=\"courses.length > 0\">No courses yet</div>\n\n  <br />\n  <br />\n  <ul class=\"nav nav-pills\">\n    <li class=\"nav-item\">\n      <a [class.nav-item.active]=\"viewMode == 'map'\" (click)=\"viewMode = 'map'\"\n        >Map View</a\n      >\n    </li>\n    <li class=\"nav-item\">\n      <a\n        [class.nav-link.active]=\"viewMode == 'list'\"\n        (click)=\"viewMode = 'list'\"\n        >List View</a\n      >\n    </li>\n  </ul>\n  <div [ngSwitch]=\"viewMode\">\n    <div *ngSwitchCase=\"'map'\">Map view content</div>\n    <div *ngSwitchCase=\"'list'\">List view content</div>\n    <div *ngSwitchDefault>Otherwise</div>\n  </div>\n  <br />\n  <button (click)=\"loadCourses()\">Load Courses</button>\n  <ul>\n    <li *ngFor=\"let course of coursess; trackBy: trackCourse; even as isEven\">\n      {{ course.name }} <span *ngIf=\"isEven\"> (EVEN)</span>\n      <button (click)=\"onChange(course)\">Remove</button>\n    </li>\n  </ul>\n\n  <div>\n    <button\n      [ngStyle]=\"{\n        backgroundColor: canSave ? 'blue' : 'gray',\n        color: canSave ? 'white' : 'black',\n        fontWeight: canSave ? 'bold' : 'normal'\n      }\"\n    >\n      Save\n    </button>\n  </div>\n  <br />\n\n  <div>\n    <span>{{ task.assignee.name }}</span>\n  </div>\n  <br />\n\n  <div>\n    <input type=\"text\" [appInputFormat]=\"'uppercase'\" />\n  </div>\n\n  <br />\n\n  <div>\n    <zippy title=\"Shipping Details\">Shipping Details content</zippy>\n    <zippy title=\"Billing Details\">Billing Details content</zippy>\n  </div>\n  <br />\n\n  <div><contact-form></contact-form></div>\n</div>\n<br />\n\n<div>\n  <signup-form></signup-form>\n</div>\n<br />\n\n<div>\n  <new-course-form></new-course-form>\n</div>\n<div>\n  <change-password> </change-password>\n</div>\n\n<div><github-followers></github-followers>></div>\n\n<div>\n  <posts></posts>\n</div>\n", styles: ["\n  :host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n      Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\",\n      \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 8px 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .spacer {\n    flex: 1;\n  }\n\n  .toolbar {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar img {\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 8px;\n  }\n\n  .toolbar #youtube-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo:hover,\n  .toolbar #youtube-logo:hover {\n    opacity: 0.8;\n  }\n\n  .content {\n    display: flex;\n    margin: 82px auto 32px;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons {\n    height: 24px;\n    width: auto;\n  }\n  svg.material-icons:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card svg.material-icons path {\n    fill: #888;\n  }\n\n  .card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card {\n    all: unset;\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container .card:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container .card:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container .card:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .card-container .card:not(.highlight-card):hover .material-icons path {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card span {\n    margin-left: 60px;\n  }\n\n  svg#rocket {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a,\n  a:visited,\n  a:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #125699;\n  }\n\n  .terminal {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal pre {\n    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer a {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27, 31, 35, 0.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n  }\n\n  .github-star-badge:hover {\n    background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n    border-color: rgba(27, 31, 35, 0.35);\n    background-position: -0.5em;\n  }\n\n  .github-star-badge .material-icons {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n  /* Responsive Styles */\n  @media screen and (max-width: 767px) {\n    .card-container > *:not(.circle-link),\n    .terminal {\n      width: 100%;\n    }\n\n    .card:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card span {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n      display: none;\n      visibility: hidden;\n    }\n  }\n"] }]
    }], null, null); })();
//# sourceMappingURL=app.component.js.map