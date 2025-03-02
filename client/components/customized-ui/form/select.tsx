import React from "react"

import { cn } from "@/lib/utils"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { IFormTextInputProps } from "@/components/customized-ui/form/input"
import { ISelectOption } from "@/components/customized-ui/selects/base"

interface IFormSelectProps extends IFormTextInputProps {
  options: ISelectOption[]
  defaultValue?: string
  isDisabled?: boolean
  triggerClassName?: string
  itemClassName?: string
}

const FormSelect: React.FunctionComponent<IFormSelectProps> = ({
  control,
  name,
  label,
  placeholder,
  description,
  options,
  defaultValue,
  isDisabled,
  triggerClassName,
  itemClassName,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={defaultValue}
            value={field.value}
            disabled={isDisabled}
          >
            <FormControl>
              <SelectTrigger className={cn(triggerClassName)}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="max-h-[300px]">
              <ScrollArea>
                {options &&
                  options.length > 0 &&
                  options.map((option) => (
                    <SelectItem
                      value={option.value}
                      key={option.value}
                      className={cn(itemClassName)}
                    >
                      {option.label}
                    </SelectItem>
                  ))}
              </ScrollArea>
            </SelectContent>
          </Select>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormSelect
