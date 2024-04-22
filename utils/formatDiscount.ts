import type { Product } from '~/types/Product'

export default function (originalPrice: number, price: number) {
    const discountPercentage = ((originalPrice - price) / originalPrice) * 100

    return Math.round(discountPercentage * 100) / 100 + '%'
}
