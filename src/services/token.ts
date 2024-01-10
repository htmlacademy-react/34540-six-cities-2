class Token {
  private static _tokenName = 'AUTH_TOKEN_KEY_NAME';

  static get() {
    const token = localStorage.getItem(this._tokenName);

    return token ?? '';
  }

  static save(token: string) {
    localStorage.setItem(this._tokenName, token);
  }

  static drop() {
    localStorage.removeItem(this._tokenName);
  }
}

export {Token};
