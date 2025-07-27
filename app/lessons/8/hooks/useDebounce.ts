"use client"

import { useEffect, useRef, useState } from "react";

const useDebounce = <T>(value: T, delay: number): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
    const timeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (timeRef.current) {
            clearTimeout(timeRef.current);
        }

        timeRef.current = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            if (timeRef.current) {
                clearTimeout(timeRef.current);
            }
        }
    }, [value, delay])

    return debouncedValue;
}

export default useDebounce;