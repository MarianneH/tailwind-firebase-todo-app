export interface TodoProps {
  isDone: boolean;
  todo: string;
  timeStamp: {
    seconds: number;
  };
  id: string;
}
