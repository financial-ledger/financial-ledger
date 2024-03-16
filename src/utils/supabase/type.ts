import { Database } from './interface';

export type Data<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Row'];
