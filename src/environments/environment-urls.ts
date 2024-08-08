export const enviromentUrls = {
    cocktail: {
        create: `/create-cocktail`,
        update: (id: number) => `/update-cocktail/${id}`,
        getCocktails: `/getCocktails`,
        delete: (id: number) => `/delete-cocktail/${id}`,
        
        getCocktailsByLetter: (letter: string) => `/getCocktailsApiByLetter/${letter}`,
        getCocktailsApiById:(id:number)=> `/getCocktailsApiById/${id}`
    },
    login: {
        loginauth: `/loginauth`,
        logout: `/logout`,
    }
};