import {TestBed, async, inject} from '@angular/core/testing';

import {InnerGuard} from './inner.guard';

describe('InnerGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [InnerGuard]
        });
    });

    it('should ...', inject([InnerGuard], (guard: InnerGuard) => {
        expect(guard).toBeTruthy();
    }));
});
