import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
   const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const SERVER_URL=import.meta.env.VITE_SERVER_URL


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      
    if (!name.trim() || !password.trim() || !email.trim()) {
      toast.error("Please fill all fields", {
        duration: 3000,
        position: "top-center",
        style: {
          background: '#FEF2F2',
          color: '#DC2626',
          border: '1px solid #FECACA',
          borderRadius: '12px',
          fontSize: '14px',
          fontWeight: '500',
        },
      });
      return;
    }
     const formData = new FormData();
    formData.append("userName", name);
    formData.append("password", password);
    formData.append("email", email);

    setIsLoading(true);
    const loadingToast = toast.loading('Creating your account...', {
      position: "top-center",
    });

    try {
      const response = await axios.post(
        `${SERVER_URL}/signup`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { success, message } = response.data;
      toast.dismiss(loadingToast);

      if (success) {
        toast.success(message || "Account created successfully!", {
          duration: 4000,
          position: "top-center",
          style: {
            background: '#10B981',
            color: '#fff',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
          },
        });
        
        // Navigate to login after a short delay
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        toast.error(message || "Registration failed", {
          duration: 4000,
          position: "top-center",
          style: {
            background: '#FEF2F2',
            color: '#DC2626',
            border: '1px solid #FECACA',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: '500',
          },
        });
      }
    } catch (err) {
      const error = err as any;
      console.error("Registration error:", error.response?.data || error.message);
      
      toast.dismiss(loadingToast);

      if (error.response?.data?.message) {
        toast.error(error.response.data.message, {
          duration: 4000,
          position: "top-center",
          style: {
            background: '#FEF2F2',
            color: '#DC2626',
            border: '1px solid #FECACA',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: '500',
          },
        });
      } else {
        toast.error("Something went wrong. Please try again.", {
          duration: 4000,
          position: "top-center",
          style: {
            background: '#FEF2F2',
            color: '#DC2626',
            border: '1px solid #FECACA',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: '500',
          },
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex items-center justify-center p-4">
      {/* Main Signup Card */}
      <div className="w-full max-w-md animate-fadeIn">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 p-8">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg 
                  className="w-6 h-6 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                </svg>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CloudBox
              </h1>
            </div>
            <p className="text-gray-600 text-lg">Create your secure account</p>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  className="w-full pl-10 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400"
                  type="text"
                  placeholder="Choose a username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  className="w-full pl-10 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  className="w-full pl-10 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400"
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Creating Account...</span>
                </div>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Login Link */}
          <div className="text-center mt-6 pt-6 border-t border-gray-200">
            <p className="text-gray-600">
              Already have an account?{' '}
              <button
                onClick={() => navigate("/login")}
                disabled={isLoading}
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 disabled:opacity-50"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
    </div>
  );
}

export default RegisterForm;
