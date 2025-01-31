import { LoginForm } from "@/components/login-form";

export default function ContactForm() {
  return (
    <div className="flex h-auto md:min-h-svh flex-col items-center justify-start md:justify-center gap-6 md:p-10 bg-transparent">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <LoginForm />
      </div>
    </div>
  );
}
