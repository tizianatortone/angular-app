import { TestBed } from '@angular/core/testing';
import { PostService } from './post.service';
describe('PostService', function () {
    var service;
    beforeEach(function () {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PostService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=post.service.spec.js.map