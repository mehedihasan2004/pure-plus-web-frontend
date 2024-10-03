const baseApi = process.env.NEXT_PUBLIC_MAIN_API as string;

const doctorsRoute = '/doctors';
const appointmentsRoute = '/appointments';

export const api = (() => {
  return {
    // Doctor routes
    get doctors() {
      return {
        get route() {
          return baseApi + doctorsRoute;
        }
      };
    },

    // Doctor routes
    get appointments() {
      return {
        get route() {
          return baseApi + appointmentsRoute;
        }
      };
    }
  };
})();
