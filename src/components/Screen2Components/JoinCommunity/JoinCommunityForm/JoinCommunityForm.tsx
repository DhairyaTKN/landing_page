"use client";
import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { joinCommunityFormStyles as styles } from './joinCommunityFormStyles.tailwind';
import { Button } from '@/components/ui/button';
// import Button from '@/components/shared/Button/Button';

//  Define Form Schema with Validation using Zod
const formSchema = z.object({
  email: z.string().email("Invalid email address"), // Required email
  referralCode: z.string().optional(), // Optional referral code
});

// Define the types for the form values
type FormValues = z.infer<typeof formSchema>;

const JoinCommunityForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      referralCode: "",
    },
  });

  // Handle Form Submission
  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted:", data);
    // TODO:  API call or action on submit
  };

  return (
    <div className={styles.outerContainer}>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={styles.formContainer}>
          
          {/* Email Input */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className={styles.formItem}>
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
                    type="text" 
                    placeholder="Enter referral code" 
                    className={styles.input}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" variant='primary' className={styles.submitButton}>
            Join Now
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default JoinCommunityForm;
