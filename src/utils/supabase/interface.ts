export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      category: {
        Row: {
          created_at: string;
          id: number;
          name: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      expenditure: {
        Row: {
          amount: number;
          category_id: number;
          created_at: string;
          date: string;
          id: number;
          note: string | null;
          user_id: string;
        };
        Insert: {
          amount: number;
          category_id: number;
          created_at?: string;
          date: string;
          id?: number;
          note?: string | null;
          user_id: string;
        };
        Update: {
          amount?: number;
          category_id?: number;
          created_at?: string;
          date?: string;
          id?: number;
          note?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'public_expenditure_category_id_fkey';
            columns: ['category_id'];
            isOneToOne: false;
            referencedRelation: 'category';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'public_expenditure_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      goal: {
        Row: {
          amount: number;
          created_at: string;
          id: number;
          user_id: string;
        };
        Insert: {
          amount?: number;
          created_at?: string;
          id?: number;
          user_id: string;
        };
        Update: {
          amount?: number;
          created_at?: string;
          id?: number;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'public_goal_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      income: {
        Row: {
          amount: number;
          created_at: string;
          date: string | null;
          id: number;
          regular: boolean;
          user_id: string;
        };
        Insert: {
          amount: number;
          created_at?: string;
          date?: string | null;
          id?: number;
          regular: boolean;
          user_id: string;
        };
        Update: {
          amount?: number;
          created_at?: string;
          date?: string | null;
          id?: number;
          regular?: boolean;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'public_income_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      regular_expenditure: {
        Row: {
          amount: number;
          category_id: number;
          created_at: string;
          id: number;
          note: string | null;
          user_id: string;
        };
        Insert: {
          amount: number;
          category_id: number;
          created_at?: string;
          id?: number;
          note?: string | null;
          user_id: string;
        };
        Update: {
          amount?: number;
          category_id?: number;
          created_at?: string;
          id?: number;
          note?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'public_regular_expenditure_category_id_fkey';
            columns: ['category_id'];
            isOneToOne: false;
            referencedRelation: 'category';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'public_regular_expenditure_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database['public']['Tables'] &
        Database['public']['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database['public']['Tables'] &
        Database['public']['Views'])
    ? (Database['public']['Tables'] &
        Database['public']['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
    ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
    ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database['public']['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof Database['public']['Enums']
    ? Database['public']['Enums'][PublicEnumNameOrOptions]
    : never;
