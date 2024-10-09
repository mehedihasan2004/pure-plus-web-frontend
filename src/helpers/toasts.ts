import { toast } from 'sonner';

export async function successToast(message?: string) {
  toast.success(message || 'Action successful');
}

export function errorToast(error: any) {
  toast.error(error?.message ?? 'Something went wrong!');
}
