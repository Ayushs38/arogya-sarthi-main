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
      Doctors: {
        Row: {
          adharcard_no: string | null
          adharcard_photocopy: string | null
          available_services: string | null
          blood_group: string | null
          certificate_number: string | null
          certificate_photocopy: string | null
          clinic_location: string | null
          completion_year: string | null
          consultation_fees: string | null
          created_at: string
          degree: string | null
          description: string | null
          first_name: string | null
          gender: string | null
          hospital_location: string | null
          id: number
          institution: string | null
          language_spoken: string | null
          last_name: string | null
          mail_id: string | null
          middle_name: string | null
          mobile_no: string | null
          specialization_service: string | null
          user_id: string | null
        }
        Insert: {
          adharcard_no?: string | null
          adharcard_photocopy?: string | null
          available_services?: string | null
          blood_group?: string | null
          certificate_number?: string | null
          certificate_photocopy?: string | null
          clinic_location?: string | null
          completion_year?: string | null
          consultation_fees?: string | null
          created_at?: string
          degree?: string | null
          description?: string | null
          first_name?: string | null
          gender?: string | null
          hospital_location?: string | null
          id?: number
          institution?: string | null
          language_spoken?: string | null
          last_name?: string | null
          mail_id?: string | null
          middle_name?: string | null
          mobile_no?: string | null
          specialization_service?: string | null
          user_id?: string | null
        }
        Update: {
          adharcard_no?: string | null
          adharcard_photocopy?: string | null
          available_services?: string | null
          blood_group?: string | null
          certificate_number?: string | null
          certificate_photocopy?: string | null
          clinic_location?: string | null
          completion_year?: string | null
          consultation_fees?: string | null
          created_at?: string
          degree?: string | null
          description?: string | null
          first_name?: string | null
          gender?: string | null
          hospital_location?: string | null
          id?: number
          institution?: string | null
          language_spoken?: string | null
          last_name?: string | null
          mail_id?: string | null
          middle_name?: string | null
          mobile_no?: string | null
          specialization_service?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Doctors_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      notes: {
        Row: {
          id: number
          title: string | null
        }
        Insert: {
          id?: number
          title?: string | null
        }
        Update: {
          id?: number
          title?: string | null
        }
        Relationships: []
      }
      Patients: {
        Row: {
          address_line_1: string | null
          address_line_2: string | null
          adharcard_no: string | null
          adharcard_photocopy: string | null
          blood_group: string | null
          city: string | null
          country: string | null
          created_at: string
          first_name: string | null
          gender: string | null
          id: number
          last_name: string | null
          mail_id: string | null
          middle_name: string | null
          mobile_no: string | null
          postal_code: string | null
          state: string | null
          user_id: string | null
        }
        Insert: {
          address_line_1?: string | null
          address_line_2?: string | null
          adharcard_no?: string | null
          adharcard_photocopy?: string | null
          blood_group?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          first_name?: string | null
          gender?: string | null
          id?: number
          last_name?: string | null
          mail_id?: string | null
          middle_name?: string | null
          mobile_no?: string | null
          postal_code?: string | null
          state?: string | null
          user_id?: string | null
        }
        Update: {
          address_line_1?: string | null
          address_line_2?: string | null
          adharcard_no?: string | null
          adharcard_photocopy?: string | null
          blood_group?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          first_name?: string | null
          gender?: string | null
          id?: number
          last_name?: string | null
          mail_id?: string | null
          middle_name?: string | null
          mobile_no?: string | null
          postal_code?: string | null
          state?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Patients_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string | null
          id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
