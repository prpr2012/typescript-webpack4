interface Human {
    name?: string;
    eat(): void;
}

export interface Pan extends Human {
    show(): void;
}
