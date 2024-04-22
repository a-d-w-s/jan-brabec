import { ProductGalleryItemType } from './ProductGalleryEnum'

interface Gallery {
    path: string
    isMain: boolean
    type: ProductGalleryItemType
}

interface Badge {
    name: string
    backgroundColor: string | null
    textColor: string | null
}

interface Product {
    id: null
    slug: string
    name: string
    annotation: string
    mainImagePath: string | null
    code: string
    brand: {
        name: string
        imagePath: string | null
    }
    price: {
        originalPrice: number
        price: number
    }
    gallery: {
        items: Gallery[] | null
    }
    badges: {
        items: Badge[] | null
    }
    isWithAccessories: boolean
    stockAvailability: {
        maxStoredCount: number
    }
}

export type { Product, Gallery, Badge }
