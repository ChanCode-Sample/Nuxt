type obj = { title: string };
export default () => {
    const objStore = useState<obj[]>("objState", () => [
        { title: 'title1' },
        { title: 'title2' }
    ]);
    const addTitle = (title: string) => objStore.value.push({ title });
    return { objStore, addTitle };
};