import axios from 'axios';
import { Patient } from '@/types/patient';
import { api } from '@/lib/api/api-routes';
import { commonHeaders } from '@/lib/api/headers';
import { ActionGenericResponse } from '@/types/action';
import { CreateAnAppointment } from '@/types/appointment';

export async function createAnAppointment(
  data: CreateAnAppointment
): Promise<ActionGenericResponse<Patient>> {
  try {
    const res = await axios.post(api.appointments.route, data, {
      headers: commonHeaders
    });

    if (res.data) {
      return {
        success: true,
        message: res.data?.message ?? 'Appointment booked',
        data: res.data?.data
      };
    } else {
      return { success: false, message: 'Something went wrong!', data: null };
    }
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message ?? 'Something went wrong!',
      error
    );
  }
}
