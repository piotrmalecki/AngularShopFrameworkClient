namespace Services.Base {

    export interface ISessionStorageHelper {

        //setObjectInSessionStorage(key: string, oElement: Object);
        // getObjectInSessionStorage(key: string);
        //setObjectInLocalStorage(key: string, oElement: Object);
        // getObjectInLocalStorage(key: string);
        //removeFromSessionStorage(sessionStorageKey: string);

    }

    // Stores compared rates:
    export class SessionStorageHelper implements ISessionStorageHelper {

        constructor() { }

        //public static removeFromSessionStorage(sessionStorageKey: string) {
        //    this.setObjectInSessionStorage(sessionStorageKey, null);
        //}
        
        public static setObjectInSessionStorage(key: string, oElement: Object) {

            return sessionStorage.setItem(key, JSON.stringify(oElement))
        }

        public static getObjectInSessionStorage(key: string) {

            return JSON.parse(sessionStorage.getItem(key))
        }

        public static getObjectInLocalStorage(key: string) {

            return JSON.parse(localStorage.getItem(key))
        }
        public static setObjectInLocalStorage(key: string, oElement: Object) {

            return localStorage.setItem(key, JSON.stringify(oElement));
        }
    }
}