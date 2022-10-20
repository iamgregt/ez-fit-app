class TrainerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :years_training, :location, :in_person, :virtual, :accepting_clients, :workouts_sold
end
