import type { Product } from '~/types/Product'

export default function (product: Product | null) {
    if (product?.gallery && Array.isArray(product?.gallery.items)) {
        return product?.gallery.items.find(item => item.isMain)
    }

    return null
}
