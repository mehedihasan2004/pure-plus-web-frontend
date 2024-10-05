const baseApi = process.env.NEXT_PUBLIC_MAIN_API as string;

const doctorsRoute = '/doctors';
const patientsRoute = '/patients';
const appointmentsRoute = '/appointments';

export const api = (() => {
  return {
    // Patient routes
    get patients() {
      return {
        get route() {
          return baseApi + patientsRoute;
        }
      };
    },

    // Doctor routes
    get doctors() {
      return {
        get route() {
          return baseApi + doctorsRoute;
        }
      };
    },

    // Appointment routes
    get appointments() {
      return {
        get route() {
          return baseApi + appointmentsRoute;
        }
      };
    }
  };
})();
