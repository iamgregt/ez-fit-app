class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :date_time, :trainer_id, :virtual,:client_id, :client, :trainer, :created_at, :status, :comments
end
