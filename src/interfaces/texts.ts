type TRhyme = {
    rhyme: string,
    rhymes: string[]
}

type TSearches = {
    count: number,
    name: string
}

export interface IText {
    body:string,
    created: {seconds: number, nanoseconds: number},
    id: string,
    last_edited: {seconds: number, nanoseconds: number}
    name:string,
    rhymes:TRhyme[],
    searches: TSearches[],
    user_id:string,
    whole:string
}
