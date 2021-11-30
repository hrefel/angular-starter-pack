import { DigitOnlyDirective } from './only-number.directive';

describe('OnlyNumberDirective', () => {
  it('should create an instance', () => {
    const directive = new DigitOnlyDirective();
    expect(directive).toBeTruthy();
  });
});
