const basePath = '/dashboard';

const patientPath = '/patient';
const doctorPath = '/doctor';
const adminPath = '/admin';

function dashboardPaths() {
  return {
    // Patient paths
    get patient() {
      return {
        get path() {
          return basePath + patientPath;
        }
      };
    },

    // Doctor paths
    get doctor() {
      return {
        get path() {
          return basePath + doctorPath;
        }
      };
    },

    // Admin paths
    get admin() {
      return {
        get path() {
          return basePath + adminPath;
        }
      };
    },

    get path() {
      return basePath;
    }
  };
}

export const dashboard = dashboardPaths();
