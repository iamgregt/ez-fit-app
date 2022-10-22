# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Trainer.create(
    name: "Greg Taylor",
    email: "taylor.gregory901@gmail.com",
    years_training: 3,
    location: 38127, 
    in_person: true,
    virtual: true,
    accepting_clients: true,
    workouts_sold: 0
)

Client.create(
    name: "Michael Jordan", 
    email: "testemail@gmail.com", 
    password: "test", 
    age: 30, 
    location: 80202, 
    total_workouts: 0, 
    height: 93, 
    weight: 235
)


Client.create(
    name: "Michael Jordan2", 
    email: "testdsemail@gmail.com", 
    password: "test", 
    age: 30, 
    location: 80202, 
    total_workouts: 0, 
    height: 93, 
    weight: 235
)

puts "done seeding"