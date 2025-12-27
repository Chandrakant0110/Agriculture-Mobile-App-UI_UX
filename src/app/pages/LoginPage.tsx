import { useState } from 'react';
import { Sprout, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../components/ui/input-otp';

interface LoginPageProps {
  onLogin: (isAdmin?: boolean) => void;
  onNavigateToSignUp: () => void;
}

export function LoginPage({ onLogin, onNavigateToSignUp }: LoginPageProps) {
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const handleSendOTP = () => {
    if (phone.length === 10) {
      setOtpSent(true);
    }
  };

  const handleVerifyOTP = () => {
    if (otp.length === 6) {
      // Demo: if phone starts with 9999, login as admin
      const isAdmin = phone.startsWith('9999');
      onLogin(isAdmin);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-4">
            <Sprout className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-green-900 mb-2">Mridah Greens</h1>
          <p className="text-gray-600">Your trusted agriculture partner</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="mb-6">Welcome Back</h2>

          {!otpSent ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="tel"
                    placeholder="Enter 10 digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    className="pl-10"
                  />
                </div>
              </div>

              <Button
                onClick={handleSendOTP}
                disabled={phone.length !== 10}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Send OTP
              </Button>

              <div className="text-center pt-4 border-t">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <button
                    onClick={onNavigateToSignUp}
                    className="text-green-600 hover:underline"
                  >
                    Sign Up
                  </button>
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Enter OTP</label>
                <p className="text-sm text-gray-500 mb-4">
                  OTP sent to +91 {phone}
                </p>
                <div className="flex justify-center">
                  <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </div>

              <Button
                onClick={handleVerifyOTP}
                disabled={otp.length !== 6}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Verify & Login
              </Button>

              <button
                onClick={() => setOtpSent(false)}
                className="w-full text-sm text-green-600 hover:underline"
              >
                Change Phone Number
              </button>
            </div>
          )}
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          Demo: Use 9999XXXXXX for admin login
        </p>
      </div>
    </div>
  );
}
