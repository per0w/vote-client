import {
  List, Map,
} from 'immutable';


export interface State extends Map<string, any>{
  vote?: {
    pair: List<string>,
    tally: Map<string, number>,
  },
}

export interface Action {
  type: string,
  state: State,
}
