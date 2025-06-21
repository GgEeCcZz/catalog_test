export type Product = {
    id: number;
    name: string;
    price: number;
    img: string;
    type: string;
    category: string;
}

export type GetProductsParams = {
    category?: string;
    page?: number;
    perPage?: number;
    sortField?: string;
}

export type ServerResponse = {
    data: Product[];
    first: number;
    items: number;
    last: number;
    next: number | null;
    pages: number;
    prev: number | null;
}

export type TransformServerResponse = {
    data: Product[];
    firstPage: number;
    totalCount: number;
    lastPage: number;
    nextPage: number | null;
    totalPages: number;
    prevPage: number | null;
}

export type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
}