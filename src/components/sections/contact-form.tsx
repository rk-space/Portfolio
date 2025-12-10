"use client";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { useFormState, useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/app/actions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactCard = ({ icon, title, value, href }: { icon: React.ReactNode, title: string, value: string, href: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="bg-card border border-border rounded-xl p-5 flex items-center gap-5 transition-all duration-300 hover:border-primary hover:translate-x-2">
    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex-shrink-0 flex items-center justify-center text-2xl text-primary">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-secondary-foreground">{value}</p>
    </div>
  </a>
);

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" size="lg" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
      {!pending && <Send className="ml-2" />}
    </Button>
  );
}

export default function Contact() {
  const { toast } = useToast();
  const [state, formAction] = useFormState(submitContactForm, {
    type: "",
    message: "",
  });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.type === "success") {
      toast({
        title: "Message Sent!",
        description: state.message,
      });
      form.reset();
    } else if (state.type === "error") {
      toast({
        variant: "destructive",
        title: "Something went wrong.",
        description: state.message,
      });
    }
  }, [state, toast, form]);

  return (
    <section id="contact" className="section">
      <div className="text-center mb-16">
        <div className="font-mono text-primary text-sm font-semibold mb-4">// Let's Connect</div>
        <h2 className="text-4xl font-black mb-4">Get In Touch</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Have a project in mind? Let's work together</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-6">
          <ContactCard icon={<Mail />} title="Email" value="rushikeshkharode9@gmail.com" href="mailto:rushikeshkharode9@gmail.com" />
          <ContactCard icon={<Phone />} title="Phone" value="+91 88067 46360" href="tel:+918806746360" />
          <ContactCard icon={<MapPin />} title="Location" value="Mumbai, India" href="#" />
          <ContactCard icon={<Linkedin />} title="LinkedIn" value="Rushikesh_Kharode" href="https://www.linkedin.com/in/Rushikesh_Kharode" />
        </div>
        <div className="bg-card border border-border rounded-xl p-8">
          <Form {...form}>
            <form action={formAction} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} className="bg-secondary border-2 border-border focus:border-primary focus:ring-primary/20" />
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
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} className="bg-secondary border-2 border-border focus:border-primary focus:ring-primary/20" />
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
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell me about your project..." {...field} className="bg-secondary border-2 border-border min-h-[150px] focus:border-primary focus:ring-primary/20" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <SubmitButton />
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}