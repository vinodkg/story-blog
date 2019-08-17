import { ToDaysPipe } from './to-days.pipe';
import { UtilityService } from 'src/app/services/utilities/utility.service';

describe('ToDaysPipe', () => {
  it('create an instance', () => {
    const pipe = new ToDaysPipe(new UtilityService());
    expect(pipe).toBeTruthy();
  });
});
