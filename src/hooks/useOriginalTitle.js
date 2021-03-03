import { useState, useEffect } from 'react';

export function useOriginalTitle() {
    const [originalTitle, setOriginalTitle] = useState(document.title)

    useEffect(() => {
        setOriginalTitle(document.title);

        return () => {
            document.title = originalTitle
        }
    }, [])
}
