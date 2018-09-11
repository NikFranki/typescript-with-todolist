// for style loader
declare module '*.css' {
    const styles: any;
    export = styles;
}

// Omit type
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;