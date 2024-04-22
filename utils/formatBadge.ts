import type { Badge } from '~/types/Product'

export default function (badge: Badge) {
    if (!badge) {
        return null
    }

    return {
        backgroundColor: badge.backgroundColor || '#000',
        color: badge.textColor || '#fff'
    }
}
