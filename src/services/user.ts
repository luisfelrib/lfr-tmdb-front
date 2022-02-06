import api from './api';
import authHeader from './authHeader';

interface MyListItemProps {
  tmdbId: string;
  name?: string;
  title?: string;
  release_date: string;
  poster_path: string;
  type: string;
}
export const getMyList = (): any => {
  return api.get('/user/mylist');
};
export const AddToMyList = (item: MyListItemProps): any => {
  return api.post('/user/mylist', item, { headers: authHeader() });
};
