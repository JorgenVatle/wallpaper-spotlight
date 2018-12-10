interface UnsplashImageData {
    id: string,
    created_at: string,
    updated_at: string,
    width: number,
    height: number,
    color: string,
    description: string | null,
    urls: {
        raw: string,
        full: string,
        regular: string,
        small: string,
        thumb: string,
    },
    links: {
        self: string,
        html: string,
        download: string,
        download_location: string,
    },
    categories: Array<any>,
    sponsored: boolean,
    sponsored_by: string | null,
    sponsored_impressions_id: string | null,
    likes: number,
    liked_by_user: boolean,
    current_user_collections: Array<any>,
    slug: null | string,
    user: UnsplashUser,
}

interface UnsplashUser {
    id: string,
    updated_at: string,
    username: string,
    name: string,
    first_name: string,
    last_name: string,
    twitter_username: string | null,
    portfolio_url: string | null,
    location: string,
    instagram_username: string,
    total_collections: number,
    total_likes: number,
    total_photos: number,
    accepted_tos: boolean,
    links: {
        self: string,
        html: string,
        photos: string,
        likes: string,
        portfolio: string,
        following: string,
        followers: string,
    },
    profile_image: {
        small: string,
        medium: string,
        large: string,
    },
}