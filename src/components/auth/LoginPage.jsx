import React from "react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function LoginPage({ onSwitch , onLoginSuccess}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-6 space-y-6">
          <h2 className="text-2xl font-bold text-white text-center">Login</h2>
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Button 
            className="w-full bg-purple-600 text-white"
            onClick={onLoginSuccess}>
            Login
            </Button>
          <p className="text-sm text-center text-gray-300">
            Don’t have an account?{" "}
            <span
              className="text-blue-400 cursor-pointer hover:underline"
              onClick={onSwitch}
            >
              Sign up
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
