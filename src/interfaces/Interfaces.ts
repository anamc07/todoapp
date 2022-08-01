export interface IToDo {
  id?: string;
  title: string;
  notes: string;
  url: string;
  date: string;
  time: string;
  priority: string;
  checked: boolean;
  completed?: any;
}

export interface TodosState {
  list: IToDo[];
}
