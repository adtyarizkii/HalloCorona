package models

import "time"

type Reservation struct {
	ID             int                  `json:"id" gorm:"primary_key:auto_increment"`
	ConsultationID int                  `json:"consultation_id"`
	Consultation   ConsultationResponse `json:"consultation" gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
	PatientID      int                  `json:"patient_id"`
	Patient        UserResponse         `json:"patient"`
	DoctorID       int                  `json:"doctor_id"`
	Doctor         UserResponse         `json:"doctor"`
	CreatedAt 	   time.Time            `json:"-"`
	UpdatedAt 	   time.Time            `json:"-"`
}