Rails.application.routes.draw do
  get "/trainers/:trainer_id/workouts-count", to: "trainers#workout_count"
  get "/trainers/top-sellers", to: "trainers#top_sellers"
  resources :comments
  resources :workouts
  get "/me", to: "trainers#show"
  get "/clients/clientcount", to: "clients#clients"
  resources :clients
  resources :trainers do
    resources :workouts, only: [:show, :index]
  end
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
