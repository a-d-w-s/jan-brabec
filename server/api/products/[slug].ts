import type { Product } from '~/types/Product'

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)

    if (event.context.params && event.context.params.slug) {
        const response = await $fetch(config.public.urlApi + event.context.params.slug, {
            headers: {
                'accept': 'application/json',
                'X-PB-Scope': config.public.hashScopeProduct
            }
        })

        if (response && typeof response === 'object' && 'responseContent' in response) {
            const responseContent = response.responseContent
            if (typeof responseContent === 'object' && responseContent !== null && 'id' in responseContent) {
                return responseContent as Product
            } else {
                throw new Error('Invalid response from API')
            }
        }
    } else {
        throw new Error('Missing slug parameter')
    }
})
