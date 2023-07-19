import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./../services/post.service";
import * as i2 from "@angular/common";
function PostsComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    var _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 4)(1, "button", 5);
    i0.ɵɵlistener("click", function PostsComponent_li_3_Template_button_click_1_listener() { var restoredCtx = i0.ɵɵrestoreView(_r4); var post_r2 = restoredCtx.$implicit; var ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.deletePost(post_r2)); });
    i0.ɵɵtext(2, " Delete ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var post_r2 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", post_r2.title, " ");
} }
export var PostsComponent = /** @class */ (function () {
    function PostsComponent(service) {
        this.service = service;
    } //instead of injecting the http class here, we pass it to the service component and we inject the service on this constructor
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAll().subscribe(function (posts) { return (_this.posts = posts); }
        //we get this from the service and the method inside that service
        );
        // TO GET DATA
    };
    PostsComponent.prototype.createPost = function (Input) {
        var _this = this;
        var post = {
            title: Input.value,
        };
        this.posts.splice(0, 0, post);
        Input.value = ' ';
        this.service.create(post).subscribe(function (newPost) {
            post['id'] = newPost.id;
        }, function (error) {
            _this.posts.splice(0, 1);
            if (error instanceof BadInput) {
                alert('An unexpected error has occurred');
                //this.form.setErrors(error.originalError);
            }
            else
                throw error;
        });
    }; // TO CREATE DATA
    // update(post: any) {
    // we need to specify the post instead of sending the entire url. See change below
    //sendind only the property that should be modified
    // this.http
    //  .patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
    //  .subscribe((updatedPost) => {
    //    console.log(updatedPost);
    //  });
    //sending the entire object
    // this.service.updatePost(post).subscribe((updatedPost) =>{console.log(updatedPost});
    // }//TO UPDATE DATA
    PostsComponent.prototype.deletePost = function (post) {
        var _this = this;
        var index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        //we also need to finde de index os this post in the array
        this.service.delete(post.id).subscribe(null, function (error) {
            _this.posts.splice(index, 0, post);
            if (error instanceof NotFoundError)
                alert('This post has already been deleted');
            else
                throw error;
        }); // TO DELETE DATA
    };
    PostsComponent.ɵfac = function PostsComponent_Factory(t) { return new (t || PostsComponent)(i0.ɵɵdirectiveInject(i1.PostService)); };
    PostsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PostsComponent, selectors: [["posts"]], decls: 4, vars: 1, consts: [["type", "text", 1, "form-control", 3, "keyup.enter"], ["title", ""], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "btn", "btn-default", "btn-sm", 3, "click"]], template: function PostsComponent_Template(rf, ctx) { if (rf & 1) {
            var _r5 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "input", 0, 1);
            i0.ɵɵlistener("keyup.enter", function PostsComponent_Template_input_keyup_enter_0_listener() { i0.ɵɵrestoreView(_r5); var _r0 = i0.ɵɵreference(1); return i0.ɵɵresetView(ctx.createPost(_r0)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "ul", 2);
            i0.ɵɵtemplate(3, PostsComponent_li_3_Template, 4, 1, "li", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.posts);
        } }, dependencies: [i2.NgForOf] });
    return PostsComponent;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PostsComponent, [{
        type: Component,
        args: [{ selector: 'posts', template: "<input\n  (keyup.enter)=\"createPost(title)\"\n  #title\n  type=\"text\"\n  class=\"form-control\"\n/>\n\n<ul class=\"list-group\">\n  <li *ngFor=\"let post of posts\" class=\"list-group-item\">\n    <button (click)=\"deletePost(post)\" class=\"btn btn-default btn-sm\">\n      Delete\n    </button>\n    {{ post.title }}\n  </li>\n</ul>\n" }]
    }], function () { return [{ type: i1.PostService }]; }, null); })();
//# sourceMappingURL=posts.component.js.map