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
import { useState } from "react";
import { ContactAction } from "../actions/contact.action";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(10),
});

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    const res = await ContactAction(values);
    if (res.status === 200) {
      form.reset();
      setLoading(false);
      return toast.success("Message sent successfully");
    }

    toast.error(
      "An error occurred while sending your message. Please try again later, but you can still reach out to us at dan@deftdodo.dev"
    );

    form.reset();
    setLoading(false);
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
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ContactForm;
