import PasswordValidator from './password-validator';

describe('validate ', () => {
  beforeEach(() => {});
  afterEach(() => {});
  it('should throw error for empty password', () => {
    const password = '';
    const passValidator = new PasswordValidator(password);
    expect(() => passValidator.validate()).toThrow();
  });
  it('should throw error when password is less than 8 characters', () => {
    const password = 'passwo';
    const passValidator = new PasswordValidator(password);
    expect(() => passValidator.validate()).toThrow(
      'Password must be 8 characters or more',
    );
  });
  it('shoud throw error when password has no digit', () => {
    const password = 'password';
    const passValidator = new PasswordValidator(password);
    expect(() => passValidator.validate()).toThrow();
  });
  it('shoud throw error when password has no symbol', () => {
    const password = 'password12';
    const passValidator = new PasswordValidator(password);
    expect(() => passValidator.validate()).toThrow(
      passValidator.errorMessages.symbols,
    );
  });
  it('shoud throw error when password has no small letter', () => {
    const password = 'PASSWORD12!';
    const passValidator = new PasswordValidator(password);
    expect(() => passValidator.validate()).toThrow(
      passValidator.errorMessages.smallCap,
    );
  });
  it('shoud throw error when password has no capital letter', () => {
    const password = 'password12!';
    const passValidator = new PasswordValidator(password);
    expect(() => passValidator.validate()).toThrow(
      passValidator.errorMessages.cap,
    );
  });
  it('shoud not throw error', () => {
    const password = 'Password123!';
    const passValidator = new PasswordValidator(password);
    expect(() => passValidator.validate()).not.toThrow();
  });
});
