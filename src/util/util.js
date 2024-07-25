function loadState(key) {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
            return [];
        }
        return JSON.parse(serializedState);
    }
    catch (error) {
        console.error("Local Storage Error", error);
        return [];
    }
}

export { loadState };