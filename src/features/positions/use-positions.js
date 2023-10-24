import { useSelector } from 'react-redux';
import { selectVisiblePosition } from './position-slice';
import { selectFilters } from '../filter/filter-slice';


export const usePosition = () => {
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state) => selectVisiblePosition(state, currentFilters));

  return positions;
};
