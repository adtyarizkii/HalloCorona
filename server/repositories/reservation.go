package repositories

import (
	"hallo-corona-be/models"

	"gorm.io/gorm"
)

type ReservationRepository interface {
	FindReservations(ID int) ([]models.Reservation, error)
	GetReservation(ID int) (models.Reservation, error)
	GetOneReservation(ID string) (models.Reservation, error) // Declare GetOneReservation repository method ...
	CreateReservation(reservations models.Reservation) (models.Reservation, error)
}

func RepositoryReservation(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindReservations(ID int) ([]models.Reservation, error) {
	var reservations []models.Reservation
	err := r.db.Preload("Consultation").Preload("Consultation.User").Preload("Patient").Preload("Doctor").Find(&reservations, "patient_id = ?", ID).Error

	return reservations, err
}

func (r *repository) GetReservation(ID int) (models.Reservation, error) {
	var reservations models.Reservation
	err := r.db.Preload("Consultation").Preload("Consultation.User").Preload("Patient").Preload("Doctor").Find(&reservations, "id = ?", ID).Error

	return reservations, err
}

// GetOneTransaction method here ...
func (r *repository) GetOneReservation(ID string) (models.Reservation, error) {
	var reservation models.Reservation
	err := r.db.Preload("Consultation").Preload("Consultation.User").Preload("Patient").Preload("Doctor").First(&reservation, "id = ?", ID).Error

	return reservation, err
}

func (r *repository) CreateReservation(reservations models.Reservation) (models.Reservation, error) {
	err := r.db.Preload("Consultation").Preload("Consultation.User").Preload("Patient").Preload("Doctor").Create(&reservations).Error

	return reservations, err
}