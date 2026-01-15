'use client';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { UseFormReturn, FieldValues, Path } from "react-hook-form";
import { Input } from "./input";
import { Password } from "./password";

interface InputFieldProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute; 
  label: string
}

export default function InputField<T extends FieldValues>({
  form,
  name,
  placeholder,
  type = "text",
  label
}: InputFieldProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {type === "password" ? (
              <Password {...field} placeholder={placeholder} className="py-4" />
            ) : (
              <Input {...field} placeholder={placeholder} type={type} className="py-4" />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
