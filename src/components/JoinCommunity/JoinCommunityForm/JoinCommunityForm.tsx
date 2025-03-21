  'use client'
  import React, { useRef, useState } from 'react';
  import { useForm } from "react-hook-form";
  import { zodResolver } from "@hookform/resolvers/zod"; //to connect react-hook-form with zod (zod being used for validation)
  import * as z from "zod";
  import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
  import { Input } from "@/components/ui/input";
  import { joinCommunityFormStyles as styles } from './joinCommunityFormStyles.tailwind';
//   import Button from '@/components/shared/Button/Button';
// import { Button } from '@/components/ui/button'
import { useInView , motion } from 'framer-motion';
import { HoverBorderGradientButton } from '@/components/shared/Button/HoverEffectButton';

// Form Schema with Validation using Zod
const formSchema = z.object({
  email: z.string().email("Enter a valid email address"), // Required email
  referralCode: z.string().optional(), 
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
      // Add your form submission logic here (API calls, etc.)
    };
    const [hasAnimated, setHasAnimated] = useState(false);  // State to track animation trigger
    const ref = useRef(null);  // Create a reference to track the element

    const isInView = useInView(ref, { once: false });  // Detect when the element is in view

    // Update the state to trigger the animation when the element is in view
    if (isInView && !hasAnimated) {
      setHasAnimated(true);  // Trigger the animation only once
    }

    return (
      <div className={styles.outerContainer}>
        <motion.span
          ref={ref}  // Attach the ref to the motion element
          className={styles.heading}
          initial={{ opacity: 0, y: 50 }}  // Start position (invisible and 50px down)
          animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 50 }}  // Animate on scroll into view
          transition={{
            duration: 1,  // Duration of the animation
            ease: 'easeInOut',  // Smooth easing
          }}
        >
          Join The TKN Sports Testing Community
        </motion.span>
        <p className="text-[16px] gradient-text max-w-[80%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

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
                    type="text"
                    placeholder="Enter referral code"
                    className={styles.input}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />


          {/* Submit Button */}
          {/* <Button variant="primary" className={styles.submitButton} type="submit">
            Join Now
          </Button> */}
          <HoverBorderGradientButton containerClassName={styles.submitButton} className='w-full'>Join Now</HoverBorderGradientButton>
        </form>
      </Form>
    </div>
  );
};

  export default JoinCommunityForm;