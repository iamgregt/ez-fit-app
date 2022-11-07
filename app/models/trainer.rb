class Trainer < ApplicationRecord
    has_secure_password
    validates :password, :length => {:within => 6..40}

    has_many :workouts
    has_many :clients, through: :workouts
    has_many :comments

end
