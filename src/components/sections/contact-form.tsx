"use client";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FormEvent } from "react";

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

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    const mailtoLink = `mailto:rushikeshkharode9@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    window.location.href = mailtoLink;

    toast({
      title: "Success!",
      description: "Your message has been prepared in your mail client.",
    });

    e.currentTarget.reset();
  };

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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold text-foreground">Full Name</label>
              <Input id="name" name="name" type="text" placeholder="Your Name" required className="bg-secondary border-2 border-border focus:border-primary focus:ring-primary/20" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-semibold text-foreground">Email Address</label>
              <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="bg-secondary border-2 border-border focus:border-primary focus:ring-primary/20" />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 font-semibold text-foreground">Subject</label>
              <Input id="subject" name="subject" type="text" placeholder="How can I help you?" required className="bg-secondary border-2 border-border focus:border-primary focus:ring-primary/20" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-semibold text-foreground">Message</label>
              <Textarea id="message" name="message" placeholder="Tell me about your project..." required className="bg-secondary border-2 border-border min-h-[150px] focus:border-primary focus:ring-primary/20" />
            </div>
            <Button type="submit" className="w-full" size="lg">
              Send Message <Send className="ml-2" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
