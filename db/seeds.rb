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
    workouts_sold: 0,
    password: "test"
)

Client.create(
    name: "Michael Jordan", 
    email: "testemail@gmail.com", 
    age: 30, 
    total_workouts: 0,  
    weight: 235
)


Client.create(
    name: "Michael Jordan2", 
    email: "testdsemail@gmail.com", 
    age: 30, 
    total_workouts: 0, 
    weight: 235
)

Workout.create(
    name: "Leg Workout",
    date_time: 02022022,
    trainer_id: 1,
    virtual: true,
    cost: 5,
    client_id: 2,
    status: "scheduled"
    
)

puts "done seeding"