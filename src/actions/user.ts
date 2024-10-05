'use server';

import axios from 'axios';
import { User } from '@/types/user';
import { api } from '@/lib/api/api-routes';
import { commonHeaders } from '@/lib/api/headers';
import { ActionGenericResponse } from '@/types/action';

export async function getAnUserByUserId(
  userId: string
): Promise<ActionGenericResponse<User>> {
  try {
    const res = await axios.get(api.users.route + '/' + userId, {
      headers: commonHeaders
    });

    if (res.data) {
      return {
        success: true,
        message: res.data?.message ?? 'User retrieved',
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
