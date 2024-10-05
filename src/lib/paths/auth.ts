const basePath = '/api/auth';

const loginPath = '/login';
const logoutPath = '/logout';

function authPaths() {
  return {
    get login() {
      return {
        get path() {
          return basePath + loginPath;
        }
      };
    },

    get logout() {
      return {
        get path() {
          return basePath + logoutPath;
        }
      };
    }
  };
}

export const auth = authPaths();
