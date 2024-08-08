export const enviromentUrls = {
    cocktail: {
        create: `/create-cocktail`,
        update: `/update-cocktail`,
        getCocktails: `/cocktails_saved`,
        getCocktail: (id: number) =>`/getCoktailBd/${id}`,
        delete: (id: number) => `/delete-cocktail/${id}`,
        
        getCocktailsByLetter: (letter: string) => `/getCocktailsApiByLetter/${letter}`,
        getCocktailsApiById:(id:number)=> `/getCocktailsApiById/${id}`
    },
    login: {
        loginauth: `/loginauth`,
        logout: `/logout`,
    }
};