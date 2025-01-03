
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import React from 'react';

export default function RegisterForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100">
      <Card className="w-[400px] bg-purple-200/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Registration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="Username" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Password" />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-sm">
              I agree to the terms & conditions
            </Label>
          </div>
          <Button className="w-full bg-white text-black hover:bg-gray-100">
            Register
          </Button>
          <p className="text-center text-sm">
            Already have an account?{' '}
            <Link href="/login" className="text-purple-700 hover:underline">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
