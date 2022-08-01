import { Props } from 'components/app/TasksContainer';
import { useSelector } from 'react-redux';

export function useTodosSelector() {
  const list = useSelector((state: Props) => state.todos?.list);
  const completed = list?.filter((todo: any) => todo.checked === true);
  const active = list?.filter((todo: any) => todo.checked !== true);
  const completedIds = completed?.map((todo: any) => todo.id);
  return [list, active, completed, completedIds];
}
