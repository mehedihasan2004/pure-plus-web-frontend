const baseApi = process.env.NEXT_PUBLIC_MAIN_API as string;

const usersRoute = '/users';
const doctorsRoute = '/doctors';
const patientsRoute = '/patients';
const appointmentsRoute = '/appointments';

export const api = (() => {
  return {
    // Users route
    get users() {
      return {
        get route() {
          return baseApi + usersRoute;
        }
      };
    },

    // Patients route
    get patients() {
      return {
        get route() {
          return baseApi + patientsRoute;
        }
      };
    },

    // Doctors route
    get doctors() {
      return {
        get route() {
          return baseApi + doctorsRoute;
        }
      };
    },

    // Appointments route
    get appointments() {
      return {
        get route() {
          return baseApi + appointmentsRoute;
        }
      };
    }
  };
})();
