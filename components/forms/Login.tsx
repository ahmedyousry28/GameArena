"use client";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import FormInput from "../FormInput";
import Link from "next/link";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import Logo from "@/components/shared/Logo";
import { MotionDiv } from "@/components/framerMotionWrapper";
import { login } from "@/actions/auth";

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters" }),
});

const Login = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });
  const [isPending, startTransition] = useTransition();
  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    startTransition(async () => {
      const res = await login(data);
      if (res.success) {
        toast.success(res.success);
        redirect("/");
      } else toast.error(res.error);
    });
  };
  return (
    <MotionDiv
      animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      initial={{ opacity: 0, y: 100 }}
    >
      <div className="max-w-[1375px] w-full  px-5 md:px-10 lg:px-20 py-14 flex flex-col gap-4 items-center bg-black/60 rounded-2xl border border-input">
        <Logo />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" flex  w-full flex-col gap-6"
          >
            <FormInput name="email" label="Email" type="text" />
            <FormInput name="password" label="Password" type="password" />

            <Button disabled={isPending} type="submit">
              Submit
            </Button>
          </form>
        </Form>
        <div className="capitalize text-base font-semibold flex items-center gap-2">
          <p className=" text-gray-50 ">Do not have an account ?!</p>{" "}
          <Link className=" text-rose-500 hover:underline" href={"/signup"}>
            Register With Us Now !
          </Link>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Login;
