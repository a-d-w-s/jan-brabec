export default function (stock: number) {
    if (stock === 0) {
        return `Není skladem`
    } else if (stock <= 5) {
        return `Skladem ${stock} ks`
    } else if (stock > 5) {
        return `Skladem více jak 5 ks`
    }

    return ''
}
