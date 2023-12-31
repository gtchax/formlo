"use client";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters",
  }),
  questions: z
    .array(
      z.object({
        label: z.string().min(1, { message: "Can't leave this field empty" }),
        input: z.string(),
      })
    )
    .optional(),
});

const InputForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You successfully added a new field",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const { fields, append } = useFieldArray({
    name: "questions",
    control: form.control,
  });
  return (
    <div className="mx-48 my-24">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-8"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="!space-y-0">
                <FormControl>
                  <Input
                    placeholder="Type form title"
                    className="input"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => {
              append({
                label: "",
                input: "",
              });
            }}
          >
            Add Question
          </Button>
          {fields.map((field, index) => (
            <div key={field.id}>
              <FormField
                control={form.control}
                key={field.id}
                name={`questions.${index}.label`}
                render={({ field }) => (
                  <FormItem className="!space-y-0">
                    <FormControl>
                      <Input
                        placeholder="Type a question"
                        className="input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                key={field.id}
                name={`questions.${index}.input`}
                render={({ field }) => (
                  <FormItem className="!space-y-0">
                    <FormControl>
                      <Input
                        placeholder="Type placeholder text"
                        className="leading-7 text-muted-foreground [&:not(first-child)]:mt-6"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default InputForm;
