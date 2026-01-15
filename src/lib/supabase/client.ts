import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
        '❌ Missing Supabase credentials!\n\n' +
        'Please add your Supabase URL and Anon Key to the .env file:\n' +
        'VITE_SUPABASE_URL=your_project_url\n' +
        'VITE_SUPABASE_ANON_KEY=your_anon_key\n\n' +
        'Get them from: https://app.supabase.com/project/YOUR_PROJECT/settings/api'
    );
}

// Validate URL format
if (!supabaseUrl.startsWith('https://')) {
    throw new Error('❌ Invalid Supabase URL. It should start with https://');
}

// Create typed Supabase client
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
    },
});

// Helper function to check if user is authenticated
export const isAuthenticated = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    return !!session;
};

// Helper function to get current user
export const getCurrentUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
};
