export enum TypeActionTypes {
    CHANGE_TYPE_ID = 'CHANGE_TYPE_ID',
    CHANGE_TYPE_NAME = 'CHANGE_TYPE_NAME'
}
export enum SearchActionTypes {
    CHANGE_SEARCH_TERM = 'CHANGE_SEARCH_TERM'
}

export const actions = {
    changeTypeId : (typeId: number) => ({
        type: TypeActionTypes.CHANGE_TYPE_ID as TypeActionTypes.CHANGE_TYPE_ID,
        typeId: typeId
    }),
    changeTypeName: (typeName: string) => ({
        type: TypeActionTypes.CHANGE_TYPE_NAME as TypeActionTypes.CHANGE_TYPE_NAME,
        typeName: typeName
    }),
    changeSearchTerm: (searchTerm: string) => ({
        type: SearchActionTypes.CHANGE_SEARCH_TERM as SearchActionTypes.CHANGE_SEARCH_TERM,
        searchTerm: searchTerm
    })
}

export type Actions = ReturnType<typeof actions[keyof typeof actions]>