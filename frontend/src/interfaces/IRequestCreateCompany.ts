export interface IRequestCreateCompany {
    name: string,
    city_id: number,
    cnpj: string,
    email: string,
    state_id: string,
    category_id: number,
    latitude: number,
    longitude: number,
    whatsapp_phone: string,
    representantive_user: string
    notes: string
}