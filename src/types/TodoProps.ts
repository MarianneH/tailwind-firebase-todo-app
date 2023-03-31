export interface TodoProps {
  isDone: boolean;
  todo: string;
  timeStamp: {
    seconds: number;
  };
  id: string;
  urgent: boolean;
  important: boolean;
  daily: boolean;
}
