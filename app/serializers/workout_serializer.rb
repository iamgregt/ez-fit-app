class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :date_time, :trainer_id, :virtual, :cost
end