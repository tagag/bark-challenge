class PasswordValidator {
  constructor(text) {
    this.text = text;
  }
  get requirements() {
    return {
      len: '.{8,}',
      digits: '(\\d.*)',
      symbols:
        '([`~\\!@#\\$%\\^\\&\\*\\(\\)\\-_\\=\\+\\[\\{\\}\\]\\\\|;:\\\'",<.>\\/\\?€£¥₹§±].*)',
      smallCap: '[a-z]',
      cap: '[A-Z]',
    };
  }
  get errorMessages() {
    return {
      len: 'Password must be 8 characters or more',
      digits: 'Password must include at least one digit',
      symbols: 'Password must contain at least one symbol e.g (@!`)',
      smallCap: 'Password must have a small letter',
      cap: 'Password must have a capital letter',
    };
  }
  validateRegex(regex) {
    return new RegExp(regex).test(this.text);
  }
  validate() {
    return Object.entries(this.requirements).forEach(val => {
      if (this.validateRegex(val[1])) {
      } else {
        throw `${this.errorMessages[val[0]]}`;
      }
    });
  }
}
export default PasswordValidator;
