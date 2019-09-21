export default class Token {

  static itemKey : string = 'auth-token'

  static set(token: string) {
    localStorage.setItem(this.itemKey, token)
  }

  static get() {
    return localStorage.getItem(this.itemKey)
  }
  
  static remove() {
    localStorage.removeItem(this.itemKey)
  }

}