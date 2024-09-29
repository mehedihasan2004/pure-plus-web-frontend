const baseApi = process.env.NEXT_PUBLIC_MAIN_API as string;

const doctorsRoute = '/doctors';

export const api = (() => {
  return {
    // Doctor routes
    get doctors() {
      return {
        get route() {
          return baseApi + doctorsRoute;
        }
      };
    }
  };
})();
