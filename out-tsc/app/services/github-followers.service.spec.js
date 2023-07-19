import { TestBed } from '@angular/core/testing';
import { GithubFollowersService } from './github-followers.service';
describe('GithubFollowersService', function () {
    var service;
    beforeEach(function () {
        TestBed.configureTestingModule({});
        service = TestBed.inject(GithubFollowersService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=github-followers.service.spec.js.map