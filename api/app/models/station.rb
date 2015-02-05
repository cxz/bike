class Station < ActiveRecord::Base
  enum status: [:online, :maintenance, :offline]

  validates :name, presence: true
end
