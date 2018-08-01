import { ElementType } from "../data/objects";

export enum TypeActionTypes {
    CHANGE_SELECTED_TYPE = 'CHANGE_SELECTED_TYPE',
    CHANGE_SELECTED_TYPE_ID = 'CHANGE_SELECTED_TYPE_ID',
}
export enum SearchActionTypes {
    CHANGE_SEARCH_TERM = 'CHANGE_SEARCH_TERM'
}

export const actions = {
    changeSelectedType: (type: ElementType) => ({
        type: TypeActionTypes.CHANGE_SELECTED_TYPE as TypeActionTypes.CHANGE_SELECTED_TYPE,
        typeFull: type
    }),
    changeSelectedTypeId: (typeId: number) => ({
        type: TypeActionTypes.CHANGE_SELECTED_TYPE_ID as TypeActionTypes.CHANGE_SELECTED_TYPE_ID,
        typeId: typeId
    }),
    changeSearchTerm: (searchTerm: string) => ({
        type: SearchActionTypes.CHANGE_SEARCH_TERM as SearchActionTypes.CHANGE_SEARCH_TERM,
        searchTerm: searchTerm
    })
}

export type Actions = ReturnType<typeof actions[keyof typeof actions]>