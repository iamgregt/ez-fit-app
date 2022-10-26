Rails.application.routes.draw do
  resources :comments
  resources :workouts
  get "/clients/clientcount", to: "clients#clients"
  resources :clients
  resources :trainers
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  get "/clients/clientcount", to: "clients#clients"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
