import userSWR from 'swr'

import fetcher from '../libs/fetcher'

export default function useCurrentUser() {
    const { data, error, isLoading, mutate } = userSWR('api/current', fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
}

//../src/pages/api/current