class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body
  has_one :conversations
  has_one :client
end
