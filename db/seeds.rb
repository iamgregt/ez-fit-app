# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Trainer.create(
    first_name: "Greg",
    last_name: "Taylor",
    email: "taylor.gregory901@gmail.com",
    workouts_sold: 0,
    password: "test"
)

12.times do 
    Trainer.create(
    first_name: Faker::Name.first_name ,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.safe_email,
    workouts_sold: Faker::Number.between(from: 0, to: 40),
    password: "test",
    avatar: Faker::Avatar.image

)
end





40.times do
   

    Client.create(
        name: Faker::Name.name,
        email: Faker::Internet.email,
        age: Faker::Number.between(from: 18, to: 35),
        total_workouts: Faker::Number.between(from: 0, to: 12),
        weight: Faker::Number.between(from: 135, to: 275),
        avatar: Faker::Avatar.image

    )


end

200.times do
    Workout.create(
    name: "Leg Workout",
    date_time: 02022022,
    trainer_id: Faker::Number.between(from: 1, to: 13),
    virtual: Faker::Boolean.boolean,
    client_id: Faker::Number.between(from: 1, to: 40),
    status: "scheduled"
    
)

end

puts "done seeding"