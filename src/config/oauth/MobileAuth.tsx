import { supabase } from '../supaBaseConfig';

export const sendOtp = async (phoneNumber: string): Promise<boolean> => {
  const { error } = await supabase.auth.signInWithOtp({ phone: phoneNumber });

  if (error) {
    console.error('Error sending OTP:', error.message);
    return false;
  }

  return true;
};

export const verifyOtp = async (otp: string, phoneNumber: string): Promise<boolean> => {
  const { data, error } = await supabase.auth.verifyOtp({
      phone: phoneNumber, token: otp,
      type: 'sms'
  });

  if (error) {
    console.error('Error verifying OTP:', error.message);
    return false;
  }

  return !!data;
};
