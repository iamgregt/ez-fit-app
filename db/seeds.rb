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