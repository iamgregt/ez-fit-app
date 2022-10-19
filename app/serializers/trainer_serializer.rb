class TrainerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :years_training, :certifications, :location, :in_person, :virtual, :accepting_client, :workouts_sold
end
