class Message < ApplicationRecord
  belongs_to :conversations
  belongs_to :client
end
