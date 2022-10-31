class Client < ApplicationRecord

    validates :email, uniqueness: true
    has_many :workouts
    has_many :trainers, through: :workouts
end
