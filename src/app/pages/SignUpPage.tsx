import { useState } from 'react';
import { Sprout, Phone, User, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../components/ui/input-otp';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { districts } from '../data/mockData';

interface SignUpPageProps {
  onSignUp: () => void;
  onNavigateToLogin: () => void;
}

export function SignUpPage({ onSignUp, onNavigateToLogin }: SignUpPageProps) {
  const [step, setStep] = useState<'phone' | 'otp' | 'details'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [name, setName] = useState('');
  const [district, setDistrict] = useState('');
  const [location, setLocation] = useState('');

  const handleSendOTP = () => {
    if (phone.length === 10) {
      setStep('otp');
    }
  };

  const handleVerifyOTP = () => {
    if (otp.length === 6) {
      setStep('details');
    }
  };

  const handleCompleteSignUp = () => {
    if (name && district && location) {
      onSignUp();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-4">
            <Sprout className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-green-900 mb-2">AgriConnect</h1>
          <p className="text-gray-600">Create your account</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="mb-6">Sign Up</h2>

          {step === 'phone' && (
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
                  Already have an account?{' '}
                  <button
                    onClick={onNavigateToLogin}
                    className="text-green-600 hover:underline"
                  >
                    Login
                  </button>
                </p>
              </div>
            </div>
          )}

          {step === 'otp' && (
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
                Verify OTP
              </Button>

              <button
                onClick={() => setStep('phone')}
                className="w-full text-sm text-green-600 hover:underline"
              >
                Change Phone Number
              </button>
            </div>
          )}

          {step === 'details' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">District</label>
                <Select value={district} onValueChange={setDistrict}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select district" />
                  </SelectTrigger>
                  <SelectContent>
                    {districts.map((d) => (
                      <SelectItem key={d} value={d}>{d}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Enter your location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <Button
                onClick={handleCompleteSignUp}
                disabled={!name || !district || !location}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Complete Sign Up
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
