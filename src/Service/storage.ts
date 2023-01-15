function setCookie(name?: string, value?: string, days = 60) {
  let expires = "";
  if (days) {
    let date: Date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }

  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name?: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  //@ts-ignore
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function removeCookie(name?: string) {
  setCookie(name || '', "", -10);
}

function getLocalStorage(key?: any) {
  return JSON.parse(localStorage.getItem(key) || '');
}

function setLocalStorage(key?: string, value?: string) {
  localStorage.setItem(key || '', JSON.stringify(value));
}

function removeLocalStorage(key?: string) {
  localStorage.removeItem(key || '');
}

export const StorageService = {
  setCookie,
  getCookie,
  removeCookie,
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
};
