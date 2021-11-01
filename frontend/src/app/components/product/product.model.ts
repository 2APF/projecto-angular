/**
 * Interface e para colocar os atributos do crud
 * ? => quer dizer que o atributo nao e obrigatorio
 */

export interface Product {
    id: number
    name: string
    price?: number | null
}

