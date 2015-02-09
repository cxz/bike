class ApplicationController < ActionController::API
  before_action only: [:create, :update, :destroy] do
    doorkeeper_authorize!
  end
end
