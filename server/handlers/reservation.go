package handlers

import (
	"encoding/json"
	reservationdto "hallo-corona-be/dto/reservation"
	dto "hallo-corona-be/dto/result"
	"hallo-corona-be/models"
	"hallo-corona-be/repositories"
	"net/http"

	"github.com/golang-jwt/jwt/v4"
)

type handlerReservation struct {
	ReservationRepository repositories.ReservationRepository
}

func HandlerReservation(ReservationRepository repositories.ReservationRepository) *handlerReservation {
	return &handlerReservation{ReservationRepository}
}

func (h *handlerReservation) FindReservations(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	userInfo := r.Context().Value("userInfo").(jwt.MapClaims)
	userId := int(userInfo["id"].(float64))

	reservations, err := h.ReservationRepository.FindReservations(userId)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(err.Error())
	}

	var responseReservation []reservationdto.ReservationResponse
	for _, t := range reservations {
		responseReservation = append(responseReservation, convertResponseReservation(t))
	}


	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: responseReservation}
	json.NewEncoder(w).Encode(response)
}

func (h *handlerReservation) CreateReservation(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	userInfo := r.Context().Value("userInfo").(jwt.MapClaims)
	userId := int(userInfo["id"].(float64))

	var request reservationdto.ReservationRequest
	err := json.NewDecoder(r.Body).Decode(&request)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}


	reservation := models.Reservation{
		ConsultationID: request.ConsultationId,
		PatientID: userId,
		DoctorID: request.DoctorId,
	}

	newReservation, err := h.ReservationRepository.CreateReservation(reservation)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(err.Error())
		return
	}

	dataReservations, err := h.ReservationRepository.GetReservation(newReservation.ID)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(err.Error())
		return
	}

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: dataReservations}
	json.NewEncoder(w).Encode(response)
}


func convertResponseReservation(t models.Reservation) reservationdto.ReservationResponse {
	return reservationdto.ReservationResponse{
		ID:      	t.ID,
		Consultation: t.Consultation,
		Patient: t.Patient,
		Doctor: t.Doctor,
	}
}