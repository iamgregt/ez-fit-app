class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :trainer_id, :virtual,:client_id, :client, :trainer, :created_at, :status, :comments, :day, :month, :year, :minute, :hour
end
