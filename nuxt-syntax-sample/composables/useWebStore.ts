type obj = { title: string };
export default () => {
    const titleStore = useState<obj[]>("titleState", () => []);
    const getAllTitle = async () => {
        const { data } = await useFetch<obj[]>('http://localhost:3000/api/items');
        if (data.value) {
            titleStore.value = data.value;
        }
    };
    getAllTitle();

    const addTitle = async (title: string) => {
        titleStore.value.push({title});
    }
    return { titleStore, getAllTitle, addTitle };
};