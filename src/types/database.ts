// Database types matching Supabase schema

export interface Profile {
    id: string;
    farm_name: string;
    phone?: string;
    created_at: string;
    updated_at: string;
}

export interface Flock {
    id: string;
    profile_id: string;
    name: string;
    animal_type: 'broiler' | 'layer' | 'fish' | 'maggot' | 'other';
    start_date: string;
    initial_count: number;
    current_count: number;
    status: 'active' | 'sold' | 'harvested' | 'ended';
    notes?: string;
    created_at: string;
    updated_at: string;
}

export interface Task {
    id: string;
    profile_id: string;
    flock_id?: string;
    title: string;
    description?: string;
    due_time: string;
    frequency: 'daily' | 'weekly' | 'monthly' | 'once';
    is_completed: boolean;
    completed_at?: string;
    completed_by?: string;
    notes?: string;
    proof_url?: string;
    created_at: string;
}

export interface Expense {
    id: string;
    profile_id: string;
    flock_id?: string;
    category: 'feed' | 'medication' | 'labor' | 'equipment' | 'utilities' | 'other';
    amount: number;
    description?: string;
    receipt_url?: string;
    date: string;
    created_at: string;
}

// Form types for creating/updating
export type CreateFlockInput = Omit<Flock, 'id' | 'profile_id' | 'created_at' | 'updated_at'>;
export type CreateTaskInput = Omit<Task, 'id' | 'profile_id' | 'created_at'>;
export type CreateExpenseInput = Omit<Expense, 'id' | 'profile_id' | 'created_at'>;
