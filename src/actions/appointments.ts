import axios from 'axios';
import { api } from '@/lib/api/api-routes';
import { commonHeaders } from '@/lib/api/headers';
import { CreateAnAppointment } from '@/types/appointment';

export async function createAnAppointment(data: CreateAnAppointment) {
  try {
    const res = await axios.post(api.appointments.route, data, {
      headers: commonHeaders
    });

    if (await res.data?.data) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Something went wrong!');
  }
}
