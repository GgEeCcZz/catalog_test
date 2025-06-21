export function loadFromLocalStorage<T>(key: string): T | null {
    const serialized = localStorage.getItem(key);
    if (serialized === null) {
        return null;
    }
    return JSON.parse(serialized) as T;
}

export function saveToLocalStorage<T>(key: string, value: T): void {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
}