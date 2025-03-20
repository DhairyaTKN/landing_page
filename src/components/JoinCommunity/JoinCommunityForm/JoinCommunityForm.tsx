'use client'
import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; //to connect react-hook-form with zod (zod being used for validation)
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { joinCommunityFormStyles as styles } from './joinCommunityFormStyles.tailwind';
// import Button from '@/components/shared/Button/Button';
import { Button } from '@/components/ui/button'

// Form Schema with Validation using Zod
const formSchema = z.object({
  email: z.string().email("Enter a valid email address"), // Required email
  referralCode: z.number().optional(), // Optional referral code
});

// Define the types for the form values
type FormValues = z.infer<typeof formSchema>;

const JoinCommunityForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      referralCode: undefined,
    },
  });

  // Handle Form Submission
  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted:", data);
    // Add your form submission logic here (API calls, etc.)
  };

  return (
    <div className={styles.outerContainer}>
      <span className={styles.heading}>Join The TKN Sports Testing Community</span>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={styles.formContainer}>

          {/* Email Input */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className={styles.formItem} >
                <FormLabel className={styles.formLabel}>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    // type="email" 
                    placeholder="Enter your email"
                    className={styles.input}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Referral Code Input (Optional) */}
          <FormField
            control={form.control}
            name="referralCode"
            render={({ field }) => (
              <FormItem className={styles.formItem}>
                <FormLabel className={styles.formLabel}>Referral Code</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="number"
                    placeholder="Enter referral code"
                    className={styles.input}
                    onChange={(e) => {
                      const value = e.target.value;
                      // Allow only digits (prevent "+", "-", "/", "e")
                      if (/^\d*$/.test(value)) {
                        field.onChange(value ? Number(value) : undefined);
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />


          {/* Submit Button */}
          <Button variant="primary" className={styles.submitButton} type="submit">
            Join Now
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default JoinCommunityForm;