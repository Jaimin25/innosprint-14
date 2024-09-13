'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';


const signInFormSchema = z.object({
  emailOrPhone: z
    .string({ required_error: 'Please fill this field' })
    .refine(
      (value) =>
        /^([0-9]{9})|([A-Za-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3})$/.test(
          value ?? ''
        ),
      'Please enter a valid email or mobile no.'
    ),
  password: z.string().trim().min(6),
});

async function signInSubmit(values: z.infer<typeof signInFormSchema>) {
  return;
}

export default function SignInForm() {
  const [toastId, setToastId] = useState<string | number>();


  const signInForm = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
  });

  const onSubmit = (values: z.infer<typeof signInFormSchema>) => {
    const currentToastId = toast.loading('Signing in...');
    setToastId(currentToastId);
    setTimeout(()=>{
toast.success("Success!", {id: currentToastId})
    }, 1000);
  };

  return (
    <div className="signin-form-container m-8 w-10/12 sm:w-8/12 md:w-1/2 lg:w-1/4">
      <Card>
        <CardHeader>
          <h3 className="text-3xl font-semibold">Sign In</h3>
        </CardHeader>
        <CardContent>
          <Form {...signInForm}>
            <form
              onSubmit={signInForm.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              {/* EMAIL or PHONE FIELD */}
              <FormField
                control={signInForm.control}
                name="emailOrPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email / Phone No.</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="enter email or phone no."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* PASSWORD FIELD */}
              <FormField
                control={signInForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <div className="flex items-center justify-between">
                        <p>Password</p>
                      </div>
                    </FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="******" {...field} />
                    </FormControl>
                    <FormMessage />
                    <div className="flex w-full justify-end">
                      <Button
                        type="button"
                        variant={'link'}
                        className="px-1 py-0"
                        onClick={() => {
                          ('');
                        }}
                      >
                        Forgot password?
                      </Button>
                    </div>
                  </FormItem>
                )}
              />
              <div>
                <Button
                  type="submit"
                  className="w-full"
                >
                  Login
                </Button>
              </div>
              <div className="flex w-full justify-center">
                <p>
                  Don&apos;t have an account?{' '}
                  <Link href={'/signup'} className="underline">
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
