import { NameSpace } from '../../consts';
import { State } from '../../types/state';

export const getFilms = (state: State) => state[NameSpace.Data].filmsList;
export const getFilm = (state: State) => state[NameSpace.Data].film;
export const getSimilarFilmsList = (state: State) => state[NameSpace.Data].similarFilmsList;
export const getPromoFilm = (state: State) => state[NameSpace.Data].promoFilm;
export const getComments = (state: State) => state[NameSpace.Data].comments;
export const getLoadedDataStatus = (state: State) => state[NameSpace.Data].isDataLoaded;
