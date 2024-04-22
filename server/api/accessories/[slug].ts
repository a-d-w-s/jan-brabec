import type { Product } from '~/types/Product'

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)

    if (event.context.params && event.context.params.slug) {
        const response = await $fetch(config.public.urlApi + event.context.params.slug + '/accessories', {
            headers: {
                'accept': 'application/json',
                'X-PB-Scope': config.public.hashScopeAccessories
            }
        })

        if (response && typeof response === 'object' && 'responseContent' in response) {
            const responseContent = response.responseContent
            if (typeof responseContent === 'object' && responseContent !== null && 'items' in responseContent) {
                return responseContent.items as Product[]
            } else {
                return null
            }
        }
    } else {
        return null
    }
})
