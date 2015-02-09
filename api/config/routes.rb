Rails.application.routes.draw do
  #use_doorkeeper
  namespace :v1 do
    resources :stations, except: [:new]
  end
end
