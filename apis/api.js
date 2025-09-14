// this api use for static and client side we use this for static page and butoon component
export async function getCatFacts() {
    const res = await fetch('https://catfact.ninja/fact')
    return res.json();
}
