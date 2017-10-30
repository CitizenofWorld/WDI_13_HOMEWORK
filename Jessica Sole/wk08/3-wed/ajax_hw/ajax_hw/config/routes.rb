Rails.application.routes.draw do
  resources :movies

  get '/api/movies', to: 'api/movies#index'
  post '/api/movies/id', to: 'api/movies#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
