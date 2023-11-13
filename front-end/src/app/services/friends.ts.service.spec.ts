import { TestBed } from '@angular/core/testing';

import { FriendsTsService } from './friends.service';

describe('FriendsTsService', () => {
  let service: FriendsTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriendsTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
