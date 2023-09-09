export interface ICompaniesData {
    id: number,
    name: string,
    representantive_user: string,
    email: string,
    latitude: number | string
    longitude : number | string
    city: {
        id: number,
        title: string,
    },
    state: {
        id: number,
        title: string,
        letter: string
    },
    category: {
        id: number,
        name: string
    }
}