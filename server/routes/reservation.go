package routes

import (
	"hallo-corona-be/handlers"
	"hallo-corona-be/pkg/middleware"
	"hallo-corona-be/pkg/mysql"
	"hallo-corona-be/repositories"

	"github.com/gorilla/mux"
)

func ReservationRoutes(r *mux.Router) {
	reservationRepository := repositories.RepositoryReservation(mysql.DB)
	h := handlers.HandlerReservation(reservationRepository)

	r.HandleFunc("/reservations", middleware.Auth(h.FindReservations)).Methods("GET")
	r.HandleFunc("/reservation", middleware.Auth(h.CreateReservation)).Methods("POST")
}