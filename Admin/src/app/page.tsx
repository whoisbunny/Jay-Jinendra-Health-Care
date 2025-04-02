"use client";
import LoginForm from "@/components/login-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useAuthRedirect from "@/hooks/useAuthRedirect";

const LoginPage = () => {
  useAuthRedirect();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <Card className="w-full max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-gray-900">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
