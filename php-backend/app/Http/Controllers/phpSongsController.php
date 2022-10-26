<?php

namespace App\Http\Controllers;

use App\Models\Songs;
use Illuminate\Http\Request;

class phpSongsController extends Controller
{

	public function getGenres()
	{
		$genres = Songs::select('select distinct genre from songs');
		return response()->json(['status' => 200, 'data' => $genres]);
	}

	public function getCount($genre)
	{
		$genreCount = Songs::select('select count(genre) from songs where genre=:gerne', ['genre' => $genre]);
		return response()->json(['status' => 200, 'data' => $genreCount]);
	}
}
