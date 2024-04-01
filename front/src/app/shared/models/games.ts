export interface Games {
  id: number;
  name: string;
  summary: string;
  first_release_date: number;
  cover?: {
    url: string;
  };
}
