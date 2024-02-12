"use client";

import { Button } from "@components/button";
import { Textarea } from "@components/textarea";
import { Input } from "@components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@components/form";

const formSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(10),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    variant="underline"
                    label="Name*"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    variant="underline"
                    label="Email*"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    label="Message*"
                    variant="underline"
                    className="min-h-40"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Please enter at least 10 characters.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            icon="ArrowUpRight"
            variant="outline"
            className="text-[16px] py-6"
            type="submit"
          >
            Send Message
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ContactForm;
