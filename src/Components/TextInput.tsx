import { clsx } from 'clsx';
import { InputHTMLAttributes } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder?: string
}

export function TextInput(props: TextInputProps){

    return (
        <input 
            className={clsx(
                "py-4 px-3 rounded w-full bg-gray-800 text-gray-100 text-xs placeholder:text-gray-400"
            )}
            {...props}
        />
    )
}