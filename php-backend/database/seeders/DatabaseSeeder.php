<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Songs;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            "userID"=> "4eUlzCQ7H5dck1Pm0F7AbPfUWiA2",
            "firstName"=> "admin",
            "lastName"=> "adminlast",
            "role"=> "admin",
        ]);

        User::create([
            "userID"=> "kp3HAGXrvsdO5exDvawwIaUeUAt1",
            "firstName"=> "notAdmin",
            "lastName"=> "notAdminlast",
            "role"=> "user",
        ]);

        Songs::create([
            "title"=> "Por siempre",
            "artist"=> "Quevedo",
            "album"=> "Quevedo tracks",
            "genre"=> "pop",
        ]);
        Songs::create([
            "title"=> "Chiki chiki",
            "artist"=> "Tupu",
            "album"=> "Eurovision",
            "genre"=> "jazz",
        ]);
        Songs::create([
            "title"=> "Big Poppa",
            "artist"=> "Notorius Big",
            "album"=> "Juicy",
            "genre"=> "rap",
        ]);
        Songs::create([
            "title"=> "Por siempre",
            "artist"=> "Quevedo",
            "album"=> "Quevedo tracks",
            "genre"=> "pop",
        ]);

    }
}
