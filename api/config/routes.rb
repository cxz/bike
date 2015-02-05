Rails.application.routes.draw do
  namespace :v1 do
    resources :stations, except: [:new, :edit, :destroy, :update, :create]
  end
end
