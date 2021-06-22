export const fetchPrices = async () => {
    const res = await fetch(
        "https://cloud-storage-prices-moberries.herokuapp.com/prices"
    );

    const data = await res.json();

    return data;
}