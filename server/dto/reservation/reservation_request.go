package reservationdto

type ReservationRequest struct {
	ConsultationId int `gorm:"type: int" json:"consultationId" validate:"required"`
	PatientId      int `gorm:"type: int" json:"patientId" validate:"required"`
	DoctorId       int `gorm:"type: int" json:"doctorId" validate:"required"`
}