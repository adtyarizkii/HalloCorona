package reservationdto

import (
	"hallo-corona-be/models"
	"time"
)

type ReservationResponse struct {
	ID        int                  				`json:"id" gorm:"primary_key:auto_increment"`
	Consultation models.ConsultationResponse	`json:"consultation" gorm:"foreignKey:ConsultationID"`
	Patient      models.UserResponse			`json:"patient"`
	Doctor      models.UserResponse				`json:"doctor"`
	CreatedAt time.Time            				`json:"-"`
	UpdatedAt time.Time            				`json:"-"`
}