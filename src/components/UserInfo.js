export default class UserInfo {
  constructor(selectorTitle, selectorSubtitle) {
    this._name = selectorTitle;
    this._job = selectorSubtitle;
  }

  getUserInfo() {
    const userInfo = {
      name: document.querySelector(this._name).textContent,
      job: document.querySelector(this._job).textContent,
    }
    return userInfo;
  }

  setUserInfo({ name, job }) {
    document.querySelector(this._name).textContent = name;
    document.querySelector(this._job).textContent = job;
  }
}