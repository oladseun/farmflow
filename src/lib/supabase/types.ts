// Supabase Database type definition
// This is a simplified version - you can generate the full types using Supabase CLI

export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            profiles: {
                Row: {
                    id: string
                    farm_name: string
                    phone: string | null
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id: string
                    farm_name?: string
                    phone?: string | null
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    farm_name?: string
                    phone?: string | null
                    created_at?: string
                    updated_at?: string
                }
            }
            flocks: {
                Row: {
                    id: string
                    profile_id: string
                    name: string
                    animal_type: 'broiler' | 'layer' | 'fish' | 'maggot' | 'other'
                    start_date: string
                    initial_count: number
                    current_count: number
                    status: 'active' | 'sold' | 'harvested' | 'ended'
                    notes: string | null
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id?: string
                    profile_id: string
                    name: string
                    animal_type: 'broiler' | 'layer' | 'fish' | 'maggot' | 'other'
                    start_date?: string
                    initial_count?: number
                    current_count?: number
                    status?: 'active' | 'sold' | 'harvested' | 'ended'
                    notes?: string | null
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    profile_id?: string
                    name?: string
                    animal_type?: 'broiler' | 'layer' | 'fish' | 'maggot' | 'other'
                    start_date?: string
                    initial_count?: number
                    current_count?: number
                    status?: 'active' | 'sold' | 'harvested' | 'ended'
                    notes?: string | null
                    created_at?: string
                    updated_at?: string
                }
            }
            tasks: {
                Row: {
                    id: string
                    profile_id: string
                    flock_id: string | null
                    title: string
                    description: string | null
                    due_time: string
                    frequency: 'daily' | 'weekly' | 'monthly' | 'once'
                    is_completed: boolean
                    completed_at: string | null
                    completed_by: string | null
                    notes: string | null
                    proof_url: string | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    profile_id: string
                    flock_id?: string | null
                    title: string
                    description?: string | null
                    due_time?: string
                    frequency?: 'daily' | 'weekly' | 'monthly' | 'once'
                    is_completed?: boolean
                    completed_at?: string | null
                    completed_by?: string | null
                    notes?: string | null
                    proof_url?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    profile_id?: string
                    flock_id?: string | null
                    title?: string
                    description?: string | null
                    due_time?: string
                    frequency?: 'daily' | 'weekly' | 'monthly' | 'once'
                    is_completed?: boolean
                    completed_at?: string | null
                    completed_by?: string | null
                    notes?: string | null
                    proof_url?: string | null
                    created_at?: string
                }
            }
            expenses: {
                Row: {
                    id: string
                    profile_id: string
                    flock_id: string | null
                    category: 'feed' | 'medication' | 'labor' | 'equipment' | 'utilities' | 'other'
                    amount: number
                    description: string | null
                    receipt_url: string | null
                    date: string
                    created_at: string
                }
                Insert: {
                    id?: string
                    profile_id: string
                    flock_id?: string | null
                    category: 'feed' | 'medication' | 'labor' | 'equipment' | 'utilities' | 'other'
                    amount: number
                    description?: string | null
                    receipt_url?: string | null
                    date?: string
                    created_at?: string
                }
                Update: {
                    id?: string
                    profile_id?: string
                    flock_id?: string | null
                    category?: 'feed' | 'medication' | 'labor' | 'equipment' | 'utilities' | 'other'
                    amount?: number
                    description?: string | null
                    receipt_url?: string | null
                    date?: string
                    created_at?: string
                }
            }
        }
        Views: {}
        Functions: {}
        Enums: {}
    }
}
