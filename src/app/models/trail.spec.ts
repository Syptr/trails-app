import { Trail } from './trail';

describe('Trail', () => {
  it('should create an instance', () => {
    expect(new Trail('Goffstown Rail Trail','Goffstown', 'NH', 5, 'Easy', 2.5, 
      'Flat trail for a casual stroll with a friend or dog. Conditions can worsen during winter.'))
      .toBeTruthy();
  });
});
