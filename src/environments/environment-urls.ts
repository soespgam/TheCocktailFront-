export const enviromentUrls = {
    company: {
        create: `/create-cocktail`,
        update: (id: number) => `/update-cocktail/${id}`,
        getList: `/companies`,
        delete: (id: number) => `/delete-cocktail/${id}`
    },
    login: {
        loginauth: `/loginauth`,
        logout: `/logout`,
    }
};